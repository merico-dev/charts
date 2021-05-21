import React from 'react';
import RechartsBarChart from '../recharts-bar-chart';
import data from './mocks/single-value.json';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    withLegend: false,
  };
  return (
    <div>
      <h1>Empty</h1>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart data={data} configurations={configurations} empty emptyContent="Recharts Bar Chart Empty" />
      </div>
    </div>
  );
};
export const name = 'Recharts Bar Chart Empty';
