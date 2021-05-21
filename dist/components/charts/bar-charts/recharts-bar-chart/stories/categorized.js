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

var _rechartsBarChart = _interopRequireDefault(require("../recharts-bar-chart"));

var _multipleValues = _interopRequireDefault(require("./mocks/multiple-values.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  var configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    xAxis: {
      name: 'Page'
    },
    yAxis: {
      name: 'Mock Value'
    },
    subSeriesConfiguration: [{
      label: 'UV',
      dataKey: 'uv'
    }, // no stackId
    {
      label: 'Male',
      dataKey: 'male'
    }, {
      label: 'Female',
      dataKey: 'female'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Categorized"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _multipleValues["default"],
    configurations: configurations
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "Transposed"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _multipleValues["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      transposed: true
    })
  })));
};

exports.content = content;
var name = 'Categorized';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2NhdGVnb3JpemVkLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwibGFiZWxLZXkiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsInN1YlNlcmllc0NvbmZpZ3VyYXRpb24iLCJsYWJlbCIsImRhdGFLZXkiLCJ3aWR0aCIsImhlaWdodCIsImRhdGEiLCJ0cmFuc3Bvc2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUUsS0FGUztBQUdyQkMsSUFBQUEsUUFBUSxFQUFFLE1BSFc7QUFJckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQUpjO0FBT3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FQYztBQVVyQkUsSUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEI7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsT0FBTyxFQUFFO0FBQXhCLEtBRHNCLEVBQ1U7QUFDaEM7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFBLE9BQU8sRUFBRTtBQUExQixLQUZzQixFQUd0QjtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQkMsTUFBQUEsT0FBTyxFQUFFO0FBQTVCLEtBSHNCO0FBVkgsR0FBdkI7QUFnQkEsc0JBQ0UsMERBQ0UsMERBREYsZUFFRSxzREFGRixlQUdFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVDLDBCQUF4QjtBQUE4QixJQUFBLGNBQWMsRUFBRVo7QUFBOUMsSUFERixDQUhGLGVBT0UseURBUEYsZUFRRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVVLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLDRCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVDLDBCQURSO0FBRUUsSUFBQSxjQUFjLGtDQUNUWixjQURTO0FBRVphLE1BQUFBLFVBQVUsRUFBRTtBQUZBO0FBRmhCLElBREYsQ0FSRixDQURGO0FBb0JELENBckNNOzs7QUFzQ0EsSUFBTVIsSUFBSSxHQUFHLGFBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9ja3MvbXVsdGlwbGUtdmFsdWVzLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIHdpdGhMZWdlbmQ6IGZhbHNlLFxuICAgIGxhYmVsS2V5OiAnbmFtZScsXG4gICAgeEF4aXM6IHtcbiAgICAgIG5hbWU6ICdQYWdlJyxcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICBuYW1lOiAnTW9jayBWYWx1ZScsXG4gICAgfSxcbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiBbXG4gICAgICB7IGxhYmVsOiAnVVYnLCBkYXRhS2V5OiAndXYnIH0sIC8vIG5vIHN0YWNrSWRcbiAgICAgIHsgbGFiZWw6ICdNYWxlJywgZGF0YUtleTogJ21hbGUnIH0sXG4gICAgICB7IGxhYmVsOiAnRmVtYWxlJywgZGF0YUtleTogJ2ZlbWFsZScgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q2F0ZWdvcml6ZWQ8L2gxPlxuICAgICAgPGgyPkRlZmF1bHQ8L2gyPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnQgZGF0YT17ZGF0YX0gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoMj5UcmFuc3Bvc2VkPC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICB0cmFuc3Bvc2VkOiB0cnVlLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdDYXRlZ29yaXplZCc7XG4iXX0=