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

var _issue1Fixed = _interopRequireDefault(require("./mocks/issue1-fixed.json"));

/**
 * Issue description: TODO
 * missing point data causing incorrect point calculation
 */
// import data from './mocks/issue1.json';
var content = function Content(_ref) {
  var _ref$connectNulls = _ref.connectNulls,
      connectNulls = _ref$connectNulls === void 0 ? false : _ref$connectNulls;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      filteredSeries = _useState2[0],
      setFilteredSeries = _useState2[1];

  var configurations = {
    withTooltip: true,
    yAxis: {
      name: '开发当量'
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
    referenceLines: [{
      value: 1668.3541666666667,
      labelText: 'middle: 1668',
      labelPosition: 'center'
    }, {
      value: 7466.361866724548,
      labelText: 'top: 7466',
      labelPosition: 'left'
    }, {
      value: 0,
      labelText: 'bottom: 0',
      labelPosition: 'right'
    }],
    xTickCount: 4,
    withLegend: true
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Issues - 1 (Solved)"), /*#__PURE__*/_react["default"].createElement("h2", null, "Missing point data causing incorrect point calculation"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: _issue1Fixed["default"],
    configurations: configurations,
    filteredSeries: filteredSeries,
    setFilteredSeries: setFilteredSeries
  })));
};

exports.content = content;
var name = 'Issues - 1';
exports.name = name;
var parameters = {
  args: {
    connectNulls: false
  },
  argTypes: {
    connectNulls: 'boolean'
  }
};
exports.parameters = parameters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL2lzc3VlMS50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJjb25uZWN0TnVsbHMiLCJmaWx0ZXJlZFNlcmllcyIsInNldEZpbHRlcmVkU2VyaWVzIiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsInlBeGlzIiwibmFtZSIsImludGVycG9sYXRpb25UeXBlIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsInR5cGUiLCJmb3JtYXQiLCJ2YWx1ZUtleSIsInNlcmllc0RhdGFLZXkiLCJzZXJpZXNOYW1lS2V5IiwicmVmZXJlbmNlTGluZXMiLCJ2YWx1ZSIsImxhYmVsVGV4dCIsImxhYmVsUG9zaXRpb24iLCJ4VGlja0NvdW50Iiwid2l0aExlZ2VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSIsInBhcmFtZXRlcnMiLCJhcmdzIiwiYXJnVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFFQTs7QUFSQTs7OztBQU9BO0FBR08sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsT0FBMkM7QUFBQSwrQkFBeEJDLFlBQXdCO0FBQUEsTUFBeEJBLFlBQXdCLGtDQUFULEtBQVM7O0FBQUEsa0JBQ3BCLHFCQUFTLEVBQVQsQ0FEb0I7QUFBQTtBQUFBLE1BQ3pEQyxjQUR5RDtBQUFBLE1BQ3pDQyxpQkFEeUM7O0FBRWhFLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQUZjO0FBS3JCQyxJQUFBQSxpQkFBaUIsRUFBRSxRQUxFO0FBTXJCQyxJQUFBQSxRQUFRLEVBQUUsTUFOVztBQU9yQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxRQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNLEtBUEs7QUFXckJYLElBQUFBLFlBQVksRUFBWkEsWUFYcUI7QUFZckJZLElBQUFBLFFBQVEsRUFBRSxPQVpXO0FBYXJCQyxJQUFBQSxhQUFhLEVBQUUsUUFiTTtBQWNyQkMsSUFBQUEsYUFBYSxFQUFFLElBZE07QUFlckJDLElBQUFBLGNBQWMsRUFBRSxDQUNkO0FBQ0VDLE1BQUFBLEtBQUssRUFBRSxrQkFEVDtBQUVFQyxNQUFBQSxTQUFTLEVBQUUsY0FGYjtBQUdFQyxNQUFBQSxhQUFhLEVBQUU7QUFIakIsS0FEYyxFQU1kO0FBQ0VGLE1BQUFBLEtBQUssRUFBRSxpQkFEVDtBQUVFQyxNQUFBQSxTQUFTLEVBQUUsV0FGYjtBQUdFQyxNQUFBQSxhQUFhLEVBQUU7QUFIakIsS0FOYyxFQVdkO0FBQ0VGLE1BQUFBLEtBQUssRUFBRSxDQURUO0FBRUVDLE1BQUFBLFNBQVMsRUFBRSxXQUZiO0FBR0VDLE1BQUFBLGFBQWEsRUFBRTtBQUhqQixLQVhjLENBZks7QUFnQ3JCQyxJQUFBQSxVQUFVLEVBQUUsQ0FoQ1M7QUFpQ3JCQyxJQUFBQSxVQUFVLEVBQUU7QUFqQ1MsR0FBdkI7QUFtQ0Esc0JBQ0UsMERBQ0Usa0VBREYsZUFFRSxxR0FGRixlQUdFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsbUNBQUQ7QUFDRSxJQUFBLE1BQU0sRUFBRUMsdUJBRFY7QUFFRSxJQUFBLGNBQWMsRUFBRXBCLGNBRmxCO0FBR0UsSUFBQSxjQUFjLEVBQUVGLGNBSGxCO0FBSUUsSUFBQSxpQkFBaUIsRUFBRUM7QUFKckIsSUFERixDQUhGLENBREY7QUFjRCxDQW5ETTs7O0FBb0RBLElBQU1JLElBQUksR0FBRyxZQUFiOztBQUVBLElBQU1rQixVQUFVLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRTtBQUNKekIsSUFBQUEsWUFBWSxFQUFFO0FBRFYsR0FEa0I7QUFJeEIwQixFQUFBQSxRQUFRLEVBQUU7QUFDUjFCLElBQUFBLFlBQVksRUFBRTtBQUROO0FBSmMsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIElzc3VlIGRlc2NyaXB0aW9uOiBUT0RPXG4gKiBtaXNzaW5nIHBvaW50IGRhdGEgY2F1c2luZyBpbmNvcnJlY3QgcG9pbnQgY2FsY3VsYXRpb25cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnQgZnJvbSAnLi4vbXVsdGlwbGUtc2VyaWVzLWxpbmUtY2hhcnQnO1xuLy8gaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2Nrcy9pc3N1ZTEuanNvbic7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2tzL2lzc3VlMS1maXhlZC5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KHsgY29ubmVjdE51bGxzID0gZmFsc2UgfSkge1xuICBjb25zdCBbZmlsdGVyZWRTZXJpZXMsIHNldEZpbHRlcmVkU2VyaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICflvIDlj5HlvZPph48nLFxuICAgIH0sXG4gICAgaW50ZXJwb2xhdGlvblR5cGU6ICdsaW5lYXInLFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdQRVJJT0QnLFxuICAgICAgZm9ybWF0OiAnMWQnLFxuICAgIH0sXG4gICAgY29ubmVjdE51bGxzLFxuICAgIHZhbHVlS2V5OiAndmFsdWUnLFxuICAgIHNlcmllc0RhdGFLZXk6ICdzZXJpZXMnLFxuICAgIHNlcmllc05hbWVLZXk6ICdpZCcsXG4gICAgcmVmZXJlbmNlTGluZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDE2NjguMzU0MTY2NjY2NjY2NyxcbiAgICAgICAgbGFiZWxUZXh0OiAnbWlkZGxlOiAxNjY4JyxcbiAgICAgICAgbGFiZWxQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogNzQ2Ni4zNjE4NjY3MjQ1NDgsXG4gICAgICAgIGxhYmVsVGV4dDogJ3RvcDogNzQ2NicsXG4gICAgICAgIGxhYmVsUG9zaXRpb246ICdsZWZ0JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBsYWJlbFRleHQ6ICdib3R0b206IDAnLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHhUaWNrQ291bnQ6IDQsXG4gICAgd2l0aExlZ2VuZDogdHJ1ZSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPklzc3VlcyAtIDEgKFNvbHZlZCk8L2gxPlxuICAgICAgPGgyPk1pc3NpbmcgcG9pbnQgZGF0YSBjYXVzaW5nIGluY29ycmVjdCBwb2ludCBjYWxjdWxhdGlvbjwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8TXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnRcbiAgICAgICAgICBzZXJpZXM9e2RhdGF9XG4gICAgICAgICAgY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfVxuICAgICAgICAgIGZpbHRlcmVkU2VyaWVzPXtmaWx0ZXJlZFNlcmllc31cbiAgICAgICAgICBzZXRGaWx0ZXJlZFNlcmllcz17c2V0RmlsdGVyZWRTZXJpZXN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdJc3N1ZXMgLSAxJztcblxuZXhwb3J0IGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gIGFyZ3M6IHtcbiAgICBjb25uZWN0TnVsbHM6IGZhbHNlLFxuICB9LFxuICBhcmdUeXBlczoge1xuICAgIGNvbm5lY3ROdWxsczogJ2Jvb2xlYW4nLFxuICB9LFxufTtcbiJdfQ==