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
  var subSeriesConfiguration = [{
    label: 'Rounded Value',
    dataKey: 'value',
    valueLabel: {
      enabled: true
    }
  }];
  var transposedSubSeriesConfiguration = [{
    label: 'Rounded Value',
    dataKey: 'value',
    stackId: 'value',
    valueLabel: {
      enabled: true
    }
  }];
  var configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    valueFormatter: function valueFormatter(v) {
      return (0, _lodash.round)(v, 0);
    },
    xAxis: {
      name: 'Series'
    },
    yAxis: {
      name: 'Mock Value'
    },
    subSeriesConfiguration: subSeriesConfiguration
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Labels on bars"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
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
      subSeriesConfiguration: transposedSubSeriesConfiguration,
      transposed: true
    })
  })));
};

exports.content = content;
var name = 'Labels on bars';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2xhYmVscy50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5IiwidmFsdWVMYWJlbCIsImVuYWJsZWQiLCJ0cmFuc3Bvc2VkU3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsInN0YWNrSWQiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwid2l0aExlZ2VuZCIsImxhYmVsS2V5IiwidmFsdWVGb3JtYXR0ZXIiLCJ2IiwieEF4aXMiLCJuYW1lIiwieUF4aXMiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJkYXRhIiwidHJhbnNwb3NlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEMsTUFBTUMsc0JBQXNCLEdBQUcsQ0FDN0I7QUFDRUMsSUFBQUEsS0FBSyxFQUFFLGVBRFQ7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLE9BRlg7QUFHRUMsSUFBQUEsVUFBVSxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBSGQsR0FENkIsQ0FBL0I7QUFPQSxNQUFNQyxnQ0FBZ0MsR0FBRyxDQUN2QztBQUNFSixJQUFBQSxLQUFLLEVBQUUsZUFEVDtBQUVFQyxJQUFBQSxPQUFPLEVBQUUsT0FGWDtBQUdFSSxJQUFBQSxPQUFPLEVBQUUsT0FIWDtBQUlFSCxJQUFBQSxVQUFVLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFKZCxHQUR1QyxDQUF6QztBQVFBLE1BQU1HLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxLQUZTO0FBR3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFIVztBQUlyQkMsSUFBQUEsY0FBYyxFQUFFLHdCQUFDQyxDQUFEO0FBQUEsYUFBWSxtQkFBTUEsQ0FBTixFQUFTLENBQVQsQ0FBWjtBQUFBLEtBSks7QUFLckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQUxjO0FBUXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FSYztBQVdyQmQsSUFBQUEsc0JBQXNCLEVBQXRCQTtBQVhxQixHQUF2QjtBQWFBLHNCQUNFLDBEQUNFLDZEQURGLGVBRUUsc0RBRkYsZUFHRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVnQixNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUFBLGFBQWEsRUFBRTtBQUExQztBQUFaLGtCQUNFLGdDQUFDLDRCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFQyx1QkFBeEI7QUFBOEIsSUFBQSxjQUFjLEVBQUVaO0FBQTlDLElBREYsQ0FIRixlQU1FLHlEQU5GLGVBT0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFUyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUFBLGFBQWEsRUFBRTtBQUExQztBQUFaLGtCQUNFLGdDQUFDLDRCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVDLHVCQURSO0FBRUUsSUFBQSxjQUFjLGtDQUNUWixjQURTO0FBRVpQLE1BQUFBLHNCQUFzQixFQUFFSyxnQ0FGWjtBQUdaZSxNQUFBQSxVQUFVLEVBQUU7QUFIQTtBQUZoQixJQURGLENBUEYsQ0FERjtBQW9CRCxDQWpETTs7O0FBa0RBLElBQU1OLElBQUksR0FBRyxnQkFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVjaGFydHNCYXJDaGFydCBmcm9tICcuLi9yZWNoYXJ0cy1iYXItY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2Nrcy9zaW5nbGUtdmFsdWUuanNvbic7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3Qgc3ViU2VyaWVzQ29uZmlndXJhdGlvbiA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ1JvdW5kZWQgVmFsdWUnLFxuICAgICAgZGF0YUtleTogJ3ZhbHVlJyxcbiAgICAgIHZhbHVlTGFiZWw6IHsgZW5hYmxlZDogdHJ1ZSB9LFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IHRyYW5zcG9zZWRTdWJTZXJpZXNDb25maWd1cmF0aW9uID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnUm91bmRlZCBWYWx1ZScsXG4gICAgICBkYXRhS2V5OiAndmFsdWUnLFxuICAgICAgc3RhY2tJZDogJ3ZhbHVlJyxcbiAgICAgIHZhbHVlTGFiZWw6IHsgZW5hYmxlZDogdHJ1ZSB9LFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIHdpdGhMZWdlbmQ6IGZhbHNlLFxuICAgIGxhYmVsS2V5OiAnbmFtZScsXG4gICAgdmFsdWVGb3JtYXR0ZXI6ICh2OiBhbnkpID0+IHJvdW5kKHYsIDApLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnU2VyaWVzJyxcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICBuYW1lOiAnTW9jayBWYWx1ZScsXG4gICAgfSxcbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TGFiZWxzIG9uIGJhcnM8L2gxPlxuICAgICAgPGgyPkRlZmF1bHQ8L2gyPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCwgcGFkZGluZ0JvdHRvbTogMTAwIH19PlxuICAgICAgICA8UmVjaGFydHNCYXJDaGFydCBkYXRhPXtkYXRhfSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMj5UcmFuc3Bvc2VkPC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAsIHBhZGRpbmdCb3R0b206IDEwMCB9fT5cbiAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnRcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXt7XG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9ucyxcbiAgICAgICAgICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IHRyYW5zcG9zZWRTdWJTZXJpZXNDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgdHJhbnNwb3NlZDogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnTGFiZWxzIG9uIGJhcnMnO1xuIl19