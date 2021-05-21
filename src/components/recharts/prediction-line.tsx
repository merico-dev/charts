import { last } from 'lodash';
import React from 'react';
import * as Recharts from 'recharts';

import { calcPredictionData } from '../helpers/prediction';

export type PredictionLineConfig = {
  data: Record<string, number>[];
  dataKey?: string;
  labelKey: string;
  valueKey: string;
  key?: string;
  stroke?: string;
  strokeDasharray?: string;
  color?: string;
  yAxisId?: number | string;
};

function setHas(set?: ReadonlySet<string>, key?: any) {
  if (!set || !key || typeof key !== 'string') {
    return false;
  }
  return set.has(key);
}

export function renderPredictionLine(config: PredictionLineConfig, filteredSeriesSet?: ReadonlySet<string>) {
  const {
    data,
    dataKey,
    labelKey,
    valueKey,
    key = 'prediction-line',
    stroke = '#727272',
    strokeDasharray = '3 3',
    color,
    yAxisId = 0,
  } = config;
  if (setHas(filteredSeriesSet, key)) {
    return null;
  }

  const useRealLine = (() => {
    if (!data || !Array.isArray(data)) {
      return null;
    }

    const lastOne = last(data);
    if (lastOne && lastOne[valueKey] > 0) {
      return true;
    }
    return false;
  })();

  // transform data into segment if !useRealLine
  const formattedLineData = (() => {
    if (useRealLine !== false) {
      return dataKey ? undefined : data;
    }
    const firstOne = data[0];
    const lastOne = last(data);
    if (!firstOne || !lastOne) {
      return [];
    }
    return [firstOne, lastOne].map((entry) => ({ x: entry[labelKey], y: entry[valueKey] }));
  })();

  if (useRealLine === null) {
    return null;
  }
  // NOTE: use real line to extend Y domain
  if (useRealLine) {
    return (
      <Recharts.Line
        isAnimationActive={false}
        key={key}
        name={key}
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        data={dataKey ? undefined : formattedLineData}
        dataKey={valueKey}
        type="linear"
        stroke={stroke}
        strokeDasharray={strokeDasharray}
        dot={false}
        activeDot={false}
        label={false}
        yAxisId={yAxisId}
      />
    );
  }

  // NOTE: use ref line to clip at x=0
  return (
    <Recharts.ReferenceLine
      key={`${key}-imaginary`}
      segment={formattedLineData}
      stroke={color}
      strokeWidth={1}
      strokeDasharray={strokeDasharray}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ key: string; segment: Record<string, numbe... Remove this comment to see the full error message
      dot={false}
      ifOverflow="hidden"
      yAxisId={yAxisId}
    />
  );
}

export default function calculateAndRenderPredictionLine(
  { data, labelKey, valueKey, type, ...rest }: any,
  filteredSeriesSet?: ReadonlySet<string>
) {
  const { lineData } = (() => {
    if (!type || !data || !data.length) {
      return { lineData: null };
    }

    return calcPredictionData({
      type,
      data,
      x: labelKey,
      y: valueKey,
    });
  })();

  if (!lineData) {
    return null;
  }

  const config = {
    data: lineData,
    labelKey,
    valueKey,
    ...rest,
  };

  return renderPredictionLine(config, filteredSeriesSet);
}

export function renderPredictionLines(
  { predictionLines }: { predictionLines: PredictionLineConfig[] },
  filteredSeriesSet?: ReadonlySet<string>
) {
  return predictionLines.map((conf) => {
    return renderPredictionLine(conf, filteredSeriesSet);
  });
}
