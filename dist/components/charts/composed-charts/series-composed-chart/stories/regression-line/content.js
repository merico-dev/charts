"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Content;

var _react = _interopRequireDefault(require("react"));

var _seriesComposedChart = _interopRequireDefault(require("../../series-composed-chart"));

var _data = _interopRequireDefault(require("./data.json"));

function Content(_ref) {
  var regressionType1 = _ref.regressionType1,
      regressionType2 = _ref.regressionType2;
  var configurations = {
    withTooltip: true,
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'MM-DD'
    },
    xAxis: {
      tickLine: false,
      axisLine: false,
      name: '',
      scale: 'auto'
    },
    // Y Axis for line
    yAxis: {
      yAxisId: 'accumulatively',
      axisLine: false,
      tickLine: false,
      name: '',
      preserveTickZero: true
    },
    valueFormatter: function valueFormatter(v) {
      return v >= 0 ? v : '';
    },
    // hide negative value on Y Axis for line
    tooltipExcludedNames: ['Issue Range'],
    // match subSeries's label
    subSeriesConfiguration: [{
      key: 'total-issues',
      label: 'Total Issues',
      dataKey: 'line-1',
      chartType: 'line',
      interpolationType: 'monotone',
      regressions: [{
        key: 'total-regression-regressionLinear',
        type: regressionType1,
        labelKey: 'date',
        valueKey: 'line-1',
        stroke: 'blue',
        yAxisId: 'accumulatively'
      }],
      dot: false,
      yAxisId: 'accumulatively',
      stroke: '#aaa',
      fill: '#aaa'
    }, {
      label: 'Total Something Else',
      dataKey: 'line-2',
      chartType: 'line',
      interpolationType: 'monotone',
      dot: false,
      yAxisId: 'accumulatively',
      stroke: '#ccc',
      strokeDasharray: '4',
      fill: '#ccc',
      regressions: [{
        key: 'total-else-regression-regressionExp',
        type: regressionType2,
        labelKey: 'date',
        valueKey: 'line-2',
        stroke: 'rgba(232,71,28,1)',
        yAxisId: 'accumulatively'
      }]
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Regression Lines"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 400
    }
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: _data["default"],
    configurations: configurations
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvcmVncmVzc2lvbi1saW5lL2NvbnRlbnQudHN4Il0sIm5hbWVzIjpbIkNvbnRlbnQiLCJyZWdyZXNzaW9uVHlwZTEiLCJyZWdyZXNzaW9uVHlwZTIiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsInR5cGUiLCJmb3JtYXQiLCJ4QXhpcyIsInRpY2tMaW5lIiwiYXhpc0xpbmUiLCJuYW1lIiwic2NhbGUiLCJ5QXhpcyIsInlBeGlzSWQiLCJwcmVzZXJ2ZVRpY2taZXJvIiwidmFsdWVGb3JtYXR0ZXIiLCJ2IiwidG9vbHRpcEV4Y2x1ZGVkTmFtZXMiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwia2V5IiwibGFiZWwiLCJkYXRhS2V5IiwiY2hhcnRUeXBlIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJyZWdyZXNzaW9ucyIsInZhbHVlS2V5Iiwic3Ryb2tlIiwiZG90IiwiZmlsbCIsInN0cm9rZURhc2hhcnJheSIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRWUsU0FBU0EsT0FBVCxPQUE0RDtBQUFBLE1BQXpDQyxlQUF5QyxRQUF6Q0EsZUFBeUM7QUFBQSxNQUF4QkMsZUFBd0IsUUFBeEJBLGVBQXdCO0FBQ3pFLE1BQU1DLGNBQWlELEdBQUc7QUFDeERDLElBQUFBLFdBQVcsRUFBRSxJQUQyQztBQUV4REMsSUFBQUEsUUFBUSxFQUFFLE1BRjhDO0FBR3hEQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsSUFBSSxFQUFFLFdBRFE7QUFFZEMsTUFBQUEsTUFBTSxFQUFFO0FBRk0sS0FId0M7QUFPeERDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxRQUFRLEVBQUUsS0FETDtBQUVMQyxNQUFBQSxRQUFRLEVBQUUsS0FGTDtBQUdMQyxNQUFBQSxJQUFJLEVBQUUsRUFIRDtBQUlMQyxNQUFBQSxLQUFLLEVBQUU7QUFKRixLQVBpRDtBQWF4RDtBQUNBQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsT0FBTyxFQUFFLGdCQURKO0FBRUxKLE1BQUFBLFFBQVEsRUFBRSxLQUZMO0FBR0xELE1BQUFBLFFBQVEsRUFBRSxLQUhMO0FBSUxFLE1BQUFBLElBQUksRUFBRSxFQUpEO0FBS0xJLE1BQUFBLGdCQUFnQixFQUFFO0FBTGIsS0FkaUQ7QUFxQnhEQyxJQUFBQSxjQUFjLEVBQUUsd0JBQUNDLENBQUQ7QUFBQSxhQUFhQSxDQUFDLElBQUksQ0FBTCxHQUFTQSxDQUFULEdBQWEsRUFBMUI7QUFBQSxLQXJCd0M7QUFxQlQ7QUFDL0NDLElBQUFBLG9CQUFvQixFQUFFLENBQUMsYUFBRCxDQXRCa0M7QUFzQmpCO0FBRXZDQyxJQUFBQSxzQkFBc0IsRUFBRSxDQUN0QjtBQUNFQyxNQUFBQSxHQUFHLEVBQUUsY0FEUDtBQUVFQyxNQUFBQSxLQUFLLEVBQUUsY0FGVDtBQUdFQyxNQUFBQSxPQUFPLEVBQUUsUUFIWDtBQUlFQyxNQUFBQSxTQUFTLEVBQUUsTUFKYjtBQUtFQyxNQUFBQSxpQkFBaUIsRUFBRSxVQUxyQjtBQU1FQyxNQUFBQSxXQUFXLEVBQUUsQ0FDWDtBQUNFTCxRQUFBQSxHQUFHLEVBQUUsbUNBRFA7QUFFRWQsUUFBQUEsSUFBSSxFQUFFTixlQUZSO0FBR0VJLFFBQUFBLFFBQVEsRUFBRSxNQUhaO0FBSUVzQixRQUFBQSxRQUFRLEVBQUUsUUFKWjtBQUtFQyxRQUFBQSxNQUFNLEVBQUUsTUFMVjtBQU1FYixRQUFBQSxPQUFPLEVBQUU7QUFOWCxPQURXLENBTmY7QUFnQkVjLE1BQUFBLEdBQUcsRUFBRSxLQWhCUDtBQWlCRWQsTUFBQUEsT0FBTyxFQUFFLGdCQWpCWDtBQWtCRWEsTUFBQUEsTUFBTSxFQUFFLE1BbEJWO0FBbUJFRSxNQUFBQSxJQUFJLEVBQUU7QUFuQlIsS0FEc0IsRUFzQnRCO0FBQ0VSLE1BQUFBLEtBQUssRUFBRSxzQkFEVDtBQUVFQyxNQUFBQSxPQUFPLEVBQUUsUUFGWDtBQUdFQyxNQUFBQSxTQUFTLEVBQUUsTUFIYjtBQUlFQyxNQUFBQSxpQkFBaUIsRUFBRSxVQUpyQjtBQUtFSSxNQUFBQSxHQUFHLEVBQUUsS0FMUDtBQU1FZCxNQUFBQSxPQUFPLEVBQUUsZ0JBTlg7QUFPRWEsTUFBQUEsTUFBTSxFQUFFLE1BUFY7QUFRRUcsTUFBQUEsZUFBZSxFQUFFLEdBUm5CO0FBU0VELE1BQUFBLElBQUksRUFBRSxNQVRSO0FBVUVKLE1BQUFBLFdBQVcsRUFBRSxDQUNYO0FBQ0VMLFFBQUFBLEdBQUcsRUFBRSxxQ0FEUDtBQUVFZCxRQUFBQSxJQUFJLEVBQUVMLGVBRlI7QUFHRUcsUUFBQUEsUUFBUSxFQUFFLE1BSFo7QUFJRXNCLFFBQUFBLFFBQVEsRUFBRSxRQUpaO0FBS0VDLFFBQUFBLE1BQU0sRUFBRSxtQkFMVjtBQU1FYixRQUFBQSxPQUFPLEVBQUU7QUFOWCxPQURXO0FBVmYsS0F0QnNCO0FBeEJnQyxHQUExRDtBQXNFQSxzQkFDRSwwREFDRSwrREFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRWlCLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLCtCQUFEO0FBQXFCLElBQUEsSUFBSSxFQUFFQyxnQkFBM0I7QUFBaUMsSUFBQSxjQUFjLEVBQUUvQjtBQUFqRCxJQURGLENBRkYsQ0FERjtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZXJpZXNDb21wb3NlZENoYXJ0LCB7IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyB9IGZyb20gJy4uLy4uL3Nlcmllcy1jb21wb3NlZC1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnQoeyByZWdyZXNzaW9uVHlwZTEsIHJlZ3Jlc3Npb25UeXBlMiB9OiBhbnkpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnM6IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsYWJlbEtleTogJ2RhdGUnLFxuICAgIGxhYmVsRm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnREFURV9USU1FJyxcbiAgICAgIGZvcm1hdDogJ01NLUREJyxcbiAgICB9LFxuICAgIHhBeGlzOiB7XG4gICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICBheGlzTGluZTogZmFsc2UsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHNjYWxlOiAnYXV0bycsXG4gICAgfSxcbiAgICAvLyBZIEF4aXMgZm9yIGxpbmVcbiAgICB5QXhpczoge1xuICAgICAgeUF4aXNJZDogJ2FjY3VtdWxhdGl2ZWx5JyxcbiAgICAgIGF4aXNMaW5lOiBmYWxzZSxcbiAgICAgIHRpY2tMaW5lOiBmYWxzZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcHJlc2VydmVUaWNrWmVybzogdHJ1ZSxcbiAgICB9LFxuICAgIHZhbHVlRm9ybWF0dGVyOiAodjogYW55KSA9PiAodiA+PSAwID8gdiA6ICcnKSwgLy8gaGlkZSBuZWdhdGl2ZSB2YWx1ZSBvbiBZIEF4aXMgZm9yIGxpbmVcbiAgICB0b29sdGlwRXhjbHVkZWROYW1lczogWydJc3N1ZSBSYW5nZSddLCAvLyBtYXRjaCBzdWJTZXJpZXMncyBsYWJlbFxuXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICd0b3RhbC1pc3N1ZXMnLFxuICAgICAgICBsYWJlbDogJ1RvdGFsIElzc3VlcycsXG4gICAgICAgIGRhdGFLZXk6ICdsaW5lLTEnLFxuICAgICAgICBjaGFydFR5cGU6ICdsaW5lJyxcbiAgICAgICAgaW50ZXJwb2xhdGlvblR5cGU6ICdtb25vdG9uZScsXG4gICAgICAgIHJlZ3Jlc3Npb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAndG90YWwtcmVncmVzc2lvbi1yZWdyZXNzaW9uTGluZWFyJyxcbiAgICAgICAgICAgIHR5cGU6IHJlZ3Jlc3Npb25UeXBlMSxcbiAgICAgICAgICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgICAgICAgICB2YWx1ZUtleTogJ2xpbmUtMScsXG4gICAgICAgICAgICBzdHJva2U6ICdibHVlJyxcbiAgICAgICAgICAgIHlBeGlzSWQ6ICdhY2N1bXVsYXRpdmVseScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZG90OiBmYWxzZSxcbiAgICAgICAgeUF4aXNJZDogJ2FjY3VtdWxhdGl2ZWx5JyxcbiAgICAgICAgc3Ryb2tlOiAnI2FhYScsXG4gICAgICAgIGZpbGw6ICcjYWFhJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVG90YWwgU29tZXRoaW5nIEVsc2UnLFxuICAgICAgICBkYXRhS2V5OiAnbGluZS0yJyxcbiAgICAgICAgY2hhcnRUeXBlOiAnbGluZScsXG4gICAgICAgIGludGVycG9sYXRpb25UeXBlOiAnbW9ub3RvbmUnLFxuICAgICAgICBkb3Q6IGZhbHNlLFxuICAgICAgICB5QXhpc0lkOiAnYWNjdW11bGF0aXZlbHknLFxuICAgICAgICBzdHJva2U6ICcjY2NjJyxcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnNCcsXG4gICAgICAgIGZpbGw6ICcjY2NjJyxcbiAgICAgICAgcmVncmVzc2lvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICd0b3RhbC1lbHNlLXJlZ3Jlc3Npb24tcmVncmVzc2lvbkV4cCcsXG4gICAgICAgICAgICB0eXBlOiByZWdyZXNzaW9uVHlwZTIsXG4gICAgICAgICAgICBsYWJlbEtleTogJ2RhdGUnLFxuICAgICAgICAgICAgdmFsdWVLZXk6ICdsaW5lLTInLFxuICAgICAgICAgICAgc3Ryb2tlOiAncmdiYSgyMzIsNzEsMjgsMSknLFxuICAgICAgICAgICAgeUF4aXNJZDogJ2FjY3VtdWxhdGl2ZWx5JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5SZWdyZXNzaW9uIExpbmVzPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDYwMCwgaGVpZ2h0OiA0MDAgfX0+XG4gICAgICAgIDxTZXJpZXNDb21wb3NlZENoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19