"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.parameters = exports.name = exports.content = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _multipleSeriesLineChart = _interopRequireDefault(require("../multiple-series-line-chart"));

var _withDateGaps = _interopRequireDefault(require("./mocks/with-date-gaps.json"));

/**
 * Issue description: TODO
 * missing point data causing incorrect point calculation
 */
var content = function Content(_ref) {
  var connectNulls = _ref.connectNulls,
      fillXAxisGaps = _ref.fillXAxisGaps;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      filteredSeries = _useState2[0],
      setFilteredSeries = _useState2[1];

  var configurations = {
    withTooltip: true,
    yAxis: {
      name: 'DevEq'
    },
    xAxis: {
      fillGaps: fillXAxisGaps
    },
    interpolationType: 'linear',
    labelKey: 'date',
    labelFormatter: {
      type: 'PERIOD',
      format: '1d'
    },
    connectNulls: connectNulls,
    valueKey: 'value',
    seriesDataKey: 'series',
    seriesNameKey: 'id',
    xTickCount: 4,
    withLegend: true
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Fill XAxis Gaps"), /*#__PURE__*/_react["default"].createElement("h2", null, "An example of dealing with incomplete XAxis data"), /*#__PURE__*/_react["default"].createElement("p", null, "Tip: toggle ", /*#__PURE__*/_react["default"].createElement("b", {
    style: {
      color: 'red'
    }
  }, "fillXAxisGaps"), " and see what happens"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: _withDateGaps["default"],
    configurations: configurations,
    filteredSeries: filteredSeries,
    setFilteredSeries: setFilteredSeries
  })));
};

exports.content = content;
var name = 'FillXAxisGaps';
exports.name = name;
var parameters = {
  args: {
    connectNulls: false,
    fillXAxisGaps: false
  },
  argTypes: {
    connectNulls: 'boolean',
    fillXAxisGaps: 'boolean'
  }
};
exports.parameters = parameters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL2ZpbGx4LWF4aXMtZ2Fwcy50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJjb25uZWN0TnVsbHMiLCJmaWxsWEF4aXNHYXBzIiwiZmlsdGVyZWRTZXJpZXMiLCJzZXRGaWx0ZXJlZFNlcmllcyIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ5QXhpcyIsIm5hbWUiLCJ4QXhpcyIsImZpbGxHYXBzIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJsYWJlbEtleSIsImxhYmVsRm9ybWF0dGVyIiwidHlwZSIsImZvcm1hdCIsInZhbHVlS2V5Iiwic2VyaWVzRGF0YUtleSIsInNlcmllc05hbWVLZXkiLCJ4VGlja0NvdW50Iiwid2l0aExlZ2VuZCIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwicGFyYW1ldGVycyIsImFyZ3MiLCJhcmdUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUtBOztBQUNBOztBQUNBOztBQVBBOzs7O0FBU08sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsT0FBdUQ7QUFBQSxNQUFwQ0MsWUFBb0MsUUFBcENBLFlBQW9DO0FBQUEsTUFBdEJDLGFBQXNCLFFBQXRCQSxhQUFzQjs7QUFBQSxrQkFDaEMscUJBQVMsRUFBVCxDQURnQztBQUFBO0FBQUEsTUFDckVDLGNBRHFFO0FBQUEsTUFDckRDLGlCQURxRDs7QUFFNUUsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxXQUFXLEVBQUUsSUFEUTtBQUVyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBRmM7QUFLckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxRQUFRLEVBQUVSO0FBREwsS0FMYztBQVFyQlMsSUFBQUEsaUJBQWlCLEVBQUUsUUFSRTtBQVNyQkMsSUFBQUEsUUFBUSxFQUFFLE1BVFc7QUFVckJDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxJQUFJLEVBQUUsUUFEUTtBQUVkQyxNQUFBQSxNQUFNLEVBQUU7QUFGTSxLQVZLO0FBY3JCZCxJQUFBQSxZQUFZLEVBQVpBLFlBZHFCO0FBZXJCZSxJQUFBQSxRQUFRLEVBQUUsT0FmVztBQWdCckJDLElBQUFBLGFBQWEsRUFBRSxRQWhCTTtBQWlCckJDLElBQUFBLGFBQWEsRUFBRSxJQWpCTTtBQWtCckJDLElBQUFBLFVBQVUsRUFBRSxDQWxCUztBQW1CckJDLElBQUFBLFVBQVUsRUFBRTtBQW5CUyxHQUF2QjtBQXFCQSxzQkFDRSwwREFDRSw4REFERixlQUVFLCtGQUZGLGVBR0Usd0VBQ2M7QUFBRyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLHFCQURkLDBCQUhGLGVBTUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyxtQ0FBRDtBQUNFLElBQUEsTUFBTSxFQUFFQyx3QkFEVjtBQUVFLElBQUEsY0FBYyxFQUFFbkIsY0FGbEI7QUFHRSxJQUFBLGNBQWMsRUFBRUYsY0FIbEI7QUFJRSxJQUFBLGlCQUFpQixFQUFFQztBQUpyQixJQURGLENBTkYsQ0FERjtBQWlCRCxDQXhDTTs7O0FBeUNBLElBQU1JLElBQUksR0FBRyxlQUFiOztBQUVBLElBQU1pQixVQUFVLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRTtBQUNKekIsSUFBQUEsWUFBWSxFQUFFLEtBRFY7QUFFSkMsSUFBQUEsYUFBYSxFQUFFO0FBRlgsR0FEa0I7QUFLeEJ5QixFQUFBQSxRQUFRLEVBQUU7QUFDUjFCLElBQUFBLFlBQVksRUFBRSxTQUROO0FBRVJDLElBQUFBLGFBQWEsRUFBRTtBQUZQO0FBTGMsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIElzc3VlIGRlc2NyaXB0aW9uOiBUT0RPXG4gKiBtaXNzaW5nIHBvaW50IGRhdGEgY2F1c2luZyBpbmNvcnJlY3QgcG9pbnQgY2FsY3VsYXRpb25cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnQgZnJvbSAnLi4vbXVsdGlwbGUtc2VyaWVzLWxpbmUtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2Nrcy93aXRoLWRhdGUtZ2Fwcy5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KHsgY29ubmVjdE51bGxzLCBmaWxsWEF4aXNHYXBzIH06IGFueSkge1xuICBjb25zdCBbZmlsdGVyZWRTZXJpZXMsIHNldEZpbHRlcmVkU2VyaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXZFcScsXG4gICAgfSxcbiAgICB4QXhpczoge1xuICAgICAgZmlsbEdhcHM6IGZpbGxYQXhpc0dhcHMsXG4gICAgfSxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ2xpbmVhcicsXG4gICAgbGFiZWxLZXk6ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ1BFUklPRCcsXG4gICAgICBmb3JtYXQ6ICcxZCcsXG4gICAgfSxcbiAgICBjb25uZWN0TnVsbHMsXG4gICAgdmFsdWVLZXk6ICd2YWx1ZScsXG4gICAgc2VyaWVzRGF0YUtleTogJ3NlcmllcycsXG4gICAgc2VyaWVzTmFtZUtleTogJ2lkJyxcbiAgICB4VGlja0NvdW50OiA0LFxuICAgIHdpdGhMZWdlbmQ6IHRydWUsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5GaWxsIFhBeGlzIEdhcHM8L2gxPlxuICAgICAgPGgyPkFuIGV4YW1wbGUgb2YgZGVhbGluZyB3aXRoIGluY29tcGxldGUgWEF4aXMgZGF0YTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVGlwOiB0b2dnbGUgPGIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PmZpbGxYQXhpc0dhcHM8L2I+IGFuZCBzZWUgd2hhdCBoYXBwZW5zXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8TXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnRcbiAgICAgICAgICBzZXJpZXM9e2RhdGF9XG4gICAgICAgICAgY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfVxuICAgICAgICAgIGZpbHRlcmVkU2VyaWVzPXtmaWx0ZXJlZFNlcmllc31cbiAgICAgICAgICBzZXRGaWx0ZXJlZFNlcmllcz17c2V0RmlsdGVyZWRTZXJpZXN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdGaWxsWEF4aXNHYXBzJztcblxuZXhwb3J0IGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gIGFyZ3M6IHtcbiAgICBjb25uZWN0TnVsbHM6IGZhbHNlLFxuICAgIGZpbGxYQXhpc0dhcHM6IGZhbHNlLFxuICB9LFxuICBhcmdUeXBlczoge1xuICAgIGNvbm5lY3ROdWxsczogJ2Jvb2xlYW4nLFxuICAgIGZpbGxYQXhpc0dhcHM6ICdib29sZWFuJyxcbiAgfSxcbn07XG4iXX0=