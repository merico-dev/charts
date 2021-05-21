import React from 'react';
import SingleSeriesLineChart from '../single-series-line-chart';
import data from './mock.json';

export const content = function Content() {
  const index = 0;
  const configurations = {
    withTooltip: true,
    withLegend: false,
    cartesianGrid: {
      horizontal: false,
      vertical: false,
    },
    cartesianGridStyle: {
      stroke: '#DEDFE3',
    },
    interpolationType: 'linear',
    storkeColor: 'rgb(240, 135, 106)',
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
    extraAreas: [
      {
        name: 'backgroundDrop',
        fill: 'url(#background)',
        stroke: 'none',
      },
    ],
    tooltipExcludedNames: ['backgroundDrop'],
  };

  const definitions = [
    () => (
      <linearGradient key="background" id="background" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="rgb(240, 135, 106)" stopOpacity={1} />
        <stop offset="95%" stopColor="rgb(240, 135, 106)" stopOpacity={0} />
      </linearGradient>
    ),
  ];

  return (
    <div>
      <h1>Linear Gradient Background</h1>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart
          data={data.dataSets[index].dataSet}
          configurations={configurations}
          definitions={definitions}
        />
      </div>
    </div>
  );
};
export const name = 'Linear Gradient Background';
