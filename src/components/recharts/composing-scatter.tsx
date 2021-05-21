import React from 'react';
import * as Recharts from 'recharts';

function renderScatterLabel(props: any) {
  const { dataKey, ...labelProps } = props;
  return <Recharts.LabelList dataKey={dataKey} {...labelProps} />;
}

export default function ComposingScatter({ labelProps, ...rest }: any) {
  return (
    <Recharts.Scatter isAnimationActive={false} {...rest}>
      {labelProps && renderScatterLabel(labelProps)}
    </Recharts.Scatter>
  );
}
