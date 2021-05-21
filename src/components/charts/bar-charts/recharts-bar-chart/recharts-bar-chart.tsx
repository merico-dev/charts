// TODO: zoom
import React, { useMemo } from 'react';
import * as Recharts from 'recharts';
import { RechartsChartBase } from '../../base/chart-base';
import { renderSimpleXAxis } from '../../../recharts/x-axis';
import { renderYAxis } from '../../../recharts/y-axis';
import { renderTooltip } from '../../../recharts/tooltip';
import { renderReferenceLine } from '../../../recharts/reference-line';
import { renderReferenceAreas } from '../../../recharts/reference-area';
import { renderBrush } from '../../../recharts/brush';
import { renderLegend } from '../../../recharts/legend';
import { getColorGenerator } from '../../../helpers/colors';
import { normalizeFormatter } from '../../../helpers/formatter';
import { useFilteredSeries } from '../../../helpers/hooks';
import { getBarLabelRenderer } from '../../../recharts/label/bar';

function xAxisWithTranpose({
  xTickCount,
  xAxis = {},
  yAxis,
  labelKey,
  formatter,
  valueFormatter,
  transposed,
  yDomain,
  getCustomTick,
  xPoints,
}: any) {
  if (!transposed) {
    return renderSimpleXAxis({
      allowDuplicatedCategory: true,
      vertical: true,
      formatter,
      tickCount: xTickCount,
      ...xAxis,
      dataKey: labelKey,
      getCustomTick,
      points: xPoints,
      scale: 'band', // https://github.com/recharts/recharts/issues/2122
    });
  }
  return renderSimpleXAxis({
    type: 'number',
    orientation: 'top',
    formatter: valueFormatter,
    ...yAxis,
    domain: yDomain,
  });
}

function yAxisWithTranspose({
  xAxis,
  yAxis,
  labelKey,
  formatter,
  valueFormatter,
  transposed,
  yDomain,
  getCustomTick,
}: any) {
  if (!transposed) {
    return renderYAxis({
      ...yAxis,
      formatter: valueFormatter,
      domain: yDomain,
      getCustomTick,
    });
  }
  return renderYAxis({
    type: 'category',
    ...xAxis,
    vertical: true,
    dataKey: labelKey,
    formatter,
    scale: 'band',
    interval: 0,
    getCustomTick,
  });
}

function getBarRenderer(conf: any) {
  return function barRenderer(entry: any, index: any) {
    let fill = conf.fill;
    if (typeof conf.fill === 'function') {
      fill = conf.fill(conf, entry);
    }
    return <Recharts.Cell key={`cell-${index}`} fill={fill} />;
  };
}

function RechartsBarChart({
  data,
  filteredSeries = [],
  setFilteredSeries,
  configurations,
  empty = false,
  emptyContent,
}: any) {
  const {
    getCustomTick = false,
    brush = {
      enabled: false,
    },
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
    composingLines = [],
    xAxis = {
      axisLine: true,
      tickTextColor: null,
      name: '',
    },
    xTickCount,
    yAxis = {
      axisLine: true,
      tickTextColor: null,
      name: '',
    },
    additionalYAxis,
    labelKey = 'date',
    labelFormatter,
    labelTickFormatter,
    margin = { top: 5, right: 5, bottom: 5, left: 5 },
    subSeriesConfiguration = [{ dataKey: 'value', label: 'Value' }], // sub-series
    valueFormatter,
    referenceLines = [],
    referenceAreas = [],
    stackOffset = 'none',
    transposed = false,
    yDomain = [0, 'auto'],
  } = configurations;

  // eslint-disable-next-line max-len
  const [filteredSeriesSet, setFilteredSeriesSet] = useFilteredSeries(filteredSeries, setFilteredSeries);
  const colorGenerator = getColorGenerator();

  const subSeries = useMemo(() => {
    return subSeriesConfiguration.map(
      ({ label, valueLabel, dataKey, fill = colorGenerator.next().value, stackId, barSize, borderRadius }: any) => {
        return {
          key: dataKey,
          label,
          valueLabel,
          name: label,
          dataKey,
          fill,
          color: fill,
          stackId,
          barSize,
          borderRadius,
        };
      }
    );
  }, [data, subSeriesConfiguration]);

  const normalizedLabelFormatter = normalizeFormatter(labelFormatter);
  const normalizedValueFormatter = normalizeFormatter(valueFormatter);

  const xPoints = React.useMemo(() => data.map((s: any) => s[labelKey]), [data]);

  const axisProps = {
    xTickCount,
    xPoints,
    dataLength: data.length,
    transposed,
    labelKey,
    yDomain,
    formatter: labelTickFormatter ?? normalizedLabelFormatter,
    valueFormatter: normalizedValueFormatter,
    xAxis,
    yAxis,
    getCustomTick,
  };

  const frontReferenceLines = referenceLines.filter((line: any) => line.renderOnTop);
  const rearReferenceLines = referenceLines.filter((line: any) => !line.renderOnTop);
  return (
    <RechartsChartBase empty={empty} emptyContent={emptyContent}>
      <Recharts.ComposedChart
        data={data}
        layout={transposed ? 'vertical' : 'horizontal'}
        margin={margin}
        stackOffset={stackOffset}
      >
        <Recharts.CartesianGrid {...cartesianGridStyle} {...cartesianGrid} />
        {renderTooltip(configurations)}
        {legend.enabled &&
          renderLegend({
            legend,
            series: subSeries,
            filteredSeries: filteredSeriesSet,
            setFilteredSeries: setFilteredSeriesSet,
          })}
        {referenceAreas.map((item: any) => renderReferenceAreas(item))}
        {rearReferenceLines.map((item: any, index: any) => {
          return renderReferenceLine({ key: item.key ?? index, ...item });
        })}
        {subSeries.map((item: any) => {
          const { label, valueLabel = { enabled: false }, barSize = 20, yAxisId = 0, borderRadius = 0, ...rest } = item;

          if (filteredSeriesSet.has(label)) {
            return null;
          }

          // eslint-disable-next-line max-len
          const renderLabelContent = getBarLabelRenderer(
            transposed,
            valueLabel.formatter ?? normalizedValueFormatter,
            valueLabel
          );
          return (
            <Recharts.Bar
              key={item.key ?? label}
              yAxisId={yAxisId}
              isAnimationActive={false}
              barSize={barSize}
              radius={borderRadius}
              {...rest}
            >
              {/* @ts-expect-error ts-migrate(2741) FIXME: Property 'data' is missing in type '{ dataKey: any... Remove this comment to see the full error message */}
              <Recharts.LabelList
                dataKey={valueLabel.dataKey}
                valueAccessor={valueLabel.valueAccessor}
                content={renderLabelContent}
              />
              {data.map(getBarRenderer(item))}
            </Recharts.Bar>
          );
        })}
        {xAxisWithTranpose(axisProps)}
        {yAxisWithTranspose(axisProps)}
        {additionalYAxis && renderYAxis(additionalYAxis)}
        {composingLines.map(({ key, ...rest }: any) => (
          <Recharts.Line
            key={key ?? rest.label}
            yAxisId={yAxis?.yAxisId ?? 0}
            isAnimationActive={false}
            strokeWidth={2}
            label={null}
            {...rest}
          />
        ))}
        {frontReferenceLines.map((item: any, index: any) => {
          return renderReferenceLine({ key: item.key ?? index, ...item });
        })}
        {renderBrush(brush, labelTickFormatter ?? normalizedLabelFormatter)}
      </Recharts.ComposedChart>
    </RechartsChartBase>
  );
}
export default RechartsBarChart;
