import React from 'react';
import RechartsBarChart from '../recharts-bar-chart';
import data from './mocks/single-value.json';

export const content = ({ maxTickLength }: any) => {
  const configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    subSeriesConfiguration: [{ label: 'Rounded Value', dataKey: 'value' }],
  };
  return (
    <div>
      <h1>Max Tick Length - SeriesNames</h1>
      <h2>Default</h2>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart
          data={data}
          configurations={{
            ...configurations,
            xAxis: {
              maxTickLength,
            },
          }}
        />
      </div>

      <h2>Transposed</h2>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart
          data={data}
          configurations={{
            ...configurations,
            transposed: true,
            xAxis: {
              maxTickLength,
            },
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Max Tick Length - SeriesNames';
export const parameters = {
  args: {
    maxTickLength: 50,
  },
  argTypes: {
    maxTickLength: {
      control: {
        type: 'range',
        min: 10,
        max: 150,
        step: 10,
      },
    },
  },
};
