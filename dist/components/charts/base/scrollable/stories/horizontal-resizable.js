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
    }]
  };
  var idealWidth = (0, _barCharts.calcIdealWidthForBarChart)(series.length);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Horizontal Scroll (Resizable)"), /*#__PURE__*/_react["default"].createElement(_resizable.Resizable, null, /*#__PURE__*/_react["default"].createElement(_2.Scrollable, {
    direction: "horizontal",
    width: idealWidth
  }, /*#__PURE__*/_react["default"].createElement(_barCharts.RechartsBarChart, {
    data: series,
    configurations: configurations
  }))));
};

exports.content = content;
var name = 'Horizontal(Resizable)';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL3Njcm9sbGFibGUvc3Rvcmllcy9ob3Jpem9udGFsLXJlc2l6YWJsZS50c3giXSwibmFtZXMiOlsic2VyaWVzIiwiQXJyYXkiLCJfIiwiaW5kZXgiLCJ4IiwieSIsIk1hdGgiLCJyYW5kb20iLCJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJsZWdlbmQiLCJlbmFibGVkIiwibGFiZWxLZXkiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5IiwiaWRlYWxXaWR0aCIsImxlbmd0aCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLHNCQUFXLElBQUlDLEtBQUosQ0FBVSxFQUFWLENBQVgsRUFBMEIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsU0FBZTtBQUN0REMsSUFBQUEsQ0FBQyxFQUFFRCxLQUFLLEdBQUcsQ0FEMkM7QUFFdERFLElBQUFBLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxNQUFMLEtBQWdCO0FBRm1DLEdBQWY7QUFBQSxDQUExQixDQUFmLEMsQ0FJQTs7QUFFTyxJQUFNQyxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsT0FBTyxFQUFFO0FBREgsS0FGYTtBQUtyQkMsSUFBQUEsUUFBUSxFQUFFLEdBTFc7QUFNckJDLElBQUFBLHNCQUFzQixFQUFFLENBQUM7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE9BQU8sRUFBRTtBQUEzQixLQUFEO0FBTkgsR0FBdkI7QUFRQSxNQUFNQyxVQUFVLEdBQUcsMENBQTBCbEIsTUFBTSxDQUFDbUIsTUFBakMsQ0FBbkI7QUFDQSxzQkFDRSwwREFDRSw0RUFERixlQUVFLGdDQUFDLG9CQUFELHFCQUNFLGdDQUFDLGFBQUQ7QUFBWSxJQUFBLFNBQVMsRUFBQyxZQUF0QjtBQUFtQyxJQUFBLEtBQUssRUFBRUQ7QUFBMUMsa0JBQ0UsZ0NBQUMsMkJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVsQixNQUF4QjtBQUFnQyxJQUFBLGNBQWMsRUFBRVU7QUFBaEQsSUFERixDQURGLENBRkYsQ0FERjtBQVVELENBcEJNOzs7QUFxQkEsSUFBTVUsSUFBSSxHQUFHLHVCQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlc2l6YWJsZSB9IGZyb20gJy4uLy4uL3Jlc2l6YWJsZSc7XG5pbXBvcnQgeyBTY3JvbGxhYmxlIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUmVjaGFydHNCYXJDaGFydCwgY2FsY0lkZWFsV2lkdGhGb3JCYXJDaGFydCB9IGZyb20gJy4uLy4uLy4uL2Jhci1jaGFydHMnO1xuXG5jb25zdCBzZXJpZXMgPSBBcnJheS5mcm9tKG5ldyBBcnJheSgzMCksIChfLCBpbmRleCkgPT4gKHtcbiAgeDogaW5kZXggKyAxLFxuICB5OiBNYXRoLnJhbmRvbSgpICogMTAwMDAsXG59KSk7XG4vLyBzZXJpZXMuc29ydCgoYSwgYikgPT4gYS55IC0gYi55KTtcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbGFiZWxLZXk6ICd4JyxcbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiBbeyBsYWJlbDogJ1ZhbHVlJywgZGF0YUtleTogJ3knIH1dLFxuICB9O1xuICBjb25zdCBpZGVhbFdpZHRoID0gY2FsY0lkZWFsV2lkdGhGb3JCYXJDaGFydChzZXJpZXMubGVuZ3RoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhvcml6b250YWwgU2Nyb2xsIChSZXNpemFibGUpPC9oMT5cbiAgICAgIDxSZXNpemFibGU+XG4gICAgICAgIDxTY3JvbGxhYmxlIGRpcmVjdGlvbj1cImhvcml6b250YWxcIiB3aWR0aD17aWRlYWxXaWR0aH0+XG4gICAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnQgZGF0YT17c2VyaWVzfSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICAgIDwvU2Nyb2xsYWJsZT5cbiAgICAgIDwvUmVzaXphYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0hvcml6b250YWwoUmVzaXphYmxlKSc7XG4iXX0=