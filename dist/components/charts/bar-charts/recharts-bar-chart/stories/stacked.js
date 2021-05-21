"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _rechartsBarChart = _interopRequireDefault(require("../recharts-bar-chart"));

var _multipleValues = _interopRequireDefault(require("./mocks/multiple-values.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  var configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    xAxis: {
      name: 'Page'
    },
    yAxis: {
      name: 'Mock Value'
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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Stacked"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _multipleValues["default"],
    configurations: configurations
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "Transposed"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _multipleValues["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      transposed: true
    })
  })));
};

exports.content = content;
var name = 'Stacked';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL3N0YWNrZWQudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJDb250ZW50IiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsIndpdGhMZWdlbmQiLCJsYWJlbEtleSIsInhBeGlzIiwibmFtZSIsInlBeGlzIiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsInN0YWNrSWQiLCJ3aWR0aCIsImhlaWdodCIsImRhdGEiLCJ0cmFuc3Bvc2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUUsS0FGUztBQUdyQkMsSUFBQUEsUUFBUSxFQUFFLE1BSFc7QUFJckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQUpjO0FBT3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FQYztBQVVyQkUsSUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEI7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsT0FBTyxFQUFFO0FBQXhCLEtBRHNCLEVBRXRCO0FBQUVELE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxNQUFBQSxPQUFPLEVBQUUsTUFBMUI7QUFBa0NDLE1BQUFBLE9BQU8sRUFBRTtBQUEzQyxLQUZzQixFQUVpQztBQUN2RDtBQUFFRixNQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQkMsTUFBQUEsT0FBTyxFQUFFLFFBQTVCO0FBQXNDQyxNQUFBQSxPQUFPLEVBQUU7QUFBL0MsS0FIc0I7QUFWSCxHQUF2QjtBQWdCQSxzQkFDRSwwREFDRSxzREFERixlQUVFLHNEQUZGLGVBR0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRUMsMEJBQXhCO0FBQThCLElBQUEsY0FBYyxFQUFFYjtBQUE5QyxJQURGLENBSEYsZUFPRSx5REFQRixlQVFFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRVcsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUMsMEJBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RiLGNBRFM7QUFFWmMsTUFBQUEsVUFBVSxFQUFFO0FBRkE7QUFGaEIsSUFERixDQVJGLENBREY7QUFvQkQsQ0FyQ007OztBQXNDQSxJQUFNVCxJQUFJLEdBQUcsU0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVjaGFydHNCYXJDaGFydCBmcm9tICcuLi9yZWNoYXJ0cy1iYXItY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2Nrcy9tdWx0aXBsZS12YWx1ZXMuanNvbic7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogZmFsc2UsXG4gICAgbGFiZWxLZXk6ICduYW1lJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ1BhZ2UnLFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdNb2NrIFZhbHVlJyxcbiAgICB9LFxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFtcbiAgICAgIHsgbGFiZWw6ICdVVicsIGRhdGFLZXk6ICd1dicgfSxcbiAgICAgIHsgbGFiZWw6ICdNYWxlJywgZGF0YUtleTogJ21hbGUnLCBzdGFja0lkOiAnZ2VuZGVyJyB9LCAvLyBIRVJFLCB1c2Ugc3RhY2tJZFxuICAgICAgeyBsYWJlbDogJ0ZlbWFsZScsIGRhdGFLZXk6ICdmZW1hbGUnLCBzdGFja0lkOiAnZ2VuZGVyJyB9LFxuICAgIF0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5TdGFja2VkPC9oMT5cbiAgICAgIDxoMj5EZWZhdWx0PC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDI+VHJhbnNwb3NlZDwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8UmVjaGFydHNCYXJDaGFydFxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgY29uZmlndXJhdGlvbnM9e3tcbiAgICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb25zLFxuICAgICAgICAgICAgdHJhbnNwb3NlZDogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnU3RhY2tlZCc7XG4iXX0=