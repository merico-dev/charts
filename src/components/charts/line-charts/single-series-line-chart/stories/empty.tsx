import React from 'react';
import SingleSeriesLineChart from '../single-series-line-chart';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    withLegend: true,
  };
  return (
    <div>
      <h1>Empty</h1>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart
          data={[]}
          configurations={configurations}
          emptyContent="Single Series Line Chart Empty"
        />
      </div>
    </div>
  );
};
export const name = 'Empty';
