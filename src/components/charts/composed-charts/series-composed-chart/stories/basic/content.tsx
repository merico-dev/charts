import React from 'react';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';

import data from './data.json';
import { Container } from './styled';

export default function content() {
  const configurations: SeriesComposedChartConfigurations = {
    withTooltip: true,
    legend: {
      enabled: false,
    },
    labelKey: 'name',
    xAxis: {
      name: 'Page',
      labelClassName: 'xAxisLabel',
    },
    yAxis: {
      name: 'Mock Value',
      labelClassName: 'yAxisLabel',
    },
    subSeriesConfiguration: [
      { label: 'UV', dataKey: 'uv' },
      { label: 'Male', dataKey: 'male', stackId: 'gender' }, // HERE, use stackId
      { label: 'Female', dataKey: 'female', stackId: 'gender' },
    ],
  };
  return (
    <Container>
      <h1>Basic</h1>
      <div style={{ width: 800, height: 600 }}>
        <SeriesComposedChart data={data} configurations={configurations} />
      </div>
    </Container>
  );
}
