import React, { ReactElement, ReactText } from 'react';
import { FormatterFunc } from '../../helpers';

export type TooltipContentPayload = { name: string; type: string; value: string | number }[];
export type TooltipCursor =
  | boolean
  | ReactElement
  | {
      strokeDasharray: ReactText;
      stroke?: string;
    };
export type TooltipContentElement = (props: TooltipContentProps) => JSX.Element | null;

export type TooltipContentProps = {
  active?: boolean;
  appender?: (payload?: TooltipContentPayload) => React.ReactNode;
  cursor?: TooltipCursor;
  enabled?: boolean;
  excludedNames: string[];
  label?: unknown;
  labelFormatter: FormatterFunc;
  payload?: TooltipContentPayload;
  rowNameFormatter?: FormatterFunc;
  sorter?: Parameters<TooltipContentPayload['sort']>[0];
  trigger?: 'hover' | 'click';
  valueFormatter: FormatterFunc;
  content?: TooltipContentElement;
};

export type RenderTooltipConfig = {
  withTooltip?: boolean;
  tooltip?: TooltipContentProps;
  /**
   * NOTE: these 'tooltip*' fields are deprecated, use 'tooltip' above
   */
  tooltipAppender?: TooltipContentProps['appender'];
  tooltipCursor?: TooltipContentProps['cursor'];
  tooltipExcludedNames: TooltipContentProps['excludedNames'];
  tooltipSorter?: TooltipContentProps['sorter'];
  tooltipValueFormatter: TooltipContentProps['valueFormatter'];
  tooltipLabelFormatter: TooltipContentProps['labelFormatter'];
  labelFormatter: FormatterFunc;
  valueFormatter: FormatterFunc;
};
