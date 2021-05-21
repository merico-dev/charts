import React, { useRef, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';
import { getColorGenerator } from '../../../helpers/colors';
import { ChartEmpty } from '../../base/chart-base';

const getTooltipRenderer = (nameMap: any, titleFormatter: any) => (title: any, items: any) => {
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
        <span class="g2-tooltip-value">${item.value}</span>
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

export default function QuadrantChart({ data, configurations, emptyContent }: any) {
  if (!configurations) {
    throw new Error('[QuadrantChart] missing prop: configurations');
  }
  const chartRef = useRef(null);

  const {
    width = 300,
    height = 300,
    xField = 'dev_equivalent',
    yField = 'deviation',
    xAxis: xAxisProps = {
      axisLine: true,
      name: '',
    },
    yAxis: yAxisProps = {
      axisLine: true,
      name: '',
    },
    xBaseline,
    yBaseline,
    nameMap,
    labelProps = false,
    tooltipTitleFormatter = (v: any) => v,
    xBoundary, // { min: 0, max: 10000 }
    yBoundary,
    sizeField,
    padding = 'auto',
    pointSize = [6, 20],
    quadrantLabels = ['', '', '', ''],
    regionStyle = [
      { fill: 'white', fillOpacity: 1, opacity: 1 },
      { fill: '#FFF4F4', fillOpacity: 1, opacity: 1 },
      { fill: 'white', fillOpacity: 1, opacity: 1 },
      { fill: '#F4FFF9', fillOpacity: 1, opacity: 1 },
    ],
  } = configurations;

  if (!xBoundary || !yBoundary) {
    throw new Error('[QuadrantChart] missing conf: xBoundary/yBoundary');
  }

  const xAxis = {
    ...xBoundary,
    /*
     * Note(leto):
     * if true, g2(not g2plot) will round up max by wilkinson-extended,
     * and it's hard to obtain calculated max,
     * then the baseline of quadrant would not be a center value
     */
    nice: false,
    grid: { visible: false },
    line: { style: { stroke: '#C4C4C4' } },
  };
  if (xAxisProps.name) {
    xAxis.title = {
      visible: true,
      text: xAxisProps.name,
    };
  }

  /**
   * setting mix/max/minLimit/maxLimit would cause dots on edges be clipped into half
   * search "isLimitInPlot"
   */
  const yAxis = {
    ...yBoundary,
    nice: false,
    line: { visible: false },
    grid: { visible: false },
  };
  if (yAxisProps.name) {
    yAxis.title = {
      visible: true,
      text: yAxisProps.name,
    };
  }

  const quadrant = {
    xBaseline: xBaseline ?? xBoundary.max / 2,
    yBaseline: yBaseline ?? yBoundary.max / 2,
    lineStyle: {
      stroke: '#CBCBCB',
    },
    regionStyle,
    labels: quadrantLabels.map((content: string) => ({ content })),
  };

  /**
   * final config
   */
  const colorGenerator = getColorGenerator();
  const config = {
    width,
    height,
    data,
    xField,
    yField,
    shape: 'circle',

    color: () => colorGenerator.next().value,
    pointStyle: {
      lineWidth: 0,
    },
    xAxis,
    yAxis,
    tooltip: { customContent: getTooltipRenderer(nameMap, tooltipTitleFormatter) },
    quadrant,
    sizeField,
    padding,
    size: pointSize,
    label: labelProps,
  };
  useEffect(() => {
    // Use this to debug when you are desperate
    // const chart = chartRef.current.getChart();
    // console.log(chart);
  }, []);

  // TODO: use ChartBase?
  if (data.every((item: any) => !item[xField] && !item[yField])) {
    return <ChartEmpty content={emptyContent} />;
  }
  // @ts-expect-error ts-migrate(2322) FIXME: Type '{ width: any; height: any; data: any; xField... Remove this comment to see the full error message
  return <Scatter ref={chartRef} {...config} />;
}
