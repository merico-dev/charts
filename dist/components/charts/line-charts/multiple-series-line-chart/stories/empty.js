"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _multipleSeriesLineChart = _interopRequireDefault(require("../multiple-series-line-chart"));

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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Empty"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: [],
    configurations: configurations,
    emptyContent: "Multiple Series Line Chart Empty"
  })));
};

exports.content = content;
var name = 'Empty';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL2VtcHR5LnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsInNlcmllc0RhdGFLZXkiLCJzZXJpZXNOYW1lS2V5Iiwic2VyaWVzTmFtZUZvcm1hdHRlciIsInNlcmllcyIsImRldmVsb3BlciIsInByaW1hcnlFbWFpbCIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxJQUZTO0FBR3JCQyxJQUFBQSxpQkFBaUIsRUFBRSxVQUhFO0FBSXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FKYztBQU9yQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLElBQUksRUFBRTtBQURELEtBUGM7QUFVckJFLElBQUFBLGFBQWEsRUFBRSxTQVZNO0FBV3JCQyxJQUFBQSxhQUFhLEVBQUUsaUJBWE07QUFZckJDLElBQUFBLG1CQUFtQixFQUFFLDZCQUFDQyxNQUFEO0FBQUEsdUJBQW9CQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJOLElBQXJDLGVBQThDSyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFlBQS9EO0FBQUEsS0FaQTtBQWFyQkMsSUFBQUEsUUFBUSxFQUFFLE1BYlc7QUFjckJDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxJQUFJLEVBQUUsV0FEUTtBQUVkQyxNQUFBQSxNQUFNLEVBQUU7QUFGTTtBQWRLLEdBQXZCO0FBbUJBLHNCQUNFLDBEQUNFLG9EQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyxtQ0FBRDtBQUNFLElBQUEsTUFBTSxFQUFFLEVBRFY7QUFFRSxJQUFBLGNBQWMsRUFBRWxCLGNBRmxCO0FBR0UsSUFBQSxZQUFZLEVBQUM7QUFIZixJQURGLENBRkYsQ0FERjtBQVlELENBaENNOzs7QUFpQ0EsSUFBTUssSUFBSSxHQUFHLE9BQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE11bHRpcGxlU2VyaWVzTGluZUNoYXJ0IGZyb20gJy4uL211bHRpcGxlLXNlcmllcy1saW5lLWNoYXJ0JztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiB0cnVlLFxuICAgIGludGVycG9sYXRpb25UeXBlOiAnbW9ub3RvbmUnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIHNlcmllc0RhdGFLZXk6ICdkYXRhU2V0JyxcbiAgICBzZXJpZXNOYW1lS2V5OiAnZGV2ZWxvcGVyJC5uYW1lJyxcbiAgICBzZXJpZXNOYW1lRm9ybWF0dGVyOiAoc2VyaWVzOiBhbnkpID0+IGAke3Nlcmllcy5kZXZlbG9wZXIubmFtZX0gPCR7c2VyaWVzLmRldmVsb3Blci5wcmltYXJ5RW1haWx9PmAsXG4gICAgbGFiZWxLZXk6ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ0RBVEVfVElNRScsXG4gICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+RW1wdHk8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPE11bHRpcGxlU2VyaWVzTGluZUNoYXJ0XG4gICAgICAgICAgc2VyaWVzPXtbXX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9XG4gICAgICAgICAgZW1wdHlDb250ZW50PVwiTXVsdGlwbGUgU2VyaWVzIExpbmUgQ2hhcnQgRW1wdHlcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnRW1wdHknO1xuIl19