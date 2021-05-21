import React, { useMemo } from 'react';
import moment from 'moment';
import { cloneDeep, last, round } from 'lodash';
import { Grid } from 'semantic-ui-react';
import { PREDICTION_TYPES } from '../../../../helpers/prediction';
import SingleSeriesLineChart from '../single-series-line-chart';

export const name = 'Prediction Line';

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
  const copy = cloneDeep(data);
  for (let i = copy.length - 2; i >= 0; i--) {
    copy[i].value += copy[i + 1].value + round((Math.random() - 0.1) * 5);
  }
  return copy;
}

export const content = function Content({ withRegressionLine, extendDays, dataCount }: any) {
  const index = 0;
  const { randomUp, randomDown } = useMemo(() => {
    const now = moment();
    const ret = Array.from(new Array(dataCount), () => ({
      date: now.add(1, 'days').toISOString(),
      value: round(Math.random() * 10),
    }));

    return {
      randomUp: calcAcc(ret),
      randomDown: calcBurndown(ret),
    };
  }, [dataCount]);

  const seriesUp = useMemo(() => {
    const seriesData = randomUp;
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    const lastDate = moment(last(seriesData).date);
    const tailingDates = Array.from(new Array(extendDays), () => {
      return {
        date: lastDate.add(1, 'days').toISOString(),
        value: null,
      };
    });
    return seriesData.concat(tailingDates);
  }, [index, randomUp, extendDays]);

  const seriesDown = useMemo(() => {
    const seriesData = randomDown;
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    const lastDate = moment(last(seriesData).date);
    const tailingDates = Array.from(new Array(extendDays), () => {
      return {
        date: lastDate.add(1, 'days').toISOString(),
        value: null,
      };
    });
    return seriesData.concat(tailingDates);
  }, [index, randomDown, extendDays]);

  const configurations = {
    withTooltip: true,
    legend: {
      enabled: false,
    },
    interpolationType: 'linear',
    storkeColor: '#CA4521',
    refPredictionLine: {
      // HERE
      key: 'prediction-line',
      type: PREDICTION_TYPES.regressionLinear,
      color: '#3b6efd',
      strokeDashArray: '3',
    },
    tooltipExcludedNames: ['prediction-line'], // HERE
    xAxis: {
      name: '',
    },
    xTickCount: 3,
    yAxis: {
      name: 'Dev Equivalent',
    },
    yDomain: [0, 'auto'],
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD',
    },
  };
  if (withRegressionLine) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'refRegressionType' does not exist on typ... Remove this comment to see the full error message
    configurations.refRegressionType = 'regressionLinear';
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'refRegressionColor' does not exist on ty... Remove this comment to see the full error message
    configurations.refRegressionColor = '#2152ca';
  }
  return (
    <div>
      <h1>Prediction Line</h1>
      <Grid columns={2}>
        <Grid.Column>
          <h2>Going up</h2>
          <div style={{ width: 600, height: 400 }}>
            <SingleSeriesLineChart data={seriesUp} configurations={configurations} />
          </div>
        </Grid.Column>

        <Grid.Column>
          <h2>Burning down</h2>
          <div style={{ width: 600, height: 400 }}>
            <SingleSeriesLineChart data={seriesDown} configurations={configurations} />
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export const parameters = {
  args: {
    extendDays: 3,
    dataCount: 30,
    withRegressionLine: false,
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
    withRegressionLine: 'boolean',
  },
};
