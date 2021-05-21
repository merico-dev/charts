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

function content(_ref) {
  var enabled = _ref.enabled;
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
      // HERE
      isSeriesClickable: function isSeriesClickable(id) {
        if (enabled) {
          return id !== 'UV';
        }

        return true;
      }
    },
    labelKey: 'name',
    xAxis: {
      name: ''
    },
    yAxis: {
      name: ''
    },
    subSeriesConfiguration: [{
      label: 'UV',
      chartType: 'line',
      dataKey: 'uv'
    }, {
      label: 'Male',
      chartType: 'line',
      dataKey: 'male'
    }, {
      label: 'Female',
      chartType: 'line',
      dataKey: 'female'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement(_styled.Container, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Click in Legend"), /*#__PURE__*/_react["default"].createElement("p", null, "Note: toggle Enabled in Controls, then hover and click ", /*#__PURE__*/_react["default"].createElement("b", null, "UV"), " in legend."), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: _data["default"],
    configurations: configurations
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvY2xpY2thYmxlLWxlZ2VuZC1pdGVtL2NvbnRlbnQudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJlbmFibGVkIiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsImxlZ2VuZCIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImlzU2VyaWVzQ2xpY2thYmxlIiwiaWQiLCJsYWJlbEtleSIsInhBeGlzIiwibmFtZSIsInlBeGlzIiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiY2hhcnRUeXBlIiwiZGF0YUtleSIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRWUsU0FBU0EsT0FBVCxPQUFvRDtBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFDakUsTUFBTUMsY0FBaUQsR0FBRztBQUN4REMsSUFBQUEsV0FBVyxFQUFFLElBRDJDO0FBRXhEQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkgsTUFBQUEsT0FBTyxFQUFFLElBREg7QUFFTkksTUFBQUEsS0FBSyxFQUFFLE9BRkQ7QUFHTkMsTUFBQUEsYUFBYSxFQUFFLEtBSFQ7QUFJTjtBQUNBQyxNQUFBQSxpQkFBaUIsRUFBRSwyQkFBQ0MsRUFBRCxFQUF5QjtBQUMxQyxZQUFJUCxPQUFKLEVBQWE7QUFDWCxpQkFBT08sRUFBRSxLQUFLLElBQWQ7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRDtBQVZLLEtBRmdEO0FBY3hEQyxJQUFBQSxRQUFRLEVBQUUsTUFkOEM7QUFleERDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQWZpRDtBQWtCeERDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQWxCaUQ7QUFxQnhERSxJQUFBQSxzQkFBc0IsRUFBRSxDQUN0QjtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxTQUFTLEVBQUUsTUFBMUI7QUFBa0NDLE1BQUFBLE9BQU8sRUFBRTtBQUEzQyxLQURzQixFQUV0QjtBQUFFRixNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsU0FBUyxFQUFFLE1BQTVCO0FBQW9DQyxNQUFBQSxPQUFPLEVBQUU7QUFBN0MsS0FGc0IsRUFHdEI7QUFBRUYsTUFBQUEsS0FBSyxFQUFFLFFBQVQ7QUFBbUJDLE1BQUFBLFNBQVMsRUFBRSxNQUE5QjtBQUFzQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQS9DLEtBSHNCO0FBckJnQyxHQUExRDtBQTJCQSxzQkFDRSxnQ0FBQyxpQkFBRCxxQkFDRSw4REFERixlQUVFLG1IQUN5RCxnREFEekQsZ0JBRkYsZUFLRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLCtCQUFEO0FBQXFCLElBQUEsSUFBSSxFQUFFQyxnQkFBM0I7QUFBaUMsSUFBQSxjQUFjLEVBQUVqQjtBQUFqRCxJQURGLENBTEYsQ0FERjtBQVdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZXJpZXNDb21wb3NlZENoYXJ0LCB7IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyB9IGZyb20gJy4uLy4uL3Nlcmllcy1jb21wb3NlZC1jaGFydCc7XG5cbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS5qc29uJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGVudCh7IGVuYWJsZWQgfTogeyBlbmFibGVkOiBib29sZWFuIH0pIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnM6IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgLy8gSEVSRVxuICAgICAgaXNTZXJpZXNDbGlja2FibGU6IChpZDogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgICAgcmV0dXJuIGlkICE9PSAnVVYnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAnbmFtZScsXG4gICAgeEF4aXM6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgIH0sXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW1xuICAgICAgeyBsYWJlbDogJ1VWJywgY2hhcnRUeXBlOiAnbGluZScsIGRhdGFLZXk6ICd1dicgfSxcbiAgICAgIHsgbGFiZWw6ICdNYWxlJywgY2hhcnRUeXBlOiAnbGluZScsIGRhdGFLZXk6ICdtYWxlJyB9LFxuICAgICAgeyBsYWJlbDogJ0ZlbWFsZScsIGNoYXJ0VHlwZTogJ2xpbmUnLCBkYXRhS2V5OiAnZmVtYWxlJyB9LFxuICAgIF0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMT5DbGljayBpbiBMZWdlbmQ8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIE5vdGU6IHRvZ2dsZSBFbmFibGVkIGluIENvbnRyb2xzLCB0aGVuIGhvdmVyIGFuZCBjbGljayA8Yj5VVjwvYj4gaW4gbGVnZW5kLlxuICAgICAgPC9wPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFNlcmllc0NvbXBvc2VkQ2hhcnQgZGF0YT17ZGF0YX0gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXX0=