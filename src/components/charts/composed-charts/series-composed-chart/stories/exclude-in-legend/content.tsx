import React from 'react';
import { LegendContentPropSeries } from '../../../../../recharts/legend';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';

import data from './data.json';
import { Container } from './styled';

function excludeUV(series: LegendContentPropSeries[]): LegendContentPropSeries[] {
  return series.filter((s: LegendContentPropSeries) => s.name !== 'UV');
}

export default function content({ enabled }: { enabled: boolean }) {
  const configurations: SeriesComposedChartConfigurations = {
    withTooltip: true,
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
      isSeriesClickable: (id: string | number) => id !== 'UV',
      excludeBy: enabled ? excludeUV : undefined, // HERE
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
      <h1>Exclude in Legend</h1>
      <p>Note: toggle Enabled in Controls </p>
      <div style={{ width: 800, height: 600 }}>
        <SeriesComposedChart data={data} configurations={configurations} />
      </div>
    </Container>
  );
}
