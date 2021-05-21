import React from 'react';
import { CHART_COLOR_PALETTE } from '../../../../../helpers/colors';
import RechartsBarChart from '../../recharts-bar-chart';
import data from '../mocks/issues.json';

export const content = function Content() {
  data.sort((a, b) => b.issue_total_number - a.issue_total_number); // HERE

  const configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    subSeriesConfiguration: [
      { label: 'Blocker', dataKey: 'issue_blocker_number', stackId: 'project', fill: CHART_COLOR_PALETTE[4] }, // HERE, use prop 'fill'
      { label: 'Critical', dataKey: 'issue_critical_number', stackId: 'project', fill: CHART_COLOR_PALETTE[3] },
      { label: 'Major', dataKey: 'issue_major_number', stackId: 'project', fill: CHART_COLOR_PALETTE[2] },
      { label: 'Minor', dataKey: 'issue_minor_number', stackId: 'project', fill: CHART_COLOR_PALETTE[0] },
      { label: 'Info', dataKey: 'issue_info_number', stackId: 'project', fill: CHART_COLOR_PALETTE[1] },
      // { label: 'Total', dataKey: 'issue_total_number', stackId: 'project' },
    ],
  };
  return (
    <div>
      <h1>[Demo] Issues - Color</h1>
      <h2>Default</h2>
      <div style={{ width: 800, height: 600 }}>
        <RechartsBarChart data={data} configurations={configurations} />
      </div>

      <h2>Transposed</h2>
      <div style={{ width: 800, height: 600 }}>
        <RechartsBarChart
          data={data}
          configurations={{
            ...configurations,
            transposed: true,
          }}
        />
      </div>
    </div>
  );
};
export const name = '[Demo] Issues - Color';
