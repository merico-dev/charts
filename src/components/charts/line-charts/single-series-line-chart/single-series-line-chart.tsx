// TODO: zoom
import React, { useMemo, useState, useCallback } from 'react';
import * as Recharts from 'recharts';
import { RechartsChartBase } from '../../base/chart-base';
import { isSeriesEmpty } from '../../../helpers/utils';
import { renderSimpleXAxis } from '../../../recharts/x-axis';
import { renderYAxis } from '../../../recharts/y-axis';
import { renderTooltip } from '../../../recharts/tooltip';
import { renderReferenceLine } from '../../../recharts/reference-line';
import renderReferenceDot from '../../../recharts/reference-dot';
import renderComposingScatter from '../../../recharts/composing-scatter';
import { renderReferenceAreas } from '../../../recharts/reference-area';
import renderRegressionLine from '../../../recharts/regression-line';
import renderPredictionLine from '../../../recharts/prediction-line';
import { getColorGenerator } from '../../../helpers/colors';
import { parseInterpolation } from '../../../helpers/interpolation';
import { normalizeFormatter } from '../../../helpers/formatter';

const SingleSeriesLineChart = ({ data, definitions = [], configurations, empty, emptyContent }: any) => {
  const {
    withLegend = false,
    cartesianGrid = {
      horizontal: true,
      vertical: true,
    },
    cartesianGridStyle = {
      strokeDasharray: '3 3',
      stroke: '#F1F1F1',
    },
    connectNulls = false,
    labelKey,
    labelFormatter: labelFormatter0,
    margin = { top: 5, right: 5, bottom: 5, left: 5 },
    pointLabelRenderer = false,
    valueKey = 'value',
    valueFormatter: valueFormatter0,
    interpolationType = 'monotone',
    strokeColor = '#CA4521',
    refInterpolationType,
    refInterpolationColor = '#3b6efd',
    refRegressionType,
    refRegressionColor = '#3b6efd',
    refRegressionDashArray = '3',
    refRegressionLimit,
    refPredictionLine = {
      type: '',
      color: '#3b6efd',
      strokeDashArray: '3',
    },
    xAxis = {
      axisLine: true,
      name: '',
    },
    yAxis = {
      axisLine: true,
      name: '',
    },
    xTickCount = 7,
    referenceLines = [],
    referenceAreas = [],
    referenceDots = [],
    extraAreas = [],
    onClick,
    yDomain,
    renderDot = false, // false or function
    renderActiveDot = false, // false or function
    composingScatters = [],
  } = configurations;

  const [tooltipTrigger, setTooltipTrigger] = useState<'hover' | 'click'>('hover');
  const toggleTooltipTrigger = (e: any) => {
    if (!onClick) {
      return;
    }
    setTooltipTrigger(tooltipTrigger === 'hover' ? 'click' : 'hover');
    onClick && onClick(e);
  };
  const resetTooltipTrigger = useCallback(() => {
    if (!onClick) {
      return;
    }
    setTooltipTrigger('hover');
  }, [setTooltipTrigger, onClick]);

  const colorGenerator = getColorGenerator(strokeColor);
  const useRefInterpolationLine = !!refInterpolationType;
  const labelFormatter = normalizeFormatter(labelFormatter0 || {});
  const valueFormatter = normalizeFormatter(valueFormatter0 || {});

  const frontReferenceLines = referenceLines.filter((line: any) => line.renderOnTop);
  const rearReferenceLines = referenceLines.filter((line: any) => !line.renderOnTop);

  const seriesEmpty = useMemo(isSeriesEmpty(data, null, valueKey), [data]);
  if (typeof empty === 'undefined') {
    empty = seriesEmpty;
  }

  const xPoints = React.useMemo(() => data.map((s: any) => s[labelKey]), [data]);

  const tooltip = React.useMemo(() => {
    const tooltip = {
      labelFormatter,
      valueFormatter,
      trigger: tooltipTrigger,
    };
    if (configurations.tooltip) {
      Object.assign(tooltip, configurations.tooltip);
    }
    return tooltip;
  }, [labelFormatter, valueFormatter, tooltipTrigger, configurations]);

  return (
    <RechartsChartBase empty={empty} emptyContent={emptyContent}>
      <Recharts.ComposedChart
        onClick={toggleTooltipTrigger}
        // onMouseMove={resetTooltipTrigger}
        onMouseLeave={resetTooltipTrigger}
        margin={margin}
      >
        <defs>
          {/* @ts-expect-error ts-migrate(7006) FIXME: Parameter 'renderer' implicitly has an 'any' type. */}
          {definitions.map((renderer) => renderer())}
        </defs>
        <Recharts.CartesianGrid {...cartesianGridStyle} {...cartesianGrid} />
        {renderSimpleXAxis({
          // vertical: true,
          interval: 0,
          formatter: labelFormatter,
          tickCount: xTickCount,
          ...xAxis,
          dataKey: labelKey,
          points: xPoints,
        })}
        {renderYAxis({
          formatter: valueFormatter,
          ...yAxis,
          domain: yDomain,
        })}
        {renderTooltip({ ...configurations, tooltip })}
        {withLegend && <Recharts.Legend />}
        {referenceAreas.map((item: any) => renderReferenceAreas(item))}
        {rearReferenceLines.map((item: any, index: any) => {
          return renderReferenceLine({ key: item.key ?? index, ...item });
        })}
        <Recharts.Line
          isAnimationActive={false}
          key={valueKey}
          name={yAxis.name}
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          data={data}
          type={parseInterpolation(interpolationType)}
          dataKey={valueKey}
          stroke={colorGenerator.next().value}
          strokeWidth={2}
          dot={renderDot}
          activeDot={renderActiveDot}
          label={pointLabelRenderer}
          connectNulls={connectNulls}
        />
        {useRefInterpolationLine && (
          <Recharts.Line
            isAnimationActive={false}
            name="refInterpolation"
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            data={data}
            type={parseInterpolation(refInterpolationType)}
            dataKey={valueKey}
            stroke={refInterpolationColor}
            strokeWidth={2}
            dot={false}
          />
        )}
        {renderRegressionLine({
          data,
          labelKey,
          valueKey,
          type: refRegressionType,
          color: refRegressionColor,
          strokeDashArray: refRegressionDashArray,
          limit: refRegressionLimit,
        })}
        {renderPredictionLine({
          data,
          labelKey,
          valueKey,
          ...refPredictionLine,
        })}
        {extraAreas.map(({ isAnimationActive = false, stroke = 'red', fill = 'red', name }: any) => (
          <Recharts.Area
            key={name ?? valueKey}
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            data={data}
            type={parseInterpolation(interpolationType)}
            dataKey={valueKey}
            fill={fill}
            stroke={stroke}
            isAnimationActive={isAnimationActive}
            dot={false}
            activeDot={false}
            name={name ?? valueKey}
          />
        ))}
        {frontReferenceLines.map((item: any, index: any) => {
          return renderReferenceLine({ key: item.key ?? index, ...item });
        })}
        {composingScatters.map((item: any) => renderComposingScatter(item))}
        {referenceDots.map((item: any) => renderReferenceDot({ ...item }))}
      </Recharts.ComposedChart>
    </RechartsChartBase>
  );
};
export default SingleSeriesLineChart;
