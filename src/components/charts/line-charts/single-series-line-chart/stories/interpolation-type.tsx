import React, { useState } from 'react';
import SingleSeriesLineChart from '../single-series-line-chart';
import { INTERPOLATION_TYPES } from '../../../../helpers/interpolation';
import data from './mock.json';

export const content = function Content({ interpolationTypeKey }: { interpolationTypeKey: string }) {
  const [index] = useState(0);
  const interpolationType = React.useMemo(() => {
    if (INTERPOLATION_TYPES.basic.includes(interpolationTypeKey)) {
      return interpolationTypeKey;
    }
    // @ts-expect-error Element implicitly has an 'any' type because expression of type 'string' can't be used to index type ...
    return INTERPOLATION_TYPES.func[interpolationTypeKey];
  }, [interpolationTypeKey]);

  const configurations = {
    withTooltip: true,
    withLegend: false,
    interpolationType,
    storkeColor: '#CA4521',
    refInterpolationType: '',
    refInterpolationColor: '#2152ca',
    refRegressionType: 'regressionLinear',
    refRegressionColor: '#2152ca',
    xAxis: {
      name: 'Date',
    },
    yAxis: {
      name: 'Dev Equivalent',
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD',
    },
  };
  return (
    <div>
      <h1>Interpolation Type</h1>
      <div style={{ width: 800, height: 600 }}>
        <SingleSeriesLineChart data={data.dataSets[index].dataSet} configurations={configurations} />
      </div>
    </div>
  );
};
export const name = 'Interpolation Type';

export const parameters = {
  args: {
    interpolationTypeKey: 'linear',
  },
  argTypes: {
    interpolationTypeKey: {
      control: {
        type: 'inline-radio',
        options: [...INTERPOLATION_TYPES.basic, ...Object.keys(INTERPOLATION_TYPES.func)],
      },
    },
  },
};
