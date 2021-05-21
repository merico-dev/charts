import styled from '@emotion/styled';
import React from 'react';
import Gauge from './component';
import ValueLabel from './value-label';

const GaugeContainer = styled.div(
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'width' does not exist on type 'Pick<Deta... Remove this comment to see the full error message
  ({ width, height }) => `
  width: ${width}px;
  height: ${height}px;
`
);

export default function GaugeWrapper(props: any) {
  const { value, configurations /* emptyContent */ } = props;
  if (!configurations) {
    throw new Error('[Gauge] missing prop: configurations');
  }

  const {
    width = 360,
    height = 200,
    renderValueLabel,
    segments,
    segmentLabels = [],
    colors,
    ...gaugeConfigurations
  } = configurations;

  const commonConfigurations = {
    segments,
    segmentLabels,
    colors,
  };

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element[]; width: any; height: a... Remove this comment to see the full error message
    <GaugeContainer width={width} height={height}>
      <Gauge value={value} {...commonConfigurations} {...gaugeConfigurations} />
      <ValueLabel value={value} renderValueLabel={renderValueLabel} {...commonConfigurations} />
    </GaugeContainer>
  );
}
