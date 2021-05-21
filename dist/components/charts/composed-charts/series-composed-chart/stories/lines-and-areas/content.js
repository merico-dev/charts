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
  var _ref$extendDays = _ref.extendDays,
      extendDays = _ref$extendDays === void 0 ? 0 : _ref$extendDays,
      dataCount = _ref.dataCount;
  var series = (0, _react.useMemo)((0, _helpers.calcUpwardsSeriesData)({
    dataCount: dataCount,
    extendDays: extendDays
  }), [dataCount]);
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
      name: ''
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
      label: 'Issue Range',
      dataKey: 'issue-range',
      chartType: 'area',
      // here
      yAxisId: 'accumulatively',
      fill: 'rgba(162,197,246,1)',
      stroke: 'none'
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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Lines and Areas"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 400
    }
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: series,
    configurations: configurations
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvbGluZXMtYW5kLWFyZWFzL2NvbnRlbnQudHN4Il0sIm5hbWVzIjpbIkNvbnRlbnQiLCJleHRlbmREYXlzIiwiZGF0YUNvdW50Iiwic2VyaWVzIiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0IiwieEF4aXMiLCJ0aWNrTGluZSIsImF4aXNMaW5lIiwibmFtZSIsInlBeGlzIiwieUF4aXNJZCIsInByZXNlcnZlVGlja1plcm8iLCJ2YWx1ZUZvcm1hdHRlciIsInYiLCJ0b29sdGlwRXhjbHVkZWROYW1lcyIsInN1YlNlcmllc0NvbmZpZ3VyYXRpb24iLCJsYWJlbCIsImRhdGFLZXkiLCJjaGFydFR5cGUiLCJmaWxsIiwic3Ryb2tlIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJkb3QiLCJzdHJva2VEYXNoYXJyYXkiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFZSxTQUFTQSxPQUFULE9BQXFEO0FBQUEsNkJBQWxDQyxVQUFrQztBQUFBLE1BQWxDQSxVQUFrQyxnQ0FBckIsQ0FBcUI7QUFBQSxNQUFsQkMsU0FBa0IsUUFBbEJBLFNBQWtCO0FBQ2xFLE1BQU1DLE1BQU0sR0FBRyxvQkFBUSxvQ0FBc0I7QUFBRUQsSUFBQUEsU0FBUyxFQUFUQSxTQUFGO0FBQWFELElBQUFBLFVBQVUsRUFBVkE7QUFBYixHQUF0QixDQUFSLEVBQTBELENBQUNDLFNBQUQsQ0FBMUQsQ0FBZjtBQUVBLE1BQU1FLGNBQWlELEdBQUc7QUFDeERDLElBQUFBLFdBQVcsRUFBRSxJQUQyQztBQUV4REMsSUFBQUEsUUFBUSxFQUFFLE1BRjhDO0FBR3hEQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsSUFBSSxFQUFFLFdBRFE7QUFFZEMsTUFBQUEsTUFBTSxFQUFFO0FBRk0sS0FId0M7QUFPeERDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxRQUFRLEVBQUUsS0FETDtBQUVMQyxNQUFBQSxRQUFRLEVBQUUsS0FGTDtBQUdMQyxNQUFBQSxJQUFJLEVBQUU7QUFIRCxLQVBpRDtBQVl4RDtBQUNBQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsT0FBTyxFQUFFLGdCQURKO0FBRUxILE1BQUFBLFFBQVEsRUFBRSxLQUZMO0FBR0xELE1BQUFBLFFBQVEsRUFBRSxLQUhMO0FBSUxFLE1BQUFBLElBQUksRUFBRSxFQUpEO0FBS0xHLE1BQUFBLGdCQUFnQixFQUFFO0FBTGIsS0FiaUQ7QUFvQnhEQyxJQUFBQSxjQUFjLEVBQUUsd0JBQUNDLENBQUQ7QUFBQSxhQUFhQSxDQUFDLElBQUksQ0FBTCxHQUFTQSxDQUFULEdBQWEsRUFBMUI7QUFBQSxLQXBCd0M7QUFvQlQ7QUFDL0NDLElBQUFBLG9CQUFvQixFQUFFLENBQUMsYUFBRCxDQXJCa0M7QUFxQmpCO0FBRXZDQyxJQUFBQSxzQkFBc0IsRUFBRSxDQUN0QjtBQUNFQyxNQUFBQSxLQUFLLEVBQUUsYUFEVDtBQUVFQyxNQUFBQSxPQUFPLEVBQUUsYUFGWDtBQUdFQyxNQUFBQSxTQUFTLEVBQUUsTUFIYjtBQUdxQjtBQUNuQlIsTUFBQUEsT0FBTyxFQUFFLGdCQUpYO0FBS0VTLE1BQUFBLElBQUksRUFBRSxxQkFMUjtBQU1FQyxNQUFBQSxNQUFNLEVBQUU7QUFOVixLQURzQixFQVN0QjtBQUNFSixNQUFBQSxLQUFLLEVBQUUsY0FEVDtBQUVFQyxNQUFBQSxPQUFPLEVBQUUsUUFGWDtBQUdFQyxNQUFBQSxTQUFTLEVBQUUsTUFIYjtBQUlFRyxNQUFBQSxpQkFBaUIsRUFBRSxVQUpyQjtBQUtFQyxNQUFBQSxHQUFHLEVBQUUsS0FMUDtBQU1FWixNQUFBQSxPQUFPLEVBQUUsZ0JBTlg7QUFPRVUsTUFBQUEsTUFBTSxFQUFFLG1CQVBWO0FBUUVELE1BQUFBLElBQUksRUFBRTtBQVJSLEtBVHNCLEVBbUJ0QjtBQUNFSCxNQUFBQSxLQUFLLEVBQUUsc0JBRFQ7QUFFRUMsTUFBQUEsT0FBTyxFQUFFLFFBRlg7QUFHRUMsTUFBQUEsU0FBUyxFQUFFLE1BSGI7QUFJRUcsTUFBQUEsaUJBQWlCLEVBQUUsVUFKckI7QUFLRUMsTUFBQUEsR0FBRyxFQUFFLEtBTFA7QUFNRVosTUFBQUEsT0FBTyxFQUFFLGdCQU5YO0FBT0VVLE1BQUFBLE1BQU0sRUFBRSxTQVBWO0FBUUVHLE1BQUFBLGVBQWUsRUFBRSxHQVJuQjtBQVNFSixNQUFBQSxJQUFJLEVBQUU7QUFUUixLQW5Cc0I7QUF2QmdDLEdBQTFEO0FBd0RBLHNCQUNFLDBEQUNFLDhEQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFSyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQywrQkFBRDtBQUFxQixJQUFBLElBQUksRUFBRTNCLE1BQTNCO0FBQW1DLElBQUEsY0FBYyxFQUFFQztBQUFuRCxJQURGLENBRkYsQ0FERjtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjYWxjVXB3YXJkc1Nlcmllc0RhdGEgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IFNlcmllc0NvbXBvc2VkQ2hhcnQsIHsgU2VyaWVzQ29tcG9zZWRDaGFydENvbmZpZ3VyYXRpb25zIH0gZnJvbSAnLi4vLi4vc2VyaWVzLWNvbXBvc2VkLWNoYXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudCh7IGV4dGVuZERheXMgPSAwLCBkYXRhQ291bnQgfTogYW55KSB7XG4gIGNvbnN0IHNlcmllcyA9IHVzZU1lbW8oY2FsY1Vwd2FyZHNTZXJpZXNEYXRhKHsgZGF0YUNvdW50LCBleHRlbmREYXlzIH0pLCBbZGF0YUNvdW50XSk7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnM6IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsYWJlbEtleTogJ2RhdGUnLFxuICAgIGxhYmVsRm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnREFURV9USU1FJyxcbiAgICAgIGZvcm1hdDogJ01NLUREJyxcbiAgICB9LFxuICAgIHhBeGlzOiB7XG4gICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICBheGlzTGluZTogZmFsc2UsXG4gICAgICBuYW1lOiAnJyxcbiAgICB9LFxuICAgIC8vIFkgQXhpcyBmb3IgbGluZVxuICAgIHlBeGlzOiB7XG4gICAgICB5QXhpc0lkOiAnYWNjdW11bGF0aXZlbHknLFxuICAgICAgYXhpc0xpbmU6IGZhbHNlLFxuICAgICAgdGlja0xpbmU6IGZhbHNlLFxuICAgICAgbmFtZTogJycsXG4gICAgICBwcmVzZXJ2ZVRpY2taZXJvOiB0cnVlLFxuICAgIH0sXG4gICAgdmFsdWVGb3JtYXR0ZXI6ICh2OiBhbnkpID0+ICh2ID49IDAgPyB2IDogJycpLCAvLyBoaWRlIG5lZ2F0aXZlIHZhbHVlIG9uIFkgQXhpcyBmb3IgbGluZVxuICAgIHRvb2x0aXBFeGNsdWRlZE5hbWVzOiBbJ0lzc3VlIFJhbmdlJ10sIC8vIG1hdGNoIHN1YlNlcmllcydzIGxhYmVsXG5cbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnSXNzdWUgUmFuZ2UnLFxuICAgICAgICBkYXRhS2V5OiAnaXNzdWUtcmFuZ2UnLFxuICAgICAgICBjaGFydFR5cGU6ICdhcmVhJywgLy8gaGVyZVxuICAgICAgICB5QXhpc0lkOiAnYWNjdW11bGF0aXZlbHknLFxuICAgICAgICBmaWxsOiAncmdiYSgxNjIsMTk3LDI0NiwxKScsXG4gICAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUb3RhbCBJc3N1ZXMnLFxuICAgICAgICBkYXRhS2V5OiAnbGluZS0xJyxcbiAgICAgICAgY2hhcnRUeXBlOiAnbGluZScsXG4gICAgICAgIGludGVycG9sYXRpb25UeXBlOiAnbW9ub3RvbmUnLFxuICAgICAgICBkb3Q6IGZhbHNlLFxuICAgICAgICB5QXhpc0lkOiAnYWNjdW11bGF0aXZlbHknLFxuICAgICAgICBzdHJva2U6ICdyZ2JhKDIzMiw3MSwyOCwxKScsXG4gICAgICAgIGZpbGw6ICdyZ2JhKDIzMiw3MSwyOCwxKScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RvdGFsIFNvbWV0aGluZyBFbHNlJyxcbiAgICAgICAgZGF0YUtleTogJ2xpbmUtMicsXG4gICAgICAgIGNoYXJ0VHlwZTogJ2xpbmUnLFxuICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ21vbm90b25lJyxcbiAgICAgICAgZG90OiBmYWxzZSxcbiAgICAgICAgeUF4aXNJZDogJ2FjY3VtdWxhdGl2ZWx5JyxcbiAgICAgICAgc3Ryb2tlOiAnI0YwODc2QScsXG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogJzQnLFxuICAgICAgICBmaWxsOiAnI0YwODc2QScsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkxpbmVzIGFuZCBBcmVhczwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA2MDAsIGhlaWdodDogNDAwIH19PlxuICAgICAgICA8U2VyaWVzQ29tcG9zZWRDaGFydCBkYXRhPXtzZXJpZXN9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19