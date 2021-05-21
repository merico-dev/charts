export declare const name = "Prediction Line";
export declare const parameters: {
    args: {
        extendDays: number;
        dataCount: number;
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
    };
};
export { default as content } from './content';
//# sourceMappingURL=index.d.ts.map