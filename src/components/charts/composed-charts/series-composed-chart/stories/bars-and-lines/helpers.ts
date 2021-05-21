import moment from 'moment';
import { cloneDeep, last, round } from 'lodash';

const NOW = moment('2020-12-01');

export const calcAcc = (key: any) => (data: any) => {
  data.forEach((item: any, index: any) => {
    if (index === 0) {
      return;
    }
    item[key] += data[index - 1][key];
  });
  return data;
};

export const calcBurndown = (key: any) => (data: any) => {
  const copy = cloneDeep(data);
  for (let i = copy.length - 2; i >= 0; i--) {
    copy[i][key] += copy[i + 1][key];
  }
  copy.forEach((item: any) => {
    item[key] += 500;
  });
  return copy;
};

function calcSeriesBase(keys: any, dataCount: any, extendDays: any) {
  const now = NOW.clone();
  const randomBase = Array.from(new Array(dataCount), () => {
    const ret = keys.reduce((acc: any, curr: any) => {
      acc[curr] = Math.random();
      return acc;
    }, {});
    ret.date = now.add(1, 'days').toISOString();
    return ret;
  });

  const lastDate = moment(last(randomBase).date);
  const tailingDates = Array.from(new Array(extendDays), () => {
    const ret = keys.reduce((acc: any, curr: any) => {
      acc[curr] = null;
      return acc;
    }, {});
    ret.date = lastDate.add(1, 'days').toISOString();
    return ret;
  });
  return randomBase.concat(tailingDates);
}

function adjustValue(data: any, key: any, factor: any) {
  data.forEach((item: any) => {
    item[key] = round(item[key] * factor);
  });
}

/**
 * Like:
 * [
 *  {
 *    line-1: number,
 *    line-2: number,
 *    bar-positive: number,
 *    bar-negative: number,
 *    date: ISOString,
 *  }
 * ]
 */
export const calcUpwardsSeriesData = ({
  dataCount,
  extendDays,
  keys = ['line-1', 'line-2', 'bar-positive', 'bar-negative'],
  factors = [100, 100, 10, -10],
  accumulators = [calcBurndown, calcBurndown, null, null],
}: any) => () => {
  let base = calcSeriesBase(keys, dataCount, extendDays);
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'key' implicitly has an 'any' type.
  keys.forEach((key, index) => {
    adjustValue(base, key, factors[index]);
  });
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
  accumulators.forEach((acc, index) => {
    if (!acc) {
      return;
    }
    const key = keys[index];
    base = acc(key)(base);
  });
  base[base.length - 1][keys[0]] = 0;
  return base;
};

export const calcDownwardsSeriesData = calcUpwardsSeriesData;
