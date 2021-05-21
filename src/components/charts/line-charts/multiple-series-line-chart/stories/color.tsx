import React, { useMemo } from 'react';
import MultipleSeriesLineChart from '../multiple-series-line-chart';
import data from './mocks/mock.json';

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

  const seriesWithColor = useMemo(() => {
    return data.dataSets.map((item, index) => ({
      ...item,
      color: index > 5 ? 'blue' : 'red',
    }));
  }, [data]);
  return (
    <div>
      <h1>Custom Stroke Color</h1>
      <div style={{ width: 800, height: 600 }}>
        <MultipleSeriesLineChart series={seriesWithColor} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Custom Stroke Color';
