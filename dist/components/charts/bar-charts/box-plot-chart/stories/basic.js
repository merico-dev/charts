"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _boxPlotChart = _interopRequireDefault(require("../box-plot-chart"));

var _basic = _interopRequireDefault(require("./mocks/basic.json"));

var content = function Content() {
  var configurations = {
    strokeColor: '#727272',
    lowLabel: 'statistic.minimum',
    q1Label: 'statistic.q1',
    medianLabel: 'statistic.median',
    q3Label: 'statistic.q3',
    highLabel: 'statistic.maximum',
    outliersLabel: 'statistic.outliers'
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Basic"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_boxPlotChart["default"], {
    data: _basic["default"],
    configurations: configurations,
    emptyContent: "Box Plot Chart Empty"
  })));
};

exports.content = content;
var name = 'Basic';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL2JveC1wbG90LWNoYXJ0L3N0b3JpZXMvYmFzaWMudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJDb250ZW50IiwiY29uZmlndXJhdGlvbnMiLCJzdHJva2VDb2xvciIsImxvd0xhYmVsIiwicTFMYWJlbCIsIm1lZGlhbkxhYmVsIiwicTNMYWJlbCIsImhpZ2hMYWJlbCIsIm91dGxpZXJzTGFiZWwiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJkYXRhIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEMsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxXQUFXLEVBQUUsU0FEUTtBQUVyQkMsSUFBQUEsUUFBUSxFQUFFLG1CQUZXO0FBR3JCQyxJQUFBQSxPQUFPLEVBQUUsY0FIWTtBQUlyQkMsSUFBQUEsV0FBVyxFQUFFLGtCQUpRO0FBS3JCQyxJQUFBQSxPQUFPLEVBQUUsY0FMWTtBQU1yQkMsSUFBQUEsU0FBUyxFQUFFLG1CQU5VO0FBT3JCQyxJQUFBQSxhQUFhLEVBQUU7QUFQTSxHQUF2QjtBQVNBLHNCQUNFLDBEQUNFLG9EQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUFBLGFBQWEsRUFBRTtBQUExQztBQUFaLGtCQUNFLGdDQUFDLHdCQUFEO0FBQWMsSUFBQSxJQUFJLEVBQUVDLGlCQUFwQjtBQUEwQixJQUFBLGNBQWMsRUFBRVgsY0FBMUM7QUFBMEQsSUFBQSxZQUFZLEVBQUM7QUFBdkUsSUFERixDQUZGLENBREY7QUFRRCxDQWxCTTs7O0FBbUJBLElBQU1ZLElBQUksR0FBRyxPQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3hQbG90Q2hhcnQgZnJvbSAnLi4vYm94LXBsb3QtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2Nrcy9iYXNpYy5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICBzdHJva2VDb2xvcjogJyM3MjcyNzInLFxuICAgIGxvd0xhYmVsOiAnc3RhdGlzdGljLm1pbmltdW0nLFxuICAgIHExTGFiZWw6ICdzdGF0aXN0aWMucTEnLFxuICAgIG1lZGlhbkxhYmVsOiAnc3RhdGlzdGljLm1lZGlhbicsXG4gICAgcTNMYWJlbDogJ3N0YXRpc3RpYy5xMycsXG4gICAgaGlnaExhYmVsOiAnc3RhdGlzdGljLm1heGltdW0nLFxuICAgIG91dGxpZXJzTGFiZWw6ICdzdGF0aXN0aWMub3V0bGllcnMnLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+QmFzaWM8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCwgcGFkZGluZ0JvdHRvbTogMTAwIH19PlxuICAgICAgICA8Qm94UGxvdENoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gZW1wdHlDb250ZW50PVwiQm94IFBsb3QgQ2hhcnQgRW1wdHlcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnQmFzaWMnO1xuIl19