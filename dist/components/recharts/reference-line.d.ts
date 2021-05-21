import React from 'react';
import * as Recharts from 'recharts';
declare const LABEL_TEXT_POSITION: {
    readonly left: {
        readonly label: "insideBottomLeft";
        readonly textAnchor: "start";
    };
    readonly center: {
        readonly label: "insideBottom";
        readonly textAnchor: "middle";
    };
    readonly right: {
        readonly label: "insideBottomRight";
        readonly textAnchor: "end";
    };
};
declare type LabelProps = React.ComponentProps<typeof Recharts.Label>;
declare type LineProps = React.ComponentProps<typeof Recharts.Line>;
declare type ReferenceLineProps = React.ComponentProps<typeof Recharts.ReferenceLine>;
export declare type ReferenceLineLabelConfig = Partial<{
    textAnchor: React.CSSProperties['textAnchor'];
    labelFillColor: React.CSSProperties['fill'];
    labelStrokeColor: React.CSSProperties['stroke'];
    labelText: LabelProps['value'];
    position: LabelProps['position'];
    angle: number;
    offset: number;
    vertical: boolean;
}>;
export declare type RenderReferenceLineByDataConfig = Partial<{
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
export declare function renderReferenceLineByData({ key, segmentData, renderLabelAtIndex, labelText, renderLabel, labelFillColor, stroke, strokeDasharray, yAxisId, }: RenderReferenceLineByDataConfig): JSX.Element;
export declare type RenderSimpleReferenceLineConfig = Partial<{
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
export declare function renderSimpleReferenceLine({ key, vertical, renderOnTop, value, labelText, renderLabel, position, labelProps, labelPosition, labelFillColor, labelStrokeColor, stroke, strokeDasharray, yAxisId, }: RenderSimpleReferenceLineConfig): JSX.Element;
export declare type RenderReferenceLineConfig = RenderReferenceLineByDataConfig | RenderSimpleReferenceLineConfig;
export declare function renderReferenceLine(props: RenderReferenceLineConfig): JSX.Element;
export {};
//# sourceMappingURL=reference-line.d.ts.map