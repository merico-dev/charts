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
      // HERE
      tickLine: false // HERE

    },
    subSeriesConfiguration: [{
      label: 'Rounded Value',
      dataKey: 'value',
      valueLabel: {
        enabled: true
      }
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Hide Axis Line"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
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
      legend: {
        enabled: true,
        align: 'center',
        verticalAlign: 'bottom' // HERE

      }
    })
  })));
};

exports.content = content;
var name = 'Hide Axis Line';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2hpZGUtYXhpcy1saW5lLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJsZWdlbmQiLCJlbmFibGVkIiwibGFiZWxLZXkiLCJ2YWx1ZUZvcm1hdHRlciIsInYiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsImF4aXNMaW5lIiwidGlja0xpbmUiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5IiwidmFsdWVMYWJlbCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImRhdGEiLCJ0cmFuc3Bvc2VkIiwiYWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsT0FBTyxFQUFFO0FBREgsS0FGYTtBQUtyQkMsSUFBQUEsUUFBUSxFQUFFLE1BTFc7QUFNckJDLElBQUFBLGNBQWMsRUFBRSx3QkFBQ0MsQ0FBRDtBQUFBLGFBQVksbUJBQU1BLENBQU4sRUFBUyxDQUFULENBQVo7QUFBQSxLQU5LO0FBT3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FQYztBQVVyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLElBQUksRUFBRSxZQUREO0FBRUxFLE1BQUFBLFFBQVEsRUFBRSxLQUZMO0FBRVk7QUFDakJDLE1BQUFBLFFBQVEsRUFBRSxLQUhMLENBR1k7O0FBSFosS0FWYztBQWVyQkMsSUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEI7QUFDRUMsTUFBQUEsS0FBSyxFQUFFLGVBRFQ7QUFFRUMsTUFBQUEsT0FBTyxFQUFFLE9BRlg7QUFHRUMsTUFBQUEsVUFBVSxFQUFFO0FBQUVaLFFBQUFBLE9BQU8sRUFBRTtBQUFYO0FBSGQsS0FEc0I7QUFmSCxHQUF2QjtBQXVCQSxzQkFDRSwwREFDRSw2REFERixlQUVFLHNEQUZGLGVBR0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFYSxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUFBLGFBQWEsRUFBRTtBQUExQztBQUFaLGtCQUNFLGdDQUFDLDRCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFQyx1QkFBeEI7QUFBOEIsSUFBQSxjQUFjLEVBQUVuQjtBQUE5QyxJQURGLENBSEYsZUFNRSx5REFORixlQU9FO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRWdCLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRSxHQUF0QjtBQUEyQkMsTUFBQUEsYUFBYSxFQUFFO0FBQTFDO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUMsdUJBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RuQixjQURTO0FBRVpvQixNQUFBQSxVQUFVLEVBQUUsSUFGQTtBQUdabEIsTUFBQUEsTUFBTSxFQUFFO0FBQ05DLFFBQUFBLE9BQU8sRUFBRSxJQURIO0FBRU5rQixRQUFBQSxLQUFLLEVBQUUsUUFGRDtBQUdOQyxRQUFBQSxhQUFhLEVBQUUsUUFIVCxDQUdtQjs7QUFIbkI7QUFISTtBQUZoQixJQURGLENBUEYsQ0FERjtBQXdCRCxDQWhETTs7O0FBaURBLElBQU1kLElBQUksR0FBRyxnQkFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVjaGFydHNCYXJDaGFydCBmcm9tICcuLi9yZWNoYXJ0cy1iYXItY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2Nrcy9zaW5nbGUtdmFsdWUuanNvbic7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgbGVnZW5kOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAnbmFtZScsXG4gICAgdmFsdWVGb3JtYXR0ZXI6ICh2OiBhbnkpID0+IHJvdW5kKHYsIDApLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnU2VyaWVzJyxcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICBuYW1lOiAnTW9jayBWYWx1ZScsXG4gICAgICBheGlzTGluZTogZmFsc2UsIC8vIEhFUkVcbiAgICAgIHRpY2tMaW5lOiBmYWxzZSwgLy8gSEVSRVxuICAgIH0sXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1JvdW5kZWQgVmFsdWUnLFxuICAgICAgICBkYXRhS2V5OiAndmFsdWUnLFxuICAgICAgICB2YWx1ZUxhYmVsOiB7IGVuYWJsZWQ6IHRydWUgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhpZGUgQXhpcyBMaW5lPC9oMT5cbiAgICAgIDxoMj5EZWZhdWx0PC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAsIHBhZGRpbmdCb3R0b206IDEwMCB9fT5cbiAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnQgZGF0YT17ZGF0YX0gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDI+VHJhbnNwb3NlZDwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBwYWRkaW5nQm90dG9tOiAxMDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICB0cmFuc3Bvc2VkOiB0cnVlLFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbScsIC8vIEhFUkVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0hpZGUgQXhpcyBMaW5lJztcbiJdfQ==