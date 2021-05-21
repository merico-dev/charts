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

var _styled = require("./styled");

var _tooltipContent = require("./tooltip-content");

function Content() {
  var configurations = {
    // HERE
    tooltip: {
      excludedNames: [],
      labelFormatter: function labelFormatter(v) {
        return v;
      },
      valueFormatter: function valueFormatter(v) {
        return v;
      },
      content: _tooltipContent.CustomTooltipContent
    },
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top'
    },
    labelKey: 'name',
    xAxis: {
      padding: {
        left: 20,
        right: 20
      }
    },
    subSeriesConfiguration: [{
      label: 'UV',
      dataKey: 'uv',
      fill: '#ccc'
    }, {
      label: 'Male',
      chartType: 'line',
      dataKey: 'human-male',
      stackId: 'human',
      stroke: 'red',
      dot: null
    }, {
      label: 'Female',
      chartType: 'line',
      dataKey: 'human-female',
      stackId: 'human',
      stroke: 'red',
      dot: null
    }]
  };
  return /*#__PURE__*/_react["default"].createElement(_styled.Container, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Custom Legend Content"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: _data["default"],
    configurations: configurations
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvY3VzdG9tLXRvb2x0aXAtY29udGVudC9jb250ZW50LnRzeCJdLCJuYW1lcyI6WyJDb250ZW50IiwiY29uZmlndXJhdGlvbnMiLCJ0b29sdGlwIiwiZXhjbHVkZWROYW1lcyIsImxhYmVsRm9ybWF0dGVyIiwidiIsInZhbHVlRm9ybWF0dGVyIiwiY29udGVudCIsIkN1c3RvbVRvb2x0aXBDb250ZW50IiwibGVnZW5kIiwiZW5hYmxlZCIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImxhYmVsS2V5IiwieEF4aXMiLCJwYWRkaW5nIiwibGVmdCIsInJpZ2h0Iiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsImZpbGwiLCJjaGFydFR5cGUiLCJzdGFja0lkIiwic3Ryb2tlIiwiZG90Iiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQ2hDLE1BQU1DLGNBQWlELEdBQUc7QUFDeEQ7QUFDQUMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLGFBQWEsRUFBRSxFQURSO0FBRVBDLE1BQUFBLGNBQWMsRUFBRSx3QkFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQVA7QUFBQSxPQUZUO0FBR1BDLE1BQUFBLGNBQWMsRUFBRSx3QkFBQ0QsQ0FBRDtBQUFBLGVBQU9BLENBQVA7QUFBQSxPQUhUO0FBSVBFLE1BQUFBLE9BQU8sRUFBRUM7QUFKRixLQUYrQztBQVF4REMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLE9BQU8sRUFBRSxJQURIO0FBRU5DLE1BQUFBLEtBQUssRUFBRSxPQUZEO0FBR05DLE1BQUFBLGFBQWEsRUFBRTtBQUhULEtBUmdEO0FBYXhEQyxJQUFBQSxRQUFRLEVBQUUsTUFiOEM7QUFjeERDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxPQUFPLEVBQUU7QUFBRUMsUUFBQUEsSUFBSSxFQUFFLEVBQVI7QUFBWUMsUUFBQUEsS0FBSyxFQUFFO0FBQW5CO0FBREosS0FkaUQ7QUFpQnhEQyxJQUFBQSxzQkFBc0IsRUFBRSxDQUN0QjtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxPQUFPLEVBQUUsSUFBeEI7QUFBOEJDLE1BQUFBLElBQUksRUFBRTtBQUFwQyxLQURzQixFQUV0QjtBQUFFRixNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkcsTUFBQUEsU0FBUyxFQUFFLE1BQTVCO0FBQW9DRixNQUFBQSxPQUFPLEVBQUUsWUFBN0M7QUFBMkRHLE1BQUFBLE9BQU8sRUFBRSxPQUFwRTtBQUE2RUMsTUFBQUEsTUFBTSxFQUFFLEtBQXJGO0FBQTRGQyxNQUFBQSxHQUFHLEVBQUU7QUFBakcsS0FGc0IsRUFHdEI7QUFBRU4sTUFBQUEsS0FBSyxFQUFFLFFBQVQ7QUFBbUJHLE1BQUFBLFNBQVMsRUFBRSxNQUE5QjtBQUFzQ0YsTUFBQUEsT0FBTyxFQUFFLGNBQS9DO0FBQStERyxNQUFBQSxPQUFPLEVBQUUsT0FBeEU7QUFBaUZDLE1BQUFBLE1BQU0sRUFBRSxLQUF6RjtBQUFnR0MsTUFBQUEsR0FBRyxFQUFFO0FBQXJHLEtBSHNCO0FBakJnQyxHQUExRDtBQXdCQSxzQkFDRSxnQ0FBQyxpQkFBRCxxQkFDRSxvRUFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsK0JBQUQ7QUFBcUIsSUFBQSxJQUFJLEVBQUVDLGdCQUEzQjtBQUFpQyxJQUFBLGNBQWMsRUFBRTNCO0FBQWpELElBREYsQ0FGRixDQURGO0FBUUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlcmllc0NvbXBvc2VkQ2hhcnQsIHsgU2VyaWVzQ29tcG9zZWRDaGFydENvbmZpZ3VyYXRpb25zIH0gZnJvbSAnLi4vLi4vc2VyaWVzLWNvbXBvc2VkLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS5qc29uJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVkJztcbmltcG9ydCB7IEN1c3RvbVRvb2x0aXBDb250ZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9uczogU2VyaWVzQ29tcG9zZWRDaGFydENvbmZpZ3VyYXRpb25zID0ge1xuICAgIC8vIEhFUkVcbiAgICB0b29sdGlwOiB7XG4gICAgICBleGNsdWRlZE5hbWVzOiBbXSxcbiAgICAgIGxhYmVsRm9ybWF0dGVyOiAodikgPT4gdixcbiAgICAgIHZhbHVlRm9ybWF0dGVyOiAodikgPT4gdixcbiAgICAgIGNvbnRlbnQ6IEN1c3RvbVRvb2x0aXBDb250ZW50LFxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgYWxpZ246ICdyaWdodCcsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAnbmFtZScsXG4gICAgeEF4aXM6IHtcbiAgICAgIHBhZGRpbmc6IHsgbGVmdDogMjAsIHJpZ2h0OiAyMCB9LFxuICAgIH0sXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW1xuICAgICAgeyBsYWJlbDogJ1VWJywgZGF0YUtleTogJ3V2JywgZmlsbDogJyNjY2MnIH0sXG4gICAgICB7IGxhYmVsOiAnTWFsZScsIGNoYXJ0VHlwZTogJ2xpbmUnLCBkYXRhS2V5OiAnaHVtYW4tbWFsZScsIHN0YWNrSWQ6ICdodW1hbicsIHN0cm9rZTogJ3JlZCcsIGRvdDogbnVsbCB9LFxuICAgICAgeyBsYWJlbDogJ0ZlbWFsZScsIGNoYXJ0VHlwZTogJ2xpbmUnLCBkYXRhS2V5OiAnaHVtYW4tZmVtYWxlJywgc3RhY2tJZDogJ2h1bWFuJywgc3Ryb2tlOiAncmVkJywgZG90OiBudWxsIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDE+Q3VzdG9tIExlZ2VuZCBDb250ZW50PC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxTZXJpZXNDb21wb3NlZENoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl19