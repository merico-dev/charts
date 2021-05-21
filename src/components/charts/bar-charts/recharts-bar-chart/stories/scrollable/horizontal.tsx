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
  };
  return (
    <div>
      <h1>Scrollable (Horizontal)</h1>
      <p>Tip: Remember to leave a bottom padding, for xAxis name, which is Series in this case</p>
      <div style={{ width: 400, height: 400, paddingBottom: 50, overflowX: 'scroll' }}>
        <div style={{ width: 800, height: '100%' }}>
          <RechartsBarChart data={data} configurations={configurations} />
        </div>
      </div>
    </div>
  );
};
export const name = 'Scrollable (Horizontal)';
