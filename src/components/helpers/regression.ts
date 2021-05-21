// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'd3-r... Remove this comment to see the full error message
import * as d3Regression from 'd3-regression';
import { cloneDeep, dropRightWhile } from 'lodash';

export const REGRESSION_TYPES = {
  regressionLinear: 'regressionLinear',
  regressionExp: 'regressionExp',
  regressionLog: 'regressionLog',
  regressionQuad: 'regressionQuad',
  regressionPoly: 'regressionPoly',
  regressionPow: 'regressionPow',
  regressionLoess: 'regressionLoess',
};

export function parseRegression(type: any) {
  if (!type) {
    return type;
  }
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'func' does not exist on type '{ regressi... Remove this comment to see the full error message
  return REGRESSION_TYPES.func[type] || type;
}

export function callRegression({ data, type, x, y }: any) {
  const method = d3Regression[type];
  if (!method) {
    throw new Error('Invalid regression type');
  }

  const processor = method()
    .x((d: any) => d[x])
    .y((d: any) => d[y]);
  const result = processor(data);
  const [...points] = result;
  return {
    points,
    slope: result.a,
    intercept: result.b,
  };
}

function calc({ type, data, x, y }: any) {
  try {
    const { points } = callRegression({ type, data, x, y });
    return points;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

function guessDateFormatMethod(value: any) {
  if (!Date.parse(value)) {
    return (x: any) => x;
  }

  const d = new Date(value);
  if (value === d.toISOString()) {
    return Date.prototype.toISOString;
  }
  if (value === d.getTime()) {
    return Date.prototype.getTime;
  }
  if (value === d.toUTCString()) {
    return Date.prototype.toUTCString;
  }
  return (x: any) => x;
}

export function calcRegressionData({ type, data, x, y }: any) {
  const copy = cloneDeep(data);
  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
  const body = dropRightWhile(copy, (item) => item[y] === null);

  // parse to timestamp for d3-regression's calc
  const basisX = data[0][x];
  const isDate = Date.parse(basisX);
  if (isDate) {
    body.forEach((point) => {
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
      point[x] = new Date(point[x]).getTime();
    });
  }

  // calc regression data
  const ret = calc({ type, data: body, x, y });

  // parse back to match original data type & k/v
  if (isDate) {
    const method = guessDateFormatMethod(basisX);
    ret.forEach((point: any) => {
      const date = new Date(point[0]);
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      point[0] = method ? method.call(date) : date;

      point[x] = point[0];
    });
  }

  // because `createLabeldScales({ x: xAxis.scale, y: yAxis.scale })` in recharts/ReferenceLine
  // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'x' implicitly has an 'any' type.
  return ret.map(([x, y]) => ({ x, y }));
}
