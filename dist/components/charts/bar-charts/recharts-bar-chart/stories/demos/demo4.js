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

var _utils = require("../../../../../helpers/utils");

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
    legend: {
      enabled: true,
      align: 'center',
      verticalAlign: 'top'
    },
    labelKey: 'name',
    subSeriesConfiguration: [{
      label: 'Blocker',
      dataKey: 'issue_blocker_number',
      stackId: 'project',
      fill: _colors.CHART_COLOR_PALETTE[4]
    }, {
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
      fill: _colors.CHART_COLOR_PALETTE[1],
      valueLabel: {
        enabled: true,
        stacked: true
      }
    } // { label: 'Total', dataKey: 'issue_total_number', stackId: 'total' },
    ]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "[Demo] Issues - Label"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 400,
      height: 380
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _issues["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      labelTickFormatter: function labelTickFormatter(v) {
        return (0, _utils.clip)(v, 10);
      }
    })
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "Transposed"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 400,
      height: 380
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _issues["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      transposed: true
    })
  })));
};

exports.content = content;
var name = '[Demo] Issues - Label';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2RlbW9zL2RlbW80LnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImRhdGEiLCJzb3J0IiwiYSIsImIiLCJpc3N1ZV90b3RhbF9udW1iZXIiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwibGVnZW5kIiwiZW5hYmxlZCIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImxhYmVsS2V5Iiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsInN0YWNrSWQiLCJmaWxsIiwiQ0hBUlRfQ09MT1JfUEFMRVRURSIsInZhbHVlTGFiZWwiLCJzdGFja2VkIiwid2lkdGgiLCJoZWlnaHQiLCJsYWJlbFRpY2tGb3JtYXR0ZXIiLCJ2IiwidHJhbnNwb3NlZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDQyxxQkFBS0MsSUFBTCxDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVBLENBQUMsQ0FBQ0Msa0JBQUYsR0FBdUJGLENBQUMsQ0FBQ0Usa0JBQW5DO0FBQUEsR0FBVixFQUR3QyxDQUMwQjs7O0FBRWxFLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUUsSUFESDtBQUVOQyxNQUFBQSxLQUFLLEVBQUUsUUFGRDtBQUdOQyxNQUFBQSxhQUFhLEVBQUU7QUFIVCxLQUZhO0FBT3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFQVztBQVFyQkMsSUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEI7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLE1BQUFBLE9BQU8sRUFBRSxzQkFBN0I7QUFBcURDLE1BQUFBLE9BQU8sRUFBRSxTQUE5RDtBQUF5RUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBL0UsS0FEc0IsRUFFdEI7QUFBRUosTUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUFBLE9BQU8sRUFBRSx1QkFBOUI7QUFBdURDLE1BQUFBLE9BQU8sRUFBRSxTQUFoRTtBQUEyRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBakYsS0FGc0IsRUFHdEI7QUFBRUosTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE9BQU8sRUFBRSxvQkFBM0I7QUFBaURDLE1BQUFBLE9BQU8sRUFBRSxTQUExRDtBQUFxRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBM0UsS0FIc0IsRUFJdEI7QUFBRUosTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE9BQU8sRUFBRSxvQkFBM0I7QUFBaURDLE1BQUFBLE9BQU8sRUFBRSxTQUExRDtBQUFxRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBM0UsS0FKc0IsRUFLdEI7QUFDRUosTUFBQUEsS0FBSyxFQUFFLE1BRFQ7QUFFRUMsTUFBQUEsT0FBTyxFQUFFLG1CQUZYO0FBR0VDLE1BQUFBLE9BQU8sRUFBRSxTQUhYO0FBSUVDLE1BQUFBLElBQUksRUFBRUMsNEJBQW9CLENBQXBCLENBSlI7QUFLRUMsTUFBQUEsVUFBVSxFQUFFO0FBQUVWLFFBQUFBLE9BQU8sRUFBRSxJQUFYO0FBQWlCVyxRQUFBQSxPQUFPLEVBQUU7QUFBMUI7QUFMZCxLQUxzQixDQVl0QjtBQVpzQjtBQVJILEdBQXZCO0FBdUJBLHNCQUNFLDBEQUNFLG9FQURGLGVBRUUsc0RBRkYsZUFHRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLDRCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVyQixrQkFEUjtBQUVFLElBQUEsY0FBYyxrQ0FDVEssY0FEUztBQUVaaUIsTUFBQUEsa0JBQWtCLEVBQUUsNEJBQUNDLENBQUQ7QUFBQSxlQUFZLGlCQUFLQSxDQUFMLEVBQVEsRUFBUixDQUFaO0FBQUE7QUFGUjtBQUZoQixJQURGLENBSEYsZUFhRSx5REFiRixlQWNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRXJCLGtCQURSO0FBRUUsSUFBQSxjQUFjLGtDQUNUSyxjQURTO0FBRVptQixNQUFBQSxVQUFVLEVBQUU7QUFGQTtBQUZoQixJQURGLENBZEYsQ0FERjtBQTBCRCxDQXBETTs7O0FBcURBLElBQU1DLElBQUksR0FBRyx1QkFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDSEFSVF9DT0xPUl9QQUxFVFRFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaGVscGVycy9jb2xvcnMnO1xuaW1wb3J0IHsgY2xpcCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4uL21vY2tzL2lzc3Vlcy5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBkYXRhLnNvcnQoKGEsIGIpID0+IGIuaXNzdWVfdG90YWxfbnVtYmVyIC0gYS5pc3N1ZV90b3RhbF9udW1iZXIpOyAvLyBIRVJFXG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgbGVnZW5kOiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgfSxcbiAgICBsYWJlbEtleTogJ25hbWUnLFxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFtcbiAgICAgIHsgbGFiZWw6ICdCbG9ja2VyJywgZGF0YUtleTogJ2lzc3VlX2Jsb2NrZXJfbnVtYmVyJywgc3RhY2tJZDogJ3Byb2plY3QnLCBmaWxsOiBDSEFSVF9DT0xPUl9QQUxFVFRFWzRdIH0sXG4gICAgICB7IGxhYmVsOiAnQ3JpdGljYWwnLCBkYXRhS2V5OiAnaXNzdWVfY3JpdGljYWxfbnVtYmVyJywgc3RhY2tJZDogJ3Byb2plY3QnLCBmaWxsOiBDSEFSVF9DT0xPUl9QQUxFVFRFWzNdIH0sXG4gICAgICB7IGxhYmVsOiAnTWFqb3InLCBkYXRhS2V5OiAnaXNzdWVfbWFqb3JfbnVtYmVyJywgc3RhY2tJZDogJ3Byb2plY3QnLCBmaWxsOiBDSEFSVF9DT0xPUl9QQUxFVFRFWzJdIH0sXG4gICAgICB7IGxhYmVsOiAnTWlub3InLCBkYXRhS2V5OiAnaXNzdWVfbWlub3JfbnVtYmVyJywgc3RhY2tJZDogJ3Byb2plY3QnLCBmaWxsOiBDSEFSVF9DT0xPUl9QQUxFVFRFWzBdIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnSW5mbycsXG4gICAgICAgIGRhdGFLZXk6ICdpc3N1ZV9pbmZvX251bWJlcicsXG4gICAgICAgIHN0YWNrSWQ6ICdwcm9qZWN0JyxcbiAgICAgICAgZmlsbDogQ0hBUlRfQ09MT1JfUEFMRVRURVsxXSxcbiAgICAgICAgdmFsdWVMYWJlbDogeyBlbmFibGVkOiB0cnVlLCBzdGFja2VkOiB0cnVlIH0sXG4gICAgICB9LFxuICAgICAgLy8geyBsYWJlbDogJ1RvdGFsJywgZGF0YUtleTogJ2lzc3VlX3RvdGFsX251bWJlcicsIHN0YWNrSWQ6ICd0b3RhbCcgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+W0RlbW9dIElzc3VlcyAtIExhYmVsPC9oMT5cbiAgICAgIDxoMj5EZWZhdWx0PC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDQwMCwgaGVpZ2h0OiAzODAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICBsYWJlbFRpY2tGb3JtYXR0ZXI6ICh2OiBhbnkpID0+IGNsaXAodiwgMTApLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgyPlRyYW5zcG9zZWQ8L2gyPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogNDAwLCBoZWlnaHQ6IDM4MCB9fT5cbiAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnRcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXt7XG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9ucyxcbiAgICAgICAgICAgIHRyYW5zcG9zZWQ6IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ1tEZW1vXSBJc3N1ZXMgLSBMYWJlbCc7XG4iXX0=