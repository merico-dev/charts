import React from 'react';
import RechartsBarChart from '../recharts-bar-chart';
import data from './mocks/single-value.json';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    xAxis: {
      name: 'Series',
    },
    yAxis: {
      name: 'Mock Value',
    },
    subSeriesConfiguration: [{ label: 'Rounded Value', dataKey: 'value' }],
  };
  return (
    <div>
      <h1>Single Value</h1>
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
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Single Value';
