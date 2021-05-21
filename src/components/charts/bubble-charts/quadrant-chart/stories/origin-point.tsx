import React from 'react';
import { maxBy, meanBy, minBy } from 'lodash';
import QuadrantChart from '../quadrant-chart';
import data from './mock.json';

export const content = function Content() {
  const xField = 'avg';
  const yField = 'cv';
  const nameMap = {
    [xField]: 'Average Dev Equivalent',
    [yField]: 'Discrete Coefficient',
  };

  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  const minX = minBy(data, xField)[xField];
  const meanX = meanBy(data, xField);
  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  const maxX = maxBy(data, xField)[xField];

  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  const minY = Math.max(0, minBy(data, yField)[yField]);
  const meanY = meanBy(data, yField);
  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  const maxY = maxBy(data, yField)[yField];

  const maxDistanceX = Math.max(Math.abs(meanX - minX), Math.abs(maxX - meanX));
  const xBoundaryMin = meanX - maxDistanceX * 1.5;
  const xBoundaryMax = meanX + maxDistanceX * 1.5;

  const maxDistanceY = Math.max(Math.abs(meanY - minY), Math.abs(maxY - meanY));
  const yBoundaryMin = meanY - maxDistanceY * 1.5;
  const yBoundaryMax = meanY + maxDistanceY * 1.5;
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
    xBoundary: { min: xBoundaryMin, max: xBoundaryMax },
    yBoundary: { min: yBoundaryMin, max: yBoundaryMax },
    xBaseline: meanX,
    yBaseline: meanY,
    quadrantLabels: ['High Stability', '', '', 'High Efficiency'],
  };
  return (
    <div>
      <h1>Origin Point</h1>
      <p>xBaseline and yBaseline decide the origin point</p>
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
export const name = 'Origin Point';
