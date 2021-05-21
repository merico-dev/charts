import { isFinite, uniq } from 'lodash';
import stableStringify from 'json-stable-stringify';
import React, { useMemo } from 'react';
import { Chart, View, Geom, Guide, Tooltip, Axis } from 'bizcharts';
import { CHART_COLOR_PALETTE, deriveColorByIndex } from '../../../helpers/colors';
import { truncateLabel, clip } from '../../../helpers/utils';
import { G2ChartBase } from '../../base/chart-base';
import ReferenceLine from '../../../g2/reference-line';

const tooltipContainerStyleStr = `
  position: absolute;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 8px;
  margin-bottom: 4px;
  border-radius: 2px;
  box-shadow: 0 0 10px #777777;
  transition: all 0.5s;
`;

function isArrayEmpty(arr: any) {
  return !Array.isArray(arr) || arr.length === 0;
}

function BoxPlotChart({ baseClassName, data, emptyContent, configurations }: any) {
  const {
    width = 500,
    height = 300,
    transposeCoord = false,
    valueFormatter = (v: any) => v,
    strokeColor = '#333333',
    xLabelMaxLength = 19,
    xLabelProps = {},
    invalidDataSeriesLabel = 'Invalid Data Series',
    lowLabel = 'Minimum',
    q1Label = 'Q1',
    medianLabel = 'Median',
    q3Label = 'Q3',
    highLabel = 'Maximum',
    outliersLabel = 'Outliers',
    referenceLines = [],
    isDataEmpty = isArrayEmpty(data),
  } = configurations;

  const [itemKeyNameMap, itemKeyList, minValue, maxValue, itemKeyInfoMap] = useMemo(() => {
    const keyNameMap = {};
    const itemKeys: any = [];
    let smallValues: any = [];
    let largeValues: any = [];
    const keyInfoMap = {};
    data.forEach((item: any) => {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      keyNameMap[item.key] = item.name || 'Unknown';
      itemKeys.push(item.key);
      smallValues = smallValues.concat(item.outliers, item.low);
      largeValues = largeValues.concat(item.outliers, item.high);
    });
    const keyList = uniq(itemKeys);
    const minV = Math.min(...smallValues);
    const maxV = Math.max(1, ...largeValues);
    data.forEach((item: any) => {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      keyInfoMap[item.key] = {
        key: item.key,
        valid: item.valid,
        color: deriveColorByIndex(keyList.indexOf(item.key)),
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        name: clip(keyNameMap[item.key], 30),
        low: valueFormatter(item.low),
        q1: valueFormatter(item.q1),
        median: valueFormatter(item.median),
        q3: valueFormatter(item.q3),
        high: valueFormatter(item.high),
        outliers: isArrayEmpty(item.outliers) ? '-' : item.outliers.map((v: any) => valueFormatter(v)),
      };
    });
    return [keyNameMap, keyList, minV, maxV, keyInfoMap];
  }, [stableStringify(data)]);

  const baseScale = {
    formatter: (arr: any) => arr.map((v: any) => valueFormatter(v)),
    min: isFinite(minValue) ? minValue : 0,
    max: maxValue,
    nice: true,
    sync: 'value',
  };

  const datasource = data.map((item: any) => ({
    range: [item.low, item.q1, item.median, item.q3, item.high],
    ...item,
  }));

  const randerTooltip = (key: any) => {
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const item = itemKeyInfoMap[key] || {};
    const itemNameTemplate = `
      <div>
        <span style="display: inline-block; width: 8px; height: 8px; margin-right: 4px; background-color: ${item.color};"></span>
        <span style="font-weight: bold;">${item.name}</span>
      </div>
    `;
    if (!item.valid) {
      return `
        <div style="${tooltipContainerStyleStr}">
          ${itemNameTemplate}
          <div style="padding-left: 16px; color: #CA4521;">${invalidDataSeriesLabel}</div>
        </div>
      `;
    }
    return `
      <div style="${tooltipContainerStyleStr}">
        ${itemNameTemplate}
        <div style="padding-left: 16px;">${highLabel}: ${item.high}</div>
        <div style="padding-left: 16px;">${q3Label}: ${item.q3}</div>
        <div style="padding-left: 16px;">${medianLabel}: ${item.median}</div>
        <div style="padding-left: 16px;">${q1Label}: ${item.q1}</div>
        <div style="padding-left: 16px;">${lowLabel}: ${item.low}</div>
        <div style="padding-left: 16px; color: #CA4521; word-break: break-all;">${outliersLabel}: ${item.outliers}</div>
      </div>
    `;
  };

  return (
    <G2ChartBase empty={isDataEmpty} emptyContent={emptyContent} className={baseClassName}>
      <Chart forceFit padding="auto" width={width} height={height} animate={false}>
        <Tooltip
          showTitle={false}
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          showMarkers={false}
          useHtml
          htmlContent={randerTooltip}
        />
        <View data={datasource} scale={{ range: baseScale }}>
          <Axis
            name="key"
            label={{
              formatter(key) {
                // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                return truncateLabel(itemKeyNameMap[key], xLabelMaxLength);
              },
              ...xLabelProps,
            }}
          />
          <Axis name="range" />
          <Geom
            select={false}
            type="schema"
            position="key*range"
            shape="box"
            size={15}
            color={strokeColor}
            style={['key', { fill: (key: any) => deriveColorByIndex(itemKeyList.indexOf(key)) }]}
          />
          <Guide>
            {referenceLines.map((item: any, index: any) => (
              <ReferenceLine
                key={`reference-line-${item.key ?? index}`}
                xScaleKey="key"
                yScaleKey="range"
                transpose={transposeCoord}
                {...item}
              />
            ))}
          </Guide>
        </View>
        <View data={datasource} scale={{ outliers: baseScale }}>
          <Geom
            select={false}
            type="point"
            position="key*outliers"
            shape="circle"
            size={3}
            color={['key', CHART_COLOR_PALETTE]}
          />
        </View>
      </Chart>
    </G2ChartBase>
  );
}

export default BoxPlotChart;
