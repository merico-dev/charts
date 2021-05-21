import React from 'react';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';

import data from './data.json';
import { Container } from './styled';

export default function content({ enabled }: { enabled: boolean }) {
  const configurations: SeriesComposedChartConfigurations = {
    withTooltip: true,
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
      // HERE
      isSeriesClickable: (id: string | number) => {
        if (enabled) {
          return id !== 'UV';
        }
        return true;
      },
    },
    labelKey: 'name',
    xAxis: {
      name: '',
    },
    yAxis: {
      name: '',
    },
    subSeriesConfiguration: [
      { label: 'UV', chartType: 'line', dataKey: 'uv' },
      { label: 'Male', chartType: 'line', dataKey: 'male' },
      { label: 'Female', chartType: 'line', dataKey: 'female' },
    ],
  };
  return (
    <Container>
      <h1>Click in Legend</h1>
      <p>
        Note: toggle Enabled in Controls, then hover and click <b>UV</b> in legend.
      </p>
      <div style={{ width: 800, height: 600 }}>
        <SeriesComposedChart data={data} configurations={configurations} />
      </div>
    </Container>
  );
}
