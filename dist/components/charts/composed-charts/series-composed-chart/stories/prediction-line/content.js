"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Content;

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _lodash = require("lodash");

var _prediction = require("../../../../../helpers/prediction");

var _helpers = require("./helpers");

var _seriesComposedChart = _interopRequireDefault(require("../../series-composed-chart"));

// 生成预测数据，和config
function getPredictionLine(series, _ref) {
  var type = _ref.type,
      key = _ref.key,
      labelKey = _ref.labelKey,
      valueKey = _ref.valueKey;

  // 数据
  var _calcPredictionData = (0, _prediction.calcPredictionData)({
    type: type,
    data: series,
    x: labelKey,
    y: valueKey
  }),
      lineData = _calcPredictionData.lineData;

  lineData.forEach(function (item) {
    item[key] = item[valueKey];
    delete item[valueKey];
  }); // config

  var predictionLine = {
    key: key,
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ key: any; type: any; color: string; stroke... Remove this comment to see the full error message
    type: type,
    color: 'blue',
    strokeDasharray: '3',
    data: lineData,
    dataKey: key,
    labelKey: labelKey,
    valueKey: key,
    yAxisId: 'accumulatively'
  };
  return {
    lineData: lineData,
    predictionLine: predictionLine
  };
}

var LABEL_KEY = 'date';

function Content(_ref2) {
  var _ref2$extendDays = _ref2.extendDays,
      extendDays = _ref2$extendDays === void 0 ? 0 : _ref2$extendDays,
      dataCount = _ref2.dataCount,
      scale = _ref2.scale;

  var _React$useState = _react["default"].useState([]),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      filteredSeries = _React$useState2[0],
      setFilteredSeries = _React$useState2[1]; // 生成原始数据


  var originalSeries = (0, _react.useMemo)((0, _helpers.calcUpwardsSeriesData)({
    dataCount: dataCount,
    extendDays: extendDays
  }), [dataCount]); // 为原始数据填补预测线的日期范围（在3.0中是按照迭代周期填补）

  var withSpaces = (0, _react.useMemo)(function () {
    var ret = (0, _lodash.cloneDeep)(originalSeries);
    var lastDate = (0, _moment["default"])((0, _lodash.last)(ret).date);
    var tailingDates = (0, _from["default"])(new Array(extendDays), function () {
      return {
        'line-1': null,
        'line-2': null,
        date: lastDate.add(1, 'days').toISOString()
      };
    });
    return ret.concat(tailingDates);
  }, [originalSeries, extendDays]); // 填补预测数据

  var _useMemo = (0, _react.useMemo)(function () {
    var series = (0, _lodash.cloneDeep)(withSpaces);
    var KEY = 'line-1-prediction';
    var VALUE_KEY = 'line-1'; // 生成预测数据

    var _getPredictionLine = getPredictionLine(series, {
      type: _prediction.PREDICTION_TYPES.regressionLinear,
      key: KEY,
      labelKey: LABEL_KEY,
      valueKey: VALUE_KEY
    }),
        lineData = _getPredictionLine.lineData,
        predictionLine = _getPredictionLine.predictionLine;

    var lineDataMap = (0, _lodash.keyBy)(lineData, LABEL_KEY);
    series.forEach(function (item) {
      var date = item[LABEL_KEY];

      if (lineDataMap[date] !== undefined) {
        // @ts-expect-error ts-migrate(7015) FIXME: Element implicitly has an 'any' type because index... Remove this comment to see the full error message
        item[KEY] = lineDataMap[date][KEY]; // 按 date 把预测点数据补上
      }
    });
    return {
      series: series,
      predictionLines: [predictionLine]
    };
  }, [withSpaces]),
      series = _useMemo.series,
      predictionLines = _useMemo.predictionLines;

  var configurations = {
    withTooltip: true,
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'MM-DD'
    },
    xAxis: {
      tickLine: false,
      axisLine: false,
      name: '',
      scale: scale
    },
    // Y Axis for line
    yAxis: {
      yAxisId: 'accumulatively',
      axisLine: false,
      tickLine: false,
      name: '',
      preserveTickZero: true
    },
    valueFormatter: function valueFormatter(v) {
      return v >= 0 ? v : '';
    },
    // hide negative value on Y Axis for line
    tooltipExcludedNames: ['Issue Range', 'line-1-prediction'],
    // match subSeries's label
    subSeriesConfiguration: [{
      label: 'Total Issues',
      dataKey: 'line-1',
      chartType: 'line',
      interpolationType: 'monotone',
      dot: false,
      yAxisId: 'accumulatively',
      stroke: 'rgba(232,71,28,1)',
      fill: 'rgba(232,71,28,1)'
    }, {
      label: 'Total Something Else',
      dataKey: 'line-2',
      chartType: 'line',
      interpolationType: 'monotone',
      dot: false,
      yAxisId: 'accumulatively',
      stroke: '#F0876A',
      strokeDasharray: '4',
      fill: '#F0876A'
    }, {
      label: 'Bar',
      key: 'line-1-bar',
      dataKey: 'line-1',
      chartType: 'bar',
      yAxisId: 'accumulatively',
      stroke: 'rgba(232,71,28,0.5)',
      fill: 'rgba(232,71,28,0.5)'
    }],
    predictionLines: predictionLines
  }; // sync filter status between line and its prediction line

  var filterSeries = _react["default"].useCallback(function (values) {
    if (values.length === 0) {
      setFilteredSeries(values);
      return;
    }

    var s = new _set["default"](values);

    if (s.has('Total Issues')) {
      s.add('line-1-prediction');
    } else {
      s["delete"]('line-1-prediction');
    }

    setFilteredSeries((0, _from["default"])(s));
  }, [setFilteredSeries]);

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Prediction Lines"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 400
    }
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: series,
    configurations: configurations,
    filteredSeries: filteredSeries,
    setFilteredSeries: filterSeries
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvcHJlZGljdGlvbi1saW5lL2NvbnRlbnQudHN4Il0sIm5hbWVzIjpbImdldFByZWRpY3Rpb25MaW5lIiwic2VyaWVzIiwidHlwZSIsImtleSIsImxhYmVsS2V5IiwidmFsdWVLZXkiLCJkYXRhIiwieCIsInkiLCJsaW5lRGF0YSIsImZvckVhY2giLCJpdGVtIiwicHJlZGljdGlvbkxpbmUiLCJjb2xvciIsInN0cm9rZURhc2hhcnJheSIsImRhdGFLZXkiLCJ5QXhpc0lkIiwiTEFCRUxfS0VZIiwiQ29udGVudCIsImV4dGVuZERheXMiLCJkYXRhQ291bnQiLCJzY2FsZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJmaWx0ZXJlZFNlcmllcyIsInNldEZpbHRlcmVkU2VyaWVzIiwib3JpZ2luYWxTZXJpZXMiLCJ3aXRoU3BhY2VzIiwicmV0IiwibGFzdERhdGUiLCJkYXRlIiwidGFpbGluZ0RhdGVzIiwiQXJyYXkiLCJhZGQiLCJ0b0lTT1N0cmluZyIsImNvbmNhdCIsIktFWSIsIlZBTFVFX0tFWSIsIlBSRURJQ1RJT05fVFlQRVMiLCJyZWdyZXNzaW9uTGluZWFyIiwibGluZURhdGFNYXAiLCJ1bmRlZmluZWQiLCJwcmVkaWN0aW9uTGluZXMiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwibGFiZWxGb3JtYXR0ZXIiLCJmb3JtYXQiLCJ4QXhpcyIsInRpY2tMaW5lIiwiYXhpc0xpbmUiLCJuYW1lIiwieUF4aXMiLCJwcmVzZXJ2ZVRpY2taZXJvIiwidmFsdWVGb3JtYXR0ZXIiLCJ2IiwidG9vbHRpcEV4Y2x1ZGVkTmFtZXMiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJjaGFydFR5cGUiLCJpbnRlcnBvbGF0aW9uVHlwZSIsImRvdCIsInN0cm9rZSIsImZpbGwiLCJmaWx0ZXJT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QU0sbUJBQU47QUFDRCxLQUZELE1BRU87QUFDTGtDLE1BQUFBLENBQUMsVUFBRCxDQUFTLG1CQUFUO0FBQ0Q7O0FBQ0QxQyxJQUFBQSxpQkFBaUIsQ0FBQyxzQkFBVzBDLENBQVgsQ0FBRCxDQUFqQjtBQUNELEdBYmtCLEVBY25CLENBQUMxQyxpQkFBRCxDQWRtQixDQUFyQjs7QUFpQkEsc0JBQ0UsMERBQ0UsK0RBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUU0QyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQywrQkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFckUsTUFEUjtBQUVFLElBQUEsY0FBYyxFQUFFMEMsY0FGbEI7QUFHRSxJQUFBLGNBQWMsRUFBRW5CLGNBSGxCO0FBSUUsSUFBQSxpQkFBaUIsRUFBRXVDO0FBSnJCLElBREYsQ0FGRixDQURGO0FBYUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IGNsb25lRGVlcCwga2V5QnksIGxhc3QgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBQcmVkaWN0aW9uTGluZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlY2hhcnRzL3ByZWRpY3Rpb24tbGluZSc7XG5pbXBvcnQgeyBjYWxjUHJlZGljdGlvbkRhdGEsIFBSRURJQ1RJT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9oZWxwZXJzL3ByZWRpY3Rpb24nO1xuaW1wb3J0IHsgY2FsY1Vwd2FyZHNTZXJpZXNEYXRhIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCBTZXJpZXNDb21wb3NlZENoYXJ0LCB7IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyB9IGZyb20gJy4uLy4uL3Nlcmllcy1jb21wb3NlZC1jaGFydCc7XG5cbi8vIOeUn+aIkOmihOa1i+aVsOaNru+8jOWSjGNvbmZpZ1xuZnVuY3Rpb24gZ2V0UHJlZGljdGlvbkxpbmUoc2VyaWVzOiBhbnksIHsgdHlwZSwga2V5LCBsYWJlbEtleSwgdmFsdWVLZXkgfTogYW55KSB7XG4gIC8vIOaVsOaNrlxuICBjb25zdCB7IGxpbmVEYXRhIH0gPSBjYWxjUHJlZGljdGlvbkRhdGEoe1xuICAgIHR5cGUsXG4gICAgZGF0YTogc2VyaWVzLFxuICAgIHg6IGxhYmVsS2V5LFxuICAgIHk6IHZhbHVlS2V5LFxuICB9KTtcbiAgbGluZURhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW1ba2V5XSA9IGl0ZW1bdmFsdWVLZXldO1xuICAgIGRlbGV0ZSBpdGVtW3ZhbHVlS2V5XTtcbiAgfSk7XG5cbiAgLy8gY29uZmlnXG4gIGNvbnN0IHByZWRpY3Rpb25MaW5lOiBQcmVkaWN0aW9uTGluZUNvbmZpZyA9IHtcbiAgICBrZXksXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMjIpIEZJWE1FOiBUeXBlICd7IGtleTogYW55OyB0eXBlOiBhbnk7IGNvbG9yOiBzdHJpbmc7IHN0cm9rZS4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgdHlwZSxcbiAgICBjb2xvcjogJ2JsdWUnLFxuICAgIHN0cm9rZURhc2hhcnJheTogJzMnLFxuICAgIGRhdGE6IGxpbmVEYXRhLFxuICAgIGRhdGFLZXk6IGtleSxcbiAgICBsYWJlbEtleTogbGFiZWxLZXksXG4gICAgdmFsdWVLZXk6IGtleSxcbiAgICB5QXhpc0lkOiAnYWNjdW11bGF0aXZlbHknLFxuICB9O1xuICByZXR1cm4ge1xuICAgIGxpbmVEYXRhLFxuICAgIHByZWRpY3Rpb25MaW5lLFxuICB9O1xufVxuXG5jb25zdCBMQUJFTF9LRVkgPSAnZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnQoeyBleHRlbmREYXlzID0gMCwgZGF0YUNvdW50LCBzY2FsZSB9OiBhbnkpIHtcbiAgY29uc3QgW2ZpbHRlcmVkU2VyaWVzLCBzZXRGaWx0ZXJlZFNlcmllc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gIC8vIOeUn+aIkOWOn+Wni+aVsOaNrlxuICBjb25zdCBvcmlnaW5hbFNlcmllcyA9IHVzZU1lbW8oY2FsY1Vwd2FyZHNTZXJpZXNEYXRhKHsgZGF0YUNvdW50LCBleHRlbmREYXlzIH0pLCBbZGF0YUNvdW50XSk7XG4gIC8vIOS4uuWOn+Wni+aVsOaNruWhq+ihpemihOa1i+e6v+eahOaXpeacn+iMg+WbtO+8iOWcqDMuMOS4reaYr+aMieeFp+i/reS7o+WRqOacn+Whq+ihpe+8iVxuICBjb25zdCB3aXRoU3BhY2VzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gY2xvbmVEZWVwKG9yaWdpbmFsU2VyaWVzKTtcbiAgICBjb25zdCBsYXN0RGF0ZSA9IG1vbWVudChsYXN0KHJldCkuZGF0ZSk7XG4gICAgY29uc3QgdGFpbGluZ0RhdGVzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkoZXh0ZW5kRGF5cyksICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdsaW5lLTEnOiBudWxsLFxuICAgICAgICAnbGluZS0yJzogbnVsbCxcbiAgICAgICAgZGF0ZTogbGFzdERhdGUuYWRkKDEsICdkYXlzJykudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldC5jb25jYXQodGFpbGluZ0RhdGVzKTtcbiAgfSwgW29yaWdpbmFsU2VyaWVzLCBleHRlbmREYXlzXSk7XG5cbiAgLy8g5aGr6KGl6aKE5rWL5pWw5o2uXG4gIGNvbnN0IHsgc2VyaWVzLCBwcmVkaWN0aW9uTGluZXMgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHNlcmllcyA9IGNsb25lRGVlcCh3aXRoU3BhY2VzKTtcbiAgICBjb25zdCBLRVkgPSAnbGluZS0xLXByZWRpY3Rpb24nO1xuICAgIGNvbnN0IFZBTFVFX0tFWSA9ICdsaW5lLTEnO1xuICAgIC8vIOeUn+aIkOmihOa1i+aVsOaNrlxuICAgIGNvbnN0IHsgbGluZURhdGEsIHByZWRpY3Rpb25MaW5lIH0gPSBnZXRQcmVkaWN0aW9uTGluZShzZXJpZXMsIHtcbiAgICAgIHR5cGU6IFBSRURJQ1RJT05fVFlQRVMucmVncmVzc2lvbkxpbmVhcixcbiAgICAgIGtleTogS0VZLFxuICAgICAgbGFiZWxLZXk6IExBQkVMX0tFWSxcbiAgICAgIHZhbHVlS2V5OiBWQUxVRV9LRVksXG4gICAgfSk7XG4gICAgY29uc3QgbGluZURhdGFNYXAgPSBrZXlCeShsaW5lRGF0YSwgTEFCRUxfS0VZKTtcbiAgICBzZXJpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IGl0ZW1bTEFCRUxfS0VZXTtcbiAgICAgIGlmIChsaW5lRGF0YU1hcFtkYXRlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSg3MDE1KSBGSVhNRTogRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgaW5kZXguLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgICAgICBpdGVtW0tFWV0gPSBsaW5lRGF0YU1hcFtkYXRlXVtLRVldOyAvLyDmjIkgZGF0ZSDmiorpooTmtYvngrnmlbDmja7ooaXkuIpcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzLFxuICAgICAgcHJlZGljdGlvbkxpbmVzOiBbcHJlZGljdGlvbkxpbmVdLFxuICAgIH07XG4gIH0sIFt3aXRoU3BhY2VzXSk7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnM6IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsYWJlbEtleTogJ2RhdGUnLFxuICAgIGxhYmVsRm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnREFURV9USU1FJyxcbiAgICAgIGZvcm1hdDogJ01NLUREJyxcbiAgICB9LFxuICAgIHhBeGlzOiB7XG4gICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICBheGlzTGluZTogZmFsc2UsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHNjYWxlLFxuICAgIH0sXG4gICAgLy8gWSBBeGlzIGZvciBsaW5lXG4gICAgeUF4aXM6IHtcbiAgICAgIHlBeGlzSWQ6ICdhY2N1bXVsYXRpdmVseScsXG4gICAgICBheGlzTGluZTogZmFsc2UsXG4gICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHByZXNlcnZlVGlja1plcm86IHRydWUsXG4gICAgfSxcbiAgICB2YWx1ZUZvcm1hdHRlcjogKHY6IGFueSkgPT4gKHYgPj0gMCA/IHYgOiAnJyksIC8vIGhpZGUgbmVnYXRpdmUgdmFsdWUgb24gWSBBeGlzIGZvciBsaW5lXG4gICAgdG9vbHRpcEV4Y2x1ZGVkTmFtZXM6IFsnSXNzdWUgUmFuZ2UnLCAnbGluZS0xLXByZWRpY3Rpb24nXSwgLy8gbWF0Y2ggc3ViU2VyaWVzJ3MgbGFiZWxcblxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUb3RhbCBJc3N1ZXMnLFxuICAgICAgICBkYXRhS2V5OiAnbGluZS0xJyxcbiAgICAgICAgY2hhcnRUeXBlOiAnbGluZScsXG4gICAgICAgIGludGVycG9sYXRpb25UeXBlOiAnbW9ub3RvbmUnLFxuICAgICAgICBkb3Q6IGZhbHNlLFxuICAgICAgICB5QXhpc0lkOiAnYWNjdW11bGF0aXZlbHknLFxuICAgICAgICBzdHJva2U6ICdyZ2JhKDIzMiw3MSwyOCwxKScsXG4gICAgICAgIGZpbGw6ICdyZ2JhKDIzMiw3MSwyOCwxKScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RvdGFsIFNvbWV0aGluZyBFbHNlJyxcbiAgICAgICAgZGF0YUtleTogJ2xpbmUtMicsXG4gICAgICAgIGNoYXJ0VHlwZTogJ2xpbmUnLFxuICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ21vbm90b25lJyxcbiAgICAgICAgZG90OiBmYWxzZSxcbiAgICAgICAgeUF4aXNJZDogJ2FjY3VtdWxhdGl2ZWx5JyxcbiAgICAgICAgc3Ryb2tlOiAnI0YwODc2QScsXG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogJzQnLFxuICAgICAgICBmaWxsOiAnI0YwODc2QScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0JhcicsXG4gICAgICAgIGtleTogJ2xpbmUtMS1iYXInLFxuICAgICAgICBkYXRhS2V5OiAnbGluZS0xJyxcbiAgICAgICAgY2hhcnRUeXBlOiAnYmFyJyxcbiAgICAgICAgeUF4aXNJZDogJ2FjY3VtdWxhdGl2ZWx5JyxcbiAgICAgICAgc3Ryb2tlOiAncmdiYSgyMzIsNzEsMjgsMC41KScsXG4gICAgICAgIGZpbGw6ICdyZ2JhKDIzMiw3MSwyOCwwLjUpJyxcbiAgICAgIH0sXG4gICAgXSxcblxuICAgIHByZWRpY3Rpb25MaW5lcyxcbiAgfTtcblxuICAvLyBzeW5jIGZpbHRlciBzdGF0dXMgYmV0d2VlbiBsaW5lIGFuZCBpdHMgcHJlZGljdGlvbiBsaW5lXG4gIGNvbnN0IGZpbHRlclNlcmllcyA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzZXRGaWx0ZXJlZFNlcmllcyh2YWx1ZXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzID0gbmV3IFNldCh2YWx1ZXMpO1xuICAgICAgaWYgKHMuaGFzKCdUb3RhbCBJc3N1ZXMnKSkge1xuICAgICAgICBzLmFkZCgnbGluZS0xLXByZWRpY3Rpb24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMuZGVsZXRlKCdsaW5lLTEtcHJlZGljdGlvbicpO1xuICAgICAgfVxuICAgICAgc2V0RmlsdGVyZWRTZXJpZXMoQXJyYXkuZnJvbShzKSk7XG4gICAgfSxcbiAgICBbc2V0RmlsdGVyZWRTZXJpZXNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlByZWRpY3Rpb24gTGluZXM8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogNjAwLCBoZWlnaHQ6IDQwMCB9fT5cbiAgICAgICAgPFNlcmllc0NvbXBvc2VkQ2hhcnRcbiAgICAgICAgICBkYXRhPXtzZXJpZXN9XG4gICAgICAgICAgY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfVxuICAgICAgICAgIGZpbHRlcmVkU2VyaWVzPXtmaWx0ZXJlZFNlcmllc31cbiAgICAgICAgICBzZXRGaWx0ZXJlZFNlcmllcz17ZmlsdGVyU2VyaWVzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=