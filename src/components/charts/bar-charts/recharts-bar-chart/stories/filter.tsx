import React, { useState } from 'react';
import RechartsBarChart from '../recharts-bar-chart';
import data from './mocks/multiple-values.json';

function Stacked({ data, filteredSeries, setFilteredSeries }: any) {
  const configurations = {
    withTooltip: true,
    labelKey: 'name',
    subSeriesConfiguration: [
      { label: 'UV', dataKey: 'uv' },
      { label: 'Male', dataKey: 'male', stackId: 'gender' },
      { label: 'Female', dataKey: 'female', stackId: 'gender' },
    ],
  };
  return (
    <RechartsBarChart
      data={data}
      configurations={configurations}
      filteredSeries={filteredSeries}
      setFilteredSeries={setFilteredSeries}
    />
  );
}

function Categorized({ data, filteredSeries, setFilteredSeries }: any) {
  const configurations = {
    withTooltip: true,
    labelKey: 'name',
    subSeriesConfiguration: [
      { label: 'UV', dataKey: 'uv' },
      { label: 'Male', dataKey: 'male' },
      { label: 'Female', dataKey: 'female' },
    ],
  };
  return (
    <RechartsBarChart
      data={data}
      configurations={configurations}
      filteredSeries={filteredSeries}
      setFilteredSeries={setFilteredSeries}
    />
  );
}

export const content = function Content() {
  // NOTE: it'll work internally in chart, if you don't pass this prop
  const [filteredSeries, setFilteredSeries] = useState([]);
  return (
    <div>
      <h1>Filter SubSeries</h1>
      <strong>Tip: click on legend</strong>
      <p>Series filtered: {filteredSeries.join(', ')}</p>

      <div style={{ width: 600, height: 450 }}>
        <h2>Stacked</h2>
        <Stacked data={data} filteredSeries={filteredSeries} setFilteredSeries={setFilteredSeries} />
      </div>

      <div style={{ width: 600, height: 450, marginTop: 100 }}>
        <h2>Categorized</h2>
        <Categorized data={data} filteredSeries={filteredSeries} setFilteredSeries={setFilteredSeries} />
      </div>
    </div>
  );
};
export const name = 'Filter SubSeries';
