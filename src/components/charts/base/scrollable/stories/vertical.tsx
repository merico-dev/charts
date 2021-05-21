import React from 'react';
import { Scrollable } from '..';
import { RechartsBarChart, calcIdealHeightForBarChart } from '../../../bar-charts';

const series = Array.from(new Array(100), (_, index) => ({
  x: index + 1,
  y: Math.random() * 10000,
}));
// series.sort((a, b) => a.y - b.y);

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    legend: {
      enabled: false,
    },
    labelKey: 'x',
    subSeriesConfiguration: [{ label: 'Value', dataKey: 'y' }],
    transposed: true,
  };
  const idealHeight = calcIdealHeightForBarChart(series.length);
  return (
    <div>
      <h1>Vertical Scroll</h1>
      <div style={{ width: 812, height: 380 }}>
        <Scrollable direction="vertical" height={idealHeight}>
          <RechartsBarChart data={series} configurations={configurations} />
        </Scrollable>
      </div>
    </div>
  );
};
export const name = 'Vertical';
