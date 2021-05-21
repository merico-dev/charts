import React from 'react';
import { round } from 'lodash';
import RechartsBarChart from '../recharts-bar-chart';
import data from './mocks/single-value.json';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    legend: {
      enabled: false,
    },
    labelKey: 'name',
    valueFormatter: (v: any) => round(v, 0),
    xAxis: {
      name: 'Series',
    },
    yAxis: {
      name: 'Mock Value',
      axisLine: false, // HERE
      tickLine: false, // HERE
    },
    subSeriesConfiguration: [
      {
        label: 'Rounded Value',
        dataKey: 'value',
        valueLabel: { enabled: true },
      },
    ],
  };
  return (
    <div>
      <h1>Hide Axis Line</h1>
      <h2>Default</h2>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart data={data} configurations={configurations} />
      </div>
      <h2>Transposed</h2>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart
          data={data}
          configurations={{
            ...configurations,
            transposed: true,
            legend: {
              enabled: true,
              align: 'center',
              verticalAlign: 'bottom', // HERE
            },
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Hide Axis Line';
