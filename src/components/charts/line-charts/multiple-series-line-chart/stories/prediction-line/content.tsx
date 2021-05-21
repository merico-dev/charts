import React, { useMemo } from 'react';
import { Grid } from 'semantic-ui-react';
import MultipleSeriesLineChart from '../../multiple-series-line-chart';
import { PREDICTION_TYPES } from '../../../../../helpers/prediction';
import { calcDownwardsSeriesData, calcUpwardsSeriesData } from '../helpers';

export default function Content({ extendDays, dataCount }: any) {
  const seriesUp = useMemo(calcUpwardsSeriesData(dataCount, extendDays), [dataCount, extendDays]);
  const seriesDown = useMemo(calcDownwardsSeriesData(dataCount, extendDays), [dataCount, extendDays]);

  const configurations = {
    withTooltip: true,
    interpolationType: 'linear',
    labelKey: 'date',
    labelFormatter: {
      type: 'PERIOD',
      format: '1d',
    },
    xAxis: {
      name: '',
    },
    yAxis: {
      name: 'DevEq',
    },
    // HERE
    getRefPredictionLine: (series: any) => ({
      enabled: true,
      key: `prediction-line-${series.id}`,
      type: PREDICTION_TYPES.regressionLinear,
      color: '#3b6efd',
      strokeDashArray: '3',
    }),
    valueKey: 'value',
    seriesDataKey: 'series',
    seriesNameKey: 'id',
    xTickCount: 4,
    legend: {
      enabled: true,
    },
  };

  const excludedNames = useMemo(() => {
    return {
      up: seriesUp.map(({ id }) => `prediction-line-${id}`),
      down: seriesDown.map(({ id }) => `prediction-line-${id}`),
    };
  }, [seriesUp, seriesDown]);

  return (
    <div>
      <h1>Prediction Line</h1>
      <Grid columns={2}>
        <Grid.Column>
          <h2>Going up</h2>
          <div style={{ width: 600, height: 400 }}>
            <MultipleSeriesLineChart
              series={seriesUp}
              configurations={{
                ...configurations,
                tooltipExcludedNames: excludedNames.up,
              }}
            />
          </div>
        </Grid.Column>

        <Grid.Column>
          <h2>Burning down</h2>
          <div style={{ width: 600, height: 400 }}>
            <MultipleSeriesLineChart
              series={seriesDown}
              configurations={{
                ...configurations,
                tooltipExcludedNames: excludedNames.down,
              }}
            />
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
