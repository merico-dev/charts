import React, { useState, useLayoutEffect, useCallback, useEffect } from 'react';
import { YAxis, Label } from 'recharts';
import { AxisDomain } from 'recharts/types/util/types';

import { TICK_FONT_SIZE } from '../helpers/enum';
import { FormatterFunc } from '../helpers';

const SHIFT = TICK_FONT_SIZE / 2;
const Y_FONT_SHIFT = 2;

type RenderTickConfig = {
  x?: number;
  y?: number;
  className?: string;
  valueText?: string;
  textAnchor?: React.CSSProperties['textAnchor'];
  transform?: React.SVGAttributes<SVGElement>['transform'];
  color?: string;
  getCustomTick?: (config: { x: number; y: number; valueText?: string }) => React.ReactNode;
  vertical?: boolean;
  forYAxis?: boolean;
};

export type TickProps = RenderTickConfig & {
  formatter: FormatterFunc;
  maxTickLength?: number;
  preserveZero?: boolean;
  payload?: { value: string | number };
  barSize?: unknown;
};

function renderTick(props: RenderTickConfig) {
  const { x, y, className = '', textAnchor, transform, getCustomTick, valueText, color /* forYAxis */ } = props;
  if (getCustomTick) {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number | undefined' is not assignable to typ... Remove this comment to see the full error message
    return getCustomTick({ x, y, valueText });
  }
  return (
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    <g transform={`translate(${x},${y + SHIFT - Y_FONT_SHIFT})`}>
      <text
        className={`x-tick ${className}`}
        x={0}
        y={0}
        textAnchor={textAnchor}
        fontSize={TICK_FONT_SIZE}
        transform={transform}
        fill={color ?? '#666'}
      >
        {valueText}
      </text>
    </g>
  );
}

function renderClippedTick(props: RenderTickConfig, maxTickLength: number) {
  const { x, y, className = '', textAnchor, transform, valueText, /* forYAxis, */ vertical, color } = props;
  const measures = {
    width: vertical ? maxTickLength : TICK_FONT_SIZE * 1.5,
    height: vertical ? TICK_FONT_SIZE * 1.5 : maxTickLength,
  };
  const style: React.CSSProperties = {
    textAnchor,
    fontSize: TICK_FONT_SIZE,
    color: color ?? '#666',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  if (vertical) {
    style.textAlign = 'right';
  }

  const dx = vertical ? -SHIFT : 0;
  const dy = -SHIFT - Y_FONT_SHIFT;
  return (
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    <g transform={`translate(${x - measures.width + dx},${y + dy}) ${transform}`}>
      <svg {...measures}>
        <rect {...measures} fill="none" />
        <foreignObject x={0} y={0} {...measures}>
          <div className={`x-tick ${className}`} style={style}>
            {valueText}
          </div>
        </foreignObject>
      </svg>
    </g>
  );
}

const Tick = (props: TickProps) => {
  const {
    // index,
    // width,
    // visibleTicksCount,
    x,
    y,
    payload,
    formatter,
    className,
    vertical,
    maxTickLength,
    forYAxis,
    textAnchor = 'end',
    preserveZero = false,
    getCustomTick,
    color,
    // ...rest
  } = props;
  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  const value = payload.value;
  if (value === 'auto') {
    return null;
  }
  if (value === 0 && !preserveZero) {
    return null;
  }
  const valueText = formatter(value, 'tick');

  const transform = '';
  const tickProps = { x, y, className, textAnchor, transform, valueText, vertical, forYAxis, getCustomTick, color };
  if (!maxTickLength) {
    return renderTick(tickProps);
  }
  return renderClippedTick(tickProps, maxTickLength);
};

export const measureText = (() => {
  let ctx: any = null;
  return (text: any, fontOptions = {}) => {
    if (ctx == null) {
      // eslint-disable-next-line no-undef
      const canvas = document.createElement('canvas');
      ctx = canvas.getContext('2d');
    }
    const {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontSize' does not exist on type '{}'.
      fontSize = `${TICK_FONT_SIZE}px`,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'lineHeight' does not exist on type '{}'.
      lineHeight = '1.4',
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontFamily' does not exist on type '{}'.
      fontFamily = 'Roboto, sans-serif',
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'fontWeight' does not exist on type '{}'.
      fontWeight = 'normal',
    } = fontOptions;
    ctx.font = `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
    return ctx.measureText(text);
  };
})();

export type RenderYAxisConfig = Partial<{
  name: string;
  formatter: FormatterFunc;
  labelClassName: string;
  tickClassName: string;
  tickLabelPosition: React.ComponentProps<typeof Label>['position'];
  textAnchor: React.CSSProperties['textAnchor'];
  domain: AxisDomain;
  tickTextColor: string;
  maxTickLength: number;
  vertical: boolean;
  preserveTickZero: boolean;
  getCustomTick: TickProps['getCustomTick'];
  barSize: unknown;
}> &
  React.ComponentProps<typeof YAxis>;

export function RenderYAxis({
  name,
  formatter = (v: any) => v,
  labelClassName,
  tickLabelPosition = 'insideLeft',
  tickClassName,
  textAnchor,

  // same as recharts default
  domain = ['dataMin', 'auto'],
  tickTextColor,
  maxTickLength,
  vertical,
  preserveTickZero,
  getCustomTick,
  barSize,
  ...props
}: RenderYAxisConfig) {
  const [maxTickLabelWidth, setMaxTickLabelWidth] = useState(maxTickLength ?? 0);

  const tickFormatter = useCallback(
    (value) => {
      const text = formatter(value, 'tick');
      const { width: textWidth } = measureText(text);
      setMaxTickLabelWidth((width) => Math.max(width, textWidth));
      return text;
    },
    [formatter]
  );

  useEffect(() => {
    maxTickLength && setMaxTickLabelWidth(maxTickLength);
  }, [maxTickLength]);

  const [width, setWidth] = useState(40);
  useLayoutEffect(() => {
    setWidth(Math.ceil(Math.max(maxTickLabelWidth + 8 + (name ? TICK_FONT_SIZE : 0), 40)));
  }, [maxTickLabelWidth, name]);

  return (
    <YAxis
      width={width}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '((value: any) => any) | null' is not assigna... Remove this comment to see the full error message
      tickFormatter={maxTickLength ? null : tickFormatter}
      domain={domain}
      tick={
        // @ts-expect-error ts-migrate(2786) FIXME: 'Tick' cannot be used as a JSX component.
        <Tick
          formatter={formatter}
          className={tickClassName}
          textAnchor={textAnchor}
          vertical={vertical}
          maxTickLength={maxTickLength}
          preserveZero={preserveTickZero}
          forYAxis
          getCustomTick={getCustomTick}
          barSize={barSize}
          color={tickTextColor}
        />
      }
      {...props}
    >
      {name && (
        <Label
          className={labelClassName}
          value={name}
          position={tickLabelPosition}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ value: string; position: "end" | "center" ... Remove this comment to see the full error message
          angle={-90}
          style={{ textAnchor: 'middle' }}
        />
      )}
    </YAxis>
  );
}
export const renderYAxis = RenderYAxis;
