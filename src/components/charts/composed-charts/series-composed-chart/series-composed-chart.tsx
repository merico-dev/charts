// TODO: zoom
import React, { useMemo } from 'react';
import * as Recharts from 'recharts';
import { AxisDomain, Margin } from 'recharts/types/util/types';

import { RechartsChartBase } from '../../base/chart-base';
import { renderSimpleXAxis, CommonRenderXAxisConfig } from '../../../recharts/x-axis';
import { renderYAxis, RenderYAxisConfig } from '../../../recharts/y-axis';
import { renderTooltip, RenderTooltipConfig } from '../../../recharts/tooltip';
import { renderReferenceLine, RenderReferenceLineConfig } from '../../../recharts/reference-line';
import { renderReferenceAreas, RenderReferenceAreasConfig } from '../../../recharts/reference-area';
import renderRegressionLine from '../../../recharts/regression-line';
import { renderBrush, RenderBrushConfig } from '../../../recharts/brush';
import { CustomLegendConfig, renderLegend, RenderLegendConfig } from '../../../recharts/legend';
import { getColorGenerator } from '../../../helpers/colors';
import { normalizeFormatter, FormatterType, FormatterFunc } from '../../../helpers/formatter';
import { useFilteredSeries } from '../../../helpers/hooks';
import { getBarLabelRenderer } from '../../../recharts/label/bar';
import { parseInterpolation } from '../../../helpers/interpolation';
import { renderPredictionLines, PredictionLineConfig } from '../../../recharts/prediction-line';

type DoRenderXAxisConfig = {
  dataLength: number;
  labelKey: string;
  formatter: FormatterFunc;
  transposed?: boolean;
  xTickCount: number;
  xAxis?: React.ComponentProps<typeof Recharts.XAxis> & CommonRenderXAxisConfig;
  xPoints: any[];
};

function doRenderXAxis({ xTickCount, xPoints, xAxis = {}, labelKey, formatter, transposed }: DoRenderXAxisConfig) {
  if (!transposed) {
    return renderSimpleXAxis({
      // vertical: true,
      interval: 0,
      formatter,
      tickCount: xTickCount,
      allowDuplicatedCategory: true,
      ...xAxis,
      dataKey: labelKey,
      points: xPoints,
    });
  }
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

type SubSeriesConfiguration = {
  dataKey: string;
  label: string;
  [key: string]: any;
};

export type SeriesComposedChartConfigurations = Partial<{
  withTooltip: boolean;
  xAxis: DoRenderXAxisConfig['xAxis'];
  yAxis: RenderYAxisConfig;
  xTickCount: number;
  labelKey: string;
  labelFormatter: FormatterType;
  labelTickFormatter: FormatterFunc;
  valueFormatter: FormatterType;
  additionalYAxis: RenderYAxisConfig;
  brush: RenderBrushConfig;
  legend: CustomLegendConfig & RenderLegendConfig['legend'];
  cartesianGrid: Omit<React.ComponentProps<typeof Recharts.CartesianGrid>, 'ref'>;
  cartesianGridStyle: Omit<React.ComponentProps<typeof Recharts.CartesianGrid>, 'ref'>;
  margin: Margin;
  predictionLines: PredictionLineConfig[];
  referenceLines: RenderReferenceLineConfig[];
  referenceAreas: RenderReferenceAreasConfig[];
  stackOffset: React.ComponentProps<typeof Recharts.ComposedChart>['stackOffset'];
  tooltip?: RenderTooltipConfig['tooltip'];
  tooltipAppender: RenderTooltipConfig['tooltipAppender'];
  tooltipCursor: RenderTooltipConfig['tooltipCursor'];
  tooltipExcludedNames: RenderTooltipConfig['tooltipExcludedNames'];
  tooltipSorter: RenderTooltipConfig['tooltipSorter'];
  transposed: boolean;
  yDomain: AxisDomain;
  subSeriesConfiguration: SubSeriesConfiguration[];
}>;

export type SeriesComposedChartProps<T extends unknown[]> = {
  data: T;
  definitions?: (() => React.ReactNode)[];
  filteredSeries?: string[];
  setFilteredSeries?: (newSeries: string[]) => void;
  configurations: SeriesComposedChartConfigurations;
  empty?: boolean;
  emptyContent?: React.ReactNode;
};

function SeriesComposedChart<T extends unknown[]>({
  data,
  definitions = [],
  filteredSeries = [],
  setFilteredSeries,
  configurations,
  empty = false,
  emptyContent,
}: SeriesComposedChartProps<T>) {
  const {
    withTooltip = true,
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
    xAxis = {
      axisLine: true,
      name: '',
      // https://github.com/recharts/recharts/issues/2122
      // https://merico.atlassian.net/browse/EE-2208
      scale: 'band',
    },
    xTickCount = 7,
    yAxis = {
      axisLine: true,
      name: '',
    },
    additionalYAxis,
    labelKey = 'date',
    labelFormatter,
    labelTickFormatter,
    margin = { top: 5, right: 5, bottom: 5, left: 5 },
    subSeriesConfiguration = [{ dataKey: 'value', label: 'Value' }], // sub-series
    predictionLines = [],
    valueFormatter,
    referenceLines = [],
    referenceAreas = [],
    stackOffset = 'none',
    transposed = false,
    yDomain = [0, 'auto'],
  } = configurations;

  const [filteredSeriesSet, setFilteredSeriesSet] = useFilteredSeries(filteredSeries, setFilteredSeries);
  const colorGenerator = getColorGenerator();

  const subSeries = useMemo(() => {
    return subSeriesConfiguration.map(
      ({ dataKey, label, valueLabel, fill = colorGenerator.next().value, stackId, ...rest }) => {
        return {
          key: dataKey,
          label,
          valueLabel,
          name: label,
          dataKey,
          fill,
          color: fill,
          stackId,
          ...rest,
        };
      }
    );
  }, [data, subSeriesConfiguration]);

  const normalizedLabelFormatter = normalizeFormatter(labelFormatter);
  const normalizedValueFormatter = normalizeFormatter(valueFormatter);

  const xPoints = React.useMemo(() => data.map((s: any) => s[labelKey]), [data]);

  const axisProps: DoRenderXAxisConfig = {
    xTickCount,
    xPoints,
    dataLength: data.length,
    transposed,
    labelKey,
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ xTickCount: number | undefined; dataLength... Remove this comment to see the full error message
    yDomain,
    formatter: labelTickFormatter ?? normalizedLabelFormatter,
    valueFormatter: normalizedValueFormatter,
    xAxis,
    yAxis,
  };

  const frontReferenceLines = referenceLines.filter((line) => line.renderOnTop);
  const rearReferenceLines = referenceLines.filter((line) => !line.renderOnTop);
  return (
    <RechartsChartBase empty={empty} emptyContent={emptyContent}>
      <Recharts.ComposedChart data={data} layout="horizontal" margin={margin} stackOffset={stackOffset}>
        <defs>{definitions.map((renderer) => renderer())}</defs>
        <Recharts.CartesianGrid {...cartesianGridStyle} {...cartesianGrid} />
        {doRenderXAxis(axisProps)}
        {renderYAxis({
          formatter: normalizedValueFormatter,
          ...yAxis,
          domain: yDomain,
        })}
        {renderTooltip(configurations as RenderTooltipConfig)}
        {legend.enabled &&
          renderLegend({
            legend,
            series: subSeries,
            filteredSeries: filteredSeriesSet,
            setFilteredSeries: setFilteredSeriesSet,
          })}
        {referenceAreas.map((item) => renderReferenceAreas(item))}
        {rearReferenceLines.map((item, index) => {
          return renderReferenceLine({ key: item.key ?? index, ...item });
        })}
        {subSeries.map((item: any) => {
          const {
            label,
            valueLabel = { enabled: false },
            barSize = 20,
            yAxisId = 0,
            chartType,
            interpolationType,
            // regressions,
            ...rest
          } = item;

          if (filteredSeriesSet.has(label)) {
            return null;
          }

          if (chartType === 'line') {
            return (
              <Recharts.Line
                yAxisId={yAxisId}
                isAnimationActive={false}
                strokeWidth={2}
                label={null}
                type={parseInterpolation(interpolationType)}
                {...rest}
              />
            );
          }
          if (chartType === 'area') {
            return (
              <Recharts.Area
                yAxisId={yAxisId}
                isAnimationActive={false}
                strokeWidth={2}
                label={null}
                type={parseInterpolation(interpolationType)}
                {...rest}
              />
            );
          }

          const renderLabelContent = getBarLabelRenderer(
            transposed,
            valueLabel.formatter ?? normalizedValueFormatter,
            valueLabel
          );
          return (
            <Recharts.Bar
              key={item.key ?? item.label}
              yAxisId={yAxisId}
              isAnimationActive={false}
              barSize={barSize}
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

        {/* REGRESSION LINES */}
        {subSeries.map((item: any) => {
          const { label, regressions } = item;
          if (filteredSeriesSet.has(label)) {
            return null;
          }
          return regressions?.map((r: any) => renderRegressionLine({ ...r, data }));
        })}

        {/* PREDICTION LINES */}
        {renderPredictionLines({ predictionLines }, filteredSeriesSet)}
        {additionalYAxis && renderYAxis(additionalYAxis)}
        {/* {composingLines.map(({ ...rest }) => (
          <Recharts.Line
            yAxisId={yAxis?.yAxisId ?? 0}
            isAnimationActive={false}
            strokeWidth={2}
            label={null}
            {...rest}
          />
        ))} */}
        {frontReferenceLines.map((item, index) => {
          return renderReferenceLine({ key: item.key ?? index, ...item });
        })}
        {renderBrush(brush, normalizedLabelFormatter)}
      </Recharts.ComposedChart>
    </RechartsChartBase>
  );
}
export default SeriesComposedChart;
