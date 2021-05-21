/**
 * Issue description: TODO
 * missing point data causing incorrect point calculation
 */

import React, { useState } from 'react';
import MultipleSeriesLineChart from '../multiple-series-line-chart';
import data from './mocks/with-date-gaps.json';

export const content = function Content({ connectNulls, fillXAxisGaps }: any) {
  const [filteredSeries, setFilteredSeries] = useState([]);
  const configurations = {
    withTooltip: true,
    yAxis: {
      name: 'DevEq',
    },
    xAxis: {
      fillGaps: fillXAxisGaps,
    },
    interpolationType: 'linear',
    labelKey: 'date',
    labelFormatter: {
      type: 'PERIOD',
      format: '1d',
    },
    connectNulls,
    valueKey: 'value',
    seriesDataKey: 'series',
    seriesNameKey: 'id',
    xTickCount: 4,
    withLegend: true,
  };
  return (
    <div>
      <h1>Fill XAxis Gaps</h1>
      <h2>An example of dealing with incomplete XAxis data</h2>
      <p>
        Tip: toggle <b style={{ color: 'red' }}>fillXAxisGaps</b> and see what happens
      </p>
      <div style={{ width: 800, height: 600 }}>
        <MultipleSeriesLineChart
          series={data}
          configurations={configurations}
          filteredSeries={filteredSeries}
          setFilteredSeries={setFilteredSeries}
        />
      </div>
    </div>
  );
};
export const name = 'FillXAxisGaps';

export const parameters = {
  args: {
    connectNulls: false,
    fillXAxisGaps: false,
  },
  argTypes: {
    connectNulls: 'boolean',
    fillXAxisGaps: 'boolean',
  },
};
