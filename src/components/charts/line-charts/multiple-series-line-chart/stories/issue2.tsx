import React, { useCallback, useState } from 'react';
import { Confirm } from 'semantic-ui-react';
import MultipleSeriesLineChart from '../multiple-series-line-chart';
import data from './mocks/mock.json';
import 'semantic-ui-css/semantic.min.css';

export const content = function Content() {
  const [opened, setOpened] = useState(false);

  const configurations = {
    withTooltip: true,
    withLegend: true,
    interpolationType: 'monotone',
    xAxis: {
      name: 'Date',
    },
    yAxis: {
      name: 'Dev Equivalent',
    },
    seriesDataKey: 'dataSet',
    seriesNameKey: 'developer$.name',
    seriesNameFormatter: (series: any) => `${series.developer.name} <${series.developer.primaryEmail}>`,
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD',
    },
    // HERE
    onClick: (props: any) => {
      if (!props || !props.activePayload) {
        return;
      }

      setOpened(true);
    },
  };
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
  const close = useCallback(() => {
    setOpened(false);
  });
  return (
    <div>
      <h1>Issues - 2</h1>
      <h2>Not resuming focus after clicking chart, hence cannot activate tooltip</h2>
      <div style={{ width: 800, height: 600 }}>
        <MultipleSeriesLineChart series={data.dataSets} configurations={configurations} />
        <Confirm open={opened} onCancel={close} onConfirm={close} />
      </div>
    </div>
  );
};
export const name = 'Issues - 2';
