import React from 'react';
import { Resizable } from '../../resizable';
import { Scrollable } from '..';
import { RechartsBarChart, calcIdealHeightForBarChart } from '../../../bar-charts';

const series = Array.from(new Array(30), (_, index) => ({
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
      <h1>Vertical Scroll (Resizable)</h1>
      <Resizable>
        <Scrollable direction="vertical" height={idealHeight}>
          <RechartsBarChart data={series} configurations={configurations} />
        </Scrollable>
      </Resizable>
    </div>
  );
};
export const name = 'Vertical(Resizable)';
