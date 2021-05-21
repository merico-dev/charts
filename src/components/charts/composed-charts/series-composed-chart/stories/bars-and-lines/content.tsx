import React, { useMemo } from 'react';
import { maxBy, minBy } from 'lodash';
import { getNiceTickValues } from 'recharts-scale';
import { calcUpwardsSeriesData } from './helpers';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';

export default function Content({ extendDays = 0, dataCount }: any) {
  const series = useMemo(calcUpwardsSeriesData({ dataCount, extendDays }), [dataCount]);

  const lineMax = useMemo(() => {
    return maxBy(series, (item) => item['line-1'])['line-1'];
  }, [series]);

  const barMax = useMemo(() => {
    const positiveMax = maxBy(series, (item) => item['bar-positive'])['bar-positive'];
    const negativeMax = Math.abs(minBy(series, (item) => item['bar-negative'])['bar-negative']);
    return Math.max(positiveMax, negativeMax);
  }, [series]);

  // Reason:
  // 1. align zero level of two Y axises
  // 2. have nice-rounded ticks
  const lineTicks = getNiceTickValues([lineMax * -0.2, lineMax]);
  const barTicks = getNiceTickValues([barMax * -1, barMax * 4]);

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
      padding: { left: 10 }, // don't miss this
    },
    // Y Axis for line (left)
    yAxis: {
      yAxisId: 'accumulatively',
      axisLine: false,
      tickLine: false,
      ticks: lineTicks,
      name: '',
      preserveTickZero: true,
      formatter: (v: any) => (v >= 0 ? v : ''), // hide negative value on Y Axis for line
    },
    valueFormatter: Math.abs,

    // Y Axis for bars (right)
    additionalYAxis: {
      yAxisId: 'daily',
      tickLine: false,
      axisLine: false,
      name: '',
      formatter: Math.abs,
      ticks: barTicks,
      orientation: 'right',
      tickLabelPosition: 'insideRight',
      textAnchor: 'start',
      preserveTickZero: true,
    },

    // let negative&positive bars stack on each other
    stackOffset: 'sign',

    subSeriesConfiguration: [
      {
        label: 'New Issues',
        dataKey: 'bar-positive',
        chartType: 'bar',
        stackId: 'issues',
        yAxisId: 'daily',
        fill: 'rgba(255,171,133,1)',
      },
      {
        label: 'Solved Issues',
        dataKey: 'bar-negative',
        chartType: 'bar',
        stackId: 'issues',
        yAxisId: 'daily',
        fill: 'rgba(162,197,246,1)',
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
      <h1>Bars And Lines</h1>
      <div style={{ width: 600, height: 400 }}>
        <SeriesComposedChart data={series} configurations={configurations} />
      </div>
    </div>
  );
}
