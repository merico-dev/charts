"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _rechartsBarChart = _interopRequireDefault(require("../recharts-bar-chart"));

var _singleValue = _interopRequireDefault(require("./mocks/single-value.json"));

var content = function Content() {
  var configurations = {
    withTooltip: true,
    withLegend: false
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Empty"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: configurations,
    empty: true,
    emptyContent: "Recharts Bar Chart Empty"
  })));
};

exports.content = content;
var name = 'Recharts Bar Chart Empty';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2VtcHR5LnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nQm90dG9tIiwiZGF0YSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRTtBQUZTLEdBQXZCO0FBSUEsc0JBQ0UsMERBQ0Usb0RBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRSxHQUF0QjtBQUEyQkMsTUFBQUEsYUFBYSxFQUFFO0FBQTFDO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVDLHVCQUF4QjtBQUE4QixJQUFBLGNBQWMsRUFBRU4sY0FBOUM7QUFBOEQsSUFBQSxLQUFLLE1BQW5FO0FBQW9FLElBQUEsWUFBWSxFQUFDO0FBQWpGLElBREYsQ0FGRixDQURGO0FBUUQsQ0FiTTs7O0FBY0EsSUFBTU8sSUFBSSxHQUFHLDBCQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWNoYXJ0c0JhckNoYXJ0IGZyb20gJy4uL3JlY2hhcnRzLWJhci1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2tzL3NpbmdsZS12YWx1ZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiBmYWxzZSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkVtcHR5PC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAsIHBhZGRpbmdCb3R0b206IDEwMCB9fT5cbiAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnQgZGF0YT17ZGF0YX0gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSBlbXB0eSBlbXB0eUNvbnRlbnQ9XCJSZWNoYXJ0cyBCYXIgQ2hhcnQgRW1wdHlcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnUmVjaGFydHMgQmFyIENoYXJ0IEVtcHR5JztcbiJdfQ==