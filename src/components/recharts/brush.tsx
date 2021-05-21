import React from 'react';
import * as Recharts from 'recharts';

import { FormatterFunc } from '../helpers';

export type RenderBrushConfig = Partial<
  Omit<React.ComponentProps<typeof Recharts.Brush>, 'ref'> & { enabled: boolean }
>;

export function renderBrush(brushConfigurations: RenderBrushConfig, tickFormatter: FormatterFunc) {
  if (!brushConfigurations) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { enabled, dataKey, stroke, fill } = brushConfigurations;

  if (!enabled) {
    return null;
  }

  return <Recharts.Brush tickFormatter={tickFormatter} height={30} {...brushConfigurations} />;
}
