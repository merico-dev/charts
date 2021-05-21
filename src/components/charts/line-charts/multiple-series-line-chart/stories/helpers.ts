import moment from 'moment';
import { cloneDeep, last, round } from 'lodash';

const NOW = moment();

export function calcAcc(data: any) {
  data.forEach((item: any, index: any) => {
    if (index === 0) {
      return;
    }
    item.value += data[index - 1].value;
  });
  return data;
}

export function calcBurndown(data: any) {
  const copy = cloneDeep(data);
  for (let i = copy.length - 2; i >= 0; i--) {
    copy[i].value += copy[i + 1].value;
  }
  copy.forEach((item: any) => {
    item.value += 500;
  });
  return copy;
}

function calcSingleSeriesData(accumulator: any, multiplier = 1, dataCount: any, extendDays: any) {
  const now = NOW.clone();
  const randomBase = accumulator(
    Array.from(new Array(dataCount), () => ({
      date: now.add(1, 'days').toISOString(),
      value: round(Math.random() * multiplier),
    }))
  );

  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
  const lastDate = moment(last(randomBase).date);
  const tailingDates = Array.from(new Array(extendDays), () => {
    return {
      date: lastDate.add(1, 'days').toISOString(),
      value: null,
    };
  });
  return randomBase.concat(tailingDates);
}

export const calcUpwardsSeriesData = (dataCount: any, extendDays: any) => () => {
  return [
    {
      id: 'up-series-1',
      series: calcSingleSeriesData(calcAcc, 5, dataCount, extendDays),
    },
    {
      id: 'up-series-2',
      series: calcSingleSeriesData(calcAcc, 15, dataCount, extendDays),
    },
    {
      id: 'up-series-3',
      series: calcSingleSeriesData(calcAcc, 25, dataCount, extendDays),
    },
  ];
};

export const calcDownwardsSeriesData = (dataCount: any, extendDays: any) => () => {
  return [
    {
      id: 'up-series-1',
      series: calcSingleSeriesData(calcBurndown, 100, dataCount, extendDays),
    },
    {
      id: 'up-series-2',
      series: calcSingleSeriesData(calcBurndown, 200, dataCount, extendDays),
    },
    {
      id: 'up-series-3',
      series: calcSingleSeriesData(calcBurndown, 600, dataCount, extendDays),
    },
  ];
};
