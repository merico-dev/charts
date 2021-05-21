import React from 'react';
import RadarChart from '../radar-chart';
import data from './mock.json';

export const content = function Content() {
  const configurations = {
    angleField: 'metricName',
    radiusField: 'value',
    seriesField: 'name',
    radiusAxis: {
      grid: {
        line: { type: 'line' },
      },
      min: 0,
      max: 1,
    },
    line: { visible: true },
    point: {
      visible: true,
      shape: 'circle',
    },
    legend: {
      visible: true,
      position: 'bottom-center',
    },
    valueFormatter: (v: any) => v,
  };
  return (
    <div>
      <h1>Custom Color</h1>
      <div style={{ width: 600, height: 600 }}>
        <RadarChart data={data} configurations={configurations} />
      </div>
      <div style={{ width: 600, height: 600 }}>
        <RadarChart
          data={data}
          configurations={{
            ...configurations,
            color: ['#d62728', '#2ca02c'],
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Color';
