import { round } from 'lodash';
import React, { useMemo } from 'react';
import BubbleChart from '../../bubble-chart';

function toThousands(num: any) {
  const ret = round(num);
  if (ret < 1000) {
    return ret;
  }
  return `${(ret / 1000).toFixed(0)}k`;
}

const COLOR_MAP = {
  'Current Sprint': '#FFA940',
  Average: '#8C8C8C',
};

export const content = function Content({ X_MIN, X_MAX, Y_MIN, Y_MAX, DEVEQ_MIN, DEVEQ_MAX, MAX_RADIUS }: any) {
  const data = [
    {
      issues: X_MAX,
      story_point: Y_MAX,
      dev_eq: DEVEQ_MAX,
      name: 'Current Sprint',
    },
    {
      issues: X_MIN,
      story_point: Y_MIN,
      dev_eq: DEVEQ_MIN,
      name: 'Average',
    },
  ];

  const xField = 'issues';
  const yField = 'story_point';
  const sizeField = 'dev_eq';
  const nameMap = {
    [xField]: 'Issues',
    [yField]: 'Story Point',
    [sizeField]: 'Dev Equivalent',
  };

  const xAxis = {
    min: X_MIN * 0.8,
    max: X_MAX * 1.2,
    grid: null,
  };
  const yAxis = {
    min: Math.max(2 * Y_MIN - Y_MAX, 0),
    max: 2 * Y_MAX - Y_MIN,
    grid: {
      line: {
        style: {
          stroke: '#EAEAEA',
          lineDash: [5],
        },
      },
    },
    line: null,
  };

  const regressionLineData = useMemo(() => {
    const x1 = 0;
    const y1 = 0;

    const x2 = data[1][xField];
    const y2 = data[1][yField];

    // y = slope * x + intercept
    const slope = (y2 - y1) / (x2 - x1);
    const intercept = y2 - x2 * slope;

    const x3 = xAxis.max * 1.5; // force it to overflow
    const y3 = slope * x3 + intercept;
    return [
      [x1, y1],
      [x3, y3],
    ];
  }, [xAxis.min, yAxis.min, data]);

  const configurations = {
    xField,
    yField,
    sizeField,
    colorField: 'name',
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    color: data.map((item) => COLOR_MAP[item.name]),
    size: [Math.max(1, (DEVEQ_MIN * MAX_RADIUS) / DEVEQ_MAX), MAX_RADIUS],
    xAxis,
    yAxis,
    nameMap,
    tooltipValueFormatter: (_name: any, value: any) => toThousands(value),
    label: null,
    pointStyle: (x: any) => {
      return {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        fill: COLOR_MAP[x.name],
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        stroke: COLOR_MAP[x.name],
        fillOpacity: 0.15,
        lineWidth: 2,
      };
    },
    // straight line, origin point -> the central point of Average Bubble
    regressionLine: {
      type: 'linear',
      algorithm: regressionLineData,
    },
  };
  return (
    <div>
      <h1>Basic</h1>
      <p>Tip: Hover on bubbles to see tooltip</p>
      <div style={{ width: 800, height: 600 }}>
        <BubbleChart
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
