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
  const dep = jsonStableStringify(data);

  const processedData = useMemo(() => {
    const target = data.find((item) => item.key === 'randomID5');
    return [
      ...data,
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      { ...target, key: 'randomID5-1', name: `Dup-${target.name}` },
    ];
  }, [dep]);

  const seriesBySameValue = useMemo(() => {
    const m = {};
    processedData.forEach((item) => {
      const key = `${item[xField]}-${item[yField]}`;
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      if (!m[key]) {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        m[key] = [item];
      } else {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        m[key].push(item);
      }
    });
    return m;
  }, [jsonStableStringify(processedData)]);

  function labelFormatter(_value: any, data: any /* style */) {
    const { [xField]: x, [yField]: y, name /* size */ } = data._origin;
    if (x === 0 && y === 0) {
      return '';
    }
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const series = seriesBySameValue[`${x}-${y}`];
    if (series.length === 1) {
      return `${name}\n(${x}, ${y})`;
    }
    if (name !== series[series.length - 1].name) {
      return null;
    }
    return `${series.map((item: any) => `${item.name}`).join('\n')}\n(${x}, ${y})`;
  }
  /* ====== END ====== */

  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  const maxX = Math.max(100, maxBy(processedData, (a) => a[xField])[xField]);
  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  const maxY = Math.max(1, maxBy(processedData, (a) => a[yField])[yField]);

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
    /* ====== BEGIN ====== */
    labelProps: {
      visible: true,
      formatter: labelFormatter,
      offsetX: 10,
      offsetY: 12,
      style: {
        textAlign: 'start',
        textBaseline: 'middle',
      },
    },
    /* ====== END ====== */
    quadrantLabels: ['High Stability', '', '', 'High Efficiency'],
  };
  return (
    <div>
      <h1>Bubble Labels</h1>
      <p>
        Share labels between bubbles with same value <br />
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
export const name = 'Bubble Labels';
