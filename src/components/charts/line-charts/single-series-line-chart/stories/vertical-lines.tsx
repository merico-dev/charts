import React, { useEffect } from 'react';
import * as Recharts from 'recharts';
import SingleSeriesLineChart from '../single-series-line-chart';
import data from './mock.json';

const renderDot = (props: any) => (
  <Recharts.Dot {...props} fill="rgb(237, 106, 69)" stroke="#fff" r={7} strokeWidth={0} />
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
    referenceLines: [],
  };

  // HERE
  useEffect(() => {
    const _data = data.dataSets[index].dataSet;
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ key: string; segmentData: { x: string; dat... Remove this comment to see the full error message
    configurations.referenceLines = _data.map((item) => {
      const x = item.date;
      return {
        key: x,
        segmentData: [
          { x, date: x, y: 0 },
          { x, date: x, y: item.value },
        ], // HERE
        stroke: 'rgb(222, 223, 227)',
        strokeDasharray: '0',
      };
    });
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'tooltipExcludedNames' does not exist on ... Remove this comment to see the full error message
    configurations.tooltipExcludedNames = data.dataSets[index].dataSet.map((item) => item.date); // FIXME: Nasty
  }, [index]);
  return (
    <div>
      <h1>Vertical Lines from Dots</h1>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart data={data.dataSets[index].dataSet} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Vertical Lines';
