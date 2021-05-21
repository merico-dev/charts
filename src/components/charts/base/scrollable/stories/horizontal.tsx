import React from 'react';
import { Scrollable } from '..';
import { RechartsBarChart, calcIdealWidthForBarChart } from '../../../bar-charts';

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
  };
  const idealWidth = calcIdealWidthForBarChart(series.length);
  return (
    <div>
      <h1>Horizontal Scroll</h1>
      <div style={{ width: 812, height: 380 }}>
        <Scrollable direction="horizontal" width={idealWidth}>
          <RechartsBarChart data={series} configurations={configurations} />
        </Scrollable>
      </div>
    </div>
  );
};
export const name = 'Horizontal';
