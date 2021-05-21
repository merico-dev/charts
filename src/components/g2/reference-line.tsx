import React from 'react';
import { Guide } from 'bizcharts';
import {
  deriveG2HorizontalGuideEndpointPos as deriveHorizontalEndpointPos,
  deriveG2VerticalGuideEndpointPos as deriveVerticalEndpointPos,
} from '../helpers/utils';

export const REFERENCE_LINE_LABEL_POSITION = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
};

const G2_GUIDE_LINE_TEXT_POS = {
  left: 'start',
  center: 'center',
  right: 'end',
};

const G2_GUIDE_LINE_TEXT_OFFSET_X_H = {
  left: 5,
  center: 0,
  right: -5,
};

const G2_GUIDE_LINE_TEXT_OFFSET_X_V = {
  left: 5,
  center: 5,
  right: 5,
};

const G2_GUIDE_LINE_TEXT_OFFSET_Y_H = {
  left: -5,
  center: -5,
  right: -5,
};

const G2_GUIDE_LINE_TEXT_OFFSET_Y_V = {
  left: 5,
  center: 0,
  right: -5,
};

function ReferenceLine({
  transpose = false,
  vertical = false,
  renderOnTop = false,
  xScaleKey = 'id',
  yScaleKey = 'value',
  value,
  renderLabel,
  labelText,
  labelPosition = REFERENCE_LINE_LABEL_POSITION.LEFT,
  labelFillColor = '#727272',
  labelStrokeColor,
  stroke = '#727272',
}: any) {
  return (
    <Guide.Line
      top={renderOnTop}
      start={
        vertical
          ? deriveVerticalEndpointPos(value, '0%', xScaleKey, transpose)
          : deriveHorizontalEndpointPos('0%', value, yScaleKey, transpose)
      }
      end={
        vertical
          ? deriveVerticalEndpointPos(value, '100%', xScaleKey, transpose)
          : deriveHorizontalEndpointPos('100%', value, yScaleKey, transpose)
      }
      lineStyle={{
        stroke,
        lineDash: [0, 1, 1],
        lineWidth: 1,
      }}
      text={{
        style: {
          fill: labelFillColor,
          stroke: labelStrokeColor,
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          lineWidth: 0.2,
          textAlign: labelPosition,
          fontSize: 12,
          fontWeight: 400,
        },
        content: renderLabel ? renderLabel() : labelText,
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        position: G2_GUIDE_LINE_TEXT_POS[labelPosition],
        offsetX: vertical
          ? // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            G2_GUIDE_LINE_TEXT_OFFSET_X_V[labelPosition]
          : // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            G2_GUIDE_LINE_TEXT_OFFSET_X_H[labelPosition],
        offsetY: vertical
          ? // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            G2_GUIDE_LINE_TEXT_OFFSET_Y_V[labelPosition]
          : // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            G2_GUIDE_LINE_TEXT_OFFSET_Y_H[labelPosition],
      }}
    />
  );
}

export default ReferenceLine;
