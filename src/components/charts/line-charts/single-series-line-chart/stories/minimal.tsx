import React, { useMemo } from 'react';
import moment from 'moment';
import { last, round } from 'lodash';
import { PREDICTION_TYPES } from '../../../../helpers/prediction';
import SingleSeriesLineChart from '../single-series-line-chart';
import { Resizable } from '../../../base/resizable';

export const name = 'Minimal';

function calcAcc(data: any) {
  data.forEach((item: any, index: any) => {
    if (index === 0) {
      return;
    }
    item.value += data[index - 1].value;
  });
  return data;
}

function calcBurndown(data: any) {
  for (let i = data.length - 2; i >= 0; i--) {
    data[i].value += data[i + 1].value;
  }
  return data;
}

export const content = function Content({ extendDays, dataCount, burndown }: any) {
  const index = 0;
  const randomSeriesData = useMemo(() => {
    const now = moment();
    const ret = Array.from(new Array(dataCount), () => ({
      date: now.add(1, 'days').toISOString(),
      value: round(Math.random() * 10),
    }));

    if (burndown) {
      return calcBurndown(ret);
    }
    return calcAcc(ret);
  }, [dataCount, burndown]);

  const series = useMemo(() => {
    const seriesData = randomSeriesData;
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    const lastDate = moment(last(seriesData).date);
    const tailingDates = Array.from(new Array(extendDays), () => {
      return {
        date: lastDate.add(1, 'days').toISOString(),
        value: null,
      };
    });
    return seriesData.concat(tailingDates);
  }, [index, randomSeriesData, extendDays]);

  const configurations = {
    withTooltip: true,
    legend: { enabled: false },
    interpolationType: 'linear',
    storkeColor: '#CA4521',
    refPredictionLine: {
      type: PREDICTION_TYPES.regressionLinear,
      color: '#CA4521',
      strokeDashArray: '3',
    },
    cartesianGrid: {
      horizontal: false,
      vertical: false,
    },
    xAxis: {
      name: '',
      tick: false,
      tickLine: false,
    },
    yAxis: {
      tick: false,
      name: '',
      axisLine: false,
      tickLine: false,
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD',
    },
  };
  return (
    <div>
      <h1>Minimal</h1>
      <Resizable initialWidth={400} initialHeight={300}>
        <SingleSeriesLineChart data={series} configurations={configurations} />
      </Resizable>
    </div>
  );
};

export const parameters = {
  args: {
    extendDays: 20,
    dataCount: 100,
    burndown: false,
  },
  argTypes: {
    extendDays: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    dataCount: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 1,
      },
    },
    burndown: 'boolean',
  },
};
