export declare const PREDICTION_TYPES: {
    regressionLinear: string;
    regressionExp: string;
    regressionLog: string;
    regressionQuad: string;
    regressionPoly: string;
    regressionPow: string;
    regressionLoess: string;
};
/**
 * Calculate prediction line data with formatting
 */
export declare function calcPredictionData({ type, data, x, y }: any): {
    lineData: {
        [x: number]: any;
    }[];
};
//# sourceMappingURL=prediction.d.ts.map