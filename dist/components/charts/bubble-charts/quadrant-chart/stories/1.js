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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Basic"), /*#__PURE__*/_react["default"].createElement("p", null, "Tip: Hover on bubbles to see tooltip"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_quadrantChart["default"], {
    data: _mock["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      width: 800,
      height: 600
    })
  })));
};

exports.content = content;
var name = 'Basic';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGUtY2hhcnRzL3F1YWRyYW50LWNoYXJ0L3N0b3JpZXMvMS50c3giXSwibmFtZXMiOlsicm91bmREZXZFcXVpdmFsZW50IiwibnVtYmVyIiwiY29udGVudCIsIkNvbnRlbnQiLCJ4RmllbGQiLCJ5RmllbGQiLCJuYW1lTWFwIiwibWF4WCIsIk1hdGgiLCJtYXgiLCJkYXRhIiwiYSIsIm1heFkiLCJjb25maWd1cmF0aW9ucyIsInNpemVGaWVsZCIsInBvaW50U2l6ZSIsInhBeGlzIiwibmFtZSIsInlBeGlzIiwidG9vbHRpcFRpdGxlRm9ybWF0dGVyIiwidiIsInhCb3VuZGFyeSIsIm1pbiIsInlCb3VuZGFyeSIsInF1YWRyYW50TGFiZWxzIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxNQUFELEVBQWlCO0FBQzFDLE1BQUlBLE1BQU0sR0FBRyxHQUFiLEVBQWtCLE9BQU8sR0FBUDs7QUFDbEIsTUFBSUEsTUFBTSxHQUFHLEtBQWIsRUFBb0I7QUFDbEIsV0FBTyxtQkFBTUEsTUFBTixFQUFjLENBQUMsQ0FBZixDQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxtQkFBTUEsTUFBTixFQUFjLENBQUMsQ0FBZixDQUFQO0FBQ0QsQ0FORDs7QUFRTyxJQUFNQyxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUN4QyxNQUFNQyxNQUFNLEdBQUcsS0FBZjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFmO0FBQ0EsTUFBTUMsT0FBTyw4REFDVkYsTUFEVSxFQUNELHdCQURDLDhDQUVWQyxNQUZVLEVBRUQsc0JBRkMsWUFBYixDQUh3QyxDQVF4Qzs7QUFDQSxNQUFNRSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEdBQVQsRUFBYyxtQkFBTUMsZ0JBQU4sRUFBWSxVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDUCxNQUFELENBQVI7QUFBQSxHQUFaLEVBQThCQSxNQUE5QixDQUFkLENBQWIsQ0FUd0MsQ0FVeEM7O0FBQ0EsTUFBTVEsSUFBSSxHQUFHSixJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVksbUJBQU1DLGdCQUFOLEVBQVksVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ04sTUFBRCxDQUFSO0FBQUEsR0FBWixFQUE4QkEsTUFBOUIsQ0FBWixDQUFiO0FBRUEsTUFBTVEsY0FBYyxHQUFHO0FBQ3JCVCxJQUFBQSxNQUFNLEVBQU5BLE1BRHFCO0FBRXJCQyxJQUFBQSxNQUFNLEVBQU5BLE1BRnFCO0FBR3JCUyxJQUFBQSxTQUFTLEVBQUUsTUFIVTtBQUlyQkMsSUFBQUEsU0FBUyxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FKVTtBQUtyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBTGM7QUFRckJDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVJjO0FBV3JCWCxJQUFBQSxPQUFPLEVBQVBBLE9BWHFCO0FBWXJCYSxJQUFBQSxxQkFBcUIsRUFBRSwrQkFBQ0MsQ0FBRDtBQUFBLGFBQVlBLENBQVo7QUFBQSxLQVpGO0FBYXJCQyxJQUFBQSxTQUFTLEVBQUU7QUFBRUMsTUFBQUEsR0FBRyxFQUFFLENBQVA7QUFBVWIsTUFBQUEsR0FBRyxFQUFFVCxrQkFBa0IsQ0FBQ08sSUFBSSxHQUFHLEdBQVI7QUFBakMsS0FiVTtBQWNyQmdCLElBQUFBLFNBQVMsRUFBRTtBQUFFRCxNQUFBQSxHQUFHLEVBQUUsQ0FBUDtBQUFVYixNQUFBQSxHQUFHLEVBQUVHLElBQUksR0FBRztBQUF0QixLQWRVO0FBZXJCWSxJQUFBQSxjQUFjLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQixpQkFBM0I7QUFmSyxHQUF2QjtBQWlCQSxzQkFDRSwwREFDRSxvREFERixlQUVFLGtGQUZGLGVBR0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyx5QkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFaEIsZ0JBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RHLGNBRFM7QUFFWlksTUFBQUEsS0FBSyxFQUFFLEdBRks7QUFHWkMsTUFBQUEsTUFBTSxFQUFFO0FBSEk7QUFGaEIsSUFERixDQUhGLENBREY7QUFnQkQsQ0E5Q007OztBQStDQSxJQUFNVCxJQUFJLEdBQUcsT0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYXhCeSwgcm91bmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFF1YWRyYW50Q2hhcnQgZnJvbSAnLi4vcXVhZHJhbnQtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG4vLyBmb3IgYSBwcmV0dGllciBheGlzXG5jb25zdCByb3VuZERldkVxdWl2YWxlbnQgPSAobnVtYmVyOiBhbnkpID0+IHtcbiAgaWYgKG51bWJlciA8IDEwMCkgcmV0dXJuIDEwMDtcbiAgaWYgKG51bWJlciA8IDEwMDAwKSB7XG4gICAgcmV0dXJuIHJvdW5kKG51bWJlciwgLTIpO1xuICB9XG4gIHJldHVybiByb3VuZChudW1iZXIsIC0zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgeEZpZWxkID0gJ2F2Zyc7XG4gIGNvbnN0IHlGaWVsZCA9ICdjdic7XG4gIGNvbnN0IG5hbWVNYXAgPSB7XG4gICAgW3hGaWVsZF06ICdBdmVyYWdlIERldiBFcXVpdmFsZW50JyxcbiAgICBbeUZpZWxkXTogJ0Rpc2NyZXRlIENvZWZmaWNpZW50JyxcbiAgfTtcblxuICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjUzMikgRklYTUU6IE9iamVjdCBpcyBwb3NzaWJseSAndW5kZWZpbmVkJy5cbiAgY29uc3QgbWF4WCA9IE1hdGgubWF4KDEwMCwgbWF4QnkoZGF0YSwgKGEpID0+IGFbeEZpZWxkXSlbeEZpZWxkXSk7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTMyKSBGSVhNRTogT2JqZWN0IGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBtYXhZID0gTWF0aC5tYXgoMSwgbWF4QnkoZGF0YSwgKGEpID0+IGFbeUZpZWxkXSlbeUZpZWxkXSk7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgeEZpZWxkLFxuICAgIHlGaWVsZCxcbiAgICBzaXplRmllbGQ6ICdzaXplJyxcbiAgICBwb2ludFNpemU6IFsyMCwgNjBdLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGV2IEVxdWl2YWxlbnQgcGVyIENhcGl0YScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0NvZWZmaWNpZW50IG9mIFZhcmlhdGlvbicsXG4gICAgfSxcbiAgICBuYW1lTWFwLFxuICAgIHRvb2x0aXBUaXRsZUZvcm1hdHRlcjogKHY6IGFueSkgPT4gdixcbiAgICB4Qm91bmRhcnk6IHsgbWluOiAwLCBtYXg6IHJvdW5kRGV2RXF1aXZhbGVudChtYXhYICogMS41KSB9LFxuICAgIHlCb3VuZGFyeTogeyBtaW46IDAsIG1heDogbWF4WSAqIDEuNSB9LFxuICAgIHF1YWRyYW50TGFiZWxzOiBbJ0hpZ2ggU3RhYmlsaXR5JywgJycsICcnLCAnSGlnaCBFZmZpY2llbmN5J10sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5CYXNpYzwvaDE+XG4gICAgICA8cD5UaXA6IEhvdmVyIG9uIGJ1YmJsZXMgdG8gc2VlIHRvb2x0aXA8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8UXVhZHJhbnRDaGFydFxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgY29uZmlndXJhdGlvbnM9e3tcbiAgICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb25zLFxuICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdCYXNpYyc7XG4iXX0=