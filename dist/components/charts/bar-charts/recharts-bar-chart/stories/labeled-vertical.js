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
  var transposedSubSeriesConfiguration = [{
    // label: 'Rounded Value',
    dataKey: 'value',
    stackId: 'value',
    barSize: 32,
    fill: '#F0876A',
    borderRadius: 4 // HERE

  }];
  var configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    getCustomTick: function renderCustomTick(_ref) {
      var x = _ref.x,
          y = _ref.y,
          valueText = _ref.valueText;
      // HERE
      var TICK_FONT_SIZE = 14;
      var SHIFT = TICK_FONT_SIZE / 2;
      var Y_FONT_SHIFT = 2;
      return /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(".concat(x, ",").concat(y + SHIFT - Y_FONT_SHIFT, ")")
      }, /*#__PURE__*/_react["default"].createElement("svg", null, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("filter", {
        id: "arc-shadow"
      }, /*#__PURE__*/_react["default"].createElement("feDropShadow", {
        dx: "1",
        dy: "0",
        stdDeviation: "1",
        floodColor: "rgb(0,0,0)",
        floodOpacity: 0.15
      })))), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "13",
        cy: "-5",
        r: "10",
        fill: "#F5F5F7",
        filter: "url(#arc-shadow)"
      }), /*#__PURE__*/_react["default"].createElement("text", {
        x: "7",
        y: "-1",
        fontSize: "10",
        fill: "#32333B"
      }, valueText.slice(0, 2)), /*#__PURE__*/_react["default"].createElement("text", {
        className: "x-tick",
        x: "28",
        y: 0,
        fontSize: TICK_FONT_SIZE,
        fill: "#32333B"
      }, valueText));
    },
    valueFormatter: function valueFormatter(v) {
      return (0, _lodash.round)(v, 0);
    },
    labelTickFormatter: function labelTickFormatter(t) {
      return t.slice(6);
    },
    xAxis: {
      axisLine: false,
      tickLine: false,
      mirror: true,
      padding: {
        top: 10
      }
    },
    yAxis: {
      tickMargin: 10,
      tickLine: false,
      tickTextColor: '#C1C1C7',
      // HERE
      axisLine: {
        stroke: '#E0E0E5' // HERE

      }
    },
    cartesianGrid: {
      horizontal: false,
      vertical: false
    },
    legend: {
      enabled: false
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Icon and labels on vertical bars"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 500,
      paddingBottom: 50
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      subSeriesConfiguration: transposedSubSeriesConfiguration,
      transposed: true
    })
  })));
};

exports.content = content;
var name = 'Icon and labels on vertical bars';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2xhYmVsZWQtdmVydGljYWwudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJDb250ZW50IiwidHJhbnNwb3NlZFN1YlNlcmllc0NvbmZpZ3VyYXRpb24iLCJkYXRhS2V5Iiwic3RhY2tJZCIsImJhclNpemUiLCJmaWxsIiwiYm9yZGVyUmFkaXVzIiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsIndpdGhMZWdlbmQiLCJsYWJlbEtleSIsImdldEN1c3RvbVRpY2siLCJyZW5kZXJDdXN0b21UaWNrIiwieCIsInkiLCJ2YWx1ZVRleHQiLCJUSUNLX0ZPTlRfU0laRSIsIlNISUZUIiwiWV9GT05UX1NISUZUIiwic2xpY2UiLCJ2YWx1ZUZvcm1hdHRlciIsInYiLCJsYWJlbFRpY2tGb3JtYXR0ZXIiLCJ0IiwieEF4aXMiLCJheGlzTGluZSIsInRpY2tMaW5lIiwibWlycm9yIiwicGFkZGluZyIsInRvcCIsInlBeGlzIiwidGlja01hcmdpbiIsInRpY2tUZXh0Q29sb3IiLCJzdHJva2UiLCJjYXJ0ZXNpYW5HcmlkIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwibGVnZW5kIiwiZW5hYmxlZCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImRhdGEiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwidHJhbnNwb3NlZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLGdDQUFnQyxHQUFHLENBQ3ZDO0FBQ0U7QUFDQUMsSUFBQUEsT0FBTyxFQUFFLE9BRlg7QUFHRUMsSUFBQUEsT0FBTyxFQUFFLE9BSFg7QUFJRUMsSUFBQUEsT0FB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QWlEckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESDtBQWpEYSxHQUF2QjtBQXFEQSxzQkFDRSwwREFDRSwrRUFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFBQSxhQUFhLEVBQUU7QUFBMUM7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFQyx1QkFEUjtBQUVFLElBQUEsY0FBYyxrQ0FDVG5DLGNBRFM7QUFFWm9DLE1BQUFBLHNCQUFzQixFQUFFMUMsZ0NBRlo7QUFHWjJDLE1BQUFBLFVBQVUsRUFBRTtBQUhBO0FBRmhCLElBREYsQ0FGRixDQURGO0FBZUQsQ0EvRU07OztBQWdGQSxJQUFNQyxJQUFJLEdBQUcsa0NBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9ja3Mvc2luZ2xlLXZhbHVlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IHRyYW5zcG9zZWRTdWJTZXJpZXNDb25maWd1cmF0aW9uID0gW1xuICAgIHtcbiAgICAgIC8vIGxhYmVsOiAnUm91bmRlZCBWYWx1ZScsXG4gICAgICBkYXRhS2V5OiAndmFsdWUnLFxuICAgICAgc3RhY2tJZDogJ3ZhbHVlJyxcbiAgICAgIGJhclNpemU6IDMyLFxuICAgICAgZmlsbDogJyNGMDg3NkEnLFxuICAgICAgYm9yZGVyUmFkaXVzOiA0LCAvLyBIRVJFXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogZmFsc2UsXG4gICAgbGFiZWxLZXk6ICduYW1lJyxcbiAgICBnZXRDdXN0b21UaWNrOiBmdW5jdGlvbiByZW5kZXJDdXN0b21UaWNrKHsgeCwgeSwgdmFsdWVUZXh0IH06IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHZhbHVlVGV4dDogYW55IH0pIHtcbiAgICAgIC8vIEhFUkVcbiAgICAgIGNvbnN0IFRJQ0tfRk9OVF9TSVpFID0gMTQ7XG4gICAgICBjb25zdCBTSElGVCA9IFRJQ0tfRk9OVF9TSVpFIC8gMjtcbiAgICAgIGNvbnN0IFlfRk9OVF9TSElGVCA9IDI7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3h9LCR7eSArIFNISUZUIC0gWV9GT05UX1NISUZUfSlgfT5cbiAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJhcmMtc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPGZlRHJvcFNoYWRvdyBkeD1cIjFcIiBkeT1cIjBcIiBzdGREZXZpYXRpb249XCIxXCIgZmxvb2RDb2xvcj1cInJnYigwLDAsMClcIiBmbG9vZE9wYWNpdHk9ezAuMTV9IC8+XG4gICAgICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCIxM1wiIGN5PVwiLTVcIiByPVwiMTBcIiBmaWxsPVwiI0Y1RjVGN1wiIGZpbHRlcj1cInVybCgjYXJjLXNoYWRvdylcIiAvPlxuICAgICAgICAgIDx0ZXh0IHg9XCI3XCIgeT1cIi0xXCIgZm9udFNpemU9XCIxMFwiIGZpbGw9XCIjMzIzMzNCXCI+XG4gICAgICAgICAgICB7dmFsdWVUZXh0LnNsaWNlKDAsIDIpfVxuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzc05hbWU9XCJ4LXRpY2tcIiB4PVwiMjhcIiB5PXswfSBmb250U2l6ZT17VElDS19GT05UX1NJWkV9IGZpbGw9XCIjMzIzMzNCXCI+XG4gICAgICAgICAgICB7dmFsdWVUZXh0fVxuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgPC9nPlxuICAgICAgKTtcbiAgICB9LFxuICAgIHZhbHVlRm9ybWF0dGVyOiAodjogYW55KSA9PiByb3VuZCh2LCAwKSxcbiAgICBsYWJlbFRpY2tGb3JtYXR0ZXI6ICh0OiBhbnkpID0+IHQuc2xpY2UoNiksXG4gICAgeEF4aXM6IHtcbiAgICAgIGF4aXNMaW5lOiBmYWxzZSxcbiAgICAgIHRpY2tMaW5lOiBmYWxzZSxcbiAgICAgIG1pcnJvcjogdHJ1ZSxcbiAgICAgIHBhZGRpbmc6IHsgdG9wOiAxMCB9LFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIHRpY2tNYXJnaW46IDEwLFxuICAgICAgdGlja0xpbmU6IGZhbHNlLFxuICAgICAgdGlja1RleHRDb2xvcjogJyNDMUMxQzcnLCAvLyBIRVJFXG4gICAgICBheGlzTGluZToge1xuICAgICAgICBzdHJva2U6ICcjRTBFMEU1JywgLy8gSEVSRVxuICAgICAgfSxcbiAgICB9LFxuICAgIGNhcnRlc2lhbkdyaWQ6IHtcbiAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SWNvbiBhbmQgbGFiZWxzIG9uIHZlcnRpY2FsIGJhcnM8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDUwMCwgcGFkZGluZ0JvdHRvbTogNTAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiB0cmFuc3Bvc2VkU3ViU2VyaWVzQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIHRyYW5zcG9zZWQ6IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0ljb24gYW5kIGxhYmVscyBvbiB2ZXJ0aWNhbCBiYXJzJztcbiJdfQ==