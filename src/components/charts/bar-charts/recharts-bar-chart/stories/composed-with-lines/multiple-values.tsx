import React from 'react';
import RechartsBarChart from '../../recharts-bar-chart';
import data from '../mocks/multiple-values.json';

export const content = function Content() {
  const lines = {
    normal: {
      key: 'composing-line-uv',
      type: 'monotone',
      name: 'UV',
      dataKey: 'uv',
      yAxisId: 'uv',
      stroke: '#ff7300',
    },
    transposed: {
      key: 'composing-line-uv',
      type: 'monotone',
      name: 'UV',
      dataKey: 'uv',
      stroke: '#ff7300',
    },
  };
  const configurations = {
    withTooltip: true,
    legend: {
      enabled: false,
    },
    labelKey: 'name',
    subSeriesConfiguration: [
      { label: 'Male', dataKey: 'male' },
      { label: 'Female', dataKey: 'female' },
    ],
    tooltipExcludedNames: ['UV'], // HERE
  };
  return (
    <div>
      <h1>Composed with Line (Multiple Values)</h1>
      <h2>Default</h2>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart
          data={data}
          configurations={{
            ...configurations,
            composingLines: [lines.normal],
            additionalYAxis: {
              yAxisId: 'uv',
              dataKey: 'uv',
              axisLine: true,
              orientation: 'right',
              tickLabelPosition: 'insideRight',
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
            yAxis: {
              axisLine: false,
              tickLine: false,
            },
            composingLines: [lines.transposed],
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Composed with Line - Multiple Values';
