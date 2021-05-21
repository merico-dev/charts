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
    },
    subSeriesConfiguration: [
      { label: 'New Issues', dataKey: 'new', stackId: 'issue' },
      { label: 'Solved Issues', dataKey: 'solved', stackId: 'issue' },
    ],
    stackOffset: 'sign',
    valueFormatter: (v: any) => Math.abs(v),
  };
  // HERE
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'brush' does not exist on type '{ withToo... Remove this comment to see the full error message
  configurations.brush = {
    enabled: true,
    dataKey: configurations.labelKey,
    stroke: '#828487',
    fill: 'rgba(199,220,250,0.4)',
    travellerWidth: 10,
  };
  // cant have brush & tick, brush would overlap tick
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'tick' does not exist on type '{ name: st... Remove this comment to see the full error message
  configurations.xAxis.tick = null;
  return (
    <div>
      <h1>Zoom</h1>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <RechartsBarChart data={data} configurations={configurations} />
      </div>
    </div>
  );
}
