"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Content;

var _react = _interopRequireWildcard(require("react"));

var _helpers = require("./helpers");

var _seriesComposedChart = _interopRequireDefault(require("../../series-composed-chart"));

function Content(_ref) {
  var dataCount = _ref.dataCount,
      withOriginPoint = _ref.withOriginPoint;
  var series = (0, _react.useMemo)((0, _helpers.getSeries)({
    dataCount: dataCount,
    withOriginPoint: withOriginPoint
  }), [dataCount, withOriginPoint]);
  var configurations = {
    withTooltip: true,
    labelKey: 'x',
    xAxis: {
      tickLine: false,
      axisLine: false,
      name: ''
    },
    xTickCount: 4,
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
    tooltipExcludedNames: ['Issue Range', 'line-1-prediction'],
    // match subSeries's label
    subSeriesConfiguration: [{
      label: 'Total Issues',
      dataKey: 'line-1',
      chartType: 'line',
      interpolationType: 'monotone',
      dot: false,
      yAxisId: 'accumulatively',
      stroke: 'rgba(232,71,28,1)',
      fill: 'rgba(232,71,28,1)'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "XAxis Tick Count"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 400
    }
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: series,
    configurations: configurations
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMveC1heGlzLXRpY2stY291bnQvY29udGVudC50c3giXSwibmFtZXMiOlsiQ29udGVudCIsImRhdGFDb3VudCIsIndpdGhPcmlnaW5Qb2ludCIsInNlcmllcyIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJsYWJlbEtleSIsInhBeGlzIiwidGlja0xpbmUiLCJheGlzTGluZSIsIm5hbWUiLCJ4VGlja0NvdW50IiwieUF4aXMiLCJ5QXhpc0lkIiwicHJlc2VydmVUaWNrWmVybyIsInZhbHVlRm9ybWF0dGVyIiwidiIsInRvb2x0aXBFeGNsdWRlZE5hbWVzIiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsImNoYXJ0VHlwZSIsImludGVycG9sYXRpb25UeXBlIiwiZG90Iiwic3Ryb2tlIiwiZmlsbCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVlLFNBQVNBLE9BQVQsT0FBa0c7QUFBQSxNQUEvRUMsU0FBK0UsUUFBL0VBLFNBQStFO0FBQUEsTUFBcEVDLGVBQW9FLFFBQXBFQSxlQUFvRTtBQUMvRyxNQUFNQyxNQUFNLEdBQUcsb0JBQVEsd0JBQVU7QUFBRUYsSUFBQUEsU0FBUyxFQUFUQSxTQUFGO0FBQWFDLElBQUFBLGVBQWUsRUFBZkE7QUFBYixHQUFWLENBQVIsRUFBbUQsQ0FBQ0QsU0FBRCxFQUFZQyxlQUFaLENBQW5ELENBQWY7QUFFQSxNQUFNRSxjQUFpRCxHQUFHO0FBQ3hEQyxJQUFBQSxXQUFXLEVBQUUsSUFEMkM7QUFFeERDLElBQUFBLFFBQVEsRUFBRSxHQUY4QztBQUd4REMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFFBQVEsRUFBRSxLQURMO0FBRUxDLE1BQUFBLFFBQVEsRUFBRSxLQUZMO0FBR0xDLE1BQUFBLElBQUksRUFBRTtBQUhELEtBSGlEO0FBUXhEQyxJQUFBQSxVQUFVLEVBQUUsQ0FSNEM7QUFTeEQ7QUFDQUMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLE9BQU8sRUFBRSxnQkFESjtBQUVMSixNQUFBQSxRQUFRLEVBQUUsS0FGTDtBQUdMRCxNQUFBQSxRQUFRLEVBQUUsS0FITDtBQUlMRSxNQUFBQSxJQUFJLEVBQUUsRUFKRDtBQUtMSSxNQUFBQSxnQkFBZ0IsRUFBRTtBQUxiLEtBVmlEO0FBaUJ4REMsSUFBQUEsY0FBYyxFQUFFLHdCQUFDQyxDQUFEO0FBQUEsYUFBZ0JBLENBQUMsSUFBSSxDQUFMLEdBQVNBLENBQVQsR0FBYSxFQUE3QjtBQUFBLEtBakJ3QztBQWlCTjtBQUNsREMsSUFBQUEsb0JBQW9CLEVBQUUsQ0FBQyxhQUFELEVBQWdCLG1CQUFoQixDQWxCa0M7QUFrQkk7QUFFNURDLElBQUFBLHNCQUFzQixFQUFFLENBQ3RCO0FBQ0VDLE1BQUFBLEtBQUssRUFBRSxjQURUO0FBRUVDLE1BQUFBLE9BQU8sRUFBRSxRQUZYO0FBR0VDLE1BQUFBLFNBQVMsRUFBRSxNQUhiO0FBSUVDLE1BQUFBLGlCQUFpQixFQUFFLFVBSnJCO0FBS0VDLE1BQUFBLEdBQUcsRUFBRSxLQUxQO0FBTUVWLE1BQUFBLE9BQU8sRUFBRSxnQkFOWDtBQU9FVyxNQUFBQSxNQUFNLEVBQUUsbUJBUFY7QUFRRUMsTUFBQUEsSUFBSSxFQUFFO0FBUlIsS0FEc0I7QUFwQmdDLEdBQTFEO0FBa0NBLHNCQUNFLDBEQUNFLCtEQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQywrQkFBRDtBQUFxQixJQUFBLElBQUksRUFBRXhCLE1BQTNCO0FBQW1DLElBQUEsY0FBYyxFQUFFQztBQUFuRCxJQURGLENBRkYsQ0FERjtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRTZXJpZXMgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IFNlcmllc0NvbXBvc2VkQ2hhcnQsIHsgU2VyaWVzQ29tcG9zZWRDaGFydENvbmZpZ3VyYXRpb25zIH0gZnJvbSAnLi4vLi4vc2VyaWVzLWNvbXBvc2VkLWNoYXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudCh7IGRhdGFDb3VudCwgd2l0aE9yaWdpblBvaW50IH06IHsgZGF0YUNvdW50OiBudW1iZXI7IHdpdGhPcmlnaW5Qb2ludDogYm9vbGVhbiB9KSB7XG4gIGNvbnN0IHNlcmllcyA9IHVzZU1lbW8oZ2V0U2VyaWVzKHsgZGF0YUNvdW50LCB3aXRoT3JpZ2luUG9pbnQgfSksIFtkYXRhQ291bnQsIHdpdGhPcmlnaW5Qb2ludF0pO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zOiBTZXJpZXNDb21wb3NlZENoYXJ0Q29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgbGFiZWxLZXk6ICd4JyxcbiAgICB4QXhpczoge1xuICAgICAgdGlja0xpbmU6IGZhbHNlLFxuICAgICAgYXhpc0xpbmU6IGZhbHNlLFxuICAgICAgbmFtZTogJycsXG4gICAgfSxcbiAgICB4VGlja0NvdW50OiA0LFxuICAgIC8vIFkgQXhpcyBmb3IgbGluZVxuICAgIHlBeGlzOiB7XG4gICAgICB5QXhpc0lkOiAnYWNjdW11bGF0aXZlbHknLFxuICAgICAgYXhpc0xpbmU6IGZhbHNlLFxuICAgICAgdGlja0xpbmU6IGZhbHNlLFxuICAgICAgbmFtZTogJycsXG4gICAgICBwcmVzZXJ2ZVRpY2taZXJvOiB0cnVlLFxuICAgIH0sXG4gICAgdmFsdWVGb3JtYXR0ZXI6ICh2OiBudW1iZXIpID0+ICh2ID49IDAgPyB2IDogJycpLCAvLyBoaWRlIG5lZ2F0aXZlIHZhbHVlIG9uIFkgQXhpcyBmb3IgbGluZVxuICAgIHRvb2x0aXBFeGNsdWRlZE5hbWVzOiBbJ0lzc3VlIFJhbmdlJywgJ2xpbmUtMS1wcmVkaWN0aW9uJ10sIC8vIG1hdGNoIHN1YlNlcmllcydzIGxhYmVsXG5cbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVG90YWwgSXNzdWVzJyxcbiAgICAgICAgZGF0YUtleTogJ2xpbmUtMScsXG4gICAgICAgIGNoYXJ0VHlwZTogJ2xpbmUnLFxuICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ21vbm90b25lJyxcbiAgICAgICAgZG90OiBmYWxzZSxcbiAgICAgICAgeUF4aXNJZDogJ2FjY3VtdWxhdGl2ZWx5JyxcbiAgICAgICAgc3Ryb2tlOiAncmdiYSgyMzIsNzEsMjgsMSknLFxuICAgICAgICBmaWxsOiAncmdiYSgyMzIsNzEsMjgsMSknLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5YQXhpcyBUaWNrIENvdW50PC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDYwMCwgaGVpZ2h0OiA0MDAgfX0+XG4gICAgICAgIDxTZXJpZXNDb21wb3NlZENoYXJ0IGRhdGE9e3Nlcmllc30gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=