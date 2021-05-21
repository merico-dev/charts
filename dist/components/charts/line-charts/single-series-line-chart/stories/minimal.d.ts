/// <reference types="react" />
export declare const name = "Minimal";
export declare const content: ({ extendDays, dataCount, burndown }: any) => JSX.Element;
export declare const parameters: {
    args: {
        extendDays: number;
        dataCount: number;
        burndown: boolean;
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
        burndown: string;
    };
};
//# sourceMappingURL=minimal.d.ts.map