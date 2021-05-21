"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _multipleSeriesLineChart = _interopRequireDefault(require("../multiple-series-line-chart"));

var _mock = _interopRequireDefault(require("./mocks/mock.json"));

var content = function Content() {
  var configurations = {
    withTooltip: true,
    withLegend: true,
    interpolationType: 'monotone',
    xAxis: {
      name: 'Date'
    },
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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Basic"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: _mock["default"].dataSets,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Basic';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL2Jhc2ljLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsInNlcmllc0RhdGFLZXkiLCJzZXJpZXNOYW1lS2V5Iiwic2VyaWVzTmFtZUZvcm1hdHRlciIsInNlcmllcyIsImRldmVsb3BlciIsInByaW1hcnlFbWFpbCIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0Iiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwiZGF0YVNldHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxJQUZTO0FBR3JCQyxJQUFBQSxpQkFBaUIsRUFBRSxVQUhFO0FBSXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FKYztBQU9yQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLElBQUksRUFBRTtBQURELEtBUGM7QUFVckJFLElBQUFBLGFBQWEsRUFBRSxTQVZNO0FBV3JCQyxJQUFBQSxhQUFhLEVBQUUsaUJBWE07QUFZckJDLElBQUFBLG1CQUFtQixFQUFFLDZCQUFDQyxNQUFEO0FBQUEsdUJBQW9CQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJOLElBQXJDLGVBQThDSyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFlBQS9EO0FBQUEsS0FaQTtBQWFyQkMsSUFBQUEsUUFBUSxFQUFFLE1BYlc7QUFjckJDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxJQUFJLEVBQUUsV0FEUTtBQUVkQyxNQUFBQSxNQUFNLEVBQUU7QUFGTTtBQWRLLEdBQXZCO0FBbUJBLHNCQUNFLDBEQUNFLG9EQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyxtQ0FBRDtBQUF5QixJQUFBLE1BQU0sRUFBRUMsaUJBQUtDLFFBQXRDO0FBQWdELElBQUEsY0FBYyxFQUFFcEI7QUFBaEUsSUFERixDQUZGLENBREY7QUFRRCxDQTVCTTs7O0FBNkJBLElBQU1LLElBQUksR0FBRyxPQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNdWx0aXBsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2tzL21vY2suanNvbic7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogdHJ1ZSxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ21vbm90b25lJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ0RhdGUnLFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXYgRXF1aXZhbGVudCcsXG4gICAgfSxcbiAgICBzZXJpZXNEYXRhS2V5OiAnZGF0YVNldCcsXG4gICAgc2VyaWVzTmFtZUtleTogJ2RldmVsb3BlciQubmFtZScsXG4gICAgc2VyaWVzTmFtZUZvcm1hdHRlcjogKHNlcmllczogYW55KSA9PiBgJHtzZXJpZXMuZGV2ZWxvcGVyLm5hbWV9IDwke3Nlcmllcy5kZXZlbG9wZXIucHJpbWFyeUVtYWlsfT5gLFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkJhc2ljPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxNdWx0aXBsZVNlcmllc0xpbmVDaGFydCBzZXJpZXM9e2RhdGEuZGF0YVNldHN9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0Jhc2ljJztcbiJdfQ==