/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Tooltip } from 'recharts';
import { get } from 'lodash';
import { RenderTooltipConfig, TooltipContentProps } from './types';
import { TooltipContent } from './tooltip-content';
import { normalizeFormatter } from '../../helpers/formatter';

export * from './types';

function getNonEmptyStringArray(...arrs: string[][]): string[] {
  const match = arrs.find((arr) => arr.length > 0);
  return match ?? [];
}

function shouldRenderTooltip(configurations: RenderTooltipConfig) {
  if (configurations.withTooltip === false) {
    return false;
  }
  if (configurations?.tooltip?.enabled === false) {
    return false;
  }
  return true;
}

const DEPRECATED_TOOLTIP_PROPS = [
  'withTooltip',
  'tooltipAppender',
  'tooltipExcludedNames',
  'tooltipSorter',
  'tooltipTrigger',
  'tooltipValueFormatter',
  'tooltipLabelFormatter',
];

function warnTooltipDeprecations(configurations: RenderTooltipConfig) {
  const s = new Set(DEPRECATED_TOOLTIP_PROPS);
  Object.keys(configurations).forEach((key) => {
    if (!s.has(key)) {
      return;
    }
    console.error(
      `[charts/Tooltip] prop [${key}] is deprecated, use the corresponding field in configurations.tooltip instead`
    );
  });
}

function getLabelFormatter(configurations: RenderTooltipConfig) {
  const { tooltip, labelFormatter, tooltipLabelFormatter } = configurations;
  if (tooltip?.labelFormatter) {
    return tooltip?.labelFormatter;
  }
  if (tooltipLabelFormatter) {
    return tooltipLabelFormatter;
  }
  return normalizeFormatter(labelFormatter);
}

function getValueFormatter(configurations: RenderTooltipConfig) {
  const { tooltip, valueFormatter, tooltipValueFormatter } = configurations;
  if (tooltip?.valueFormatter) {
    return tooltip?.valueFormatter;
  }
  if (tooltipValueFormatter) {
    return tooltipValueFormatter;
  }
  return normalizeFormatter(valueFormatter);
}

function extractTooltipConfiguration(configurations: RenderTooltipConfig) {
  const defaultFormatter = (value: any) => value;
  const tooltip: TooltipContentProps = {
    active: undefined,
    appender: undefined,
    cursor: undefined,
    enabled: true,
    excludedNames: [],
    label: undefined,
    labelFormatter: defaultFormatter,
    payload: undefined,
    rowNameFormatter: undefined,
    sorter: undefined,
    trigger: 'hover',
    valueFormatter: defaultFormatter,
    content: TooltipContent,
  };
  if (configurations.tooltip) {
    Object.assign(tooltip, configurations.tooltip);
  }
  tooltip.labelFormatter = getLabelFormatter(configurations);
  tooltip.valueFormatter = getValueFormatter(configurations);

  const { tooltipAppender, tooltipCursor, tooltipExcludedNames = [], tooltipSorter } = configurations;
  warnTooltipDeprecations(configurations);
  tooltip.appender = get(tooltip, 'appender', tooltipAppender);
  tooltip.cursor = get(tooltip, 'cursor', tooltipCursor);
  tooltip.excludedNames = getNonEmptyStringArray(tooltip.excludedNames, tooltipExcludedNames);
  tooltip.sorter = get(tooltip, 'sorter', tooltipSorter);

  return tooltip;
}

export function renderTooltip(configurations: RenderTooltipConfig) {
  if (!shouldRenderTooltip(configurations)) {
    return null;
  }
  const { trigger, cursor, content, ...rest } = extractTooltipConfiguration(configurations);
  return (
    <Tooltip
      trigger={trigger}
      cursor={cursor}
      wrapperStyle={{ zIndex: 1000 }}
      content={content && React.createElement(content, rest, null)}
    />
  );
}
