type SeriesRow = {
  [key: string]: number | string; // just number, actually
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
export const getSeries = ({ dataCount, withOriginPoint }: { dataCount: number; withOriginPoint: boolean }) => () => {
  const keys = ['line-1'];
  const ret = Array.from(new Array(dataCount), (_, index) => {
    const row: SeriesRow = keys.reduce((acc: SeriesRow, curr: string) => {
      acc[curr] = Math.random();
      return acc;
    }, {} as SeriesRow);

    row.x = index + 1;

    return row;
  });
  if (withOriginPoint) {
    ret.unshift({
      x: 0,
      'line-1': 0,
    });
  }
  return ret;
};
