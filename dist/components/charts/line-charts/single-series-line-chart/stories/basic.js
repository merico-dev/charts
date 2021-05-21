"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _singleSeriesLineChart = _interopRequireDefault(require("../single-series-line-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

var content = function Content() {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
      index = _useState2[0];

  var configurations = {
    withTooltip: true,
    withLegend: false,
    interpolationType: 'linear',
    storkeColor: '#CA4521',
    refInterpolationType: '',
    refInterpolationColor: '#2152ca',
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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Basic"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: _mock["default"].dataSets[index].dataSet,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Basic';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9iYXNpYy50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJpbmRleCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJzdG9ya2VDb2xvciIsInJlZkludGVycG9sYXRpb25UeXBlIiwicmVmSW50ZXJwb2xhdGlvbkNvbG9yIiwicmVmUmVncmVzc2lvblR5cGUiLCJyZWZSZWdyZXNzaW9uQ29sb3IiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0Iiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwiZGF0YVNldHMiLCJkYXRhU2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFBQSxrQkFDeEIscUJBQVMsQ0FBVCxDQUR3QjtBQUFBO0FBQUEsTUFDakNDLEtBRGlDOztBQUV4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUUsS0FGUztBQUdyQkMsSUFBQUEsaUJBQWlCLEVBQUUsUUFIRTtBQUlyQkMsSUFBQUEsV0FBVyxFQUFFLFNBSlE7QUFLckJDLElBQUFBLG9CQUFvQixFQUFFLEVBTEQ7QUFNckJDLElBQUFBLHFCQUFxQixFQUFFLFNBTkY7QUFPckJDLElBQUFBLGlCQUFpQixFQUFFLGtCQVBFO0FBUXJCQyxJQUFBQSxrQkFBa0IsRUFBRSxTQVJDO0FBU3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FUYztBQVlyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLElBQUksRUFBRTtBQURELEtBWmM7QUFlckJFLElBQUFBLFFBQVEsRUFBRSxNQWZXO0FBZ0JyQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxXQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNO0FBaEJLLEdBQXZCO0FBcUJBLHNCQUNFLDBEQUNFLG9EQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyxpQ0FBRDtBQUF1QixJQUFBLElBQUksRUFBRUMsaUJBQUtDLFFBQUwsQ0FBY3BCLEtBQWQsRUFBcUJxQixPQUFsRDtBQUEyRCxJQUFBLGNBQWMsRUFBRXBCO0FBQTNFLElBREYsQ0FGRixDQURGO0FBUUQsQ0EvQk07OztBQWdDQSxJQUFNVSxJQUFJLEdBQUcsT0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW5nbGVTZXJpZXNMaW5lQ2hhcnQgZnJvbSAnLi4vc2luZ2xlLXNlcmllcy1saW5lLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9jay5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBbaW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIHdpdGhMZWdlbmQ6IGZhbHNlLFxuICAgIGludGVycG9sYXRpb25UeXBlOiAnbGluZWFyJyxcbiAgICBzdG9ya2VDb2xvcjogJyNDQTQ1MjEnLFxuICAgIHJlZkludGVycG9sYXRpb25UeXBlOiAnJyxcbiAgICByZWZJbnRlcnBvbGF0aW9uQ29sb3I6ICcjMjE1MmNhJyxcbiAgICByZWZSZWdyZXNzaW9uVHlwZTogJ3JlZ3Jlc3Npb25MaW5lYXInLFxuICAgIHJlZlJlZ3Jlc3Npb25Db2xvcjogJyMyMTUyY2EnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkJhc2ljPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxTaW5nbGVTZXJpZXNMaW5lQ2hhcnQgZGF0YT17ZGF0YS5kYXRhU2V0c1tpbmRleF0uZGF0YVNldH0gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnQmFzaWMnO1xuIl19