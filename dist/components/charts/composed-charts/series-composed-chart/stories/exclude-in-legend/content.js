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

function excludeUV(series) {
  return series.filter(function (s) {
    return s.name !== 'UV';
  });
}

function content(_ref) {
  var enabled = _ref.enabled;
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
      isSeriesClickable: function isSeriesClickable(id) {
        return id !== 'UV';
      },
      excludeBy: enabled ? excludeUV : undefined // HERE

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
  return /*#__PURE__*/_react["default"].createElement(_styled.Container, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Exclude in Legend"), /*#__PURE__*/_react["default"].createElement("p", null, "Note: toggle Enabled in Controls "), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: _data["default"],
    configurations: configurations
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvZXhjbHVkZS1pbi1sZWdlbmQvY29udGVudC50c3giXSwibmFtZXMiOlsiZXhjbHVkZVVWIiwic2VyaWVzIiwiZmlsdGVyIiwicyIsIm5hbWUiLCJjb250ZW50IiwiZW5hYmxlZCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJsZWdlbmQiLCJhbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJpc1Nlcmllc0NsaWNrYWJsZSIsImlkIiwiZXhjbHVkZUJ5IiwidW5kZWZpbmVkIiwibGFiZWxLZXkiLCJ4QXhpcyIsInlBeGlzIiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiY2hhcnRUeXBlIiwiZGF0YUtleSIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBaUY7QUFDL0UsU0FBT0EsTUFBTSxDQUFDQyxNQUFQLENBQWMsVUFBQ0MsQ0FBRDtBQUFBLFdBQWdDQSxDQUFDLENBQUNDLElBQUYsS0FBVyxJQUEzQztBQUFBLEdBQWQsQ0FBUDtBQUNEOztBQUVjLFNBQVNDLE9BQVQsT0FBb0Q7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQ2pFLE1BQU1DLGNBQWlELEdBQUc7QUFDeERDLElBQUFBLFdBQVcsRUFBRSxJQUQyQztBQUV4REMsSUFBQUEsTUFBTSxFQUFFO0FBQ05ILE1BQUFBLE9BQU8sRUFBRSxJQURIO0FBRU5JLE1BQUFBLEtBQUssRUFBRSxPQUZEO0FBR05DLE1BQUFBLGFBQWEsRUFBRSxLQUhUO0FBSU5DLE1BQUFBLGlCQUFpQixFQUFFLDJCQUFDQyxFQUFEO0FBQUEsZUFBeUJBLEVBQUUsS0FBSyxJQUFoQztBQUFBLE9BSmI7QUFLTkMsTUFBQUEsU0FBUyxFQUFFUixPQUFPLEdBQUdOLFNBQUgsR0FBZWUsU0FMM0IsQ0FLc0M7O0FBTHRDLEtBRmdEO0FBU3hEQyxJQUFBQSxRQUFRLEVBQUUsTUFUOEM7QUFVeERDLElBQUFBLEtBQUssRUFBRTtBQUNMYixNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVZpRDtBQWF4RGMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xkLE1BQUFBLElBQUksRUFBRTtBQURELEtBYmlEO0FBZ0J4RGUsSUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEI7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsU0FBUyxFQUFFLE1BQTFCO0FBQWtDQyxNQUFBQSxPQUFPLEVBQUU7QUFBM0MsS0FEc0IsRUFFdEI7QUFBRUYsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFBLFNBQVMsRUFBRSxNQUE1QjtBQUFvQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQTdDLEtBRnNCLEVBR3RCO0FBQUVGLE1BQUFBLEtBQUssRUFBRSxRQUFUO0FBQW1CQyxNQUFBQSxTQUFTLEVBQUUsTUFBOUI7QUFBc0NDLE1BQUFBLE9BQU8sRUFBRTtBQUEvQyxLQUhzQjtBQWhCZ0MsR0FBMUQ7QUFzQkEsc0JBQ0UsZ0NBQUMsaUJBQUQscUJBQ0UsZ0VBREYsZUFFRSwrRUFGRixlQUdFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsK0JBQUQ7QUFBcUIsSUFBQSxJQUFJLEVBQUVDLGdCQUEzQjtBQUFpQyxJQUFBLGNBQWMsRUFBRWxCO0FBQWpELElBREYsQ0FIRixDQURGO0FBU0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGVnZW5kQ29udGVudFByb3BTZXJpZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWNoYXJ0cy9sZWdlbmQnO1xuaW1wb3J0IFNlcmllc0NvbXBvc2VkQ2hhcnQsIHsgU2VyaWVzQ29tcG9zZWRDaGFydENvbmZpZ3VyYXRpb25zIH0gZnJvbSAnLi4vLi4vc2VyaWVzLWNvbXBvc2VkLWNoYXJ0JztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzb24nO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZWQnO1xuXG5mdW5jdGlvbiBleGNsdWRlVVYoc2VyaWVzOiBMZWdlbmRDb250ZW50UHJvcFNlcmllc1tdKTogTGVnZW5kQ29udGVudFByb3BTZXJpZXNbXSB7XG4gIHJldHVybiBzZXJpZXMuZmlsdGVyKChzOiBMZWdlbmRDb250ZW50UHJvcFNlcmllcykgPT4gcy5uYW1lICE9PSAnVVYnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGVudCh7IGVuYWJsZWQgfTogeyBlbmFibGVkOiBib29sZWFuIH0pIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnM6IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgaXNTZXJpZXNDbGlja2FibGU6IChpZDogc3RyaW5nIHwgbnVtYmVyKSA9PiBpZCAhPT0gJ1VWJyxcbiAgICAgIGV4Y2x1ZGVCeTogZW5hYmxlZCA/IGV4Y2x1ZGVVViA6IHVuZGVmaW5lZCwgLy8gSEVSRVxuICAgIH0sXG4gICAgbGFiZWxLZXk6ICduYW1lJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJycsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJycsXG4gICAgfSxcbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiBbXG4gICAgICB7IGxhYmVsOiAnVVYnLCBjaGFydFR5cGU6ICdsaW5lJywgZGF0YUtleTogJ3V2JyB9LFxuICAgICAgeyBsYWJlbDogJ01hbGUnLCBjaGFydFR5cGU6ICdsaW5lJywgZGF0YUtleTogJ21hbGUnIH0sXG4gICAgICB7IGxhYmVsOiAnRmVtYWxlJywgY2hhcnRUeXBlOiAnbGluZScsIGRhdGFLZXk6ICdmZW1hbGUnIH0sXG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPkV4Y2x1ZGUgaW4gTGVnZW5kPC9oMT5cbiAgICAgIDxwPk5vdGU6IHRvZ2dsZSBFbmFibGVkIGluIENvbnRyb2xzIDwvcD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxTZXJpZXNDb21wb3NlZENoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl19