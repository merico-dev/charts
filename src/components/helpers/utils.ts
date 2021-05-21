import { truncate } from 'lodash';

export function deepFind(obj: any, path: any, separator: any) {
  const paths = path.split(separator);
  let current = obj;

  for (let i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined;
    }
    current = current[paths[i]];
  }
  return current;
}

function areRowsEmpty(rows: any, valueKey: any) {
  return rows.every((row: any) => {
    if (!row[valueKey]) {
      return true;
    }
    if (!Number(row[valueKey])) {
      return true;
    }
    return false;
  });
}

export const isSeriesEmpty = (series: any, seriesDatakey: any, valueKey: any) => () => {
  if (!series || !series.length) {
    return true;
  }

  // series is rows
  if (!seriesDatakey) {
    return areRowsEmpty(series, valueKey);
  }
  // series includes rows by seriesDataKey.
  // Flatten data rows from every series
  const rows = series
    .map((row: any) => {
      if (seriesDatakey) {
        row = row[seriesDatakey];
      }
      if (row && Array.isArray(row) && row.length > 0) {
        return row;
      }
      return null;
    })
    .filter((v: any) => v)
    .flat();

  if (!rows.length) {
    return true;
  }
  return areRowsEmpty(rows, valueKey);
};

export const truncateLabel = (label: any, maxLength = 20) => {
  if (!label) {
    return '';
  }
  return truncate(label.replace(/ <([^>]*)>$/, ''), { length: maxLength });
};

// 根据给定参数计算 G2 GuideLine/GuideRegion 等组件的端点位置，返回百分比数值型位置数组
// 目前只支持 Y 轴数据为 linear 情况，如果 Y 轴数据不为 linear，则将 yValue 当作纵坐标位置
export const deriveG2HorizontalGuideEndpointPos = (xPos: any, yValue: any, yScaleKey: any, transpose: any) => {
  if (transpose) {
    return (_xScale: any, yScale: any) => {
      const y = yScale[yScaleKey];
      if (yScaleKey && y?.isLinear && Number.isFinite(yValue)) {
        const yPosValue = (yValue - y.min) / (y.max - y.min);
        return [`${Math.round(yPosValue * 100)}%`, xPos];
      }
      return [yValue, xPos];
    };
  }

  return (_xScale: any, yScale: any) => {
    const y = yScale[yScaleKey];
    if (yScaleKey && y?.isLinear && Number.isFinite(yValue)) {
      const yPosValue = 1 - (yValue - y.min) / (y.max - y.min);
      return [xPos, `${Math.round(yPosValue * 100)}%`];
    }
    return [xPos, yValue];
  };
};

// 根据给定参数计算 G2 GuideLine/GuideRegion 等组件的端点位置，返回百分比数值型位置数组
// 目前只支持 X 轴数据为 linear 情况，如果 X 轴数据不为 linear，则将 xValue 当作横坐标位置
export const deriveG2VerticalGuideEndpointPos = (xValue: any, yPos: any, xScaleKey: any, transpose: any) => {
  if (transpose) {
    return (xScale: any /* yScale */) => {
      const x = xScale[xScaleKey];
      if (xScaleKey && x?.isLinear && Number.isFinite(xValue)) {
        const xPosValue = 1 - (xValue - x.min) / (x.max - x.min);
        return [yPos, `${Math.round(xPosValue * 100)}%`];
      }
      return [yPos, xValue];
    };
  }

  return (xScale: any /* yScale */) => {
    const x = xScale[xScaleKey];
    if (xScaleKey && x?.isLinear && Number.isFinite(xValue)) {
      const xPosValue = (xValue - x.min) / (x.max - x.min);
      return [`${Math.round(xPosValue * 100)}%`, yPos];
    }
    return [xValue, yPos];
  };
};

export function clip(str: any, len: any) {
  if (!len) {
    return str;
  }
  if (str.length <= len) {
    return str;
  }

  return `${str.substring(0, len)}...`;
}
