import React from 'react';
import SeriesComposedChart from '../series-composed-chart';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    withLegend: false,
  };
  return (
    <div>
      <h1>Empty</h1>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <SeriesComposedChart
          data={[]}
          configurations={configurations}
          empty
          emptyContent="Composed Series Chart Empty"
        />
      </div>
    </div>
  );
};
export const name = 'Empty';
