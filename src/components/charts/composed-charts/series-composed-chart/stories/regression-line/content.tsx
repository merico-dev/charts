import React from 'react';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';
import data from './data.json';

export default function Content({ regressionType1, regressionType2 }: any) {
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
      scale: 'auto',
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
        key: 'total-issues',
        label: 'Total Issues',
        dataKey: 'line-1',
        chartType: 'line',
        interpolationType: 'monotone',
        regressions: [
          {
            key: 'total-regression-regressionLinear',
            type: regressionType1,
            labelKey: 'date',
            valueKey: 'line-1',
            stroke: 'blue',
            yAxisId: 'accumulatively',
          },
        ],
        dot: false,
        yAxisId: 'accumulatively',
        stroke: '#aaa',
        fill: '#aaa',
      },
      {
        label: 'Total Something Else',
        dataKey: 'line-2',
        chartType: 'line',
        interpolationType: 'monotone',
        dot: false,
        yAxisId: 'accumulatively',
        stroke: '#ccc',
        strokeDasharray: '4',
        fill: '#ccc',
        regressions: [
          {
            key: 'total-else-regression-regressionExp',
            type: regressionType2,
            labelKey: 'date',
            valueKey: 'line-2',
            stroke: 'rgba(232,71,28,1)',
            yAxisId: 'accumulatively',
          },
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Regression Lines</h1>
      <div style={{ width: 600, height: 400 }}>
        <SeriesComposedChart data={data} configurations={configurations} />
      </div>
    </div>
  );
}
