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
    referenceDots: [
      {
        key: 'ref-dot-1',
        fill: 'white',
        stroke: 'red',
        strokeWidth: 10,
        r: 20,
        x: '2020-04-22T16:00:00.000Z',
        y: 6402,
      },
      {
        key: 'ref-dot-2',
        fill: 'blue',
        stroke: 'none',
        r: 10,
        x: '2020-05-10T16:00:00.000Z',
        y: 5262,
        labelProps: {
          text: 'with label',
          fill: 'blue',
          textAnchor: 'middle',
          position: 'top',
        },
      },
    ],
  };
  return (
    <div>
      <h1>Reference Dots</h1>
      <div style={{ width: 800, height: 600 }}>
        <MultipleSeriesLineChart series={data.dataSets} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Reference Dots';
