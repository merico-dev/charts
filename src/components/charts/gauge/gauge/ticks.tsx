import React, { useMemo } from 'react';
import { getCoordsOnArc } from './helpers';
import { INNER_RADIUS, RING_WIDTH } from './constants';

export default function Ticks({ percentScale, angleScale, ticks }: any) {
  const scaledTicks = useMemo(() => {
    const scaledTicks = ticks.map((t: any) => {
      const tick = {
        value: t,
        percent: percentScale(t),
      };
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'angle' does not exist on type '{ value: ... Remove this comment to see the full error message
      tick.angle = angleScale(tick.percent);
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'location' does not exist on type '{ valu... Remove this comment to see the full error message
      tick.location = getCoordsOnArc(tick.angle, INNER_RADIUS);
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'textLocation' does not exist on type '{ ... Remove this comment to see the full error message
      tick.textLocation = getCoordsOnArc(tick.angle, INNER_RADIUS - RING_WIDTH / 2);
      return tick;
    });
    return scaledTicks;
  }, [ticks, percentScale, angleScale]);

  return scaledTicks.map(({ location: [cx, cy], textLocation: [tcx, tcy], angle, value }: any) => [
    <line
      key={`tick-line-${cx}`}
      x1={cx}
      x2={cx}
      y1={cy}
      y2={cy - RING_WIDTH / 4}
      transform={`rotate(${angle * (180 / Math.PI)}, ${cx}, ${cy})`}
      stroke="white"
      strokeWidth={0.005}
    />,
    <text
      key={`tick-text-${tcx}`}
      fontSize={0.1}
      fill="#A1A3A9"
      transform={`translate(${tcx}, ${tcy}) rotate(${angle * (180 / Math.PI)})`}
      textAnchor="middle"
    >
      {value}
    </text>,
  ]);
}
