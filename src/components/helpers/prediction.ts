import { cloneDeep, dropRightWhile, last as getLast, last, takeRightWhile } from 'lodash';
import { callRegression, REGRESSION_TYPES } from './regression';

export const PREDICTION_TYPES = REGRESSION_TYPES;

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

/**
 * Calculate prediction line data
 */
function calc({ type, body, tail, x, y }: any) {
  try {
    if (!tail || !tail.length) {
      throw new Error('[Prediction Line] No prediction space left');
    }
    const start = getLast(body);
    // const lastX = getLast(tail)[x];
    const { slope } = callRegression({ type, data: body, x, y });
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    const intercept = start[y] - slope * start[x];

    const predict = (x: any) => slope * x + intercept;

    return [
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
      [start[x], predict(start[x])],
      ...tail.map((point: any) => [point[x], predict(point[x])]),
    ];
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

/**
 * Calculate prediction line data with formatting
 */
export function calcPredictionData({ type, data, x, y }: any) {
  const copy = cloneDeep(data);
  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
  const body = dropRightWhile(copy, (item) => item[y] === null);
  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
  const tail = takeRightWhile(copy, (item) => item[y] === null);

  // parse to timestamp for d3-regression's calc
  const basisX = data[0][x];
  const isDate = Date.parse(basisX);
  if (isDate) {
    const formatter = (point: any) => {
      point[x] = new Date(point[x]).getTime();
    };
    body.forEach(formatter);
    tail.forEach(formatter);
  }

  // calc prediction line data
  const ret = calc({ type, body, tail: cloneDeep(tail), x, y });

  // parse back to match original data type & k/v
  if (isDate) {
    const method = guessDateFormatMethod(basisX);
    ret.forEach((point) => {
      const date = new Date(point[0]);
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      point[0] = method ? method.call(date) : date;

      point[x] = point[0];
    });
  }

  return {
    lineData: ret.map(([valX, valY]) => ({ [x]: valX, [y]: valY })),
  };
}
