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
      axisLine: false,
      tickLine: false,
    },
    subSeriesConfiguration: [
      {
        label: 'Rounded Value',
        dataKey: 'value',
        valueLabel: { enabled: true },
      },
    ],
    transposed: true,
  };
  return (
    <div>
      <h1>Tooltip Cursor (Dark Background Bar)</h1>
      <h2>Before</h2>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart data={data} configurations={configurations} />
      </div>
      <h2>After</h2>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart
          data={data}
          configurations={{
            ...configurations,
            tooltipCursor: { fill: 'transparent' }, // HERE
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Tooltip Cursor';
