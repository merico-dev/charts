import React from 'react';
import RechartsBarChart from '../../recharts-bar-chart';
import data from '../mocks/single-value.json';

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
    transposed: true,
  };
  return (
    <div>
      <h1>Scrollable (Vertical)</h1>
      <div style={{ width: 800, height: 400, paddingBottom: 50, overflowX: 'scroll' }}>
        <div style={{ width: 800, height: 800 }}>
          <RechartsBarChart data={data} configurations={configurations} />
        </div>
      </div>
    </div>
  );
};
export const name = 'Scrollable (Vertical)';
