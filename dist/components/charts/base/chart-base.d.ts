/// <reference types="react" />
declare const Empty: ({ content }: {
    content?: string | undefined;
}) => JSX.Element;
declare const RechartsChartBase: ({ children, empty, emptyContent }: any) => JSX.Element;
declare const G2ChartBase: ({ children, empty, emptyContent, conf, className }: any) => JSX.Element;
export { Empty as ChartEmpty, RechartsChartBase, G2ChartBase };
//# sourceMappingURL=chart-base.d.ts.map