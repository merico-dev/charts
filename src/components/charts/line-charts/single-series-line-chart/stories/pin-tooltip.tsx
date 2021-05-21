import React, { useState } from 'react';
import SingleSeriesLineChart from '../single-series-line-chart';
import data from './mock.json';

export const content = function Content() {
  const [index] = useState(0);
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
    onClick: console.log, // HERE, by passing this handler to enable pinning tooltip
  };
  return (
    <div>
      <h1>Pin Tooltip</h1>
      <p>Tip: When tooltip is shown, click anywhere in chart to pin it</p>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart data={data.dataSets[index].dataSet} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Pin Tooltip';
