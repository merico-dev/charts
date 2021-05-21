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

var _bubbleChart = _interopRequireDefault(require("../bubble-chart"));

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
  }, /*#__PURE__*/_react["default"].createElement(_bubbleChart["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGUtY2hhcnRzL2J1YmJsZS1jaGFydC9zdG9yaWVzL2VtcHR5LnRzeCJdLCJuYW1lcyI6WyJyb3VuZERldkVxdWl2YWxlbnQiLCJudW1iZXIiLCJjb250ZW50IiwiQ29udGVudCIsInhGaWVsZCIsInlGaWVsZCIsIm5hbWVNYXAiLCJtYXhYIiwiTWF0aCIsIm1heCIsImRhdGEiLCJhIiwibWF4WSIsImNvbmZpZ3VyYXRpb25zIiwic2l6ZUZpZWxkIiwicG9pbnRTaXplIiwieEF4aXMiLCJuYW1lIiwieUF4aXMiLCJ0b29sdGlwVGl0bGVGb3JtYXR0ZXIiLCJ2IiwieEJvdW5kYXJ5IiwibWluIiwieUJvdW5kYXJ5IiwicXVhZHJhbnRMYWJlbHMiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLE1BQUQsRUFBaUI7QUFDMUMsTUFBSUEsTUFBTSxHQUFHLEdBQWIsRUFBa0IsT0FBTyxHQUFQOztBQUNsQixNQUFJQSxNQUFNLEdBQUcsS0FBYixFQUFvQjtBQUNsQixXQUFPLG1CQUFNQSxNQUFOLEVBQWMsQ0FBQyxDQUFmLENBQVA7QUFDRDs7QUFDRCxTQUFPLG1CQUFNQSxNQUFOLEVBQWMsQ0FBQyxDQUFmLENBQVA7QUFDRCxDQU5EOztBQVFPLElBQU1DLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQ3hDLE1BQU1DLE1BQU0sR0FBRyxLQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQWY7QUFDQSxNQUFNQyxPQUFPLDhEQUNWRixNQURVLEVBQ0Qsd0JBREMsOENBRVZDLE1BRlUsRUFFRCxzQkFGQyxZQUFiLENBSHdDLENBUXhDOztBQUNBLE1BQU1FLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBVCxFQUFjLG1CQUFNQyxnQkFBTixFQUFZLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNQLE1BQUQsQ0FBUjtBQUFBLEdBQVosRUFBOEJBLE1BQTlCLENBQWQsQ0FBYixDQVR3QyxDQVV4Qzs7QUFDQSxNQUFNUSxJQUFJLEdBQUdKLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxtQkFBTUMsZ0JBQU4sRUFBWSxVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDTixNQUFELENBQVI7QUFBQSxHQUFaLEVBQThCQSxNQUE5QixDQUFaLENBQWI7QUFFQSxNQUFNUSxjQUFjLEdBQUc7QUFDckJULElBQUFBLE1BQU0sRUFBTkEsTUFEcUI7QUFFckJDLElBQUFBLE1BQU0sRUFBTkEsTUFGcUI7QUFHckJTLElBQUFBLFNBQVMsRUFBRSxNQUhVO0FBSXJCQyxJQUFBQSxTQUFTLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUpVO0FBS3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FMYztBQVFyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLElBQUksRUFBRTtBQURELEtBUmM7QUFXckJYLElBQUFBLE9BQU8sRUFBUEEsT0FYcUI7QUFZckJhLElBQUFBLHFCQUFxQixFQUFFLCtCQUFDQyxDQUFEO0FBQUEsYUFBWUEsQ0FBWjtBQUFBLEtBWkY7QUFhckJDLElBQUFBLFNBQVMsRUFBRTtBQUFFQyxNQUFBQSxHQUFHLEVBQUUsQ0FBUDtBQUFVYixNQUFBQSxHQUFHLEVBQUVULGtCQUFrQixDQUFDTyxJQUFJLEdBQUcsR0FBUjtBQUFqQyxLQWJVO0FBY3JCZ0IsSUFBQUEsU0FBUyxFQUFFO0FBQUVELE1BQUFBLEdBQUcsRUFBRSxDQUFQO0FBQVViLE1BQUFBLEdBQUcsRUFBRUcsSUFBSSxHQUFHO0FBQXRCLEtBZFU7QUFlckJZLElBQUFBLGNBQWMsRUFBRSxDQUFDLGdCQUFELEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLGlCQUEzQjtBQWZLLEdBQXZCO0FBaUJBLHNCQUNFLDBEQUNFLG9EQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyx1QkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFLEVBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RiLGNBRFM7QUFFWlksTUFBQUEsS0FBSyxFQUFFLEdBRks7QUFHWkMsTUFBQUEsTUFBTSxFQUFFO0FBSEksTUFGaEI7QUFPRSxJQUFBLFlBQVksRUFBQztBQVBmLElBREYsQ0FGRixDQURGO0FBZ0JELENBOUNNOzs7QUErQ0EsSUFBTVQsSUFBSSxHQUFHLE9BQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWF4QnksIHJvdW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICcuLi9idWJibGUtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG4vLyBmb3IgYSBwcmV0dGllciBheGlzXG5jb25zdCByb3VuZERldkVxdWl2YWxlbnQgPSAobnVtYmVyOiBhbnkpID0+IHtcbiAgaWYgKG51bWJlciA8IDEwMCkgcmV0dXJuIDEwMDtcbiAgaWYgKG51bWJlciA8IDEwMDAwKSB7XG4gICAgcmV0dXJuIHJvdW5kKG51bWJlciwgLTIpO1xuICB9XG4gIHJldHVybiByb3VuZChudW1iZXIsIC0zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgeEZpZWxkID0gJ2F2Zyc7XG4gIGNvbnN0IHlGaWVsZCA9ICdjdic7XG4gIGNvbnN0IG5hbWVNYXAgPSB7XG4gICAgW3hGaWVsZF06ICdBdmVyYWdlIERldiBFcXVpdmFsZW50JyxcbiAgICBbeUZpZWxkXTogJ0Rpc2NyZXRlIENvZWZmaWNpZW50JyxcbiAgfTtcblxuICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjUzMikgRklYTUU6IE9iamVjdCBpcyBwb3NzaWJseSAndW5kZWZpbmVkJy5cbiAgY29uc3QgbWF4WCA9IE1hdGgubWF4KDEwMCwgbWF4QnkoZGF0YSwgKGEpID0+IGFbeEZpZWxkXSlbeEZpZWxkXSk7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTMyKSBGSVhNRTogT2JqZWN0IGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBtYXhZID0gTWF0aC5tYXgoMSwgbWF4QnkoZGF0YSwgKGEpID0+IGFbeUZpZWxkXSlbeUZpZWxkXSk7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgeEZpZWxkLFxuICAgIHlGaWVsZCxcbiAgICBzaXplRmllbGQ6ICdzaXplJyxcbiAgICBwb2ludFNpemU6IFsyMCwgNjBdLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGV2IEVxdWl2YWxlbnQgcGVyIENhcGl0YScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0NvZWZmaWNpZW50IG9mIFZhcmlhdGlvbicsXG4gICAgfSxcbiAgICBuYW1lTWFwLFxuICAgIHRvb2x0aXBUaXRsZUZvcm1hdHRlcjogKHY6IGFueSkgPT4gdixcbiAgICB4Qm91bmRhcnk6IHsgbWluOiAwLCBtYXg6IHJvdW5kRGV2RXF1aXZhbGVudChtYXhYICogMS41KSB9LFxuICAgIHlCb3VuZGFyeTogeyBtaW46IDAsIG1heDogbWF4WSAqIDEuNSB9LFxuICAgIHF1YWRyYW50TGFiZWxzOiBbJ0hpZ2ggU3RhYmlsaXR5JywgJycsICcnLCAnSGlnaCBFZmZpY2llbmN5J10sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5FbXB0eTwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8QnViYmxlQ2hhcnRcbiAgICAgICAgICBkYXRhPXtbXX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBlbXB0eUNvbnRlbnQ9XCJRdWFkcmFudCBDaGFydCBFbXB0eVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdFbXB0eSc7XG4iXX0=