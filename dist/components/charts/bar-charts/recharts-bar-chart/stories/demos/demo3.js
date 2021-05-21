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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "[Demo] Issues - Legends"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
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
var name = '[Demo] Issues - Legends';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2RlbW9zL2RlbW8zLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImRhdGEiLCJzb3J0IiwiYSIsImIiLCJpc3N1ZV90b3RhbF9udW1iZXIiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwibGVnZW5kIiwiZW5hYmxlZCIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImxhYmVsS2V5Iiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsInN0YWNrSWQiLCJmaWxsIiwiQ0hBUlRfQ09MT1JfUEFMRVRURSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNwb3NlZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDQyxxQkFBS0MsSUFBTCxDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVBLENBQUMsQ0FBQ0Msa0JBQUYsR0FBdUJGLENBQUMsQ0FBQ0Usa0JBQW5DO0FBQUEsR0FBVixFQUR3QyxDQUMwQjs7O0FBRWxFLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUUsSUFESDtBQUVOQyxNQUFBQSxLQUFLLEVBQUUsUUFGRDtBQUdOQyxNQUFBQSxhQUFhLEVBQUU7QUFIVCxLQUZhO0FBT3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFQVztBQVFyQkMsSUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEI7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLE1BQUFBLE9BQU8sRUFBRSxzQkFBN0I7QUFBcURDLE1BQUFBLE9BQU8sRUFBRSxTQUE5RDtBQUF5RUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBL0UsS0FEc0IsRUFDbUY7QUFDekc7QUFBRUosTUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUFBLE9BQU8sRUFBRSx1QkFBOUI7QUFBdURDLE1BQUFBLE9BQU8sRUFBRSxTQUFoRTtBQUEyRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBakYsS0FGc0IsRUFHdEI7QUFBRUosTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE9BQU8sRUFBRSxvQkFBM0I7QUFBaURDLE1BQUFBLE9BQU8sRUFBRSxTQUExRDtBQUFxRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBM0UsS0FIc0IsRUFJdEI7QUFBRUosTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE9BQU8sRUFBRSxvQkFBM0I7QUFBaURDLE1BQUFBLE9BQU8sRUFBRSxTQUExRDtBQUFxRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBM0UsS0FKc0IsRUFLdEI7QUFBRUosTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFBLE9BQU8sRUFBRSxtQkFBMUI7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRSxTQUF4RDtBQUFtRUMsTUFBQUEsSUFBSSxFQUFFQyw0QkFBb0IsQ0FBcEI7QUFBekUsS0FMc0IsQ0FNdEI7QUFOc0I7QUFSSCxHQUF2QjtBQWlCQSxzQkFDRSwwREFDRSxzRUFERixlQUVFLHNEQUZGLGVBR0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRW5CLGtCQUF4QjtBQUE4QixJQUFBLGNBQWMsRUFBRUs7QUFBOUMsSUFERixDQUhGLGVBT0UseURBUEYsZUFRRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVhLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLDRCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVuQixrQkFEUjtBQUVFLElBQUEsY0FBYyxrQ0FDVEssY0FEUztBQUVaZSxNQUFBQSxVQUFVLEVBQUU7QUFGQTtBQUZoQixJQURGLENBUkYsQ0FERjtBQW9CRCxDQXhDTTs7O0FBeUNBLElBQU1DLElBQUksR0FBRyx5QkFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDSEFSVF9DT0xPUl9QQUxFVFRFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaGVscGVycy9jb2xvcnMnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4uL21vY2tzL2lzc3Vlcy5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBkYXRhLnNvcnQoKGEsIGIpID0+IGIuaXNzdWVfdG90YWxfbnVtYmVyIC0gYS5pc3N1ZV90b3RhbF9udW1iZXIpOyAvLyBIRVJFXG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgbGVnZW5kOiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgfSxcbiAgICBsYWJlbEtleTogJ25hbWUnLFxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFtcbiAgICAgIHsgbGFiZWw6ICdCbG9ja2VyJywgZGF0YUtleTogJ2lzc3VlX2Jsb2NrZXJfbnVtYmVyJywgc3RhY2tJZDogJ3Byb2plY3QnLCBmaWxsOiBDSEFSVF9DT0xPUl9QQUxFVFRFWzRdIH0sIC8vIEhFUkUsIHVzZSBwcm9wICdmaWxsJ1xuICAgICAgeyBsYWJlbDogJ0NyaXRpY2FsJywgZGF0YUtleTogJ2lzc3VlX2NyaXRpY2FsX251bWJlcicsIHN0YWNrSWQ6ICdwcm9qZWN0JywgZmlsbDogQ0hBUlRfQ09MT1JfUEFMRVRURVszXSB9LFxuICAgICAgeyBsYWJlbDogJ01ham9yJywgZGF0YUtleTogJ2lzc3VlX21ham9yX251bWJlcicsIHN0YWNrSWQ6ICdwcm9qZWN0JywgZmlsbDogQ0hBUlRfQ09MT1JfUEFMRVRURVsyXSB9LFxuICAgICAgeyBsYWJlbDogJ01pbm9yJywgZGF0YUtleTogJ2lzc3VlX21pbm9yX251bWJlcicsIHN0YWNrSWQ6ICdwcm9qZWN0JywgZmlsbDogQ0hBUlRfQ09MT1JfUEFMRVRURVswXSB9LFxuICAgICAgeyBsYWJlbDogJ0luZm8nLCBkYXRhS2V5OiAnaXNzdWVfaW5mb19udW1iZXInLCBzdGFja0lkOiAncHJvamVjdCcsIGZpbGw6IENIQVJUX0NPTE9SX1BBTEVUVEVbMV0gfSxcbiAgICAgIC8vIHsgbGFiZWw6ICdUb3RhbCcsIGRhdGFLZXk6ICdpc3N1ZV90b3RhbF9udW1iZXInLCBzdGFja0lkOiAncHJvamVjdCcgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+W0RlbW9dIElzc3VlcyAtIExlZ2VuZHM8L2gxPlxuICAgICAgPGgyPkRlZmF1bHQ8L2gyPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnQgZGF0YT17ZGF0YX0gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoMj5UcmFuc3Bvc2VkPC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICB0cmFuc3Bvc2VkOiB0cnVlLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdbRGVtb10gSXNzdWVzIC0gTGVnZW5kcyc7XG4iXX0=