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

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/is-array"));

var _lodash = require("lodash");

var _jsonStableStringify = _interopRequireDefault(require("json-stable-stringify"));

var _react = _interopRequireWildcard(require("react"));

var _bizcharts = require("bizcharts");

var _colors = require("../../../helpers/colors");

var _utils = require("../../../helpers/utils");

var _chartBase = require("../../base/chart-base");

var _referenceLine = _interopRequireDefault(require("../../../g2/reference-line"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var tooltipContainerStyleStr = "\n  position: absolute;\n  font-size: 12px;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 8px;\n  margin-bottom: 4px;\n  border-radius: 2px;\n  box-shadow: 0 0 10px #777777;\n  transition: all 0.5s;\n";

function isArrayEmpty(arr) {
  return !(0, _isArray["default"])(arr) || arr.length === 0;
}

function BoxPlotChart(_ref) {
  var baseClassName = _ref.baseClassName,
      data = _ref.data,
      emptyContent = _ref.emptyContent,
      configurations = _ref.configurations;
  var _configurations$width = configurations.width,
      width = _configurations$width === void 0 ? 500 : _configurations$width,
      _configurations$heigh = configurations.height,
      height = _configurations$heigh === void 0 ? 300 : _configurations$heigh,
      _configurations$trans = configurations.transposeCoord,
      transposeCoord = _configurations$trans === void 0 ? false : _configurations$trans,
      _configurations$value = configurations.valueFormatter,
      valueFormatter = _configurations$value === void 0 ? function (v) {
    return v;
  } : _configurations$value,
      _configurations$strok = configurations.strokeColor,
      strokeColor = _configurations$strok === void 0 ? '#333333' : _configurations$strok,
      _configurations$xLabe = configurations.xLabelMaxLength,
      xLabelMaxLength = _configurations$xLabe === void 0 ? 19 : _configurations$xLabe,
      _configurations$xLabe2 = configurations.xLabelProps,
      xLabelProps = _configurations$xLabe2 === void 0 ? {} : _configurations$xLabe2,
      _configurations$inval = configurations.invalidDataSeriesLabel,
      invalidDataSeriesLabel = _configurations$inval === void 0 ? 'Invalid Data Series' : _configurations$inval,
      _configurations$lowLa = configurations.lowLabel,
      lowLabel = _configurations$lowLa === void 0 ? 'Minimum' : _configurations$lowLa,
      _configurations$q1Lab = configurations.q1Label,
      q1Label = _configurations$q1Lab === void 0 ? 'Q1' : _configurations$q1Lab,
      _configurations$media = configurations.medianLabel,
      medianLabel = _configurations$media === void 0 ? 'Median' : _configurations$media,
      _configurations$q3Lab = configurations.q3Label,
      q3Label = _configurations$q3Lab === void 0 ? 'Q3' : _configurations$q3Lab,
      _configurations$highL = configurations.highLabel,
      highLabel = _configurations$highL === void 0 ? 'Maximum' : _configurations$highL,
      _configurations$outli = configurations.outliersLabel,
      outliersLabel = _configurations$outli === void 0 ? 'Outliers' : _configurations$outli,
      _configurations$refer = configurations.referenceLines,
      referenceLines = _configurations$refer === void 0 ? [] : _configurations$refer,
      _configurations$isDat = configurations.isDataEmpty,
      isDataEmpty = _configurations$isDat === void 0 ? isArrayEmpty(data) : _configurations$isDat;

  var _useMemo = (0, _react.useMemo)(function () {
    var keyNameMap = {};
    var itemKeys = [];
    var smallValues = [];
    var largeValues = [];
    var keyInfoMap = {};
    data.forEach(function (item) {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      keyNameMap[item.key] = item.name || 'Unknown';
      itemKeys.push(item.key);
      smallValues = smallValues.concat(item.outliers, item.low);
      largeValues = largeValues.concat(item.outliers, item.high);
    });
    var keyList = (0, _lodash.uniq)(itemKeys);
    var minV = Math.min.apply(Math, (0, _toConsumableArray2["default"])(smallValues));
    var maxV = Math.max.apply(Math, [1].concat((0, _toConsumableArray2["default"])(largeValues)));
    data.forEach(function (item) {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      keyInfoMap[item.key] = {
        key: item.key,
        valid: item.valid,
        color: (0, _colors.deriveColorByIndex)(keyList.indexOf(item.key)),
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        name: (0, _utils.clip)(keyNameMap[item.key], 30),
        low: valueFormatter(item.low),
        q1: valueFormatter(item.q1),
        median: valueFormatter(item.median),
        q3: valueFormatter(item.q3),
        high: valueFormatter(item.high),
        outliers: isArrayEmpty(item.outliers) ? '-' : item.outliers.map(function (v) {
          return valueFormatter(v);
        })
      };
    });
    return [keyNameMap, keyList, minV, maxV, keyInfoMap];
  }, [(0, _jsonStableStringify["default"])(data)]),
      _useMemo2 = (0, _slicedToArray2["default"])(_useMemo, 5),
      itemKeyNameMap = _useMemo2[0],
      itemKeyList = _useMemo2[1],
      minValue = _useMemo2[2],
      maxValue = _useMemo2[3],
      itemKeyInfoMap = _useMemo2[4];

  var baseScale = {
    formatter: function formatter(arr) {
      return arr.map(function (v) {
        return valueFormatter(v);
      });
    },
    min: (0, _lodash.isFinite)(minValue) ? minValue : 0,
    max: maxValue,
    nice: true,
    sync: 'value'
  };
  var datasource = data.map(function (item) {
    return _objectSpread({
      range: [item.low, item.q1, item.median, item.q3, item.high]
    }, item);
  });

  var randerTooltip = function randerTooltip(key) {
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    var item = itemKeyInfoMap[key] || {};
    var itemNameTemplate = "\n      <div>\n        <span style=\"display: inline-block; width: 8px; height: 8px; margin-right: 4px; background-color: ".concat(item.color, ";\"></span>\n        <span style=\"font-weight: bold;\">").concat(item.name, "</span>\n      </div>\n    ");

    if (!item.valid) {
      return "\n        <div style=\"".concat(tooltipContainerStyleStr, "\">\n          ").concat(itemNameTemplate, "\n          <div style=\"padding-left: 16px; color: #CA4521;\">").concat(invalidDataSeriesLabel, "</div>\n        </div>\n      ");
    }

    return "\n      <div style=\"".concat(tooltipContainerStyleStr, "\">\n        ").concat(itemNameTemplate, "\n        <div style=\"padding-left: 16px;\">").concat(highLabel, ": ").concat(item.high, "</div>\n        <div style=\"padding-left: 16px;\">").concat(q3Label, ": ").concat(item.q3, "</div>\n        <div style=\"padding-left: 16px;\">").concat(medianLabel, ": ").concat(item.median, "</div>\n        <div style=\"padding-left: 16px;\">").concat(q1Label, ": ").concat(item.q1, "</div>\n        <div style=\"padding-left: 16px;\">").concat(lowLabel, ": ").concat(item.low, "</div>\n        <div style=\"padding-left: 16px; color: #CA4521; word-break: break-all;\">").concat(outliersLabel, ": ").concat(item.outliers, "</div>\n      </div>\n    ");
  };

  return /*#__PURE__*/_react["default"].createElement(_chartBase.G2ChartBase, {
    empty: isDataEmpty,
    emptyContent: emptyContent,
    className: baseClassName
  }, /*#__PURE__*/_react["default"].createElement(_bizcharts.Chart, {
    forceFit: true,
    padding: "auto",
    width: width,
    height: height,
    animate: false
  }, /*#__PURE__*/_react["default"].createElement(_bizcharts.Tooltip, {
    showTitle: false // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    ,
    showMarkers: false,
    useHtml: true,
    htmlContent: randerTooltip
  }), /*#__PURE__*/_react["default"].createElement(_bizcharts.View, {
    data: datasource,
    scale: {
      range: baseScale
    }
  }, /*#__PURE__*/_react["default"].createElement(_bizcharts.Axis, {
    name: "key",
    label: _objectSpread({
      formatter: function formatter(key) {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        return (0, _utils.truncateLabel)(itemKeyNameMap[key], xLabelMaxLength);
      }
    }, xLabelProps)
  }), /*#__PURE__*/_react["default"].createElement(_bizcharts.Axis, {
    name: "range"
  }), /*#__PURE__*/_react["default"].createElement(_bizcharts.Geom, {
    select: false,
    type: "schema",
    position: "key*range",
    shape: "box",
    size: 15,
    color: strokeColor,
    style: ['key', {
      fill: function fill(key) {
        return (0, _colors.deriveColorByIndex)(itemKeyList.indexOf(key));
      }
    }]
  }), /*#__PURE__*/_react["default"].createElement(_bizcharts.Guide, null, referenceLines.map(function (item, index) {
    var _item$key;

    return /*#__PURE__*/_react["default"].createElement(_referenceLine["default"], (0, _extends2["default"])({
      key: "reference-line-".concat((_item$key = item.key) !== null && _item$key !== void 0 ? _item$key : index),
      xScaleKey: "key",
      yScaleKey: "range",
      transpose: transposeCoord
    }, item));
  }))), /*#__PURE__*/_react["default"].createElement(_bizcharts.View, {
    data: datasource,
    scale: {
      outliers: baseScale
    }
  }, /*#__PURE__*/_react["default"].createElement(_bizcharts.Geom, {
    select: false,
    type: "point",
    position: "key*outliers",
    shape: "circle",
    size: 3,
    color: ['key', _colors.CHART_COLOR_PALETTE]
  }))));
}

var _default = BoxPlotChart;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL2JveC1wbG90LWNoYXJ0L2JveC1wbG90LWNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJ0b29sdGlwQ29udGFpbmVyU3R5bGVTdHIiLCJpc0FycmF5RW1wdHkiLCJhcnIiLCJsZW5ndGgiLCJCb3hQbG90Q2hhcnQiLCJiYXNlQ2xhc3NOYW1lIiwiZGF0YSIsImVtcHR5Q29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc3Bvc2VDb29yZCIsInZhbHVlRm9ybWF0dGVyIiwidiIsInN0cm9rZUNvbG9yIiwieExhYmVsTWF4TGVuZ3RoIiwieExhYmVsUHJvcHMiLCJpbnZhbGlkRGF0YVNlcmllc0xhYmVsIiwibG93TGFiZWwiLCJxMUxhYmVsIiwibWVkaWFuTGFiZWwiLCJxM0xhYmVsIiwiaGlnaExhYmVsIiwib3V0bGllcnNMYWJlbCIsInJlZmVyZW5jZUxpbmVzIiwiaXNEYXRhRW1wdHkiLCJrZXlOYW1lTWFwIiwiaXRlbUtleXMiLCJzbWFsbFZhbHVlcyIsImxhcmdlVmFsdWVzIiwia2V5SW5mb01hcCIsImZvckVhY2giLCJpdGVtIiwia2V5IiwibmFtZSIsInB1c2giLCJjb25jYXQiLCJvdXRsaWVycyIsImxvdyIsImhpZ2giLCJrZXlMaXN0IiwibWluViIsIk1hdGgiLCJtaW4iLCJtYXhWIiwibWF4IiwidmFsaWQiLCJjb2xvciIsImluZGV4T2YiLCJxMSIsIm1lZGlhbiIsInEzIiwibWFwIiwiaXRlbUtleU5hbWVNYXAiLCJpdGVtS2V5TGlzdCIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJpdGVtS2V5SW5mb01hcCIsImJhc2VTY2FsZSIsImZvcm1hdHRlciIsIm5pY2UiLCJzeW5jIiwiZGF0YXNvdXJjZSIsInJhbmdlIiwicmFuZGVyVG9vbHRpcCIsIml0ZW1OYW1lVGVtcGxhdGUiLCJmaWxsIiwiaW5kZXgiLCJDSEFSVF9DT0xPUl9QQUxF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QixXQUFXLENBQUNOLE9BQVosQ0FBb0JmLEdBQXBCLENBQW5CLENBQWQ7QUFBQTtBQUFSLEtBQVI7QUFQVCxJQVpGLGVBcUJFLGdDQUFDLGdCQUFELFFBQ0dULGNBQWMsQ0FBQzRCLEdBQWYsQ0FBbUIsVUFBQ3BCLElBQUQsRUFBWW1DLEtBQVo7QUFBQTs7QUFBQSx3QkFDbEIsZ0NBQUMseUJBQUQ7QUFDRSxNQUFBLEdBQUcsd0NBQW9CbkMsSUFBSSxDQUFDQyxHQUF6QixpREFBZ0NrQyxLQUFoQyxDQURMO0FBRUUsTUFBQSxTQUFTLEVBQUMsS0FGWjtBQUdFLE1BQUEsU0FBUyxFQUFDLE9BSFo7QUFJRSxNQUFBLFNBQVMsRUFBRXhEO0FBSmIsT0FLTXFCLElBTE4sRUFEa0I7QUFBQSxHQUFuQixDQURILENBckJGLENBUkYsZUF5Q0UsZ0NBQUMsZUFBRDtBQUFNLElBQUEsSUFBSSxFQUFFOEIsVUFBWjtBQUF3QixJQUFBLEtBQUssRUFBRTtBQUFFekIsTUFBQUEsUUFBUSxFQUFFcUI7QUFBWjtBQUEvQixrQkFDRSxnQ0FBQyxlQUFEO0FBQ0UsSUFBQSxNQUFNLEVBQUUsS0FEVjtBQUVFLElBQUEsSUFBSSxFQUFDLE9BRlA7QUFHRSxJQUFBLFFBQVEsRUFBQyxjQUhYO0FBSUUsSUFBQSxLQUFLLEVBQUMsUUFKUjtBQUtFLElBQUEsSUFBSSxFQUFFLENBTFI7QUFNRSxJQUFBLEtBQUssRUFBRSxDQUFDLEtBQUQsRUFBUVUsMkJBQVI7QUFOVCxJQURGLENBekNGLENBREYsQ0FERjtBQXdERDs7ZUFFY2hFLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Zpbml0ZSwgdW5pcSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgc3RhYmxlU3RyaW5naWZ5IGZyb20gJ2pzb24tc3RhYmxlLXN0cmluZ2lmeSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYXJ0LCBWaWV3LCBHZW9tLCBHdWlkZSwgVG9vbHRpcCwgQXhpcyB9IGZyb20gJ2JpemNoYXJ0cyc7XG5pbXBvcnQgeyBDSEFSVF9DT0xPUl9QQUxFVFRFLCBkZXJpdmVDb2xvckJ5SW5kZXggfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2NvbG9ycyc7XG5pbXBvcnQgeyB0cnVuY2F0ZUxhYmVsLCBjbGlwIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyBHMkNoYXJ0QmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvY2hhcnQtYmFzZSc7XG5pbXBvcnQgUmVmZXJlbmNlTGluZSBmcm9tICcuLi8uLi8uLi9nMi9yZWZlcmVuY2UtbGluZSc7XG5cbmNvbnN0IHRvb2x0aXBDb250YWluZXJTdHlsZVN0ciA9IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzc3Nzc3NztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5gO1xuXG5mdW5jdGlvbiBpc0FycmF5RW1wdHkoYXJyOiBhbnkpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KGFycikgfHwgYXJyLmxlbmd0aCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gQm94UGxvdENoYXJ0KHsgYmFzZUNsYXNzTmFtZSwgZGF0YSwgZW1wdHlDb250ZW50LCBjb25maWd1cmF0aW9ucyB9OiBhbnkpIHtcbiAgY29uc3Qge1xuICAgIHdpZHRoID0gNTAwLFxuICAgIGhlaWdodCA9IDMwMCxcbiAgICB0cmFuc3Bvc2VDb29yZCA9IGZhbHNlLFxuICAgIHZhbHVlRm9ybWF0dGVyID0gKHY6IGFueSkgPT4gdixcbiAgICBzdHJva2VDb2xvciA9ICcjMzMzMzMzJyxcbiAgICB4TGFiZWxNYXhMZW5ndGggPSAxOSxcbiAgICB4TGFiZWxQcm9wcyA9IHt9LFxuICAgIGludmFsaWREYXRhU2VyaWVzTGFiZWwgPSAnSW52YWxpZCBEYXRhIFNlcmllcycsXG4gICAgbG93TGFiZWwgPSAnTWluaW11bScsXG4gICAgcTFMYWJlbCA9ICdRMScsXG4gICAgbWVkaWFuTGFiZWwgPSAnTWVkaWFuJyxcbiAgICBxM0xhYmVsID0gJ1EzJyxcbiAgICBoaWdoTGFiZWwgPSAnTWF4aW11bScsXG4gICAgb3V0bGllcnNMYWJlbCA9ICdPdXRsaWVycycsXG4gICAgcmVmZXJlbmNlTGluZXMgPSBbXSxcbiAgICBpc0RhdGFFbXB0eSA9IGlzQXJyYXlFbXB0eShkYXRhKSxcbiAgfSA9IGNvbmZpZ3VyYXRpb25zO1xuXG4gIGNvbnN0IFtpdGVtS2V5TmFtZU1hcCwgaXRlbUtleUxpc3QsIG1pblZhbHVlLCBtYXhWYWx1ZSwgaXRlbUtleUluZm9NYXBdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qga2V5TmFtZU1hcCA9IHt9O1xuICAgIGNvbnN0IGl0ZW1LZXlzOiBhbnkgPSBbXTtcbiAgICBsZXQgc21hbGxWYWx1ZXM6IGFueSA9IFtdO1xuICAgIGxldCBsYXJnZVZhbHVlczogYW55ID0gW107XG4gICAgY29uc3Qga2V5SW5mb01hcCA9IHt9O1xuICAgIGRhdGEuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzA1MykgRklYTUU6IEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICAgIGtleU5hbWVNYXBbaXRlbS5rZXldID0gaXRlbS5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgIGl0ZW1LZXlzLnB1c2goaXRlbS5rZXkpO1xuICAgICAgc21hbGxWYWx1ZXMgPSBzbWFsbFZhbHVlcy5jb25jYXQoaXRlbS5vdXRsaWVycywgaXRlbS5sb3cpO1xuICAgICAgbGFyZ2VWYWx1ZXMgPSBsYXJnZVZhbHVlcy5jb25jYXQoaXRlbS5vdXRsaWVycywgaXRlbS5oaWdoKTtcbiAgICB9KTtcbiAgICBjb25zdCBrZXlMaXN0ID0gdW5pcShpdGVtS2V5cyk7XG4gICAgY29uc3QgbWluViA9IE1hdGgubWluKC4uLnNtYWxsVmFsdWVzKTtcbiAgICBjb25zdCBtYXhWID0gTWF0aC5tYXgoMSwgLi4ubGFyZ2VWYWx1ZXMpO1xuICAgIGRhdGEuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzA1MykgRklYTUU6IEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICAgIGtleUluZm9NYXBbaXRlbS5rZXldID0ge1xuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxuICAgICAgICB2YWxpZDogaXRlbS52YWxpZCxcbiAgICAgICAgY29sb3I6IGRlcml2ZUNvbG9yQnlJbmRleChrZXlMaXN0LmluZGV4T2YoaXRlbS5rZXkpKSxcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDcwNTMpIEZJWE1FOiBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZS4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgICAgIG5hbWU6IGNsaXAoa2V5TmFtZU1hcFtpdGVtLmtleV0sIDMwKSxcbiAgICAgICAgbG93OiB2YWx1ZUZvcm1hdHRlcihpdGVtLmxvdyksXG4gICAgICAgIHExOiB2YWx1ZUZvcm1hdHRlcihpdGVtLnExKSxcbiAgICAgICAgbWVkaWFuOiB2YWx1ZUZvcm1hdHRlcihpdGVtLm1lZGlhbiksXG4gICAgICAgIHEzOiB2YWx1ZUZvcm1hdHRlcihpdGVtLnEzKSxcbiAgICAgICAgaGlnaDogdmFsdWVGb3JtYXR0ZXIoaXRlbS5oaWdoKSxcbiAgICAgICAgb3V0bGllcnM6IGlzQXJyYXlFbXB0eShpdGVtLm91dGxpZXJzKSA/ICctJyA6IGl0ZW0ub3V0bGllcnMubWFwKCh2OiBhbnkpID0+IHZhbHVlRm9ybWF0dGVyKHYpKSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIFtrZXlOYW1lTWFwLCBrZXlMaXN0LCBtaW5WLCBtYXhWLCBrZXlJbmZvTWFwXTtcbiAgfSwgW3N0YWJsZVN0cmluZ2lmeShkYXRhKV0pO1xuXG4gIGNvbnN0IGJhc2VTY2FsZSA9IHtcbiAgICBmb3JtYXR0ZXI6IChhcnI6IGFueSkgPT4gYXJyLm1hcCgodjogYW55KSA9PiB2YWx1ZUZvcm1hdHRlcih2KSksXG4gICAgbWluOiBpc0Zpbml0ZShtaW5WYWx1ZSkgPyBtaW5WYWx1ZSA6IDAsXG4gICAgbWF4OiBtYXhWYWx1ZSxcbiAgICBuaWNlOiB0cnVlLFxuICAgIHN5bmM6ICd2YWx1ZScsXG4gIH07XG5cbiAgY29uc3QgZGF0YXNvdXJjZSA9IGRhdGEubWFwKChpdGVtOiBhbnkpID0+ICh7XG4gICAgcmFuZ2U6IFtpdGVtLmxvdywgaXRlbS5xMSwgaXRlbS5tZWRpYW4sIGl0ZW0ucTMsIGl0ZW0uaGlnaF0sXG4gICAgLi4uaXRlbSxcbiAgfSkpO1xuXG4gIGNvbnN0IHJhbmRlclRvb2x0aXAgPSAoa2V5OiBhbnkpID0+IHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzA1MykgRklYTUU6IEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICBjb25zdCBpdGVtID0gaXRlbUtleUluZm9NYXBba2V5XSB8fCB7fTtcbiAgICBjb25zdCBpdGVtTmFtZVRlbXBsYXRlID0gYFxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA4cHg7IGhlaWdodDogOHB4OyBtYXJnaW4tcmlnaHQ6IDRweDsgYmFja2dyb3VuZC1jb2xvcjogJHtpdGVtLmNvbG9yfTtcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBpZiAoIWl0ZW0udmFsaWQpIHtcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgc3R5bGU9XCIke3Rvb2x0aXBDb250YWluZXJTdHlsZVN0cn1cIj5cbiAgICAgICAgICAke2l0ZW1OYW1lVGVtcGxhdGV9XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctbGVmdDogMTZweDsgY29sb3I6ICNDQTQ1MjE7XCI+JHtpbnZhbGlkRGF0YVNlcmllc0xhYmVsfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IHN0eWxlPVwiJHt0b29sdGlwQ29udGFpbmVyU3R5bGVTdHJ9XCI+XG4gICAgICAgICR7aXRlbU5hbWVUZW1wbGF0ZX1cbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctbGVmdDogMTZweDtcIj4ke2hpZ2hMYWJlbH06ICR7aXRlbS5oaWdofTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy1sZWZ0OiAxNnB4O1wiPiR7cTNMYWJlbH06ICR7aXRlbS5xM308L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctbGVmdDogMTZweDtcIj4ke21lZGlhbkxhYmVsfTogJHtpdGVtLm1lZGlhbn08L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctbGVmdDogMTZweDtcIj4ke3ExTGFiZWx9OiAke2l0ZW0ucTF9PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDE2cHg7XCI+JHtsb3dMYWJlbH06ICR7aXRlbS5sb3d9PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDE2cHg7IGNvbG9yOiAjQ0E0NTIxOyB3b3JkLWJyZWFrOiBicmVhay1hbGw7XCI+JHtvdXRsaWVyc0xhYmVsfTogJHtpdGVtLm91dGxpZXJzfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHMkNoYXJ0QmFzZSBlbXB0eT17aXNEYXRhRW1wdHl9IGVtcHR5Q29udGVudD17ZW1wdHlDb250ZW50fSBjbGFzc05hbWU9e2Jhc2VDbGFzc05hbWV9PlxuICAgICAgPENoYXJ0IGZvcmNlRml0IHBhZGRpbmc9XCJhdXRvXCIgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gYW5pbWF0ZT17ZmFsc2V9PlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIHNob3dUaXRsZT17ZmFsc2V9XG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI3NjkpIEZJWE1FOiBObyBvdmVybG9hZCBtYXRjaGVzIHRoaXMgY2FsbC5cbiAgICAgICAgICBzaG93TWFya2Vycz17ZmFsc2V9XG4gICAgICAgICAgdXNlSHRtbFxuICAgICAgICAgIGh0bWxDb250ZW50PXtyYW5kZXJUb29sdGlwfVxuICAgICAgICAvPlxuICAgICAgICA8VmlldyBkYXRhPXtkYXRhc291cmNlfSBzY2FsZT17eyByYW5nZTogYmFzZVNjYWxlIH19PlxuICAgICAgICAgIDxBeGlzXG4gICAgICAgICAgICBuYW1lPVwia2V5XCJcbiAgICAgICAgICAgIGxhYmVsPXt7XG4gICAgICAgICAgICAgIGZvcm1hdHRlcihrZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzA1MykgRklYTUU6IEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVMYWJlbChpdGVtS2V5TmFtZU1hcFtrZXldLCB4TGFiZWxNYXhMZW5ndGgpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAuLi54TGFiZWxQcm9wcyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QXhpcyBuYW1lPVwicmFuZ2VcIiAvPlxuICAgICAgICAgIDxHZW9tXG4gICAgICAgICAgICBzZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgICAgdHlwZT1cInNjaGVtYVwiXG4gICAgICAgICAgICBwb3NpdGlvbj1cImtleSpyYW5nZVwiXG4gICAgICAgICAgICBzaGFwZT1cImJveFwiXG4gICAgICAgICAgICBzaXplPXsxNX1cbiAgICAgICAgICAgIGNvbG9yPXtzdHJva2VDb2xvcn1cbiAgICAgICAgICAgIHN0eWxlPXtbJ2tleScsIHsgZmlsbDogKGtleTogYW55KSA9PiBkZXJpdmVDb2xvckJ5SW5kZXgoaXRlbUtleUxpc3QuaW5kZXhPZihrZXkpKSB9XX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxHdWlkZT5cbiAgICAgICAgICAgIHtyZWZlcmVuY2VMaW5lcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4gKFxuICAgICAgICAgICAgICA8UmVmZXJlbmNlTGluZVxuICAgICAgICAgICAgICAgIGtleT17YHJlZmVyZW5jZS1saW5lLSR7aXRlbS5rZXkgPz8gaW5kZXh9YH1cbiAgICAgICAgICAgICAgICB4U2NhbGVLZXk9XCJrZXlcIlxuICAgICAgICAgICAgICAgIHlTY2FsZUtleT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICB0cmFuc3Bvc2U9e3RyYW5zcG9zZUNvb3JkfVxuICAgICAgICAgICAgICAgIHsuLi5pdGVtfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HdWlkZT5cbiAgICAgICAgPC9WaWV3PlxuICAgICAgICA8VmlldyBkYXRhPXtkYXRhc291cmNlfSBzY2FsZT17eyBvdXRsaWVyczogYmFzZVNjYWxlIH19PlxuICAgICAgICAgIDxHZW9tXG4gICAgICAgICAgICBzZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgICAgdHlwZT1cInBvaW50XCJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwia2V5Km91dGxpZXJzXCJcbiAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgICAgICAgIHNpemU9ezN9XG4gICAgICAgICAgICBjb2xvcj17WydrZXknLCBDSEFSVF9DT0xPUl9QQUxFVFRFXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgICA8L0NoYXJ0PlxuICAgIDwvRzJDaGFydEJhc2U+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJveFBsb3RDaGFydDtcbiJdfQ==