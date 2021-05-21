export declare const calcAcc: (key: any) => (data: any) => any;
export declare const calcBurndown: (key: any) => (data: any) => any;
/**
 * Like:
 * [
 *  {
 *    line-1: number,
 *    line-2: number,
 *    issue-range: number,
 *    date: ISOString,
 *  }
 * ]
 */
export declare const calcUpwardsSeriesData: ({ dataCount, extendDays, keys, factors, accumulators, }: any) => () => any[];
export declare const calcDownwardsSeriesData: ({ dataCount, extendDays, keys, factors, accumulators, }: any) => () => any[];
//# sourceMappingURL=helpers.d.ts.map