"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

var _singleSeriesLineChart = _interopRequireDefault(require("../single-series-line-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

var renderDot = function renderDot(props) {
  return /*#__PURE__*/_react["default"].createElement(Recharts.Dot, (0, _extends2["default"])({}, props, {
    fill: "rgb(237, 106, 69)",
    stroke: "#fff",
    r: 7,
    strokeWidth: 0
  }));
};

var renderActiveDot = function renderActiveDot(props) {
  return /*#__PURE__*/_react["default"].createElement(Recharts.Dot, (0, _extends2["default"])({}, props, {
    fill: "rgb(237, 106, 69)",
    stroke: "#fff",
    r: 10,
    strokeWidth: 0
  }));
};

var content = function Content() {
  var index = 0;
  var configurations = {
    withTooltip: true,
    withLegend: false,
    cartesianGrid: {
      horizontal: false,
      vertical: false
    },
    cartesianGridStyle: {
      stroke: '#DEDFE3'
    },
    interpolationType: 'linear',
    storkeColor: 'rgb(240, 135, 106)',
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
    renderDot: renderDot,
    // HERE
    renderActiveDot: renderActiveDot // HERE

  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Bouncy Dot (hover on dots)"), /*#__PURE__*/_react["default"].createElement("div", {
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
var name = 'Bouncy Dot';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9ib3VuY3ktZG90LnRzeCJdLCJuYW1lcyI6WyJyZW5kZXJEb3QiLCJwcm9wcyIsInJlbmRlckFjdGl2ZURvdCIsImNvbnRlbnQiLCJDb250ZW50IiwiaW5kZXgiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwid2l0aExlZ2VuZCIsImNhcnRlc2lhbkdyaWQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJjYXJ0ZXNpYW5HcmlkU3R5bGUiLCJzdHJva2UiLCJpbnRlcnBvbGF0aW9uVHlwZSIsInN0b3JrZUNvbG9yIiwieEF4aXMiLCJuYW1lIiwieUF4aXMiLCJsYWJlbEtleSIsImxhYmVsRm9ybWF0dGVyIiwidHlwZSIsImZvcm1hdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSIsImRhdGFTZXRzIiwiZGF0YVNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxzQkFDaEIsZ0NBQUMsUUFBRCxDQUFVLEdBQVYsZ0NBQWtCQSxLQUFsQjtBQUF5QixJQUFBLElBQUksRUFBQyxtQkFBOUI7QUFBa0QsSUFBQSxNQUFNLEVBQUMsTUFBekQ7QUFBZ0UsSUFBQSxDQUFDLEVBQUUsQ0FBbkU7QUFBc0UsSUFBQSxXQUFXLEVBQUU7QUFBbkYsS0FEZ0I7QUFBQSxDQUFsQjs7QUFHQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNELEtBQUQ7QUFBQSxzQkFDdEIsZ0NBQUMsUUFBRCxDQUFVLEdBQVYsZ0NBQWtCQSxLQUFsQjtBQUF5QixJQUFBLElBQUksRUFBQyxtQkFBOUI7QUFBa0QsSUFBQSxNQUFNLEVBQUMsTUFBekQ7QUFBZ0UsSUFBQSxDQUFDLEVBQUUsRUFBbkU7QUFBdUUsSUFBQSxXQUFXLEVBQUU7QUFBcEYsS0FEc0I7QUFBQSxDQUF4Qjs7QUFJTyxJQUFNRSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUNBLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxLQUZTO0FBR3JCQyxJQUFBQSxhQUFhLEVBQUU7QUFDYkMsTUFBQUEsVUFBVSxFQUFFLEtBREM7QUFFYkMsTUFBQUEsUUFBUSxFQUFFO0FBRkcsS0FITTtBQU9yQkMsSUFBQUEsa0JBQWtCLEVBQUU7QUFDbEJDLE1BQUFBLE1BQU0sRUFBRTtBQURVLEtBUEM7QUFVckJDLElBQUFBLGlCQUFpQixFQUFFLFFBVkU7QUFXckJDLElBQUFBLFdBQVcsRUFBRSxvQkFYUTtBQVlyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBWmM7QUFlckJDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQWZjO0FBa0JyQkUsSUFBQUEsUUFBUSxFQUFFLE1BbEJXO0FBbUJyQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxXQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNLEtBbkJLO0FBdUJyQnRCLElBQUFBLFNBQVMsRUFBVEEsU0F2QnFCO0FBdUJWO0FBQ1hFLElBQUFBLGVBQWUsRUFBZkEsZUF4QnFCLENBd0JKOztBQXhCSSxHQUF2QjtBQTJCQSxzQkFDRSwwREFDRSx5RUFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRXFCLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLGlDQUFEO0FBQXVCLElBQUEsSUFBSSxFQUFFQyxpQkFBS0MsUUFBTCxDQUFjckIsS0FBZCxFQUFxQnNCLE9BQWxEO0FBQTJELElBQUEsY0FBYyxFQUFFckI7QUFBM0UsSUFERixDQUZGLENBREY7QUFRRCxDQXJDTTs7O0FBc0NBLElBQU1XLElBQUksR0FBRyxZQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlY2hhcnRzIGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCBTaW5nbGVTZXJpZXNMaW5lQ2hhcnQgZnJvbSAnLi4vc2luZ2xlLXNlcmllcy1saW5lLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9jay5qc29uJztcblxuY29uc3QgcmVuZGVyRG90ID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFJlY2hhcnRzLkRvdCB7Li4ucHJvcHN9IGZpbGw9XCJyZ2IoMjM3LCAxMDYsIDY5KVwiIHN0cm9rZT1cIiNmZmZcIiByPXs3fSBzdHJva2VXaWR0aD17MH0gLz5cbik7XG5jb25zdCByZW5kZXJBY3RpdmVEb3QgPSAocHJvcHM6IGFueSkgPT4gKFxuICA8UmVjaGFydHMuRG90IHsuLi5wcm9wc30gZmlsbD1cInJnYigyMzcsIDEwNiwgNjkpXCIgc3Ryb2tlPVwiI2ZmZlwiIHI9ezEwfSBzdHJva2VXaWR0aD17MH0gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgaW5kZXggPSAwO1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiBmYWxzZSxcbiAgICBjYXJ0ZXNpYW5HcmlkOiB7XG4gICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICB9LFxuICAgIGNhcnRlc2lhbkdyaWRTdHlsZToge1xuICAgICAgc3Ryb2tlOiAnI0RFREZFMycsXG4gICAgfSxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ2xpbmVhcicsXG4gICAgc3RvcmtlQ29sb3I6ICdyZ2IoMjQwLCAxMzUsIDEwNiknLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgICByZW5kZXJEb3QsIC8vIEhFUkVcbiAgICByZW5kZXJBY3RpdmVEb3QsIC8vIEhFUkVcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Qm91bmN5IERvdCAoaG92ZXIgb24gZG90cyk8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFNpbmdsZVNlcmllc0xpbmVDaGFydCBkYXRhPXtkYXRhLmRhdGFTZXRzW2luZGV4XS5kYXRhU2V0fSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdCb3VuY3kgRG90JztcbiJdfQ==