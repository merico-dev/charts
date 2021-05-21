import React, { useRef } from 'react';
import { Scatter } from '@ant-design/charts';
import { getColorGenerator } from '../../../helpers/colors';
import { ChartEmpty } from '../../base/chart-base';

const getTooltipRenderer = (nameMap: any, titleFormatter: any, valueFormatter: any) => (title: any, items: any) => {
  if (!items || !items.length) {
    return '<div />';
  }
  title = items[0].data.name;
  const color = items[0].color;
  const rows = items
    .map((item: any) => {
      const name = nameMap[item.name];
      if (!name) {
        return '';
      }
      return `
      <li class="g2-tooltip-list-item">
        <span class="g2-tooltip-marker"></span>
        <span class="g2-tooltip-name">${name}</span>
        <span class="g2-tooltip-value">
          ${valueFormatter(name, item.value)}
        </span>
      </li>
    `;
    })
    .join('');

  const ret = `
    <div class="g2-tooltip-title">
      <span class="g2-tooltip-marker" style="background-color: ${color}"></span>
      ${titleFormatter(title)}
    </div>
    <ul class="g2-tooltip-list">
      ${rows}
    </ul>
  `;
  return ret;
};

export default function BubbleChart({ data, configurations, emptyContent }: any) {
  if (!configurations) {
    throw new Error('[BubbleChart] missing prop: configurations');
  }
  const chartRef = useRef(null);

  const {
    width = 300,
    height = 300,
    xField = 'dev_equivalent',
    yField = 'deviation',
    xAxis,
    yAxis,
    colorField,
    color,
    nameMap,
    label = false,
    tooltipTitleFormatter = (v: any) => v,
    tooltipValueFormatter = (v: any) => v,
    sizeField,
    padding = 'auto',
    pointStyle = {
      lineWidth: 2,
      fillOpacity: 1,
    },
    size = [6, 20],
    regressionLine = null,
    legend = {
      layout: 'horizontal',
      position: 'top-right',
    },
    onReady = null,
  } = configurations;

  /**
   * final config
   */
  const config = {
    width,
    height,
    data,
    xField,
    yField,
    shape: 'circle',
    colorField,
    color,
    pointStyle,
    xAxis,
    yAxis,
    tooltip: { customContent: getTooltipRenderer(nameMap, tooltipTitleFormatter, tooltipValueFormatter) },
    sizeField,
    padding,
    size,
    label,
    legend,
    regressionLine,
    onReady,
  };
  if (!config.color) {
    const colorGenerator = getColorGenerator();
    config.color = () => colorGenerator.next().value;
  }

  // TODO: use ChartBase?
  if (data.every((item: any) => !item[xField] && !item[yField])) {
    return <ChartEmpty content={emptyContent} />;
  }
  return <Scatter ref={chartRef} {...config} />;
}
