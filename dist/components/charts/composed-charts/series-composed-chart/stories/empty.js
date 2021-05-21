"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _seriesComposedChart = _interopRequireDefault(require("../series-composed-chart"));

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
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: [],
    configurations: configurations,
    empty: true,
    emptyContent: "Composed Series Chart Empty"
  })));
};

exports.content = content;
var name = 'Empty';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvZW1wdHkudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJDb250ZW50IiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsIndpdGhMZWdlbmQiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUU7QUFGUyxHQUF2QjtBQUlBLHNCQUNFLDBEQUNFLG9EQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUFBLGFBQWEsRUFBRTtBQUExQztBQUFaLGtCQUNFLGdDQUFDLCtCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUUsRUFEUjtBQUVFLElBQUEsY0FBYyxFQUFFTCxjQUZsQjtBQUdFLElBQUEsS0FBSyxNQUhQO0FBSUUsSUFBQSxZQUFZLEVBQUM7QUFKZixJQURGLENBRkYsQ0FERjtBQWFELENBbEJNOzs7QUFtQkEsSUFBTU0sSUFBSSxHQUFHLE9BQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlcmllc0NvbXBvc2VkQ2hhcnQgZnJvbSAnLi4vc2VyaWVzLWNvbXBvc2VkLWNoYXJ0JztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiBmYWxzZSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkVtcHR5PC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAsIHBhZGRpbmdCb3R0b206IDEwMCB9fT5cbiAgICAgICAgPFNlcmllc0NvbXBvc2VkQ2hhcnRcbiAgICAgICAgICBkYXRhPXtbXX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9XG4gICAgICAgICAgZW1wdHlcbiAgICAgICAgICBlbXB0eUNvbnRlbnQ9XCJDb21wb3NlZCBTZXJpZXMgQ2hhcnQgRW1wdHlcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnRW1wdHknO1xuIl19