import React, { useMemo } from 'react';
import { getSeries } from './helpers';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';

export default function Content({ dataCount, withOriginPoint }: { dataCount: number; withOriginPoint: boolean }) {
  const series = useMemo(getSeries({ dataCount, withOriginPoint }), [dataCount, withOriginPoint]);

  const configurations: SeriesComposedChartConfigurations = {
    withTooltip: true,
    labelKey: 'x',
    xAxis: {
      tickLine: false,
      axisLine: false,
      name: '',
    },
    xTickCount: 4,
    // Y Axis for line
    yAxis: {
      yAxisId: 'accumulatively',
      axisLine: false,
      tickLine: false,
      name: '',
      preserveTickZero: true,
    },
    valueFormatter: (v: number) => (v >= 0 ? v : ''), // hide negative value on Y Axis for line
    tooltipExcludedNames: ['Issue Range', 'line-1-prediction'], // match subSeries's label

    subSeriesConfiguration: [
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
    ],
  };

  return (
    <div>
      <h1>XAxis Tick Count</h1>
      <div style={{ width: 600, height: 400 }}>
        <SeriesComposedChart data={series} configurations={configurations} />
      </div>
    </div>
  );
}
