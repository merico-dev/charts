"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _rechartsBarChart = _interopRequireDefault(require("../../recharts-bar-chart"));

var _singleValue = _interopRequireDefault(require("../mocks/single-value.json"));

var content = function Content() {
  var configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    xAxis: {
      name: 'Series'
    },
    yAxis: {
      name: 'Mock Value'
    },
    subSeriesConfiguration: [{
      label: 'Rounded Value',
      dataKey: 'value'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Scrollable (Horizontal)"), /*#__PURE__*/_react["default"].createElement("p", null, "Tip: Remember to leave a bottom padding, for xAxis name, which is Series in this case"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 400,
      height: 400,
      paddingBottom: 50,
      overflowX: 'scroll'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: configurations
  }))));
};

exports.content = content;
var name = 'Scrollable (Horizontal)';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL3Njcm9sbGFibGUvaG9yaXpvbnRhbC50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwid2l0aExlZ2VuZCIsImxhYmVsS2V5IiwieEF4aXMiLCJuYW1lIiwieUF4aXMiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5Iiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nQm90dG9tIiwib3ZlcmZsb3dYIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEMsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxXQUFXLEVBQUUsSUFEUTtBQUVyQkMsSUFBQUEsVUFBVSxFQUFFLEtBRlM7QUFHckJDLElBQUFBLFFBQVEsRUFBRSxNQUhXO0FBSXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FKYztBQU9yQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLElBQUksRUFBRTtBQURELEtBUGM7QUFVckJFLElBQUFBLHNCQUFzQixFQUFFLENBQUM7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLGVBQVQ7QUFBMEJDLE1BQUFBLE9BQU8sRUFBRTtBQUFuQyxLQUFEO0FBVkgsR0FBdkI7QUFZQSxzQkFDRSwwREFDRSxzRUFERixlQUVFLG1JQUZGLGVBR0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUFBLGFBQWEsRUFBRSxFQUExQztBQUE4Q0MsTUFBQUEsU0FBUyxFQUFFO0FBQXpEO0FBQVosa0JBQ0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFSCxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRUcsdUJBQXhCO0FBQThCLElBQUEsY0FBYyxFQUFFZDtBQUE5QyxJQURGLENBREYsQ0FIRixDQURGO0FBV0QsQ0F4Qk07OztBQXlCQSxJQUFNSyxJQUFJLEdBQUcseUJBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4uL21vY2tzL3NpbmdsZS12YWx1ZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiBmYWxzZSxcbiAgICBsYWJlbEtleTogJ25hbWUnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnU2VyaWVzJyxcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICBuYW1lOiAnTW9jayBWYWx1ZScsXG4gICAgfSxcbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiBbeyBsYWJlbDogJ1JvdW5kZWQgVmFsdWUnLCBkYXRhS2V5OiAndmFsdWUnIH1dLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+U2Nyb2xsYWJsZSAoSG9yaXpvbnRhbCk8L2gxPlxuICAgICAgPHA+VGlwOiBSZW1lbWJlciB0byBsZWF2ZSBhIGJvdHRvbSBwYWRkaW5nLCBmb3IgeEF4aXMgbmFtZSwgd2hpY2ggaXMgU2VyaWVzIGluIHRoaXMgY2FzZTwvcD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDQwMCwgaGVpZ2h0OiA0MDAsIHBhZGRpbmdCb3R0b206IDUwLCBvdmVyZmxvd1g6ICdzY3JvbGwnIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogJzEwMCUnIH19PlxuICAgICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdTY3JvbGxhYmxlIChIb3Jpem9udGFsKSc7XG4iXX0=