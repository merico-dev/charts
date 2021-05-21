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
    // HERE
    referenceLines: [
      {
        key: 'ref-line-1',
        vertical: true, // HERE
        renderOnTop: true,
        value: 800,
        labelText: 'Reference Line 1',
        labelProps: {
          position: 'insideBottomLeft',
          textAnchor: 'start',
          offset: 10,
        },
        labelFillColor: 'rgb(255,177,177)',
        stroke: 'rgb(255,177,177)',
        strokeDasharray: '3 3',
      },
      {
        key: 'ref-line-2',
        vertical: true,
        renderOnTop: true,
        value: 600,
        labelText: 'Reference Line 2',
        labelProps: {
          position: 'insideLeft',
          textAnchor: 'start',
          offset: 10,
        },
        labelFillColor: '#727272',
        stroke: '#727272',
        strokeDasharray: '3 3',
      },
      {
        key: 'ref-line-3',
        vertical: true,
        renderOnTop: true,
        value: 200,
        labelText: 'Reference Line 3',
        labelProps: {
          position: 'insideTopLeft',
          textAnchor: 'start',
          offset: 10,
        },
        labelFillColor: 'blue',
        stroke: 'blue',
        strokeDasharray: '0',
      },
    ],
    referenceAreas: [
      {
        key: 'ref-area-1',
        x1: 800, // use x1 x2 not y1 y2
        x2: 600,
        fill: 'rgba(255,177,177, .2)',
      },
      {
        key: 'ref-area-2',
        x1: 600,
        x2: 200,
        fill: 'rgba(177,255,216, .2)',
      },
    ],
    transposed: true, // HERE
  };
  return (
    <div>
      <h1>Reference Line (Vertical)</h1>
      <div style={{ width: 800, height: 600 }}>
        <RechartsBarChart data={data} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Reference Lines & Areas (Vertical)';
