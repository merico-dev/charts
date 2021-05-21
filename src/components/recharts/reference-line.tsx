import React from 'react';
import * as Recharts from 'recharts';

const LABEL_TEXT_POSITION = {
  // FIXME: abandon these legacy confs: left, center, right
  left: {
    label: 'insideBottomLeft',
    textAnchor: 'start',
  },
  center: {
    label: 'insideBottom',
    textAnchor: 'middle',
  },
  right: {
    label: 'insideBottomRight',
    textAnchor: 'end',
  },
} as const;

type LabelProps = React.ComponentProps<typeof Recharts.Label>;
type LineProps = React.ComponentProps<typeof Recharts.Line>;
type ReferenceLineProps = React.ComponentProps<typeof Recharts.ReferenceLine>;

export type ReferenceLineLabelConfig = Partial<{
  textAnchor: React.CSSProperties['textAnchor'];
  labelFillColor: React.CSSProperties['fill'];
  labelStrokeColor: React.CSSProperties['stroke'];
  labelText: LabelProps['value'];
  position: LabelProps['position'];
  angle: number;
  offset: number;
  vertical: boolean;
}>;

function referenceLineLabel({
  labelText,
  position,
  angle = 0,
  offset = 5,
  textAnchor,
  labelFillColor,
  labelStrokeColor /* vertical */,
}: ReferenceLineLabelConfig) {
  if (!labelText) {
    return null;
  }

  const style = {
    textAnchor,
    fontSize: '13',
    fill: labelFillColor,
    stroke: labelStrokeColor,
    strokeWidth: '0.1',
  };
  return (
    <Recharts.Label
      position={position}
      offset={offset}
      value={labelText}
      style={style}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ position: "insideBottomLeft" | "insideBott... Remove this comment to see the full error message
      angle={angle}
    />
  );
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
function calcAngleDegrees(x: number, y: number) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

export type RenderReferenceLineByDataConfig = Partial<{
  key: string | number;
  renderOnTop: boolean;
  segmentData: unknown;
  renderLabelAtIndex: number;
  labelText: ReferenceLineLabelConfig['labelText'];
  renderLabel: () => LabelProps['value'];
  labelFillColor: React.SVGProps<SVGTextElement>['fill'];
  stroke: LineProps['stroke'];
  strokeDasharray: LineProps['strokeDasharray'];
  yAxisId?: string | number;
}>;

export function renderReferenceLineByData({
  key,
  segmentData,

  // renderOnTop = false,
  renderLabelAtIndex,

  labelText,
  renderLabel,
  labelFillColor = '#727272',
  stroke = '#727272',
  strokeDasharray = '3 3',
  yAxisId = 0,
}: RenderReferenceLineByDataConfig) {
  const first = { x: 0, y: 0 };
  const renderLabelByIndex = ({ index, x, y /* ...rest */ }: any) => {
    if (index === 0) {
      first.x = x;
      first.y = y;
    }
    if (index !== renderLabelAtIndex) {
      return null;
    }
    const degree = -1 * calcAngleDegrees(Math.abs(x - first.x), Math.abs(y - first.y));
    return (
      <text
        width={100}
        height={12}
        x={x}
        y={y}
        dy={-4}
        transform={`rotate(${degree} ${x} ${y})`}
        fill={labelFillColor}
        fontSize={13}
        textAnchor="start"
      >
        {renderLabel ? renderLabel() : labelText}
      </text>
    );
  };
  return (
    <Recharts.Line
      isAnimationActive={false}
      key={key}
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      name={key}
      data={segmentData}
      dataKey="y"
      type="linear"
      stroke={stroke}
      strokeDasharray={strokeDasharray}
      dot={false}
      activeDot={false}
      label={renderLabelByIndex}
      yAxisId={yAxisId}
    />
  );
}

export type RenderSimpleReferenceLineConfig = Partial<{
  key: string | number;
  vertical: boolean;
  renderOnTop: boolean;
  value: number | string;
  labelText: ReferenceLineLabelConfig['labelText'];
  renderLabel: () => ReferenceLineLabelConfig['labelText'];
  position: ReferenceLineProps['position'];
  labelProps: ReferenceLineLabelConfig;
  labelPosition: keyof typeof LABEL_TEXT_POSITION;
  labelFillColor: ReferenceLineLabelConfig['labelFillColor'];
  labelStrokeColor: ReferenceLineLabelConfig['labelStrokeColor'];
  stroke: ReferenceLineProps['stroke'];
  strokeDasharray: ReferenceLineProps['strokeDasharray'];
  yAxisId?: string | number;
}>;

export function renderSimpleReferenceLine({
  key,
  vertical = false,
  renderOnTop = false,
  value,
  labelText,
  renderLabel,
  position = 'middle',

  labelProps = {
    position: 'insideBottomLeft',
    textAnchor: 'start',
  },

  // deprecated
  labelPosition,

  labelFillColor = '#727272',
  labelStrokeColor = '#363636',
  stroke = '#727272',
  strokeDasharray = '3 3',
  yAxisId = 0,
}: RenderSimpleReferenceLineConfig) {
  if (labelPosition) {
    const conf = LABEL_TEXT_POSITION[labelPosition];
    labelProps.position = conf.label;
    labelProps.textAnchor = conf.textAnchor;
  }
  return (
    <Recharts.ReferenceLine
      key={key}
      isFront={renderOnTop}
      x={vertical ? value : undefined}
      y={vertical ? undefined : value}
      stroke={stroke}
      strokeDasharray={strokeDasharray}
      ifOverflow="extendDomain"
      position={position}
      yAxisId={yAxisId}
    >
      {referenceLineLabel({
        labelText,
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ textAnchor?: "-moz-initial" | ... Remove this comment to see the full error message
        renderLabel,
        labelFillColor,
        labelStrokeColor,
        vertical,
        ...labelProps,
      })}
    </Recharts.ReferenceLine>
  );
}

export type RenderReferenceLineConfig = RenderReferenceLineByDataConfig | RenderSimpleReferenceLineConfig;

function isRenderReferenceLineByDataConfig(config: Record<string, unknown>): config is RenderReferenceLineByDataConfig {
  return !!config.segmentData;
}

export function renderReferenceLine(props: RenderReferenceLineConfig) {
  if (isRenderReferenceLineByDataConfig(props)) {
    return renderReferenceLineByData(props);
  } else {
    return renderSimpleReferenceLine(props);
  }
}
