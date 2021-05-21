import React from 'react';
import { REFERENCE_LINE_LABEL_POSITION } from '../../../../../helpers/enum';
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
        vertical: false,
        renderOnTop: true,
        value: 800,
        labelText: 'Reference Line 1',
        labelPosition: REFERENCE_LINE_LABEL_POSITION.RIGHT,
        labelFillColor: 'rgb(255,177,177)',
        stroke: 'rgb(255,177,177)',
        strokeDasharray: '3 3',
      },
      {
        key: 'ref-line-2',
        vertical: false,
        renderOnTop: true,
        value: 600,
        labelText: 'Reference Line 2',
        labelPosition: REFERENCE_LINE_LABEL_POSITION.CENTER,
        labelFillColor: '#727272',
        stroke: '#727272',
        strokeDasharray: '3 3',
      },
      {
        key: 'ref-line-3',
        vertical: false,
        renderOnTop: true,
        value: 200,
        labelText: 'Reference Line 3',
        labelPosition: REFERENCE_LINE_LABEL_POSITION.LEFT,
        labelFillColor: 'blue',
        stroke: 'blue',
        strokeDasharray: '0',
      },
      {
        key: 'ref-line-4',
        vertical: true,
        renderOnTop: true,
        value: data[3].name,
        labelText: 'Reference Line 4',
        labelProps: {
          position: 'insideTopLeft',
          textAnchor: 'start',
          angle: 90,
          offset: 15,
        },
        labelFillColor: 'black',
        stroke: 'black',
        strokeDasharray: '0',
        position: 'end',
      },
    ],
    // HERE
    referenceAreas: [
      {
        key: 'ref-area-1',
        y1: 800,
        y2: 600,
        fill: 'rgba(255,177,177, .2)',
      },
      {
        key: 'ref-area-2',
        y1: 600,
        y2: 200,
        fill: 'rgba(177,255,216, .2)',
      },
    ],
  };
  return (
    <div>
      <h1>Reference Line (Horizontal)</h1>
      <div style={{ width: 800, height: 600 }}>
        <RechartsBarChart data={data} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Reference Lines & Areas (Horizontal)';
