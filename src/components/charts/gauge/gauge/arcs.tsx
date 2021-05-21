import React, { useMemo } from 'react';
import { arc } from 'd3-shape';
import { OUTER_RADIUS, INNER_RADIUS, RING_WIDTH } from './constants';

const truthy = (v: any) => v;

export default function Arcs({ /* percentScale, angleScale, */ percentages, colors, segmentLabels }: any) {
  const arcs = useMemo(() => {
    function percentageToArc(p: any, index: any) {
      if (index === percentages.length - 1) {
        return;
      }
      const ret = {};

      const start = p;
      const end = percentages[index + 1];

      // @ts-expect-error ts-migrate(2339) FIXME: Property 'startAngle' does not exist on type '{}'.
      ret.startAngle = Math.PI * (-0.5 + start);
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'endAngle' does not exist on type '{}'.
      ret.endAngle = Math.PI * (-0.5 + end);
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'midAngle' does not exist on type '{}'.
      ret.midAngle = Math.PI * (-0.5 + (end + start) / 2);

      // @ts-expect-error ts-migrate(2339) FIXME: Property 'arc' does not exist on type '{}'.
      ret.arc = arc()
        .innerRadius(INNER_RADIUS)
        .outerRadius(OUTER_RADIUS)
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'startAngle' does not exist on type '{}'.
        .startAngle(ret.startAngle)
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'endAngle' does not exist on type '{}'.
        .endAngle(ret.endAngle)
        .cornerRadius(0)();

      // @ts-expect-error ts-migrate(2339) FIXME: Property 'center' does not exist on type '{}'.
      ret.center = arc()
        .innerRadius(OUTER_RADIUS)
        .outerRadius(OUTER_RADIUS + RING_WIDTH / 2)
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'startAngle' does not exist on type '{}'.
        .startAngle(ret.startAngle)
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'endAngle' does not exist on type '{}'.
        .endAngle(ret.endAngle)
        .cornerRadius(0)
        // @ts-expect-error ts-migrate(2555) FIXME: Expected at least 1 arguments, but got 0.
        .centroid();

      return ret;
    }

    return percentages.map(percentageToArc).filter(truthy);
  }, [percentages, colors]);

  return arcs.map((item: any, index: any) => [
    <path key={`arc-${item.startAngle}`} d={item.arc} fill={colors[index]} />,
    <text
      key={`arc-text-${item.startAngle}`}
      fontSize={0.1}
      fill={segmentLabels[index].color ?? 'black'}
      textAnchor="middle"
      transform={`translate(${item.center[0]}, ${item.center[1]}) rotate(${item.midAngle * (180 / Math.PI)})`}
    >
      {segmentLabels[index].text}
    </text>,
  ]);
}
