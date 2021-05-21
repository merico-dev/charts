"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _multipleSeriesLineChart = _interopRequireDefault(require("../multiple-series-line-chart"));

var _mock = _interopRequireDefault(require("./mocks/mock.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
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
  var seriesWithColor = (0, _react.useMemo)(function () {
    return _mock["default"].dataSets.map(function (item, index) {
      return _objectSpread(_objectSpread({}, item), {}, {
        color: index > 5 ? 'blue' : 'red'
      });
    });
  }, [_mock["default"]]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Custom Stroke Color"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: seriesWithColor,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Custom Stroke Color';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL2NvbG9yLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsInNlcmllc0RhdGFLZXkiLCJzZXJpZXNOYW1lS2V5Iiwic2VyaWVzTmFtZUZvcm1hdHRlciIsInNlcmllcyIsImRldmVsb3BlciIsInByaW1hcnlFbWFpbCIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0Iiwic2VyaWVzV2l0aENvbG9yIiwiZGF0YSIsImRhdGFTZXRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUUsSUFGUztBQUdyQkMsSUFBQUEsaUJBQWlCLEVBQUUsVUFIRTtBQUlyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBSmM7QUFPckJDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVBjO0FBVXJCRSxJQUFBQSxhQUFhLEVBQUUsU0FWTTtBQVdyQkMsSUFBQUEsYUFBYSxFQUFFLGlCQVhNO0FBWXJCQyxJQUFBQSxtQkFBbUIsRUFBRSw2QkFBQ0MsTUFBRDtBQUFBLHVCQUFvQkEsTUFBTSxDQUFDQyxTQUFQLENBQWlCTixJQUFyQyxlQUE4Q0ssTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxZQUEvRDtBQUFBLEtBWkE7QUFhckJDLElBQUFBLFFBQVEsRUFBRSxNQWJXO0FBY3JCQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsSUFBSSxFQUFFLFdBRFE7QUFFZEMsTUFBQUEsTUFBTSxFQUFFO0FBRk07QUFkSyxHQUF2QjtBQW9CQSxNQUFNQyxlQUFlLEdBQUcsb0JBQVEsWUFBTTtBQUNwQyxXQUFPQyxpQkFBS0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDZDQUNwQkQsSUFEb0I7QUFFdkJFLFFBQUFBLEtBQUssRUFBRUQsS0FBSyxHQUFHLENBQVIsR0FBWSxNQUFaLEdBQXFCO0FBRkw7QUFBQSxLQUFsQixDQUFQO0FBSUQsR0FMdUIsRUFLckIsQ0FBQ0osZ0JBQUQsQ0FMcUIsQ0FBeEI7QUFNQSxzQkFDRSwwREFDRSxrRUFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRU0sTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsbUNBQUQ7QUFBeUIsSUFBQSxNQUFNLEVBQUVSLGVBQWpDO0FBQWtELElBQUEsY0FBYyxFQUFFakI7QUFBbEUsSUFERixDQUZGLENBREY7QUFRRCxDQW5DTTs7O0FBb0NBLElBQU1LLElBQUksR0FBRyxxQkFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE11bHRpcGxlU2VyaWVzTGluZUNoYXJ0IGZyb20gJy4uL211bHRpcGxlLXNlcmllcy1saW5lLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9ja3MvbW9jay5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiB0cnVlLFxuICAgIGludGVycG9sYXRpb25UeXBlOiAnbW9ub3RvbmUnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIHNlcmllc0RhdGFLZXk6ICdkYXRhU2V0JyxcbiAgICBzZXJpZXNOYW1lS2V5OiAnZGV2ZWxvcGVyJC5uYW1lJyxcbiAgICBzZXJpZXNOYW1lRm9ybWF0dGVyOiAoc2VyaWVzOiBhbnkpID0+IGAke3Nlcmllcy5kZXZlbG9wZXIubmFtZX0gPCR7c2VyaWVzLmRldmVsb3Blci5wcmltYXJ5RW1haWx9PmAsXG4gICAgbGFiZWxLZXk6ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ0RBVEVfVElNRScsXG4gICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHNlcmllc1dpdGhDb2xvciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBkYXRhLmRhdGFTZXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XG4gICAgICAuLi5pdGVtLFxuICAgICAgY29sb3I6IGluZGV4ID4gNSA/ICdibHVlJyA6ICdyZWQnLFxuICAgIH0pKTtcbiAgfSwgW2RhdGFdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkN1c3RvbSBTdHJva2UgQ29sb3I8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPE11bHRpcGxlU2VyaWVzTGluZUNoYXJ0IHNlcmllcz17c2VyaWVzV2l0aENvbG9yfSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdDdXN0b20gU3Ryb2tlIENvbG9yJztcbiJdfQ==