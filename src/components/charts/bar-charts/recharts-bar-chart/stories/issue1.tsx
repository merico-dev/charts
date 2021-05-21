import React from 'react';
import RechartsBarChart from '../recharts-bar-chart';
import data from './mocks/test-x-axis-end.json';

export const content = function Content() {
  const configurations = {
    cartesianGrid: {
      horizontal: true,
      vertical: false,
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD',
    },
    legend: {
      enabled: true,
      align: 'center',
      verticalAlign: 'bottom',
    },
    margin: {
      bottom: 100,
    },
    subSeriesConfiguration: [
      {
        label: 'Value',
        dataKey: 'value',
      },
    ],
    withTooltip: true,
    xAxis: {
      allowDuplicatedCategory: true,
    },
    xTickCount: 4,
    yAxis: {
      name: 'Value',
      tickLine: false,
      axisLine: false,
    },
  };
  return (
    <div>
      <h1>Issues - 1</h1>
      <h2>Test XAxis End Tick Position</h2>
      <p>Notice 2020-08-01</p>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart data={data} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Issues - 1';
