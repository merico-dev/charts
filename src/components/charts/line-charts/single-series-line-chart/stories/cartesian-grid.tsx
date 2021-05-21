import React from 'react';
import SingleSeriesLineChart from '../single-series-line-chart';
import data from './mock.json';

export const content = function Content() {
  const index = 0;
  const configurations = {
    withTooltip: true,
    withLegend: false,
    cartesianGrid: {
      // HERE
      horizontal: true,
      vertical: false,
    },
    cartesianGridStyle: {
      // AND HERE
      stroke: '#DEDFE3',
    },
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
  };
  return (
    <div>
      <h1>Customize Cartesian Grid</h1>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart data={data.dataSets[index].dataSet} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Cartesian Grid';
