import React from 'react';
import BoxPlotChart from '../box-plot-chart';
import data from './mocks/basic.json';

export const content = function Content() {
  const configurations = {
    strokeColor: '#727272',
    lowLabel: 'statistic.minimum',
    q1Label: 'statistic.q1',
    medianLabel: 'statistic.median',
    q3Label: 'statistic.q3',
    highLabel: 'statistic.maximum',
    outliersLabel: 'statistic.outliers',
  };
  return (
    <div>
      <h1>Basic</h1>
      <div style={{ width: 800, height: 600, paddingBottom: 100 }}>
        <BoxPlotChart data={data} configurations={configurations} emptyContent="Box Plot Chart Empty" />
      </div>
    </div>
  );
};
export const name = 'Basic';
