import React from 'react';
import { XAxis, Label } from 'recharts';
import { TICK_FONT_SIZE } from '../helpers/enum';
import { FormatterFunc } from '../helpers';

const SHIFT = TICK_FONT_SIZE / 2;
const Y_FONT_SHIFT = 2;

function renderTick(props: any) {
  const { x, y, className = '', textAnchor, transform, valueText, getCustomTick, color } = props;
  if (getCustomTick) {
    return getCustomTick({ x, y, valueText });
  }
  return (
    <g transform={`translate(${x - SHIFT},${y + SHIFT})`}>
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

function renderClippedTick(props: any, maxTickLength: any) {
  const { x, y, className = '', textAnchor, transform, valueText, vertical, color } = props;
  const measures = {
    width: vertical ? maxTickLength : TICK_FONT_SIZE * 1.5,
    height: vertical ? TICK_FONT_SIZE * 1.5 : maxTickLength,
  };
  const style = {
    textAnchor,
    fontSize: TICK_FONT_SIZE,
    color: color ?? '#666',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
  const dx = vertical ? SHIFT : 0;
  const dy = Y_FONT_SHIFT;
  return (
    <g transform={`translate(${x + dx},${y + dy}) ${transform}`}>
      <svg {...measures}>
        <rect {...measures} fill="none" />
        <foreignObject x={0} y={0} {...measures}>
          {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ textAnchor: any; fontSize: number; color: ... Remove this comment to see the full error message */}
          <div className={`x-tick ${className}`} style={style}>
            {valueText}
          </div>
        </foreignObject>
      </svg>
    </g>
  );
}

const Tick = (props: any) => {
  const {
    index,
    width,
    visibleTicksCount,
    x,
    y,
    payload,
    formatter,
    className,
    vertical,
    maxTickLength,
    color,
    ...rest
  } = props;

  let { textAnchor, getCustomTick } = rest;
  if (!textAnchor) {
    textAnchor = (() => {
      if (index === 0) {
        return 'start';
      } else if (index === visibleTicksCount - 1 && x >= width - 100) {
        return 'end';
      } else {
        return 'middle';
      }
    })();
  }

  const value = payload.value;
  if (value === 0 || value === 'auto') {
    return null;
  }
  const valueText = formatter(value, 'tick');

  const transform = vertical ? 'rotate(90)' : '';
  const tickProps = { x, y, className, textAnchor, transform, valueText, vertical, getCustomTick, color };
  if (React.isValidElement(valueText)) {
    return valueText;
  }
  if (!maxTickLength) {
    return renderTick(tickProps);
  }
  return renderClippedTick(tickProps, maxTickLength);
};

/**
 * evenly distribute ticks by minTickCount
 * @param points axis points
 * @param minTickCount a number, like 7
 */
export function getNickTicks(points: any[], minTickCount: number): any[] {
  if (!minTickCount) {
    return points;
  }

  const len = points.length;
  if (len <= minTickCount) {
    return points;
  }

  const ret = [];

  const step = Math.floor(len / minTickCount);
  let i = 0;
  while (i <= len - 1) {
    ret.push(points[i]);
    i += step;
  }

  return ret;
}

export type CommonRenderXAxisConfig = {
  name?: string;
  labelClassName?: string;
} & Omit<Partial<React.ComponentProps<typeof XAxis>>, 'points'>;

export type RenderSimpleXAxisConfig = CommonRenderXAxisConfig & {
  points?: any[];
  formatter: FormatterFunc;
  tickClassName?: string;
  tickCount: number;
  textAnchor?: string;
  tickTextColor?: string;
  vertical?: boolean;
  maxTickLength?: number;
  getCustomTick?: (params: { x?: number; y?: number; valueText?: string }) => React.ReactNode;
};

export function renderSimpleXAxis({
  name,
  formatter,
  labelClassName,
  tickClassName,
  tickCount,
  textAnchor,
  interval,
  vertical,
  orientation,
  maxTickLength,
  getCustomTick,
  tickTextColor,
  points,
  ...props
}: RenderSimpleXAxisConfig) {
  if (!textAnchor) {
    textAnchor = vertical ? 'start' : 'middle';
  }
  if (typeof interval !== 'string' && typeof interval !== 'number') {
    // @ts-expect-error ts-migrate(2322) FIXME: Type '0 | null' is not assignable to type 'number ... Remove this comment to see the full error message
    interval = vertical ? 0 : null;
  }
  const ticks = points ? getNickTicks(points, tickCount) : undefined;
  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: "" | Element | undefined; xAxisI... Remove this comment to see the full error message
    <XAxis
      allowDataOverflow={false}
      allowDuplicatedCategory={false}
      orientation={orientation}
      interval={interval}
      ticks={ticks}
      tick={
        <Tick
          formatter={formatter}
          className={tickClassName}
          textAnchor={textAnchor}
          vertical={vertical}
          maxTickLength={maxTickLength}
          getCustomTick={getCustomTick}
          color={tickTextColor}
        />
      }
      {...props}
    >
      {name && <Label className={labelClassName} value={name} position={orientation} />}
    </XAxis>
  );
}
