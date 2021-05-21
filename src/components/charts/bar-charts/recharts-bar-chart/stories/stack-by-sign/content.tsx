import React, { useMemo } from 'react';
import moment from 'moment';
import { round } from 'lodash';
import RechartsBarChart from '../../recharts-bar-chart';

export default function Content({ dataCount }: any) {
  const data = useMemo(() => {
    const now = moment();
    const ret = Array.from(new Array(dataCount), () => ({
      date: now.add(1, 'days').toISOString(),
      new: round(Math.random() * 10),
      solved: -round(Math.random() * 10),
    }));

    return ret;
  }, [dataCount]);

  const configurations = {
    withTooltip: true,
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'MM-DD',
    },
    xAxis: {
      name: '',
    },
    yAxis: {
      name: 'Mock Value',
      padding: { top: 15, bottom: 15 },
    },
    subSeriesConfiguration: [
      { label: 'New Issues', dataKey: 'new', stackId: 'issue', valueLabel: { enabled: true } },
      {
        label: 'Solved Issues',
        dataKey: 'solved',
        stackId: 'issue',
        valueLabel: {
          enabled: true,
          position: 'outsideBottom',
          valueAccessor: (row: any) => row.solved,
          formatter: (v: number) => (v === 0 ? '' : Math.abs(v)),
        },
      },
    ],
    stackOffset: 'sign',
    valueFormatter: (v: any) => Math.abs(v),
  };
  return (
    <div>
      <h1>Stack by Sign</h1>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart data={data} configurations={configurations} />
      </div>
    </div>
  );
}
