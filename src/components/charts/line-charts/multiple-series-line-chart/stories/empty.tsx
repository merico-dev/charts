import React from 'react';
import MultipleSeriesLineChart from '../multiple-series-line-chart';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    withLegend: true,
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
      <h1>Empty</h1>
      <div style={{ width: 800, height: 600 }}>
        <MultipleSeriesLineChart
          series={[]}
          configurations={configurations}
          emptyContent="Multiple Series Line Chart Empty"
        />
      </div>
    </div>
  );
};
export const name = 'Empty';
