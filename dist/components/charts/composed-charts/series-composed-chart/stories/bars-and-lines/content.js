"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Content;

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _rechartsScale = require("recharts-scale");

var _helpers = require("./helpers");

var _seriesComposedChart = _interopRequireDefault(require("../../series-composed-chart"));

function Content(_ref) {
  var _ref$extendDays = _ref.extendDays,
      extendDays = _ref$extendDays === void 0 ? 0 : _ref$extendDays,
      dataCount = _ref.dataCount;
  var series = (0, _react.useMemo)((0, _helpers.calcUpwardsSeriesData)({
    dataCount: dataCount,
    extendDays: extendDays
  }), [dataCount]);
  var lineMax = (0, _react.useMemo)(function () {
    return (0, _lodash.maxBy)(series, function (item) {
      return item['line-1'];
    })['line-1'];
  }, [series]);
  var barMax = (0, _react.useMemo)(function () {
    var positiveMax = (0, _lodash.maxBy)(series, function (item) {
      return item['bar-positive'];
    })['bar-positive'];
    var negativeMax = Math.abs((0, _lodash.minBy)(series, function (item) {
      return item['bar-negative'];
    })['bar-negative']);
    return Math.max(positiveMax, negativeMax);
  }, [series]); // Reason:
  // 1. align zero level of two Y axises
  // 2. have nice-rounded ticks

  var lineTicks = (0, _rechartsScale.getNiceTickValues)([lineMax * -0.2, lineMax]);
  var barTicks = (0, _rechartsScale.getNiceTickValues)([barMax * -1, barMax * 4]);
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
      padding: {
        left: 10
      } // don't miss this

    },
    // Y Axis for line (left)
    yAxis: {
      yAxisId: 'accumulatively',
      axisLine: false,
      tickLine: false,
      ticks: lineTicks,
      name: '',
      preserveTickZero: true,
      formatter: function formatter(v) {
        return v >= 0 ? v : '';
      } // hide negative value on Y Axis for line

    },
    valueFormatter: Math.abs,
    // Y Axis for bars (right)
    additionalYAxis: {
      yAxisId: 'daily',
      tickLine: false,
      axisLine: false,
      name: '',
      formatter: Math.abs,
      ticks: barTicks,
      orientation: 'right',
      tickLabelPosition: 'insideRight',
      textAnchor: 'start',
      preserveTickZero: true
    },
    // let negative&positive bars stack on each other
    stackOffset: 'sign',
    subSeriesConfiguration: [{
      label: 'New Issues',
      dataKey: 'bar-positive',
      chartType: 'bar',
      stackId: 'issues',
      yAxisId: 'daily',
      fill: 'rgba(255,171,133,1)'
    }, {
      label: 'Solved Issues',
      dataKey: 'bar-negative',
      chartType: 'bar',
      stackId: 'issues',
      yAxisId: 'daily',
      fill: 'rgba(162,197,246,1)'
    }, {
      label: 'Total Issues',
      dataKey: 'line-1',
      chartType: 'line',
      interpolationType: 'monotone',
      dot: false,
      yAxisId: 'accumulatively',
      stroke: 'rgba(232,71,28,1)',
      fill: 'rgba(232,71,28,1)'
    }, {
      label: 'Total Something Else',
      dataKey: 'line-2',
      chartType: 'line',
      interpolationType: 'monotone',
      dot: false,
      yAxisId: 'accumulatively',
      stroke: '#F0876A',
      strokeDasharray: '4',
      fill: '#F0876A'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Bars And Lines"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 400
    }
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: series,
    configurations: configurations
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvYmFycy1hbmQtbGluZXMvY29udGVudC50c3giXSwibmFtZXMiOlsiQ29udGVudCIsImV4dGVuZERheXMiLCJkYXRhQ291bnQiLCJzZXJpZXMiLCJsaW5lTWF4IiwiaXRlbSIsImJhck1heCIsInBvc2l0aXZlTWF4IiwibmVnYXRpdmVNYXgiLCJNYXRoIiwiYWJzIiwibWF4IiwibGluZVRpY2tzIiwiYmFyVGlja3MiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsInR5cGUiLCJmb3JtYXQiLCJ4QXhpcyIsInRpY2tMaW5lIiwiYXhpc0xpbmUiLCJuYW1lIiwicGFkZGluZyIsImxlZnQiLCJ5QXhpcyIsInlBeGlzSWQiLCJ0aWNrcyIsInByZXNlcnZlVGlja1plcm8iLCJmb3JtYXR0ZXIiLCJ2IiwidmFsdWVGb3JtYXR0ZXIiLCJhZGRpdGlvbmFsWUF4aXMiLCJvcmllbnRhdGlvbiIsInRpY2tMYWJlbFBvc2l0aW9uIiwidGV4dEFuY2hvciIsInN0YWNrT2Zmc2V0Iiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsImNoYXJ0VHlwZSIsInN0YWNrSWQiLCJmaWxsIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJkb3QiLCJzdHJva2UiLCJzdHJva2VEYXNoYXJyYXkiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFZSxTQUFTQSxPQUFULE9BQXFEO0FBQUEsNkJBQWxDQyxVQUFrQztBQUFBLE1BQWxDQSxVQUFrQyxnQ0FBckIsQ0FBcUI7QUFBQSxNQUFsQkMsU0FBa0IsUUFBbEJBLFNBQWtCO0FBQ2xFLE1BQU1DLE1BQU0sR0FB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UFY7QUFRRUMsTUFBQUEsZUFBZSxFQUFFLEdBUm5CO0FBU0VKLE1BQUFBLElBQUksRUFBRTtBQVRSLEtBM0JzQjtBQTFDZ0MsR0FBMUQ7QUFtRkEsc0JBQ0UsMERBQ0UsNkRBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVLLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLCtCQUFEO0FBQXFCLElBQUEsSUFBSSxFQUFFOUMsTUFBM0I7QUFBbUMsSUFBQSxjQUFjLEVBQUVXO0FBQW5ELElBREYsQ0FGRixDQURGO0FBUUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1heEJ5LCBtaW5CeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBnZXROaWNlVGlja1ZhbHVlcyB9IGZyb20gJ3JlY2hhcnRzLXNjYWxlJztcbmltcG9ydCB7IGNhbGNVcHdhcmRzU2VyaWVzRGF0YSB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgU2VyaWVzQ29tcG9zZWRDaGFydCwgeyBTZXJpZXNDb21wb3NlZENoYXJ0Q29uZmlndXJhdGlvbnMgfSBmcm9tICcuLi8uLi9zZXJpZXMtY29tcG9zZWQtY2hhcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHsgZXh0ZW5kRGF5cyA9IDAsIGRhdGFDb3VudCB9OiBhbnkpIHtcbiAgY29uc3Qgc2VyaWVzID0gdXNlTWVtbyhjYWxjVXB3YXJkc1Nlcmllc0RhdGEoeyBkYXRhQ291bnQsIGV4dGVuZERheXMgfSksIFtkYXRhQ291bnRdKTtcblxuICBjb25zdCBsaW5lTWF4ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIG1heEJ5KHNlcmllcywgKGl0ZW0pID0+IGl0ZW1bJ2xpbmUtMSddKVsnbGluZS0xJ107XG4gIH0sIFtzZXJpZXNdKTtcblxuICBjb25zdCBiYXJNYXggPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBwb3NpdGl2ZU1heCA9IG1heEJ5KHNlcmllcywgKGl0ZW0pID0+IGl0ZW1bJ2Jhci1wb3NpdGl2ZSddKVsnYmFyLXBvc2l0aXZlJ107XG4gICAgY29uc3QgbmVnYXRpdmVNYXggPSBNYXRoLmFicyhtaW5CeShzZXJpZXMsIChpdGVtKSA9PiBpdGVtWydiYXItbmVnYXRpdmUnXSlbJ2Jhci1uZWdhdGl2ZSddKTtcbiAgICByZXR1cm4gTWF0aC5tYXgocG9zaXRpdmVNYXgsIG5lZ2F0aXZlTWF4KTtcbiAgfSwgW3Nlcmllc10pO1xuXG4gIC8vIFJlYXNvbjpcbiAgLy8gMS4gYWxpZ24gemVybyBsZXZlbCBvZiB0d28gWSBheGlzZXNcbiAgLy8gMi4gaGF2ZSBuaWNlLXJvdW5kZWQgdGlja3NcbiAgY29uc3QgbGluZVRpY2tzID0gZ2V0TmljZVRpY2tWYWx1ZXMoW2xpbmVNYXggKiAtMC4yLCBsaW5lTWF4XSk7XG4gIGNvbnN0IGJhclRpY2tzID0gZ2V0TmljZVRpY2tWYWx1ZXMoW2Jhck1heCAqIC0xLCBiYXJNYXggKiA0XSk7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnM6IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsYWJlbEtleTogJ2RhdGUnLFxuICAgIGxhYmVsRm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnREFURV9USU1FJyxcbiAgICAgIGZvcm1hdDogJ01NLUREJyxcbiAgICB9LFxuICAgIHhBeGlzOiB7XG4gICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICBheGlzTGluZTogZmFsc2UsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHBhZGRpbmc6IHsgbGVmdDogMTAgfSwgLy8gZG9uJ3QgbWlzcyB0aGlzXG4gICAgfSxcbiAgICAvLyBZIEF4aXMgZm9yIGxpbmUgKGxlZnQpXG4gICAgeUF4aXM6IHtcbiAgICAgIHlBeGlzSWQ6ICdhY2N1bXVsYXRpdmVseScsXG4gICAgICBheGlzTGluZTogZmFsc2UsXG4gICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICB0aWNrczogbGluZVRpY2tzLFxuICAgICAgbmFtZTogJycsXG4gICAgICBwcmVzZXJ2ZVRpY2taZXJvOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiAodjogYW55KSA9PiAodiA+PSAwID8gdiA6ICcnKSwgLy8gaGlkZSBuZWdhdGl2ZSB2YWx1ZSBvbiBZIEF4aXMgZm9yIGxpbmVcbiAgICB9LFxuICAgIHZhbHVlRm9ybWF0dGVyOiBNYXRoLmFicyxcblxuICAgIC8vIFkgQXhpcyBmb3IgYmFycyAocmlnaHQpXG4gICAgYWRkaXRpb25hbFlBeGlzOiB7XG4gICAgICB5QXhpc0lkOiAnZGFpbHknLFxuICAgICAgdGlja0xpbmU6IGZhbHNlLFxuICAgICAgYXhpc0xpbmU6IGZhbHNlLFxuICAgICAgbmFtZTogJycsXG4gICAgICBmb3JtYXR0ZXI6IE1hdGguYWJzLFxuICAgICAgdGlja3M6IGJhclRpY2tzLFxuICAgICAgb3JpZW50YXRpb246ICdyaWdodCcsXG4gICAgICB0aWNrTGFiZWxQb3NpdGlvbjogJ2luc2lkZVJpZ2h0JyxcbiAgICAgIHRleHRBbmNob3I6ICdzdGFydCcsXG4gICAgICBwcmVzZXJ2ZVRpY2taZXJvOiB0cnVlLFxuICAgIH0sXG5cbiAgICAvLyBsZXQgbmVnYXRpdmUmcG9zaXRpdmUgYmFycyBzdGFjayBvbiBlYWNoIG90aGVyXG4gICAgc3RhY2tPZmZzZXQ6ICdzaWduJyxcblxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdOZXcgSXNzdWVzJyxcbiAgICAgICAgZGF0YUtleTogJ2Jhci1wb3NpdGl2ZScsXG4gICAgICAgIGNoYXJ0VHlwZTogJ2JhcicsXG4gICAgICAgIHN0YWNrSWQ6ICdpc3N1ZXMnLFxuICAgICAgICB5QXhpc0lkOiAnZGFpbHknLFxuICAgICAgICBmaWxsOiAncmdiYSgyNTUsMTcxLDEzMywxKScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1NvbHZlZCBJc3N1ZXMnLFxuICAgICAgICBkYXRhS2V5OiAnYmFyLW5lZ2F0aXZlJyxcbiAgICAgICAgY2hhcnRUeXBlOiAnYmFyJyxcbiAgICAgICAgc3RhY2tJZDogJ2lzc3VlcycsXG4gICAgICAgIHlBeGlzSWQ6ICdkYWlseScsXG4gICAgICAgIGZpbGw6ICdyZ2JhKDE2MiwxOTcsMjQ2LDEpJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVG90YWwgSXNzdWVzJyxcbiAgICAgICAgZGF0YUtleTogJ2xpbmUtMScsXG4gICAgICAgIGNoYXJ0VHlwZTogJ2xpbmUnLFxuICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ21vbm90b25lJyxcbiAgICAgICAgZG90OiBmYWxzZSxcbiAgICAgICAgeUF4aXNJZDogJ2FjY3VtdWxhdGl2ZWx5JyxcbiAgICAgICAgc3Ryb2tlOiAncmdiYSgyMzIsNzEsMjgsMSknLFxuICAgICAgICBmaWxsOiAncmdiYSgyMzIsNzEsMjgsMSknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUb3RhbCBTb21ldGhpbmcgRWxzZScsXG4gICAgICAgIGRhdGFLZXk6ICdsaW5lLTInLFxuICAgICAgICBjaGFydFR5cGU6ICdsaW5lJyxcbiAgICAgICAgaW50ZXJwb2xhdGlvblR5cGU6ICdtb25vdG9uZScsXG4gICAgICAgIGRvdDogZmFsc2UsXG4gICAgICAgIHlBeGlzSWQ6ICdhY2N1bXVsYXRpdmVseScsXG4gICAgICAgIHN0cm9rZTogJyNGMDg3NkEnLFxuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICc0JyxcbiAgICAgICAgZmlsbDogJyNGMDg3NkEnLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5CYXJzIEFuZCBMaW5lczwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA2MDAsIGhlaWdodDogNDAwIH19PlxuICAgICAgICA8U2VyaWVzQ29tcG9zZWRDaGFydCBkYXRhPXtzZXJpZXN9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19