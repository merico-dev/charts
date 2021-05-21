"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _multipleSeriesLineChart = _interopRequireDefault(require("../multiple-series-line-chart"));

var _mock = _interopRequireDefault(require("./mocks/mock.json"));

_mock["default"].dataSets.forEach(function (series) {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type '{ developer:... Remove this comment to see the full error message
  series.id = series.developer.primaryEmail;
});

var content = function Content() {
  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      filteredSeries = _useState2[0],
      setFilteredSeries = _useState2[1];

  var configurations = {
    withTooltip: true,
    withLegend: true,
    interpolationType: 'monotone',
    xAxis: {
      name: 'Date'
    },
    yAxis: {
      name: 'Dev Equivalent'
    },
    seriesDataKey: 'dataSet',
    seriesNameKey: 'developer$.name',
    seriesNameFormatter: function seriesNameFormatter(series) {
      return "".concat(series.developer.name, " <").concat(series.developer.primaryEmail, ">");
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD'
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Filtered Series"), /*#__PURE__*/_react["default"].createElement("h2", null, "Tip: click legend items to toggle series"), /*#__PURE__*/_react["default"].createElement("p", null, "Filtered: ", filteredSeries.join(' , ')), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: _mock["default"].dataSets,
    configurations: configurations,
    filteredSeries: filteredSeries,
    setFilteredSeries: setFilteredSeries
  })));
};

exports.content = content;
var name = 'Filtered Series';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL2ZpbHRlci50c3giXSwibmFtZXMiOlsiZGF0YSIsImRhdGFTZXRzIiwiZm9yRWFjaCIsInNlcmllcyIsImlkIiwiZGV2ZWxvcGVyIiwicHJpbWFyeUVtYWlsIiwiY29udGVudCIsIkNvbnRlbnQiLCJmaWx0ZXJlZFNlcmllcyIsInNldEZpbHRlcmVkU2VyaWVzIiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsIndpdGhMZWdlbmQiLCJpbnRlcnBvbGF0aW9uVHlwZSIsInhBeGlzIiwibmFtZSIsInlBeGlzIiwic2VyaWVzRGF0YUtleSIsInNlcmllc05hbWVLZXkiLCJzZXJpZXNOYW1lRm9ybWF0dGVyIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsInR5cGUiLCJmb3JtYXQiLCJqb2luIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQUEsaUJBQUtDLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQixVQUFDQyxNQUFELEVBQVk7QUFDaEM7QUFDQUEsRUFBQUEsTUFBTSxDQUFDQyxFQUFQLEdBQVlELE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQkMsWUFBN0I7QUFDRCxDQUhEOztBQUtPLElBQU1DLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQUEsa0JBQ0kscUJBQVMsRUFBVCxDQURKO0FBQUE7QUFBQSxNQUNqQ0MsY0FEaUM7QUFBQSxNQUNqQkMsaUJBRGlCOztBQUV4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUUsSUFGUztBQUdyQkMsSUFBQUEsaUJBQWlCLEVBQUUsVUFIRTtBQUlyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBSmM7QUFPckJDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVBjO0FBVXJCRSxJQUFBQSxhQUFhLEVBQUUsU0FWTTtBQVdyQkMsSUFBQUEsYUFBYSxFQUFFLGlCQVhNO0FBWXJCQyxJQUFBQSxtQkFBbUIsRUFBRSw2QkFBQ2pCLE1BQUQ7QUFBQSx1QkFBb0JBLE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQlcsSUFBckMsZUFBOENiLE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQkMsWUFBL0Q7QUFBQSxLQVpBO0FBYXJCZSxJQUFBQSxRQUFRLEVBQUUsTUFiVztBQWNyQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxXQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNO0FBZEssR0FBdkI7QUFtQkEsc0JBQ0UsMERBQ0UsOERBREYsZUFFRSx1RkFGRixlQUdFLHlEQUFjZixjQUFjLENBQUNnQixJQUFmLENBQW9CLEtBQXBCLENBQWQsQ0FIRixlQUlFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsbUNBQUQ7QUFDRSxJQUFBLE1BQU0sRUFBRTNCLGlCQUFLQyxRQURmO0FBRUUsSUFBQSxjQUFjLEVBQUVVLGNBRmxCO0FBR0UsSUFBQSxjQUFjLEVBQUVGLGNBSGxCO0FBSUUsSUFBQSxpQkFBaUIsRUFBRUM7QUFKckIsSUFERixDQUpGLENBREY7QUFlRCxDQXBDTTs7O0FBcUNBLElBQU1NLElBQUksR0FBRyxpQkFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNdWx0aXBsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2tzL21vY2suanNvbic7XG5cbmRhdGEuZGF0YVNldHMuZm9yRWFjaCgoc2VyaWVzKSA9PiB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzM5KSBGSVhNRTogUHJvcGVydHkgJ2lkJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7IGRldmVsb3BlcjouLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICBzZXJpZXMuaWQgPSBzZXJpZXMuZGV2ZWxvcGVyLnByaW1hcnlFbWFpbDtcbn0pO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IFtmaWx0ZXJlZFNlcmllcywgc2V0RmlsdGVyZWRTZXJpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiB0cnVlLFxuICAgIGludGVycG9sYXRpb25UeXBlOiAnbW9ub3RvbmUnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIHNlcmllc0RhdGFLZXk6ICdkYXRhU2V0JyxcbiAgICBzZXJpZXNOYW1lS2V5OiAnZGV2ZWxvcGVyJC5uYW1lJyxcbiAgICBzZXJpZXNOYW1lRm9ybWF0dGVyOiAoc2VyaWVzOiBhbnkpID0+IGAke3Nlcmllcy5kZXZlbG9wZXIubmFtZX0gPCR7c2VyaWVzLmRldmVsb3Blci5wcmltYXJ5RW1haWx9PmAsXG4gICAgbGFiZWxLZXk6ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ0RBVEVfVElNRScsXG4gICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+RmlsdGVyZWQgU2VyaWVzPC9oMT5cbiAgICAgIDxoMj5UaXA6IGNsaWNrIGxlZ2VuZCBpdGVtcyB0byB0b2dnbGUgc2VyaWVzPC9oMj5cbiAgICAgIDxwPkZpbHRlcmVkOiB7ZmlsdGVyZWRTZXJpZXMuam9pbignICwgJyl9PC9wPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPE11bHRpcGxlU2VyaWVzTGluZUNoYXJ0XG4gICAgICAgICAgc2VyaWVzPXtkYXRhLmRhdGFTZXRzfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc31cbiAgICAgICAgICBmaWx0ZXJlZFNlcmllcz17ZmlsdGVyZWRTZXJpZXN9XG4gICAgICAgICAgc2V0RmlsdGVyZWRTZXJpZXM9e3NldEZpbHRlcmVkU2VyaWVzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnRmlsdGVyZWQgU2VyaWVzJztcbiJdfQ==