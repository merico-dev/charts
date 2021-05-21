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

var _rechartsBarChart = _interopRequireDefault(require("../recharts-bar-chart"));

var _multipleValues = _interopRequireDefault(require("./mocks/multiple-values.json"));

function Stacked(_ref) {
  var data = _ref.data,
      filteredSeries = _ref.filteredSeries,
      setFilteredSeries = _ref.setFilteredSeries;
  var configurations = {
    withTooltip: true,
    labelKey: 'name',
    subSeriesConfiguration: [{
      label: 'UV',
      dataKey: 'uv'
    }, {
      label: 'Male',
      dataKey: 'male',
      stackId: 'gender'
    }, {
      label: 'Female',
      dataKey: 'female',
      stackId: 'gender'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: data,
    configurations: configurations,
    filteredSeries: filteredSeries,
    setFilteredSeries: setFilteredSeries
  });
}

function Categorized(_ref2) {
  var data = _ref2.data,
      filteredSeries = _ref2.filteredSeries,
      setFilteredSeries = _ref2.setFilteredSeries;
  var configurations = {
    withTooltip: true,
    labelKey: 'name',
    subSeriesConfiguration: [{
      label: 'UV',
      dataKey: 'uv'
    }, {
      label: 'Male',
      dataKey: 'male'
    }, {
      label: 'Female',
      dataKey: 'female'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: data,
    configurations: configurations,
    filteredSeries: filteredSeries,
    setFilteredSeries: setFilteredSeries
  });
}

var content = function Content() {
  // NOTE: it'll work internally in chart, if you don't pass this prop
  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      filteredSeries = _useState2[0],
      setFilteredSeries = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Filter SubSeries"), /*#__PURE__*/_react["default"].createElement("strong", null, "Tip: click on legend"), /*#__PURE__*/_react["default"].createElement("p", null, "Series filtered: ", filteredSeries.join(', ')), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 450
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Stacked"), /*#__PURE__*/_react["default"].createElement(Stacked, {
    data: _multipleValues["default"],
    filteredSeries: filteredSeries,
    setFilteredSeries: setFilteredSeries
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 450,
      marginTop: 100
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Categorized"), /*#__PURE__*/_react["default"].createElement(Categorized, {
    data: _multipleValues["default"],
    filteredSeries: filteredSeries,
    setFilteredSeries: setFilteredSeries
  })));
};

exports.content = content;
var name = 'Filter SubSeries';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2ZpbHRlci50c3giXSwibmFtZXMiOlsiU3RhY2tlZCIsImRhdGEiLCJmaWx0ZXJlZFNlcmllcyIsInNldEZpbHRlcmVkU2VyaWVzIiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsImxhYmVsS2V5Iiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsInN0YWNrSWQiLCJDYXRlZ29yaXplZCIsImNvbnRlbnQiLCJDb250ZW50Iiwiam9pbiIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBbUU7QUFBQSxNQUFoREMsSUFBZ0QsUUFBaERBLElBQWdEO0FBQUEsTUFBMUNDLGNBQTBDLFFBQTFDQSxjQUEwQztBQUFBLE1BQTFCQyxpQkFBMEIsUUFBMUJBLGlCQUEwQjtBQUNqRSxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxRQUFRLEVBQUUsTUFGVztBQUdyQkMsSUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEI7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsT0FBTyxFQUFFO0FBQXhCLEtBRHNCLEVBRXRCO0FBQUVELE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxNQUFBQSxPQUFPLEVBQUUsTUFBMUI7QUFBa0NDLE1BQUFBLE9BQU8sRUFBRTtBQUEzQyxLQUZzQixFQUd0QjtBQUFFRixNQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQkMsTUFBQUEsT0FBTyxFQUFFLFFBQTVCO0FBQXNDQyxNQUFBQSxPQUFPLEVBQUU7QUFBL0MsS0FIc0I7QUFISCxHQUF2QjtBQVNBLHNCQUNFLGdDQUFDLDRCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVULElBRFI7QUFFRSxJQUFBLGNBQWMsRUFBRUcsY0FGbEI7QUFHRSxJQUFBLGNBQWMsRUFBRUYsY0FIbEI7QUFJRSxJQUFBLGlCQUFpQixFQUFFQztBQUpyQixJQURGO0FBUUQ7O0FBRUQsU0FBU1EsV0FBVCxRQUF1RTtBQUFBLE1BQWhEVixJQUFnRCxTQUFoREEsSUFBZ0Q7QUFBQSxNQUExQ0MsY0FBMEMsU0FBMUNBLGNBQTBDO0FBQUEsTUFBMUJDLGlCQUEwQixTQUExQkEsaUJBQTBCO0FBQ3JFLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFFBQVEsRUFBRSxNQUZXO0FBR3JCQyxJQUFBQSxzQkFBc0IsRUFBRSxDQUN0QjtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxPQUFPLEVBQUU7QUFBeEIsS0FEc0IsRUFFdEI7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFBLE9BQU8sRUFBRTtBQUExQixLQUZzQixFQUd0QjtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQkMsTUFBQUEsT0FBTyxFQUFFO0FBQTVCLEtBSHNCO0FBSEgsR0FBdkI7QUFTQSxzQkFDRSxnQ0FBQyw0QkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFUixJQURSO0FBRUUsSUFBQSxjQUFjLEVBQUVHLGNBRmxCO0FBR0UsSUFBQSxjQUFjLEVBQUVGLGNBSGxCO0FBSUUsSUFBQSxpQkFBaUIsRUFBRUM7QUFKckIsSUFERjtBQVFEOztBQUVNLElBQU1TLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDO0FBRHdDLGtCQUVJLHFCQUFTLEVBQVQsQ0FGSjtBQUFBO0FBQUEsTUFFakNYLGNBRmlDO0FBQUEsTUFFakJDLGlCQUZpQjs7QUFHeEMsc0JBQ0UsMERBQ0UsK0RBREYsZUFFRSx1RUFGRixlQUdFLGdFQUFxQkQsY0FBYyxDQUFDWSxJQUFmLENBQW9CLElBQXBCLENBQXJCLENBSEYsZUFLRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLHNEQURGLGVBRUUsZ0NBQUMsT0FBRDtBQUFTLElBQUEsSUFBSSxFQUFFZiwwQkFBZjtBQUFxQixJQUFBLGNBQWMsRUFBRUMsY0FBckM7QUFBcUQsSUFBQSxpQkFBaUIsRUFBRUM7QUFBeEUsSUFGRixDQUxGLGVBVUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFWSxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUFBLFNBQVMsRUFBRTtBQUF0QztBQUFaLGtCQUNFLDBEQURGLGVBRUUsZ0NBQUMsV0FBRDtBQUFhLElBQUEsSUFBSSxFQUFFaEIsMEJBQW5CO0FBQXlCLElBQUEsY0FBYyxFQUFFQyxjQUF6QztBQUF5RCxJQUFBLGlCQUFpQixFQUFFQztBQUE1RSxJQUZGLENBVkYsQ0FERjtBQWlCRCxDQXBCTTs7O0FBcUJBLElBQU1lLElBQUksR0FBRyxrQkFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWNoYXJ0c0JhckNoYXJ0IGZyb20gJy4uL3JlY2hhcnRzLWJhci1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2tzL211bHRpcGxlLXZhbHVlcy5qc29uJztcblxuZnVuY3Rpb24gU3RhY2tlZCh7IGRhdGEsIGZpbHRlcmVkU2VyaWVzLCBzZXRGaWx0ZXJlZFNlcmllcyB9OiBhbnkpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgbGFiZWxLZXk6ICduYW1lJyxcbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiBbXG4gICAgICB7IGxhYmVsOiAnVVYnLCBkYXRhS2V5OiAndXYnIH0sXG4gICAgICB7IGxhYmVsOiAnTWFsZScsIGRhdGFLZXk6ICdtYWxlJywgc3RhY2tJZDogJ2dlbmRlcicgfSxcbiAgICAgIHsgbGFiZWw6ICdGZW1hbGUnLCBkYXRhS2V5OiAnZmVtYWxlJywgc3RhY2tJZDogJ2dlbmRlcicgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICBkYXRhPXtkYXRhfVxuICAgICAgY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfVxuICAgICAgZmlsdGVyZWRTZXJpZXM9e2ZpbHRlcmVkU2VyaWVzfVxuICAgICAgc2V0RmlsdGVyZWRTZXJpZXM9e3NldEZpbHRlcmVkU2VyaWVzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhdGVnb3JpemVkKHsgZGF0YSwgZmlsdGVyZWRTZXJpZXMsIHNldEZpbHRlcmVkU2VyaWVzIH06IGFueSkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsYWJlbEtleTogJ25hbWUnLFxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFtcbiAgICAgIHsgbGFiZWw6ICdVVicsIGRhdGFLZXk6ICd1dicgfSxcbiAgICAgIHsgbGFiZWw6ICdNYWxlJywgZGF0YUtleTogJ21hbGUnIH0sXG4gICAgICB7IGxhYmVsOiAnRmVtYWxlJywgZGF0YUtleTogJ2ZlbWFsZScgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICBkYXRhPXtkYXRhfVxuICAgICAgY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfVxuICAgICAgZmlsdGVyZWRTZXJpZXM9e2ZpbHRlcmVkU2VyaWVzfVxuICAgICAgc2V0RmlsdGVyZWRTZXJpZXM9e3NldEZpbHRlcmVkU2VyaWVzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgLy8gTk9URTogaXQnbGwgd29yayBpbnRlcm5hbGx5IGluIGNoYXJ0LCBpZiB5b3UgZG9uJ3QgcGFzcyB0aGlzIHByb3BcbiAgY29uc3QgW2ZpbHRlcmVkU2VyaWVzLCBzZXRGaWx0ZXJlZFNlcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5GaWx0ZXIgU3ViU2VyaWVzPC9oMT5cbiAgICAgIDxzdHJvbmc+VGlwOiBjbGljayBvbiBsZWdlbmQ8L3N0cm9uZz5cbiAgICAgIDxwPlNlcmllcyBmaWx0ZXJlZDoge2ZpbHRlcmVkU2VyaWVzLmpvaW4oJywgJyl9PC9wPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA2MDAsIGhlaWdodDogNDUwIH19PlxuICAgICAgICA8aDI+U3RhY2tlZDwvaDI+XG4gICAgICAgIDxTdGFja2VkIGRhdGE9e2RhdGF9IGZpbHRlcmVkU2VyaWVzPXtmaWx0ZXJlZFNlcmllc30gc2V0RmlsdGVyZWRTZXJpZXM9e3NldEZpbHRlcmVkU2VyaWVzfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDYwMCwgaGVpZ2h0OiA0NTAsIG1hcmdpblRvcDogMTAwIH19PlxuICAgICAgICA8aDI+Q2F0ZWdvcml6ZWQ8L2gyPlxuICAgICAgICA8Q2F0ZWdvcml6ZWQgZGF0YT17ZGF0YX0gZmlsdGVyZWRTZXJpZXM9e2ZpbHRlcmVkU2VyaWVzfSBzZXRGaWx0ZXJlZFNlcmllcz17c2V0RmlsdGVyZWRTZXJpZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdGaWx0ZXIgU3ViU2VyaWVzJztcbiJdfQ==