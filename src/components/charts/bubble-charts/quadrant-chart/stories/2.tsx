import React, { useMemo } from 'react';
import { maxBy, round } from 'lodash';
import jsonStableStringify from 'json-stable-stringify';
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

  /* ====== BEGIN ====== */
  const { MIN_SIZE, MAX_SIZE, processedData } = useMemo(() => {
    const sizeMap = new Map();
    const MIN_SIZE = 20;
    const MAX_SIZE = 60;
    const SIZE_INCREMENT = 8;

    const processedData = JSON.parse(jsonStableStringify(data));
    processedData.forEach((item: any) => {
      item.size = sizeMap.get(item[yField]) || MIN_SIZE;
      sizeMap.set(item[yField], item.size + SIZE_INCREMENT);
    });
    processedData.sort((a: any, b: any) => b.size - a.size);
    return {
      MIN_SIZE,
      MAX_SIZE,
      processedData,
    };
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string' is not assignable to par... Remove this comment to see the full error message
  }, jsonStableStringify(data));
  /* ====== END ====== */

  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
  const maxX = Math.max(100, maxBy(processedData, (a) => a[xField])[xField]);
  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
  const maxY = Math.max(1, maxBy(processedData, (a) => a[yField])[yField]);

  const configurations = {
    xField,
    yField,
    sizeField: 'size', // HERE
    pointSize: [MIN_SIZE, MAX_SIZE], // HERE
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
      <h1>Sizing</h1>
      <p>
        Overlapped bubbles have increased size
        <br />
        Tip: see the left bottom cornor, where 3 bubbles overlap
      </p>
      <div style={{ width: 800, height: 600 }}>
        <QuadrantChart
          data={processedData}
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
export const name = 'Sizing';
