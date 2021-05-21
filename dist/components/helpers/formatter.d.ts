export declare const MOMENT_YEAR_MONTH_FORMAT = "YYYY/MM";
export declare const MOMENT_DATE_FORMAT = "YYYY/MM/DD";
export declare const getPeriodFormatter: ({ format }: {
    format: string;
}) => (date: any, caller: any) => string;
export declare const getNumeralFormatter: ({ format }: any) => (value: any) => string;
export declare type FormatterFunc = (value: any, ...others: any[]) => any;
export declare type FormatterConfig = {
    type: 'DATE_TIME' | 'PERIOD' | 'NUMERAL';
    format: string;
};
export declare type FormatterType = FormatterFunc | FormatterConfig;
export declare function normalizeFormatter(formatter?: FormatterType): FormatterFunc;
//# sourceMappingURL=formatter.d.ts.map