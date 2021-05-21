import React, { useMemo } from 'react';
import MultipleSeriesLineChart from '../multiple-series-line-chart';
import data from './mocks/mock.json';

export const content = function Content() {
  const configurations = {
    withTooltip: true,
    legend: {
      enabled: false,
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
  const seriesWithNulls = useMemo(() => {
    const ret = JSON.parse(JSON.stringify(data.dataSets));
    ret[4].dataSet[3].value = null;
    ret[4].dataSet[6].value = null;
    ret[4].dataSet[10].value = null;
    ret[4].dataSet[18].value = null;
    return ret;
  }, [data]);

  return (
    <div>
      <h1>Connect Nulls</h1>
      <h2>connectNulls: true</h2>
      <div style={{ width: 800, height: 600 }}>
        <MultipleSeriesLineChart
          series={seriesWithNulls}
          configurations={{
            ...configurations,
            connectNulls: true,
          }}
        />
      </div>

      <h2>connectNulls: false</h2>
      <div style={{ width: 800, height: 600 }}>
        <MultipleSeriesLineChart
          series={seriesWithNulls}
          configurations={{
            ...configurations,
            connectNulls: false,
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Connect Nulls';
