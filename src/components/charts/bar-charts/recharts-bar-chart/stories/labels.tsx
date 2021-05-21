import React from 'react';
import { round } from 'lodash';
import RechartsBarChart from '../recharts-bar-chart';
import data from './mocks/single-value.json';

export const content = function Content() {
  const subSeriesConfiguration = [
    {
      label: 'Rounded Value',
      dataKey: 'value',
      valueLabel: { enabled: true },
    },
  ];
  const transposedSubSeriesConfiguration = [
    {
      label: 'Rounded Value',
      dataKey: 'value',
      stackId: 'value',
      valueLabel: { enabled: true },
    },
  ];
  const configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    valueFormatter: (v: any) => round(v, 0),
    xAxis: {
      name: 'Series',
    },
    yAxis: {
      name: 'Mock Value',
    },
    subSeriesConfiguration,
  };
  return (
    <div>
      <h1>Labels on bars</h1>
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
            subSeriesConfiguration: transposedSubSeriesConfiguration,
            transposed: true,
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Labels on bars';
