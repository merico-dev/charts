import React, { useState } from 'react';
import MultipleSeriesLineChart from '../multiple-series-line-chart';
import data from './mocks/mock.json';

data.dataSets.forEach((series) => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type '{ developer:... Remove this comment to see the full error message
  series.id = series.developer.primaryEmail;
});

export const content = function Content() {
  const [filteredSeries, setFilteredSeries] = useState([]);
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
      <h1>Filtered Series</h1>
      <h2>Tip: click legend items to toggle series</h2>
      <p>Filtered: {filteredSeries.join(' , ')}</p>
      <div style={{ width: 800, height: 600 }}>
        <MultipleSeriesLineChart
          series={data.dataSets}
          configurations={configurations}
          filteredSeries={filteredSeries}
          setFilteredSeries={setFilteredSeries}
        />
      </div>
    </div>
  );
};
export const name = 'Filtered Series';
