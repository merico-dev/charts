"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Line = exports.Dot = void 0;

var _react = _interopRequireDefault(require("react"));

var Dot = function Dot(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'black' : _ref$fill;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 20 20",
    width: 10,
    height: 10
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0",
    width: "20",
    height: "20",
    rx: "3",
    fill: fill
  }));
};

exports.Dot = Dot;

var Line = function Line(_ref2) {
  var _ref2$stroke = _ref2.stroke,
      stroke = _ref2$stroke === void 0 ? 'black' : _ref2$stroke,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 3 : _ref2$strokeWidth,
      _ref2$strokeDasharray = _ref2.strokeDasharray,
      strokeDasharray = _ref2$strokeDasharray === void 0 ? '0' : _ref2$strokeDasharray;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 32 20",
    width: 16,
    height: 10
  }, /*#__PURE__*/_react["default"].createElement("line", {
    x1: "0",
    y1: "10",
    x2: "32",
    y2: "10",
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray
  }));
};

exports.Line = Line;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL2luZGljYXRvci50c3giXSwibmFtZXMiOlsiRG90IiwiZmlsbCIsIkxpbmUiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZURhc2hhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSU8sSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSx1QkFBR0MsSUFBSDtBQUFBLE1BQUdBLElBQUgsMEJBQVUsT0FBVjtBQUFBLHNCQUNqQjtBQUFLLElBQUEsT0FBTyxFQUFDLFdBQWI7QUFBeUIsSUFBQSxLQUFLLEVBQUUsRUFBaEM7QUFBb0MsSUFBQSxNQUFNLEVBQUU7QUFBNUMsa0JBQ0U7QUFBTSxJQUFBLENBQUMsRUFBQyxHQUFSO0FBQVksSUFBQSxLQUFLLEVBQUMsSUFBbEI7QUFBdUIsSUFBQSxNQUFNLEVBQUMsSUFBOUI7QUFBbUMsSUFBQSxFQUFFLEVBQUMsR0FBdEM7QUFBMEMsSUFBQSxJQUFJLEVBQUVBO0FBQWhELElBREYsQ0FEaUI7QUFBQSxDQUFaOzs7O0FBUUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSwyQkFBR0MsTUFBSDtBQUFBLE1BQUdBLE1BQUgsNkJBQVksT0FBWjtBQUFBLGdDQUFxQkMsV0FBckI7QUFBQSxNQUFxQkEsV0FBckIsa0NBQW1DLENBQW5DO0FBQUEsb0NBQXNDQyxlQUF0QztBQUFBLE1BQXNDQSxlQUF0QyxzQ0FBd0QsR0FBeEQ7QUFBQSxzQkFDbEI7QUFBSyxJQUFBLE9BQU8sRUFBQyxXQUFiO0FBQXlCLElBQUEsS0FBSyxFQUFFLEVBQWhDO0FBQW9DLElBQUEsTUFBTSxFQUFFO0FBQTVDLGtCQUNFO0FBQU0sSUFBQSxFQUFFLEVBQUMsR0FBVDtBQUFhLElBQUEsRUFBRSxFQUFDLElBQWhCO0FBQXFCLElBQUEsRUFBRSxFQUFDLElBQXhCO0FBQTZCLElBQUEsRUFBRSxFQUFDLElBQWhDO0FBQXFDLElBQUEsTUFBTSxFQUFFRixNQUE3QztBQUFxRCxJQUFBLFdBQVcsRUFBRUMsV0FBbEU7QUFBK0UsSUFBQSxlQUFlLEVBQUVDO0FBQWhHLElBREYsQ0FEa0I7QUFBQSxDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IHR5cGUgRG90UHJvcHMgPSBQaWNrPFJlYWN0LlNWR1Byb3BzPFNWR1JlY3RFbGVtZW50PiwgJ2ZpbGwnPjtcblxuZXhwb3J0IGNvbnN0IERvdCA9ICh7IGZpbGwgPSAnYmxhY2snIH06IERvdFByb3BzKSA9PiAoXG4gIDxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiIHdpZHRoPXsxMH0gaGVpZ2h0PXsxMH0+XG4gICAgPHJlY3QgeD1cIjBcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiByeD1cIjNcIiBmaWxsPXtmaWxsfSAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCB0eXBlIExpbmVQcm9wcyA9IFBpY2s8UmVhY3QuU1ZHUHJvcHM8U1ZHTGluZUVsZW1lbnQ+LCAnc3Ryb2tlJyB8ICdzdHJva2VXaWR0aCcgfCAnc3Ryb2tlRGFzaGFycmF5Jz47XG5cbmV4cG9ydCBjb25zdCBMaW5lID0gKHsgc3Ryb2tlID0gJ2JsYWNrJywgc3Ryb2tlV2lkdGggPSAzLCBzdHJva2VEYXNoYXJyYXkgPSAnMCcgfTogTGluZVByb3BzKSA9PiAoXG4gIDxzdmcgdmlld0JveD1cIjAgMCAzMiAyMFwiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxMH0+XG4gICAgPGxpbmUgeDE9XCIwXCIgeTE9XCIxMFwiIHgyPVwiMzJcIiB5Mj1cIjEwXCIgc3Ryb2tlPXtzdHJva2V9IHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH0gc3Ryb2tlRGFzaGFycmF5PXtzdHJva2VEYXNoYXJyYXl9IC8+XG4gIDwvc3ZnPlxuKTtcbiJdfQ==