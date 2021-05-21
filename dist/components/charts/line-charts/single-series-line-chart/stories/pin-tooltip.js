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

var _singleSeriesLineChart = _interopRequireDefault(require("../single-series-line-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

var content = function Content() {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
      index = _useState2[0];

  var configurations = {
    withTooltip: true,
    withLegend: false,
    interpolationType: 'linear',
    storkeColor: '#CA4521',
    refInterpolationType: '',
    refInterpolationColor: '#2152ca',
    refRegressionType: 'regressionLinear',
    refRegressionColor: '#2152ca',
    xAxis: {
      name: 'Date'
    },
    yAxis: {
      name: 'Dev Equivalent'
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD'
    },
    onClick: console.log // HERE, by passing this handler to enable pinning tooltip

  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Pin Tooltip"), /*#__PURE__*/_react["default"].createElement("p", null, "Tip: When tooltip is shown, click anywhere in chart to pin it"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: _mock["default"].dataSets[index].dataSet,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Pin Tooltip';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9waW4tdG9vbHRpcC50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJpbmRleCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJzdG9ya2VDb2xvciIsInJlZkludGVycG9sYXRpb25UeXBlIiwicmVmSW50ZXJwb2xhdGlvbkNvbG9yIiwicmVmUmVncmVzc2lvblR5cGUiLCJyZWZSZWdyZXNzaW9uQ29sb3IiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0Iiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsImRhdGEiLCJkYXRhU2V0cyIsImRhdGFTZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUFBLGtCQUN4QixxQkFBUyxDQUFULENBRHdCO0FBQUE7QUFBQSxNQUNqQ0MsS0FEaUM7O0FBRXhDLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxLQUZTO0FBR3JCQyxJQUFBQSxpQkFBaUIsRUFBRSxRQUhFO0FBSXJCQyxJQUFBQSxXQUFXLEVBQUUsU0FKUTtBQUtyQkMsSUFBQUEsb0JBQW9CLEVBQUUsRUFMRDtBQU1yQkMsSUFBQUEscUJBQXFCLEVBQUUsU0FORjtBQU9yQkMsSUFBQUEsaUJBQWlCLEVBQUUsa0JBUEU7QUFRckJDLElBQUFBLGtCQUFrQixFQUFFLFNBUkM7QUFTckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVRjO0FBWXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FaYztBQWVyQkUsSUFBQUEsUUFBUSxFQUFFLE1BZlc7QUFnQnJCQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsSUFBSSxFQUFFLFdBRFE7QUFFZEMsTUFBQUEsTUFBTSxFQUFFO0FBRk0sS0FoQks7QUFvQnJCQyxJQUFBQSxPQUFPLEVBQUVDLE9BQU8sQ0FBQ0MsR0FwQkksQ0FvQkM7O0FBcEJELEdBQXZCO0FBc0JBLHNCQUNFLDBEQUNFLDBEQURGLGVBRUUsMkdBRkYsZUFHRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLGlDQUFEO0FBQXVCLElBQUEsSUFBSSxFQUFFQyxpQkFBS0MsUUFBTCxDQUFjdkIsS0FBZCxFQUFxQndCLE9BQWxEO0FBQTJELElBQUEsY0FBYyxFQUFFdkI7QUFBM0UsSUFERixDQUhGLENBREY7QUFTRCxDQWpDTTs7O0FBa0NBLElBQU1VLElBQUksR0FBRyxhQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpbmdsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IFtpbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogZmFsc2UsXG4gICAgaW50ZXJwb2xhdGlvblR5cGU6ICdsaW5lYXInLFxuICAgIHN0b3JrZUNvbG9yOiAnI0NBNDUyMScsXG4gICAgcmVmSW50ZXJwb2xhdGlvblR5cGU6ICcnLFxuICAgIHJlZkludGVycG9sYXRpb25Db2xvcjogJyMyMTUyY2EnLFxuICAgIHJlZlJlZ3Jlc3Npb25UeXBlOiAncmVncmVzc2lvbkxpbmVhcicsXG4gICAgcmVmUmVncmVzc2lvbkNvbG9yOiAnIzIxNTJjYScsXG4gICAgeEF4aXM6IHtcbiAgICAgIG5hbWU6ICdEYXRlJyxcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICBuYW1lOiAnRGV2IEVxdWl2YWxlbnQnLFxuICAgIH0sXG4gICAgbGFiZWxLZXk6ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ0RBVEVfVElNRScsXG4gICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICB9LFxuICAgIG9uQ2xpY2s6IGNvbnNvbGUubG9nLCAvLyBIRVJFLCBieSBwYXNzaW5nIHRoaXMgaGFuZGxlciB0byBlbmFibGUgcGlubmluZyB0b29sdGlwXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5QaW4gVG9vbHRpcDwvaDE+XG4gICAgICA8cD5UaXA6IFdoZW4gdG9vbHRpcCBpcyBzaG93biwgY2xpY2sgYW55d2hlcmUgaW4gY2hhcnQgdG8gcGluIGl0PC9wPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFNpbmdsZVNlcmllc0xpbmVDaGFydCBkYXRhPXtkYXRhLmRhdGFTZXRzW2luZGV4XS5kYXRhU2V0fSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdQaW4gVG9vbHRpcCc7XG4iXX0=