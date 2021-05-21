"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.renderPredictionLine = renderPredictionLine;
exports["default"] = calculateAndRenderPredictionLine;
exports.renderPredictionLines = renderPredictionLines;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/is-array"));

var _lodash = require("lodash");

var _react = _interopRequireDefault(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

var _prediction = require("../helpers/prediction");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function setHas(set, key) {
  if (!set || !key || typeof key !== 'string') {
    return false;
  }

  return set.has(key);
}

function renderPredictionLine(config, filteredSeriesSet) {
  var data = config.data,
      dataKey = config.dataKey,
      labelKey = config.labelKey,
      valueKey = config.valueKey,
      _config$key = config.key,
      key = _config$key === void 0 ? 'prediction-line' : _config$key,
      _config$stroke = config.stroke,
      stroke = _config$stroke === void 0 ? '#727272' : _config$stroke,
      _config$strokeDasharr = config.strokeDasharray,
      strokeDasharray = _config$strokeDasharr === void 0 ? '3 3' : _config$strokeDasharr,
      color = config.color,
      _config$yAxisId = config.yAxisId,
      yAxisId = _config$yAxisId === void 0 ? 0 : _config$yAxisId;

  if (setHas(filteredSeriesSet, key)) {
    return null;
  }

  var useRealLine = function () {
    if (!data || !(0, _isArray["default"])(data)) {
      return null;
    }

    var lastOne = (0, _lodash.last)(data);

    if (lastOne && lastOne[valueKey] > 0) {
      return true;
    }

    return false;
  }(); // transform data into segment if !useRealLine


  var formattedLineData = function () {
    if (useRealLine !== false) {
      return dataKey ? undefined : data;
    }

    var firstOne = data[0];
    var lastOne = (0, _lodash.last)(data);

    if (!firstOne || !lastOne) {
      return [];
    }

    return [firstOne, lastOne].map(function (entry) {
      return {
        x: entry[labelKey],
        y: entry[valueKey]
      };
    });
  }();

  if (useRealLine === null) {
    return null;
  } // NOTE: use real line to extend Y domain


  if (useRealLine) {
    return /*#__PURE__*/_react["default"].createElement(Recharts.Line, {
      isAnimationActive: false,
      key: key,
      name: key // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      ,
      data: dataKey ? undefined : formattedLineData,
      dataKey: valueKey,
      type: "linear",
      stroke: stroke,
      strokeDasharray: strokeDasharray,
      dot: false,
      activeDot: false,
      label: false,
      yAxisId: yAxisId
    });
  } // NOTE: use ref line to clip at x=0


  return /*#__PURE__*/_react["default"].createElement(Recharts.ReferenceLine, {
    key: "".concat(key, "-imaginary"),
    segment: formattedLineData,
    stroke: color,
    strokeWidth: 1,
    strokeDasharray: strokeDasharray // @ts-expect-error ts-migrate(2322) FIXME: Type '{ key: string; segment: Record<string, numbe... Remove this comment to see the full error message
    ,
    dot: false,
    ifOverflow: "hidden",
    yAxisId: yAxisId
  });
}

function calculateAndRenderPredictionLine(_ref, filteredSeriesSet) {
  var data = _ref.data,
      labelKey = _ref.labelKey,
      valueKey = _ref.valueKey,
      type = _ref.type,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["data", "labelKey", "valueKey", "type"]);

  var _ref2 = function () {
    if (!type || !data || !data.length) {
      return {
        lineData: null
      };
    }

    return (0, _prediction.calcPredictionData)({
      type: type,
      data: data,
      x: labelKey,
      y: valueKey
    });
  }(),
      lineData = _ref2.lineData;

  if (!lineData) {
    return null;
  }

  var config = _objectSpread({
    data: lineData,
    labelKey: labelKey,
    valueKey: valueKey
  }, rest);

  return renderPredictionLine(config, filteredSeriesSet);
}

function renderPredictionLines(_ref3, filteredSeriesSet) {
  var predictionLines = _ref3.predictionLines;
  return predictionLines.map(function (conf) {
    return renderPredictionLine(conf, filteredSeriesSet);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL3ByZWRpY3Rpb24tbGluZS50c3giXSwibmFtZXMiOlsic2V0SGFzIiwic2V0Iiwia2V5IiwiaGFzIiwicmVuZGVyUHJlZGljdGlvbkxpbmUiLCJjb25maWciLCJmaWx0ZXJlZFNlcmllc1NldCIsImRhdGEiLCJkYXRhS2V5IiwibGFiZWxLZXkiLCJ2YWx1ZUtleSIsInN0cm9rZSIsInN0cm9rZURhc2hhcnJheSIsImNvbG9yIiwieUF4aXNJZCIsInVzZVJlYWxMaW5lIiwibGFzdE9uZSIsImZvcm1hdHRlZExpbmVEYXRhIiwidW5kZWZpbmVkIiwiZmlyc3RPbmUiLCJtYXAiLCJlbnRyeSIsIngiLCJ5IiwiY2FsY3VsYXRlQW5kUmVuZGVyUHJlZGljdGlvbkxpbmUiLCJ0eXBlIiwicmVzdCIsImxlbmd0aCIsImxpbmVEYXRhIiwicmVuZGVyUHJlZGljdGlvbkxpbmVzIiwicHJlZGljdGlvbkxpbmVzIiwiY29uZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFjQSxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUEyQ0MsR0FBM0MsRUFBc0Q7QUFDcEQsTUFBSSxDQUFDRCxHQUFELElBQVEsQ0FBQ0MsR0FBVCxJQUFnQixPQUFPQSxHQUFQLEtBQWUsUUFBbkMsRUFBNkM7QUFDM0MsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBT0QsR0FBRyxDQUFDRSxHQUFKLENBQVFELEdBQVIsQ0FBUDtBQUNEOztBQUVNLFNBQVNFLG9CQUFULENBQThCQyxNQUE5QixFQUE0REMsaUJBQTVELEVBQXFHO0FBQUEsTUFFeEdDLElBRndHLEdBV3RHRixNQVhzRyxDQUV4R0UsSUFGd0c7QUFBQSxNQUd4R0MsT0FId0csR0FXdEdILE1BWHNHLENBR3hHRyxPQUh3RztBQUFBLE1BSXhHQyxRQUp3RyxHQVd0R0osTUFYc0csQ0FJeEdJ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RUEsZUFFRjtBQUNBLFNBQU9BLGVBQWUsQ0FBQ1YsR0FBaEIsQ0FBb0IsVUFBQ1csSUFBRCxFQUFVO0FBQ25DLFdBQU8zQixvQkFBb0IsQ0FBQzJCLElBQUQsRUFBT3pCLGlCQUFQLENBQTNCO0FBQ0QsR0FGTSxDQUFQO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXN0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWNoYXJ0cyBmcm9tICdyZWNoYXJ0cyc7XG5cbmltcG9ydCB7IGNhbGNQcmVkaWN0aW9uRGF0YSB9IGZyb20gJy4uL2hlbHBlcnMvcHJlZGljdGlvbic7XG5cbmV4cG9ydCB0eXBlIFByZWRpY3Rpb25MaW5lQ29uZmlnID0ge1xuICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+W107XG4gIGRhdGFLZXk/OiBzdHJpbmc7XG4gIGxhYmVsS2V5OiBzdHJpbmc7XG4gIHZhbHVlS2V5OiBzdHJpbmc7XG4gIGtleT86IHN0cmluZztcbiAgc3Ryb2tlPzogc3RyaW5nO1xuICBzdHJva2VEYXNoYXJyYXk/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICB5QXhpc0lkPzogbnVtYmVyIHwgc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gc2V0SGFzKHNldD86IFJlYWRvbmx5U2V0PHN0cmluZz4sIGtleT86IGFueSkge1xuICBpZiAoIXNldCB8fCAha2V5IHx8IHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBzZXQuaGFzKGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcmVkaWN0aW9uTGluZShjb25maWc6IFByZWRpY3Rpb25MaW5lQ29uZmlnLCBmaWx0ZXJlZFNlcmllc1NldD86IFJlYWRvbmx5U2V0PHN0cmluZz4pIHtcbiAgY29uc3Qge1xuICAgIGRhdGEsXG4gICAgZGF0YUtleSxcbiAgICBsYWJlbEtleSxcbiAgICB2YWx1ZUtleSxcbiAgICBrZXkgPSAncHJlZGljdGlvbi1saW5lJyxcbiAgICBzdHJva2UgPSAnIzcyNzI3MicsXG4gICAgc3Ryb2tlRGFzaGFycmF5ID0gJzMgMycsXG4gICAgY29sb3IsXG4gICAgeUF4aXNJZCA9IDAsXG4gIH0gPSBjb25maWc7XG4gIGlmIChzZXRIYXMoZmlsdGVyZWRTZXJpZXNTZXQsIGtleSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHVzZVJlYWxMaW5lID0gKCgpID0+IHtcbiAgICBpZiAoIWRhdGEgfHwgIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGxhc3RPbmUgPSBsYXN0KGRhdGEpO1xuICAgIGlmIChsYXN0T25lICYmIGxhc3RPbmVbdmFsdWVLZXldID4gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSkoKTtcblxuICAvLyB0cmFuc2Zvcm0gZGF0YSBpbnRvIHNlZ21lbnQgaWYgIXVzZVJlYWxMaW5lXG4gIGNvbnN0IGZvcm1hdHRlZExpbmVEYXRhID0gKCgpID0+IHtcbiAgICBpZiAodXNlUmVhbExpbmUgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZGF0YUtleSA/IHVuZGVmaW5lZCA6IGRhdGE7XG4gICAgfVxuICAgIGNvbnN0IGZpcnN0T25lID0gZGF0YVswXTtcbiAgICBjb25zdCBsYXN0T25lID0gbGFzdChkYXRhKTtcbiAgICBpZiAoIWZpcnN0T25lIHx8ICFsYXN0T25lKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBbZmlyc3RPbmUsIGxhc3RPbmVdLm1hcCgoZW50cnkpID0+ICh7IHg6IGVudHJ5W2xhYmVsS2V5XSwgeTogZW50cnlbdmFsdWVLZXldIH0pKTtcbiAgfSkoKTtcblxuICBpZiAodXNlUmVhbExpbmUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBOT1RFOiB1c2UgcmVhbCBsaW5lIHRvIGV4dGVuZCBZIGRvbWFpblxuICBpZiAodXNlUmVhbExpbmUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlY2hhcnRzLkxpbmVcbiAgICAgICAgaXNBbmltYXRpb25BY3RpdmU9e2ZhbHNlfVxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgbmFtZT17a2V5fVxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjc2OSkgRklYTUU6IE5vIG92ZXJsb2FkIG1hdGNoZXMgdGhpcyBjYWxsLlxuICAgICAgICBkYXRhPXtkYXRhS2V5ID8gdW5kZWZpbmVkIDogZm9ybWF0dGVkTGluZURhdGF9XG4gICAgICAgIGRhdGFLZXk9e3ZhbHVlS2V5fVxuICAgICAgICB0eXBlPVwibGluZWFyXCJcbiAgICAgICAgc3Ryb2tlPXtzdHJva2V9XG4gICAgICAgIHN0cm9rZURhc2hhcnJheT17c3Ryb2tlRGFzaGFycmF5fVxuICAgICAgICBkb3Q9e2ZhbHNlfVxuICAgICAgICBhY3RpdmVEb3Q9e2ZhbHNlfVxuICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgIHlBeGlzSWQ9e3lBeGlzSWR9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICAvLyBOT1RFOiB1c2UgcmVmIGxpbmUgdG8gY2xpcCBhdCB4PTBcbiAgcmV0dXJuIChcbiAgICA8UmVjaGFydHMuUmVmZXJlbmNlTGluZVxuICAgICAga2V5PXtgJHtrZXl9LWltYWdpbmFyeWB9XG4gICAgICBzZWdtZW50PXtmb3JtYXR0ZWRMaW5lRGF0YX1cbiAgICAgIHN0cm9rZT17Y29sb3J9XG4gICAgICBzdHJva2VXaWR0aD17MX1cbiAgICAgIHN0cm9rZURhc2hhcnJheT17c3Ryb2tlRGFzaGFycmF5fVxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMjIpIEZJWE1FOiBUeXBlICd7IGtleTogc3RyaW5nOyBzZWdtZW50OiBSZWNvcmQ8c3RyaW5nLCBudW1iZS4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgICBkb3Q9e2ZhbHNlfVxuICAgICAgaWZPdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICB5QXhpc0lkPXt5QXhpc0lkfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFuZFJlbmRlclByZWRpY3Rpb25MaW5lKFxuICB7IGRhdGEsIGxhYmVsS2V5LCB2YWx1ZUtleSwgdHlwZSwgLi4ucmVzdCB9OiBhbnksXG4gIGZpbHRlcmVkU2VyaWVzU2V0PzogUmVhZG9ubHlTZXQ8c3RyaW5nPlxuKSB7XG4gIGNvbnN0IHsgbGluZURhdGEgfSA9ICgoKSA9PiB7XG4gICAgaWYgKCF0eXBlIHx8ICFkYXRhIHx8ICFkYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgbGluZURhdGE6IG51bGwgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1ByZWRpY3Rpb25EYXRhKHtcbiAgICAgIHR5cGUsXG4gICAgICBkYXRhLFxuICAgICAgeDogbGFiZWxLZXksXG4gICAgICB5OiB2YWx1ZUtleSxcbiAgICB9KTtcbiAgfSkoKTtcblxuICBpZiAoIWxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgZGF0YTogbGluZURhdGEsXG4gICAgbGFiZWxLZXksXG4gICAgdmFsdWVLZXksXG4gICAgLi4ucmVzdCxcbiAgfTtcblxuICByZXR1cm4gcmVuZGVyUHJlZGljdGlvbkxpbmUoY29uZmlnLCBmaWx0ZXJlZFNlcmllc1NldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcmVkaWN0aW9uTGluZXMoXG4gIHsgcHJlZGljdGlvbkxpbmVzIH06IHsgcHJlZGljdGlvbkxpbmVzOiBQcmVkaWN0aW9uTGluZUNvbmZpZ1tdIH0sXG4gIGZpbHRlcmVkU2VyaWVzU2V0PzogUmVhZG9ubHlTZXQ8c3RyaW5nPlxuKSB7XG4gIHJldHVybiBwcmVkaWN0aW9uTGluZXMubWFwKChjb25mKSA9PiB7XG4gICAgcmV0dXJuIHJlbmRlclByZWRpY3Rpb25MaW5lKGNvbmYsIGZpbHRlcmVkU2VyaWVzU2V0KTtcbiAgfSk7XG59XG4iXX0=