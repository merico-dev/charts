import React from 'react';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';
import data from './data.json';
import { Container } from './styled';
import { CustomTooltipContent } from './tooltip-content';

export default function Content() {
  const configurations: SeriesComposedChartConfigurations = {
    // HERE
    tooltip: {
      excludedNames: [],
      labelFormatter: (v) => v,
      valueFormatter: (v) => v,
      content: CustomTooltipContent,
    },
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
    },
    labelKey: 'name',
    xAxis: {
      padding: { left: 20, right: 20 },
    },
    subSeriesConfiguration: [
      { label: 'UV', dataKey: 'uv', fill: '#ccc' },
      { label: 'Male', chartType: 'line', dataKey: 'human-male', stackId: 'human', stroke: 'red', dot: null },
      { label: 'Female', chartType: 'line', dataKey: 'human-female', stackId: 'human', stroke: 'red', dot: null },
    ],
  };

  return (
    <Container>
      <h1>Custom Legend Content</h1>
      <div style={{ width: 800, height: 600 }}>
        <SeriesComposedChart data={data} configurations={configurations} />
      </div>
    </Container>
  );
}
