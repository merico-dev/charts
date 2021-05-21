/// <reference types="react" />
export declare const name = "Prediction Line";
export declare const content: ({ withRegressionLine, extendDays, dataCount }: any) => JSX.Element;
export declare const parameters: {
    args: {
        extendDays: number;
        dataCount: number;
        withRegressionLine: boolean;
    };
    argTypes: {
        extendDays: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
        };
        dataCount: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
        };
        withRegressionLine: string;
    };
};
//# sourceMappingURL=prediction-line.d.ts.map