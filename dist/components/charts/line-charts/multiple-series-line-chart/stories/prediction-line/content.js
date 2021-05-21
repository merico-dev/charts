"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = Content;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _multipleSeriesLineChart = _interopRequireDefault(require("../../multiple-series-line-chart"));

var _prediction = require("../../../../../helpers/prediction");

var _helpers = require("../helpers");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function Content(_ref) {
  var extendDays = _ref.extendDays,
      dataCount = _ref.dataCount;
  var seriesUp = (0, _react.useMemo)((0, _helpers.calcUpwardsSeriesData)(dataCount, extendDays), [dataCount, extendDays]);
  var seriesDown = (0, _react.useMemo)((0, _helpers.calcDownwardsSeriesData)(dataCount, extendDays), [dataCount, extendDays]);
  var configurations = {
    withTooltip: true,
    interpolationType: 'linear',
    labelKey: 'date',
    labelFormatter: {
      type: 'PERIOD',
      format: '1d'
    },
    xAxis: {
      name: ''
    },
    yAxis: {
      name: 'DevEq'
    },
    // HERE
    getRefPredictionLine: function getRefPredictionLine(series) {
      return {
        enabled: true,
        key: "prediction-line-".concat(series.id),
        type: _prediction.PREDICTION_TYPES.regressionLinear,
        color: '#3b6efd',
        strokeDashArray: '3'
      };
    },
    valueKey: 'value',
    seriesDataKey: 'series',
    seriesNameKey: 'id',
    xTickCount: 4,
    legend: {
      enabled: true
    }
  };
  var excludedNames = (0, _react.useMemo)(function () {
    return {
      up: seriesUp.map(function (_ref2) {
        var id = _ref2.id;
        return "prediction-line-".concat(id);
      }),
      down: seriesDown.map(function (_ref3) {
        var id = _ref3.id;
        return "prediction-line-".concat(id);
      })
    };
  }, [seriesUp, seriesDown]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Prediction Line"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    columns: 2
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Going up"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 400
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: seriesUp,
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      tooltipExcludedNames: excludedNames.up
    })
  }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Burning down"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 400
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: seriesDown,
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      tooltipExcludedNames: excludedNames.down
    })
  })))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL3ByZWRpY3Rpb24tbGluZS9jb250ZW50LnRzeCJdLCJuYW1lcyI6WyJDb250ZW50IiwiZXh0ZW5kRGF5cyIsImRhdGFDb3VudCIsInNlcmllc1VwIiwic2VyaWVzRG93biIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJpbnRlcnBvbGF0aW9uVHlwZSIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0IiwieEF4aXMiLCJuYW1lIiwieUF4aXMiLCJnZXRSZWZQcmVkaWN0aW9uTGluZSIsInNlcmllcyIsImVuYWJsZWQiLCJrZXkiLCJpZCIsIlBSRURJQ1RJT05fVFlQRVMiLCJyZWdyZXNzaW9uTGluZWFyIiwiY29sb3IiLCJzdHJva2VEYXNoQXJyYXkiLCJ2YWx1ZUtleSIsInNlcmllc0RhdGFLZXkiLCJzZXJpZXNOYW1lS2V5IiwieFRpY2tDb3VudCIsImxlZ2VuZCIsImV4Y2x1ZGVkTmFtZXMiLCJ1cCIsIm1hcCIsImRvd24iLCJ3aWR0aCIsImhlaWdodCIsInRvb2x0aXBFeGNsdWRlZE5hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLE9BQVQsT0FBaUQ7QUFBQSxNQUE5QkMsVUFBOEIsUUFBOUJBLFVBQThCO0FBQUEsTUFBbEJDLFNBQWtCLFFBQWxCQSxTQUFrQjtBQUM5RCxNQUFNQyxRQUFRLEdBQUcsb0JBQVEsb0NBQXNCRCxTQUF0QixFQUFpQ0QsVUFBakMsQ0FBUixFQUFzRCxDQUFDQyxTQUFELEVBQVlELFVBQVosQ0FBdEQsQ0FBakI7QUFDQSxNQUFNRyxVQUFVLEdBQUcsb0JBQVEsc0NBQXdCRixTQUF4QixFQUFtQ0QsVUFBbkMsQ0FBUixFQUF3RCxDQUFDQyxTQUFELEVBQVlELFVBQVosQ0FBeEQsQ0FBbkI7QUFFQSxNQUFNSSxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxpQkFBaUIsRUFBRSxRQUZFO0FBR3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFIVztBQUlyQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxRQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNLEtBSks7QUFRckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVJjO0FBV3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FYYztBQWNyQjtBQUNBRSxJQUFBQSxvQkFBb0IsRUFBRSw4QkFBQ0MsTUFBRDtBQUFBLGFBQWtCO0FBQ3RDQyxRQUFBQSxPQUFPLEVBQUUsSUFENkI7QUFFdENDLFFBQUFBLEdBQUcsNEJBQXFCRixNQUFNLENBQUNHLEVBQTVCLENBRm1DO0FBR3RDVCxRQUFBQSxJQUFJLEVBQUVVLDZCQUFpQkMsZ0JBSGU7QUFJdENDLFFBQUFBLEtBQUssRUFBRSxTQUorQjtBQUt0Q0MsUUFBQUEsZUFBZSxFQUFFO0FBTHFCLE9BQWxCO0FBQUEsS0FmRDtBQXNCckJDLElBQUFBLFFBQVEsRUFBRSxPQXRCVztBQXVCckJDLElBQUFBLGFBQWEsRUFBRSxRQXZCTTtBQXdCckJDLElBQUFBLGFBQWEsRUFBRSxJQXhCTTtBQXlCckJDLElBQUFBLFVBQVUsRUFBRSxDQXpCUztBQTBCckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOWCxNQUFBQSxPQUFPLEVBQUU7QUFESDtBQTFCYSxHQUF2QjtBQStCQSxNQUFNWSxhQUFhLEdBQUcsb0JBQVEsWUFBTTtBQUNsQyxXQUFPO0FBQ0xDLE1BQUFBLEVBQUUsRUFBRTNCLFFBQVEsQ0FBQzRCLEdBQVQsQ0FBYTtBQUFBLFlBQUdaLEVBQUgsU0FBR0EsRUFBSDtBQUFBLHlDQUErQkEsRUFBL0I7QUFBQSxPQUFiLENBREM7QUFFTGEsTUFBQUEsSUFBSSxFQUFFNUIsVUFBVSxDQUFDMkIsR0FBWCxDQUFlO0FBQUEsWUFBR1osRUFBSCxTQUFHQSxFQUFIO0FBQUEseUNBQStCQSxFQUEvQjtBQUFBLE9BQWY7QUFGRCxLQUFQO0FBSUQsR0FMcUIsRUFLbkIsQ0FBQ2hCLFFBQUQsRUFBV0MsVUFBWCxDQUxtQixDQUF0QjtBQU9BLHNCQUNFLDBEQUNFLDhEQURGLGVBRUUsZ0NBQUMscUJBQUQ7QUFBTSxJQUFBLE9BQU8sRUFBRTtBQUFmLGtCQUNFLGdDQUFDLHFCQUFELENBQU0sTUFBTixxQkFDRSx1REFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRTZCLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLG1DQUFEO0FBQ0UsSUFBQSxNQUFNLEVBQUUvQixRQURWO0FBRUUsSUFBQSxjQUFjLGtDQUNURSxjQURTO0FBRVo4QixNQUFBQSxvQkFBb0IsRUFBRU4sYUFBYSxDQUFDQztBQUZ4QjtBQUZoQixJQURGLENBRkYsQ0FERixlQWNFLGdDQUFDLHFCQUFELENBQU0sTUFBTixxQkFDRSwyREFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUcsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsbUNBQUQ7QUFDRSxJQUFBLE1BQU0sRUFBRTlCLFVBRFY7QUFFRSxJQUFBLGNBQWMsa0NBQ1RDLGNBRFM7QUFFWjhCLE1BQUFBLG9CQUFvQixFQUFFTixhQUFhLENBQUNHO0FBRnhCO0FBRmhCLElBREYsQ0FGRixDQWRGLENBRkYsQ0FERjtBQWdDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBNdWx0aXBsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi8uLi9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydCc7XG5pbXBvcnQgeyBQUkVESUNUSU9OX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaGVscGVycy9wcmVkaWN0aW9uJztcbmltcG9ydCB7IGNhbGNEb3dud2FyZHNTZXJpZXNEYXRhLCBjYWxjVXB3YXJkc1Nlcmllc0RhdGEgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudCh7IGV4dGVuZERheXMsIGRhdGFDb3VudCB9OiBhbnkpIHtcbiAgY29uc3Qgc2VyaWVzVXAgPSB1c2VNZW1vKGNhbGNVcHdhcmRzU2VyaWVzRGF0YShkYXRhQ291bnQsIGV4dGVuZERheXMpLCBbZGF0YUNvdW50LCBleHRlbmREYXlzXSk7XG4gIGNvbnN0IHNlcmllc0Rvd24gPSB1c2VNZW1vKGNhbGNEb3dud2FyZHNTZXJpZXNEYXRhKGRhdGFDb3VudCwgZXh0ZW5kRGF5cyksIFtkYXRhQ291bnQsIGV4dGVuZERheXNdKTtcblxuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ2xpbmVhcicsXG4gICAgbGFiZWxLZXk6ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ1BFUklPRCcsXG4gICAgICBmb3JtYXQ6ICcxZCcsXG4gICAgfSxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJycsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldkVxJyxcbiAgICB9LFxuICAgIC8vIEhFUkVcbiAgICBnZXRSZWZQcmVkaWN0aW9uTGluZTogKHNlcmllczogYW55KSA9PiAoe1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIGtleTogYHByZWRpY3Rpb24tbGluZS0ke3Nlcmllcy5pZH1gLFxuICAgICAgdHlwZTogUFJFRElDVElPTl9UWVBFUy5yZWdyZXNzaW9uTGluZWFyLFxuICAgICAgY29sb3I6ICcjM2I2ZWZkJyxcbiAgICAgIHN0cm9rZURhc2hBcnJheTogJzMnLFxuICAgIH0pLFxuICAgIHZhbHVlS2V5OiAndmFsdWUnLFxuICAgIHNlcmllc0RhdGFLZXk6ICdzZXJpZXMnLFxuICAgIHNlcmllc05hbWVLZXk6ICdpZCcsXG4gICAgeFRpY2tDb3VudDogNCxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBleGNsdWRlZE5hbWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwOiBzZXJpZXNVcC5tYXAoKHsgaWQgfSkgPT4gYHByZWRpY3Rpb24tbGluZS0ke2lkfWApLFxuICAgICAgZG93bjogc2VyaWVzRG93bi5tYXAoKHsgaWQgfSkgPT4gYHByZWRpY3Rpb24tbGluZS0ke2lkfWApLFxuICAgIH07XG4gIH0sIFtzZXJpZXNVcCwgc2VyaWVzRG93bl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5QcmVkaWN0aW9uIExpbmU8L2gxPlxuICAgICAgPEdyaWQgY29sdW1ucz17Mn0+XG4gICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICA8aDI+R29pbmcgdXA8L2gyPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDYwMCwgaGVpZ2h0OiA0MDAgfX0+XG4gICAgICAgICAgICA8TXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnRcbiAgICAgICAgICAgICAgc2VyaWVzPXtzZXJpZXNVcH1cbiAgICAgICAgICAgICAgY29uZmlndXJhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAuLi5jb25maWd1cmF0aW9ucyxcbiAgICAgICAgICAgICAgICB0b29sdGlwRXhjbHVkZWROYW1lczogZXhjbHVkZWROYW1lcy51cCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgIDxoMj5CdXJuaW5nIGRvd248L2gyPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDYwMCwgaGVpZ2h0OiA0MDAgfX0+XG4gICAgICAgICAgICA8TXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnRcbiAgICAgICAgICAgICAgc2VyaWVzPXtzZXJpZXNEb3dufVxuICAgICAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb25zLFxuICAgICAgICAgICAgICAgIHRvb2x0aXBFeGNsdWRlZE5hbWVzOiBleGNsdWRlZE5hbWVzLmRvd24sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19