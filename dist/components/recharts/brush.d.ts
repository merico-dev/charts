import React from 'react';
import * as Recharts from 'recharts';
import { FormatterFunc } from '../helpers';
export declare type RenderBrushConfig = Partial<Omit<React.ComponentProps<typeof Recharts.Brush>, 'ref'> & {
    enabled: boolean;
}>;
export declare function renderBrush(brushConfigurations: RenderBrushConfig, tickFormatter: FormatterFunc): JSX.Element | null;
//# sourceMappingURL=brush.d.ts.map