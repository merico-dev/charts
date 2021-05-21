"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.parseRegression = parseRegression;
exports.callRegression = callRegression;
exports.calcRegressionData = calcRegressionData;
exports.REGRESSION_TYPES = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toArray"));

var d3Regression = _interopRequireWildcard(require("d3-regression"));

var _lodash = require("lodash");

// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'd3-r... Remove this comment to see the full error message
var REGRESSION_TYPES = {
  regressionLinear: 'regressionLinear',
  regressionExp: 'regressionExp',
  regressionLog: 'regressionLog',
  regressionQuad: 'regressionQuad',
  regressionPoly: 'regressionPoly',
  regressionPow: 'regressionPow',
  regressionLoess: 'regressionLoess'
};
exports.REGRESSION_TYPES = REGRESSION_TYPES;

function parseRegression(type) {
  if (!type) {
    return type;
  } // @ts-expect-error ts-migrate(2339) FIXME: Property 'func' does not exist on type '{ regressi... Remove this comment to see the full error message


  return REGRESSION_TYPES.func[type] || type;
}

function callRegression(_ref) {
  var data = _ref.data,
      type = _ref.type,
      x = _ref.x,
      y = _ref.y;
  var method = d3Regression[type];

  if (!method) {
    throw new Error('Invalid regression type');
  }

  var processor = method().x(function (d) {
    return d[x];
  }).y(function (d) {
    return d[y];
  });
  var result = processor(data);

  var _result = (0, _toArray2["default"])(result),
      points = _result.slice(0);

  return {
    points: points,
    slope: result.a,
    intercept: result.b
  };
}

function calc(_ref2) {
  var type = _ref2.type,
      data = _ref2.data,
      x = _ref2.x,
      y = _ref2.y;

  try {
    var _callRegression = callRegression({
      type: type,
      data: data,
      x: x,
      y: y
    }),
        points = _callRegression.points;

    return points;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

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

function calcRegressionData(_ref3) {
  var type = _ref3.type,
      data = _ref3.data,
      x = _ref3.x,
      y = _ref3.y;
  var copy = (0, _lodash.cloneDeep)(data); // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.

  var body = (0, _lodash.dropRightWhile)(copy, function (item) {
    return item[y] === null;
  }); // parse to timestamp for d3-regression's calc

  var basisX = data[0][x];
  var isDate = Date.parse(basisX);

  if (isDate) {
    body.forEach(function (point) {
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
      point[x] = new Date(point[x]).getTime();
    });
  } // calc regression data


  var ret = calc({
    type: type,
    data: body,
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
  } // because `createLabeldScales({ x: xAxis.scale, y: yAxis.scale })` in recharts/ReferenceLine
  // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'x' implicitly has an 'any' type.


  return ret.map(function (_ref4) {
    var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
        x = _ref5[0],
        y = _ref5[1];

    return {
      x: x,
      y: y
    };
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlbHBlcnMvcmVncmVzc2lvbi50cyJdLCJuYW1lcyI6WyJSRUdSRVNTSU9OX1RZUEVTIiwicmVncmVzc2lvbkxpbmVhciIsInJlZ3Jlc3Npb25FeHAiLCJyZWdyZXNzaW9uTG9nIiwicmVncmVzc2lvblF1YWQiLCJyZWdyZXNzaW9uUG9seSIsInJlZ3Jlc3Npb25Qb3ciLCJyZWdyZXNzaW9uTG9lc3MiLCJwYXJzZVJlZ3Jlc3Npb24iLCJ0eXBlIiwiZnVuYyIsImNhbGxSZWdyZXNzaW9uIiwiZGF0YSIsIngiLCJ5IiwibWV0aG9kIiwiZDNSZWdyZXNzaW9uIiwiRXJyb3IiLCJwcm9jZXNzb3IiLCJkIiwicmVzdWx0IiwicG9pbnRzIiwic2xvcGUiLCJhIiwiaW50ZXJjZXB0IiwiYiIsImNhbGMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZ3Vlc3NEYXRlRm9ybWF0TWV0aG9kIiwidmFsdWUiLCJEYXRlIiwicGFyc2UiLCJ0b0lTT1N0cmluZyIsInByb3RvdHlwZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImNhbGNSZWdyZXNzaW9uRGF0YSIsImNvcHkiLCJib2R5IiwiaXRlbSIsImJhc2lzWCIsImlzRGF0ZSIsImZvckVhY2giLCJwb2ludCIsInJldCIsImRhdGUiLCJjYWxsIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFGQTtBQUlPLElBQU1BLGdCQUFnQixHQUFHO0FBQzlCQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFEWTtBQUU5QkMsRUFBQUEsYUFBYSxFQUFFLGVBRmU7QUFHOUJDLEVBQUFBLGFBQWEsRUFBRSxlQUhlO0FBSTlCQyxFQUFBQSxjQUFjLEVBQUUsZ0JBSmM7QUFLOUJDLEVBQUFBLGNBQWMsRUFBRSxnQkFMYztBQU05QkMsRUFBQUEsYUFBYSxFQUFFLGVBTmU7QUFPOUJDLEVBQUFBLGVBQWUsRUFBRTtBQVBhLENBQXpC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SixDQUFZLFVBQUNDLEtBQUQsRUFBZ0I7QUFDMUIsVUFBTUUsSUFBSSxHQUFHLElBQUlmLElBQUosQ0FBU2EsS0FBSyxDQUFDLENBQUQsQ0FBZCxDQUFiLENBRDBCLENBRTFCOztBQUNBQSxNQUFBQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcvQixNQUFNLEdBQUdBLE1BQU0sQ0FBQ2tDLElBQVAsQ0FBWUQsSUFBWixDQUFILEdBQXVCQSxJQUF4QztBQUVBRixNQUFBQSxLQUFLLENBQUNqQyxDQUFELENBQUwsR0FBV2lDLEtBQUssQ0FBQyxDQUFELENBQWhCO0FBQ0QsS0FORDtBQU9ELEdBNUIyRCxDQThCNUQ7QUFDQTs7O0FBQ0EsU0FBT0MsR0FBRyxDQUFDRyxHQUFKLENBQVE7QUFBQTtBQUFBLFFBQUVyQyxDQUFGO0FBQUEsUUFBS0MsQ0FBTDs7QUFBQSxXQUFhO0FBQUVELE1BQUFBLENBQUMsRUFBREEsQ0FBRjtBQUFLQyxNQUFBQSxDQUFDLEVBQURBO0FBQUwsS0FBYjtBQUFBLEdBQVIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDcwMTYpIEZJWE1FOiBDb3VsZCBub3QgZmluZCBhIGRlY2xhcmF0aW9uIGZpbGUgZm9yIG1vZHVsZSAnZDMtci4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG5pbXBvcnQgKiBhcyBkM1JlZ3Jlc3Npb24gZnJvbSAnZDMtcmVncmVzc2lvbic7XG5pbXBvcnQgeyBjbG9uZURlZXAsIGRyb3BSaWdodFdoaWxlIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNvbnN0IFJFR1JFU1NJT05fVFlQRVMgPSB7XG4gIHJlZ3Jlc3Npb25MaW5lYXI6ICdyZWdyZXNzaW9uTGluZWFyJyxcbiAgcmVncmVzc2lvbkV4cDogJ3JlZ3Jlc3Npb25FeHAnLFxuICByZWdyZXNzaW9uTG9nOiAncmVncmVzc2lvbkxvZycsXG4gIHJlZ3Jlc3Npb25RdWFkOiAncmVncmVzc2lvblF1YWQnLFxuICByZWdyZXNzaW9uUG9seTogJ3JlZ3Jlc3Npb25Qb2x5JyxcbiAgcmVncmVzc2lvblBvdzogJ3JlZ3Jlc3Npb25Qb3cnLFxuICByZWdyZXNzaW9uTG9lc3M6ICdyZWdyZXNzaW9uTG9lc3MnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVncmVzc2lvbih0eXBlOiBhbnkpIHtcbiAgaWYgKCF0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnZnVuYycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAneyByZWdyZXNzaS4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gIHJldHVybiBSRUdSRVNTSU9OX1RZUEVTLmZ1bmNbdHlwZV0gfHwgdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxSZWdyZXNzaW9uKHsgZGF0YSwgdHlwZSwgeCwgeSB9OiBhbnkpIHtcbiAgY29uc3QgbWV0aG9kID0gZDNSZWdyZXNzaW9uW3R5cGVdO1xuICBpZiAoIW1ldGhvZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZWdyZXNzaW9uIHR5cGUnKTtcbiAgfVxuXG4gIGNvbnN0IHByb2Nlc3NvciA9IG1ldGhvZCgpXG4gICAgLngoKGQ6IGFueSkgPT4gZFt4XSlcbiAgICAueSgoZDogYW55KSA9PiBkW3ldKTtcbiAgY29uc3QgcmVzdWx0ID0gcHJvY2Vzc29yKGRhdGEpO1xuICBjb25zdCBbLi4ucG9pbnRzXSA9IHJlc3VsdDtcbiAgcmV0dXJuIHtcbiAgICBwb2ludHMsXG4gICAgc2xvcGU6IHJlc3VsdC5hLFxuICAgIGludGVyY2VwdDogcmVzdWx0LmIsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbGMoeyB0eXBlLCBkYXRhLCB4LCB5IH06IGFueSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgcG9pbnRzIH0gPSBjYWxsUmVncmVzc2lvbih7IHR5cGUsIGRhdGEsIHgsIHkgfSk7XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gZ3Vlc3NEYXRlRm9ybWF0TWV0aG9kKHZhbHVlOiBhbnkpIHtcbiAgaWYgKCFEYXRlLnBhcnNlKHZhbHVlKSkge1xuICAgIHJldHVybiAoeDogYW55KSA9PiB4O1xuICB9XG5cbiAgY29uc3QgZCA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBkLnRvSVNPU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG4gIH1cbiAgaWYgKHZhbHVlID09PSBkLmdldFRpbWUoKSkge1xuICAgIHJldHVybiBEYXRlLnByb3RvdHlwZS5nZXRUaW1lO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gZC50b1VUQ1N0cmluZygpKSB7XG4gICAgcmV0dXJuIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nO1xuICB9XG4gIHJldHVybiAoeDogYW55KSA9PiB4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY1JlZ3Jlc3Npb25EYXRhKHsgdHlwZSwgZGF0YSwgeCwgeSB9OiBhbnkpIHtcbiAgY29uc3QgY29weSA9IGNsb25lRGVlcChkYXRhKTtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI1NzEpIEZJWE1FOiBPYmplY3QgaXMgb2YgdHlwZSAndW5rbm93bicuXG4gIGNvbnN0IGJvZHkgPSBkcm9wUmlnaHRXaGlsZShjb3B5LCAoaXRlbSkgPT4gaXRlbVt5XSA9PT0gbnVsbCk7XG5cbiAgLy8gcGFyc2UgdG8gdGltZXN0YW1wIGZvciBkMy1yZWdyZXNzaW9uJ3MgY2FsY1xuICBjb25zdCBiYXNpc1ggPSBkYXRhWzBdW3hdO1xuICBjb25zdCBpc0RhdGUgPSBEYXRlLnBhcnNlKGJhc2lzWCk7XG4gIGlmIChpc0RhdGUpIHtcbiAgICBib2R5LmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjU3MSkgRklYTUU6IE9iamVjdCBpcyBvZiB0eXBlICd1bmtub3duJy5cbiAgICAgIHBvaW50W3hdID0gbmV3IERhdGUocG9pbnRbeF0pLmdldFRpbWUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNhbGMgcmVncmVzc2lvbiBkYXRhXG4gIGNvbnN0IHJldCA9IGNhbGMoeyB0eXBlLCBkYXRhOiBib2R5LCB4LCB5IH0pO1xuXG4gIC8vIHBhcnNlIGJhY2sgdG8gbWF0Y2ggb3JpZ2luYWwgZGF0YSB0eXBlICYgay92XG4gIGlmIChpc0RhdGUpIHtcbiAgICBjb25zdCBtZXRob2QgPSBndWVzc0RhdGVGb3JtYXRNZXRob2QoYmFzaXNYKTtcbiAgICByZXQuZm9yRWFjaCgocG9pbnQ6IGFueSkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHBvaW50WzBdKTtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTU0KSBGSVhNRTogRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgIHBvaW50WzBdID0gbWV0aG9kID8gbWV0aG9kLmNhbGwoZGF0ZSkgOiBkYXRlO1xuXG4gICAgICBwb2ludFt4XSA9IHBvaW50WzBdO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gYmVjYXVzZSBgY3JlYXRlTGFiZWxkU2NhbGVzKHsgeDogeEF4aXMuc2NhbGUsIHk6IHlBeGlzLnNjYWxlIH0pYCBpbiByZWNoYXJ0cy9SZWZlcmVuY2VMaW5lXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSg3MDMxKSBGSVhNRTogQmluZGluZyBlbGVtZW50ICd4JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICByZXR1cm4gcmV0Lm1hcCgoW3gsIHldKSA9PiAoeyB4LCB5IH0pKTtcbn1cbiJdfQ==