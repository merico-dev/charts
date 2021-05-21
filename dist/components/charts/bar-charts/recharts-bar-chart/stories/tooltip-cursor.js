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

var _lodash = require("lodash");

var _rechartsBarChart = _interopRequireDefault(require("../recharts-bar-chart"));

var _singleValue = _interopRequireDefault(require("./mocks/single-value.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: false
    },
    labelKey: 'name',
    valueFormatter: function valueFormatter(v) {
      return (0, _lodash.round)(v, 0);
    },
    xAxis: {
      name: 'Series'
    },
    yAxis: {
      name: 'Mock Value',
      axisLine: false,
      tickLine: false
    },
    subSeriesConfiguration: [{
      label: 'Rounded Value',
      dataKey: 'value',
      valueLabel: {
        enabled: true
      }
    }],
    transposed: true
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Tooltip Cursor (Dark Background Bar)"), /*#__PURE__*/_react["default"].createElement("h2", null, "Before"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: configurations
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "After"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      tooltipCursor: {
        fill: 'transparent'
      } // HERE

    })
  })));
};

exports.content = content;
var name = 'Tooltip Cursor';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL3Rvb2x0aXAtY3Vyc29yLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJsZWdlbmQiLCJlbmFibGVkIiwibGFiZWxLZXkiLCJ2YWx1ZUZvcm1hdHRlciIsInYiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsImF4aXNMaW5lIiwidGlja0xpbmUiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5IiwidmFsdWVMYWJlbCIsInRyYW5zcG9zZWQiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJkYXRhIiwidG9vbHRpcEN1cnNvciIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESCxLQUZhO0FBS3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFMVztBQU1yQkMsSUFBQUEsY0FBYyxFQUFFLHdCQUFDQyxDQUFEO0FBQUEsYUFBWSxtQkFBTUEsQ0FBTixFQUFTLENBQVQsQ0FBWjtBQUFBLEtBTks7QUFPckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVBjO0FBVXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFLFlBREQ7QUFFTEUsTUFBQUEsUUFBUSxFQUFFLEtBRkw7QUFHTEMsTUFBQUEsUUFBUSxFQUFFO0FBSEwsS0FWYztBQWVyQkMsSUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEI7QUFDRUMsTUFBQUEsS0FBSyxFQUFFLGVBRFQ7QUFFRUMsTUFBQUEsT0FBTyxFQUFFLE9BRlg7QUFHRUMsTUFBQUEsVUFBVSxFQUFFO0FBQUVaLFFBQUFBLE9BQU8sRUFBRTtBQUFYO0FBSGQsS0FEc0IsQ0FmSDtBQXNCckJhLElBQUFBLFVBQVUsRUFBRTtBQXRCUyxHQUF2QjtBQXdCQSxzQkFDRSwwREFDRSxtRkFERixlQUVFLHFEQUZGLGVBR0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUFBLGFBQWEsRUFBRTtBQUExQztBQUFaLGtCQUNFLGdDQUFDLDRCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFQyx1QkFBeEI7QUFBOEIsSUFBQSxjQUFjLEVBQUVwQjtBQUE5QyxJQURGLENBSEYsZUFNRSxvREFORixlQU9FO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRWlCLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRSxHQUF0QjtBQUEyQkMsTUFBQUEsYUFBYSxFQUFFO0FBQTFDO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUMsdUJBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RwQixjQURTO0FBRVpxQixNQUFBQSxhQUFhLEVBQUU7QUFBRUMsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FGSCxDQUU0Qjs7QUFGNUI7QUFGaEIsSUFERixDQVBGLENBREY7QUFtQkQsQ0E1Q007OztBQTZDQSxJQUFNZCxJQUFJLEdBQUcsZ0JBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9ja3Mvc2luZ2xlLXZhbHVlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIGxlZ2VuZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBsYWJlbEtleTogJ25hbWUnLFxuICAgIHZhbHVlRm9ybWF0dGVyOiAodjogYW55KSA9PiByb3VuZCh2LCAwKSxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ1NlcmllcycsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ01vY2sgVmFsdWUnLFxuICAgICAgYXhpc0xpbmU6IGZhbHNlLFxuICAgICAgdGlja0xpbmU6IGZhbHNlLFxuICAgIH0sXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1JvdW5kZWQgVmFsdWUnLFxuICAgICAgICBkYXRhS2V5OiAndmFsdWUnLFxuICAgICAgICB2YWx1ZUxhYmVsOiB7IGVuYWJsZWQ6IHRydWUgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICB0cmFuc3Bvc2VkOiB0cnVlLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VG9vbHRpcCBDdXJzb3IgKERhcmsgQmFja2dyb3VuZCBCYXIpPC9oMT5cbiAgICAgIDxoMj5CZWZvcmU8L2gyPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCwgcGFkZGluZ0JvdHRvbTogMTAwIH19PlxuICAgICAgICA8UmVjaGFydHNCYXJDaGFydCBkYXRhPXtkYXRhfSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMj5BZnRlcjwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBwYWRkaW5nQm90dG9tOiAxMDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICB0b29sdGlwQ3Vyc29yOiB7IGZpbGw6ICd0cmFuc3BhcmVudCcgfSwgLy8gSEVSRVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdUb29sdGlwIEN1cnNvcic7XG4iXX0=