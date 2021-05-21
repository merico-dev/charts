import styled from '@emotion/styled';
import { findIndex } from 'lodash';
import React, { useMemo } from 'react';

const ValueLabelContainer = styled.div`
  display: table;
  width: auto;
  margin: 0 auto;
  text-align: center;
`;

const DefaultValueLabel = styled.div`
  font-size: 14px;
  text-align: center;
`;

function defaultValueLabelRenderer({ value, segmentLabel }: any) {
  return (
    <DefaultValueLabel>
      {segmentLabel && (
        <span style={{ color: segmentLabel.color }}>
          {segmentLabel.text}
          <br />
        </span>
      )}
      {value}
    </DefaultValueLabel>
  );
}

export default function ValueLabel({
  value,
  segments,
  segmentLabels,
  colors,
  renderValueLabel = defaultValueLabelRenderer,
}: any) {
  const labelProps = useMemo(() => {
    const lastIndex = segments.length - 2;
    const index = findIndex(segments, (s, i) => {
      if (i === lastIndex) {
        return true;
      }
      const start = s;
      const end = segments[i + 1];
      // true if value in [start, end)
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
      return start <= value && value < end;
    });
    return {
      value,
      segmentStart: segments[index],
      segmentColor: colors[index],
      segmentLabel: segmentLabels[index],
    };
  }, [value, segments, colors]);

  return <ValueLabelContainer className="value-label">{renderValueLabel(labelProps)}</ValueLabelContainer>;
}
