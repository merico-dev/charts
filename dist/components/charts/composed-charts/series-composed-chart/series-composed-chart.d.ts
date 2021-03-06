import React from 'react';
import * as Recharts from 'recharts';
import { AxisDomain, Margin } from 'recharts/types/util/types';
import { CommonRenderXAxisConfig } from '../../../recharts/x-axis';
import { RenderYAxisConfig } from '../../../recharts/y-axis';
import { RenderTooltipConfig } from '../../../recharts/tooltip';
import { RenderReferenceLineConfig } from '../../../recharts/reference-line';
import { RenderReferenceAreasConfig } from '../../../recharts/reference-area';
import { RenderBrushConfig } from '../../../recharts/brush';
import { CustomLegendConfig, RenderLegendConfig } from '../../../recharts/legend';
import { FormatterType, FormatterFunc } from '../../../helpers/formatter';
import { PredictionLineConfig } from '../../../recharts/prediction-line';
declare type DoRenderXAxisConfig = {
    dataLength: number;
    labelKey: string;
    formatter: FormatterFunc;
    transposed?: boolean;
    xTickCount: number;
    xAxis?: React.ComponentProps<typeof Recharts.XAxis> & CommonRenderXAxisConfig;
    xPoints: any[];
};
declare type SubSeriesConfiguration = {
    dataKey: string;
    label: string;
    [key: string]: any;
};
export declare type SeriesComposedChartConfigurations = Partial<{
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
export declare type SeriesComposedChartProps<T extends unknown[]> = {
    data: T;
    definitions?: (() => React.ReactNode)[];
    filteredSeries?: string[];
    setFilteredSeries?: (newSeries: string[]) => void;
    configurations: SeriesComposedChartConfigurations;
    empty?: boolean;
    emptyContent?: React.ReactNode;
};
declare function SeriesComposedChart<T extends unknown[]>({ data, definitions, filteredSeries, setFilteredSeries, configurations, empty, emptyContent, }: SeriesComposedChartProps<T>): JSX.Element;
export default SeriesComposedChart;
//# sourceMappingURL=series-composed-chart.d.ts.map