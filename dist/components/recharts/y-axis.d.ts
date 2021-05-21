import React from 'react';
import { YAxis, Label } from 'recharts';
import { AxisDomain } from 'recharts/types/util/types';
import { FormatterFunc } from '../helpers';
declare type RenderTickConfig = {
    x?: number;
    y?: number;
    className?: string;
    valueText?: string;
    textAnchor?: React.CSSProperties['textAnchor'];
    transform?: React.SVGAttributes<SVGElement>['transform'];
    color?: string;
    getCustomTick?: (config: {
        x: number;
        y: number;
        valueText?: string;
    }) => React.ReactNode;
    vertical?: boolean;
    forYAxis?: boolean;
};
export declare type TickProps = RenderTickConfig & {
    formatter: FormatterFunc;
    maxTickLength?: number;
    preserveZero?: boolean;
    payload?: {
        value: string | number;
    };
    barSize?: unknown;
};
export declare const measureText: (text: any, fontOptions?: {}) => any;
export declare type RenderYAxisConfig = Partial<{
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
}> & React.ComponentProps<typeof YAxis>;
export declare function RenderYAxis({ name, formatter, labelClassName, tickLabelPosition, tickClassName, textAnchor, domain, tickTextColor, maxTickLength, vertical, preserveTickZero, getCustomTick, barSize, ...props }: RenderYAxisConfig): JSX.Element;
export declare const renderYAxis: typeof RenderYAxis;
export {};
//# sourceMappingURL=y-axis.d.ts.map