import React from 'react';
import RechartsBarChart from '../recharts-bar-chart';
import data from './mocks/multiple-values.json';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    xAxis: {
      name: 'Page',
    },
    yAxis: {
      name: 'Mock Value',
    },
    subSeriesConfiguration: [
      { label: 'UV', dataKey: 'uv' }, // no stackId
      { label: 'Male', dataKey: 'male' },
      { label: 'Female', dataKey: 'female' },
    ],
  };
  return (
    <div>
      <h1>Categorized</h1>
      <h2>Default</h2>
      <div style={{ width: 800, height: 600 }}>
        <RechartsBarChart data={data} configurations={configurations} />
      </div>

      <h2>Transposed</h2>
      <div style={{ width: 800, height: 600 }}>
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
export const name = 'Categorized';
