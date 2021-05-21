import React from 'react';
import * as Recharts from 'recharts';
import { Coordinate } from 'recharts/types/util/types';
export declare type RenderRectReferenceAreaConfig = React.ComponentProps<typeof Recharts.ReferenceArea>;
export declare function renderRectReferenceArea({ x1, x2, y1, y2, ...props }: RenderRectReferenceAreaConfig): JSX.Element;
declare type PolygonProps = React.ComponentProps<typeof Recharts.Polygon>;
export declare type AreaShapeProps = {
    endPoints: Coordinate[];
    fill?: PolygonProps['fill'];
    stroke?: PolygonProps['fill'];
    xAxisMap: any;
    yAxisMap: any;
};
export declare type RenderReferenceAreaByDataConfig = {
    key: React.Key;
} & AreaShapeProps;
export declare function renderReferenceAreaByData({ key, ...props }: RenderReferenceAreaByDataConfig): JSX.Element;
export declare type RenderReferenceAreasConfig = RenderReferenceAreaByDataConfig | RenderRectReferenceAreaConfig;
export declare function renderReferenceAreas(props: RenderReferenceAreasConfig): JSX.Element;
export {};
//# sourceMappingURL=reference-area.d.ts.map