import React from 'react';
import SingleSeriesLineChart from '../single-series-line-chart';
import data from './mock.json';

export const content = function Content() {
  const index = 0;
  const series = data.dataSets[index].dataSet;

  const composingScatters = [
    {
      key: 'scatter-outliers',
      name: 'Outlier',
      dataKey: 'outlier',
      data: [
        { date: '2020-04-16T16:00:00.000Z', outlier: 500 },
        { date: '2020-05-01T16:00:00.000Z', outlier: 180 },
        { date: '2020-05-12T16:00:00.000Z', outlier: 2180 }, // extend yAxis domain
      ],
      r: 20,
      fill: 'orange',
      labelProps: {
        position: 'top',
        textAnchor: 'middle',
        fill: 'red',
        offset: 10,
        dataKey: 'outlier',
      },
    },
  ];

  const configurations = {
    withTooltip: true,
    legend: {
      enabled: false,
    },
    composingScatters,
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
      <h1>Composing Scatters</h1>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart data={series} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Composing Scatters';
