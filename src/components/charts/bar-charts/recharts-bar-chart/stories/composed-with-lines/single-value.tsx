import React from 'react';
import RechartsBarChart from '../../recharts-bar-chart';
import data from '../mocks/single-value.json';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    legend: {
      enabled: false,
    },
    labelKey: 'name',
    subSeriesConfiguration: [{ label: 'Rounded Value', dataKey: 'value' }],
    composingLines: [
      {
        // HERE
        key: 'composing-line-trend',
        name: 'composing-line-trend',
        type: 'monotone',
        dataKey: 'value',
        stroke: '#ff7300',
      },
    ],
    tooltipExcludedNames: ['composing-line-trend'], // HERE
  };
  return (
    <div>
      <h1>Composed with Line (Single Value)</h1>
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
            yAxis: {
              axisLine: false,
              tickLine: false,
            },
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Composed with Line - Single Value';
