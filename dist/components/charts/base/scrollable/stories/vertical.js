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
    }],
    transposed: true
  };
  var idealHeight = (0, _barCharts.calcIdealHeightForBarChart)(series.length);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Vertical Scroll"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 812,
      height: 380
    }
  }, /*#__PURE__*/_react["default"].createElement(_2.Scrollable, {
    direction: "vertical",
    height: idealHeight
  }, /*#__PURE__*/_react["default"].createElement(_barCharts.RechartsBarChart, {
    data: series,
    configurations: configurations
  }))));
};

exports.content = content;
var name = 'Vertical';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL3Njcm9sbGFibGUvc3Rvcmllcy92ZXJ0aWNhbC50c3giXSwibmFtZXMiOlsic2VyaWVzIiwiQXJyYXkiLCJfIiwiaW5kZXgiLCJ4IiwieSIsIk1hdGgiLCJyYW5kb20iLCJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJsZWdlbmQiLCJlbmFibGVkIiwibGFiZWxLZXkiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5IiwidHJhbnNwb3NlZCIsImlkZWFsSGVpZ2h0IiwibGVuZ3RoIiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxzQkFBVyxJQUFJQyxLQUFKLENBQVUsR0FBVixDQUFYLEVBQTJCLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLFNBQWU7QUFDdkRDLElBQUFBLENBQUMsRUFBRUQsS0FBSyxHQUFHLENBRDRDO0FBRXZERSxJQUFBQSxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQjtBQUZvQyxHQUFmO0FBQUEsQ0FBM0IsQ0FBZixDLENBSUE7O0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEMsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxXQUFXLEVBQUUsSUFEUTtBQUVyQkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLE9BQU8sRUFBRTtBQURILEtBRmE7QUFLckJDLElBQUFBLFFBQVEsRUFBRSxHQUxXO0FBTXJCQyxJQUFBQSxzQkFBc0IsRUFBRSxDQUFDO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxPQUFPLEVBQUU7QUFBM0IsS0FBRCxDQU5IO0FBT3JCQyxJQUFBQSxVQUFVLEVBQUU7QUFQUyxHQUF2QjtBQVNBLE1BQU1DLFdBQVcsR0FBRywyQ0FBMkJuQixNQUFNLENBQUNvQixNQUFsQyxDQUFwQjtBQUNBLHNCQUNFLDBEQUNFLDhEQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyxhQUFEO0FBQVksSUFBQSxTQUFTLEVBQUMsVUFBdEI7QUFBaUMsSUFBQSxNQUFNLEVBQUVIO0FBQXpDLGtCQUNFLGdDQUFDLDJCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFbkIsTUFBeEI7QUFBZ0MsSUFBQSxjQUFjLEVBQUVVO0FBQWhELElBREYsQ0FERixDQUZGLENBREY7QUFVRCxDQXJCTTs7O0FBc0JBLElBQU1hLElBQUksR0FBRyxVQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNjcm9sbGFibGUgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBSZWNoYXJ0c0JhckNoYXJ0LCBjYWxjSWRlYWxIZWlnaHRGb3JCYXJDaGFydCB9IGZyb20gJy4uLy4uLy4uL2Jhci1jaGFydHMnO1xuXG5jb25zdCBzZXJpZXMgPSBBcnJheS5mcm9tKG5ldyBBcnJheSgxMDApLCAoXywgaW5kZXgpID0+ICh7XG4gIHg6IGluZGV4ICsgMSxcbiAgeTogTWF0aC5yYW5kb20oKSAqIDEwMDAwLFxufSkpO1xuLy8gc2VyaWVzLnNvcnQoKGEsIGIpID0+IGEueSAtIGIueSk7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgbGVnZW5kOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAneCcsXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW3sgbGFiZWw6ICdWYWx1ZScsIGRhdGFLZXk6ICd5JyB9XSxcbiAgICB0cmFuc3Bvc2VkOiB0cnVlLFxuICB9O1xuICBjb25zdCBpZGVhbEhlaWdodCA9IGNhbGNJZGVhbEhlaWdodEZvckJhckNoYXJ0KHNlcmllcy5sZW5ndGgpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VmVydGljYWwgU2Nyb2xsPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgxMiwgaGVpZ2h0OiAzODAgfX0+XG4gICAgICAgIDxTY3JvbGxhYmxlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgaGVpZ2h0PXtpZGVhbEhlaWdodH0+XG4gICAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnQgZGF0YT17c2VyaWVzfSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICAgIDwvU2Nyb2xsYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ1ZlcnRpY2FsJztcbiJdfQ==