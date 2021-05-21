import React from 'react';
import MultipleSeriesLineChart from '../multiple-series-line-chart';
import data from './mocks/mock.json';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    withLegend: true,
    cartesianGrid: {
      // HERE
      horizontal: true,
      vertical: false,
    },
    cartesianGridStyle: {
      // AND HERE
      stroke: '#DEDFE3',
    },
    interpolationType: 'monotone',
    xAxis: {
      name: 'Date',
    },
    yAxis: {
      name: 'Dev Equivalent',
    },
    seriesDataKey: 'dataSet',
    seriesNameKey: 'developer$.name',
    seriesNameFormatter: (series: any) => `${series.developer.name} <${series.developer.primaryEmail}>`,
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD',
    },
  };
  return (
    <div>
      <h1>Customize Cartesian Grid Lines</h1>
      <div style={{ width: 800, height: 600 }}>
        <MultipleSeriesLineChart series={data.dataSets} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Cartesian Grid';
