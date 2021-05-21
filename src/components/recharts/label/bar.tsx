import React from 'react';
import { TICK_FONT_SIZE } from '../../helpers/enum';

export const getBarLabelRenderer = (transposed: any, formatter: any, conf: any) => {
  const {
    enabled,
    fill = '#666',
    fontSize = TICK_FONT_SIZE,
    dominantBaseline = 'middle',
    position = 'outsideTop',
  } = conf;

  return function barLabelRenderer(props: any) {
    if (!enabled) {
      return null;
    }
    const { x, y, width, height, value } = props;
    const textAnchor = transposed ? 'start' : 'middle';
    const dx = transposed ? fontSize / 2 : width / 2;
    const dy = transposed ? height / 2 : -fontSize / 2;
    let dySign = 1;
    if (!transposed && position === 'outsideBottom') {
      dySign = -1;
    }

    const xNeedShift = transposed;
    const xWithShift = xNeedShift ? x + width : x;

    return (
      <g transform={`translate(${xWithShift},${y})`}>
        <text
          x={0}
          y={0}
          dx={dx}
          dy={dy * dySign}
          fill={fill}
          textAnchor={textAnchor}
          dominantBaseline={dominantBaseline}
          fontSize={fontSize}
        >
          {formatter(value)}
        </text>
      </g>
    );
  };
};
