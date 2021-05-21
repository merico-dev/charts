import React, { useMemo, useState } from 'react';
import SingleSeriesLineChart from '../single-series-line-chart';
import data from './mock.json';

export const content = function Content() {
  const [index] = useState(0);
  const configurations = {
    withTooltip: true,
    withLegend: false,
    interpolationType: 'linear',
    storkeColor: '#CA4521',
    refInterpolationType: '',
    refInterpolationColor: '#2152ca',
    refRegressionType: 'regressionLinear',
    refRegressionColor: '#2152ca',
    xAxis: {
      name: 'Date',
    },
    yAxis: {
      name: 'Dev Equivalent',
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD',
    },
  };
  const seriesWithNulls = useMemo(() => {
    const ret = JSON.parse(JSON.stringify(data.dataSets[index].dataSet));
    ret[2].value = null;
    ret[7].value = null;
    ret[9].value = null;
    return ret;
  }, [data]);
  return (
    <div>
      <h1>Connect Nulls</h1>
      <h2>connectNulls: true</h2>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart
          data={seriesWithNulls}
          configurations={{
            ...configurations,
            connectNulls: true, // HERE
          }}
        />
      </div>

      <h2>connectNulls: false</h2>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart
          data={seriesWithNulls}
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
