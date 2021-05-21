/// <reference types="react" />
export declare type PredictionLineConfig = {
    data: Record<string, number>[];
    dataKey?: string;
    labelKey: string;
    valueKey: string;
    key?: string;
    stroke?: string;
    strokeDasharray?: string;
    color?: string;
    yAxisId?: number | string;
};
export declare function renderPredictionLine(config: PredictionLineConfig, filteredSeriesSet?: ReadonlySet<string>): JSX.Element | null;
export default function calculateAndRenderPredictionLine({ data, labelKey, valueKey, type, ...rest }: any, filteredSeriesSet?: ReadonlySet<string>): JSX.Element | null;
export declare function renderPredictionLines({ predictionLines }: {
    predictionLines: PredictionLineConfig[];
}, filteredSeriesSet?: ReadonlySet<string>): (JSX.Element | null)[];
//# sourceMappingURL=prediction-line.d.ts.map