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
      stackId: 'project'
    }, // HERE, use same stackId
    {
      label: 'Critical',
      dataKey: 'issue_critical_number',
      stackId: 'project'
    }, {
      label: 'Major',
      dataKey: 'issue_major_number',
      stackId: 'project'
    }, {
      label: 'Minor',
      dataKey: 'issue_minor_number',
      stackId: 'project'
    }, {
      label: 'Info',
      dataKey: 'issue_info_number',
      stackId: 'project'
    }, {
      label: 'Total',
      dataKey: 'issue_total_number',
      stackId: 'project'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "[Demo] Issues - Basic"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
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
var name = '[Demo] Issues - Basic';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2RlbW9zL2RlbW8xLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImRhdGEiLCJzb3J0IiwiYSIsImIiLCJpc3N1ZV90b3RhbF9udW1iZXIiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwid2l0aExlZ2VuZCIsImxhYmVsS2V5Iiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsInN0YWNrSWQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zcG9zZWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4Q0MscUJBQUtDLElBQUwsQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVQSxDQUFDLENBQUNDLGtCQUFGLEdBQXVCRixDQUFDLENBQUNFLGtCQUFuQztBQUFBLEdBQVYsRUFEd0MsQ0FDMEI7OztBQUVsRSxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUUsS0FGUztBQUdyQkMsSUFBQUEsUUFBUSxFQUFFLE1BSFc7QUFJckJDLElBQUFBLHNCQUFzQixFQUFFLENBQ3RCO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxNQUFBQSxPQUFPLEVBQUUsc0JBQTdCO0FBQXFEQyxNQUFBQSxPQUFPLEVBQUU7QUFBOUQsS0FEc0IsRUFDcUQ7QUFDM0U7QUFBRUYsTUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUFBLE9BQU8sRUFBRSx1QkFBOUI7QUFBdURDLE1BQUFBLE9BQU8sRUFBRTtBQUFoRSxLQUZzQixFQUd0QjtBQUFFRixNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsT0FBTyxFQUFFLG9CQUEzQjtBQUFpREMsTUFBQUEsT0FBTyxFQUFFO0FBQTFELEtBSHNCLEVBSXRCO0FBQUVGLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxPQUFPLEVBQUUsb0JBQTNCO0FBQWlEQyxNQUFBQSxPQUFPLEVBQUU7QUFBMUQsS0FKc0IsRUFLdEI7QUFBRUYsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFBLE9BQU8sRUFBRSxtQkFBMUI7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF4RCxLQUxzQixFQU10QjtBQUFFRixNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsT0FBTyxFQUFFLG9CQUEzQjtBQUFpREMsTUFBQUEsT0FBTyxFQUFFO0FBQTFELEtBTnNCO0FBSkgsR0FBdkI7QUFhQSxzQkFDRSwwREFDRSxvRUFERixlQUVFLHNEQUZGLGVBR0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRWQsa0JBQXhCO0FBQThCLElBQUEsY0FBYyxFQUFFSztBQUE5QyxJQURGLENBSEYsZUFPRSx5REFQRixlQVFFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRVEsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRWQsa0JBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RLLGNBRFM7QUFFWlUsTUFBQUEsVUFBVSxFQUFFO0FBRkE7QUFGaEIsSUFERixDQVJGLENBREY7QUFvQkQsQ0FwQ007OztBQXFDQSxJQUFNQyxJQUFJLEdBQUcsdUJBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4uL21vY2tzL2lzc3Vlcy5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBkYXRhLnNvcnQoKGEsIGIpID0+IGIuaXNzdWVfdG90YWxfbnVtYmVyIC0gYS5pc3N1ZV90b3RhbF9udW1iZXIpOyAvLyBIRVJFXG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogZmFsc2UsXG4gICAgbGFiZWxLZXk6ICduYW1lJyxcbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiBbXG4gICAgICB7IGxhYmVsOiAnQmxvY2tlcicsIGRhdGFLZXk6ICdpc3N1ZV9ibG9ja2VyX251bWJlcicsIHN0YWNrSWQ6ICdwcm9qZWN0JyB9LCAvLyBIRVJFLCB1c2Ugc2FtZSBzdGFja0lkXG4gICAgICB7IGxhYmVsOiAnQ3JpdGljYWwnLCBkYXRhS2V5OiAnaXNzdWVfY3JpdGljYWxfbnVtYmVyJywgc3RhY2tJZDogJ3Byb2plY3QnIH0sXG4gICAgICB7IGxhYmVsOiAnTWFqb3InLCBkYXRhS2V5OiAnaXNzdWVfbWFqb3JfbnVtYmVyJywgc3RhY2tJZDogJ3Byb2plY3QnIH0sXG4gICAgICB7IGxhYmVsOiAnTWlub3InLCBkYXRhS2V5OiAnaXNzdWVfbWlub3JfbnVtYmVyJywgc3RhY2tJZDogJ3Byb2plY3QnIH0sXG4gICAgICB7IGxhYmVsOiAnSW5mbycsIGRhdGFLZXk6ICdpc3N1ZV9pbmZvX251bWJlcicsIHN0YWNrSWQ6ICdwcm9qZWN0JyB9LFxuICAgICAgeyBsYWJlbDogJ1RvdGFsJywgZGF0YUtleTogJ2lzc3VlX3RvdGFsX251bWJlcicsIHN0YWNrSWQ6ICdwcm9qZWN0JyB9LFxuICAgIF0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5bRGVtb10gSXNzdWVzIC0gQmFzaWM8L2gxPlxuICAgICAgPGgyPkRlZmF1bHQ8L2gyPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnQgZGF0YT17ZGF0YX0gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoMj5UcmFuc3Bvc2VkPC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICB0cmFuc3Bvc2VkOiB0cnVlLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdbRGVtb10gSXNzdWVzIC0gQmFzaWMnO1xuIl19