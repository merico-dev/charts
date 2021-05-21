import React, { useMemo } from 'react';
import * as Recharts from 'recharts';
import { Coordinate } from 'recharts/types/util/types';
// import jsonStableStringify from 'json-stable-stringify';

export type RenderRectReferenceAreaConfig = React.ComponentProps<typeof Recharts.ReferenceArea>;

export function renderRectReferenceArea({
  x1,
  x2,
  y1,
  y2,

  // fill / stroke / strokeOpacity ...
  ...props
}: RenderRectReferenceAreaConfig) {
  return <Recharts.ReferenceArea x1={x1} x2={x2} y1={y1} y2={y2} {...props} />;
}

type PolygonProps = React.ComponentProps<typeof Recharts.Polygon>;

export type AreaShapeProps = {
  endPoints: Coordinate[];
  fill?: PolygonProps['fill'];
  stroke?: PolygonProps['fill'];
  xAxisMap: any;
  yAxisMap: any;
};

const AreaShape = ({
  endPoints,
  xAxisMap: { 0: xAxis },
  yAxisMap: { 0: yAxis },
  fill,

  // ...props
  stroke,
}: AreaShapeProps) => {
  const points = useMemo(() => {
    const xScale = xAxis.scale;
    const yScale = yAxis.scale;

    return endPoints.map(({ x, y, ...rest }: any) => ({
      x: xScale(x),
      y: yScale(y),
      ...rest,
    }));
  }, [
    // jsonStableStringify(endPoints),
    xAxis.x,
    xAxis.width,
    xAxis.height,
    yAxis.y,
    yAxis.width,
    yAxis.height,
  ]);

  return <Recharts.Polygon points={points} fill={fill} stroke={stroke} />;
};

export type RenderReferenceAreaByDataConfig = {
  key: React.Key;
} & AreaShapeProps;

export function renderReferenceAreaByData({ key, ...props }: RenderReferenceAreaByDataConfig) {
  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'Element' is not assignable to type '(Element... Remove this comment to see the full error message
    <Recharts.Customized key={key} component={<AreaShape {...props} />} />
  );
}

export type RenderReferenceAreasConfig = RenderReferenceAreaByDataConfig | RenderRectReferenceAreaConfig;

function isRenderReferenceAreaByDataConfig(config: Record<string, any>): config is RenderReferenceAreaByDataConfig {
  return !!config.endPoints;
}

export function renderReferenceAreas(props: RenderReferenceAreasConfig) {
  if (isRenderReferenceAreaByDataConfig(props)) {
    return renderReferenceAreaByData(props);
  }
  return renderRectReferenceArea(props);
}
