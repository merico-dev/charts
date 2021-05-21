import React from 'react';
import * as Recharts from 'recharts';
import { calcRegressionData } from '../helpers/regression';

// TODO: deprecate 'strokeDashArray'
// TODO: deprecate 'color'
export default ({
  key,
  data,
  labelKey,
  valueKey,
  type,
  stroke,
  color,
  strokeDasharray,
  strokeDashArray,
  yAxisId = 0,
}: any) => {
  if (!type) {
    return null;
  }

  const regressionData = calcRegressionData({
    type,
    data,
    x: labelKey,
    y: valueKey,
  });

  return (
    <Recharts.ReferenceLine
      key={key ?? labelKey}
      segment={regressionData}
      stroke={stroke ?? color}
      strokeWidth={1}
      strokeDasharray={strokeDasharray ?? strokeDashArray}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ segment: any; stroke: any; strokeWidth: nu... Remove this comment to see the full error message
      dot={false}
      ifOverflow="hidden"
      yAxisId={yAxisId}
    />
  );
};
