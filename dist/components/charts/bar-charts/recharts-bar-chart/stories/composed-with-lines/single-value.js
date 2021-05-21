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

var _rechartsBarChart = _interopRequireDefault(require("../../recharts-bar-chart"));

var _singleValue = _interopRequireDefault(require("../mocks/single-value.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: false
    },
    labelKey: 'name',
    subSeriesConfiguration: [{
      label: 'Rounded Value',
      dataKey: 'value'
    }],
    composingLines: [{
      // HERE
      key: 'composing-line-trend',
      name: 'composing-line-trend',
      type: 'monotone',
      dataKey: 'value',
      stroke: '#ff7300'
    }],
    tooltipExcludedNames: ['composing-line-trend'] // HERE

  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Composed with Line (Single Value)"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: configurations
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "Transposed"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      transposed: true,
      yAxis: {
        axisLine: false,
        tickLine: false
      }
    })
  })));
};

exports.content = content;
var name = 'Composed with Line - Single Value';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2NvbXBvc2VkLXdpdGgtbGluZXMvc2luZ2xlLXZhbHVlLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJsZWdlbmQiLCJlbmFibGVkIiwibGFiZWxLZXkiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5IiwiY29tcG9zaW5nTGluZXMiLCJrZXkiLCJuYW1lIiwidHlwZSIsInN0cm9rZSIsInRvb2x0aXBFeGNsdWRlZE5hbWVzIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nQm90dG9tIiwiZGF0YSIsInRyYW5zcG9zZWQiLCJ5QXhpcyIsImF4aXNMaW5lIiwidGlja0xpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESCxLQUZhO0FBS3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFMVztBQU1yQkMsSUFBQUEsc0JBQXNCLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUUsZUFBVDtBQUEwQkMsTUFBQUEsT0FBTyxFQUFFO0FBQW5DLEtBQUQsQ0FOSDtBQU9yQkMsSUFBQUEsY0FBYyxFQUFFLENBQ2Q7QUFDRTtBQUNBQyxNQUFBQSxHQUFHLEVBQUUsc0JBRlA7QUFHRUMsTUFBQUEsSUFBSSxFQUFFLHNCQUhSO0FBSUVDLE1BQUFBLElBQUksRUFBRSxVQUpSO0FBS0VKLE1BQUFBLE9BQU8sRUFBRSxPQUxYO0FBTUVLLE1BQUFBLE1BQU0sRUFBRTtBQU5WLEtBRGMsQ0FQSztBQWlCckJDLElBQUFBLG9CQUFvQixFQUFFLENBQUMsc0JBQUQsQ0FqQkQsQ0FpQjJCOztBQWpCM0IsR0FBdkI7QUFtQkEsc0JBQ0UsMERBQ0UsZ0ZBREYsZUFFRSxzREFGRixlQUdFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFBQSxhQUFhLEVBQUU7QUFBMUM7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRUMsdUJBQXhCO0FBQThCLElBQUEsY0FBYyxFQUFFakI7QUFBOUMsSUFERixDQUhGLGVBT0UseURBUEYsZUFRRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVjLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRSxHQUF0QjtBQUEyQkMsTUFBQUEsYUFBYSxFQUFFO0FBQTFDO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUMsdUJBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RqQixjQURTO0FBRVprQixNQUFBQSxVQUFVLEVBQUUsSUFGQTtBQUdaQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsUUFBUSxFQUFFLEtBREw7QUFFTEMsUUFBQUEsUUFBUSxFQUFFO0FBRkw7QUFISztBQUZoQixJQURGLENBUkYsQ0FERjtBQXdCRCxDQTVDTTs7O0FBNkNBLElBQU1YLElBQUksR0FBRyxtQ0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVjaGFydHNCYXJDaGFydCBmcm9tICcuLi8uLi9yZWNoYXJ0cy1iYXItY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vbW9ja3Mvc2luZ2xlLXZhbHVlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIGxlZ2VuZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBsYWJlbEtleTogJ25hbWUnLFxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFt7IGxhYmVsOiAnUm91bmRlZCBWYWx1ZScsIGRhdGFLZXk6ICd2YWx1ZScgfV0sXG4gICAgY29tcG9zaW5nTGluZXM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gSEVSRVxuICAgICAgICBrZXk6ICdjb21wb3NpbmctbGluZS10cmVuZCcsXG4gICAgICAgIG5hbWU6ICdjb21wb3NpbmctbGluZS10cmVuZCcsXG4gICAgICAgIHR5cGU6ICdtb25vdG9uZScsXG4gICAgICAgIGRhdGFLZXk6ICd2YWx1ZScsXG4gICAgICAgIHN0cm9rZTogJyNmZjczMDAnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHRvb2x0aXBFeGNsdWRlZE5hbWVzOiBbJ2NvbXBvc2luZy1saW5lLXRyZW5kJ10sIC8vIEhFUkVcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNvbXBvc2VkIHdpdGggTGluZSAoU2luZ2xlIFZhbHVlKTwvaDE+XG4gICAgICA8aDI+RGVmYXVsdDwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBwYWRkaW5nQm90dG9tOiAxMDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDI+VHJhbnNwb3NlZDwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBwYWRkaW5nQm90dG9tOiAxMDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICB0cmFuc3Bvc2VkOiB0cnVlLFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgYXhpc0xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdDb21wb3NlZCB3aXRoIExpbmUgLSBTaW5nbGUgVmFsdWUnO1xuIl19