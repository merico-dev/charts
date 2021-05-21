declare type SeriesRow = {
    [key: string]: number | string;
};
/**
 * Like:
 * [
 *  {
 *    line-1: number,
 *    line-2: number,
 *    x: number,
 *  }
 * ]
 */
export declare const getSeries: ({ dataCount, withOriginPoint }: {
    dataCount: number;
    withOriginPoint: boolean;
}) => () => SeriesRow[];
export {};
//# sourceMappingURL=helpers.d.ts.map