"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _singleSeriesLineChart = _interopRequireDefault(require("../single-series-line-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

var content = function Content() {
  var index = 0;
  var series = _mock["default"].dataSets[index].dataSet;
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: false
    },
    interpolationType: 'linear',
    storkeColor: '#CA4521',
    refRegressionType: 'regressionLinear',
    refRegressionColor: '#2152ca',
    xAxis: {
      name: 'Date'
    },
    yAxis: {
      name: 'Dev Equivalent'
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD'
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Regression Line"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: series,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Regression Line';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9yZWdyZXNzaW9uLWxpbmUudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJDb250ZW50IiwiaW5kZXgiLCJzZXJpZXMiLCJkYXRhIiwiZGF0YVNldHMiLCJkYXRhU2V0IiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsImxlZ2VuZCIsImVuYWJsZWQiLCJpbnRlcnBvbGF0aW9uVHlwZSIsInN0b3JrZUNvbG9yIiwicmVmUmVncmVzc2lvblR5cGUiLCJyZWZSZWdyZXNzaW9uQ29sb3IiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLEtBQUssR0FBRyxDQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxpQkFBS0MsUUFBTCxDQUFjSCxLQUFkLEVBQXFCSSxPQUFwQztBQUVBLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESCxLQUZhO0FBS3JCQyxJQUFBQSxpQkFBaUIsRUFBRSxRQUxFO0FBTXJCQyxJQUFBQSxXQUFXLEVBQUUsU0FOUTtBQU9yQkMsSUFBQUEsaUJBQWlCLEVBQUUsa0JBUEU7QUFRckJDLElBQUFBLGtCQUFrQixFQUFFLFNBUkM7QUFTckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVRjO0FBWXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FaYztBQWVyQkUsSUFBQUEsUUFBUSxFQUFFLE1BZlc7QUFnQnJCQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsSUFBSSxFQUFFLFdBRFE7QUFFZEMsTUFBQUEsTUFBTSxFQUFFO0FBRk07QUFoQkssR0FBdkI7QUFxQkEsc0JBQ0UsMERBQ0UsOERBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLGlDQUFEO0FBQXVCLElBQUEsSUFBSSxFQUFFcEIsTUFBN0I7QUFBcUMsSUFBQSxjQUFjLEVBQUVJO0FBQXJELElBREYsQ0FGRixDQURGO0FBUUQsQ0FqQ007OztBQWtDQSxJQUFNUyxJQUFJLEdBQUcsaUJBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpbmdsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGluZGV4ID0gMDtcbiAgY29uc3Qgc2VyaWVzID0gZGF0YS5kYXRhU2V0c1tpbmRleF0uZGF0YVNldDtcblxuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgaW50ZXJwb2xhdGlvblR5cGU6ICdsaW5lYXInLFxuICAgIHN0b3JrZUNvbG9yOiAnI0NBNDUyMScsXG4gICAgcmVmUmVncmVzc2lvblR5cGU6ICdyZWdyZXNzaW9uTGluZWFyJyxcbiAgICByZWZSZWdyZXNzaW9uQ29sb3I6ICcjMjE1MmNhJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ0RhdGUnLFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXYgRXF1aXZhbGVudCcsXG4gICAgfSxcbiAgICBsYWJlbEtleTogJ2RhdGUnLFxuICAgIGxhYmVsRm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnREFURV9USU1FJyxcbiAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5SZWdyZXNzaW9uIExpbmU8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFNpbmdsZVNlcmllc0xpbmVDaGFydCBkYXRhPXtzZXJpZXN9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ1JlZ3Jlc3Npb24gTGluZSc7XG4iXX0=