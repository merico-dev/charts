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

var _multipleValues = _interopRequireDefault(require("../mocks/multiple-values.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  var lines = {
    normal: {
      key: 'composing-line-uv',
      type: 'monotone',
      name: 'UV',
      dataKey: 'uv',
      yAxisId: 'uv',
      stroke: '#ff7300'
    },
    transposed: {
      key: 'composing-line-uv',
      type: 'monotone',
      name: 'UV',
      dataKey: 'uv',
      stroke: '#ff7300'
    }
  };
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: false
    },
    labelKey: 'name',
    subSeriesConfiguration: [{
      label: 'Male',
      dataKey: 'male'
    }, {
      label: 'Female',
      dataKey: 'female'
    }],
    tooltipExcludedNames: ['UV'] // HERE

  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Composed with Line (Multiple Values)"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _multipleValues["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      composingLines: [lines.normal],
      additionalYAxis: {
        yAxisId: 'uv',
        dataKey: 'uv',
        axisLine: true,
        orientation: 'right',
        tickLabelPosition: 'insideRight'
      }
    })
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "Transposed"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _multipleValues["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      transposed: true,
      yAxis: {
        axisLine: false,
        tickLine: false
      },
      composingLines: [lines.transposed]
    })
  })));
};

exports.content = content;
var name = 'Composed with Line - Multiple Values';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2NvbXBvc2VkLXdpdGgtbGluZXMvbXVsdGlwbGUtdmFsdWVzLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImxpbmVzIiwibm9ybWFsIiwia2V5IiwidHlwZSIsIm5hbWUiLCJkYXRhS2V5IiwieUF4aXNJZCIsInN0cm9rZSIsInRyYW5zcG9zZWQiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwibGVnZW5kIiwiZW5hYmxlZCIsImxhYmVsS2V5Iiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwidG9vbHRpcEV4Y2x1ZGVkTmFtZXMiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJkYXRhIiwiY29tcG9zaW5nTGluZXMiLCJhZGRpdGlvbmFsWUF4aXMiLCJheGlzTGluZSIsIm9yaWVudGF0aW9uIiwidGlja0xhYmVsUG9zaXRpb24iLCJ5QXhpcyIsInRpY2tMaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLEdBQUcsRUFBRSxtQkFEQztBQUVOQyxNQUFBQSxJQUFJLEVBQUUsVUFGQTtBQUdOQyxNQUFBQSxJQUFJLEVBQUUsSUFIQTtBQUlOQyxNQUFBQSxPQUFPLEVBQUUsSUFKSDtBQUtOQyxNQUFBQSxPQUFPLEVBQUUsSUFMSDtBQU1OQyxNQUFBQSxNQUFNLEVBQUU7QUFORixLQURJO0FBU1pDLElBQUFBLFVBQVUsRUFBRTtBQUNWTixNQUFBQSxHQUFHLEVBQUUsbUJBREs7QUFFVkMsTUFBQUEsSUFBSSxFQUFFLFVBRkk7QUFHVkMsTUFBQUEsSUFBSSxFQUFFLElBSEk7QUFJVkMsTUFBQUEsT0FBTyxFQUFFLElBSkM7QUFLVkUsTUFBQUEsTUFBTSxFQUFFO0FBTEU7QUFUQSxHQUFkO0FBaUJBLE1BQU1FLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESCxLQUZhO0FBS3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFMVztBQU1yQkMsSUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEI7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJWLE1BQUFBLE9BQU8sRUFBRTtBQUExQixLQURzQixFQUV0QjtBQUFFVSxNQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQlYsTUFBQUEsT0FBTyxFQUFFO0FBQTVCLEtBRnNCLENBTkg7QUFVckJXLElBQUFBLG9CQUFvQixFQUFFLENBQUMsSUFBRCxDQVZELENBVVM7O0FBVlQsR0FBdkI7QUFZQSxzQkFDRSwwREFDRSxtRkFERixlQUVFLHNEQUZGLGVBR0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUUsR0FBdEI7QUFBMkJDLE1BQUFBLGFBQWEsRUFBRTtBQUExQztBQUFaLGtCQUNFLGdDQUFDLDRCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVDLDBCQURSO0FBRUUsSUFBQSxjQUFjLGtDQUNUWCxjQURTO0FBRVpZLE1BQUFBLGNBQWMsRUFBRSxDQUFDckIsS0FBSyxDQUFDQyxNQUFQLENBRko7QUFHWnFCLE1BQUFBLGVBQWUsRUFBRTtBQUNmaEIsUUFBQUEsT0FBTyxFQUFFLElBRE07QUFFZkQsUUFBQUEsT0FBTyxFQUFFLElBRk07QUFHZmtCLFFBQUFBLFFBQVEsRUFBRSxJQUhLO0FBSWZDLFFBQUFBLFdBQVcsRUFBRSxPQUpFO0FBS2ZDLFFBQUFBLGlCQUFpQixFQUFFO0FBTEo7QUFITDtBQUZoQixJQURGLENBSEYsZUFvQkUseURBcEJGLGVBcUJFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRVIsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFBQSxhQUFhLEVBQUU7QUFBMUM7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFQywwQkFEUjtBQUVFLElBQUEsY0FBYyxrQ0FDVFgsY0FEUztBQUVaRCxNQUFBQSxVQUFVLEVBQUUsSUFGQTtBQUdaa0IsTUFBQUEsS0FBSyxFQUFFO0FBQ0xILFFBQUFBLFFBQVEsRUFBRSxLQURMO0FBRUxJLFFBQUFBLFFBQVEsRUFBRTtBQUZMLE9BSEs7QUFPWk4sTUFBQUEsY0FBYyxFQUFFLENBQUNyQixLQUFLLENBQUNRLFVBQVA7QUFQSjtBQUZoQixJQURGLENBckJGLENBREY7QUFzQ0QsQ0FwRU07OztBQXFFQSxJQUFNSixJQUFJLEdBQUcsc0NBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4uL21vY2tzL211bHRpcGxlLXZhbHVlcy5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBsaW5lcyA9IHtcbiAgICBub3JtYWw6IHtcbiAgICAgIGtleTogJ2NvbXBvc2luZy1saW5lLXV2JyxcbiAgICAgIHR5cGU6ICdtb25vdG9uZScsXG4gICAgICBuYW1lOiAnVVYnLFxuICAgICAgZGF0YUtleTogJ3V2JyxcbiAgICAgIHlBeGlzSWQ6ICd1dicsXG4gICAgICBzdHJva2U6ICcjZmY3MzAwJyxcbiAgICB9LFxuICAgIHRyYW5zcG9zZWQ6IHtcbiAgICAgIGtleTogJ2NvbXBvc2luZy1saW5lLXV2JyxcbiAgICAgIHR5cGU6ICdtb25vdG9uZScsXG4gICAgICBuYW1lOiAnVVYnLFxuICAgICAgZGF0YUtleTogJ3V2JyxcbiAgICAgIHN0cm9rZTogJyNmZjczMDAnLFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIGxlZ2VuZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBsYWJlbEtleTogJ25hbWUnLFxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFtcbiAgICAgIHsgbGFiZWw6ICdNYWxlJywgZGF0YUtleTogJ21hbGUnIH0sXG4gICAgICB7IGxhYmVsOiAnRmVtYWxlJywgZGF0YUtleTogJ2ZlbWFsZScgfSxcbiAgICBdLFxuICAgIHRvb2x0aXBFeGNsdWRlZE5hbWVzOiBbJ1VWJ10sIC8vIEhFUkVcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNvbXBvc2VkIHdpdGggTGluZSAoTXVsdGlwbGUgVmFsdWVzKTwvaDE+XG4gICAgICA8aDI+RGVmYXVsdDwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBwYWRkaW5nQm90dG9tOiAxMDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICBjb21wb3NpbmdMaW5lczogW2xpbmVzLm5vcm1hbF0sXG4gICAgICAgICAgICBhZGRpdGlvbmFsWUF4aXM6IHtcbiAgICAgICAgICAgICAgeUF4aXNJZDogJ3V2JyxcbiAgICAgICAgICAgICAgZGF0YUtleTogJ3V2JyxcbiAgICAgICAgICAgICAgYXhpc0xpbmU6IHRydWUsXG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICB0aWNrTGFiZWxQb3NpdGlvbjogJ2luc2lkZVJpZ2h0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDI+VHJhbnNwb3NlZDwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBwYWRkaW5nQm90dG9tOiAxMDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICB0cmFuc3Bvc2VkOiB0cnVlLFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgYXhpc0xpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9zaW5nTGluZXM6IFtsaW5lcy50cmFuc3Bvc2VkXSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnQ29tcG9zZWQgd2l0aCBMaW5lIC0gTXVsdGlwbGUgVmFsdWVzJztcbiJdfQ==