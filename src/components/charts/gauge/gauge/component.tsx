import React, { useMemo } from 'react';
import { scaleLinear } from 'd3-scale';
import Arcs from './arcs';
import Ticks from './ticks';
import Needle from './needle';
import BackgroundArc from './background-arc';

function Gauge({ value, segments, segmentLabels, colors, ticks }: any) {
  const min = segments[0];
  const max = segments[segments.length - 1];

  const percentScale = scaleLinear().domain([min, max]).range([0, 1]);

  const percentages = useMemo(() => segments.map(percentScale), [segments]);

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true);

  const percent = percentScale(value);
  const angle = angleScale(percent);

  return (
    <svg style={{ overflow: 'visible' }} width="100%" viewBox="-1.2 -1.2 2.4 1.3">
      <defs>
        <filter id="arc-shadow">
          <feDropShadow dx="0" dy="0" stdDeviation="0.01" floodColor="rgb(0,0,0)" floodOpacity={0.1} />
        </filter>
        <filter id="needle-shadow">
          <feDropShadow dx="0" dy="0" stdDeviation="0.006" floodColor="rgb(0,0,0)" floodOpacity={0.5} />
        </filter>
      </defs>
      <BackgroundArc />
      <Arcs
        percentScale={percentScale}
        angleScale={angleScale}
        colors={colors}
        segmentLabels={segmentLabels}
        percentages={percentages}
      />
      <Ticks percentScale={percentScale} angleScale={angleScale} colors={colors} ticks={ticks} />
      <Needle angle={angle} />
    </svg>
  );
}

export default Gauge;
