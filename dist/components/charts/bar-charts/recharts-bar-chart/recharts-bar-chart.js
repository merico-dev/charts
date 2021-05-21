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

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

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

var _brush = require("../../../recharts/brush");

var _legend = require("../../../recharts/legend");

var _colors = require("../../../helpers/colors");

var _formatter = require("../../../helpers/formatter");

var _hooks = require("../../../helpers/hooks");

var _bar = require("../../../recharts/label/bar");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function xAxisWithTranpose(_ref) {
  var xTickCount = _ref.xTickCount,
      _ref$xAxis = _ref.xAxis,
      xAxis = _ref$xAxis === void 0 ? {} : _ref$xAxis,
      yAxis = _ref.yAxis,
      labelKey = _ref.labelKey,
      formatter = _ref.formatter,
      valueFormatter = _ref.valueFormatter,
      transposed = _ref.transposed,
      yDomain = _ref.yDomain,
      getCustomTick = _ref.getCustomTick,
      xPoints = _ref.xPoints;

  if (!transposed) {
    return (0, _xAxis.renderSimpleXAxis)(_objectSpread(_objectSpread({
      allowDuplicatedCategory: true,
      vertical: true,
      formatter: formatter,
      tickCount: xTickCount
    }, xAxis), {}, {
      dataKey: labelKey,
      getCustomTick: getCustomTick,
      points: xPoints,
      scale: 'band' // https://github.com/recharts/recharts/issues/2122

    }));
  }

  return (0, _xAxis.renderSimpleXAxis)(_objectSpread(_objectSpread({
    type: 'number',
    orientation: 'top',
    formatter: valueFormatter
  }, yAxis), {}, {
    domain: yDomain
  }));
}

function yAxisWithTranspose(_ref2) {
  var xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis,
      labelKey = _ref2.labelKey,
      formatter = _ref2.formatter,
      valueFormatter = _ref2.valueFormatter,
      transposed = _ref2.transposed,
      yDomain = _ref2.yDomain,
      getCustomTick = _ref2.getCustomTick;

  if (!transposed) {
    return (0, _yAxis.renderYAxis)(_objectSpread(_objectSpread({}, yAxis), {}, {
      formatter: valueFormatter,
      domain: yDomain,
      getCustomTick: getCustomTick
    }));
  }

  return (0, _yAxis.renderYAxis)(_objectSpread(_objectSpread({
    type: 'category'
  }, xAxis), {}, {
    vertical: true,
    dataKey: labelKey,
    formatter: formatter,
    scale: 'band',
    interval: 0,
    getCustomTick: getCustomTick
  }));
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

function RechartsBarChart(_ref3) {
  var data = _ref3.data,
      _ref3$filteredSeries = _ref3.filteredSeries,
      filteredSeries = _ref3$filteredSeries === void 0 ? [] : _ref3$filteredSeries,
      setFilteredSeries = _ref3.setFilteredSeries,
      configurations = _ref3.configurations,
      _ref3$empty = _ref3.empty,
      empty = _ref3$empty === void 0 ? false : _ref3$empty,
      emptyContent = _ref3.emptyContent;
  var _configurations$getCu = configurations.getCustomTick,
      getCustomTick = _configurations$getCu === void 0 ? false : _configurations$getCu,
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
      _configurations$compo = configurations.composingLines,
      composingLines = _configurations$compo === void 0 ? [] : _configurations$compo,
      _configurations$xAxis = configurations.xAxis,
      xAxis = _configurations$xAxis === void 0 ? {
    axisLine: true,
    tickTextColor: null,
    name: ''
  } : _configurations$xAxis,
      xTickCount = configurations.xTickCount,
      _configurations$yAxis = configurations.yAxis,
      yAxis = _configurations$yAxis === void 0 ? {
    axisLine: true,
    tickTextColor: null,
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
      yDomain = _configurations$yDoma === void 0 ? [0, 'auto'] : _configurations$yDoma; // eslint-disable-next-line max-len

  var _useFilteredSeries = (0, _hooks.useFilteredSeries)(filteredSeries, setFilteredSeries),
      _useFilteredSeries2 = (0, _slicedToArray2["default"])(_useFilteredSeries, 2),
      filteredSeriesSet = _useFilteredSeries2[0],
      setFilteredSeriesSet = _useFilteredSeries2[1];

  var colorGenerator = (0, _colors.getColorGenerator)();
  var subSeries = (0, _react.useMemo)(function () {
    return subSeriesConfiguration.map(function (_ref4) {
      var label = _ref4.label,
          valueLabel = _ref4.valueLabel,
          dataKey = _ref4.dataKey,
          _ref4$fill = _ref4.fill,
          fill = _ref4$fill === void 0 ? colorGenerator.next().value : _ref4$fill,
          stackId = _ref4.stackId,
          barSize = _ref4.barSize,
          borderRadius = _ref4.borderRadius;
      return {
        key: dataKey,
        label: label,
        valueLabel: valueLabel,
        name: label,
        dataKey: dataKey,
        fill: fill,
        color: fill,
        stackId: stackId,
        barSize: barSize,
        borderRadius: borderRadius
      };
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
    yDomain: yDomain,
    formatter: labelTickFormatter !== null && labelTickFormatter !== void 0 ? labelTickFormatter : normalizedLabelFormatter,
    valueFormatter: normalizedValueFormatter,
    xAxis: xAxis,
    yAxis: yAxis,
    getCustomTick: getCustomTick
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
    layout: transposed ? 'vertical' : 'horizontal',
    margin: margin,
    stackOffset: stackOffset
  }, /*#__PURE__*/_react["default"].createElement(Recharts.CartesianGrid, (0, _extends2["default"])({}, cartesianGridStyle, cartesianGrid)), (0, _tooltip.renderTooltip)(configurations), legend.enabled && (0, _legend.renderLegend)({
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
        _item$borderRadius = item.borderRadius,
        borderRadius = _item$borderRadius === void 0 ? 0 : _item$borderRadius,
        rest = (0, _objectWithoutProperties2["default"])(item, ["label", "valueLabel", "barSize", "yAxisId", "borderRadius"]);

    if (filteredSeriesSet.has(label)) {
      return null;
    } // eslint-disable-next-line max-len


    var renderLabelContent = (0, _bar.getBarLabelRenderer)(transposed, (_valueLabel$formatter = valueLabel.formatter) !== null && _valueLabel$formatter !== void 0 ? _valueLabel$formatter : normalizedValueFormatter, valueLabel);
    return /*#__PURE__*/_react["default"].createElement(Recharts.Bar, (0, _extends2["default"])({
      key: (_item$key2 = item.key) !== null && _item$key2 !== void 0 ? _item$key2 : label,
      yAxisId: yAxisId,
      isAnimationActive: false,
      barSize: barSize,
      radius: borderRadius
    }, rest), /*#__PURE__*/_react["default"].createElement(Recharts.LabelList, {
      dataKey: valueLabel.dataKey,
      valueAccessor: valueLabel.valueAccessor,
      content: renderLabelContent
    }), data.map(getBarRenderer(item)));
  }), xAxisWithTranpose(axisProps), yAxisWithTranspose(axisProps), additionalYAxis && (0, _yAxis.renderYAxis)(additionalYAxis), composingLines.map(function (_ref5) {
    var _yAxis$yAxisId;

    var key = _ref5.key,
        rest = (0, _objectWithoutProperties2["default"])(_ref5, ["key"]);
    return /*#__PURE__*/_react["default"].createElement(Recharts.Line, (0, _extends2["default"])({
      key: key !== null && key !== void 0 ? key : rest.label,
      yAxisId: (_yAxis$yAxisId = yAxis === null || yAxis === void 0 ? void 0 : yAxis.yAxisId) !== null && _yAxis$yAxisId !== void 0 ? _yAxis$yAxisId : 0,
      isAnimationActive: false,
      strokeWidth: 2,
      label: null
    }, rest));
  }), frontReferenceLines.map(function (item, index) {
    var _item$key3;

    return (0, _referenceLine.renderReferenceLine)(_objectSpread({
      key: (_item$key3 = item.key) !== null && _item$key3 !== void 0 ? _item$key3 : index
    }, item));
  }), (0, _brush.renderBrush)(brush, labelTickFormatter !== null && labelTickFormatter !== void 0 ? labelTickFormatter : normalizedLabelFormatter)));
}

var _default = RechartsBarChart;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9yZWNoYXJ0cy1iYXItY2hhcnQudHN4Il0sIm5hbWVzIjpbInhBeGlzV2l0aFRyYW5wb3NlIiwieFRpY2tDb3VudCIsInhBeGlzIiwieUF4aXMiLCJsYWJlbEtleSIsImZvcm1hdHRlciIsInZhbHVlRm9ybWF0dGVyIiwidHJhbnNwb3NlZCIsInlEb21haW4iLCJnZXRDdXN0b21UaWNrIiwieFBvaW50cyIsImFsbG93RHVwbGljYXRlZENhdGVnb3J5IiwidmVydGljYWwiLCJ0aWNrQ291bnQiLCJkYXRhS2V5IiwicG9pbnRzIiwic2NhbGUiLCJ0eXBlIiwib3JpZW50YXRpb24iLCJkb21haW4iLCJ5QXhpc1dpdGhUcmFuc3Bvc2UiLCJpbnRlcnZhbCIsImdldEJhclJlbmRlcmVyIiwiY29uZiIsImJhclJlbmRlcmVyIiwiZW50cnkiLCJpbmRleCIsImZpbGwiLCJSZWNoYXJ0c0JhckNoYXJ0IiwiZGF0YSIsImZpbHRlcmVkU2VyaWVzIiwic2V0RmlsdGVyZWRTZXJpZXMiLCJjb25maWd1cmF0aW9ucyIsImVtcHR5IiwiZW1wdHlDb250ZW50IiwiYnJ1c2giLCJlbmFibGVkIiwibGVnZW5kIiwiYWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiY2FydGVzaWFuR3JpZCIsImhvcml6b250YWwiLCJjYXJ0ZXNpYW5HcmlkU3R5bGUiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2UiLCJjb21wb3NpbmdMaW5lcyIsImF4aXNMaW5lIiwidGlja1RleHRDb2xvciIsIm5hbWUiLCJhZGRpdGlvbmFsWUF4aXMiLCJsYWJlbEZvcm1hdHRlciIsImxhYmVsVGlja0Zvcm1hdHRlciIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInN1YlNlcmllc0NvbmZpZ3VyYXRpb24iLCJsYWJlbCIsInJlZmVyZW5jZUxpbmVzIiwicmVmZXJlbmNlQXJlYXMiLCJzdGFja09mZnNldCIsImZpbHRlcmVkU2VyaWVzU2V0Iiwic2V0RmlsdGVyZWRTZXJpZXNTZXQiLCJjb2xvckdlbmVyYXRvciIsInN1YlNlcmllcyIsIm1hcCIsInZhbHVlTGFiZWwiLCJuZXh0IiwidmFsdWUiLCJzdGFja0lkIiwiYmFyU2l6ZSIsImJvcmRlclJhZGl1cyIsImtleSIsImNvbG9yIiwibm9ybWFsaXplZExhYmVsRm9ybWF0dGVyIiwibm9ybWFsaXplZFZhbHVlRm9ybWF0dGVyIiwiUmVhY3QiLCJ1c2VNZW1vIiwicyIsImF4aXNQcm9wcyIsImRhdGFMZW5ndGgiLCJsZW5ndGgiLCJmcm9udFJlZmVyZW5jZUxpbmVzIiwiZmlsdGVyIiwibGluZSIsInJlbmRlck9uVG9wIiwicmVhclJlZmVyZW5jZUxpbmVzIiwic2VyaWVzIiwiaXRlbSIsInlBeGlzSWQiLCJyZXN0IiwiaGFzIiwicmVuZGVyTGFiZWxDb250ZW50IiwidmFsdWVBY2Nlc3NvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxpQkFBVCxPQVdRO0FBQUEsTUFWTkMsVUFVTSxRQVZOQSxVQVVNO0FBQUEsd0JBVE5DLEtBU007QUFBQSxNQVROQSxLQVNNLDJCQVRFLEVBU0Y7QUFBQSxNQVJOQyxLQVFNLFFBUk5BLEtBUU07QUFBQSxNQVBOQyxRQU9NLFFBUE5BLFFBT007QUFBQSxNQU5OQyxTQU1NLFFBTk5BLFNBTU07QUFBQSxNQUxOQyxjQUtNLFFBTE5BLGNBS007QUFBQSxNQUpOQyxVQUlNLFFBSk5BLFVBSU07QUFBQSxNQUhOQyxPQUdNLFFBSE5BLE9BR007QUFBQSxNQUZOQyxhQUVNLFFBRk5BLGFBRU07QUFBQSxNQUROQyxPQUNNLFFBRE5BLE9BQ007O0FBQ04sTUFBSSxDQUFDSCxVQUFM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LEdBQUYsY0FBRUEsR0FBRixHQUFTa0IsSUFBSSxDQUFDakMsS0FEbkI7QUFFRSxNQUFBLE9BQU8sb0JBQUV2RCxLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRXVGLE9BQVQsMkRBQW9CLENBRjdCO0FBR0UsTUFBQSxpQkFBaUIsRUFBRSxLQUhyQjtBQUlFLE1BQUEsV0FBVyxFQUFFLENBSmY7QUFLRSxNQUFBLEtBQUssRUFBRTtBQUxULE9BTU1DLElBTk4sRUFEa0I7QUFBQSxHQUFuQixDQXRESCxFQWdFR1IsbUJBQW1CLENBQUNqQixHQUFwQixDQUF3QixVQUFDdUIsSUFBRCxFQUFZL0QsS0FBWixFQUEyQjtBQUFBOztBQUNsRCxXQUFPO0FBQXNCK0MsTUFBQUEsR0FBRyxnQkFBRWdCLElBQUksQ0FBQ2hCLEdBQVAsbURBQWMvQztBQUF2QyxPQUFpRCtELElBQWpELEVBQVA7QUFDRCxHQUZBLENBaEVILEVBbUVHLHdCQUFZdEQsS0FBWixFQUFtQmdCLGtCQUFuQixhQUFtQkEsa0JBQW5CLGNBQW1CQSxrQkFBbkIsR0FBeUN3Qix3QkFBekMsQ0FuRUgsQ0FERixDQURGO0FBeUVEOztlQUNjL0MsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOiB6b29tXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlY2hhcnRzIGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IFJlY2hhcnRzQ2hhcnRCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC1iYXNlJztcbmltcG9ydCB7IHJlbmRlclNpbXBsZVhBeGlzIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMveC1heGlzJztcbmltcG9ydCB7IHJlbmRlcllBeGlzIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMveS1heGlzJztcbmltcG9ydCB7IHJlbmRlclRvb2x0aXAgfSBmcm9tICcuLi8uLi8uLi9yZWNoYXJ0cy90b29sdGlwJztcbmltcG9ydCB7IHJlbmRlclJlZmVyZW5jZUxpbmUgfSBmcm9tICcuLi8uLi8uLi9yZWNoYXJ0cy9yZWZlcmVuY2UtbGluZSc7XG5pbXBvcnQgeyByZW5kZXJSZWZlcmVuY2VBcmVhcyB9IGZyb20gJy4uLy4uLy4uL3JlY2hhcnRzL3JlZmVyZW5jZS1hcmVhJztcbmltcG9ydCB7IHJlbmRlckJydXNoIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvYnJ1c2gnO1xuaW1wb3J0IHsgcmVuZGVyTGVnZW5kIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvbGVnZW5kJztcbmltcG9ydCB7IGdldENvbG9yR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jb2xvcnMnO1xuaW1wb3J0IHsgbm9ybWFsaXplRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9mb3JtYXR0ZXInO1xuaW1wb3J0IHsgdXNlRmlsdGVyZWRTZXJpZXMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2hvb2tzJztcbmltcG9ydCB7IGdldEJhckxhYmVsUmVuZGVyZXIgfSBmcm9tICcuLi8uLi8uLi9yZWNoYXJ0cy9sYWJlbC9iYXInO1xuXG5mdW5jdGlvbiB4QXhpc1dpdGhUcmFucG9zZSh7XG4gIHhUaWNrQ291bnQsXG4gIHhBeGlzID0ge30sXG4gIHlBeGlzLFxuICBsYWJlbEtleSxcbiAgZm9ybWF0dGVyLFxuICB2YWx1ZUZvcm1hdHRlcixcbiAgdHJhbnNwb3NlZCxcbiAgeURvbWFpbixcbiAgZ2V0Q3VzdG9tVGljayxcbiAgeFBvaW50cyxcbn06IGFueSkge1xuICBpZiAoIXRyYW5zcG9zZWQpIHtcbiAgICByZXR1cm4gcmVuZGVyU2ltcGxlWEF4aXMoe1xuICAgICAgYWxsb3dEdXBsaWNhdGVkQ2F0ZWdvcnk6IHRydWUsXG4gICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgIGZvcm1hdHRlcixcbiAgICAgIHRpY2tDb3VudDogeFRpY2tDb3VudCxcbiAgICAgIC4uLnhBeGlzLFxuICAgICAgZGF0YUtleTogbGFiZWxLZXksXG4gICAgICBnZXRDdXN0b21UaWNrLFxuICAgICAgcG9pbnRzOiB4UG9pbnRzLFxuICAgICAgc2NhbGU6ICdiYW5kJywgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlY2hhcnRzL3JlY2hhcnRzL2lzc3Vlcy8yMTIyXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlclNpbXBsZVhBeGlzKHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBvcmllbnRhdGlvbjogJ3RvcCcsXG4gICAgZm9ybWF0dGVyOiB2YWx1ZUZvcm1hdHRlcixcbiAgICAuLi55QXhpcyxcbiAgICBkb21haW46IHlEb21haW4sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB5QXhpc1dpdGhUcmFuc3Bvc2Uoe1xuICB4QXhpcyxcbiAgeUF4aXMsXG4gIGxhYmVsS2V5LFxuICBmb3JtYXR0ZXIsXG4gIHZhbHVlRm9ybWF0dGVyLFxuICB0cmFuc3Bvc2VkLFxuICB5RG9tYWluLFxuICBnZXRDdXN0b21UaWNrLFxufTogYW55KSB7XG4gIGlmICghdHJhbnNwb3NlZCkge1xuICAgIHJldHVybiByZW5kZXJZQXhpcyh7XG4gICAgICAuLi55QXhpcyxcbiAgICAgIGZvcm1hdHRlcjogdmFsdWVGb3JtYXR0ZXIsXG4gICAgICBkb21haW46IHlEb21haW4sXG4gICAgICBnZXRDdXN0b21UaWNrLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZW5kZXJZQXhpcyh7XG4gICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAuLi54QXhpcyxcbiAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICBkYXRhS2V5OiBsYWJlbEtleSxcbiAgICBmb3JtYXR0ZXIsXG4gICAgc2NhbGU6ICdiYW5kJyxcbiAgICBpbnRlcnZhbDogMCxcbiAgICBnZXRDdXN0b21UaWNrLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFyUmVuZGVyZXIoY29uZjogYW55KSB7XG4gIHJldHVybiBmdW5jdGlvbiBiYXJSZW5kZXJlcihlbnRyeTogYW55LCBpbmRleDogYW55KSB7XG4gICAgbGV0IGZpbGwgPSBjb25mLmZpbGw7XG4gICAgaWYgKHR5cGVvZiBjb25mLmZpbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbGwgPSBjb25mLmZpbGwoY29uZiwgZW50cnkpO1xuICAgIH1cbiAgICByZXR1cm4gPFJlY2hhcnRzLkNlbGwga2V5PXtgY2VsbC0ke2luZGV4fWB9IGZpbGw9e2ZpbGx9IC8+O1xuICB9O1xufVxuXG5mdW5jdGlvbiBSZWNoYXJ0c0JhckNoYXJ0KHtcbiAgZGF0YSxcbiAgZmlsdGVyZWRTZXJpZXMgPSBbXSxcbiAgc2V0RmlsdGVyZWRTZXJpZXMsXG4gIGNvbmZpZ3VyYXRpb25zLFxuICBlbXB0eSA9IGZhbHNlLFxuICBlbXB0eUNvbnRlbnQsXG59OiBhbnkpIHtcbiAgY29uc3Qge1xuICAgIGdldEN1c3RvbVRpY2sgPSBmYWxzZSxcbiAgICBicnVzaCA9IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbGVnZW5kID0ge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIH0sXG4gICAgY2FydGVzaWFuR3JpZCA9IHtcbiAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICB9LFxuICAgIGNhcnRlc2lhbkdyaWRTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogJzMgMycsXG4gICAgICBzdHJva2U6ICcjRjFGMUYxJyxcbiAgICB9LFxuICAgIGNvbXBvc2luZ0xpbmVzID0gW10sXG4gICAgeEF4aXMgPSB7XG4gICAgICBheGlzTGluZTogdHJ1ZSxcbiAgICAgIHRpY2tUZXh0Q29sb3I6IG51bGwsXG4gICAgICBuYW1lOiAnJyxcbiAgICB9LFxuICAgIHhUaWNrQ291bnQsXG4gICAgeUF4aXMgPSB7XG4gICAgICBheGlzTGluZTogdHJ1ZSxcbiAgICAgIHRpY2tUZXh0Q29sb3I6IG51bGwsXG4gICAgICBuYW1lOiAnJyxcbiAgICB9LFxuICAgIGFkZGl0aW9uYWxZQXhpcyxcbiAgICBsYWJlbEtleSA9ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcixcbiAgICBsYWJlbFRpY2tGb3JtYXR0ZXIsXG4gICAgbWFyZ2luID0geyB0b3A6IDUsIHJpZ2h0OiA1LCBib3R0b206IDUsIGxlZnQ6IDUgfSxcbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uID0gW3sgZGF0YUtleTogJ3ZhbHVlJywgbGFiZWw6ICdWYWx1ZScgfV0sIC8vIHN1Yi1zZXJpZXNcbiAgICB2YWx1ZUZvcm1hdHRlcixcbiAgICByZWZlcmVuY2VMaW5lcyA9IFtdLFxuICAgIHJlZmVyZW5jZUFyZWFzID0gW10sXG4gICAgc3RhY2tPZmZzZXQgPSAnbm9uZScsXG4gICAgdHJhbnNwb3NlZCA9IGZhbHNlLFxuICAgIHlEb21haW4gPSBbMCwgJ2F1dG8nXSxcbiAgfSA9IGNvbmZpZ3VyYXRpb25zO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gIGNvbnN0IFtmaWx0ZXJlZFNlcmllc1NldCwgc2V0RmlsdGVyZWRTZXJpZXNTZXRdID0gdXNlRmlsdGVyZWRTZXJpZXMoZmlsdGVyZWRTZXJpZXMsIHNldEZpbHRlcmVkU2VyaWVzKTtcbiAgY29uc3QgY29sb3JHZW5lcmF0b3IgPSBnZXRDb2xvckdlbmVyYXRvcigpO1xuXG4gIGNvbnN0IHN1YlNlcmllcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBzdWJTZXJpZXNDb25maWd1cmF0aW9uLm1hcChcbiAgICAgICh7IGxhYmVsLCB2YWx1ZUxhYmVsLCBkYXRhS2V5LCBmaWxsID0gY29sb3JHZW5lcmF0b3IubmV4dCgpLnZhbHVlLCBzdGFja0lkLCBiYXJTaXplLCBib3JkZXJSYWRpdXMgfTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5OiBkYXRhS2V5LFxuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIHZhbHVlTGFiZWwsXG4gICAgICAgICAgbmFtZTogbGFiZWwsXG4gICAgICAgICAgZGF0YUtleSxcbiAgICAgICAgICBmaWxsLFxuICAgICAgICAgIGNvbG9yOiBmaWxsLFxuICAgICAgICAgIHN0YWNrSWQsXG4gICAgICAgICAgYmFyU2l6ZSxcbiAgICAgICAgICBib3JkZXJSYWRpdXMsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgKTtcbiAgfSwgW2RhdGEsIHN1YlNlcmllc0NvbmZpZ3VyYXRpb25dKTtcblxuICBjb25zdCBub3JtYWxpemVkTGFiZWxGb3JtYXR0ZXIgPSBub3JtYWxpemVGb3JtYXR0ZXIobGFiZWxGb3JtYXR0ZXIpO1xuICBjb25zdCBub3JtYWxpemVkVmFsdWVGb3JtYXR0ZXIgPSBub3JtYWxpemVGb3JtYXR0ZXIodmFsdWVGb3JtYXR0ZXIpO1xuXG4gIGNvbnN0IHhQb2ludHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IGRhdGEubWFwKChzOiBhbnkpID0+IHNbbGFiZWxLZXldKSwgW2RhdGFdKTtcblxuICBjb25zdCBheGlzUHJvcHMgPSB7XG4gICAgeFRpY2tDb3VudCxcbiAgICB4UG9pbnRzLFxuICAgIGRhdGFMZW5ndGg6IGRhdGEubGVuZ3RoLFxuICAgIHRyYW5zcG9zZWQsXG4gICAgbGFiZWxLZXksXG4gICAgeURvbWFpbixcbiAgICBmb3JtYXR0ZXI6IGxhYmVsVGlja0Zvcm1hdHRlciA/PyBub3JtYWxpemVkTGFiZWxGb3JtYXR0ZXIsXG4gICAgdmFsdWVGb3JtYXR0ZXI6IG5vcm1hbGl6ZWRWYWx1ZUZvcm1hdHRlcixcbiAgICB4QXhpcyxcbiAgICB5QXhpcyxcbiAgICBnZXRDdXN0b21UaWNrLFxuICB9O1xuXG4gIGNvbnN0IGZyb250UmVmZXJlbmNlTGluZXMgPSByZWZlcmVuY2VMaW5lcy5maWx0ZXIoKGxpbmU6IGFueSkgPT4gbGluZS5yZW5kZXJPblRvcCk7XG4gIGNvbnN0IHJlYXJSZWZlcmVuY2VMaW5lcyA9IHJlZmVyZW5jZUxpbmVzLmZpbHRlcigobGluZTogYW55KSA9PiAhbGluZS5yZW5kZXJPblRvcCk7XG4gIHJldHVybiAoXG4gICAgPFJlY2hhcnRzQ2hhcnRCYXNlIGVtcHR5PXtlbXB0eX0gZW1wdHlDb250ZW50PXtlbXB0eUNvbnRlbnR9PlxuICAgICAgPFJlY2hhcnRzLkNvbXBvc2VkQ2hhcnRcbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgbGF5b3V0PXt0cmFuc3Bvc2VkID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ31cbiAgICAgICAgbWFyZ2luPXttYXJnaW59XG4gICAgICAgIHN0YWNrT2Zmc2V0PXtzdGFja09mZnNldH1cbiAgICAgID5cbiAgICAgICAgPFJlY2hhcnRzLkNhcnRlc2lhbkdyaWQgey4uLmNhcnRlc2lhbkdyaWRTdHlsZX0gey4uLmNhcnRlc2lhbkdyaWR9IC8+XG4gICAgICAgIHtyZW5kZXJUb29sdGlwKGNvbmZpZ3VyYXRpb25zKX1cbiAgICAgICAge2xlZ2VuZC5lbmFibGVkICYmXG4gICAgICAgICAgcmVuZGVyTGVnZW5kKHtcbiAgICAgICAgICAgIGxlZ2VuZCxcbiAgICAgICAgICAgIHNlcmllczogc3ViU2VyaWVzLFxuICAgICAgICAgICAgZmlsdGVyZWRTZXJpZXM6IGZpbHRlcmVkU2VyaWVzU2V0LFxuICAgICAgICAgICAgc2V0RmlsdGVyZWRTZXJpZXM6IHNldEZpbHRlcmVkU2VyaWVzU2V0LFxuICAgICAgICAgIH0pfVxuICAgICAgICB7cmVmZXJlbmNlQXJlYXMubWFwKChpdGVtOiBhbnkpID0+IHJlbmRlclJlZmVyZW5jZUFyZWFzKGl0ZW0pKX1cbiAgICAgICAge3JlYXJSZWZlcmVuY2VMaW5lcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiByZW5kZXJSZWZlcmVuY2VMaW5lKHsga2V5OiBpdGVtLmtleSA/PyBpbmRleCwgLi4uaXRlbSB9KTtcbiAgICAgICAgfSl9XG4gICAgICAgIHtzdWJTZXJpZXMubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGxhYmVsLCB2YWx1ZUxhYmVsID0geyBlbmFibGVkOiBmYWxzZSB9LCBiYXJTaXplID0gMjAsIHlBeGlzSWQgPSAwLCBib3JkZXJSYWRpdXMgPSAwLCAuLi5yZXN0IH0gPSBpdGVtO1xuXG4gICAgICAgICAgaWYgKGZpbHRlcmVkU2VyaWVzU2V0LmhhcyhsYWJlbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgY29uc3QgcmVuZGVyTGFiZWxDb250ZW50ID0gZ2V0QmFyTGFiZWxSZW5kZXJlcihcbiAgICAgICAgICAgIHRyYW5zcG9zZWQsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsLmZvcm1hdHRlciA/PyBub3JtYWxpemVkVmFsdWVGb3JtYXR0ZXIsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlY2hhcnRzLkJhclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5ID8/IGxhYmVsfVxuICAgICAgICAgICAgICB5QXhpc0lkPXt5QXhpc0lkfVxuICAgICAgICAgICAgICBpc0FuaW1hdGlvbkFjdGl2ZT17ZmFsc2V9XG4gICAgICAgICAgICAgIGJhclNpemU9e2JhclNpemV9XG4gICAgICAgICAgICAgIHJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNzQxKSBGSVhNRTogUHJvcGVydHkgJ2RhdGEnIGlzIG1pc3NpbmcgaW4gdHlwZSAneyBkYXRhS2V5OiBhbnkuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSAqL31cbiAgICAgICAgICAgICAgPFJlY2hhcnRzLkxhYmVsTGlzdFxuICAgICAgICAgICAgICAgIGRhdGFLZXk9e3ZhbHVlTGFiZWwuZGF0YUtleX1cbiAgICAgICAgICAgICAgICB2YWx1ZUFjY2Vzc29yPXt2YWx1ZUxhYmVsLnZhbHVlQWNjZXNzb3J9XG4gICAgICAgICAgICAgICAgY29udGVudD17cmVuZGVyTGFiZWxDb250ZW50fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoZ2V0QmFyUmVuZGVyZXIoaXRlbSkpfVxuICAgICAgICAgICAgPC9SZWNoYXJ0cy5CYXI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIHt4QXhpc1dpdGhUcmFucG9zZShheGlzUHJvcHMpfVxuICAgICAgICB7eUF4aXNXaXRoVHJhbnNwb3NlKGF4aXNQcm9wcyl9XG4gICAgICAgIHthZGRpdGlvbmFsWUF4aXMgJiYgcmVuZGVyWUF4aXMoYWRkaXRpb25hbFlBeGlzKX1cbiAgICAgICAge2NvbXBvc2luZ0xpbmVzLm1hcCgoeyBrZXksIC4uLnJlc3QgfTogYW55KSA9PiAoXG4gICAgICAgICAgPFJlY2hhcnRzLkxpbmVcbiAgICAgICAgICAgIGtleT17a2V5ID8/IHJlc3QubGFiZWx9XG4gICAgICAgICAgICB5QXhpc0lkPXt5QXhpcz8ueUF4aXNJZCA/PyAwfVxuICAgICAgICAgICAgaXNBbmltYXRpb25BY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICBsYWJlbD17bnVsbH1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICB7ZnJvbnRSZWZlcmVuY2VMaW5lcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiByZW5kZXJSZWZlcmVuY2VMaW5lKHsga2V5OiBpdGVtLmtleSA/PyBpbmRleCwgLi4uaXRlbSB9KTtcbiAgICAgICAgfSl9XG4gICAgICAgIHtyZW5kZXJCcnVzaChicnVzaCwgbGFiZWxUaWNrRm9ybWF0dGVyID8/IG5vcm1hbGl6ZWRMYWJlbEZvcm1hdHRlcil9XG4gICAgICA8L1JlY2hhcnRzLkNvbXBvc2VkQ2hhcnQ+XG4gICAgPC9SZWNoYXJ0c0NoYXJ0QmFzZT5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFJlY2hhcnRzQmFyQ2hhcnQ7XG4iXX0=