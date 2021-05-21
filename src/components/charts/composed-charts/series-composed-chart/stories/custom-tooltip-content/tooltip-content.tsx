import React from 'react';
import { round } from 'lodash';
import { TooltipContentRoot, TooltipTitle } from './styled';
import { TooltipContentProps } from '../../../../../recharts/tooltip';
import { Dot } from '../../../../../recharts';
import { FormatterFunc } from '../../../../../helpers';

type RowWithConf = {
  stroke?: string;
  color?: string;
  fill?: string;
  key?: string;
  name: string;
  type: string;
  value: string | number;
};

function calcPercentage(value: string | number, sum: number) {
  if (typeof value === 'string') {
    return value;
  }
  if (!sum) {
    return '0%';
  }
  return `${round((value / sum) * 100, 2)}%`;
}

const getRowRenderer = (
  {
    rowNameFormatter,
    valueFormatter,
  }: {
    rowNameFormatter: FormatterFunc;
    valueFormatter: TooltipContentProps['valueFormatter'];
  },
  sum: number
) => {
  return function RowRenderer(row: RowWithConf, index: number) {
    const fill = row.stroke || row.color || row.fill;
    return (
      <tr key={row.key ?? row.name ?? index}>
        <td>
          <Dot fill={fill} /> {rowNameFormatter(row.name)}
        </td>
        <td>{valueFormatter(row.value, valueFormatter, row.name)}</td>
        <td>{calcPercentage(row.value, sum)}</td>
      </tr>
    );
  };
};

/**
 * Basically same as tooltip/tooltip-content
 */
export function CustomTooltipContent({
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
  }, [payload, excludesNameSet, sorter, active]);

  const sum = React.useMemo(() => {
    return filtered.reduce((acc, curr: any) => acc + curr.value, 0);
  }, [filtered]);

  if (filtered.length === 0) {
    return null;
  }

  return (
    <TooltipContentRoot>
      <TooltipTitle>{labelFormatter(label, 'tooltip')}</TooltipTitle>
      <table>
        <thead>
          <tr>
            <th>Series</th>
            <th>Value</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(
            getRowRenderer(
              {
                rowNameFormatter,
                valueFormatter,
              },
              sum
            )
          )}
        </tbody>
      </table>
      {appender?.(payload)}
    </TooltipContentRoot>
  );
}
