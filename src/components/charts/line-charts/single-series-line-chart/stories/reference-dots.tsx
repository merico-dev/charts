import React from 'react';
import SingleSeriesLineChart from '../single-series-line-chart';
import data from './mock.json';

export const content = function Content() {
  const index = 0;
  const configurations = {
    withTooltip: true,
    withLegend: false,
    interpolationType: 'linear',
    storkeColor: '#CA4521',
    refInterpolationType: '',
    refInterpolationColor: '#2152ca',
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
    referenceDots: [
      {
        key: 'ref-dot-1',
        fill: 'white',
        stroke: 'red',
        strokeWidth: 10,
        r: 20,
        x: '2020-04-22T16:00:00.000Z',
        y: 2002,
      },
      {
        key: 'ref-dot-2',
        fill: 'blue',
        stroke: 'none',
        r: 10,
        x: '2020-05-10T16:00:00.000Z',
        y: 1262,
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
        <SingleSeriesLineChart data={data.dataSets[index].dataSet} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Reference Dots';
