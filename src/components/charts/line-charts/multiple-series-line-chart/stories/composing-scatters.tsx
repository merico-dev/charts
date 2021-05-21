import React from 'react';
import MultipleSeriesLineChart from '../multiple-series-line-chart';
import data from './mocks/mock.json';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    withLegend: true,
    interpolationType: 'monotone',
    xAxis: {
      name: 'Date',
    },
    yAxis: {
      name: 'Dev Equivalent',
    },
    seriesDataKey: 'dataSet',
    seriesNameKey: 'developer$.name',
    seriesNameFormatter: (series: any) => `${series.developer.name} <${series.developer.primaryEmail}>`,
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD',
    },
    composingScatters: [
      {
        key: 'scatter-outliers',
        name: 'Outlier',
        dataKey: 'outlier',
        data: [
          { date: '2020-04-16T16:00:00.000Z', outlier: 1500 },
          { date: '2020-05-01T16:00:00.000Z', outlier: 2800 },
          { date: '2020-05-12T16:00:00.000Z', outlier: 13500 }, // extend yAxis domain
        ],
        r: 20,
        fill: 'orange',
        labelProps: {
          position: 'top',
          textAnchor: 'middle',
          fill: 'red',
          offset: 10,
          dataKey: 'outlier',
          fontSize: 11,
        },
      },
    ],
  };
  return (
    <div>
      <h1>Composing Scatters</h1>
      <div style={{ width: 800, height: 600 }}>
        <MultipleSeriesLineChart series={data.dataSets} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Composing Scatters';
