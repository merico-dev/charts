import React from 'react';
import { round } from 'lodash';
import RechartsBarChart from '../recharts-bar-chart';
import data from './mocks/single-value.json';

export const content = function Content() {
  const fillByName = [
    {
      label: 'Rounded Value',
      dataKey: 'value',
      valueLabel: { enabled: true },
      fill: (_conf: any, entry: any) => {
        // HERE
        if (entry.name === 'RandomSeriesName-8') {
          return '#E86452';
        }
        return '#5B8FF9';
      },
    },
  ];

  const fillByValue = [
    {
      label: 'Rounded Value',
      dataKey: 'value',
      valueLabel: { enabled: true },
      fill: (conf: any, entry: any) => {
        // HERE
        if (entry.value <= 100) {
          return conf.color;
        }
        if (entry.value <= 200) {
          return '#5AD8A6';
        }
        if (entry.value <= 300) {
          return '#F6BD16';
        }
        if (entry.value <= 400) {
          return '#FF99C3';
        }
        if (entry.value <= 800) {
          return '#E86452';
        }
        if (entry.value > 800) {
          return '#945FB9';
        }
      },
    },
  ];

  const configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    valueFormatter: (v: any) => round(v, 0),
    xAxis: {
      name: 'Series',
    },
    yAxis: {
      name: 'Mock Value',
    },
  };
  return (
    <div>
      <h1>Custom Fill Color</h1>
      <h2>Fill by name</h2>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart
          data={data}
          configurations={{
            ...configurations,
            subSeriesConfiguration: fillByName,
          }}
        />
      </div>
      <h2>Fill by value</h2>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart
          data={data}
          configurations={{
            ...configurations,
            subSeriesConfiguration: fillByValue,
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Custom Fill Color';
