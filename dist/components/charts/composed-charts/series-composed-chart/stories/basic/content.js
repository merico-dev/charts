"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = content;

var _react = _interopRequireDefault(require("react"));

var _seriesComposedChart = _interopRequireDefault(require("../../series-composed-chart"));

var _data = _interopRequireDefault(require("./data.json"));

var _styled = require("./styled");

function content() {
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: false
    },
    labelKey: 'name',
    xAxis: {
      name: 'Page',
      labelClassName: 'xAxisLabel'
    },
    yAxis: {
      name: 'Mock Value',
      labelClassName: 'yAxisLabel'
    },
    subSeriesConfiguration: [{
      label: 'UV',
      dataKey: 'uv'
    }, {
      label: 'Male',
      dataKey: 'male',
      stackId: 'gender'
    }, // HERE, use stackId
    {
      label: 'Female',
      dataKey: 'female',
      stackId: 'gender'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement(_styled.Container, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Basic"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: _data["default"],
    configurations: configurations
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvYmFzaWMvY29udGVudC50c3giXSwibmFtZXMiOlsiY29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJsZWdlbmQiLCJlbmFibGVkIiwibGFiZWxLZXkiLCJ4QXhpcyIsIm5hbWUiLCJsYWJlbENsYXNzTmFtZSIsInlBeGlzIiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsInN0YWNrSWQiLCJ3aWR0aCIsImhlaWdodCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFDaEMsTUFBTUMsY0FBaUQsR0FBRztBQUN4REMsSUFBQUEsV0FBVyxFQUFFLElBRDJDO0FBRXhEQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsT0FBTyxFQUFFO0FBREgsS0FGZ0Q7QUFLeERDLElBQUFBLFFBQVEsRUFBRSxNQUw4QztBQU14REMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLE1BQUFBLGNBQWMsRUFBRTtBQUZYLEtBTmlEO0FBVXhEQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEYsTUFBQUEsSUFBSSxFQUFFLFlBREQ7QUFFTEMsTUFBQUEsY0FBYyxFQUFFO0FBRlgsS0FWaUQ7QUFjeERFLElBQUFBLHNCQUFzQixFQUFFLENBQ3RCO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLE9BQU8sRUFBRTtBQUF4QixLQURzQixFQUV0QjtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsT0FBTyxFQUFFLE1BQTFCO0FBQWtDQyxNQUFBQSxPQUFPLEVBQUU7QUFBM0MsS0FGc0IsRUFFaUM7QUFDdkQ7QUFBRUYsTUFBQUEsS0FBSyxFQUFFLFFBQVQ7QUFBbUJDLE1BQUFBLE9BQU8sRUFBRSxRQUE1QjtBQUFzQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQS9DLEtBSHNCO0FBZGdDLEdBQTFEO0FBb0JBLHNCQUNFLGdDQUFDLGlCQUFELHFCQUNFLG9EQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQywrQkFBRDtBQUFxQixJQUFBLElBQUksRUFBRUMsZ0JBQTNCO0FBQWlDLElBQUEsY0FBYyxFQUFFZjtBQUFqRCxJQURGLENBRkYsQ0FERjtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZXJpZXNDb21wb3NlZENoYXJ0LCB7IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyB9IGZyb20gJy4uLy4uL3Nlcmllcy1jb21wb3NlZC1jaGFydCc7XG5cbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS5qc29uJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGVudCgpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnM6IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbGFiZWxLZXk6ICduYW1lJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ1BhZ2UnLFxuICAgICAgbGFiZWxDbGFzc05hbWU6ICd4QXhpc0xhYmVsJyxcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICBuYW1lOiAnTW9jayBWYWx1ZScsXG4gICAgICBsYWJlbENsYXNzTmFtZTogJ3lBeGlzTGFiZWwnLFxuICAgIH0sXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW1xuICAgICAgeyBsYWJlbDogJ1VWJywgZGF0YUtleTogJ3V2JyB9LFxuICAgICAgeyBsYWJlbDogJ01hbGUnLCBkYXRhS2V5OiAnbWFsZScsIHN0YWNrSWQ6ICdnZW5kZXInIH0sIC8vIEhFUkUsIHVzZSBzdGFja0lkXG4gICAgICB7IGxhYmVsOiAnRmVtYWxlJywgZGF0YUtleTogJ2ZlbWFsZScsIHN0YWNrSWQ6ICdnZW5kZXInIH0sXG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPkJhc2ljPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxTZXJpZXNDb21wb3NlZENoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl19