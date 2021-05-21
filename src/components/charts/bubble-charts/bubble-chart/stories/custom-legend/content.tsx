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
  'Current Sprint': '#FFC7AD',
  Average: '#A2C5F6',
};

const STROKE_COLOR_MAP = {
  'Current Sprint': '#F0876A',
  Average: '#4B90EE',
};

export const content = function Content({ X_MIN, X_MAX, Y_MIN, Y_MAX, DEVEQ_MIN, DEVEQ_MAX, MAX_RADIUS }: any) {
  const NAME_CURRENT = 'Current Sprint';
  const NAME_AVG = 'Average';
  const data = [
    {
      issues: X_MAX,
      story_point: Y_MAX,
      dev_eq: DEVEQ_MAX,
      name: NAME_CURRENT,
    },
    {
      issues: X_MIN,
      story_point: Y_MIN,
      dev_eq: DEVEQ_MIN,
      name: NAME_AVG,
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
    tickLine: null,
    tickCount: 3,
    title: {
      text: nameMap[xField],
      style: {
        fontSize: 14,
      },
    },
  };
  const yAxisMax = Y_MAX === Y_MIN ? 2 * Y_MAX : Math.max(2 * Y_MAX - Y_MIN, 10);
  const yAxisMin = Y_MAX === Y_MIN ? -yAxisMax + 2 * Y_MAX : 0;
  const yAxis = {
    min: yAxisMin,
    max: yAxisMax,
    grid: {
      line: {
        style: {
          stroke: '#E0E0E5',
        },
      },
    },
    line: null,
    title: {
      text: nameMap[yField],
      style: {
        fontSize: 14,
      },
    },
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
    legend: {
      layout: 'horizontal',
      position: 'top-right',
      custom: true,
      items: [
        {
          name: 'Size: DevEq',
          value: 0,
          marker: {
            style: {
              fill: '#E0E0E5',
              stroke: '#828487',
            },
          },
        },
        {
          name: NAME_CURRENT,
          value: NAME_CURRENT,
          marker: {
            style: {
              fill: COLOR_MAP[NAME_CURRENT],
            },
          },
        },
        {
          name: NAME_AVG,
          value: NAME_AVG,
          marker: {
            style: {
              fill: COLOR_MAP[NAME_AVG],
            },
          },
        },
      ],
    },
    pointStyle: (x: any) => {
      return {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        fill: COLOR_MAP[x.name],
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        stroke: STROKE_COLOR_MAP[x.name],
        fillOpacity: 0.7,
        lineWidth: 2,
      };
    },
    // straight line, origin point -> the central point of Average Bubble
    regressionLine: {
      type: 'linear',
      algorithm: regressionLineData,
      style: {
        stroke: '#C1C1C7',
        lineDash: [5],
      },
    },
    onReady: (plot: any) => {
      // https://g2plot.antv.vision/zh/docs/api/options/interactions
      plot.chart.removeInteraction('legend-filter');
    },
  };
  return (
    <div>
      <h1>Custom Legend</h1>
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
