import React from 'react';
import { CHART_COLOR_PALETTE } from '../../../../../helpers/colors';
import { clip } from '../../../../../helpers/utils';
import RechartsBarChart from '../../recharts-bar-chart';
import data from '../mocks/issues.json';

export const content = function Content() {
  data.sort((a, b) => b.issue_total_number - a.issue_total_number); // HERE

  const configurations = {
    withTooltip: true,
    legend: {
      enabled: true,
      align: 'center',
      verticalAlign: 'top',
    },
    labelKey: 'name',
    subSeriesConfiguration: [
      { label: 'Blocker', dataKey: 'issue_blocker_number', stackId: 'project', fill: CHART_COLOR_PALETTE[4] },
      { label: 'Critical', dataKey: 'issue_critical_number', stackId: 'project', fill: CHART_COLOR_PALETTE[3] },
      { label: 'Major', dataKey: 'issue_major_number', stackId: 'project', fill: CHART_COLOR_PALETTE[2] },
      { label: 'Minor', dataKey: 'issue_minor_number', stackId: 'project', fill: CHART_COLOR_PALETTE[0] },
      {
        label: 'Info',
        dataKey: 'issue_info_number',
        stackId: 'project',
        fill: CHART_COLOR_PALETTE[1],
        valueLabel: { enabled: true, stacked: true },
      },
      // { label: 'Total', dataKey: 'issue_total_number', stackId: 'total' },
    ],
  };
  return (
    <div>
      <h1>[Demo] Issues - Label</h1>
      <h2>Default</h2>
      <div style={{ width: 400, height: 380 }}>
        <RechartsBarChart
          data={data}
          configurations={{
            ...configurations,
            labelTickFormatter: (v: any) => clip(v, 10),
          }}
        />
      </div>

      <h2>Transposed</h2>
      <div style={{ width: 400, height: 380 }}>
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
export const name = '[Demo] Issues - Label';
