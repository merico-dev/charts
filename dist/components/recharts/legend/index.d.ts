import React from 'react';
import * as Recharts from 'recharts';
import { HorizontalAlignmentType } from 'recharts/types/component/DefaultLegendContent';
import { LineProps } from '../indicator';
export declare type LegendContentPropExcludeBy = (series: LegendContentPropSeries[]) => LegendContentPropSeries[];
export declare type CustomLegendConfig = {
    enabled: boolean;
    excludeBy?: LegendContentPropExcludeBy;
    isSeriesClickable?: (id: string | number) => boolean;
};
export declare type RenderIconConfig = Partial<LineProps & {
    color: string;
    chartType: string;
}>;
export declare type LegendContentPropSeries = {
    id?: string;
    name: string;
} & RenderIconConfig;
export declare type LegendContentProps = {
    excludeBy?: LegendContentPropExcludeBy;
    series: LegendContentPropSeries[];
    filtered: ReadonlySet<string>;
    setFiltered: React.Dispatch<React.SetStateAction<ReadonlySet<string>>>;
    align?: HorizontalAlignmentType;
    payload?: unknown;
    isSeriesClickable?: (id: string | number) => boolean;
};
declare function renderIcon({ color, chartType, ...rest }: RenderIconConfig, inactive: boolean): JSX.Element;
export declare const renderLegendItemIcon: typeof renderIcon;
export declare type RenderLegendConfig = {
    legend: React.ComponentProps<typeof Recharts.Legend>;
    series: LegendContentProps['series'];
    filteredSeries: LegendContentProps['filtered'];
    setFilteredSeries: LegendContentProps['setFiltered'];
};
export declare function renderLegend({ legend, series, filteredSeries, setFilteredSeries }: RenderLegendConfig): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map