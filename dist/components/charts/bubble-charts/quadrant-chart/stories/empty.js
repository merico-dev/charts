"use strict";

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

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

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
  var nameMap = (_nameMap = {}, (0, _defineProperty3["default"])(_nameMap, xField, 'Average Dev Equivalent'), (0, _defineProperty3["default"])(_nameMap, yField, 'Discrete Coefficient'), _nameMap); // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.

  var maxX = Math.max(100, (0, _lodash.maxBy)(_mock["default"], function (a) {
    return a[xField];
  })[xField]); // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.

  var maxY = Math.max(1, (0, _lodash.maxBy)(_mock["default"], function (a) {
    return a[yField];
  })[yField]);
  var configurations = {
    xField: xField,
    yField: yField,
    sizeField: 'size',
    pointSize: [20, 60],
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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Empty"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_quadrantChart["default"], {
    data: [],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      width: 800,
      height: 600
    }),
    emptyContent: "Quadrant Chart Empty"
  })));
};

exports.content = content;
var name = 'Empty';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGUtY2hhcnRzL3F1YWRyYW50LWNoYXJ0L3N0b3JpZXMvZW1wdHkudHN4Il0sIm5hbWVzIjpbInJvdW5kRGV2RXF1aXZhbGVudCIsIm51bWJlciIsImNvbnRlbnQiLCJDb250ZW50IiwieEZpZWxkIiwieUZpZWxkIiwibmFtZU1hcCIsIm1heFgiLCJNYXRoIiwibWF4IiwiZGF0YSIsImEiLCJtYXhZIiwiY29uZmlndXJhdGlvbnMiLCJzaXplRmllbGQiLCJwb2ludFNpemUiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsInRvb2x0aXBUaXRsZUZvcm1hdHRlciIsInYiLCJ4Qm91bmRhcnkiLCJtaW4iLCJ5Qm91bmRhcnkiLCJxdWFkcmFudExhYmVscyIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsTUFBRCxFQUFpQjtBQUMxQyxNQUFJQSxNQUFNLEdBQUcsR0FBYixFQUFrQixPQUFPLEdBQVA7O0FBQ2xCLE1BQUlBLE1BQU0sR0FBRyxLQUFiLEVBQW9CO0FBQ2xCLFdBQU8sbUJBQU1BLE1BQU4sRUFBYyxDQUFDLENBQWYsQ0FBUDtBQUNEOztBQUNELFNBQU8sbUJBQU1BLE1BQU4sRUFBYyxDQUFDLENBQWYsQ0FBUDtBQUNELENBTkQ7O0FBUU8sSUFBTUMsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFDeEMsTUFBTUMsTUFBTSxHQUFHLEtBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUNBLE1BQU1DLE9BQU8sOERBQ1ZGLE1BRFUsRUFDRCx3QkFEQyw4Q0FFVkMsTUFGVSxFQUVELHNCQUZDLFlBQWIsQ0FId0MsQ0FReEM7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxHQUFULEVBQWMsbUJBQU1DLGdCQUFOLEVBQVksVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ1AsTUFBRCxDQUFSO0FBQUEsR0FBWixFQUE4QkEsTUFBOUIsQ0FBZCxDQUFiLENBVHdDLENBVXhDOztBQUNBLE1BQU1RLElBQUksR0FBR0osSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZLG1CQUFNQyxnQkFBTixFQUFZLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNOLE1BQUQsQ0FBUjtBQUFBLEdBQVosRUFBOEJBLE1BQTlCLENBQVosQ0FBYjtBQUVBLE1BQU1RLGNBQWMsR0FBRztBQUNyQlQsSUFBQUEsTUFBTSxFQUFOQSxNQURxQjtBQUVyQkMsSUFBQUEsTUFBTSxFQUFOQSxNQUZxQjtBQUdyQlMsSUFBQUEsU0FBUyxFQUFFLE1BSFU7QUFJckJDLElBQUFBLFNBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBSlU7QUFLckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQUxjO0FBUXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FSYztBQVdyQlgsSUFBQUEsT0FBTyxFQUFQQSxPQVhxQjtBQVlyQmEsSUFBQUEscUJBQXFCLEVBQUUsK0JBQUNDLENBQUQ7QUFBQSxhQUFZQSxDQUFaO0FBQUEsS0FaRjtBQWFyQkMsSUFBQUEsU0FBUyxFQUFFO0FBQUVDLE1BQUFBLEdBQUcsRUFBRSxDQUFQO0FBQVViLE1BQUFBLEdBQUcsRUFBRVQsa0JBQWtCLENBQUNPLElBQUksR0FBRyxHQUFSO0FBQWpDLEtBYlU7QUFjckJnQixJQUFBQSxTQUFTLEVBQUU7QUFBRUQsTUFBQUEsR0FBRyxFQUFFLENBQVA7QUFBVWIsTUFBQUEsR0FBRyxFQUFFRyxJQUFJLEdBQUc7QUFBdEIsS0FkVTtBQWVyQlksSUFBQUEsY0FBYyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsRUFBbkIsRUFBdUIsRUFBdkIsRUFBMkIsaUJBQTNCO0FBZkssR0FBdkI7QUFpQkEsc0JBQ0UsMERBQ0Usb0RBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLHlCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUUsRUFEUjtBQUVFLElBQUEsY0FBYyxrQ0FDVGIsY0FEUztBQUVaWSxNQUFBQSxLQUFLLEVBQUUsR0FGSztBQUdaQyxNQUFBQSxNQUFNLEVBQUU7QUFISSxNQUZoQjtBQU9FLElBQUEsWUFBWSxFQUFDO0FBUGYsSUFERixDQUZGLENBREY7QUFnQkQsQ0E5Q007OztBQStDQSxJQUFNVCxJQUFJLEdBQUcsT0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYXhCeSwgcm91bmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFF1YWRyYW50Q2hhcnQgZnJvbSAnLi4vcXVhZHJhbnQtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG4vLyBmb3IgYSBwcmV0dGllciBheGlzXG5jb25zdCByb3VuZERldkVxdWl2YWxlbnQgPSAobnVtYmVyOiBhbnkpID0+IHtcbiAgaWYgKG51bWJlciA8IDEwMCkgcmV0dXJuIDEwMDtcbiAgaWYgKG51bWJlciA8IDEwMDAwKSB7XG4gICAgcmV0dXJuIHJvdW5kKG51bWJlciwgLTIpO1xuICB9XG4gIHJldHVybiByb3VuZChudW1iZXIsIC0zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgeEZpZWxkID0gJ2F2Zyc7XG4gIGNvbnN0IHlGaWVsZCA9ICdjdic7XG4gIGNvbnN0IG5hbWVNYXAgPSB7XG4gICAgW3hGaWVsZF06ICdBdmVyYWdlIERldiBFcXVpdmFsZW50JyxcbiAgICBbeUZpZWxkXTogJ0Rpc2NyZXRlIENvZWZmaWNpZW50JyxcbiAgfTtcblxuICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjUzMikgRklYTUU6IE9iamVjdCBpcyBwb3NzaWJseSAndW5kZWZpbmVkJy5cbiAgY29uc3QgbWF4WCA9IE1hdGgubWF4KDEwMCwgbWF4QnkoZGF0YSwgKGEpID0+IGFbeEZpZWxkXSlbeEZpZWxkXSk7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTMyKSBGSVhNRTogT2JqZWN0IGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBtYXhZID0gTWF0aC5tYXgoMSwgbWF4QnkoZGF0YSwgKGEpID0+IGFbeUZpZWxkXSlbeUZpZWxkXSk7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgeEZpZWxkLFxuICAgIHlGaWVsZCxcbiAgICBzaXplRmllbGQ6ICdzaXplJyxcbiAgICBwb2ludFNpemU6IFsyMCwgNjBdLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGV2IEVxdWl2YWxlbnQgcGVyIENhcGl0YScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0NvZWZmaWNpZW50IG9mIFZhcmlhdGlvbicsXG4gICAgfSxcbiAgICBuYW1lTWFwLFxuICAgIHRvb2x0aXBUaXRsZUZvcm1hdHRlcjogKHY6IGFueSkgPT4gdixcbiAgICB4Qm91bmRhcnk6IHsgbWluOiAwLCBtYXg6IHJvdW5kRGV2RXF1aXZhbGVudChtYXhYICogMS41KSB9LFxuICAgIHlCb3VuZGFyeTogeyBtaW46IDAsIG1heDogbWF4WSAqIDEuNSB9LFxuICAgIHF1YWRyYW50TGFiZWxzOiBbJ0hpZ2ggU3RhYmlsaXR5JywgJycsICcnLCAnSGlnaCBFZmZpY2llbmN5J10sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5FbXB0eTwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8UXVhZHJhbnRDaGFydFxuICAgICAgICAgIGRhdGE9e1tdfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXt7XG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9ucyxcbiAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGVtcHR5Q29udGVudD1cIlF1YWRyYW50IENoYXJ0IEVtcHR5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0VtcHR5JztcbiJdfQ==