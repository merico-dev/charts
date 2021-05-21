"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _rechartsBarChart = _interopRequireDefault(require("../recharts-bar-chart"));

var _testXAxisEnd = _interopRequireDefault(require("./mocks/test-x-axis-end.json"));

var content = function Content() {
  var configurations = {
    cartesianGrid: {
      horizontal: true,
      vertical: false
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD'
    },
    legend: {
      enabled: true,
      align: 'center',
      verticalAlign: 'bottom'
    },
    margin: {
      bottom: 100
    },
    subSeriesConfiguration: [{
      label: 'Value',
      dataKey: 'value'
    }],
    withTooltip: true,
    xAxis: {
      allowDuplicatedCategory: true
    },
    xTickCount: 4,
    yAxis: {
      name: 'Value',
      tickLine: false,
      axisLine: false
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Issues - 1"), /*#__PURE__*/_react["default"].createElement("h2", null, "Test XAxis End Tick Position"), /*#__PURE__*/_react["default"].createElement("p", null, "Notice 2020-08-01"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _testXAxisEnd["default"],
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Issues - 1';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2lzc3VlMS50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJjb25maWd1cmF0aW9ucyIsImNhcnRlc2lhbkdyaWQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJsYWJlbEtleSIsImxhYmVsRm9ybWF0dGVyIiwidHlwZSIsImZvcm1hdCIsImxlZ2VuZCIsImVuYWJsZWQiLCJhbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJib3R0b20iLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5Iiwid2l0aFRvb2x0aXAiLCJ4QXhpcyIsImFsbG93RHVwbGljYXRlZENhdGVnb3J5IiwieFRpY2tDb3VudCIsInlBeGlzIiwibmFtZSIsInRpY2tMaW5lIiwiYXhpc0xpbmUiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLGFBQWEsRUFBRTtBQUNiQyxNQUFBQSxVQUFVLEVBQUUsSUFEQztBQUViQyxNQUFBQSxRQUFRLEVBQUU7QUFGRyxLQURNO0FBS3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFMVztBQU1yQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxXQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNLEtBTks7QUFVckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUUsSUFESDtBQUVOQyxNQUFBQSxLQUFLLEVBQUUsUUFGRDtBQUdOQyxNQUFBQSxhQUFhLEVBQUU7QUFIVCxLQVZhO0FBZXJCQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsTUFBTSxFQUFFO0FBREYsS0FmYTtBQWtCckJDLElBQUFBLHNCQUFzQixFQUFFLENBQ3RCO0FBQ0VDLE1BQUFBLEtBQUssRUFBRSxPQURUO0FBRUVDLE1BQUFBLE9BQU8sRUFBRTtBQUZYLEtBRHNCLENBbEJIO0FBd0JyQkMsSUFBQUEsV0FBVyxFQUFFLElBeEJRO0FBeUJyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLHVCQUF1QixFQUFFO0FBRHBCLEtBekJjO0FBNEJyQkMsSUFBQUEsVUFBVSxFQUFFLENBNUJTO0FBNkJyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRSxPQUREO0FBRUxDLE1BQUFBLFFBQVEsRUFBRSxLQUZMO0FBR0xDLE1BQUFBLFFBQVEsRUFBRTtBQUhMO0FBN0JjLEdBQXZCO0FBbUNBLHNCQUNFLDBEQUNFLHlEQURGLGVBRUUsMkVBRkYsZUFHRSwrREFIRixlQUlFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFBQSxhQUFhLEVBQUU7QUFBMUM7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRUMsd0JBQXhCO0FBQThCLElBQUEsY0FBYyxFQUFFNUI7QUFBOUMsSUFERixDQUpGLENBREY7QUFVRCxDQTlDTTs7O0FBK0NBLElBQU1zQixJQUFJLEdBQUcsWUFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVjaGFydHNCYXJDaGFydCBmcm9tICcuLi9yZWNoYXJ0cy1iYXItY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2Nrcy90ZXN0LXgtYXhpcy1lbmQuanNvbic7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgY2FydGVzaWFuR3JpZDoge1xuICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyxcbiAgICB9LFxuICAgIG1hcmdpbjoge1xuICAgICAgYm90dG9tOiAxMDAsXG4gICAgfSxcbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVmFsdWUnLFxuICAgICAgICBkYXRhS2V5OiAndmFsdWUnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIHhBeGlzOiB7XG4gICAgICBhbGxvd0R1cGxpY2F0ZWRDYXRlZ29yeTogdHJ1ZSxcbiAgICB9LFxuICAgIHhUaWNrQ291bnQ6IDQsXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdWYWx1ZScsXG4gICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICBheGlzTGluZTogZmFsc2UsXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPklzc3VlcyAtIDE8L2gxPlxuICAgICAgPGgyPlRlc3QgWEF4aXMgRW5kIFRpY2sgUG9zaXRpb248L2gyPlxuICAgICAgPHA+Tm90aWNlIDIwMjAtMDgtMDE8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBwYWRkaW5nQm90dG9tOiAxMDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0lzc3VlcyAtIDEnO1xuIl19