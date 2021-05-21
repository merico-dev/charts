import React from 'react';
import numeral from 'numeral';
import RadarChart from '../../radar-chart';
import data from './data.json';

const overflowValue = 1.00000001;

export function formatValue(value: number, format = '0', minimumValueText?: string) {
  if (format === '0.00%' && value < 0.0001) {
    const text = minimumValueText || '< 0.01%';
    return value < 0.00000001 ? '0%' : text;
  }
  if (format === '0.00‰' && value < 0.00001) {
    const text = minimumValueText || '< 0.01‰';
    return value < 0.000000001 ? '0‰' : text;
  }
  return numeral(value).format(format);
}

export const content = function Content() {
  const valueFormatter = (v: number) => {
    if (v === overflowValue) {
      return '>100%';
    }
    return formatValue(v, '0.00%');
  };
  const configurations = {
    angleField: 'metricName',
    radiusField: 'value',
    seriesField: 'name',
    radiusAxis: {
      grid: { line: { type: 'line' } },
      alternateColor: 'rgba(0, 0, 0, 0.04)',
      min: 0,
      max: 1,
    },
    appendPadding: [0, 30, 0, 30],
    point: { shape: 'circle' },
    legend: { layout: 'horizontal', position: 'bottom' },
    valueFormatter,
  };
  return (
    <div>
      <h1>Advanced</h1>
      <div style={{ width: 600, height: 600 }}>
        <RadarChart data={data} configurations={configurations} />
      </div>
    </div>
  );
};
