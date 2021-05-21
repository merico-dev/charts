"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.calcPredictionData = calcPredictionData;
exports.PREDICTION_TYPES = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _lodash = require("lodash");

var _regression = require("./regression");

var PREDICTION_TYPES = _regression.REGRESSION_TYPES;
exports.PREDICTION_TYPES = PREDICTION_TYPES;

function guessDateFormatMethod(value) {
  if (!Date.parse(value)) {
    return function (x) {
      return x;
    };
  }

  var d = new Date(value);

  if (value === d.toISOString()) {
    return Date.prototype.toISOString;
  }

  if (value === d.getTime()) {
    return Date.prototype.getTime;
  }

  if (value === d.toUTCString()) {
    return Date.prototype.toUTCString;
  }

  return function (x) {
    return x;
  };
}
/**
 * Calculate prediction line data
 */


function calc(_ref) {
  var type = _ref.type,
      body = _ref.body,
      tail = _ref.tail,
      x = _ref.x,
      y = _ref.y;

  try {
    if (!tail || !tail.length) {
      throw new Error('[Prediction Line] No prediction space left');
    }

    var start = (0, _lodash.last)(body); // const lastX = getLast(tail)[x];

    var _callRegression = (0, _regression.callRegression)({
      type: type,
      data: body,
      x: x,
      y: y
    }),
        slope = _callRegression.slope; // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.


    var intercept = start[y] - slope * start[x];

    var predict = function predict(x) {
      return slope * x + intercept;
    };

    return [// @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    [start[x], predict(start[x])]].concat((0, _toConsumableArray2["default"])(tail.map(function (point) {
      return [point[x], predict(point[x])];
    })));
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
/**
 * Calculate prediction line data with formatting
 */


function calcPredictionData(_ref2) {
  var type = _ref2.type,
      data = _ref2.data,
      x = _ref2.x,
      y = _ref2.y;
  var copy = (0, _lodash.cloneDeep)(data); // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.

  var body = (0, _lodash.dropRightWhile)(copy, function (item) {
    return item[y] === null;
  }); // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.

  var tail = (0, _lodash.takeRightWhile)(copy, function (item) {
    return item[y] === null;
  }); // parse to timestamp for d3-regression's calc

  var basisX = data[0][x];
  var isDate = Date.parse(basisX);

  if (isDate) {
    var formatter = function formatter(point) {
      point[x] = new Date(point[x]).getTime();
    };

    body.forEach(formatter);
    tail.forEach(formatter);
  } // calc prediction line data


  var ret = calc({
    type: type,
    body: body,
    tail: (0, _lodash.cloneDeep)(tail),
    x: x,
    y: y
  }); // parse back to match original data type & k/v

  if (isDate) {
    var method = guessDateFormatMethod(basisX);
    ret.forEach(function (point) {
      var date = new Date(point[0]); // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.

      point[0] = method ? method.call(date) : date;
      point[x] = point[0];
    });
  }

  return {
    lineData: ret.map(function (_ref3) {
      var _ref5;

      var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
          valX = _ref4[0],
          valY = _ref4[1];

      return _ref5 = {}, (0, _defineProperty2["default"])(_ref5, x, valX), (0, _defineProperty2["default"])(_ref5, y, valY), _ref5;
    })
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlbHBlcnMvcHJlZGljdGlvbi50cyJdLCJuYW1lcyI6WyJQUkVESUNUSU9OX1RZUEVTIiwiUkVHUkVTU0lPTl9UWVBFUyIsImd1ZXNzRGF0ZUZvcm1hdE1ldGhvZCIsInZhbHVlIiwiRGF0ZSIsInBhcnNlIiwieCIsImQiLCJ0b0lTT1N0cmluZyIsInByb3RvdHlwZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImNhbGMiLCJ0eXBlIiwiYm9keSIsInRhaWwiLCJ5IiwibGVuZ3RoIiwiRXJyb3IiLCJzdGFydCIsImRhdGEiLCJzbG9wZSIsImludGVyY2VwdCIsInByZWRpY3QiLCJtYXAiLCJwb2ludCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJjYWxjUHJlZGljdGlvbkRhdGEiLCJjb3B5IiwiaXRlbSIsImJhc2lzWCIsImlzRGF0ZSIsImZvcm1hdHRlciIsImZvckVhY2giLCJyZXQiLCJtZXRob2QiLCJkYXRlIiwiY2FsbCIsImxpbmVEYXRhIiwidmFsWCIsInZhbFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBR0MsNEJBQXpCOzs7QUFFUCxTQUFTQyxxQkFBVCxDQUErQkMsS0FBL0IsRUFBMkM7QUFDekMsTUFBSSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsS0FBWCxDQUFMLEVBQXdCO0FBQ3RCLFdBQU8sVUFBQ0csQ0FBRDtBQUFBLGFBQVlBLENBQVo7QUFBQSxLQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsQ0FBQyxHQUFHLElBQUlILElBQUosQ0FBU0QsS0FBVCxDQUFWOztBQUNBLE1BQUlBLEtBQUssS0FBS0ksQ0FBQyxDQUFDQyxXQUFGLEVBQWQsRUFBK0I7QUFDN0IsV0FBT0osSUFBSSxDQUFDSyxTQUFMLENBQWVELFdBQXRCO0FBQ0Q7O0FBQ0QsTUFBSUwsS0FBSyxLQUFLSSxDQUFDLENBQUNHLE9BQUYs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QUFBLFFBQVEsRUFBRUosR0FBRyxDQUFDYixHQUFKLENBQVE7QUFBQTs7QUFBQTtBQUFBLFVBQUVrQixJQUFGO0FBQUEsVUFBUUMsSUFBUjs7QUFBQSxpRUFBc0JyQyxDQUF0QixFQUEwQm9DLElBQTFCLDJDQUFpQzFCLENBQWpDLEVBQXFDMkIsSUFBckM7QUFBQSxLQUFSO0FBREwsR0FBUDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVEZWVwLCBkcm9wUmlnaHRXaGlsZSwgbGFzdCBhcyBnZXRMYXN0LCBsYXN0LCB0YWtlUmlnaHRXaGlsZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjYWxsUmVncmVzc2lvbiwgUkVHUkVTU0lPTl9UWVBFUyB9IGZyb20gJy4vcmVncmVzc2lvbic7XG5cbmV4cG9ydCBjb25zdCBQUkVESUNUSU9OX1RZUEVTID0gUkVHUkVTU0lPTl9UWVBFUztcblxuZnVuY3Rpb24gZ3Vlc3NEYXRlRm9ybWF0TWV0aG9kKHZhbHVlOiBhbnkpIHtcbiAgaWYgKCFEYXRlLnBhcnNlKHZhbHVlKSkge1xuICAgIHJldHVybiAoeDogYW55KSA9PiB4O1xuICB9XG5cbiAgY29uc3QgZCA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBkLnRvSVNPU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG4gIH1cbiAgaWYgKHZhbHVlID09PSBkLmdldFRpbWUoKSkge1xuICAgIHJldHVybiBEYXRlLnByb3RvdHlwZS5nZXRUaW1lO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gZC50b1VUQ1N0cmluZygpKSB7XG4gICAgcmV0dXJuIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nO1xuICB9XG4gIHJldHVybiAoeDogYW55KSA9PiB4O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBwcmVkaWN0aW9uIGxpbmUgZGF0YVxuICovXG5mdW5jdGlvbiBjYWxjKHsgdHlwZSwgYm9keSwgdGFpbCwgeCwgeSB9OiBhbnkpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIXRhaWwgfHwgIXRhaWwubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tQcmVkaWN0aW9uIExpbmVdIE5vIHByZWRpY3Rpb24gc3BhY2UgbGVmdCcpO1xuICAgIH1cbiAgICBjb25zdCBzdGFydCA9IGdldExhc3QoYm9keSk7XG4gICAgLy8gY29uc3QgbGFzdFggPSBnZXRMYXN0KHRhaWwpW3hdO1xuICAgIGNvbnN0IHsgc2xvcGUgfSA9IGNhbGxSZWdyZXNzaW9uKHsgdHlwZSwgZGF0YTogYm9keSwgeCwgeSB9KTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjU3MSkgRklYTUU6IE9iamVjdCBpcyBvZiB0eXBlICd1bmtub3duJy5cbiAgICBjb25zdCBpbnRlcmNlcHQgPSBzdGFydFt5XSAtIHNsb3BlICogc3RhcnRbeF07XG5cbiAgICBjb25zdCBwcmVkaWN0ID0gKHg6IGFueSkgPT4gc2xvcGUgKiB4ICsgaW50ZXJjZXB0O1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTcxKSBGSVhNRTogT2JqZWN0IGlzIG9mIHR5cGUgJ3Vua25vd24nLlxuICAgICAgW3N0YXJ0W3hdLCBwcmVkaWN0KHN0YXJ0W3hdKV0sXG4gICAgICAuLi50YWlsLm1hcCgocG9pbnQ6IGFueSkgPT4gW3BvaW50W3hdLCBwcmVkaWN0KHBvaW50W3hdKV0pLFxuICAgIF07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHByZWRpY3Rpb24gbGluZSBkYXRhIHdpdGggZm9ybWF0dGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY1ByZWRpY3Rpb25EYXRhKHsgdHlwZSwgZGF0YSwgeCwgeSB9OiBhbnkpIHtcbiAgY29uc3QgY29weSA9IGNsb25lRGVlcChkYXRhKTtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI1NzEpIEZJWE1FOiBPYmplY3QgaXMgb2YgdHlwZSAndW5rbm93bicuXG4gIGNvbnN0IGJvZHkgPSBkcm9wUmlnaHRXaGlsZShjb3B5LCAoaXRlbSkgPT4gaXRlbVt5XSA9PT0gbnVsbCk7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTcxKSBGSVhNRTogT2JqZWN0IGlzIG9mIHR5cGUgJ3Vua25vd24nLlxuICBjb25zdCB0YWlsID0gdGFrZVJpZ2h0V2hpbGUoY29weSwgKGl0ZW0pID0+IGl0ZW1beV0gPT09IG51bGwpO1xuXG4gIC8vIHBhcnNlIHRvIHRpbWVzdGFtcCBmb3IgZDMtcmVncmVzc2lvbidzIGNhbGNcbiAgY29uc3QgYmFzaXNYID0gZGF0YVswXVt4XTtcbiAgY29uc3QgaXNEYXRlID0gRGF0ZS5wYXJzZShiYXNpc1gpO1xuICBpZiAoaXNEYXRlKSB7XG4gICAgY29uc3QgZm9ybWF0dGVyID0gKHBvaW50OiBhbnkpID0+IHtcbiAgICAgIHBvaW50W3hdID0gbmV3IERhdGUocG9pbnRbeF0pLmdldFRpbWUoKTtcbiAgICB9O1xuICAgIGJvZHkuZm9yRWFjaChmb3JtYXR0ZXIpO1xuICAgIHRhaWwuZm9yRWFjaChmb3JtYXR0ZXIpO1xuICB9XG5cbiAgLy8gY2FsYyBwcmVkaWN0aW9uIGxpbmUgZGF0YVxuICBjb25zdCByZXQgPSBjYWxjKHsgdHlwZSwgYm9keSwgdGFpbDogY2xvbmVEZWVwKHRhaWwpLCB4LCB5IH0pO1xuXG4gIC8vIHBhcnNlIGJhY2sgdG8gbWF0Y2ggb3JpZ2luYWwgZGF0YSB0eXBlICYgay92XG4gIGlmIChpc0RhdGUpIHtcbiAgICBjb25zdCBtZXRob2QgPSBndWVzc0RhdGVGb3JtYXRNZXRob2QoYmFzaXNYKTtcbiAgICByZXQuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb2ludFswXSk7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjU1NCkgRklYTUU6IEV4cGVjdGVkIDIgYXJndW1lbnRzLCBidXQgZ290IDEuXG4gICAgICBwb2ludFswXSA9IG1ldGhvZCA/IG1ldGhvZC5jYWxsKGRhdGUpIDogZGF0ZTtcblxuICAgICAgcG9pbnRbeF0gPSBwb2ludFswXTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGluZURhdGE6IHJldC5tYXAoKFt2YWxYLCB2YWxZXSkgPT4gKHsgW3hdOiB2YWxYLCBbeV06IHZhbFkgfSkpLFxuICB9O1xufVxuIl19