import React from 'react';
import { XAxis } from 'recharts';
import { FormatterFunc } from '../helpers';
/**
 * evenly distribute ticks by minTickCount
 * @param points axis points
 * @param minTickCount a number, like 7
 */
export declare function getNickTicks(points: any[], minTickCount: number): any[];
export declare type CommonRenderXAxisConfig = {
    name?: string;
    labelClassName?: string;
} & Omit<Partial<React.ComponentProps<typeof XAxis>>, 'points'>;
export declare type RenderSimpleXAxisConfig = CommonRenderXAxisConfig & {
    points?: any[];
    formatter: FormatterFunc;
    tickClassName?: string;
    tickCount: number;
    textAnchor?: string;
    tickTextColor?: string;
    vertical?: boolean;
    maxTickLength?: number;
    getCustomTick?: (params: {
        x?: number;
        y?: number;
        valueText?: string;
    }) => React.ReactNode;
};
export declare function renderSimpleXAxis({ name, formatter, labelClassName, tickClassName, tickCount, textAnchor, interval, vertical, orientation, maxTickLength, getCustomTick, tickTextColor, points, ...props }: RenderSimpleXAxisConfig): JSX.Element;
//# sourceMappingURL=x-axis.d.ts.map