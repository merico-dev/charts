import React from 'react';
import SingleSeriesLineChart from '../single-series-line-chart';
import data from './mock.json';

export const content = function Content() {
  const index = 0;
  const series = data.dataSets[index].dataSet;

  const configurations = {
    withTooltip: true,
    legend: {
      enabled: false,
    },
    interpolationType: 'linear',
    storkeColor: '#CA4521',
    refRegressionType: 'regressionLinear',
    refRegressionColor: '#2152ca',
    xAxis: {
      name: 'Date',
    },
    yAxis: {
      name: 'Dev Equivalent',
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD',
    },
  };
  return (
    <div>
      <h1>Regression Line</h1>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart data={series} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Regression Line';
