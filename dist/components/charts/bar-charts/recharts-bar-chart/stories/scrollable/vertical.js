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
    }],
    transposed: true
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Scrollable (Vertical)"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 400,
      paddingBottom: 50,
      overflowX: 'scroll'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 800
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: configurations
  }))));
};

exports.content = content;
var name = 'Scrollable (Vertical)';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL3Njcm9sbGFibGUvdmVydGljYWwudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJDb250ZW50IiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsIndpdGhMZWdlbmQiLCJsYWJlbEtleSIsInhBeGlzIiwibmFtZSIsInlBeGlzIiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsInRyYW5zcG9zZWQiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJvdmVyZmxvd1giLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUUsS0FGUztBQUdyQkMsSUFBQUEsUUFBUSxFQUFFLE1BSFc7QUFJckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQUpjO0FBT3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FQYztBQVVyQkUsSUFBQUEsc0JBQXNCLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUUsZUFBVDtBQUEwQkMsTUFBQUEsT0FBTyxFQUFFO0FBQW5DLEtBQUQsQ0FWSDtBQVdyQkMsSUFBQUEsVUFBVSxFQUFFO0FBWFMsR0FBdkI7QUFhQSxzQkFDRSwwREFDRSxvRUFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFBQSxhQUFhLEVBQUUsRUFBMUM7QUFBOENDLE1BQUFBLFNBQVMsRUFBRTtBQUF6RDtBQUFaLGtCQUNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVHLHVCQUF4QjtBQUE4QixJQUFBLGNBQWMsRUFBRWY7QUFBOUMsSUFERixDQURGLENBRkYsQ0FERjtBQVVELENBeEJNOzs7QUF5QkEsSUFBTUssSUFBSSxHQUFHLHVCQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWNoYXJ0c0JhckNoYXJ0IGZyb20gJy4uLy4uL3JlY2hhcnRzLWJhci1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9tb2Nrcy9zaW5nbGUtdmFsdWUuanNvbic7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogZmFsc2UsXG4gICAgbGFiZWxLZXk6ICduYW1lJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ1NlcmllcycsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ01vY2sgVmFsdWUnLFxuICAgIH0sXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW3sgbGFiZWw6ICdSb3VuZGVkIFZhbHVlJywgZGF0YUtleTogJ3ZhbHVlJyB9XSxcbiAgICB0cmFuc3Bvc2VkOiB0cnVlLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+U2Nyb2xsYWJsZSAoVmVydGljYWwpPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA0MDAsIHBhZGRpbmdCb3R0b206IDUwLCBvdmVyZmxvd1g6ICdzY3JvbGwnIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogODAwIH19PlxuICAgICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdTY3JvbGxhYmxlIChWZXJ0aWNhbCknO1xuIl19