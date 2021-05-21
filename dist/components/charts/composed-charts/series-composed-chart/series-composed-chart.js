"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

var _chartBase = require("../../base/chart-base");

var _xAxis = require("../../../recharts/x-axis");

var _yAxis = require("../../../recharts/y-axis");

var _tooltip = require("../../../recharts/tooltip");

var _referenceLine = require("../../../recharts/reference-line");

var _referenceArea = require("../../../recharts/reference-area");

var _regressionLine = _interopRequireDefault(require("../../../recharts/regression-line"));

var _brush = require("../../../recharts/brush");

var _legend = require("../../../recharts/legend");

var _colors = require("../../../helpers/colors");

var _formatter = require("../../../helpers/formatter");

var _hooks = require("../../../helpers/hooks");

var _bar = require("../../../recharts/label/bar");

var _interpolation = require("../../../helpers/interpolation");

var _predictionLine = require("../../../recharts/prediction-line");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function doRenderXAxis(_ref) {
  var xTickCount = _ref.xTickCount,
      xPoints = _ref.xPoints,
      _ref$xAxis = _ref.xAxis,
      xAxis = _ref$xAxis === void 0 ? {} : _ref$xAxis,
      labelKey = _ref.labelKey,
      formatter = _ref.formatter,
      transposed = _ref.transposed;

  if (!transposed) {
    return (0, _xAxis.renderSimpleXAxis)(_objectSpread(_objectSpread({
      // vertical: true,
      interval: 0,
      formatter: formatter,
      tickCount: xTickCount,
      allowDuplicatedCategory: true
    }, xAxis), {}, {
      dataKey: labelKey,
      points: xPoints
    }));
  }
}

function getBarRenderer(conf) {
  return function barRenderer(entry, index) {
    var fill = conf.fill;

    if (typeof conf.fill === 'function') {
      fill = conf.fill(conf, entry);
    }

    return /*#__PURE__*/_react["default"].createElement(Recharts.Cell, {
      key: "cell-".concat(index),
      fill: fill
    });
  };
}

function SeriesComposedChart(_ref2) {
  var data = _ref2.data,
      _ref2$definitions = _ref2.definitions,
      definitions = _ref2$definitions === void 0 ? [] : _ref2$definitions,
      _ref2$filteredSeries = _ref2.filteredSeries,
      filteredSeries = _ref2$filteredSeries === void 0 ? [] : _ref2$filteredSeries,
      setFilteredSeries = _ref2.setFilteredSeries,
      configurations = _ref2.configurations,
      _ref2$empty = _ref2.empty,
      empty = _ref2$empty === void 0 ? false : _ref2$empty,
      emptyContent = _ref2.emptyContent;
  var _configurations$withT = configurations.withTooltip,
      withTooltip = _configurations$withT === void 0 ? true : _configurations$withT,
      _configurations$brush = configurations.brush,
      brush = _configurations$brush === void 0 ? {
    enabled: false
  } : _configurations$brush,
      _configurations$legen = configurations.legend,
      legend = _configurations$legen === void 0 ? {
    enabled: true,
    align: 'center',
    verticalAlign: 'top'
  } : _configurations$legen,
      _configurations$carte = configurations.cartesianGrid,
      cartesianGrid = _configurations$carte === void 0 ? {
    horizontal: true,
    vertical: true
  } : _configurations$carte,
      _configurations$carte2 = configurations.cartesianGridStyle,
      cartesianGridStyle = _configurations$carte2 === void 0 ? {
    strokeDasharray: '3 3',
    stroke: '#F1F1F1'
  } : _configurations$carte2,
      _configurations$xAxis = configurations.xAxis,
      xAxis = _configurations$xAxis === void 0 ? {
    axisLine: true,
    name: '',
    // https://github.com/recharts/recharts/issues/2122
    // https://merico.atlassian.net/browse/EE-2208
    scale: 'band'
  } : _configurations$xAxis,
      _configurations$xTick = configurations.xTickCount,
      xTickCount = _configurations$xTick === void 0 ? 7 : _configurations$xTick,
      _configurations$yAxis = configurations.yAxis,
      yAxis = _configurations$yAxis === void 0 ? {
    axisLine: true,
    name: ''
  } : _configurations$yAxis,
      additionalYAxis = configurations.additionalYAxis,
      _configurations$label = configurations.labelKey,
      labelKey = _configurations$label === void 0 ? 'date' : _configurations$label,
      labelFormatter = configurations.labelFormatter,
      labelTickFormatter = configurations.labelTickFormatter,
      _configurations$margi = configurations.margin,
      margin = _configurations$margi === void 0 ? {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  } : _configurations$margi,
      _configurations$subSe = configurations.subSeriesConfiguration,
      subSeriesConfiguration = _configurations$subSe === void 0 ? [{
    dataKey: 'value',
    label: 'Value'
  }] : _configurations$subSe,
      _configurations$predi = configurations.predictionLines,
      predictionLines = _configurations$predi === void 0 ? [] : _configurations$predi,
      valueFormatter = configurations.valueFormatter,
      _configurations$refer = configurations.referenceLines,
      referenceLines = _configurations$refer === void 0 ? [] : _configurations$refer,
      _configurations$refer2 = configurations.referenceAreas,
      referenceAreas = _configurations$refer2 === void 0 ? [] : _configurations$refer2,
      _configurations$stack = configurations.stackOffset,
      stackOffset = _configurations$stack === void 0 ? 'none' : _configurations$stack,
      _configurations$trans = configurations.transposed,
      transposed = _configurations$trans === void 0 ? false : _configurations$trans,
      _configurations$yDoma = configurations.yDomain,
      yDomain = _configurations$yDoma === void 0 ? [0, 'auto'] : _configurations$yDoma;

  var _useFilteredSeries = (0, _hooks.useFilteredSeries)(filteredSeries, setFilteredSeries),
      _useFilteredSeries2 = (0, _slicedToArray2["default"])(_useFilteredSeries, 2),
      filteredSeriesSet = _useFilteredSeries2[0],
      setFilteredSeriesSet = _useFilteredSeries2[1];

  var colorGenerator = (0, _colors.getColorGenerator)();
  var subSeries = (0, _react.useMemo)(function () {
    return subSeriesConfiguration.map(function (_ref3) {
      var dataKey = _ref3.dataKey,
          label = _ref3.label,
          valueLabel = _ref3.valueLabel,
          _ref3$fill = _ref3.fill,
          fill = _ref3$fill === void 0 ? colorGenerator.next().value : _ref3$fill,
          stackId = _ref3.stackId,
          rest = (0, _objectWithoutProperties2["default"])(_ref3, ["dataKey", "label", "valueLabel", "fill", "stackId"]);
      return _objectSpread({
        key: dataKey,
        label: label,
        valueLabel: valueLabel,
        name: label,
        dataKey: dataKey,
        fill: fill,
        color: fill,
        stackId: stackId
      }, rest);
    });
  }, [data, subSeriesConfiguration]);
  var normalizedLabelFormatter = (0, _formatter.normalizeFormatter)(labelFormatter);
  var normalizedValueFormatter = (0, _formatter.normalizeFormatter)(valueFormatter);

  var xPoints = _react["default"].useMemo(function () {
    return data.map(function (s) {
      return s[labelKey];
    });
  }, [data]);

  var axisProps = {
    xTickCount: xTickCount,
    xPoints: xPoints,
    dataLength: data.length,
    transposed: transposed,
    labelKey: labelKey,
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ xTickCount: number | undefined; dataLength... Remove this comment to see the full error message
    yDomain: yDomain,
    formatter: labelTickFormatter !== null && labelTickFormatter !== void 0 ? labelTickFormatter : normalizedLabelFormatter,
    valueFormatter: normalizedValueFormatter,
    xAxis: xAxis,
    yAxis: yAxis
  };
  var frontReferenceLines = referenceLines.filter(function (line) {
    return line.renderOnTop;
  });
  var rearReferenceLines = referenceLines.filter(function (line) {
    return !line.renderOnTop;
  });
  return /*#__PURE__*/_react["default"].createElement(_chartBase.RechartsChartBase, {
    empty: empty,
    emptyContent: emptyContent
  }, /*#__PURE__*/_react["default"].createElement(Recharts.ComposedChart, {
    data: data,
    layout: "horizontal",
    margin: margin,
    stackOffset: stackOffset
  }, /*#__PURE__*/_react["default"].createElement("defs", null, definitions.map(function (renderer) {
    return renderer();
  })), /*#__PURE__*/_react["default"].createElement(Recharts.CartesianGrid, (0, _extends2["default"])({}, cartesianGridStyle, cartesianGrid)), doRenderXAxis(axisProps), (0, _yAxis.renderYAxis)(_objectSpread(_objectSpread({
    formatter: normalizedValueFormatter
  }, yAxis), {}, {
    domain: yDomain
  })), (0, _tooltip.renderTooltip)(configurations), legend.enabled && (0, _legend.renderLegend)({
    legend: legend,
    series: subSeries,
    filteredSeries: filteredSeriesSet,
    setFilteredSeries: setFilteredSeriesSet
  }), referenceAreas.map(function (item) {
    return (0, _referenceArea.renderReferenceAreas)(item);
  }), rearReferenceLines.map(function (item, index) {
    var _item$key;

    return (0, _referenceLine.renderReferenceLine)(_objectSpread({
      key: (_item$key = item.key) !== null && _item$key !== void 0 ? _item$key : index
    }, item));
  }), subSeries.map(function (item) {
    var _valueLabel$formatter, _item$key2;

    var label = item.label,
        _item$valueLabel = item.valueLabel,
        valueLabel = _item$valueLabel === void 0 ? {
      enabled: false
    } : _item$valueLabel,
        _item$barSize = item.barSize,
        barSize = _item$barSize === void 0 ? 20 : _item$barSize,
        _item$yAxisId = item.yAxisId,
        yAxisId = _item$yAxisId === void 0 ? 0 : _item$yAxisId,
        chartType = item.chartType,
        interpolationType = item.interpolationType,
        rest = (0, _objectWithoutProperties2["default"])(item, ["label", "valueLabel", "barSize", "yAxisId", "chartType", "interpolationType"]);

    if (filteredSeriesSet.has(label)) {
      return null;
    }

    if (chartType === 'line') {
      return /*#__PURE__*/_react["default"].createElement(Recharts.Line, (0, _extends2["default"])({
        yAxisId: yAxisId,
        isAnimationActive: false,
        strokeWidth: 2,
        label: null,
        type: (0, _interpolation.parseInterpolation)(interpolationType)
      }, rest));
    }

    if (chartType === 'area') {
      return /*#__PURE__*/_react["default"].createElement(Recharts.Area, (0, _extends2["default"])({
        yAxisId: yAxisId,
        isAnimationActive: false,
        strokeWidth: 2,
        label: null,
        type: (0, _interpolation.parseInterpolation)(interpolationType)
      }, rest));
    }

    var renderLabelContent = (0, _bar.getBarLabelRenderer)(transposed, (_valueLabel$formatter = valueLabel.formatter) !== null && _valueLabel$formatter !== void 0 ? _valueLabel$formatter : normalizedValueFormatter, valueLabel);
    return /*#__PURE__*/_react["default"].createElement(Recharts.Bar, (0, _extends2["default"])({
      key: (_item$key2 = item.key) !== null && _item$key2 !== void 0 ? _item$key2 : item.label,
      yAxisId: yAxisId,
      isAnimationActive: false,
      barSize: barSize
    }, rest), /*#__PURE__*/_react["default"].createElement(Recharts.LabelList, {
      dataKey: valueLabel.dataKey,
      valueAccessor: valueLabel.valueAccessor,
      content: renderLabelContent
    }), data.map(getBarRenderer(item)));
  }), subSeries.map(function (item) {
    var label = item.label,
        regressions = item.regressions;

    if (filteredSeriesSet.has(label)) {
      return null;
    }

    return regressions === null || regressions === void 0 ? void 0 : regressions.map(function (r) {
      return (0, _regressionLine["default"])(_objectSpread(_objectSpread({}, r), {}, {
        data: data
      }));
    });
  }), (0, _predictionLine.renderPredictionLines)({
    predictionLines: predictionLines
  }, filteredSeriesSet), additionalYAxis && (0, _yAxis.renderYAxis)(additionalYAxis), frontReferenceLines.map(function (item, index) {
    var _item$key3;

    return (0, _referenceLine.renderReferenceLine)(_objectSpread({
      key: (_item$key3 = item.key) !== null && _item$key3 !== void 0 ? _item$key3 : index
    }, item));
  }), (0, _brush.renderBrush)(brush, normalizedLabelFormatter)));
}

var _default = SeriesComposedChart;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3Nlcmllcy1jb21wb3NlZC1jaGFydC50c3giXSwibmFtZXMiOlsiZG9SZW5kZXJYQXhpcyIsInhUaWNrQ291bnQiLCJ4UG9pbnRzIiwieEF4aXMiLCJsYWJlbEtleSIsImZvcm1hdHRlciIsInRyYW5zcG9zZWQiLCJpbnRlcnZhbCIsInRpY2tDb3VudCIsImFsbG93RHVwbGljYXRlZENhdGVnb3J5IiwiZGF0YUtleSIsInBvaW50cyIsImdldEJhclJlbmRlcmVyIiwiY29uZiIsImJhclJlbmRlcmVyIiwiZW50cnkiLCJpbmRleCIsImZpbGwiLCJTZXJpZXNDb21wb3NlZENoYXJ0IiwiZGF0YSIsImRlZmluaXRpb25zIiwiZmlsdGVyZWRTZXJpZXMiLCJzZXRGaWx0ZXJlZFNlcmllcyIsImNvbmZpZ3VyYXRpb25zIiwiZW1wdHkiLCJlbXB0eUNvbnRlbnQiLCJ3aXRoVG9vbHRpcCIsImJydXNoIiwiZW5hYmxlZCIsImxlZ2VuZCIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImNhcnRlc2lhbkdyaWQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJjYXJ0ZXNpYW5HcmlkU3R5bGUiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2UiLCJheGlzTGluZSIsIm5hbWUiLCJzY2FsZSIsInlBeGlzIiwiYWRkaXRpb25hbFlBeGlzIiwibGFiZWxGb3JtYXR0ZXIiLCJsYWJlbFRpY2tGb3JtYXR0ZXIiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJwcmVkaWN0aW9uTGluZXMiLCJ2YWx1ZUZvcm1hdHRlciIsInJlZmVyZW5jZUxpbmVzIiwicmVmZXJlbmNlQXJlYXMiLCJzdGFja09mZnNldCIsInlEb21haW4iLCJmaWx0ZXJlZFNlcmllc1NldCIsInNldEZpbHRlcmVkU2VyaWVzU2V0IiwiY29sb3JHZW5lcmF0b3IiLCJzdWJTZXJpZXMiLCJtYXAiLCJ2YWx1ZUxhYmVsIiwibmV4dCIsInZhbHVlIiwic3RhY2tJZCIsInJlc3QiLCJrZXkiLCJjb2xvciIsIm5vcm1hbGl6ZWRMYWJlbEZvcm1hdHRlciIsIm5vcm1hbGl6ZWRWYWx1ZUZvcm1hdHRlciIsIlJlYWN0IiwidXNlTWVtbyIsInMiLCJheGlzUHJvcHMiLCJkYXRhTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbnRSZWZlcmVuY2VMaW5lcyIsImZpbHRlciIsImxpbmUiLCJyZW5kZXJPblRvcCIsInJlYXJSZWZlcmVuY2VMaW5lcyIsInJlbmRlcmVyIiwiZG9tYWluIiwic2VyaWVzIiwiaXRlbSIsImJhclNpemUiLCJ5QXhpc0lkIiwiY2hhcnRUeXBlIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJoYXMiLCJyZW5kZXJMYWJlbENvbnRlbnQiLCJ2YWx1ZUFjY2Vzc29yIiwicmVncmVzc2lvbnMiLCJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQVlBLFNBQVNBLGFBQVQsT0FBa0g7QUFBQSxNQUF6RkMsVUFBeUYsUUFBekZBLFVBQXlGO0FBQUEsTUFBN0VDLE9BQTZFLFFBQTdFQSxPQUE2RTtBQUFBLHdCQUFwRUMsS0FBb0U7QUFBQSxNQUFwRUEsS0FBb0UsMkJBQTVELEVBQTREO0FBQUEsTUFBeERDLFFBQXdELFFBQXhEQSxRQUF3RDtBQUFBLE1BQTlDQyxTQUE4QyxRQUE5Q0EsU0FBOEM7QUFBQSxNQUFuQ0MsVUFBbUMsUUFBbkNBLFVBQW1DOztBQUNoSCxNQUFJLENBQUNBLFVBQUwsRUFBaUI7QUFDZixXQUFPO0FBQ0w7QUFDQUMsTUFBQUEsUUFBUSxFQUFFLENBRkw7QUFH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Q0F2RkgsRUFnR0csMkNBQXNCO0FBQUVpQyxJQUFBQSxlQUFlLEVBQWZBO0FBQUYsR0FBdEIsRUFBMkNNLGlCQUEzQyxDQWhHSCxFQWlHR2hCLGVBQWUsSUFBSSx3QkFBWUEsZUFBWixDQWpHdEIsRUEyR0dvQyxtQkFBbUIsQ0FBQ2hCLEdBQXBCLENBQXdCLFVBQUN3QixJQUFELEVBQU90RSxLQUFQLEVBQWlCO0FBQUE7O0FBQ3hDLFdBQU87QUFBc0JvRCxNQUFBQSxHQUFHLGdCQUFFa0IsSUFBSSxDQUFDbEIsR0FBUCxtREFBY3BEO0FBQXZDLE9BQWlEc0UsSUFBakQsRUFBUDtBQUNELEdBRkEsQ0EzR0gsRUE4R0csd0JBQVkzRCxLQUFaLEVBQW1CMkMsd0JBQW5CLENBOUdILENBREYsQ0FERjtBQW9IRDs7ZUFDY3BELG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogem9vbVxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWNoYXJ0cyBmcm9tICdyZWNoYXJ0cyc7XG5pbXBvcnQgeyBBeGlzRG9tYWluLCBNYXJnaW4gfSBmcm9tICdyZWNoYXJ0cy90eXBlcy91dGlsL3R5cGVzJztcblxuaW1wb3J0IHsgUmVjaGFydHNDaGFydEJhc2UgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UnO1xuaW1wb3J0IHsgcmVuZGVyU2ltcGxlWEF4aXMsIENvbW1vblJlbmRlclhBeGlzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMveC1heGlzJztcbmltcG9ydCB7IHJlbmRlcllBeGlzLCBSZW5kZXJZQXhpc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3JlY2hhcnRzL3ktYXhpcyc7XG5pbXBvcnQgeyByZW5kZXJUb29sdGlwLCBSZW5kZXJUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvdG9vbHRpcCc7XG5pbXBvcnQgeyByZW5kZXJSZWZlcmVuY2VMaW5lLCBSZW5kZXJSZWZlcmVuY2VMaW5lQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvcmVmZXJlbmNlLWxpbmUnO1xuaW1wb3J0IHsgcmVuZGVyUmVmZXJlbmNlQXJlYXMsIFJlbmRlclJlZmVyZW5jZUFyZWFzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvcmVmZXJlbmNlLWFyZWEnO1xuaW1wb3J0IHJlbmRlclJlZ3Jlc3Npb25MaW5lIGZyb20gJy4uLy4uLy4uL3JlY2hhcnRzL3JlZ3Jlc3Npb24tbGluZSc7XG5pbXBvcnQgeyByZW5kZXJCcnVzaCwgUmVuZGVyQnJ1c2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi9yZWNoYXJ0cy9icnVzaCc7XG5pbXBvcnQgeyBDdXN0b21MZWdlbmRDb25maWcsIHJlbmRlckxlZ2VuZCwgUmVuZGVyTGVnZW5kQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvbGVnZW5kJztcbmltcG9ydCB7IGdldENvbG9yR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jb2xvcnMnO1xuaW1wb3J0IHsgbm9ybWFsaXplRm9ybWF0dGVyLCBGb3JtYXR0ZXJUeXBlLCBGb3JtYXR0ZXJGdW5jIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9mb3JtYXR0ZXInO1xuaW1wb3J0IHsgdXNlRmlsdGVyZWRTZXJpZXMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2hvb2tzJztcbmltcG9ydCB7IGdldEJhckxhYmVsUmVuZGVyZXIgfSBmcm9tICcuLi8uLi8uLi9yZWNoYXJ0cy9sYWJlbC9iYXInO1xuaW1wb3J0IHsgcGFyc2VJbnRlcnBvbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9pbnRlcnBvbGF0aW9uJztcbmltcG9ydCB7IHJlbmRlclByZWRpY3Rpb25MaW5lcywgUHJlZGljdGlvbkxpbmVDb25maWcgfSBmcm9tICcuLi8uLi8uLi9yZWNoYXJ0cy9wcmVkaWN0aW9uLWxpbmUnO1xuXG50eXBlIERvUmVuZGVyWEF4aXNDb25maWcgPSB7XG4gIGRhdGFMZW5ndGg6IG51bWJlcjtcbiAgbGFiZWxLZXk6IHN0cmluZztcbiAgZm9ybWF0dGVyOiBGb3JtYXR0ZXJGdW5jO1xuICB0cmFuc3Bvc2VkPzogYm9vbGVhbjtcbiAgeFRpY2tDb3VudDogbnVtYmVyO1xuICB4QXhpcz86IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBSZWNoYXJ0cy5YQXhpcz4gJiBDb21tb25SZW5kZXJYQXhpc0NvbmZpZztcbiAgeFBvaW50czogYW55W107XG59O1xuXG5mdW5jdGlvbiBkb1JlbmRlclhBeGlzKHsgeFRpY2tDb3VudCwgeFBvaW50cywgeEF4aXMgPSB7fSwgbGFiZWxLZXksIGZvcm1hdHRlciwgdHJhbnNwb3NlZCB9OiBEb1JlbmRlclhBeGlzQ29uZmlnKSB7XG4gIGlmICghdHJhbnNwb3NlZCkge1xuICAgIHJldHVybiByZW5kZXJTaW1wbGVYQXhpcyh7XG4gICAgICAvLyB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgIGludGVydmFsOiAwLFxuICAgICAgZm9ybWF0dGVyLFxuICAgICAgdGlja0NvdW50OiB4VGlja0NvdW50LFxuICAgICAgYWxsb3dEdXBsaWNhdGVkQ2F0ZWdvcnk6IHRydWUsXG4gICAgICAuLi54QXhpcyxcbiAgICAgIGRhdGFLZXk6IGxhYmVsS2V5LFxuICAgICAgcG9pbnRzOiB4UG9pbnRzLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEJhclJlbmRlcmVyKGNvbmY6IGFueSkge1xuICByZXR1cm4gZnVuY3Rpb24gYmFyUmVuZGVyZXIoZW50cnk6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIGxldCBmaWxsID0gY29uZi5maWxsO1xuICAgIGlmICh0eXBlb2YgY29uZi5maWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaWxsID0gY29uZi5maWxsKGNvbmYsIGVudHJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIDxSZWNoYXJ0cy5DZWxsIGtleT17YGNlbGwtJHtpbmRleH1gfSBmaWxsPXtmaWxsfSAvPjtcbiAgfTtcbn1cblxudHlwZSBTdWJTZXJpZXNDb25maWd1cmF0aW9uID0ge1xuICBkYXRhS2V5OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbmV4cG9ydCB0eXBlIFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyA9IFBhcnRpYWw8e1xuICB3aXRoVG9vbHRpcDogYm9vbGVhbjtcbiAgeEF4aXM6IERvUmVuZGVyWEF4aXNDb25maWdbJ3hBeGlzJ107XG4gIHlBeGlzOiBSZW5kZXJZQXhpc0NvbmZpZztcbiAgeFRpY2tDb3VudDogbnVtYmVyO1xuICBsYWJlbEtleTogc3RyaW5nO1xuICBsYWJlbEZvcm1hdHRlcjogRm9ybWF0dGVyVHlwZTtcbiAgbGFiZWxUaWNrRm9ybWF0dGVyOiBGb3JtYXR0ZXJGdW5jO1xuICB2YWx1ZUZvcm1hdHRlcjogRm9ybWF0dGVyVHlwZTtcbiAgYWRkaXRpb25hbFlBeGlzOiBSZW5kZXJZQXhpc0NvbmZpZztcbiAgYnJ1c2g6IFJlbmRlckJydXNoQ29uZmlnO1xuICBsZWdlbmQ6IEN1c3RvbUxlZ2VuZENvbmZpZyAmIFJlbmRlckxlZ2VuZENvbmZpZ1snbGVnZW5kJ107XG4gIGNhcnRlc2lhbkdyaWQ6IE9taXQ8UmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFJlY2hhcnRzLkNhcnRlc2lhbkdyaWQ+LCAncmVmJz47XG4gIGNhcnRlc2lhbkdyaWRTdHlsZTogT21pdDxSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgUmVjaGFydHMuQ2FydGVzaWFuR3JpZD4sICdyZWYnPjtcbiAgbWFyZ2luOiBNYXJnaW47XG4gIHByZWRpY3Rpb25MaW5lczogUHJlZGljdGlvbkxpbmVDb25maWdbXTtcbiAgcmVmZXJlbmNlTGluZXM6IFJlbmRlclJlZmVyZW5jZUxpbmVDb25maWdbXTtcbiAgcmVmZXJlbmNlQXJlYXM6IFJlbmRlclJlZmVyZW5jZUFyZWFzQ29uZmlnW107XG4gIHN0YWNrT2Zmc2V0OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgUmVjaGFydHMuQ29tcG9zZWRDaGFydD5bJ3N0YWNrT2Zmc2V0J107XG4gIHRvb2x0aXA/OiBSZW5kZXJUb29sdGlwQ29uZmlnWyd0b29sdGlwJ107XG4gIHRvb2x0aXBBcHBlbmRlcjogUmVuZGVyVG9vbHRpcENvbmZpZ1sndG9vbHRpcEFwcGVuZGVyJ107XG4gIHRvb2x0aXBDdXJzb3I6IFJlbmRlclRvb2x0aXBDb25maWdbJ3Rvb2x0aXBDdXJzb3InXTtcbiAgdG9vbHRpcEV4Y2x1ZGVkTmFtZXM6IFJlbmRlclRvb2x0aXBDb25maWdbJ3Rvb2x0aXBFeGNsdWRlZE5hbWVzJ107XG4gIHRvb2x0aXBTb3J0ZXI6IFJlbmRlclRvb2x0aXBDb25maWdbJ3Rvb2x0aXBTb3J0ZXInXTtcbiAgdHJhbnNwb3NlZDogYm9vbGVhbjtcbiAgeURvbWFpbjogQXhpc0RvbWFpbjtcbiAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogU3ViU2VyaWVzQ29uZmlndXJhdGlvbltdO1xufT47XG5cbmV4cG9ydCB0eXBlIFNlcmllc0NvbXBvc2VkQ2hhcnRQcm9wczxUIGV4dGVuZHMgdW5rbm93bltdPiA9IHtcbiAgZGF0YTogVDtcbiAgZGVmaW5pdGlvbnM/OiAoKCkgPT4gUmVhY3QuUmVhY3ROb2RlKVtdO1xuICBmaWx0ZXJlZFNlcmllcz86IHN0cmluZ1tdO1xuICBzZXRGaWx0ZXJlZFNlcmllcz86IChuZXdTZXJpZXM6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICBjb25maWd1cmF0aW9uczogU2VyaWVzQ29tcG9zZWRDaGFydENvbmZpZ3VyYXRpb25zO1xuICBlbXB0eT86IGJvb2xlYW47XG4gIGVtcHR5Q29udGVudD86IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmZ1bmN0aW9uIFNlcmllc0NvbXBvc2VkQ2hhcnQ8VCBleHRlbmRzIHVua25vd25bXT4oe1xuICBkYXRhLFxuICBkZWZpbml0aW9ucyA9IFtdLFxuICBmaWx0ZXJlZFNlcmllcyA9IFtdLFxuICBzZXRGaWx0ZXJlZFNlcmllcyxcbiAgY29uZmlndXJhdGlvbnMsXG4gIGVtcHR5ID0gZmFsc2UsXG4gIGVtcHR5Q29udGVudCxcbn06IFNlcmllc0NvbXBvc2VkQ2hhcnRQcm9wczxUPikge1xuICBjb25zdCB7XG4gICAgd2l0aFRvb2x0aXAgPSB0cnVlLFxuICAgIGJydXNoID0ge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBsZWdlbmQgPSB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgfSxcbiAgICBjYXJ0ZXNpYW5HcmlkID0ge1xuICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgIH0sXG4gICAgY2FydGVzaWFuR3JpZFN0eWxlID0ge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnMyAzJyxcbiAgICAgIHN0cm9rZTogJyNGMUYxRjEnLFxuICAgIH0sXG4gICAgeEF4aXMgPSB7XG4gICAgICBheGlzTGluZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlY2hhcnRzL3JlY2hhcnRzL2lzc3Vlcy8yMTIyXG4gICAgICAvLyBodHRwczovL21lcmljby5hdGxhc3NpYW4ubmV0L2Jyb3dzZS9FRS0yMjA4XG4gICAgICBzY2FsZTogJ2JhbmQnLFxuICAgIH0sXG4gICAgeFRpY2tDb3VudCA9IDcsXG4gICAgeUF4aXMgPSB7XG4gICAgICBheGlzTGluZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgIH0sXG4gICAgYWRkaXRpb25hbFlBeGlzLFxuICAgIGxhYmVsS2V5ID0gJ2RhdGUnLFxuICAgIGxhYmVsRm9ybWF0dGVyLFxuICAgIGxhYmVsVGlja0Zvcm1hdHRlcixcbiAgICBtYXJnaW4gPSB7IHRvcDogNSwgcmlnaHQ6IDUsIGJvdHRvbTogNSwgbGVmdDogNSB9LFxuICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb24gPSBbeyBkYXRhS2V5OiAndmFsdWUnLCBsYWJlbDogJ1ZhbHVlJyB9XSwgLy8gc3ViLXNlcmllc1xuICAgIHByZWRpY3Rpb25MaW5lcyA9IFtdLFxuICAgIHZhbHVlRm9ybWF0dGVyLFxuICAgIHJlZmVyZW5jZUxpbmVzID0gW10sXG4gICAgcmVmZXJlbmNlQXJlYXMgPSBbXSxcbiAgICBzdGFja09mZnNldCA9ICdub25lJyxcbiAgICB0cmFuc3Bvc2VkID0gZmFsc2UsXG4gICAgeURvbWFpbiA9IFswLCAnYXV0byddLFxuICB9ID0gY29uZmlndXJhdGlvbnM7XG5cbiAgY29uc3QgW2ZpbHRlcmVkU2VyaWVzU2V0LCBzZXRGaWx0ZXJlZFNlcmllc1NldF0gPSB1c2VGaWx0ZXJlZFNlcmllcyhmaWx0ZXJlZFNlcmllcywgc2V0RmlsdGVyZWRTZXJpZXMpO1xuICBjb25zdCBjb2xvckdlbmVyYXRvciA9IGdldENvbG9yR2VuZXJhdG9yKCk7XG5cbiAgY29uc3Qgc3ViU2VyaWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHN1YlNlcmllc0NvbmZpZ3VyYXRpb24ubWFwKFxuICAgICAgKHsgZGF0YUtleSwgbGFiZWwsIHZhbHVlTGFiZWwsIGZpbGwgPSBjb2xvckdlbmVyYXRvci5uZXh0KCkudmFsdWUsIHN0YWNrSWQsIC4uLnJlc3QgfSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleTogZGF0YUtleSxcbiAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICB2YWx1ZUxhYmVsLFxuICAgICAgICAgIG5hbWU6IGxhYmVsLFxuICAgICAgICAgIGRhdGFLZXksXG4gICAgICAgICAgZmlsbCxcbiAgICAgICAgICBjb2xvcjogZmlsbCxcbiAgICAgICAgICBzdGFja0lkLFxuICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgKTtcbiAgfSwgW2RhdGEsIHN1YlNlcmllc0NvbmZpZ3VyYXRpb25dKTtcblxuICBjb25zdCBub3JtYWxpemVkTGFiZWxGb3JtYXR0ZXIgPSBub3JtYWxpemVGb3JtYXR0ZXIobGFiZWxGb3JtYXR0ZXIpO1xuICBjb25zdCBub3JtYWxpemVkVmFsdWVGb3JtYXR0ZXIgPSBub3JtYWxpemVGb3JtYXR0ZXIodmFsdWVGb3JtYXR0ZXIpO1xuXG4gIGNvbnN0IHhQb2ludHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IGRhdGEubWFwKChzOiBhbnkpID0+IHNbbGFiZWxLZXldKSwgW2RhdGFdKTtcblxuICBjb25zdCBheGlzUHJvcHM6IERvUmVuZGVyWEF4aXNDb25maWcgPSB7XG4gICAgeFRpY2tDb3VudCxcbiAgICB4UG9pbnRzLFxuICAgIGRhdGFMZW5ndGg6IGRhdGEubGVuZ3RoLFxuICAgIHRyYW5zcG9zZWQsXG4gICAgbGFiZWxLZXksXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMjIpIEZJWE1FOiBUeXBlICd7IHhUaWNrQ291bnQ6IG51bWJlciB8IHVuZGVmaW5lZDsgZGF0YUxlbmd0aC4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgeURvbWFpbixcbiAgICBmb3JtYXR0ZXI6IGxhYmVsVGlja0Zvcm1hdHRlciA/PyBub3JtYWxpemVkTGFiZWxGb3JtYXR0ZXIsXG4gICAgdmFsdWVGb3JtYXR0ZXI6IG5vcm1hbGl6ZWRWYWx1ZUZvcm1hdHRlcixcbiAgICB4QXhpcyxcbiAgICB5QXhpcyxcbiAgfTtcblxuICBjb25zdCBmcm9udFJlZmVyZW5jZUxpbmVzID0gcmVmZXJlbmNlTGluZXMuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnJlbmRlck9uVG9wKTtcbiAgY29uc3QgcmVhclJlZmVyZW5jZUxpbmVzID0gcmVmZXJlbmNlTGluZXMuZmlsdGVyKChsaW5lKSA9PiAhbGluZS5yZW5kZXJPblRvcCk7XG4gIHJldHVybiAoXG4gICAgPFJlY2hhcnRzQ2hhcnRCYXNlIGVtcHR5PXtlbXB0eX0gZW1wdHlDb250ZW50PXtlbXB0eUNvbnRlbnR9PlxuICAgICAgPFJlY2hhcnRzLkNvbXBvc2VkQ2hhcnQgZGF0YT17ZGF0YX0gbGF5b3V0PVwiaG9yaXpvbnRhbFwiIG1hcmdpbj17bWFyZ2lufSBzdGFja09mZnNldD17c3RhY2tPZmZzZXR9PlxuICAgICAgICA8ZGVmcz57ZGVmaW5pdGlvbnMubWFwKChyZW5kZXJlcikgPT4gcmVuZGVyZXIoKSl9PC9kZWZzPlxuICAgICAgICA8UmVjaGFydHMuQ2FydGVzaWFuR3JpZCB7Li4uY2FydGVzaWFuR3JpZFN0eWxlfSB7Li4uY2FydGVzaWFuR3JpZH0gLz5cbiAgICAgICAge2RvUmVuZGVyWEF4aXMoYXhpc1Byb3BzKX1cbiAgICAgICAge3JlbmRlcllBeGlzKHtcbiAgICAgICAgICBmb3JtYXR0ZXI6IG5vcm1hbGl6ZWRWYWx1ZUZvcm1hdHRlcixcbiAgICAgICAgICAuLi55QXhpcyxcbiAgICAgICAgICBkb21haW46IHlEb21haW4sXG4gICAgICAgIH0pfVxuICAgICAgICB7cmVuZGVyVG9vbHRpcChjb25maWd1cmF0aW9ucyBhcyBSZW5kZXJUb29sdGlwQ29uZmlnKX1cbiAgICAgICAge2xlZ2VuZC5lbmFibGVkICYmXG4gICAgICAgICAgcmVuZGVyTGVnZW5kKHtcbiAgICAgICAgICAgIGxlZ2VuZCxcbiAgICAgICAgICAgIHNlcmllczogc3ViU2VyaWVzLFxuICAgICAgICAgICAgZmlsdGVyZWRTZXJpZXM6IGZpbHRlcmVkU2VyaWVzU2V0LFxuICAgICAgICAgICAgc2V0RmlsdGVyZWRTZXJpZXM6IHNldEZpbHRlcmVkU2VyaWVzU2V0LFxuICAgICAgICAgIH0pfVxuICAgICAgICB7cmVmZXJlbmNlQXJlYXMubWFwKChpdGVtKSA9PiByZW5kZXJSZWZlcmVuY2VBcmVhcyhpdGVtKSl9XG4gICAgICAgIHtyZWFyUmVmZXJlbmNlTGluZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZW5kZXJSZWZlcmVuY2VMaW5lKHsga2V5OiBpdGVtLmtleSA/PyBpbmRleCwgLi4uaXRlbSB9KTtcbiAgICAgICAgfSl9XG4gICAgICAgIHtzdWJTZXJpZXMubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIHZhbHVlTGFiZWwgPSB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICBiYXJTaXplID0gMjAsXG4gICAgICAgICAgICB5QXhpc0lkID0gMCxcbiAgICAgICAgICAgIGNoYXJ0VHlwZSxcbiAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlLFxuICAgICAgICAgICAgLy8gcmVncmVzc2lvbnMsXG4gICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgICAgfSA9IGl0ZW07XG5cbiAgICAgICAgICBpZiAoZmlsdGVyZWRTZXJpZXNTZXQuaGFzKGxhYmVsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNoYXJ0VHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UmVjaGFydHMuTGluZVxuICAgICAgICAgICAgICAgIHlBeGlzSWQ9e3lBeGlzSWR9XG4gICAgICAgICAgICAgICAgaXNBbmltYXRpb25BY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtudWxsfVxuICAgICAgICAgICAgICAgIHR5cGU9e3BhcnNlSW50ZXJwb2xhdGlvbihpbnRlcnBvbGF0aW9uVHlwZSl9XG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2hhcnRUeXBlID09PSAnYXJlYScpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxSZWNoYXJ0cy5BcmVhXG4gICAgICAgICAgICAgICAgeUF4aXNJZD17eUF4aXNJZH1cbiAgICAgICAgICAgICAgICBpc0FuaW1hdGlvbkFjdGl2ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgbGFiZWw9e251bGx9XG4gICAgICAgICAgICAgICAgdHlwZT17cGFyc2VJbnRlcnBvbGF0aW9uKGludGVycG9sYXRpb25UeXBlKX1cbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVuZGVyTGFiZWxDb250ZW50ID0gZ2V0QmFyTGFiZWxSZW5kZXJlcihcbiAgICAgICAgICAgIHRyYW5zcG9zZWQsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsLmZvcm1hdHRlciA/PyBub3JtYWxpemVkVmFsdWVGb3JtYXR0ZXIsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlY2hhcnRzLkJhclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5ID8/IGl0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIHlBeGlzSWQ9e3lBeGlzSWR9XG4gICAgICAgICAgICAgIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX1cbiAgICAgICAgICAgICAgYmFyU2l6ZT17YmFyU2l6ZX1cbiAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjc0MSkgRklYTUU6IFByb3BlcnR5ICdkYXRhJyBpcyBtaXNzaW5nIGluIHR5cGUgJ3sgZGF0YUtleTogYW55Li4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgKi99XG4gICAgICAgICAgICAgIDxSZWNoYXJ0cy5MYWJlbExpc3RcbiAgICAgICAgICAgICAgICBkYXRhS2V5PXt2YWx1ZUxhYmVsLmRhdGFLZXl9XG4gICAgICAgICAgICAgICAgdmFsdWVBY2Nlc3Nvcj17dmFsdWVMYWJlbC52YWx1ZUFjY2Vzc29yfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3JlbmRlckxhYmVsQ29udGVudH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2RhdGEubWFwKGdldEJhclJlbmRlcmVyKGl0ZW0pKX1cbiAgICAgICAgICAgIDwvUmVjaGFydHMuQmFyPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHsvKiBSRUdSRVNTSU9OIExJTkVTICovfVxuICAgICAgICB7c3ViU2VyaWVzLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBsYWJlbCwgcmVncmVzc2lvbnMgfSA9IGl0ZW07XG4gICAgICAgICAgaWYgKGZpbHRlcmVkU2VyaWVzU2V0LmhhcyhsYWJlbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVncmVzc2lvbnM/Lm1hcCgocjogYW55KSA9PiByZW5kZXJSZWdyZXNzaW9uTGluZSh7IC4uLnIsIGRhdGEgfSkpO1xuICAgICAgICB9KX1cblxuICAgICAgICB7LyogUFJFRElDVElPTiBMSU5FUyAqL31cbiAgICAgICAge3JlbmRlclByZWRpY3Rpb25MaW5lcyh7IHByZWRpY3Rpb25MaW5lcyB9LCBmaWx0ZXJlZFNlcmllc1NldCl9XG4gICAgICAgIHthZGRpdGlvbmFsWUF4aXMgJiYgcmVuZGVyWUF4aXMoYWRkaXRpb25hbFlBeGlzKX1cbiAgICAgICAgey8qIHtjb21wb3NpbmdMaW5lcy5tYXAoKHsgLi4ucmVzdCB9KSA9PiAoXG4gICAgICAgICAgPFJlY2hhcnRzLkxpbmVcbiAgICAgICAgICAgIHlBeGlzSWQ9e3lBeGlzPy55QXhpc0lkID8/IDB9XG4gICAgICAgICAgICBpc0FuaW1hdGlvbkFjdGl2ZT17ZmFsc2V9XG4gICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgIGxhYmVsPXtudWxsfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9ICovfVxuICAgICAgICB7ZnJvbnRSZWZlcmVuY2VMaW5lcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlclJlZmVyZW5jZUxpbmUoeyBrZXk6IGl0ZW0ua2V5ID8/IGluZGV4LCAuLi5pdGVtIH0pO1xuICAgICAgICB9KX1cbiAgICAgICAge3JlbmRlckJydXNoKGJydXNoLCBub3JtYWxpemVkTGFiZWxGb3JtYXR0ZXIpfVxuICAgICAgPC9SZWNoYXJ0cy5Db21wb3NlZENoYXJ0PlxuICAgIDwvUmVjaGFydHNDaGFydEJhc2U+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBTZXJpZXNDb21wb3NlZENoYXJ0O1xuIl19