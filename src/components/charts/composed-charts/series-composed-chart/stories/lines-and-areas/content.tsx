import React, { useMemo } from 'react';
import { calcUpwardsSeriesData } from './helpers';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';

export default function Content({ extendDays = 0, dataCount }: any) {
  const series = useMemo(calcUpwardsSeriesData({ dataCount, extendDays }), [dataCount]);

  const configurations: SeriesComposedChartConfigurations = {
    withTooltip: true,
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'MM-DD',
    },
    xAxis: {
      tickLine: false,
      axisLine: false,
      name: '',
    },
    // Y Axis for line
    yAxis: {
      yAxisId: 'accumulatively',
      axisLine: false,
      tickLine: false,
      name: '',
      preserveTickZero: true,
    },
    valueFormatter: (v: any) => (v >= 0 ? v : ''), // hide negative value on Y Axis for line
    tooltipExcludedNames: ['Issue Range'], // match subSeries's label

    subSeriesConfiguration: [
      {
        label: 'Issue Range',
        dataKey: 'issue-range',
        chartType: 'area', // here
        yAxisId: 'accumulatively',
        fill: 'rgba(162,197,246,1)',
        stroke: 'none',
      },
      {
        label: 'Total Issues',
        dataKey: 'line-1',
        chartType: 'line',
        interpolationType: 'monotone',
        dot: false,
        yAxisId: 'accumulatively',
        stroke: 'rgba(232,71,28,1)',
        fill: 'rgba(232,71,28,1)',
      },
      {
        label: 'Total Something Else',
        dataKey: 'line-2',
        chartType: 'line',
        interpolationType: 'monotone',
        dot: false,
        yAxisId: 'accumulatively',
        stroke: '#F0876A',
        strokeDasharray: '4',
        fill: '#F0876A',
      },
    ],
  };

  return (
    <div>
      <h1>Lines and Areas</h1>
      <div style={{ width: 600, height: 400 }}>
        <SeriesComposedChart data={series} configurations={configurations} />
      </div>
    </div>
  );
}
