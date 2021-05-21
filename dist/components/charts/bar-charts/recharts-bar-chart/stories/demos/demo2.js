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

var _colors = require("../../../../../helpers/colors");

var _rechartsBarChart = _interopRequireDefault(require("../../recharts-bar-chart"));

var _issues = _interopRequireDefault(require("../mocks/issues.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  _issues["default"].sort(function (a, b) {
    return b.issue_total_number - a.issue_total_number;
  }); // HERE


  var configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    subSeriesConfiguration: [{
      label: 'Blocker',
      dataKey: 'issue_blocker_number',
      stackId: 'project',
      fill: _colors.CHART_COLOR_PALETTE[4]
    }, // HERE, use prop 'fill'
    {
      label: 'Critical',
      dataKey: 'issue_critical_number',
      stackId: 'project',
      fill: _colors.CHART_COLOR_PALETTE[3]
    }, {
      label: 'Major',
      dataKey: 'issue_major_number',
      stackId: 'project',
      fill: _colors.CHART_COLOR_PALETTE[2]
    }, {
      label: 'Minor',
      dataKey: 'issue_minor_number',
      stackId: 'project',
      fill: _colors.CHART_COLOR_PALETTE[0]
    }, {
      label: 'Info',
      dataKey: 'issue_info_number',
      stackId: 'project',
      fill: _colors.CHART_COLOR_PALETTE[1]
    } // { label: 'Total', dataKey: 'issue_total_number', stackId: 'project' },
    ]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "[Demo] Issues - Color"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _issues["default"],
    configurations: configurations
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "Transposed"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _issues["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      transposed: true
    })
  })));
};

exports.content = content;
var name = '[Demo] Issues - Color';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2RlbW9zL2RlbW8yLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImRhdGEiLCJzb3J0IiwiYSIsImIiLCJpc3N1ZV90b3RhbF9udW1iZXIiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwid2l0aExlZ2VuZCIsImxhYmVsS2V5Iiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsInN0YWNrSWQiLCJmaWxsIiwiQ0hBUlRfQ09MT1JfUEFMRVRURSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNwb3NlZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDQyxxQkFBS0MsSUFBTCxDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVBLENBQUMsQ0FBQ0Msa0JBQUYsR0FBdUJGLENBQUMsQ0FBQ0Usa0JBQW5DO0FBQUEsR0FBVixFQUR3QyxDQUMwQjs7O0FBRWxFLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxLQUZTO0FBR3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFIVztBQUlyQkMsSUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEI7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLE1BQUFBLE9BQU8sRUFBRSxzQkFBN0I7QUFBcURDLE1BQUFBLE9BQU8sRUFBRSxTQUE5RDtBQUF5RUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBL0UsS0FEc0IsRUFDbUY7QUFDekc7QUFBRUosTUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUFBLE9BQU8sRUFBRSx1QkFBOUI7QUFBdURDLE1BQUFBLE9BQU8sRUFBRSxTQUFoRTtBQUEyRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBakYsS0FGc0IsRUFHdEI7QUFBRUosTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE9BQU8sRUFBRSxvQkFBM0I7QUFBaURDLE1BQUFBLE9BQU8sRUFBRSxTQUExRDtBQUFxRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBM0UsS0FIc0IsRUFJdEI7QUFBRUosTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE9BQU8sRUFBRSxvQkFBM0I7QUFBaURDLE1BQUFBLE9BQU8sRUFBRSxTQUExRDtBQUFxRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBM0UsS0FKc0IsRUFLdEI7QUFBRUosTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFBLE9BQU8sRUFBRSxtQkFBMUI7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRSxTQUF4RDtBQUFtRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBekUsS0FMc0IsQ0FNdEI7QUFOc0I7QUFKSCxHQUF2QjtBQWFBLHNCQUNFLDBEQUNFLG9FQURGLGVBRUUsc0RBRkYsZUFHRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLDRCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFaEIsa0JBQXhCO0FBQThCLElBQUEsY0FBYyxFQUFFSztBQUE5QyxJQURGLENBSEYsZUFPRSx5REFQRixlQVFFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRVUsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRWhCLGtCQURSO0FBRUUsSUFBQSxjQUFjLGtDQUNUSyxjQURTO0FBRVpZLE1BQUFBLFVBQVUsRUFBRTtBQUZBO0FBRmhCLElBREYsQ0FSRixDQURGO0FBb0JELENBcENNOzs7QUFxQ0EsSUFBTUMsSUFBSSxHQUFHLHVCQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENIQVJUX0NPTE9SX1BBTEVUVEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9oZWxwZXJzL2NvbG9ycyc7XG5pbXBvcnQgUmVjaGFydHNCYXJDaGFydCBmcm9tICcuLi8uLi9yZWNoYXJ0cy1iYXItY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vbW9ja3MvaXNzdWVzLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGRhdGEuc29ydCgoYSwgYikgPT4gYi5pc3N1ZV90b3RhbF9udW1iZXIgLSBhLmlzc3VlX3RvdGFsX251bWJlcik7IC8vIEhFUkVcblxuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiBmYWxzZSxcbiAgICBsYWJlbEtleTogJ25hbWUnLFxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFtcbiAgICAgIHsgbGFiZWw6ICdCbG9ja2VyJywgZGF0YUtleTogJ2lzc3VlX2Jsb2NrZXJfbnVtYmVyJywgc3RhY2tJZDogJ3Byb2plY3QnLCBmaWxsOiBDSEFSVF9DT0xPUl9QQUxFVFRFWzRdIH0sIC8vIEhFUkUsIHVzZSBwcm9wICdmaWxsJ1xuICAgICAgeyBsYWJlbDogJ0NyaXRpY2FsJywgZGF0YUtleTogJ2lzc3VlX2NyaXRpY2FsX251bWJlcicsIHN0YWNrSWQ6ICdwcm9qZWN0JywgZmlsbDogQ0hBUlRfQ09MT1JfUEFMRVRURVszXSB9LFxuICAgICAgeyBsYWJlbDogJ01ham9yJywgZGF0YUtleTogJ2lzc3VlX21ham9yX251bWJlcicsIHN0YWNrSWQ6ICdwcm9qZWN0JywgZmlsbDogQ0hBUlRfQ09MT1JfUEFMRVRURVsyXSB9LFxuICAgICAgeyBsYWJlbDogJ01pbm9yJywgZGF0YUtleTogJ2lzc3VlX21pbm9yX251bWJlcicsIHN0YWNrSWQ6ICdwcm9qZWN0JywgZmlsbDogQ0hBUlRfQ09MT1JfUEFMRVRURVswXSB9LFxuICAgICAgeyBsYWJlbDogJ0luZm8nLCBkYXRhS2V5OiAnaXNzdWVfaW5mb19udW1iZXInLCBzdGFja0lkOiAncHJvamVjdCcsIGZpbGw6IENIQVJUX0NPTE9SX1BBTEVUVEVbMV0gfSxcbiAgICAgIC8vIHsgbGFiZWw6ICdUb3RhbCcsIGRhdGFLZXk6ICdpc3N1ZV90b3RhbF9udW1iZXInLCBzdGFja0lkOiAncHJvamVjdCcgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+W0RlbW9dIElzc3VlcyAtIENvbG9yPC9oMT5cbiAgICAgIDxoMj5EZWZhdWx0PC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDI+VHJhbnNwb3NlZDwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8UmVjaGFydHNCYXJDaGFydFxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgY29uZmlndXJhdGlvbnM9e3tcbiAgICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb25zLFxuICAgICAgICAgICAgdHJhbnNwb3NlZDogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnW0RlbW9dIElzc3VlcyAtIENvbG9yJztcbiJdfQ==