// TODO: zoom
import React, { useMemo, useState, useCallback } from 'react';
import * as Recharts from 'recharts';
import jsonStableStringify from 'json-stable-stringify';
import { cloneDeep, flatten, unionBy, uniq } from 'lodash';
import { RechartsChartBase } from '../../base/chart-base';
import { deepFind, isSeriesEmpty } from '../../../helpers/utils';
import { renderSimpleXAxis } from '../../../recharts/x-axis';
import { renderYAxis } from '../../../recharts/y-axis';
import { renderTooltip } from '../../../recharts/tooltip';
import { renderReferenceLine } from '../../../recharts/reference-line';
import renderReferenceDot from '../../../recharts/reference-dot';
import renderComposingScatter from '../../../recharts/composing-scatter';
import { renderReferenceAreas } from '../../../recharts/reference-area';
import renderPredictionLine from '../../../recharts/prediction-line';
import { renderLegend } from '../../../recharts/legend';
import { getColorGenerator } from '../../../helpers/colors';
import { parseInterpolation } from '../../../helpers/interpolation';
import { normalizeFormatter } from '../../../helpers/formatter';
import { useFilteredSeries } from '../../../helpers/hooks';

function getSorter(labelIsDate = false, labelKey: any) {
  return (arr: any) => {
    if (labelIsDate) {
      // @ts-expect-error ts-migrate(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      arr.sort((a: any, b: any) => new Date(a[labelKey]) - new Date(b[labelKey]));
    } else {
      arr.sort((a: any, b: any) => a[labelKey] - b[labelKey]);
    }
    return arr;
  };
}

const MultipleSeriesLineChart = ({
  series,
  filteredSeries = [],
  setFilteredSeries,
  configurations,
  empty,
  emptyContent,
}: any) => {
  const {
    seriesDataKey = 'data',
    seriesNameKey = 'name',
    seriesNameFormatter,
    legend = {
      enabled: true,
      align: 'center',
      verticalAlign: 'top',
    },
    cartesianGrid = {
      horizontal: true,
      vertical: true,
    },
    cartesianGridStyle = {
      strokeDasharray: '3 3',
      stroke: '#F1F1F1',
    },
    connectNulls = false,
    composingScatters = [],
    labelKey,
    serieKeyGetter,
    labelFormatter: labelFormatter0,
    labelTickFormatter,
    margin = { top: 5, right: 5, bottom: 5, left: 5 },
    pointLabelRenderer = false,
    valueKey = 'value',
    valueFormatter: valueFormatter0,
    rowNameFormatter: rowNameFormatter0,
    interpolationType = 'monotone',
    xAxis = {
      axisLine: true,
      name: '',
      fillGaps: false,
    },
    yAxis = {
      axisLine: true,
      name: '',
    },
    xTickCount = 7,
    referenceLines = [],
    referenceAreas = [],
    referenceDots = [],
    getRefPredictionLine = () => false,
    onClick,
    yDomain,
    renderDot = false, // false or function
  } = configurations;

  // eslint-disable-next-line max-len
  const [filteredSeriesSet, setFilteredSeriesSet] = useFilteredSeries(filteredSeries, setFilteredSeries);

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
  }, [setTooltipTrigger]);

  const colorGenerator = getColorGenerator();

  // NOTE(Leto): this is an unstable rough solution for an emergent feature, needs test
  const seriesWithoutGaps = useMemo(() => {
    if (!xAxis.fillGaps) {
      return series;
    }

    // find out all labels
    const flattend = flatten(series.map((s: any) => s[seriesDataKey]));
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    const labels = uniq(flattend.map((item) => item[labelKey]));
    const labelIsDate = typeof new Date(labels[0]).getTime === 'function';
    const sorter = getSorter(labelIsDate, labelKey);

    // build empty valued data for filling gaps
    const templates = labels.map((label) => ({
      [labelKey]: label,
      [valueKey]: 0,
    }));

    // fill gaps for each series
    const ret = cloneDeep(series);
    ret.forEach((s: any) => {
      s[seriesDataKey] = sorter(unionBy(s[seriesDataKey], templates, (item) => item[labelKey]));
    });
    return ret;
  }, [series, xAxis.fillGaps]);

  const stringSeries = jsonStableStringify(seriesWithoutGaps);

  const wholeSeries = useMemo(() => {
    return seriesWithoutGaps.map((s: any, index: any) => {
      const name = seriesNameFormatter ? seriesNameFormatter(s) : deepFind(s, seriesNameKey, '$.');
      return {
        ...s,
        key: serieKeyGetter ? serieKeyGetter(s) : index,
        name,
        color: s.color ?? colorGenerator.next().value,
      };
    });
  }, [stringSeries]);

  const labelFormatter = normalizeFormatter(labelFormatter0 || {});
  const valueFormatter = normalizeFormatter(valueFormatter0 || {});
  const rowNameFormatter = normalizeFormatter(rowNameFormatter0 || {});

  const frontReferenceLines = referenceLines.filter((line: any) => line.renderOnTop);
  const rearReferenceLines = referenceLines.filter((line: any) => !line.renderOnTop);

  // eslint-disable-next-line max-len
  const seriesEmpty = useMemo(isSeriesEmpty(seriesWithoutGaps, seriesDataKey, valueKey), [stringSeries]);
  if (typeof empty === 'undefined') {
    empty = seriesEmpty;
  }

  const xPoints = React.useMemo(() => {
    if (!Array.isArray(wholeSeries) || wholeSeries.length === 0) {
      return [];
    }
    try {
      const sampleSeries = wholeSeries[0][seriesDataKey];
      return sampleSeries.map((s: any) => s[labelKey]);
    } catch (error) {
      return [];
    }
  }, [wholeSeries, seriesDataKey, labelKey]);

  const tooltip = React.useMemo(() => {
    const tooltip = {
      rowNameFormatter,
      labelFormatter,
      valueFormatter,
      trigger: tooltipTrigger,
    };
    if (configurations.tooltip) {
      Object.assign(tooltip, configurations.tooltip);
    }
    return tooltip;
  }, [rowNameFormatter, labelFormatter, valueFormatter, tooltipTrigger, configurations]);

  return (
    <RechartsChartBase empty={empty} emptyContent={emptyContent}>
      <Recharts.ComposedChart
        onClick={toggleTooltipTrigger}
        // onMouseMove={resetTooltipTrigger}
        onMouseLeave={resetTooltipTrigger}
        margin={margin}
      >
        <Recharts.CartesianGrid {...cartesianGridStyle} {...cartesianGrid} />
        {renderSimpleXAxis({
          // vertical: true,
          interval: 0,
          formatter: labelTickFormatter ?? labelFormatter,
          tickCount: xTickCount,
          ...xAxis,
          dataKey: labelKey,
          points: xPoints,
        })}
        {renderYAxis({
          ...yAxis,
          formatter: valueFormatter,
          domain: yDomain,
        })}
        {renderTooltip({ ...configurations, tooltip })}
        {legend.enabled &&
          renderLegend({
            legend,
            series: wholeSeries,
            filteredSeries: filteredSeriesSet,
            setFilteredSeries: setFilteredSeriesSet,
          })}
        {referenceAreas.map((item: any) => renderReferenceAreas(item))}
        {rearReferenceLines.map((item: any, index: any) => {
          return renderReferenceLine({ key: item.key ?? index, ...item });
        })}
        {wholeSeries.map((s: any) => {
          if (filteredSeriesSet.has(s.name) || filteredSeriesSet.has(s.id)) {
            return null;
          }

          return (
            <Recharts.Line
              isAnimationActive={false}
              key={s.key}
              name={s.name}
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              data={s[seriesDataKey]}
              type={parseInterpolation(interpolationType)}
              dataKey={valueKey}
              stroke={s.color}
              strokeWidth={2}
              dot={renderDot}
              label={pointLabelRenderer}
              connectNulls={connectNulls}
            />
          );
        })}

        {wholeSeries.map((s: any) => {
          if (filteredSeriesSet.has(s.name) || filteredSeriesSet.has(s.id)) {
            return null;
          }

          const refPredictionLine = getRefPredictionLine(s);
          if (!refPredictionLine || !refPredictionLine.enabled) {
            return null;
          }

          const config = {
            data: s[seriesDataKey],
            labelKey,
            valueKey,
            ...refPredictionLine,
          };
          return renderPredictionLine(config, filteredSeriesSet);
        })}
        {frontReferenceLines.map((item: any, index: any) => {
          return renderReferenceLine({ key: item.key ?? index, ...item });
        })}
        {composingScatters.map((item: any) => renderComposingScatter(item))}
        {referenceDots.map((item: any) => renderReferenceDot({ ...item }))}
      </Recharts.ComposedChart>
    </RechartsChartBase>
  );
};
export default MultipleSeriesLineChart;
