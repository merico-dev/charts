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

var content = function Content() {
  var _nameMap;

  var xField = 'avg';
  var yField = 'cv';
  var nameMap = (_nameMap = {}, (0, _defineProperty3["default"])(_nameMap, xField, 'Average Dev Equivalent'), (0, _defineProperty3["default"])(_nameMap, yField, 'Discrete Coefficient'), _nameMap); // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.

  var minX = (0, _lodash.minBy)(_mock["default"], xField)[xField];
  var meanX = (0, _lodash.meanBy)(_mock["default"], xField); // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.

  var maxX = (0, _lodash.maxBy)(_mock["default"], xField)[xField]; // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.

  var minY = Math.max(0, (0, _lodash.minBy)(_mock["default"], yField)[yField]);
  var meanY = (0, _lodash.meanBy)(_mock["default"], yField); // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.

  var maxY = (0, _lodash.maxBy)(_mock["default"], yField)[yField];
  var maxDistanceX = Math.max(Math.abs(meanX - minX), Math.abs(maxX - meanX));
  var xBoundaryMin = meanX - maxDistanceX * 1.5;
  var xBoundaryMax = meanX + maxDistanceX * 1.5;
  var maxDistanceY = Math.max(Math.abs(meanY - minY), Math.abs(maxY - meanY));
  var yBoundaryMin = meanY - maxDistanceY * 1.5;
  var yBoundaryMax = meanY + maxDistanceY * 1.5;
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
      min: xBoundaryMin,
      max: xBoundaryMax
    },
    yBoundary: {
      min: yBoundaryMin,
      max: yBoundaryMax
    },
    xBaseline: meanX,
    yBaseline: meanY,
    quadrantLabels: ['High Stability', '', '', 'High Efficiency']
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Origin Point"), /*#__PURE__*/_react["default"].createElement("p", null, "xBaseline and yBaseline decide the origin point"), /*#__PURE__*/_react["default"].createElement("div", {
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
var name = 'Origin Point';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGUtY2hhcnRzL3F1YWRyYW50LWNoYXJ0L3N0b3JpZXMvb3JpZ2luLXBvaW50LnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsInhGaWVsZCIsInlGaWVsZCIsIm5hbWVNYXAiLCJtaW5YIiwiZGF0YSIsIm1lYW5YIiwibWF4WCIsIm1pblkiLCJNYXRoIiwibWF4IiwibWVhblkiLCJtYXhZIiwibWF4RGlzdGFuY2VYIiwiYWJzIiwieEJvdW5kYXJ5TWluIiwieEJvdW5kYXJ5TWF4IiwibWF4RGlzdGFuY2VZIiwieUJvdW5kYXJ5TWluIiwieUJvdW5kYXJ5TWF4IiwiY29uZmlndXJhdGlvbnMiLCJzaXplRmllbGQiLCJwb2ludFNpemUiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsInRvb2x0aXBUaXRsZUZvcm1hdHRlciIsInYiLCJ4Qm91bmRhcnkiLCJtaW4iLCJ5Qm91bmRhcnkiLCJ4QmFzZWxpbmUiLCJ5QmFzZWxpbmUiLCJxdWFkcmFudExhYmVscyIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUN4QyxNQUFNQyxNQUFNLEdBQUcsS0FBZjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFmO0FBQ0EsTUFBTUMsT0FBTyw4REFDVkYsTUFEVSxFQUNELHdCQURDLDhDQUVWQyxNQUZVLEVBRUQsc0JBRkMsWUFBYixDQUh3QyxDQVF4Qzs7QUFDQSxNQUFNRSxJQUFJLEdBQUcsbUJBQU1DLGdCQUFOLEVBQVlKLE1BQVosRUFBb0JBLE1BQXBCLENBQWI7QUFDQSxNQUFNSyxLQUFLLEdBQUcsb0JBQU9ELGdCQUFQLEVBQWFKLE1BQWIsQ0FBZCxDQVZ3QyxDQVd4Qzs7QUFDQSxNQUFNTSxJ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UmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWF4QnksIG1lYW5CeSwgbWluQnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFF1YWRyYW50Q2hhcnQgZnJvbSAnLi4vcXVhZHJhbnQtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IHhGaWVsZCA9ICdhdmcnO1xuICBjb25zdCB5RmllbGQgPSAnY3YnO1xuICBjb25zdCBuYW1lTWFwID0ge1xuICAgIFt4RmllbGRdOiAnQXZlcmFnZSBEZXYgRXF1aXZhbGVudCcsXG4gICAgW3lGaWVsZF06ICdEaXNjcmV0ZSBDb2VmZmljaWVudCcsXG4gIH07XG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI1MzIpIEZJWE1FOiBPYmplY3QgaXMgcG9zc2libHkgJ3VuZGVmaW5lZCcuXG4gIGNvbnN0IG1pblggPSBtaW5CeShkYXRhLCB4RmllbGQpW3hGaWVsZF07XG4gIGNvbnN0IG1lYW5YID0gbWVhbkJ5KGRhdGEsIHhGaWVsZCk7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTMyKSBGSVhNRTogT2JqZWN0IGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBtYXhYID0gbWF4QnkoZGF0YSwgeEZpZWxkKVt4RmllbGRdO1xuXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTMyKSBGSVhNRTogT2JqZWN0IGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBtaW5ZID0gTWF0aC5tYXgoMCwgbWluQnkoZGF0YSwgeUZpZWxkKVt5RmllbGRdKTtcbiAgY29uc3QgbWVhblkgPSBtZWFuQnkoZGF0YSwgeUZpZWxkKTtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI1MzIpIEZJWE1FOiBPYmplY3QgaXMgcG9zc2libHkgJ3VuZGVmaW5lZCcuXG4gIGNvbnN0IG1heFkgPSBtYXhCeShkYXRhLCB5RmllbGQpW3lGaWVsZF07XG5cbiAgY29uc3QgbWF4RGlzdGFuY2VYID0gTWF0aC5tYXgoTWF0aC5hYnMobWVhblggLSBtaW5YKSwgTWF0aC5hYnMobWF4WCAtIG1lYW5YKSk7XG4gIGNvbnN0IHhCb3VuZGFyeU1pbiA9IG1lYW5YIC0gbWF4RGlzdGFuY2VYICogMS41O1xuICBjb25zdCB4Qm91bmRhcnlNYXggPSBtZWFuWCArIG1heERpc3RhbmNlWCAqIDEuNTtcblxuICBjb25zdCBtYXhEaXN0YW5jZVkgPSBNYXRoLm1heChNYXRoLmFicyhtZWFuWSAtIG1pblkpLCBNYXRoLmFicyhtYXhZIC0gbWVhblkpKTtcbiAgY29uc3QgeUJvdW5kYXJ5TWluID0gbWVhblkgLSBtYXhEaXN0YW5jZVkgKiAxLjU7XG4gIGNvbnN0IHlCb3VuZGFyeU1heCA9IG1lYW5ZICsgbWF4RGlzdGFuY2VZICogMS41O1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB4RmllbGQsXG4gICAgeUZpZWxkLFxuICAgIHNpemVGaWVsZDogJ3NpemUnLFxuICAgIHBvaW50U2l6ZTogWzIwLCA2MF0sXG4gICAgeEF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXYgRXF1aXZhbGVudCBwZXIgQ2FwaXRhJyxcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICBuYW1lOiAnQ29lZmZpY2llbnQgb2YgVmFyaWF0aW9uJyxcbiAgICB9LFxuICAgIG5hbWVNYXAsXG4gICAgdG9vbHRpcFRpdGxlRm9ybWF0dGVyOiAodjogYW55KSA9PiB2LFxuICAgIHhCb3VuZGFyeTogeyBtaW46IHhCb3VuZGFyeU1pbiwgbWF4OiB4Qm91bmRhcnlNYXggfSxcbiAgICB5Qm91bmRhcnk6IHsgbWluOiB5Qm91bmRhcnlNaW4sIG1heDogeUJvdW5kYXJ5TWF4IH0sXG4gICAgeEJhc2VsaW5lOiBtZWFuWCxcbiAgICB5QmFzZWxpbmU6IG1lYW5ZLFxuICAgIHF1YWRyYW50TGFiZWxzOiBbJ0hpZ2ggU3RhYmlsaXR5JywgJycsICcnLCAnSGlnaCBFZmZpY2llbmN5J10sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5PcmlnaW4gUG9pbnQ8L2gxPlxuICAgICAgPHA+eEJhc2VsaW5lIGFuZCB5QmFzZWxpbmUgZGVjaWRlIHRoZSBvcmlnaW4gcG9pbnQ8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8UXVhZHJhbnRDaGFydFxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgY29uZmlndXJhdGlvbnM9e3tcbiAgICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb25zLFxuICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdPcmlnaW4gUG9pbnQnO1xuIl19