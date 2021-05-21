import React from 'react';
import { Radar } from '@ant-design/charts';
// import { ChartEmpty } from '../../Base/ChartBase';

function RadarChart({ data, configurations /* emptyContent */ }: any) {
  if (!configurations) {
    throw new Error('[RadarChart] missing prop: configurations');
  }
  const {
    angleField,
    radiusField,
    seriesField,
    angleAxis = {
      line: null,
    },
    radiusAxis = {
      grid: {
        line: { type: 'line' },
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    line = { visible: true },
    appendPadding = [10, 10, 10, 10],
    point = { shape: 'circle' },
    legend = { layout: 'horizontal', position: 'bottom' },
    valueFormatter,
    ...rest
  } = configurations;

  const config = {
    xField: angleField,
    yField: radiusField,
    seriesField,
    xAxis: angleAxis,
    yAxis: radiusAxis,
    line,
    point,
    legend,
    appendPadding,
    tooltip: {
      showCrosshairs: false,
    },
    meta: {
      [radiusField]: {
        formatter: valueFormatter,
      },
    },
    area: {},
    ...rest,
  };

  // // TODO: empty
  // if (data.every(item => !item[valueField])) {
  //   return <ChartEmpty content={emptyContent} />;
  // }
  // ts-migrate(2739) FIXME: Type '{ angleField: any; radiusField: any; seriesF... Remove this comment to see the full error message
  return <Radar data={data} {...config} />;
}

export default RadarChart;
