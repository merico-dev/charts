import React from 'react';
import RechartsBarChart from '../../recharts-bar-chart';
import data from '../mocks/issues.json';

export const content = function Content() {
  data.sort((a, b) => b.issue_total_number - a.issue_total_number); // HERE

  const configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    subSeriesConfiguration: [
      { label: 'Blocker', dataKey: 'issue_blocker_number', stackId: 'project' }, // HERE, use same stackId
      { label: 'Critical', dataKey: 'issue_critical_number', stackId: 'project' },
      { label: 'Major', dataKey: 'issue_major_number', stackId: 'project' },
      { label: 'Minor', dataKey: 'issue_minor_number', stackId: 'project' },
      { label: 'Info', dataKey: 'issue_info_number', stackId: 'project' },
      { label: 'Total', dataKey: 'issue_total_number', stackId: 'project' },
    ],
  };
  return (
    <div>
      <h1>[Demo] Issues - Basic</h1>
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
export const name = '[Demo] Issues - Basic';
