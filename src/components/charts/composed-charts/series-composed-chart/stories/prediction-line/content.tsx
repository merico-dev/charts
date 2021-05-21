import React, { useMemo } from 'react';
import moment from 'moment';
import { cloneDeep, keyBy, last } from 'lodash';

import { PredictionLineConfig } from '../../../../../recharts/prediction-line';
import { calcPredictionData, PREDICTION_TYPES } from '../../../../../helpers/prediction';
import { calcUpwardsSeriesData } from './helpers';
import SeriesComposedChart, { SeriesComposedChartConfigurations } from '../../series-composed-chart';

// 生成预测数据，和config
function getPredictionLine(series: any, { type, key, labelKey, valueKey }: any) {
  // 数据
  const { lineData } = calcPredictionData({
    type,
    data: series,
    x: labelKey,
    y: valueKey,
  });
  lineData.forEach((item) => {
    item[key] = item[valueKey];
    delete item[valueKey];
  });

  // config
  const predictionLine: PredictionLineConfig = {
    key,
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ key: any; type: any; color: string; stroke... Remove this comment to see the full error message
    type,
    color: 'blue',
    strokeDasharray: '3',
    data: lineData,
    dataKey: key,
    labelKey: labelKey,
    valueKey: key,
    yAxisId: 'accumulatively',
  };
  return {
    lineData,
    predictionLine,
  };
}

const LABEL_KEY = 'date';

export default function Content({ extendDays = 0, dataCount, scale }: any) {
  const [filteredSeries, setFilteredSeries] = React.useState<string[]>([]);

  // 生成原始数据
  const originalSeries = useMemo(calcUpwardsSeriesData({ dataCount, extendDays }), [dataCount]);
  // 为原始数据填补预测线的日期范围（在3.0中是按照迭代周期填补）
  const withSpaces = useMemo(() => {
    const ret = cloneDeep(originalSeries);
    const lastDate = moment(last(ret).date);
    const tailingDates = Array.from(new Array(extendDays), () => {
      return {
        'line-1': null,
        'line-2': null,
        date: lastDate.add(1, 'days').toISOString(),
      };
    });
    return ret.concat(tailingDates);
  }, [originalSeries, extendDays]);

  // 填补预测数据
  const { series, predictionLines } = useMemo(() => {
    const series = cloneDeep(withSpaces);
    const KEY = 'line-1-prediction';
    const VALUE_KEY = 'line-1';
    // 生成预测数据
    const { lineData, predictionLine } = getPredictionLine(series, {
      type: PREDICTION_TYPES.regressionLinear,
      key: KEY,
      labelKey: LABEL_KEY,
      valueKey: VALUE_KEY,
    });
    const lineDataMap = keyBy(lineData, LABEL_KEY);
    series.forEach((item) => {
      const date = item[LABEL_KEY];
      if (lineDataMap[date] !== undefined) {
        // @ts-expect-error ts-migrate(7015) FIXME: Element implicitly has an 'any' type because index... Remove this comment to see the full error message
        item[KEY] = lineDataMap[date][KEY]; // 按 date 把预测点数据补上
      }
    });
    return {
      series,
      predictionLines: [predictionLine],
    };
  }, [withSpaces]);

  const configurations: SeriesComposedChartConfigurations = {
    withTooltip: true,
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'MM-DD',
    },
    xAxis: {
      tickLine: false,
      axisLine: false,
      name: '',
      scale,
    },
    // Y Axis for line
    yAxis: {
      yAxisId: 'accumulatively',
      axisLine: false,
      tickLine: false,
      name: '',
      preserveTickZero: true,
    },
    valueFormatter: (v: any) => (v >= 0 ? v : ''), // hide negative value on Y Axis for line
    tooltipExcludedNames: ['Issue Range', 'line-1-prediction'], // match subSeries's label

    subSeriesConfiguration: [
      {
        label: 'Total Issues',
        dataKey: 'line-1',
        chartType: 'line',
        interpolationType: 'monotone',
        dot: false,
        yAxisId: 'accumulatively',
        stroke: 'rgba(232,71,28,1)',
        fill: 'rgba(232,71,28,1)',
      },
      {
        label: 'Total Something Else',
        dataKey: 'line-2',
        chartType: 'line',
        interpolationType: 'monotone',
        dot: false,
        yAxisId: 'accumulatively',
        stroke: '#F0876A',
        strokeDasharray: '4',
        fill: '#F0876A',
      },
      {
        label: 'Bar',
        key: 'line-1-bar',
        dataKey: 'line-1',
        chartType: 'bar',
        yAxisId: 'accumulatively',
        stroke: 'rgba(232,71,28,0.5)',
        fill: 'rgba(232,71,28,0.5)',
      },
    ],

    predictionLines,
  };

  // sync filter status between line and its prediction line
  const filterSeries = React.useCallback(
    (values: string[]) => {
      if (values.length === 0) {
        setFilteredSeries(values);
        return;
      }
      const s = new Set(values);
      if (s.has('Total Issues')) {
        s.add('line-1-prediction');
      } else {
        s.delete('line-1-prediction');
      }
      setFilteredSeries(Array.from(s));
    },
    [setFilteredSeries]
  );

  return (
    <div>
      <h1>Prediction Lines</h1>
      <div style={{ width: 600, height: 400 }}>
        <SeriesComposedChart
          data={series}
          configurations={configurations}
          filteredSeries={filteredSeries}
          setFilteredSeries={filterSeries}
        />
      </div>
    </div>
  );
}
