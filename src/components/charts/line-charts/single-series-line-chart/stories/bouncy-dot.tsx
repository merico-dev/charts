import React from 'react';
import * as Recharts from 'recharts';
import SingleSeriesLineChart from '../single-series-line-chart';
import data from './mock.json';

const renderDot = (props: any) => (
  <Recharts.Dot {...props} fill="rgb(237, 106, 69)" stroke="#fff" r={7} strokeWidth={0} />
);
const renderActiveDot = (props: any) => (
  <Recharts.Dot {...props} fill="rgb(237, 106, 69)" stroke="#fff" r={10} strokeWidth={0} />
);

export const content = function Content() {
  const index = 0;
  const configurations = {
    withTooltip: true,
    withLegend: false,
    cartesianGrid: {
      horizontal: false,
      vertical: false,
    },
    cartesianGridStyle: {
      stroke: '#DEDFE3',
    },
    interpolationType: 'linear',
    storkeColor: 'rgb(240, 135, 106)',
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
    renderDot, // HERE
    renderActiveDot, // HERE
  };

  return (
    <div>
      <h1>Bouncy Dot (hover on dots)</h1>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart data={data.dataSets[index].dataSet} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Bouncy Dot';
