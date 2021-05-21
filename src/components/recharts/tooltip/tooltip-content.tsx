/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { Dot } from '../indicator';
import { TooltipContentRoot } from './tooltip-content.styled';
import { TooltipContentProps } from './types';

export function TooltipContent({
  active,

  // type,
  // name,
  payload,

  label,
  labelFormatter,
  valueFormatter,
  rowNameFormatter = (n) => n,
  appender,
  excludedNames,
  sorter,
}: TooltipContentProps) {
  const excludesNameSet = React.useMemo(() => new Set([...excludedNames, 'refInterpolation', 'refRegression']), [
    excludedNames,
  ]);
  const filtered = React.useMemo(() => {
    if (!active || !payload) {
      return [];
    }
    const ret = payload.filter((row) => {
      return !excludesNameSet.has(row.name);
    });
    if (sorter) {
      ret.sort(sorter);
    }
    return ret;
  }, [payload, excludesNameSet, sorter]);

  if (filtered.length === 0) {
    return null;
  }
  // single line, with no yaxis name
  if (filtered.length === 1 && filtered[0].name === 'value') {
    return (
      <TooltipContentRoot>
        <span>
          {labelFormatter(label, 'tooltip')}: {filtered[0].value}
        </span>
      </TooltipContentRoot>
    );
  }

  return (
    <TooltipContentRoot>
      <span>{labelFormatter(label, 'tooltip')}</span>
      <table>
        <tbody>
          {filtered.map((row: any, index: any) => {
            let fill = row.stroke || row.color || row.fill;
            if (typeof fill === 'function') {
              fill = fill(row, row.payload);
            }
            return (
              <tr key={row.key ?? row.name ?? index}>
                <td>
                  <Dot fill={fill} /> {rowNameFormatter(row.name)}
                </td>
                <td>{valueFormatter(row.value, valueFormatter, row.name)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {appender && appender(payload)}
    </TooltipContentRoot>
  );
}
