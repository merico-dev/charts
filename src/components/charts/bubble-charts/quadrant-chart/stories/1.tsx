import React from 'react';
import { maxBy, round } from 'lodash';
import QuadrantChart from '../quadrant-chart';
import data from './mock.json';

// for a prettier axis
const roundDevEquivalent = (number: any) => {
  if (number < 100) return 100;
  if (number < 10000) {
    return round(number, -2);
  }
  return round(number, -3);
};

export const content = function Content() {
  const xField = 'avg';
  const yField = 'cv';
  const nameMap = {
    [xField]: 'Average Dev Equivalent',
    [yField]: 'Discrete Coefficient',
  };

  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  const maxX = Math.max(100, maxBy(data, (a) => a[xField])[xField]);
  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  const maxY = Math.max(1, maxBy(data, (a) => a[yField])[yField]);

  const configurations = {
    xField,
    yField,
    sizeField: 'size',
    pointSize: [20, 60],
    xAxis: {
      name: 'Dev Equivalent per Capita',
    },
    yAxis: {
      name: 'Coefficient of Variation',
    },
    nameMap,
    tooltipTitleFormatter: (v: any) => v,
    xBoundary: { min: 0, max: roundDevEquivalent(maxX * 1.5) },
    yBoundary: { min: 0, max: maxY * 1.5 },
    quadrantLabels: ['High Stability', '', '', 'High Efficiency'],
  };
  return (
    <div>
      <h1>Basic</h1>
      <p>Tip: Hover on bubbles to see tooltip</p>
      <div style={{ width: 800, height: 600 }}>
        <QuadrantChart
          data={data}
          configurations={{
            ...configurations,
            width: 800,
            height: 600,
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Basic';
