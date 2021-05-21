import React, { useMemo } from 'react';
import { arc } from 'd3-shape';
import { OUTER_RADIUS, INNER_RADIUS } from './constants';

export default function BackgroundArc() {
  const backgroundArc = useMemo(() => {
    // @ts-expect-error ts-migrate(2555) FIXME: Expected at least 1 arguments, but got 0.
    return arc()
      .innerRadius(INNER_RADIUS)
      .outerRadius(OUTER_RADIUS)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2)
      .cornerRadius(0)();
  }, []);

  return <path d={backgroundArc} fill="white" filter="url(#arc-shadow)" />;
}
