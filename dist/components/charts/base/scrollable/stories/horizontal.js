"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

var _react = _interopRequireDefault(require("react"));

var _2 = require("..");

var _barCharts = require("../../../bar-charts");

var series = (0, _from["default"])(new Array(100), function (_, index) {
  return {
    x: index + 1,
    y: Math.random() * 10000
  };
}); // series.sort((a, b) => a.y - b.y);

var content = function Content() {
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: false
    },
    labelKey: 'x',
    subSeriesConfiguration: [{
      label: 'Value',
      dataKey: 'y'
    }]
  };
  var idealWidth = (0, _barCharts.calcIdealWidthForBarChart)(series.length);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Horizontal Scroll"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 812,
      height: 380
    }
  }, /*#__PURE__*/_react["default"].createElement(_2.Scrollable, {
    direction: "horizontal",
    width: idealWidth
  }, /*#__PURE__*/_react["default"].createElement(_barCharts.RechartsBarChart, {
    data: series,
    configurations: configurations
  }))));
};

exports.content = content;
var name = 'Horizontal';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL3Njcm9sbGFibGUvc3Rvcmllcy9ob3Jpem9udGFsLnRzeCJdLCJuYW1lcyI6WyJzZXJpZXMiLCJBcnJheSIsIl8iLCJpbmRleCIsIngiLCJ5IiwiTWF0aCIsInJhbmRvbSIsImNvbnRlbnQiLCJDb250ZW50IiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsImxlZ2VuZCIsImVuYWJsZWQiLCJsYWJlbEtleSIsInN1YlNlcmllc0NvbmZpZ3VyYXRpb24iLCJsYWJlbCIsImRhdGFLZXkiLCJpZGVhbFdpZHRoIiwibGVuZ3RoIiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxzQkFBVyxJQUFJQyxLQUFKLENBQVUsR0FBVixDQUFYLEVBQTJCLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLFNBQWU7QUFDdkRDLElBQUFBLENBQUMsRUFBRUQsS0FBSyxHQUFHLENBRDRDO0FBRXZERSxJQUFBQSxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQjtBQUZvQyxHQUFmO0FBQUEsQ0FBM0IsQ0FBZixDLENBSUE7O0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEMsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxXQUFXLEVBQUUsSUFEUTtBQUVyQkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLE9BQU8sRUFBRTtBQURILEtBRmE7QUFLckJDLElBQUFBLFFBQVEsRUFBRSxHQUxXO0FBTXJCQyxJQUFBQSxzQkFBc0IsRUFBRSxDQUFDO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxPQUFPLEVBQUU7QUFBM0IsS0FBRDtBQU5ILEdBQXZCO0FBUUEsTUFBTUMsVUFBVSxHQUFHLDBDQUEwQmxCLE1BQU0sQ0FBQ21CLE1BQWpDLENBQW5CO0FBQ0Esc0JBQ0UsMERBQ0UsZ0VBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLGFBQUQ7QUFBWSxJQUFBLFNBQVMsRUFBQyxZQUF0QjtBQUFtQyxJQUFBLEtBQUssRUFBRUg7QUFBMUMsa0JBQ0UsZ0NBQUMsMkJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVsQixNQUF4QjtBQUFnQyxJQUFBLGNBQWMsRUFBRVU7QUFBaEQsSUFERixDQURGLENBRkYsQ0FERjtBQVVELENBcEJNOzs7QUFxQkEsSUFBTVksSUFBSSxHQUFHLFlBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2Nyb2xsYWJsZSB9IGZyb20gJy4uJztcbmltcG9ydCB7IFJlY2hhcnRzQmFyQ2hhcnQsIGNhbGNJZGVhbFdpZHRoRm9yQmFyQ2hhcnQgfSBmcm9tICcuLi8uLi8uLi9iYXItY2hhcnRzJztcblxuY29uc3Qgc2VyaWVzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkoMTAwKSwgKF8sIGluZGV4KSA9PiAoe1xuICB4OiBpbmRleCArIDEsXG4gIHk6IE1hdGgucmFuZG9tKCkgKiAxMDAwMCxcbn0pKTtcbi8vIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnkgLSBiLnkpO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIGxlZ2VuZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBsYWJlbEtleTogJ3gnLFxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFt7IGxhYmVsOiAnVmFsdWUnLCBkYXRhS2V5OiAneScgfV0sXG4gIH07XG4gIGNvbnN0IGlkZWFsV2lkdGggPSBjYWxjSWRlYWxXaWR0aEZvckJhckNoYXJ0KHNlcmllcy5sZW5ndGgpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SG9yaXpvbnRhbCBTY3JvbGw8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODEyLCBoZWlnaHQ6IDM4MCB9fT5cbiAgICAgICAgPFNjcm9sbGFibGUgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIHdpZHRoPXtpZGVhbFdpZHRofT5cbiAgICAgICAgICA8UmVjaGFydHNCYXJDaGFydCBkYXRhPXtzZXJpZXN9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgICAgPC9TY3JvbGxhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnSG9yaXpvbnRhbCc7XG4iXX0=