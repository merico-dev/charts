"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

var _react = _interopRequireDefault(require("react"));

var _resizable = require("../../resizable");

var _2 = require("..");

var _barCharts = require("../../../bar-charts");

var series = (0, _from["default"])(new Array(30), function (_, index) {
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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Vertical Scroll (Resizable)"), /*#__PURE__*/_react["default"].createElement(_resizable.Resizable, null, /*#__PURE__*/_react["default"].createElement(_2.Scrollable, {
    direction: "vertical",
    height: idealHeight
  }, /*#__PURE__*/_react["default"].createElement(_barCharts.RechartsBarChart, {
    data: series,
    configurations: configurations
  }))));
};

exports.content = content;
var name = 'Vertical(Resizable)';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL3Njcm9sbGFibGUvc3Rvcmllcy92ZXJ0aWNhbC1yZXNpemFibGUudHN4Il0sIm5hbWVzIjpbInNlcmllcyIsIkFycmF5IiwiXyIsImluZGV4IiwieCIsInkiLCJNYXRoIiwicmFuZG9tIiwiY29udGVudCIsIkNvbnRlbnQiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwibGVnZW5kIiwiZW5hYmxlZCIsImxhYmVsS2V5Iiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsInRyYW5zcG9zZWQiLCJpZGVhbEhlaWdodCIsImxlbmd0aCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLHNCQUFXLElBQUlDLEtBQUosQ0FBVSxFQUFWLENBQVgsRUFBMEIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsU0FBZTtBQUN0REMsSUFBQUEsQ0FBQyxFQUFFRCxLQUFLLEdBQUcsQ0FEMkM7QUFFdERFLElBQUFBLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxNQUFMLEtBQWdCO0FBRm1DLEdBQWY7QUFBQSxDQUExQixDQUFmLEMsQ0FJQTs7QUFFTyxJQUFNQyxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsT0FBTyxFQUFFO0FBREgsS0FGYTtBQUtyQkMsSUFBQUEsUUFBUSxFQUFFLEdBTFc7QUFNckJDLElBQUFBLHNCQUFzQixFQUFFLENBQUM7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE9BQU8sRUFBRTtBQUEzQixLQUFELENBTkg7QUFPckJDLElBQUFBLFVBQVUsRUFBRTtBQVBTLEdBQXZCO0FBU0EsTUFBTUMsV0FBVyxHQUFHLDJDQUEyQm5CLE1BQU0sQ0FBQ29CLE1BQWxDLENBQXBCO0FBQ0Esc0JBQ0UsMERBQ0UsMEVBREYsZUFFRSxnQ0FBQyxvQkFBRCxxQkFDRSxnQ0FBQyxhQUFEO0FBQVksSUFBQSxTQUFTLEVBQUMsVUFBdEI7QUFBaUMsSUFBQSxNQUFNLEVBQUVEO0FBQXpDLGtCQUNFLGdDQUFDLDJCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFbkIsTUFBeEI7QUFBZ0MsSUFBQSxjQUFjLEVBQUVVO0FBQWhELElBREYsQ0FERixDQUZGLENBREY7QUFVRCxDQXJCTTs7O0FBc0JBLElBQU1XLElBQUksR0FBRyxxQkFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZXNpemFibGUgfSBmcm9tICcuLi8uLi9yZXNpemFibGUnO1xuaW1wb3J0IHsgU2Nyb2xsYWJsZSB9IGZyb20gJy4uJztcbmltcG9ydCB7IFJlY2hhcnRzQmFyQ2hhcnQsIGNhbGNJZGVhbEhlaWdodEZvckJhckNoYXJ0IH0gZnJvbSAnLi4vLi4vLi4vYmFyLWNoYXJ0cyc7XG5cbmNvbnN0IHNlcmllcyA9IEFycmF5LmZyb20obmV3IEFycmF5KDMwKSwgKF8sIGluZGV4KSA9PiAoe1xuICB4OiBpbmRleCArIDEsXG4gIHk6IE1hdGgucmFuZG9tKCkgKiAxMDAwMCxcbn0pKTtcbi8vIHNlcmllcy5zb3J0KChhLCBiKSA9PiBhLnkgLSBiLnkpO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIGxlZ2VuZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBsYWJlbEtleTogJ3gnLFxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFt7IGxhYmVsOiAnVmFsdWUnLCBkYXRhS2V5OiAneScgfV0sXG4gICAgdHJhbnNwb3NlZDogdHJ1ZSxcbiAgfTtcbiAgY29uc3QgaWRlYWxIZWlnaHQgPSBjYWxjSWRlYWxIZWlnaHRGb3JCYXJDaGFydChzZXJpZXMubGVuZ3RoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlZlcnRpY2FsIFNjcm9sbCAoUmVzaXphYmxlKTwvaDE+XG4gICAgICA8UmVzaXphYmxlPlxuICAgICAgICA8U2Nyb2xsYWJsZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIGhlaWdodD17aWRlYWxIZWlnaHR9PlxuICAgICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0IGRhdGE9e3Nlcmllc30gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgICA8L1Njcm9sbGFibGU+XG4gICAgICA8L1Jlc2l6YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdWZXJ0aWNhbChSZXNpemFibGUpJztcbiJdfQ==