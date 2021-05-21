import React from 'react';
import { round } from 'lodash';
import RechartsBarChart from '../recharts-bar-chart';
import data from './mocks/single-value.json';

export const content = function Content() {
  const transposedSubSeriesConfiguration = [
    {
      // label: 'Rounded Value',
      dataKey: 'value',
      stackId: 'value',
      barSize: 32,
      fill: '#F0876A',
      borderRadius: 4, // HERE
    },
  ];
  const configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    getCustomTick: function renderCustomTick({ x, y, valueText }: { x: number; y: number; valueText: any }) {
      // HERE
      const TICK_FONT_SIZE = 14;
      const SHIFT = TICK_FONT_SIZE / 2;
      const Y_FONT_SHIFT = 2;

      return (
        <g transform={`translate(${x},${y + SHIFT - Y_FONT_SHIFT})`}>
          <svg>
            <defs>
              <filter id="arc-shadow">
                <feDropShadow dx="1" dy="0" stdDeviation="1" floodColor="rgb(0,0,0)" floodOpacity={0.15} />
              </filter>
            </defs>
          </svg>
          <circle cx="13" cy="-5" r="10" fill="#F5F5F7" filter="url(#arc-shadow)" />
          <text x="7" y="-1" fontSize="10" fill="#32333B">
            {valueText.slice(0, 2)}
          </text>
          <text className="x-tick" x="28" y={0} fontSize={TICK_FONT_SIZE} fill="#32333B">
            {valueText}
          </text>
        </g>
      );
    },
    valueFormatter: (v: any) => round(v, 0),
    labelTickFormatter: (t: any) => t.slice(6),
    xAxis: {
      axisLine: false,
      tickLine: false,
      mirror: true,
      padding: { top: 10 },
    },
    yAxis: {
      tickMargin: 10,
      tickLine: false,
      tickTextColor: '#C1C1C7', // HERE
      axisLine: {
        stroke: '#E0E0E5', // HERE
      },
    },
    cartesianGrid: {
      horizontal: false,
      vertical: false,
    },
    legend: {
      enabled: false,
    },
  };
  return (
    <div>
      <h1>Icon and labels on vertical bars</h1>
      <div style={{ width: 800, height: 500, paddingBottom: 50 }}>
        <RechartsBarChart
          data={data}
          configurations={{
            ...configurations,
            subSeriesConfiguration: transposedSubSeriesConfiguration,
            transposed: true,
          }}
        />
      </div>
    </div>
  );
};
export const name = 'Icon and labels on vertical bars';
