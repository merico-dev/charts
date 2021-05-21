"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _resizable = require("../../../base/resizable");

var _multipleSeriesLineChart = _interopRequireDefault(require("../multiple-series-line-chart"));

var _mock = _interopRequireDefault(require("./mocks/mock.json"));

var series = _mock["default"].dataSets.slice(0, 3);

var content = function Content() {
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: true
    },
    interpolationType: 'monotone',
    yAxis: {
      name: 'Dev Equivalent'
    },
    seriesDataKey: 'dataSet',
    seriesNameKey: 'developer$.name',
    seriesNameFormatter: function seriesNameFormatter(series) {
      return "".concat(series.developer.name, " <").concat(series.developer.primaryEmail, ">");
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD'
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Resizable"), /*#__PURE__*/_react["default"].createElement(_resizable.Resizable, null, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: series,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Resizable';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL3Jlc2l6YWJsZS50c3giXSwibmFtZXMiOlsic2VyaWVzIiwiZGF0YSIsImRhdGFTZXRzIiwic2xpY2UiLCJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJsZWdlbmQiLCJlbmFibGVkIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJ5QXhpcyIsIm5hbWUiLCJzZXJpZXNEYXRhS2V5Iiwic2VyaWVzTmFtZUtleSIsInNlcmllc05hbWVGb3JtYXR0ZXIiLCJkZXZlbG9wZXIiLCJwcmltYXJ5RW1haWwiLCJsYWJlbEtleSIsImxhYmVsRm9ybWF0dGVyIiwidHlwZSIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxpQkFBS0MsUUFBTCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQWY7O0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEMsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxXQUFXLEVBQUUsSUFEUTtBQUVyQkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLE9BQU8sRUFBRTtBQURILEtBRmE7QUFLckJDLElBQUFBLGlCQUFpQixFQUFFLFVBTEU7QUFNckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQU5jO0FBU3JCQyxJQUFBQSxhQUFhLEVBQUUsU0FUTTtBQVVyQkMsSUFBQUEsYUFBYSxFQUFFLGlCQVZNO0FBV3JCQyxJQUFBQSxtQkFBbUIsRUFBRSw2QkFBQ2YsTUFBRDtBQUFBLHVCQUFvQkEsTUFBTSxDQUFDZ0IsU0FBUCxDQUFpQkosSUFBckMsZUFBOENaLE1BQU0sQ0FBQ2dCLFNBQVAsQ0FBaUJDLFlBQS9EO0FBQUEsS0FYQTtBQVlyQkMsSUFBQUEsUUFBUSxFQUFFLE1BWlc7QUFhckJDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxJQUFJLEVBQUUsV0FEUTtBQUVkQyxNQUFBQSxNQUFNLEVBQUU7QUFGTTtBQWJLLEdBQXZCO0FBa0JBLHNCQUNFLDBEQUNFLHdEQURGLGVBRUUsZ0NBQUMsb0JBQUQscUJBQ0UsZ0NBQUMsbUNBQUQ7QUFBeUIsSUFBQSxNQUFNLEVBQUVyQixNQUFqQztBQUF5QyxJQUFBLGNBQWMsRUFBRU07QUFBekQsSUFERixDQUZGLENBREY7QUFRRCxDQTNCTTs7O0FBNEJBLElBQU1NLElBQUksR0FBRyxXQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlc2l6YWJsZSB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvcmVzaXphYmxlJztcbmltcG9ydCBNdWx0aXBsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2tzL21vY2suanNvbic7XG5cbmNvbnN0IHNlcmllcyA9IGRhdGEuZGF0YVNldHMuc2xpY2UoMCwgMyk7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgbGVnZW5kOiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgIH0sXG4gICAgaW50ZXJwb2xhdGlvblR5cGU6ICdtb25vdG9uZScsXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXYgRXF1aXZhbGVudCcsXG4gICAgfSxcbiAgICBzZXJpZXNEYXRhS2V5OiAnZGF0YVNldCcsXG4gICAgc2VyaWVzTmFtZUtleTogJ2RldmVsb3BlciQubmFtZScsXG4gICAgc2VyaWVzTmFtZUZvcm1hdHRlcjogKHNlcmllczogYW55KSA9PiBgJHtzZXJpZXMuZGV2ZWxvcGVyLm5hbWV9IDwke3Nlcmllcy5kZXZlbG9wZXIucHJpbWFyeUVtYWlsfT5gLFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlJlc2l6YWJsZTwvaDE+XG4gICAgICA8UmVzaXphYmxlPlxuICAgICAgICA8TXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnQgc2VyaWVzPXtzZXJpZXN9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvUmVzaXphYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ1Jlc2l6YWJsZSc7XG4iXX0=