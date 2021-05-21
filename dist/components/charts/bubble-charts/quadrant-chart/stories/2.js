"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/map"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _jsonStableStringify = _interopRequireDefault(require("json-stable-stringify"));

var _quadrantChart = _interopRequireDefault(require("../quadrant-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

// for a prettier axis
var roundDevEquivalent = function roundDevEquivalent(number) {
  if (number < 100) return 100;

  if (number < 10000) {
    return (0, _lodash.round)(number, -2);
  }

  return (0, _lodash.round)(number, -3);
};

var content = function Content() {
  var _nameMap;

  var xField = 'avg';
  var yField = 'cv';
  var nameMap = (_nameMap = {}, (0, _defineProperty3["default"])(_nameMap, xField, 'Average Dev Equivalent'), (0, _defineProperty3["default"])(_nameMap, yField, 'Discrete Coefficient'), _nameMap);
  /* ====== BEGIN ====== */

  var _useMemo = (0, _react.useMemo)(function () {
    var sizeMap = new _map["default"]();
    var MIN_SIZE = 20;
    var MAX_SIZE = 60;
    var SIZE_INCREMENT = 8;
    var processedData = JSON.parse((0, _jsonStableStringify["default"])(_mock["default"]));
    processedData.forEach(function (item) {
      item.size = sizeMap.get(item[yField]) || MIN_SIZE;
      sizeMap.set(item[yField], item.size + SIZE_INCREMENT);
    });
    processedData.sort(function (a, b) {
      return b.size - a.size;
    });
    return {
      MIN_SIZE: MIN_SIZE,
      MAX_SIZE: MAX_SIZE,
      processedData: processedData
    }; // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string' is not assignable to par... Remove this comment to see the full error message
  }, (0, _jsonStableStringify["default"])(_mock["default"])),
      MIN_SIZE = _useMemo.MIN_SIZE,
      MAX_SIZE = _useMemo.MAX_SIZE,
      processedData = _useMemo.processedData;
  /* ====== END ====== */
  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.


  var maxX = Math.max(100, (0, _lodash.maxBy)(processedData, function (a) {
    return a[xField];
  })[xField]); // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.

  var maxY = Math.max(1, (0, _lodash.maxBy)(processedData, function (a) {
    return a[yField];
  })[yField]);
  var configurations = {
    xField: xField,
    yField: yField,
    sizeField: 'size',
    // HERE
    pointSize: [MIN_SIZE, MAX_SIZE],
    // HERE
    xAxis: {
      name: 'Dev Equivalent per Capita'
    },
    yAxis: {
      name: 'Coefficient of Variation'
    },
    nameMap: nameMap,
    tooltipTitleFormatter: function tooltipTitleFormatter(v) {
      return v;
    },
    xBoundary: {
      min: 0,
      max: roundDevEquivalent(maxX * 1.5)
    },
    yBoundary: {
      min: 0,
      max: maxY * 1.5
    },
    quadrantLabels: ['High Stability', '', '', 'High Efficiency']
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Sizing"), /*#__PURE__*/_react["default"].createElement("p", null, "Overlapped bubbles have increased size", /*#__PURE__*/_react["default"].createElement("br", null), "Tip: see the left bottom cornor, where 3 bubbles overlap"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_quadrantChart["default"], {
    data: processedData,
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      width: 800,
      height: 600
    })
  })));
};

exports.content = content;
var name = 'Sizing';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGUtY2hhcnRzL3F1YWRyYW50LWNoYXJ0L3N0b3JpZXMvMi50c3giXSwibmFtZXMiOlsicm91bmREZXZFcXVpdmFsZW50IiwibnVtYmVyIiwiY29udGVudCIsIkNvbnRlbnQiLCJ4RmllbGQiLCJ5RmllbGQiLCJuYW1lTWFwIiwic2l6ZU1hcCIsIk1JTl9TSVpFIiwiTUFYX1NJWkUiLCJTSVpFX0lOQ1JFTUVOVCIsInByb2Nlc3NlZERhdGEiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJzaXplIiwiZ2V0Iiwic2V0Iiwic29ydCIsImEiLCJiIiwibWF4WCIsIk1hdGgiLCJtYXgiLCJtYXhZIiwiY29uZmlndXJhdGlvbnMiLCJzaXplRmllbGQiLCJwb2ludFNpemUiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsInRvb2x0aXBUaXRsZUZvcm1hdHRlciIsInYiLCJ4Qm91bmRhcnkiLCJtaW4iLCJ5Qm91bmRhcnkiLCJxdWFkcmFudExhYmVscyIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLE1BQUQsRUFBaUI7QUFDMUMsTUFBSUEsTUFBTSxHQUFHLEdBQWIsRUFBa0IsT0FBTyxHQUFQOztBQUNsQixNQUFJQSxNQUFNLEdBQUcsS0FBYixFQUFvQjtBQUNsQixXQUFPLG1CQUFNQSxNQUFOLEVBQWMsQ0FBQyxDQUFmLENBQVA7QUFDRDs7QUFDRCxTQUFPLG1CQUFNQSxNQUFOLEVBQWMsQ0FBQyxDQUFmLENBQVA7QUFDRCxDQU5EOztBQVFPLElBQU1DLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQ3hDLE1BQU1DLE1BQU0sR0FBRyxLQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQWY7QUFDQSxNQUFNQyxPQUFPLDhEQUNWRixNQURVLEVBQ0Qsd0JBREMsOENBRVZDLE1BRlUsRUFFRCxzQkFGQyxZQUFiO0FBS0E7O0FBUndDLGlCQVNNLG9CQUFRLFlBQU07QUFDMUQsUUFBTUUsT0FBTyxHQUFHLHFCQUFoQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUNBLFFBQU1DLGNBQWMsR0FBRyxDQUF2QjtBQUVBLFFBQU1DLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcscUNBQW9CQyxnQkFBcEIsQ0FBWCxDQUF0QjtBQUNBSCxJQUFBQSxhQUFhLENBQUNJLE9BQWQsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFlO0FBQ25DQSxNQUFBQSxJQUFJLENBQUNDLElBQUwsR0FBWVYsT0FBTyxDQUFDVyxHQUFSLENBQVlGLElBQUksQ0FBQ1gsTUFBRCxDQUFoQixLQUE2QkcsUUFBekM7QUFDQUQsTUFBQUEsT0FBTyxDQUFDWSxHQUFSLENBQVlILElBQUksQ0FBQ1gsTUFBRCxDQUFoQixFQUEwQlcsSUFBSSxDQUFDQyxJQUFMLEdBQVlQLGNBQXRDO0FBQ0QsS0FIRDtBQUlBQyxJQUFBQSxhQUFhLENBQUNTLElBQWQsQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFTQyxDQUFUO0FBQUEsYUFBb0JBLENBQUMsQ0FBQ0wsSUFBRixHQUFTSSxDQUFDLENBQUNKLElBQS9CO0FBQUEsS0FBbkI7QUFDQSxXQUFPO0FBQ0xULE1BQUFBLFFBQVEsRUFBUkEsUUFESztBQUVMQyxNQUFBQSxRQUFRLEVBQVJBLFFBRks7QUFHTEUsTUFBQUEsYUFBYSxFQUFiQTtBQUhLLEtBQVAsQ0FaMEQsQ0FpQjFEO0FBQ0QsR0FsQjZDLEVBa0IzQyxxQ0FBb0JHLGdCQUFwQixDQWxCMkMsQ0FUTjtBQUFBLE1BU2hDTixRQVRnQyxZQVNoQ0EsUUFUZ0M7QUFBQSxNQVN0QkMsUUFUc0IsWUFTdEJBLFFBVHNCO0FBQUEsTUFTWkUsYUFUWSxZQVNaQSxhQVRZO0FBNEJ4QztBQUVBOzs7QUFDQSxNQUFNWSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEdBQVQsRUFBYyxtQkFBTWQsYUFBTixFQUFxQixVQUFDVSxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDakIsTUFBRCxDQUFSO0FBQUEsR0FBckIsRUFBdUNBLE1BQXZDLENBQWQsQ0FBYixDQS9Cd0MsQ0FnQ3hDOztBQUNBLE1BQU1zQixJQUFJLEdBQUdGLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxtQkFBTWQsYUFBTixFQUFxQixVQUFDVSxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDaEIsTUFBRCxDQUFSO0FBQUEsR0FBckIsRUFBdUNBLE1BQXZDLENBQVosQ0FBYjtBQUVBLE1BQU1zQixjQUFjLEdBQUc7QUFDckJ2QixJQUFBQSxNQUFNLEVBQU5BLE1BRHFCO0FBRXJCQyxJQUFBQSxNQUFNLEVBQU5BLE1BRnFCO0FBR3JCdUIsSUFBQUEsU0FBUyxFQUFFLE1BSFU7QUFHRjtBQUNuQkMsSUFBQUEsU0FBUyxFQUFFLENBQUNyQixRQUFELEVBQVdDLFFBQVgsQ0FKVTtBQUlZO0FBQ2pDcUIsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBTGM7QUFRckJDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVJjO0FBV3JCekIsSUFBQUEsT0FBTyxFQUFQQSxPQVhxQjtBQVlyQjJCLElBQUFBLHFCQUFxQixFQUFFLCtCQUFDQyxDQUFEO0FBQUEsYUFBWUEsQ0FBWjtBQUFBLEtBWkY7QUFhckJDLElBQUFBLFNBQVMsRUFBRTtBQUFFQyxNQUFBQSxHQUFHLEVBQUUsQ0FBUDtBQUFVWCxNQUFBQSxHQUFHLEVBQUV6QixrQkFBa0IsQ0FBQ3VCLElBQUksR0FBRyxHQUFSO0FBQWpDLEtBYlU7QUFjckJjLElBQUFBLFNBQVMsRUFBRTtBQUFFRCxNQUFBQSxHQUFHLEVBQUUsQ0FBUDtBQUFVWCxNQUFBQSxHQUFHLEVBQUVDLElBQUksR0FBRztBQUF0QixLQWRVO0FBZXJCWSxJQUFBQSxjQUFjLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQixpQkFBM0I7QUFmSyxHQUF2QjtBQWlCQSxzQkFDRSwwREFDRSxxREFERixlQUVFLGtHQUVFLDJDQUZGLDZEQUZGLGVBT0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyx5QkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFN0IsYUFEUjtBQUVFLElBQUEsY0FBYyxrQ0FDVGdCLGNBRFM7QUFFWlksTUFBQUEsS0FBSyxFQUFFLEdBRks7QUFHWkMsTUFBQUEsTUFBTSxFQUFFO0FBSEk7QUFGaEIsSUFERixDQVBGLENBREY7QUFvQkQsQ0F4RU07OztBQXlFQSxJQUFNVCxJQUFJLEdBQUcsUUFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWF4QnksIHJvdW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBqc29uU3RhYmxlU3RyaW5naWZ5IGZyb20gJ2pzb24tc3RhYmxlLXN0cmluZ2lmeSc7XG5pbXBvcnQgUXVhZHJhbnRDaGFydCBmcm9tICcuLi9xdWFkcmFudC1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2suanNvbic7XG5cbi8vIGZvciBhIHByZXR0aWVyIGF4aXNcbmNvbnN0IHJvdW5kRGV2RXF1aXZhbGVudCA9IChudW1iZXI6IGFueSkgPT4ge1xuICBpZiAobnVtYmVyIDwgMTAwKSByZXR1cm4gMTAwO1xuICBpZiAobnVtYmVyIDwgMTAwMDApIHtcbiAgICByZXR1cm4gcm91bmQobnVtYmVyLCAtMik7XG4gIH1cbiAgcmV0dXJuIHJvdW5kKG51bWJlciwgLTMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCB4RmllbGQgPSAnYXZnJztcbiAgY29uc3QgeUZpZWxkID0gJ2N2JztcbiAgY29uc3QgbmFtZU1hcCA9IHtcbiAgICBbeEZpZWxkXTogJ0F2ZXJhZ2UgRGV2IEVxdWl2YWxlbnQnLFxuICAgIFt5RmllbGRdOiAnRGlzY3JldGUgQ29lZmZpY2llbnQnLFxuICB9O1xuXG4gIC8qID09PT09PSBCRUdJTiA9PT09PT0gKi9cbiAgY29uc3QgeyBNSU5fU0laRSwgTUFYX1NJWkUsIHByb2Nlc3NlZERhdGEgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHNpemVNYXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgTUlOX1NJWkUgPSAyMDtcbiAgICBjb25zdCBNQVhfU0laRSA9IDYwO1xuICAgIGNvbnN0IFNJWkVfSU5DUkVNRU5UID0gODtcblxuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBKU09OLnBhcnNlKGpzb25TdGFibGVTdHJpbmdpZnkoZGF0YSkpO1xuICAgIHByb2Nlc3NlZERhdGEuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBpdGVtLnNpemUgPSBzaXplTWFwLmdldChpdGVtW3lGaWVsZF0pIHx8IE1JTl9TSVpFO1xuICAgICAgc2l6ZU1hcC5zZXQoaXRlbVt5RmllbGRdLCBpdGVtLnNpemUgKyBTSVpFX0lOQ1JFTUVOVCk7XG4gICAgfSk7XG4gICAgcHJvY2Vzc2VkRGF0YS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYi5zaXplIC0gYS5zaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgTUlOX1NJWkUsXG4gICAgICBNQVhfU0laRSxcbiAgICAgIHByb2Nlc3NlZERhdGEsXG4gICAgfTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjM0NSkgRklYTUU6IEFyZ3VtZW50IG9mIHR5cGUgJ3N0cmluZycgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgfSwganNvblN0YWJsZVN0cmluZ2lmeShkYXRhKSk7XG4gIC8qID09PT09PSBFTkQgPT09PT09ICovXG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI1NzEpIEZJWE1FOiBPYmplY3QgaXMgb2YgdHlwZSAndW5rbm93bicuXG4gIGNvbnN0IG1heFggPSBNYXRoLm1heCgxMDAsIG1heEJ5KHByb2Nlc3NlZERhdGEsIChhKSA9PiBhW3hGaWVsZF0pW3hGaWVsZF0pO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjU3MSkgRklYTUU6IE9iamVjdCBpcyBvZiB0eXBlICd1bmtub3duJy5cbiAgY29uc3QgbWF4WSA9IE1hdGgubWF4KDEsIG1heEJ5KHByb2Nlc3NlZERhdGEsIChhKSA9PiBhW3lGaWVsZF0pW3lGaWVsZF0pO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHhGaWVsZCxcbiAgICB5RmllbGQsXG4gICAgc2l6ZUZpZWxkOiAnc2l6ZScsIC8vIEhFUkVcbiAgICBwb2ludFNpemU6IFtNSU5fU0laRSwgTUFYX1NJWkVdLCAvLyBIRVJFXG4gICAgeEF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXYgRXF1aXZhbGVudCBwZXIgQ2FwaXRhJyxcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICBuYW1lOiAnQ29lZmZpY2llbnQgb2YgVmFyaWF0aW9uJyxcbiAgICB9LFxuICAgIG5hbWVNYXAsXG4gICAgdG9vbHRpcFRpdGxlRm9ybWF0dGVyOiAodjogYW55KSA9PiB2LFxuICAgIHhCb3VuZGFyeTogeyBtaW46IDAsIG1heDogcm91bmREZXZFcXVpdmFsZW50KG1heFggKiAxLjUpIH0sXG4gICAgeUJvdW5kYXJ5OiB7IG1pbjogMCwgbWF4OiBtYXhZICogMS41IH0sXG4gICAgcXVhZHJhbnRMYWJlbHM6IFsnSGlnaCBTdGFiaWxpdHknLCAnJywgJycsICdIaWdoIEVmZmljaWVuY3knXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlNpemluZzwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgT3ZlcmxhcHBlZCBidWJibGVzIGhhdmUgaW5jcmVhc2VkIHNpemVcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIFRpcDogc2VlIHRoZSBsZWZ0IGJvdHRvbSBjb3Jub3IsIHdoZXJlIDMgYnViYmxlcyBvdmVybGFwXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8UXVhZHJhbnRDaGFydFxuICAgICAgICAgIGRhdGE9e3Byb2Nlc3NlZERhdGF9XG4gICAgICAgICAgY29uZmlndXJhdGlvbnM9e3tcbiAgICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb25zLFxuICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdTaXppbmcnO1xuIl19