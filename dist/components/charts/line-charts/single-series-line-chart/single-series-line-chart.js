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

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

var _chartBase = require("../../base/chart-base");

var _utils = require("../../../helpers/utils");

var _xAxis = require("../../../recharts/x-axis");

var _yAxis = require("../../../recharts/y-axis");

var _tooltip = require("../../../recharts/tooltip");

var _referenceLine = require("../../../recharts/reference-line");

var _referenceDot = _interopRequireDefault(require("../../../recharts/reference-dot"));

var _composingScatter = _interopRequireDefault(require("../../../recharts/composing-scatter"));

var _referenceArea = require("../../../recharts/reference-area");

var _regressionLine = _interopRequireDefault(require("../../../recharts/regression-line"));

var _predictionLine = _interopRequireDefault(require("../../../recharts/prediction-line"));

var _colors = require("../../../helpers/colors");

var _interpolation = require("../../../helpers/interpolation");

var _formatter = require("../../../helpers/formatter");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var SingleSeriesLineChart = function SingleSeriesLineChart(_ref) {
  var data = _ref.data,
      _ref$definitions = _ref.definitions,
      definitions = _ref$definitions === void 0 ? [] : _ref$definitions,
      configurations = _ref.configurations,
      empty = _ref.empty,
      emptyContent = _ref.emptyContent;
  var _configurations$withL = configurations.withLegend,
      withLegend = _configurations$withL === void 0 ? false : _configurations$withL,
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
      labelKey = configurations.labelKey,
      labelFormatter0 = configurations.labelFormatter,
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
      _configurations$inter = configurations.interpolationType,
      interpolationType = _configurations$inter === void 0 ? 'monotone' : _configurations$inter,
      _configurations$strok = configurations.strokeColor,
      strokeColor = _configurations$strok === void 0 ? '#CA4521' : _configurations$strok,
      refInterpolationType = configurations.refInterpolationType,
      _configurations$refIn = configurations.refInterpolationColor,
      refInterpolationColor = _configurations$refIn === void 0 ? '#3b6efd' : _configurations$refIn,
      refRegressionType = configurations.refRegressionType,
      _configurations$refRe = configurations.refRegressionColor,
      refRegressionColor = _configurations$refRe === void 0 ? '#3b6efd' : _configurations$refRe,
      _configurations$refRe2 = configurations.refRegressionDashArray,
      refRegressionDashArray = _configurations$refRe2 === void 0 ? '3' : _configurations$refRe2,
      refRegressionLimit = configurations.refRegressionLimit,
      _configurations$refPr = configurations.refPredictionLine,
      refPredictionLine = _configurations$refPr === void 0 ? {
    type: '',
    color: '#3b6efd',
    strokeDashArray: '3'
  } : _configurations$refPr,
      _configurations$xAxis = configurations.xAxis,
      xAxis = _configurations$xAxis === void 0 ? {
    axisLine: true,
    name: ''
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
      _configurations$extra = configurations.extraAreas,
      extraAreas = _configurations$extra === void 0 ? [] : _configurations$extra,
      onClick = configurations.onClick,
      yDomain = configurations.yDomain,
      _configurations$rende = configurations.renderDot,
      renderDot = _configurations$rende === void 0 ? false : _configurations$rende,
      _configurations$rende2 = configurations.renderActiveDot,
      renderActiveDot = _configurations$rende2 === void 0 ? false : _configurations$rende2,
      _configurations$compo = configurations.composingScatters,
      composingScatters = _configurations$compo === void 0 ? [] : _configurations$compo;

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
  }, [setTooltipTrigger, onClick]);
  var colorGenerator = (0, _colors.getColorGenerator)(strokeColor);
  var useRefInterpolationLine = !!refInterpolationType;
  var labelFormatter = (0, _formatter.normalizeFormatter)(labelFormatter0 || {});
  var valueFormatter = (0, _formatter.normalizeFormatter)(valueFormatter0 || {});
  var frontReferenceLines = referenceLines.filter(function (line) {
    return line.renderOnTop;
  });
  var rearReferenceLines = referenceLines.filter(function (line) {
    return !line.renderOnTop;
  });
  var seriesEmpty = (0, _react.useMemo)((0, _utils.isSeriesEmpty)(data, null, valueKey), [data]);

  if (typeof empty === 'undefined') {
    empty = seriesEmpty;
  }

  var xPoints = _react["default"].useMemo(function () {
    return data.map(function (s) {
      return s[labelKey];
    });
  }, [data]);

  var tooltip = _react["default"].useMemo(function () {
    var tooltip = {
      labelFormatter: labelFormatter,
      valueFormatter: valueFormatter,
      trigger: tooltipTrigger
    };

    if (configurations.tooltip) {
      (0, _assign["default"])(tooltip, configurations.tooltip);
    }

    return tooltip;
  }, [labelFormatter, valueFormatter, tooltipTrigger, configurations]);

  return /*#__PURE__*/_react["default"].createElement(_chartBase.RechartsChartBase, {
    empty: empty,
    emptyContent: emptyContent
  }, /*#__PURE__*/_react["default"].createElement(Recharts.ComposedChart, {
    onClick: toggleTooltipTrigger // onMouseMove={resetTooltipTrigger}
    ,
    onMouseLeave: resetTooltipTrigger,
    margin: margin
  }, /*#__PURE__*/_react["default"].createElement("defs", null, definitions.map(function (renderer) {
    return renderer();
  })), /*#__PURE__*/_react["default"].createElement(Recharts.CartesianGrid, (0, _extends2["default"])({}, cartesianGridStyle, cartesianGrid)), (0, _xAxis.renderSimpleXAxis)(_objectSpread(_objectSpread({
    // vertical: true,
    interval: 0,
    formatter: labelFormatter,
    tickCount: xTickCount
  }, xAxis), {}, {
    dataKey: labelKey,
    points: xPoints
  })), (0, _yAxis.renderYAxis)(_objectSpread(_objectSpread({
    formatter: valueFormatter
  }, yAxis), {}, {
    domain: yDomain
  })), (0, _tooltip.renderTooltip)(_objectSpread(_objectSpread({}, configurations), {}, {
    tooltip: tooltip
  })), withLegend && /*#__PURE__*/_react["default"].createElement(Recharts.Legend, null), referenceAreas.map(function (item) {
    return (0, _referenceArea.renderReferenceAreas)(item);
  }), rearReferenceLines.map(function (item, index) {
    var _item$key;

    return (0, _referenceLine.renderReferenceLine)(_objectSpread({
      key: (_item$key = item.key) !== null && _item$key !== void 0 ? _item$key : index
    }, item));
  }), /*#__PURE__*/_react["default"].createElement(Recharts.Line, {
    isAnimationActive: false,
    key: valueKey,
    name: yAxis.name // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    ,
    data: data,
    type: (0, _interpolation.parseInterpolation)(interpolationType),
    dataKey: valueKey,
    stroke: colorGenerator.next().value,
    strokeWidth: 2,
    dot: renderDot,
    activeDot: renderActiveDot,
    label: pointLabelRenderer,
    connectNulls: connectNulls
  }), useRefInterpolationLine && /*#__PURE__*/_react["default"].createElement(Recharts.Line, {
    isAnimationActive: false,
    name: "refInterpolation" // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    ,
    data: data,
    type: (0, _interpolation.parseInterpolation)(refInterpolationType),
    dataKey: valueKey,
    stroke: refInterpolationColor,
    strokeWidth: 2,
    dot: false
  }), (0, _regressionLine["default"])({
    data: data,
    labelKey: labelKey,
    valueKey: valueKey,
    type: refRegressionType,
    color: refRegressionColor,
    strokeDashArray: refRegressionDashArray,
    limit: refRegressionLimit
  }), (0, _predictionLine["default"])(_objectSpread({
    data: data,
    labelKey: labelKey,
    valueKey: valueKey
  }, refPredictionLine)), extraAreas.map(function (_ref2) {
    var _ref2$isAnimationActi = _ref2.isAnimationActive,
        isAnimationActive = _ref2$isAnimationActi === void 0 ? false : _ref2$isAnimationActi,
        _ref2$stroke = _ref2.stroke,
        stroke = _ref2$stroke === void 0 ? 'red' : _ref2$stroke,
        _ref2$fill = _ref2.fill,
        fill = _ref2$fill === void 0 ? 'red' : _ref2$fill,
        name = _ref2.name;
    return /*#__PURE__*/_react["default"].createElement(Recharts.Area, {
      key: name !== null && name !== void 0 ? name : valueKey // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      ,
      data: data,
      type: (0, _interpolation.parseInterpolation)(interpolationType),
      dataKey: valueKey,
      fill: fill,
      stroke: stroke,
      isAnimationActive: isAnimationActive,
      dot: false,
      activeDot: false,
      name: name !== null && name !== void 0 ? name : valueKey
    });
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

var _default = SingleSeriesLineChart;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc2luZ2xlLXNlcmllcy1saW5lLWNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJTaW5nbGVTZXJpZXNMaW5lQ2hhcnQiLCJkYXRhIiwiZGVmaW5pdGlvbnMiLCJjb25maWd1cmF0aW9ucyIsImVtcHR5IiwiZW1wdHlDb250ZW50Iiwid2l0aExlZ2VuZCIsImNhcnRlc2lhbkdyaWQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJjYXJ0ZXNpYW5HcmlkU3R5bGUiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2UiLCJjb25uZWN0TnVsbHMiLCJsYWJlbEtleSIsImxhYmVsRm9ybWF0dGVyMCIsImxhYmVsRm9ybWF0dGVyIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwicG9pbnRMYWJlbFJlbmRlcmVyIiwidmFsdWVLZXkiLCJ2YWx1ZUZvcm1hdHRlcjAiLCJ2YWx1ZUZvcm1hdHRlciIsImludGVycG9sYXRpb25UeXBlIiwic3Ryb2tlQ29sb3IiLCJyZWZJbnRlcnBvbGF0aW9uVHlwZSIsInJlZkludGVycG9sYXRpb25Db2xvciIsInJlZlJlZ3Jlc3Npb25UeXBlIiwicmVmUmVncmVzc2lvbkNvbG9yIiwicmVmUmVncmVzc2lvbkRhc2hBcnJheSIsInJlZlJlZ3Jlc3Npb25MaW1pdCIsInJlZlByZWRpY3Rpb25MaW5lIiwidHlwZSIsImNvbG9yIiwic3Ryb2tlRGFzaEFycmF5IiwieEF4aXMiLCJheGlzTGluZSIsIm5hbWUiLCJ5QXhpcyIsInhUaWNrQ291bnQiLCJyZWZlcmVuY2VMaW5lcyIsInJlZmVyZW5jZUFyZWFzIiwicmVmZXJlbmNlRG90cyIsImV4dHJhQXJlYXMiLCJvbkNsaWNrIiwieURvbWFpbiIsInJlbmRlckRvdCIsInJlbmRlckFjdGl2ZURvdCIsImNvbXBvc2luZ1NjYXR0ZXJzIiwidG9vbHRpcFRyaWdnZXIiLCJzZXRUb29sdGlwVHJpZ2dlciIsInRvZ2dsZVRvb2x0aXBUcmlnZ2VyIiwiZSIsInJlc2V0VG9vbHRpcFRyaWdnZXIiLCJjb2xvckdlbmVyYXRvciIsInVzZVJlZkludGVycG9sYXRpb25MaW5lIiwiZnJvbnRSZWZlcmVuY2VMaW5lcyIsImZpbHRlciIsImxpbmUiLCJyZW5kZXJPblRvcCIsInJlYXJSZWZlcmVuY2VMaW5lcyIsInNlcmllc0VtcHR5IiwieFBvaW50cyIsIlJlYWN0IiwidXNlTWVtbyIsIm1hcCIsInMiLCJ0b29sdGlwIiwidHJpZ2dlciIsInJlbmRlcmVyIiwiaW50ZXJ2YWwiLCJmb3JtYXR0ZXIiLCJ0aWNrQ291bnQiLCJkYXRhS2V5IiwicG9pbnRzIiwiZG9tYWluIiwiaXRlbSIsImluZGV4Iiwia2V5IiwibmV4dCIsInZhbHVlIiwibGltaXQiLCJpc0FuaW1hdGlvbkFjdGl2ZSIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUEwRTtBQUFBLE1BQXZFQyxJQUF1RSxRQUF2RUEsSUFBdUU7QUFBQSw4QkFBakVDLFdBQWlFO0FBQUEsTUFBakVBLFdBQWlFLGlDQUFuRCxFQUFtRDtBQUFBLE1BQS9DQyxjQUErQyxRQUEvQ0EsY0FBK0M7QUFBQSxNQUEvQkMsS0FBK0IsUUFBL0JBLEtBQStCO0FBQUEsTUFBeEJDLFlBQXdCLFFBQXhCQSxZQUF3QjtBQUFBLDhCQWlEbEdGLGNBakRrRyxDQUVwR0csVUFGb0c7QUFBQSxNQUVwR0EsVUFGb0csc0NBRXZGLEtBRnVGO0FBQUEsOEJBaURsR0gsY0FqRGtHLENBR3BHSSxhQUhvRztBQUFBLE1BR3BHQSxhQUhvRyxzQ0FHcEY7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QUFBLE9BQU8sRUFBRUgsUUFMWDtBQU1FLE1BQUEsSUFBSSxFQUFFK0QsSUFOUjtBQU9FLE1BQUEsTUFBTSxFQUFFMUUsTUFQVjtBQVFFLE1BQUEsaUJBQWlCLEVBQUV5RSxpQkFSckI7QUFTRSxNQUFBLEdBQUcsRUFBRSxLQVRQO0FBVUUsTUFBQSxTQUFTLEVBQUUsS0FWYjtBQVdFLE1BQUEsSUFBSSxFQUFFN0MsSUFBRixhQUFFQSxJQUFGLGNBQUVBLElBQUYsR0FBVWpCO0FBWGhCLE1BRGM7QUFBQSxHQUFmLENBMUVILEVBeUZHb0MsbUJBQW1CLENBQUNTLEdBQXBCLENBQXdCLFVBQUNXLElBQUQsRUFBWUMsS0FBWixFQUEyQjtBQUFBOztBQUNsRCxXQUFPO0FBQXNCQyxNQUFBQSxHQUFHLGdCQUFFRixJQUFJLENBQUNFLEdBQVAsbURBQWNEO0FBQXZDLE9BQWlERCxJQUFqRCxFQUFQO0FBQ0QsR0FGQSxDQXpGSCxFQTRGRzVCLGlCQUFpQixDQUFDaUIsR0FBbEIsQ0FBc0IsVUFBQ1csSUFBRDtBQUFBLFdBQWUsa0NBQXVCQSxJQUF2QixDQUFmO0FBQUEsR0FBdEIsQ0E1RkgsRUE2RkdsQyxhQUFhLENBQUN1QixHQUFkLENBQWtCLFVBQUNXLElBQUQ7QUFBQSxXQUFlLGdEQUF3QkEsSUFBeEIsRUFBZjtBQUFBLEdBQWxCLENBN0ZILENBREYsQ0FERjtBQW1HRCxDQWhNRDs7ZUFpTWUvRSxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IHpvb21cbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWNoYXJ0cyBmcm9tICdyZWNoYXJ0cyc7XG5pbXBvcnQgeyBSZWNoYXJ0c0NoYXJ0QmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZSc7XG5pbXBvcnQgeyBpc1Nlcmllc0VtcHR5IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyByZW5kZXJTaW1wbGVYQXhpcyB9IGZyb20gJy4uLy4uLy4uL3JlY2hhcnRzL3gtYXhpcyc7XG5pbXBvcnQgeyByZW5kZXJZQXhpcyB9IGZyb20gJy4uLy4uLy4uL3JlY2hhcnRzL3ktYXhpcyc7XG5pbXBvcnQgeyByZW5kZXJUb29sdGlwIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvdG9vbHRpcCc7XG5pbXBvcnQgeyByZW5kZXJSZWZlcmVuY2VMaW5lIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvcmVmZXJlbmNlLWxpbmUnO1xuaW1wb3J0IHJlbmRlclJlZmVyZW5jZURvdCBmcm9tICcuLi8uLi8uLi9yZWNoYXJ0cy9yZWZlcmVuY2UtZG90JztcbmltcG9ydCByZW5kZXJDb21wb3NpbmdTY2F0dGVyIGZyb20gJy4uLy4uLy4uL3JlY2hhcnRzL2NvbXBvc2luZy1zY2F0dGVyJztcbmltcG9ydCB7IHJlbmRlclJlZmVyZW5jZUFyZWFzIH0gZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvcmVmZXJlbmNlLWFyZWEnO1xuaW1wb3J0IHJlbmRlclJlZ3Jlc3Npb25MaW5lIGZyb20gJy4uLy4uLy4uL3JlY2hhcnRzL3JlZ3Jlc3Npb24tbGluZSc7XG5pbXBvcnQgcmVuZGVyUHJlZGljdGlvbkxpbmUgZnJvbSAnLi4vLi4vLi4vcmVjaGFydHMvcHJlZGljdGlvbi1saW5lJztcbmltcG9ydCB7IGdldENvbG9yR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jb2xvcnMnO1xuaW1wb3J0IHsgcGFyc2VJbnRlcnBvbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9pbnRlcnBvbGF0aW9uJztcbmltcG9ydCB7IG5vcm1hbGl6ZUZvcm1hdHRlciB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZm9ybWF0dGVyJztcblxuY29uc3QgU2luZ2xlU2VyaWVzTGluZUNoYXJ0ID0gKHsgZGF0YSwgZGVmaW5pdGlvbnMgPSBbXSwgY29uZmlndXJhdGlvbnMsIGVtcHR5LCBlbXB0eUNvbnRlbnQgfTogYW55KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB3aXRoTGVnZW5kID0gZmFsc2UsXG4gICAgY2FydGVzaWFuR3JpZCA9IHtcbiAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICB9LFxuICAgIGNhcnRlc2lhbkdyaWRTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogJzMgMycsXG4gICAgICBzdHJva2U6ICcjRjFGMUYxJyxcbiAgICB9LFxuICAgIGNvbm5lY3ROdWxscyA9IGZhbHNlLFxuICAgIGxhYmVsS2V5LFxuICAgIGxhYmVsRm9ybWF0dGVyOiBsYWJlbEZvcm1hdHRlcjAsXG4gICAgbWFyZ2luID0geyB0b3A6IDUsIHJpZ2h0OiA1LCBib3R0b206IDUsIGxlZnQ6IDUgfSxcbiAgICBwb2ludExhYmVsUmVuZGVyZXIgPSBmYWxzZSxcbiAgICB2YWx1ZUtleSA9ICd2YWx1ZScsXG4gICAgdmFsdWVGb3JtYXR0ZXI6IHZhbHVlRm9ybWF0dGVyMCxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZSA9ICdtb25vdG9uZScsXG4gICAgc3Ryb2tlQ29sb3IgPSAnI0NBNDUyMScsXG4gICAgcmVmSW50ZXJwb2xhdGlvblR5cGUsXG4gICAgcmVmSW50ZXJwb2xhdGlvbkNvbG9yID0gJyMzYjZlZmQnLFxuICAgIHJlZlJlZ3Jlc3Npb25UeXBlLFxuICAgIHJlZlJlZ3Jlc3Npb25Db2xvciA9ICcjM2I2ZWZkJyxcbiAgICByZWZSZWdyZXNzaW9uRGFzaEFycmF5ID0gJzMnLFxuICAgIHJlZlJlZ3Jlc3Npb25MaW1pdCxcbiAgICByZWZQcmVkaWN0aW9uTGluZSA9IHtcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgY29sb3I6ICcjM2I2ZWZkJyxcbiAgICAgIHN0cm9rZURhc2hBcnJheTogJzMnLFxuICAgIH0sXG4gICAgeEF4aXMgPSB7XG4gICAgICBheGlzTGluZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgIH0sXG4gICAgeUF4aXMgPSB7XG4gICAgICBheGlzTGluZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgIH0sXG4gICAgeFRpY2tDb3VudCA9IDcsXG4gICAgcmVmZXJlbmNlTGluZXMgPSBbXSxcbiAgICByZWZlcmVuY2VBcmVhcyA9IFtdLFxuICAgIHJlZmVyZW5jZURvdHMgPSBbXSxcbiAgICBleHRyYUFyZWFzID0gW10sXG4gICAgb25DbGljayxcbiAgICB5RG9tYWluLFxuICAgIHJlbmRlckRvdCA9IGZhbHNlLCAvLyBmYWxzZSBvciBmdW5jdGlvblxuICAgIHJlbmRlckFjdGl2ZURvdCA9IGZhbHNlLCAvLyBmYWxzZSBvciBmdW5jdGlvblxuICAgIGNvbXBvc2luZ1NjYXR0ZXJzID0gW10sXG4gIH0gPSBjb25maWd1cmF0aW9ucztcblxuICBjb25zdCBbdG9vbHRpcFRyaWdnZXIsIHNldFRvb2x0aXBUcmlnZ2VyXSA9IHVzZVN0YXRlPCdob3ZlcicgfCAnY2xpY2snPignaG92ZXInKTtcbiAgY29uc3QgdG9nZ2xlVG9vbHRpcFRyaWdnZXIgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKCFvbkNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRvb2x0aXBUcmlnZ2VyKHRvb2x0aXBUcmlnZ2VyID09PSAnaG92ZXInID8gJ2NsaWNrJyA6ICdob3ZlcicpO1xuICAgIG9uQ2xpY2sgJiYgb25DbGljayhlKTtcbiAgfTtcbiAgY29uc3QgcmVzZXRUb29sdGlwVHJpZ2dlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIW9uQ2xpY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VG9vbHRpcFRyaWdnZXIoJ2hvdmVyJyk7XG4gIH0sIFtzZXRUb29sdGlwVHJpZ2dlciwgb25DbGlja10pO1xuXG4gIGNvbnN0IGNvbG9yR2VuZXJhdG9yID0gZ2V0Q29sb3JHZW5lcmF0b3Ioc3Ryb2tlQ29sb3IpO1xuICBjb25zdCB1c2VSZWZJbnRlcnBvbGF0aW9uTGluZSA9ICEhcmVmSW50ZXJwb2xhdGlvblR5cGU7XG4gIGNvbnN0IGxhYmVsRm9ybWF0dGVyID0gbm9ybWFsaXplRm9ybWF0dGVyKGxhYmVsRm9ybWF0dGVyMCB8fCB7fSk7XG4gIGNvbnN0IHZhbHVlRm9ybWF0dGVyID0gbm9ybWFsaXplRm9ybWF0dGVyKHZhbHVlRm9ybWF0dGVyMCB8fCB7fSk7XG5cbiAgY29uc3QgZnJvbnRSZWZlcmVuY2VMaW5lcyA9IHJlZmVyZW5jZUxpbmVzLmZpbHRlcigobGluZTogYW55KSA9PiBsaW5lLnJlbmRlck9uVG9wKTtcbiAgY29uc3QgcmVhclJlZmVyZW5jZUxpbmVzID0gcmVmZXJlbmNlTGluZXMuZmlsdGVyKChsaW5lOiBhbnkpID0+ICFsaW5lLnJlbmRlck9uVG9wKTtcblxuICBjb25zdCBzZXJpZXNFbXB0eSA9IHVzZU1lbW8oaXNTZXJpZXNFbXB0eShkYXRhLCBudWxsLCB2YWx1ZUtleSksIFtkYXRhXSk7XG4gIGlmICh0eXBlb2YgZW1wdHkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW1wdHkgPSBzZXJpZXNFbXB0eTtcbiAgfVxuXG4gIGNvbnN0IHhQb2ludHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IGRhdGEubWFwKChzOiBhbnkpID0+IHNbbGFiZWxLZXldKSwgW2RhdGFdKTtcblxuICBjb25zdCB0b29sdGlwID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHtcbiAgICAgIGxhYmVsRm9ybWF0dGVyLFxuICAgICAgdmFsdWVGb3JtYXR0ZXIsXG4gICAgICB0cmlnZ2VyOiB0b29sdGlwVHJpZ2dlcixcbiAgICB9O1xuICAgIGlmIChjb25maWd1cmF0aW9ucy50b29sdGlwKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRvb2x0aXAsIGNvbmZpZ3VyYXRpb25zLnRvb2x0aXApO1xuICAgIH1cbiAgICByZXR1cm4gdG9vbHRpcDtcbiAgfSwgW2xhYmVsRm9ybWF0dGVyLCB2YWx1ZUZvcm1hdHRlciwgdG9vbHRpcFRyaWdnZXIsIGNvbmZpZ3VyYXRpb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVjaGFydHNDaGFydEJhc2UgZW1wdHk9e2VtcHR5fSBlbXB0eUNvbnRlbnQ9e2VtcHR5Q29udGVudH0+XG4gICAgICA8UmVjaGFydHMuQ29tcG9zZWRDaGFydFxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVUb29sdGlwVHJpZ2dlcn1cbiAgICAgICAgLy8gb25Nb3VzZU1vdmU9e3Jlc2V0VG9vbHRpcFRyaWdnZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17cmVzZXRUb29sdGlwVHJpZ2dlcn1cbiAgICAgICAgbWFyZ2luPXttYXJnaW59XG4gICAgICA+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIHsvKiBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzAwNikgRklYTUU6IFBhcmFtZXRlciAncmVuZGVyZXInIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuICovfVxuICAgICAgICAgIHtkZWZpbml0aW9ucy5tYXAoKHJlbmRlcmVyKSA9PiByZW5kZXJlcigpKX1cbiAgICAgICAgPC9kZWZzPlxuICAgICAgICA8UmVjaGFydHMuQ2FydGVzaWFuR3JpZCB7Li4uY2FydGVzaWFuR3JpZFN0eWxlfSB7Li4uY2FydGVzaWFuR3JpZH0gLz5cbiAgICAgICAge3JlbmRlclNpbXBsZVhBeGlzKHtcbiAgICAgICAgICAvLyB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgICBmb3JtYXR0ZXI6IGxhYmVsRm9ybWF0dGVyLFxuICAgICAgICAgIHRpY2tDb3VudDogeFRpY2tDb3VudCxcbiAgICAgICAgICAuLi54QXhpcyxcbiAgICAgICAgICBkYXRhS2V5OiBsYWJlbEtleSxcbiAgICAgICAgICBwb2ludHM6IHhQb2ludHMsXG4gICAgICAgIH0pfVxuICAgICAgICB7cmVuZGVyWUF4aXMoe1xuICAgICAgICAgIGZvcm1hdHRlcjogdmFsdWVGb3JtYXR0ZXIsXG4gICAgICAgICAgLi4ueUF4aXMsXG4gICAgICAgICAgZG9tYWluOiB5RG9tYWluLFxuICAgICAgICB9KX1cbiAgICAgICAge3JlbmRlclRvb2x0aXAoeyAuLi5jb25maWd1cmF0aW9ucywgdG9vbHRpcCB9KX1cbiAgICAgICAge3dpdGhMZWdlbmQgJiYgPFJlY2hhcnRzLkxlZ2VuZCAvPn1cbiAgICAgICAge3JlZmVyZW5jZUFyZWFzLm1hcCgoaXRlbTogYW55KSA9PiByZW5kZXJSZWZlcmVuY2VBcmVhcyhpdGVtKSl9XG4gICAgICAgIHtyZWFyUmVmZXJlbmNlTGluZXMubWFwKChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyUmVmZXJlbmNlTGluZSh7IGtleTogaXRlbS5rZXkgPz8gaW5kZXgsIC4uLml0ZW0gfSk7XG4gICAgICAgIH0pfVxuICAgICAgICA8UmVjaGFydHMuTGluZVxuICAgICAgICAgIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX1cbiAgICAgICAgICBrZXk9e3ZhbHVlS2V5fVxuICAgICAgICAgIG5hbWU9e3lBeGlzLm5hbWV9XG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI3NjkpIEZJWE1FOiBObyBvdmVybG9hZCBtYXRjaGVzIHRoaXMgY2FsbC5cbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIHR5cGU9e3BhcnNlSW50ZXJwb2xhdGlvbihpbnRlcnBvbGF0aW9uVHlwZSl9XG4gICAgICAgICAgZGF0YUtleT17dmFsdWVLZXl9XG4gICAgICAgICAgc3Ryb2tlPXtjb2xvckdlbmVyYXRvci5uZXh0KCkudmFsdWV9XG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgZG90PXtyZW5kZXJEb3R9XG4gICAgICAgICAgYWN0aXZlRG90PXtyZW5kZXJBY3RpdmVEb3R9XG4gICAgICAgICAgbGFiZWw9e3BvaW50TGFiZWxSZW5kZXJlcn1cbiAgICAgICAgICBjb25uZWN0TnVsbHM9e2Nvbm5lY3ROdWxsc31cbiAgICAgICAgLz5cbiAgICAgICAge3VzZVJlZkludGVycG9sYXRpb25MaW5lICYmIChcbiAgICAgICAgICA8UmVjaGFydHMuTGluZVxuICAgICAgICAgICAgaXNBbmltYXRpb25BY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgICAgbmFtZT1cInJlZkludGVycG9sYXRpb25cIlxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI3NjkpIEZJWE1FOiBObyBvdmVybG9hZCBtYXRjaGVzIHRoaXMgY2FsbC5cbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICB0eXBlPXtwYXJzZUludGVycG9sYXRpb24ocmVmSW50ZXJwb2xhdGlvblR5cGUpfVxuICAgICAgICAgICAgZGF0YUtleT17dmFsdWVLZXl9XG4gICAgICAgICAgICBzdHJva2U9e3JlZkludGVycG9sYXRpb25Db2xvcn1cbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgZG90PXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7cmVuZGVyUmVncmVzc2lvbkxpbmUoe1xuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgbGFiZWxLZXksXG4gICAgICAgICAgdmFsdWVLZXksXG4gICAgICAgICAgdHlwZTogcmVmUmVncmVzc2lvblR5cGUsXG4gICAgICAgICAgY29sb3I6IHJlZlJlZ3Jlc3Npb25Db2xvcixcbiAgICAgICAgICBzdHJva2VEYXNoQXJyYXk6IHJlZlJlZ3Jlc3Npb25EYXNoQXJyYXksXG4gICAgICAgICAgbGltaXQ6IHJlZlJlZ3Jlc3Npb25MaW1pdCxcbiAgICAgICAgfSl9XG4gICAgICAgIHtyZW5kZXJQcmVkaWN0aW9uTGluZSh7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBsYWJlbEtleSxcbiAgICAgICAgICB2YWx1ZUtleSxcbiAgICAgICAgICAuLi5yZWZQcmVkaWN0aW9uTGluZSxcbiAgICAgICAgfSl9XG4gICAgICAgIHtleHRyYUFyZWFzLm1hcCgoeyBpc0FuaW1hdGlvbkFjdGl2ZSA9IGZhbHNlLCBzdHJva2UgPSAncmVkJywgZmlsbCA9ICdyZWQnLCBuYW1lIH06IGFueSkgPT4gKFxuICAgICAgICAgIDxSZWNoYXJ0cy5BcmVhXG4gICAgICAgICAgICBrZXk9e25hbWUgPz8gdmFsdWVLZXl9XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjc2OSkgRklYTUU6IE5vIG92ZXJsb2FkIG1hdGNoZXMgdGhpcyBjYWxsLlxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHR5cGU9e3BhcnNlSW50ZXJwb2xhdGlvbihpbnRlcnBvbGF0aW9uVHlwZSl9XG4gICAgICAgICAgICBkYXRhS2V5PXt2YWx1ZUtleX1cbiAgICAgICAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICAgICAgICBzdHJva2U9e3N0cm9rZX1cbiAgICAgICAgICAgIGlzQW5pbWF0aW9uQWN0aXZlPXtpc0FuaW1hdGlvbkFjdGl2ZX1cbiAgICAgICAgICAgIGRvdD17ZmFsc2V9XG4gICAgICAgICAgICBhY3RpdmVEb3Q9e2ZhbHNlfVxuICAgICAgICAgICAgbmFtZT17bmFtZSA/PyB2YWx1ZUtleX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAge2Zyb250UmVmZXJlbmNlTGluZXMubWFwKChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyUmVmZXJlbmNlTGluZSh7IGtleTogaXRlbS5rZXkgPz8gaW5kZXgsIC4uLml0ZW0gfSk7XG4gICAgICAgIH0pfVxuICAgICAgICB7Y29tcG9zaW5nU2NhdHRlcnMubWFwKChpdGVtOiBhbnkpID0+IHJlbmRlckNvbXBvc2luZ1NjYXR0ZXIoaXRlbSkpfVxuICAgICAgICB7cmVmZXJlbmNlRG90cy5tYXAoKGl0ZW06IGFueSkgPT4gcmVuZGVyUmVmZXJlbmNlRG90KHsgLi4uaXRlbSB9KSl9XG4gICAgICA8L1JlY2hhcnRzLkNvbXBvc2VkQ2hhcnQ+XG4gICAgPC9SZWNoYXJ0c0NoYXJ0QmFzZT5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVTZXJpZXNMaW5lQ2hhcnQ7XG4iXX0=