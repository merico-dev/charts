import React from 'react';
import { Resizable } from '../../../base/resizable';
import MultipleSeriesLineChart from '../multiple-series-line-chart';
import data from './mocks/mock.json';

const series = data.dataSets.slice(0, 3);

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    legend: {
      enabled: true,
    },
    interpolationType: 'monotone',
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
      <h1>Resizable</h1>
      <Resizable>
        <MultipleSeriesLineChart series={series} configurations={configurations} />
      </Resizable>
    </div>
  );
};
export const name = 'Resizable';
