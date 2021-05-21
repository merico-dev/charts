import React from 'react';
import * as Recharts from 'recharts';
import { TICK_FONT_SIZE } from '../helpers/enum';

function renderReferenceDotLabel(props: any) {
  if (!props) {
    return null;
  }

  const { fontSize = TICK_FONT_SIZE, text, position, angle = 0, offset = 5, textAnchor, fill } = props;

  const style = {
    textAnchor,
    fontSize,
    fill: fill,
    strokeWidth: '0.1',
  };
  return (
    <Recharts.Label
      position={position}
      offset={offset}
      value={text}
      style={style}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ position: any; offset: any; value: any; st... Remove this comment to see the full error message
      angle={angle}
    />
  );
}

export default function ReferenceDot({ labelProps, ...rest }: any) {
  return (
    <Recharts.ReferenceDot ifOverflow="extendDomain" {...rest} label={renderReferenceDotLabel({ ...labelProps })} />
  );
}
