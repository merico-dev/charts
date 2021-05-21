export declare const REGRESSION_TYPES: {
    regressionLinear: string;
    regressionExp: string;
    regressionLog: string;
    regressionQuad: string;
    regressionPoly: string;
    regressionPow: string;
    regressionLoess: string;
};
export declare function parseRegression(type: any): any;
export declare function callRegression({ data, type, x, y }: any): {
    points: any;
    slope: any;
    intercept: any;
};
export declare function calcRegressionData({ type, data, x, y }: any): any;
//# sourceMappingURL=regression.d.ts.map