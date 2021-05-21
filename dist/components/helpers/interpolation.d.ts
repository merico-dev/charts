import * as d3 from 'd3-shape';
export declare const INTERPOLATION_TYPES: {
    basic: string[];
    func: {
        curveBundle100: d3.CurveBundleFactory;
        curveBundle75: d3.CurveBundleFactory;
        curveBundle50: d3.CurveBundleFactory;
        curveBundle0: d3.CurveBundleFactory;
        cardinal100: d3.CurveCardinalFactory;
        cardinal75: d3.CurveCardinalFactory;
        cardinal50: d3.CurveCardinalFactory;
        cardinal0: d3.CurveCardinalFactory;
    };
};
export declare const parseInterpolation: (type: any) => any;
//# sourceMappingURL=interpolation.d.ts.map