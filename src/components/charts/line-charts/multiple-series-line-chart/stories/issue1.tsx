/**
 * Issue description: TODO
 * missing point data causing incorrect point calculation
 */

import React, { useState } from 'react';
import MultipleSeriesLineChart from '../multiple-series-line-chart';
// import data from './mocks/issue1.json';
import data from './mocks/issue1-fixed.json';

export const content = function Content({ connectNulls = false }) {
  const [filteredSeries, setFilteredSeries] = useState([]);
  const configurations = {
    withTooltip: true,
    yAxis: {
      name: '开发当量',
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
    referenceLines: [
      {
        value: 1668.3541666666667,
        labelText: 'middle: 1668',
        labelPosition: 'center',
      },
      {
        value: 7466.361866724548,
        labelText: 'top: 7466',
        labelPosition: 'left',
      },
      {
        value: 0,
        labelText: 'bottom: 0',
        labelPosition: 'right',
      },
    ],
    xTickCount: 4,
    withLegend: true,
  };
  return (
    <div>
      <h1>Issues - 1 (Solved)</h1>
      <h2>Missing point data causing incorrect point calculation</h2>
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
export const name = 'Issues - 1';

export const parameters = {
  args: {
    connectNulls: false,
  },
  argTypes: {
    connectNulls: 'boolean',
  },
};
