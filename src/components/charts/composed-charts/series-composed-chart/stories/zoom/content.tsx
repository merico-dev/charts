import React, { useMemo } from 'react';
import { calcUpwardsSeriesData } from '../bars-and-lines/helpers';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';

export default function Content({ extendDays = 0, dataCount }: any) {
  const series = useMemo(calcUpwardsSeriesData({ dataCount, extendDays }), [dataCount]);

  // NOTE: see story BarAndLines about these configurations
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
    yAxis: {
      yAxisId: 'accumulatively',
      axisLine: false,
      tickLine: false,
      name: '',
      preserveTickZero: true,
    },
    additionalYAxis: {
      yAxisId: 'daily',
      tickLine: false,
      axisLine: false,
      name: '',
      orientation: 'right',
      tickLabelPosition: 'insideRight',
      textAnchor: 'start',
      preserveTickZero: true,
    },
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

  // HERE
  configurations.brush = {
    enabled: true,
    dataKey: configurations.labelKey,
    stroke: '#828487',
    fill: 'rgba(199,220,250,0.4)',
    travellerWidth: 10,
  };
  // cant have brush & tick, brush would overlap tick
  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
  configurations.xAxis.tick = null;

  return (
    <div>
      <h1>Zoom</h1>
      <div style={{ width: 600, height: 400 }}>
        <SeriesComposedChart data={series} configurations={configurations} />
      </div>
    </div>
  );
}
