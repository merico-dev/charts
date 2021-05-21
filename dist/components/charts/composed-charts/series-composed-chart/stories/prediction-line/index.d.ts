export declare const name = "Prediction Line";
export { default as content } from './content';
export declare const parameters: {
    args: {
        extendDays: number;
        dataCount: number;
        scale: string;
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
        scale: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
//# sourceMappingURL=index.d.ts.map