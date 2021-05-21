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

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/is-array"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

var _jsonStableStringify = _interopRequireDefault(require("json-stable-stringify"));

var _lodash = require("lodash");

var _chartBase = require("../../base/chart-base");

var _utils = require("../../../helpers/utils");

var _xAxis = require("../../../recharts/x-axis");

var _yAxis = require("../../../recharts/y-axis");

var _tooltip = require("../../../recharts/tooltip");

var _referenceLine = require("../../../recharts/reference-line");

var _referenceDot = _interopRequireDefault(require("../../../recharts/reference-dot"));

var _composingScatter = _interopRequireDefault(require("../../../recharts/composing-scatter"));

var _referenceArea = require("../../../recharts/reference-area");

var _predictionLine = _interopRequireDefault(require("../../../recharts/prediction-line"));

var _legend = require("../../../recharts/legend");

var _colors = require("../../../helpers/colors");

var _interpolation = require("../../../helpers/interpolation");

var _formatter = require("../../../helpers/formatter");

var _hooks = require("../../../helpers/hooks");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function getSorter() {
  var labelIsDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var labelKey = arguments.length > 1 ? arguments[1] : undefined;
  return function (arr) {
    if (labelIsDate) {
      // @ts-expect-error ts-migrate(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      arr.sort(function (a, b) {
        return new Date(a[labelKey]) - new Date(b[labelKey]);
      });
    } else {
      arr.sort(function (a, b) {
        return a[labelKey] - b[labelKey];
      });
    }

    return arr;
  };
}

var MultipleSeriesLineChart = function MultipleSeriesLineChart(_ref) {
  var series = _ref.series,
      _ref$filteredSeries = _ref.filteredSeries,
      filteredSeries = _ref$filteredSeries === void 0 ? [] : _ref$filteredSeries,
      setFilteredSeries = _ref.setFilteredSeries,
      configurations = _ref.configurations,
      empty = _ref.empty,
      emptyContent = _ref.emptyContent;
  var _configurations$serie = configurations.seriesDataKey,
      seriesDataKey = _configurations$serie === void 0 ? 'data' : _configurations$serie,
      _configurations$serie2 = configurations.seriesNameKey,
      seriesNameKey = _configurations$serie2 === void 0 ? 'name' : _configurations$serie2,
      seriesNameFormatter = configurations.seriesNameFormatter,
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
      _configurations$conne = configurations.connectNulls,
      connectNulls = _configurations$conne === void 0 ? false : _configurations$conne,
      _configurations$compo = configurations.composingScatters,
      composingScatters = _configurations$compo === void 0 ? [] : _configurations$compo,
      labelKey = configurations.labelKey,
      serieKeyGetter = configurations.serieKeyGetter,
      labelFormatter0 = configurations.labelFormatter,
      labelTickFormatter = configurations.labelTickFormatter,
      _configurations$margi = configurations.margin,
      margin = _configurations$margi === void 0 ? {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  } : _configurations$margi,
      _configurations$point = configurations.pointLabelRenderer,
      pointLabelRenderer = _configurations$point === void 0 ? false : _configurations$point,
      _configurations$value = configurations.valueKey,
      valueKey = _configurations$value === void 0 ? 'value' : _configurations$value,
      valueFormatter0 = configurations.valueFormatter,
      rowNameFormatter0 = configurations.rowNameFormatter,
      _configurations$inter = configurations.interpolationType,
      interpolationType = _configurations$inter === void 0 ? 'monotone' : _configurations$inter,
      _configurations$xAxis = configurations.xAxis,
      xAxis = _configurations$xAxis === void 0 ? {
    axisLine: true,
    name: '',
    fillGaps: false
  } : _configurations$xAxis,
      _configurations$yAxis = configurations.yAxis,
      yAxis = _configurations$yAxis === void 0 ? {
    axisLine: true,
    name: ''
  } : _configurations$yAxis,
      _configurations$xTick = configurations.xTickCount,
      xTickCount = _configurations$xTick === void 0 ? 7 : _configurations$xTick,
      _configurations$refer = configurations.referenceLines,
      referenceLines = _configurations$refer === void 0 ? [] : _configurations$refer,
      _configurations$refer2 = configurations.referenceAreas,
      referenceAreas = _configurations$refer2 === void 0 ? [] : _configurations$refer2,
      _configurations$refer3 = configurations.referenceDots,
      referenceDots = _configurations$refer3 === void 0 ? [] : _configurations$refer3,
      _configurations$getRe = configurations.getRefPredictionLine,
      getRefPredictionLine = _configurations$getRe === void 0 ? function () {
    return false;
  } : _configurations$getRe,
      onClick = configurations.onClick,
      yDomain = configurations.yDomain,
      _configurations$rende = configurations.renderDot,
      renderDot = _configurations$rende === void 0 ? false : _configurations$rende; // eslint-disable-next-line max-len

  var _useFilteredSeries = (0, _hooks.useFilteredSeries)(filteredSeries, setFilteredSeries),
      _useFilteredSeries2 = (0, _slicedToArray2["default"])(_useFilteredSeries, 2),
      filteredSeriesSet = _useFilteredSeries2[0],
      setFilteredSeriesSet = _useFilteredSeries2[1];

  var _useState = (0, _react.useState)('hover'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      tooltipTrigger = _useState2[0],
      setTooltipTrigger = _useState2[1];

  var toggleTooltipTrigger = function toggleTooltipTrigger(e) {
    if (!onClick) {
      return;
    }

    setTooltipTrigger(tooltipTrigger === 'hover' ? 'click' : 'hover');
    onClick && onClick(e);
  };

  var resetTooltipTrigger = (0, _react.useCallback)(function () {
    if (!onClick) {
      return;
    }

    setTooltipTrigger('hover');
  }, [setTooltipTrigger]);
  var colorGenerator = (0, _colors.getColorGenerator)(); // NOTE(Leto): this is an unstable rough solution for an emergent feature, needs test

  var seriesWithoutGaps = (0, _react.useMemo)(function () {
    if (!xAxis.fillGaps) {
      return series;
    } // find out all labels


    var flattend = (0, _lodash.flatten)(series.map(function (s) {
      return s[seriesDataKey];
    })); // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.

    var labels = (0, _lodash.uniq)(flattend.map(function (item) {
      return item[labelKey];
    }));
    var labelIsDate = typeof new Date(labels[0]).getTime === 'function';
    var sorter = getSorter(labelIsDate, labelKey); // build empty valued data for filling gaps

    var templates = labels.map(function (label) {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty3["default"])(_ref2, labelKey, label), (0, _defineProperty3["default"])(_ref2, valueKey, 0), _ref2;
    }); // fill gaps for each series

    var ret = (0, _lodash.cloneDeep)(series);
    ret.forEach(function (s) {
      s[seriesDataKey] = sorter((0, _lodash.unionBy)(s[seriesDataKey], templates, function (item) {
        return item[labelKey];
      }));
    });
    return ret;
  }, [series, xAxis.fillGaps]);
  var stringSeries = (0, _jsonStableStringify["default"])(seriesWithoutGaps);
  var wholeSeries = (0, _react.useMemo)(function () {
    return seriesWithoutGaps.map(function (s, index) {
      var _s$color;

      var name = seriesNameFormatter ? seriesNameFormatter(s) : (0, _utils.deepFind)(s, seriesNameKey, '$.');
      return _objectSpread(_objectSpread({}, s), {}, {
        key: serieKeyGetter ? serieKeyGetter(s) : index,
        name: name,
        color: (_s$color = s.color) !== null && _s$color !== void 0 ? _s$color : colorGenerator.next().value
      });
    });
  }, [stringSeries]);
  var labelFormatter = (0, _formatter.normalizeFormatter)(labelFormatter0 || {});
  var valueFormatter = (0, _formatter.normalizeFormatter)(valueFormatter0 || {});
  var rowNameFormatter = (0, _formatter.normalizeFormatter)(rowNameFormatter0 || {});
  var frontReferenceLines = referenceLines.filter(function (line) {
    return line.renderOnTop;
  });
  var rearReferenceLines = referenceLines.filter(function (line) {
    return !line.renderOnTop;
  }); // eslint-disable-next-line max-len

  var seriesEmpty = (0, _react.useMemo)((0, _utils.isSeriesEmpty)(seriesWithoutGaps, seriesDataKey, valueKey), [stringSeries]);

  if (typeof empty === 'undefined') {
    empty = seriesEmpty;
  }

  var xPoints = _react["default"].useMemo(function () {
    if (!(0, _isArray["default"])(wholeSeries) || wholeSeries.length === 0) {
      return [];
    }

    try {
      var sampleSeries = wholeSeries[0][seriesDataKey];
      return sampleSeries.map(function (s) {
        return s[labelKey];
      });
    } catch (error) {
      return [];
    }
  }, [wholeSeries, seriesDataKey, labelKey]);

  var tooltip = _react["default"].useMemo(function () {
    var tooltip = {
      rowNameFormatter: rowNameFormatter,
      labelFormatter: labelFormatter,
      valueFormatter: valueFormatter,
      trigger: tooltipTrigger
    };

    if (configurations.tooltip) {
      (0, _assign["default"])(tooltip, configurations.tooltip);
    }

    return tooltip;
  }, [rowNameFormatter, labelFormatter, valueFormatter, tooltipTrigger, configurations]);

  return /*#__PURE__*/_react["default"].createElement(_chartBase.RechartsChartBase, {
    empty: empty,
    emptyContent: emptyContent
  }, /*#__PURE__*/_react["default"].createElement(Recharts.ComposedChart, {
    onClick: toggleTooltipTrigger // onMouseMove={resetTooltipTrigger}
    ,
    onMouseLeave: resetTooltipTrigger,
    margin: margin
  }, /*#__PURE__*/_react["default"].createElement(Recharts.CartesianGrid, (0, _extends2["default"])({}, cartesianGridStyle, cartesianGrid)), (0, _xAxis.renderSimpleXAxis)(_objectSpread(_objectSpread({
    // vertical: true,
    interval: 0,
    formatter: labelTickFormatter !== null && labelTickFormatter !== void 0 ? labelTickFormatter : labelFormatter,
    tickCount: xTickCount
  }, xAxis), {}, {
    dataKey: labelKey,
    points: xPoints
  })), (0, _yAxis.renderYAxis)(_objectSpread(_objectSpread({}, yAxis), {}, {
    formatter: valueFormatter,
    domain: yDomain
  })), (0, _tooltip.renderTooltip)(_objectSpread(_objectSpread({}, configurations), {}, {
    tooltip: tooltip
  })), legend.enabled && (0, _legend.renderLegend)({
    legend: legend,
    series: wholeSeries,
    filteredSeries: filteredSeriesSet,
    setFilteredSeries: setFilteredSeriesSet
  }), referenceAreas.map(function (item) {
    return (0, _referenceArea.renderReferenceAreas)(item);
  }), rearReferenceLines.map(function (item, index) {
    var _item$key;

    return (0, _referenceLine.renderReferenceLine)(_objectSpread({
      key: (_item$key = item.key) !== null && _item$key !== void 0 ? _item$key : index
    }, item));
  }), wholeSeries.map(function (s) {
    if (filteredSeriesSet.has(s.name) || filteredSeriesSet.has(s.id)) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement(Recharts.Line, {
      isAnimationActive: false,
      key: s.key,
      name: s.name // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      ,
      data: s[seriesDataKey],
      type: (0, _interpolation.parseInterpolation)(interpolationType),
      dataKey: valueKey,
      stroke: s.color,
      strokeWidth: 2,
      dot: renderDot,
      label: pointLabelRenderer,
      connectNulls: connectNulls
    });
  }), wholeSeries.map(function (s) {
    if (filteredSeriesSet.has(s.name) || filteredSeriesSet.has(s.id)) {
      return null;
    }

    var refPredictionLine = getRefPredictionLine(s);

    if (!refPredictionLine || !refPredictionLine.enabled) {
      return null;
    }

    var config = _objectSpread({
      data: s[seriesDataKey],
      labelKey: labelKey,
      valueKey: valueKey
    }, refPredictionLine);

    return (0, _predictionLine["default"])(config, filteredSeriesSet);
  }), frontReferenceLines.map(function (item, index) {
    var _item$key2;

    return (0, _referenceLine.renderReferenceLine)(_objectSpread({
      key: (_item$key2 = item.key) !== null && _item$key2 !== void 0 ? _item$key2 : index
    }, item));
  }), composingScatters.map(function (item) {
    return (0, _composingScatter["default"])(item);
  }), referenceDots.map(function (item) {
    return (0, _referenceDot["default"])(_objectSpread({}, item));
  })));
};

var _default = MultipleSeriesLineChart;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC50c3giXSwibmFtZXMiOlsiZ2V0U29ydGVyIiwibGFiZWxJc0RhdGUiLCJsYWJlbEtleSIsImFyciIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJNdWx0aXBsZVNlcmllc0xpbmVDaGFydCIsInNlcmllcyIsImZpbHRlcmVkU2VyaWVzIiwic2V0RmlsdGVyZWRTZXJpZXMiLCJjb25maWd1cmF0aW9ucyIsImVtcHR5IiwiZW1wdHlDb250ZW50Iiwic2VyaWVzRGF0YUtleSIsInNlcmllc05hbWVLZXkiLCJzZXJpZXNOYW1lRm9ybWF0dGVyIiwibGVnZW5kIiwiZW5hYmxlZCIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImNhcnRlc2lhbkdyaWQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJjYXJ0ZXNpYW5HcmlkU3R5bGUiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2UiLCJjb25uZWN0TnVsbHMiLCJjb21wb3NpbmdTY2F0dGVycyIsInNlcmllS2V5R2V0dGVyIiwibGFiZWxGb3JtYXR0ZXIwIiwibGFiZWxGb3JtYXR0ZXIiLCJsYWJlbFRpY2tGb3JtYXR0ZXIiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJwb2ludExhYmVsUmVuZGVyZXIiLCJ2YWx1ZUtleSIsInZhbHVlRm9ybWF0dGVyMCIsInZhbHVlRm9ybWF0dGVyIiwicm93TmFtZUZvcm1hdHRlcjAiLCJyb3dOYW1lRm9ybWF0dGVyIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJ4QXhpcyIsImF4aXNMaW5lIiwibmFtZSIsImZpbGxHYXBzIiwieUF4aXMiLCJ4VGlja0NvdW50IiwicmVmZXJlbmNlTGluZXMiLCJyZWZlcmVuY2VBcmVhcyIsInJlZmVyZW5jZURvdHMiLCJnZXRSZWZQcmVkaWN0aW9uTGluZSIsIm9uQ2xpY2siLCJ5RG9tYWluIiwicmVuZGVyRG90IiwiZmlsdGVyZWRTZXJpZXNTZXQiLCJzZXRGaWx0ZXJlZFNlcmllc1NldCIsInRvb2x0aXBUcmlnZ2VyIiwic2V0VG9vbHRpcFRyaWdnZXIiLCJ0b2dnbGVUb29sdGlwVHJpZ2dlciIsImUiLCJyZXNldFRvb2x0aXBUcmlnZ2VyIiwiY29sb3JHZW5lcmF0b3IiLCJzZXJpZXNXaXRob3V0R2FwcyIsImZsYXR0ZW5kIiwibWFwIiwicyIsImxhYmVscyIsIml0ZW0iLCJnZXRUaW1lIiwic29ydGVyIiwidGVtcGxhdGVzIiwibGFiZWwiLCJyZXQiLCJmb3JFYWNoIiwic3RyaW5nU2VyaWVzIiwid2hvbGVTZXJpZXMiLCJpbmRleCIsImtleSIsImNvbG9yIiwibmV4dCIsInZhbHVlIiwiZnJvbnRSZWZlcmVuY2VMaW5lcyIsImZpbHRlciIsImxpbmUiLCJyZW5kZXJPblRvcCIsInJlYXJSZWZlcmVuY2VMaW5lcyIsInNlcmllc0VtcHR5IiwieFBvaW50cyIsIlJlYWN0IiwidXNlTWVtbyIsImxlbmd0aCIsInNhbXBsZVNlcmllcyIsImVycm9yIiwidG9vbHRpcCIsInRyaWdnZXIiLCJpbnRlcnZhbCIsImZvcm1hdHRlciIsInRpY2tDb3VudCIsImRhdGFLZXkiLCJwb2ludHMiLCJkb21haW4iLCJoYXMiLCJpZCIsInJlZlByZWRpY3Rpb25MaW5lIiwiY29uZmlnIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLFNBQVQsR0FBdUQ7QUFBQSxNQUFwQ0MsV0FBb0MsdUVBQXRCLEtBQXNCO0FBQUEsTUFBZkMsUUFBZTtBQUNyRCxTQUFPLFVBQUNDLEdBQUQs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ekYsT0FBN0MsRUFBc0Q7QUFDcEQsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBTTBGLE1BQU07QUFDVkMsTUFBQUEsSUFBSSxFQUFFeEMsQ0FBQyxDQUFDdkQsYUFBRCxDQURHO0FBRVZiLE1BQUFBLFFBQVEsRUFBUkEsUUFGVTtBQUdWc0MsTUFBQUEsUUFBUSxFQUFSQTtBQUhVLE9BSVBvRSxpQkFKTyxDQUFaOztBQU1BLFdBQU8sZ0NBQXFCQyxNQUFyQixFQUE2QmxELGlCQUE3QixDQUFQO0FBQ0QsR0FqQkEsQ0F4REgsRUEwRUcyQixtQkFBbUIsQ0FBQ2pCLEdBQXBCLENBQXdCLFVBQUNHLElBQUQsRUFBWVMsS0FBWixFQUEyQjtBQUFBOztBQUNsRCxXQUFPO0FBQXNCQyxNQUFBQSxHQUFHLGdCQUFFVixJQUFJLENBQUNVLEdBQVAsbURBQWNEO0FBQXZDLE9BQWlEVCxJQUFqRCxFQUFQO0FBQ0QsR0FGQSxDQTFFSCxFQTZFRzNDLGlCQUFpQixDQUFDd0MsR0FBbEIsQ0FBc0IsVUFBQ0csSUFBRDtBQUFBLFdBQWUsa0NBQXVCQSxJQUF2QixDQUFmO0FBQUEsR0FBdEIsQ0E3RUgsRUE4RUdsQixhQUFhLENBQUNlLEdBQWQsQ0FBa0IsVUFBQ0csSUFBRDtBQUFBLFdBQWUsZ0RBQXdCQSxJQUF4QixFQUFmO0FBQUEsR0FBbEIsQ0E5RUgsQ0FERixDQURGO0FBb0ZELENBL09EOztlQWdQZWhFLHVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogem9vbVxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlY2hhcnRzIGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCBqc29uU3RhYmxlU3RyaW5naWZ5IGZyb20gJ2pzb24tc3RhYmxlLXN0cmluZ2lmeSc7XG5pbXBvcnQgeyBjbG9uZURlZXAsIGZsYXR0ZW4sIHVuaW9uQnksIHVuaXEgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgUmVjaGFydHNDaGFydEJhc2UgfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UnO1xuaW1wb3J0IHsgZGVlcEZpbmQsIGlzU2VyaWVzRW1wdHkgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCB7IHJlbmRlclNpbXBsZVhBeGlzIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMveC1heGlzJztcbmltcG9ydCB7IHJlbmRlcllBeGlzIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMveS1heGlzJztcbmltcG9ydCB7IHJlbmRlclRvb2x0aXAgfSBmcm9tICcuLi8uLi8uLi9yZWNoYXJ0cy90b29sdGlwJztcbmltcG9ydCB7IHJlbmRlclJlZmVyZW5jZUxpbmUgfSBmcm9tICcuLi8uLi8uLi9yZWNoYXJ0cy9yZWZlcmVuY2UtbGluZSc7XG5pbXBvcnQgcmVuZGVyUmVmZXJlbmNlRG90IGZyb20gJy4uLy4uLy4uL3JlY2hhcnRzL3JlZmVyZW5jZS1kb3QnO1xuaW1wb3J0IHJlbmRlckNvbXBvc2luZ1NjYXR0ZXIgZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvY29tcG9zaW5nLXNjYXR0ZXInO1xuaW1wb3J0IHsgcmVuZGVyUmVmZXJlbmNlQXJlYXMgfSBmcm9tICcuLi8uLi8uLi9yZWNoYXJ0cy9yZWZlcmVuY2UtYXJlYSc7XG5pbXBvcnQgcmVuZGVyUHJlZGljdGlvbkxpbmUgZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvcHJlZGljdGlvbi1saW5lJztcbmltcG9ydCB7IHJlbmRlckxlZ2VuZCB9IGZyb20gJy4uLy4uLy4uL3JlY2hhcnRzL2xlZ2VuZCc7XG5pbXBvcnQgeyBnZXRDb2xvckdlbmVyYXRvciB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY29sb3JzJztcbmltcG9ydCB7IHBhcnNlSW50ZXJwb2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvaW50ZXJwb2xhdGlvbic7XG5pbXBvcnQgeyBub3JtYWxpemVGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2Zvcm1hdHRlcic7XG5pbXBvcnQgeyB1c2VGaWx0ZXJlZFNlcmllcyB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvaG9va3MnO1xuXG5mdW5jdGlvbiBnZXRTb3J0ZXIobGFiZWxJc0RhdGUgPSBmYWxzZSwgbGFiZWxLZXk6IGFueSkge1xuICByZXR1cm4gKGFycjogYW55KSA9PiB7XG4gICAgaWYgKGxhYmVsSXNEYXRlKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjM2MikgRklYTUU6IFRoZSBsZWZ0LWhhbmQgc2lkZSBvZiBhbiBhcml0aG1ldGljIG9wZXJhdGlvbiBtdXN0Li4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICAgIGFyci5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gbmV3IERhdGUoYVtsYWJlbEtleV0pIC0gbmV3IERhdGUoYltsYWJlbEtleV0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBhW2xhYmVsS2V5XSAtIGJbbGFiZWxLZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbn1cblxuY29uc3QgTXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnQgPSAoe1xuICBzZXJpZXMsXG4gIGZpbHRlcmVkU2VyaWVzID0gW10sXG4gIHNldEZpbHRlcmVkU2VyaWVzLFxuICBjb25maWd1cmF0aW9ucyxcbiAgZW1wdHksXG4gIGVtcHR5Q29udGVudCxcbn06IGFueSkgPT4ge1xuICBjb25zdCB7XG4gICAgc2VyaWVzRGF0YUtleSA9ICdkYXRhJyxcbiAgICBzZXJpZXNOYW1lS2V5ID0gJ25hbWUnLFxuICAgIHNlcmllc05hbWVGb3JtYXR0ZXIsXG4gICAgbGVnZW5kID0ge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIH0sXG4gICAgY2FydGVzaWFuR3JpZCA9IHtcbiAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICB9LFxuICAgIGNhcnRlc2lhbkdyaWRTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogJzMgMycsXG4gICAgICBzdHJva2U6ICcjRjFGMUYxJyxcbiAgICB9LFxuICAgIGNvbm5lY3ROdWxscyA9IGZhbHNlLFxuICAgIGNvbXBvc2luZ1NjYXR0ZXJzID0gW10sXG4gICAgbGFiZWxLZXksXG4gICAgc2VyaWVLZXlHZXR0ZXIsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IGxhYmVsRm9ybWF0dGVyMCxcbiAgICBsYWJlbFRpY2tGb3JtYXR0ZXIsXG4gICAgbWFyZ2luID0geyB0b3A6IDUsIHJpZ2h0OiA1LCBib3R0b206IDUsIGxlZnQ6IDUgfSxcbiAgICBwb2ludExhYmVsUmVuZGVyZXIgPSBmYWxzZSxcbiAgICB2YWx1ZUtleSA9ICd2YWx1ZScsXG4gICAgdmFsdWVGb3JtYXR0ZXI6IHZhbHVlRm9ybWF0dGVyMCxcbiAgICByb3dOYW1lRm9ybWF0dGVyOiByb3dOYW1lRm9ybWF0dGVyMCxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZSA9ICdtb25vdG9uZScsXG4gICAgeEF4aXMgPSB7XG4gICAgICBheGlzTGluZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZmlsbEdhcHM6IGZhbHNlLFxuICAgIH0sXG4gICAgeUF4aXMgPSB7XG4gICAgICBheGlzTGluZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgIH0sXG4gICAgeFRpY2tDb3VudCA9IDcsXG4gICAgcmVmZXJlbmNlTGluZXMgPSBbXSxcbiAgICByZWZlcmVuY2VBcmVhcyA9IFtdLFxuICAgIHJlZmVyZW5jZURvdHMgPSBbXSxcbiAgICBnZXRSZWZQcmVkaWN0aW9uTGluZSA9ICgpID0+IGZhbHNlLFxuICAgIG9uQ2xpY2ssXG4gICAgeURvbWFpbixcbiAgICByZW5kZXJEb3QgPSBmYWxzZSwgLy8gZmFsc2Ugb3IgZnVuY3Rpb25cbiAgfSA9IGNvbmZpZ3VyYXRpb25zO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gIGNvbnN0IFtmaWx0ZXJlZFNlcmllc1NldCwgc2V0RmlsdGVyZWRTZXJpZXNTZXRdID0gdXNlRmlsdGVyZWRTZXJpZXMoZmlsdGVyZWRTZXJpZXMsIHNldEZpbHRlcmVkU2VyaWVzKTtcblxuICBjb25zdCBbdG9vbHRpcFRyaWdnZXIsIHNldFRvb2x0aXBUcmlnZ2VyXSA9IHVzZVN0YXRlPCdob3ZlcicgfCAnY2xpY2snPignaG92ZXInKTtcbiAgY29uc3QgdG9nZ2xlVG9vbHRpcFRyaWdnZXIgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKCFvbkNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRvb2x0aXBUcmlnZ2VyKHRvb2x0aXBUcmlnZ2VyID09PSAnaG92ZXInID8gJ2NsaWNrJyA6ICdob3ZlcicpO1xuICAgIG9uQ2xpY2sgJiYgb25DbGljayhlKTtcbiAgfTtcbiAgY29uc3QgcmVzZXRUb29sdGlwVHJpZ2dlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIW9uQ2xpY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VG9vbHRpcFRyaWdnZXIoJ2hvdmVyJyk7XG4gIH0sIFtzZXRUb29sdGlwVHJpZ2dlcl0pO1xuXG4gIGNvbnN0IGNvbG9yR2VuZXJhdG9yID0gZ2V0Q29sb3JHZW5lcmF0b3IoKTtcblxuICAvLyBOT1RFKExldG8pOiB0aGlzIGlzIGFuIHVuc3RhYmxlIHJvdWdoIHNvbHV0aW9uIGZvciBhbiBlbWVyZ2VudCBmZWF0dXJlLCBuZWVkcyB0ZXN0XG4gIGNvbnN0IHNlcmllc1dpdGhvdXRHYXBzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCF4QXhpcy5maWxsR2Fwcykge1xuICAgICAgcmV0dXJuIHNlcmllcztcbiAgICB9XG5cbiAgICAvLyBmaW5kIG91dCBhbGwgbGFiZWxzXG4gICAgY29uc3QgZmxhdHRlbmQgPSBmbGF0dGVuKHNlcmllcy5tYXAoKHM6IGFueSkgPT4gc1tzZXJpZXNEYXRhS2V5XSkpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTcxKSBGSVhNRTogT2JqZWN0IGlzIG9mIHR5cGUgJ3Vua25vd24nLlxuICAgIGNvbnN0IGxhYmVscyA9IHVuaXEoZmxhdHRlbmQubWFwKChpdGVtKSA9PiBpdGVtW2xhYmVsS2V5XSkpO1xuICAgIGNvbnN0IGxhYmVsSXNEYXRlID0gdHlwZW9mIG5ldyBEYXRlKGxhYmVsc1swXSkuZ2V0VGltZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBjb25zdCBzb3J0ZXIgPSBnZXRTb3J0ZXIobGFiZWxJc0RhdGUsIGxhYmVsS2V5KTtcblxuICAgIC8vIGJ1aWxkIGVtcHR5IHZhbHVlZCBkYXRhIGZvciBmaWxsaW5nIGdhcHNcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBsYWJlbHMubWFwKChsYWJlbCkgPT4gKHtcbiAgICAgIFtsYWJlbEtleV06IGxhYmVsLFxuICAgICAgW3ZhbHVlS2V5XTogMCxcbiAgICB9KSk7XG5cbiAgICAvLyBmaWxsIGdhcHMgZm9yIGVhY2ggc2VyaWVzXG4gICAgY29uc3QgcmV0ID0gY2xvbmVEZWVwKHNlcmllcyk7XG4gICAgcmV0LmZvckVhY2goKHM6IGFueSkgPT4ge1xuICAgICAgc1tzZXJpZXNEYXRhS2V5XSA9IHNvcnRlcih1bmlvbkJ5KHNbc2VyaWVzRGF0YUtleV0sIHRlbXBsYXRlcywgKGl0ZW0pID0+IGl0ZW1bbGFiZWxLZXldKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSwgW3NlcmllcywgeEF4aXMuZmlsbEdhcHNdKTtcblxuICBjb25zdCBzdHJpbmdTZXJpZXMgPSBqc29uU3RhYmxlU3RyaW5naWZ5KHNlcmllc1dpdGhvdXRHYXBzKTtcblxuICBjb25zdCB3aG9sZVNlcmllcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBzZXJpZXNXaXRob3V0R2Fwcy5tYXAoKHM6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHNlcmllc05hbWVGb3JtYXR0ZXIgPyBzZXJpZXNOYW1lRm9ybWF0dGVyKHMpIDogZGVlcEZpbmQocywgc2VyaWVzTmFtZUtleSwgJyQuJyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zLFxuICAgICAgICBrZXk6IHNlcmllS2V5R2V0dGVyID8gc2VyaWVLZXlHZXR0ZXIocykgOiBpbmRleCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY29sb3I6IHMuY29sb3IgPz8gY29sb3JHZW5lcmF0b3IubmV4dCgpLnZhbHVlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwgW3N0cmluZ1Nlcmllc10pO1xuXG4gIGNvbnN0IGxhYmVsRm9ybWF0dGVyID0gbm9ybWFsaXplRm9ybWF0dGVyKGxhYmVsRm9ybWF0dGVyMCB8fCB7fSk7XG4gIGNvbnN0IHZhbHVlRm9ybWF0dGVyID0gbm9ybWFsaXplRm9ybWF0dGVyKHZhbHVlRm9ybWF0dGVyMCB8fCB7fSk7XG4gIGNvbnN0IHJvd05hbWVGb3JtYXR0ZXIgPSBub3JtYWxpemVGb3JtYXR0ZXIocm93TmFtZUZvcm1hdHRlcjAgfHwge30pO1xuXG4gIGNvbnN0IGZyb250UmVmZXJlbmNlTGluZXMgPSByZWZlcmVuY2VMaW5lcy5maWx0ZXIoKGxpbmU6IGFueSkgPT4gbGluZS5yZW5kZXJPblRvcCk7XG4gIGNvbnN0IHJlYXJSZWZlcmVuY2VMaW5lcyA9IHJlZmVyZW5jZUxpbmVzLmZpbHRlcigobGluZTogYW55KSA9PiAhbGluZS5yZW5kZXJPblRvcCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgY29uc3Qgc2VyaWVzRW1wdHkgPSB1c2VNZW1vKGlzU2VyaWVzRW1wdHkoc2VyaWVzV2l0aG91dEdhcHMsIHNlcmllc0RhdGFLZXksIHZhbHVlS2V5KSwgW3N0cmluZ1Nlcmllc10pO1xuICBpZiAodHlwZW9mIGVtcHR5ID09PSAndW5kZWZpbmVkJykge1xuICAgIGVtcHR5ID0gc2VyaWVzRW1wdHk7XG4gIH1cblxuICBjb25zdCB4UG9pbnRzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHdob2xlU2VyaWVzKSB8fCB3aG9sZVNlcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNhbXBsZVNlcmllcyA9IHdob2xlU2VyaWVzWzBdW3Nlcmllc0RhdGFLZXldO1xuICAgICAgcmV0dXJuIHNhbXBsZVNlcmllcy5tYXAoKHM6IGFueSkgPT4gc1tsYWJlbEtleV0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9LCBbd2hvbGVTZXJpZXMsIHNlcmllc0RhdGFLZXksIGxhYmVsS2V5XSk7XG5cbiAgY29uc3QgdG9vbHRpcCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB7XG4gICAgICByb3dOYW1lRm9ybWF0dGVyLFxuICAgICAgbGFiZWxGb3JtYXR0ZXIsXG4gICAgICB2YWx1ZUZvcm1hdHRlcixcbiAgICAgIHRyaWdnZXI6IHRvb2x0aXBUcmlnZ2VyLFxuICAgIH07XG4gICAgaWYgKGNvbmZpZ3VyYXRpb25zLnRvb2x0aXApIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odG9vbHRpcCwgY29uZmlndXJhdGlvbnMudG9vbHRpcCk7XG4gICAgfVxuICAgIHJldHVybiB0b29sdGlwO1xuICB9LCBbcm93TmFtZUZvcm1hdHRlciwgbGFiZWxGb3JtYXR0ZXIsIHZhbHVlRm9ybWF0dGVyLCB0b29sdGlwVHJpZ2dlciwgY29uZmlndXJhdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWNoYXJ0c0NoYXJ0QmFzZSBlbXB0eT17ZW1wdHl9IGVtcHR5Q29udGVudD17ZW1wdHlDb250ZW50fT5cbiAgICAgIDxSZWNoYXJ0cy5Db21wb3NlZENoYXJ0XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVRvb2x0aXBUcmlnZ2VyfVxuICAgICAgICAvLyBvbk1vdXNlTW92ZT17cmVzZXRUb29sdGlwVHJpZ2dlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtyZXNldFRvb2x0aXBUcmlnZ2VyfVxuICAgICAgICBtYXJnaW49e21hcmdpbn1cbiAgICAgID5cbiAgICAgICAgPFJlY2hhcnRzLkNhcnRlc2lhbkdyaWQgey4uLmNhcnRlc2lhbkdyaWRTdHlsZX0gey4uLmNhcnRlc2lhbkdyaWR9IC8+XG4gICAgICAgIHtyZW5kZXJTaW1wbGVYQXhpcyh7XG4gICAgICAgICAgLy8gdmVydGljYWw6IHRydWUsXG4gICAgICAgICAgaW50ZXJ2YWw6IDAsXG4gICAgICAgICAgZm9ybWF0dGVyOiBsYWJlbFRpY2tGb3JtYXR0ZXIgPz8gbGFiZWxGb3JtYXR0ZXIsXG4gICAgICAgICAgdGlja0NvdW50OiB4VGlja0NvdW50LFxuICAgICAgICAgIC4uLnhBeGlzLFxuICAgICAgICAgIGRhdGFLZXk6IGxhYmVsS2V5LFxuICAgICAgICAgIHBvaW50czogeFBvaW50cyxcbiAgICAgICAgfSl9XG4gICAgICAgIHtyZW5kZXJZQXhpcyh7XG4gICAgICAgICAgLi4ueUF4aXMsXG4gICAgICAgICAgZm9ybWF0dGVyOiB2YWx1ZUZvcm1hdHRlcixcbiAgICAgICAgICBkb21haW46IHlEb21haW4sXG4gICAgICAgIH0pfVxuICAgICAgICB7cmVuZGVyVG9vbHRpcCh7IC4uLmNvbmZpZ3VyYXRpb25zLCB0b29sdGlwIH0pfVxuICAgICAgICB7bGVnZW5kLmVuYWJsZWQgJiZcbiAgICAgICAgICByZW5kZXJMZWdlbmQoe1xuICAgICAgICAgICAgbGVnZW5kLFxuICAgICAgICAgICAgc2VyaWVzOiB3aG9sZVNlcmllcyxcbiAgICAgICAgICAgIGZpbHRlcmVkU2VyaWVzOiBmaWx0ZXJlZFNlcmllc1NldCxcbiAgICAgICAgICAgIHNldEZpbHRlcmVkU2VyaWVzOiBzZXRGaWx0ZXJlZFNlcmllc1NldCxcbiAgICAgICAgICB9KX1cbiAgICAgICAge3JlZmVyZW5jZUFyZWFzLm1hcCgoaXRlbTogYW55KSA9PiByZW5kZXJSZWZlcmVuY2VBcmVhcyhpdGVtKSl9XG4gICAgICAgIHtyZWFyUmVmZXJlbmNlTGluZXMubWFwKChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyUmVmZXJlbmNlTGluZSh7IGtleTogaXRlbS5rZXkgPz8gaW5kZXgsIC4uLml0ZW0gfSk7XG4gICAgICAgIH0pfVxuICAgICAgICB7d2hvbGVTZXJpZXMubWFwKChzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZmlsdGVyZWRTZXJpZXNTZXQuaGFzKHMubmFtZSkgfHwgZmlsdGVyZWRTZXJpZXNTZXQuaGFzKHMuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlY2hhcnRzLkxpbmVcbiAgICAgICAgICAgICAgaXNBbmltYXRpb25BY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgICAgICBrZXk9e3Mua2V5fVxuICAgICAgICAgICAgICBuYW1lPXtzLm5hbWV9XG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNzY5KSBGSVhNRTogTm8gb3ZlcmxvYWQgbWF0Y2hlcyB0aGlzIGNhbGwuXG4gICAgICAgICAgICAgIGRhdGE9e3Nbc2VyaWVzRGF0YUtleV19XG4gICAgICAgICAgICAgIHR5cGU9e3BhcnNlSW50ZXJwb2xhdGlvbihpbnRlcnBvbGF0aW9uVHlwZSl9XG4gICAgICAgICAgICAgIGRhdGFLZXk9e3ZhbHVlS2V5fVxuICAgICAgICAgICAgICBzdHJva2U9e3MuY29sb3J9XG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICBkb3Q9e3JlbmRlckRvdH1cbiAgICAgICAgICAgICAgbGFiZWw9e3BvaW50TGFiZWxSZW5kZXJlcn1cbiAgICAgICAgICAgICAgY29ubmVjdE51bGxzPXtjb25uZWN0TnVsbHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHt3aG9sZVNlcmllcy5tYXAoKHM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChmaWx0ZXJlZFNlcmllc1NldC5oYXMocy5uYW1lKSB8fCBmaWx0ZXJlZFNlcmllc1NldC5oYXMocy5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlZlByZWRpY3Rpb25MaW5lID0gZ2V0UmVmUHJlZGljdGlvbkxpbmUocyk7XG4gICAgICAgICAgaWYgKCFyZWZQcmVkaWN0aW9uTGluZSB8fCAhcmVmUHJlZGljdGlvbkxpbmUuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgZGF0YTogc1tzZXJpZXNEYXRhS2V5XSxcbiAgICAgICAgICAgIGxhYmVsS2V5LFxuICAgICAgICAgICAgdmFsdWVLZXksXG4gICAgICAgICAgICAuLi5yZWZQcmVkaWN0aW9uTGluZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiByZW5kZXJQcmVkaWN0aW9uTGluZShjb25maWcsIGZpbHRlcmVkU2VyaWVzU2V0KTtcbiAgICAgICAgfSl9XG4gICAgICAgIHtmcm9udFJlZmVyZW5jZUxpbmVzLm1hcCgoaXRlbTogYW55LCBpbmRleDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlclJlZmVyZW5jZUxpbmUoeyBrZXk6IGl0ZW0ua2V5ID8/IGluZGV4LCAuLi5pdGVtIH0pO1xuICAgICAgICB9KX1cbiAgICAgICAge2NvbXBvc2luZ1NjYXR0ZXJzLm1hcCgoaXRlbTogYW55KSA9PiByZW5kZXJDb21wb3NpbmdTY2F0dGVyKGl0ZW0pKX1cbiAgICAgICAge3JlZmVyZW5jZURvdHMubWFwKChpdGVtOiBhbnkpID0+IHJlbmRlclJlZmVyZW5jZURvdCh7IC4uLml0ZW0gfSkpfVxuICAgICAgPC9SZWNoYXJ0cy5Db21wb3NlZENoYXJ0PlxuICAgIDwvUmVjaGFydHNDaGFydEJhc2U+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnQ7XG4iXX0=