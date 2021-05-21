"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.renderReferenceLineByData = renderReferenceLineByData;
exports.renderSimpleReferenceLine = renderSimpleReferenceLine;
exports.renderReferenceLine = renderReferenceLine;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var LABEL_TEXT_POSITION = {
  // FIXME: abandon these legacy confs: left, center, right
  left: {
    label: 'insideBottomLeft',
    textAnchor: 'start'
  },
  center: {
    label: 'insideBottom',
    textAnchor: 'middle'
  },
  right: {
    label: 'insideBottomRight',
    textAnchor: 'end'
  }
};

function referenceLineLabel(_ref) {
  var labelText = _ref.labelText,
      position = _ref.position,
      _ref$angle = _ref.angle,
      angle = _ref$angle === void 0 ? 0 : _ref$angle,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 5 : _ref$offset,
      textAnchor = _ref.textAnchor,
      labelFillColor = _ref.labelFillColor,
      labelStrokeColor = _ref.labelStrokeColor;

  if (!labelText) {
    return null;
  }

  var style = {
    textAnchor: textAnchor,
    fontSize: '13',
    fill: labelFillColor,
    stroke: labelStrokeColor,
    strokeWidth: '0.1'
  };
  return /*#__PURE__*/_react["default"].createElement(Recharts.Label, {
    position: position,
    offset: offset,
    value: labelText,
    style: style // @ts-expect-error ts-migrate(2322) FIXME: Type '{ position: "insideBottomLeft" | "insideBott... Remove this comment to see the full error message
    ,
    angle: angle
  });
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2


function calcAngleDegrees(x, y) {
  return Math.atan2(y, x) * 180 / Math.PI;
}

function renderReferenceLineByData(_ref2) {
  var key = _ref2.key,
      segmentData = _ref2.segmentData,
      renderLabelAtIndex = _ref2.renderLabelAtIndex,
      labelText = _ref2.labelText,
      renderLabel = _ref2.renderLabel,
      _ref2$labelFillColor = _ref2.labelFillColor,
      labelFillColor = _ref2$labelFillColor === void 0 ? '#727272' : _ref2$labelFillColor,
      _ref2$stroke = _ref2.stroke,
      stroke = _ref2$stroke === void 0 ? '#727272' : _ref2$stroke,
      _ref2$strokeDasharray = _ref2.strokeDasharray,
      strokeDasharray = _ref2$strokeDasharray === void 0 ? '3 3' : _ref2$strokeDasharray,
      _ref2$yAxisId = _ref2.yAxisId,
      yAxisId = _ref2$yAxisId === void 0 ? 0 : _ref2$yAxisId;
  var first = {
    x: 0,
    y: 0
  };

  var renderLabelByIndex = function renderLabelByIndex(_ref3) {
    var index = _ref3.index,
        x = _ref3.x,
        y = _ref3.y;

    if (index === 0) {
      first.x = x;
      first.y = y;
    }

    if (index !== renderLabelAtIndex) {
      return null;
    }

    var degree = -1 * calcAngleDegrees(Math.abs(x - first.x), Math.abs(y - first.y));
    return /*#__PURE__*/_react["default"].createElement("text", {
      width: 100,
      height: 12,
      x: x,
      y: y,
      dy: -4,
      transform: "rotate(".concat(degree, " ").concat(x, " ").concat(y, ")"),
      fill: labelFillColor,
      fontSize: 13,
      textAnchor: "start"
    }, renderLabel ? renderLabel() : labelText);
  };

  return /*#__PURE__*/_react["default"].createElement(Recharts.Line, {
    isAnimationActive: false,
    key: key // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    ,
    name: key,
    data: segmentData,
    dataKey: "y",
    type: "linear",
    stroke: stroke,
    strokeDasharray: strokeDasharray,
    dot: false,
    activeDot: false,
    label: renderLabelByIndex,
    yAxisId: yAxisId
  });
}

function renderSimpleReferenceLine(_ref4) {
  var key = _ref4.key,
      _ref4$vertical = _ref4.vertical,
      vertical = _ref4$vertical === void 0 ? false : _ref4$vertical,
      _ref4$renderOnTop = _ref4.renderOnTop,
      renderOnTop = _ref4$renderOnTop === void 0 ? false : _ref4$renderOnTop,
      value = _ref4.value,
      labelText = _ref4.labelText,
      renderLabel = _ref4.renderLabel,
      _ref4$position = _ref4.position,
      position = _ref4$position === void 0 ? 'middle' : _ref4$position,
      _ref4$labelProps = _ref4.labelProps,
      labelProps = _ref4$labelProps === void 0 ? {
    position: 'insideBottomLeft',
    textAnchor: 'start'
  } : _ref4$labelProps,
      labelPosition = _ref4.labelPosition,
      _ref4$labelFillColor = _ref4.labelFillColor,
      labelFillColor = _ref4$labelFillColor === void 0 ? '#727272' : _ref4$labelFillColor,
      _ref4$labelStrokeColo = _ref4.labelStrokeColor,
      labelStrokeColor = _ref4$labelStrokeColo === void 0 ? '#363636' : _ref4$labelStrokeColo,
      _ref4$stroke = _ref4.stroke,
      stroke = _ref4$stroke === void 0 ? '#727272' : _ref4$stroke,
      _ref4$strokeDasharray = _ref4.strokeDasharray,
      strokeDasharray = _ref4$strokeDasharray === void 0 ? '3 3' : _ref4$strokeDasharray,
      _ref4$yAxisId = _ref4.yAxisId,
      yAxisId = _ref4$yAxisId === void 0 ? 0 : _ref4$yAxisId;

  if (labelPosition) {
    var conf = LABEL_TEXT_POSITION[labelPosition];
    labelProps.position = conf.label;
    labelProps.textAnchor = conf.textAnchor;
  }

  return /*#__PURE__*/_react["default"].createElement(Recharts.ReferenceLine, {
    key: key,
    isFront: renderOnTop,
    x: vertical ? value : undefined,
    y: vertical ? undefined : value,
    stroke: stroke,
    strokeDasharray: strokeDasharray,
    ifOverflow: "extendDomain",
    position: position,
    yAxisId: yAxisId
  }, referenceLineLabel(_objectSpread({
    labelText: labelText,
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ textAnchor?: "-moz-initial" | ... Remove this comment to see the full error message
    renderLabel: renderLabel,
    labelFillColor: labelFillColor,
    labelStrokeColor: labelStrokeColor,
    vertical: vertical
  }, labelProps)));
}

function isRenderReferenceLineByDataConfig(config) {
  return !!config.segmentData;
}

function renderReferenceLine(props) {
  if (isRenderReferenceLineByDataConfig(props)) {
    return renderReferenceLineByData(props);
  } else {
    return renderSimpleReferenceLine(props);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL3JlZmVyZW5jZS1saW5lLnRzeCJdLCJuYW1lcyI6WyJMQUJFTF9URVhUX1BPU0lUSU9OIiwibGVmdCIsImxhYmVsIiwidGV4dEFuY2hvciIsImNlbnRlciIsInJpZ2h0IiwicmVmZXJlbmNlTGluZUxhYmVsIiwibGFiZWxUZXh0IiwicG9zaXRpb24iLCJhbmdsZSIsIm9mZnNldCIsImxhYmVsRmlsbENvbG9yIiwibGFiZWxTdHJva2VDb2xvciIsInN0eWxlIiwiZm9udFNpemUiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJjYWxjQW5nbGVEZWdyZWVzIiwieCIsInkiLCJNYXRoIiwiYXRhbjIiLCJQSSIsInJlbmRlclJlZmVyZW5jZUxpbmVCeURhdGEiLCJrZXkiLCJzZWdtZW50RGF0YSIsInJlbmRlckxhYmVsQXRJbmRleCIsInJlbmRlckxhYmVsIiwic3Ryb2tlRGFzaGFycmF5IiwieUF4aXNJZCIsImZpcnN0IiwicmVuZGVyTGFiZWxCeUluZGV4IiwiaW5kZXgiLCJkZWdyZWUiLCJhYnMiLCJyZW5kZXJTaW1wbGVSZWZlcmVuY2VMaW5lIiwidmVydGljYWwiLCJyZW5kZXJPblRvcCIsInZhbHVlIiwibGFiZWxQcm9wcyIsImxhYmVsUG9zaXRpb24iLCJjb25mIiwidW5kZWZpbmVkIiwiaXNSZW5kZXJSZWZlcmVuY2VMaW5lQnlEYXRhQ29uZmlnIiwiY29uZmlnIiwicmVuZGVyUmVmZXJlbmNlTGluZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUc7QUFDMUI7QUFDQUMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLEtBQUssRUFBRSxrQkFESDtBQUVKQyxJQUFBQSxVQUFVLEVBQUU7QUFGUixHQUZvQjtBQU0xQkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05GLElBQUFB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QSxPQUFPLEVBQUVhLFdBRlg7QUFHRSxJQUFBLENBQUMsRUFBRUQsUUFBUSxHQUFHRSxLQUFILEdBQVdJLFNBSHhCO0FBSUUsSUFBQSxDQUFDLEVBQUVOLFFBQVEsR0FBR00sU0FBSCxHQUFlSixLQUo1QjtBQUtFLElBQUEsTUFBTSxFQUFFdkIsTUFMVjtBQU1FLElBQUEsZUFBZSxFQUFFYSxlQU5uQjtBQU9FLElBQUEsVUFBVSxFQUFDLGNBUGI7QUFRRSxJQUFBLFFBQVEsRUFBRXJCLFFBUlo7QUFTRSxJQUFBLE9BQU8sRUFBRXNCO0FBVFgsS0FXR3hCLGtCQUFrQjtBQUNqQkMsSUFBQUEsU0FBUyxFQUFUQSxTQURpQjtBQUVqQjtBQUNBcUIsSUFBQUEsV0FBVyxFQUFYQSxXQUhpQjtBQUlqQmpCLElBQUFBLGNBQWMsRUFBZEEsY0FKaUI7QUFLakJDLElBQUFBLGdCQUFnQixFQUFoQkEsZ0JBTGlCO0FBTWpCeUIsSUFBQUEsUUFBUSxFQUFSQTtBQU5pQixLQU9kRyxVQVBjLEVBWHJCLENBREY7QUF1QkQ7O0FBSUQsU0FBU0ksaUNBQVQsQ0FBMkNDLE1BQTNDLEVBQXVIO0FBQ3JILFNBQU8sQ0FBQyxDQUFDQSxNQUFNLENBQUNuQixXQUFoQjtBQUNEOztBQUVNLFNBQVNvQixtQkFBVCxDQUE2QkMsS0FBN0IsRUFBK0Q7QUFDcEUsTUFBSUgsaUNBQWlDLENBQUNHLEtBQUQsQ0FBckMsRUFBOEM7QUFDNUMsV0FBT3ZCLHlCQUF5QixDQUFDdUIsS0FBRCxDQUFoQztBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9YLHlCQUF5QixDQUFDVyxLQUFELENBQWhDO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWNoYXJ0cyBmcm9tICdyZWNoYXJ0cyc7XG5cbmNvbnN0IExBQkVMX1RFWFRfUE9TSVRJT04gPSB7XG4gIC8vIEZJWE1FOiBhYmFuZG9uIHRoZXNlIGxlZ2FjeSBjb25mczogbGVmdCwgY2VudGVyLCByaWdodFxuICBsZWZ0OiB7XG4gICAgbGFiZWw6ICdpbnNpZGVCb3R0b21MZWZ0JyxcbiAgICB0ZXh0QW5jaG9yOiAnc3RhcnQnLFxuICB9LFxuICBjZW50ZXI6IHtcbiAgICBsYWJlbDogJ2luc2lkZUJvdHRvbScsXG4gICAgdGV4dEFuY2hvcjogJ21pZGRsZScsXG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgbGFiZWw6ICdpbnNpZGVCb3R0b21SaWdodCcsXG4gICAgdGV4dEFuY2hvcjogJ2VuZCcsXG4gIH0sXG59IGFzIGNvbnN0O1xuXG50eXBlIExhYmVsUHJvcHMgPSBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgUmVjaGFydHMuTGFiZWw+O1xudHlwZSBMaW5lUHJvcHMgPSBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgUmVjaGFydHMuTGluZT47XG50eXBlIFJlZmVyZW5jZUxpbmVQcm9wcyA9IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBSZWNoYXJ0cy5SZWZlcmVuY2VMaW5lPjtcblxuZXhwb3J0IHR5cGUgUmVmZXJlbmNlTGluZUxhYmVsQ29uZmlnID0gUGFydGlhbDx7XG4gIHRleHRBbmNob3I6IFJlYWN0LkNTU1Byb3BlcnRpZXNbJ3RleHRBbmNob3InXTtcbiAgbGFiZWxGaWxsQ29sb3I6IFJlYWN0LkNTU1Byb3BlcnRpZXNbJ2ZpbGwnXTtcbiAgbGFiZWxTdHJva2VDb2xvcjogUmVhY3QuQ1NTUHJvcGVydGllc1snc3Ryb2tlJ107XG4gIGxhYmVsVGV4dDogTGFiZWxQcm9wc1sndmFsdWUnXTtcbiAgcG9zaXRpb246IExhYmVsUHJvcHNbJ3Bvc2l0aW9uJ107XG4gIGFuZ2xlOiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xuICB2ZXJ0aWNhbDogYm9vbGVhbjtcbn0+O1xuXG5mdW5jdGlvbiByZWZlcmVuY2VMaW5lTGFiZWwoe1xuICBsYWJlbFRleHQsXG4gIHBvc2l0aW9uLFxuICBhbmdsZSA9IDAsXG4gIG9mZnNldCA9IDUsXG4gIHRleHRBbmNob3IsXG4gIGxhYmVsRmlsbENvbG9yLFxuICBsYWJlbFN0cm9rZUNvbG9yIC8qIHZlcnRpY2FsICovLFxufTogUmVmZXJlbmNlTGluZUxhYmVsQ29uZmlnKSB7XG4gIGlmICghbGFiZWxUZXh0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICB0ZXh0QW5jaG9yLFxuICAgIGZvbnRTaXplOiAnMTMnLFxuICAgIGZpbGw6IGxhYmVsRmlsbENvbG9yLFxuICAgIHN0cm9rZTogbGFiZWxTdHJva2VDb2xvcixcbiAgICBzdHJva2VXaWR0aDogJzAuMScsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPFJlY2hhcnRzLkxhYmVsXG4gICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICBvZmZzZXQ9e29mZnNldH1cbiAgICAgIHZhbHVlPXtsYWJlbFRleHR9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjMyMikgRklYTUU6IFR5cGUgJ3sgcG9zaXRpb246IFwiaW5zaWRlQm90dG9tTGVmdFwiIHwgXCJpbnNpZGVCb3R0Li4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICAgIGFuZ2xlPXthbmdsZX1cbiAgICAvPlxuICApO1xufVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL2F0YW4yXG5mdW5jdGlvbiBjYWxjQW5nbGVEZWdyZWVzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gIHJldHVybiAoTWF0aC5hdGFuMih5LCB4KSAqIDE4MCkgLyBNYXRoLlBJO1xufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJSZWZlcmVuY2VMaW5lQnlEYXRhQ29uZmlnID0gUGFydGlhbDx7XG4gIGtleTogc3RyaW5nIHwgbnVtYmVyO1xuICByZW5kZXJPblRvcDogYm9vbGVhbjtcbiAgc2VnbWVudERhdGE6IHVua25vd247XG4gIHJlbmRlckxhYmVsQXRJbmRleDogbnVtYmVyO1xuICBsYWJlbFRleHQ6IFJlZmVyZW5jZUxpbmVMYWJlbENvbmZpZ1snbGFiZWxUZXh0J107XG4gIHJlbmRlckxhYmVsOiAoKSA9PiBMYWJlbFByb3BzWyd2YWx1ZSddO1xuICBsYWJlbEZpbGxDb2xvcjogUmVhY3QuU1ZHUHJvcHM8U1ZHVGV4dEVsZW1lbnQ+WydmaWxsJ107XG4gIHN0cm9rZTogTGluZVByb3BzWydzdHJva2UnXTtcbiAgc3Ryb2tlRGFzaGFycmF5OiBMaW5lUHJvcHNbJ3N0cm9rZURhc2hhcnJheSddO1xuICB5QXhpc0lkPzogc3RyaW5nIHwgbnVtYmVyO1xufT47XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSZWZlcmVuY2VMaW5lQnlEYXRhKHtcbiAga2V5LFxuICBzZWdtZW50RGF0YSxcblxuICAvLyByZW5kZXJPblRvcCA9IGZhbHNlLFxuICByZW5kZXJMYWJlbEF0SW5kZXgsXG5cbiAgbGFiZWxUZXh0LFxuICByZW5kZXJMYWJlbCxcbiAgbGFiZWxGaWxsQ29sb3IgPSAnIzcyNzI3MicsXG4gIHN0cm9rZSA9ICcjNzI3MjcyJyxcbiAgc3Ryb2tlRGFzaGFycmF5ID0gJzMgMycsXG4gIHlBeGlzSWQgPSAwLFxufTogUmVuZGVyUmVmZXJlbmNlTGluZUJ5RGF0YUNvbmZpZykge1xuICBjb25zdCBmaXJzdCA9IHsgeDogMCwgeTogMCB9O1xuICBjb25zdCByZW5kZXJMYWJlbEJ5SW5kZXggPSAoeyBpbmRleCwgeCwgeSAvKiAuLi5yZXN0ICovIH06IGFueSkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgZmlyc3QueCA9IHg7XG4gICAgICBmaXJzdC55ID0geTtcbiAgICB9XG4gICAgaWYgKGluZGV4ICE9PSByZW5kZXJMYWJlbEF0SW5kZXgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBkZWdyZWUgPSAtMSAqIGNhbGNBbmdsZURlZ3JlZXMoTWF0aC5hYnMoeCAtIGZpcnN0LngpLCBNYXRoLmFicyh5IC0gZmlyc3QueSkpO1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dFxuICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICBoZWlnaHQ9ezEyfVxuICAgICAgICB4PXt4fVxuICAgICAgICB5PXt5fVxuICAgICAgICBkeT17LTR9XG4gICAgICAgIHRyYW5zZm9ybT17YHJvdGF0ZSgke2RlZ3JlZX0gJHt4fSAke3l9KWB9XG4gICAgICAgIGZpbGw9e2xhYmVsRmlsbENvbG9yfVxuICAgICAgICBmb250U2l6ZT17MTN9XG4gICAgICAgIHRleHRBbmNob3I9XCJzdGFydFwiXG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJMYWJlbCA/IHJlbmRlckxhYmVsKCkgOiBsYWJlbFRleHR9XG4gICAgICA8L3RleHQ+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UmVjaGFydHMuTGluZVxuICAgICAgaXNBbmltYXRpb25BY3RpdmU9e2ZhbHNlfVxuICAgICAga2V5PXtrZXl9XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjc2OSkgRklYTUU6IE5vIG92ZXJsb2FkIG1hdGNoZXMgdGhpcyBjYWxsLlxuICAgICAgbmFtZT17a2V5fVxuICAgICAgZGF0YT17c2VnbWVudERhdGF9XG4gICAgICBkYXRhS2V5PVwieVwiXG4gICAgICB0eXBlPVwibGluZWFyXCJcbiAgICAgIHN0cm9rZT17c3Ryb2tlfVxuICAgICAgc3Ryb2tlRGFzaGFycmF5PXtzdHJva2VEYXNoYXJyYXl9XG4gICAgICBkb3Q9e2ZhbHNlfVxuICAgICAgYWN0aXZlRG90PXtmYWxzZX1cbiAgICAgIGxhYmVsPXtyZW5kZXJMYWJlbEJ5SW5kZXh9XG4gICAgICB5QXhpc0lkPXt5QXhpc0lkfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclNpbXBsZVJlZmVyZW5jZUxpbmVDb25maWcgPSBQYXJ0aWFsPHtcbiAga2V5OiBzdHJpbmcgfCBudW1iZXI7XG4gIHZlcnRpY2FsOiBib29sZWFuO1xuICByZW5kZXJPblRvcDogYm9vbGVhbjtcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcbiAgbGFiZWxUZXh0OiBSZWZlcmVuY2VMaW5lTGFiZWxDb25maWdbJ2xhYmVsVGV4dCddO1xuICByZW5kZXJMYWJlbDogKCkgPT4gUmVmZXJlbmNlTGluZUxhYmVsQ29uZmlnWydsYWJlbFRleHQnXTtcbiAgcG9zaXRpb246IFJlZmVyZW5jZUxpbmVQcm9wc1sncG9zaXRpb24nXTtcbiAgbGFiZWxQcm9wczogUmVmZXJlbmNlTGluZUxhYmVsQ29uZmlnO1xuICBsYWJlbFBvc2l0aW9uOiBrZXlvZiB0eXBlb2YgTEFCRUxfVEVYVF9QT1NJVElPTjtcbiAgbGFiZWxGaWxsQ29sb3I6IFJlZmVyZW5jZUxpbmVMYWJlbENvbmZpZ1snbGFiZWxGaWxsQ29sb3InXTtcbiAgbGFiZWxTdHJva2VDb2xvcjogUmVmZXJlbmNlTGluZUxhYmVsQ29uZmlnWydsYWJlbFN0cm9rZUNvbG9yJ107XG4gIHN0cm9rZTogUmVmZXJlbmNlTGluZVByb3BzWydzdHJva2UnXTtcbiAgc3Ryb2tlRGFzaGFycmF5OiBSZWZlcmVuY2VMaW5lUHJvcHNbJ3N0cm9rZURhc2hhcnJheSddO1xuICB5QXhpc0lkPzogc3RyaW5nIHwgbnVtYmVyO1xufT47XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaW1wbGVSZWZlcmVuY2VMaW5lKHtcbiAga2V5LFxuICB2ZXJ0aWNhbCA9IGZhbHNlLFxuICByZW5kZXJPblRvcCA9IGZhbHNlLFxuICB2YWx1ZSxcbiAgbGFiZWxUZXh0LFxuICByZW5kZXJMYWJlbCxcbiAgcG9zaXRpb24gPSAnbWlkZGxlJyxcblxuICBsYWJlbFByb3BzID0ge1xuICAgIHBvc2l0aW9uOiAnaW5zaWRlQm90dG9tTGVmdCcsXG4gICAgdGV4dEFuY2hvcjogJ3N0YXJ0JyxcbiAgfSxcblxuICAvLyBkZXByZWNhdGVkXG4gIGxhYmVsUG9zaXRpb24sXG5cbiAgbGFiZWxGaWxsQ29sb3IgPSAnIzcyNzI3MicsXG4gIGxhYmVsU3Ryb2tlQ29sb3IgPSAnIzM2MzYzNicsXG4gIHN0cm9rZSA9ICcjNzI3MjcyJyxcbiAgc3Ryb2tlRGFzaGFycmF5ID0gJzMgMycsXG4gIHlBeGlzSWQgPSAwLFxufTogUmVuZGVyU2ltcGxlUmVmZXJlbmNlTGluZUNvbmZpZykge1xuICBpZiAobGFiZWxQb3NpdGlvbikge1xuICAgIGNvbnN0IGNvbmYgPSBMQUJFTF9URVhUX1BPU0lUSU9OW2xhYmVsUG9zaXRpb25dO1xuICAgIGxhYmVsUHJvcHMucG9zaXRpb24gPSBjb25mLmxhYmVsO1xuICAgIGxhYmVsUHJvcHMudGV4dEFuY2hvciA9IGNvbmYudGV4dEFuY2hvcjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxSZWNoYXJ0cy5SZWZlcmVuY2VMaW5lXG4gICAgICBrZXk9e2tleX1cbiAgICAgIGlzRnJvbnQ9e3JlbmRlck9uVG9wfVxuICAgICAgeD17dmVydGljYWwgPyB2YWx1ZSA6IHVuZGVmaW5lZH1cbiAgICAgIHk9e3ZlcnRpY2FsID8gdW5kZWZpbmVkIDogdmFsdWV9XG4gICAgICBzdHJva2U9e3N0cm9rZX1cbiAgICAgIHN0cm9rZURhc2hhcnJheT17c3Ryb2tlRGFzaGFycmF5fVxuICAgICAgaWZPdmVyZmxvdz1cImV4dGVuZERvbWFpblwiXG4gICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICB5QXhpc0lkPXt5QXhpc0lkfVxuICAgID5cbiAgICAgIHtyZWZlcmVuY2VMaW5lTGFiZWwoe1xuICAgICAgICBsYWJlbFRleHQsXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzQ1KSBGSVhNRTogQXJndW1lbnQgb2YgdHlwZSAneyB0ZXh0QW5jaG9yPzogXCItbW96LWluaXRpYWxcIiB8IC4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgICAgIHJlbmRlckxhYmVsLFxuICAgICAgICBsYWJlbEZpbGxDb2xvcixcbiAgICAgICAgbGFiZWxTdHJva2VDb2xvcixcbiAgICAgICAgdmVydGljYWwsXG4gICAgICAgIC4uLmxhYmVsUHJvcHMsXG4gICAgICB9KX1cbiAgICA8L1JlY2hhcnRzLlJlZmVyZW5jZUxpbmU+XG4gICk7XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclJlZmVyZW5jZUxpbmVDb25maWcgPSBSZW5kZXJSZWZlcmVuY2VMaW5lQnlEYXRhQ29uZmlnIHwgUmVuZGVyU2ltcGxlUmVmZXJlbmNlTGluZUNvbmZpZztcblxuZnVuY3Rpb24gaXNSZW5kZXJSZWZlcmVuY2VMaW5lQnlEYXRhQ29uZmlnKGNvbmZpZzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBjb25maWcgaXMgUmVuZGVyUmVmZXJlbmNlTGluZUJ5RGF0YUNvbmZpZyB7XG4gIHJldHVybiAhIWNvbmZpZy5zZWdtZW50RGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJlZmVyZW5jZUxpbmUocHJvcHM6IFJlbmRlclJlZmVyZW5jZUxpbmVDb25maWcpIHtcbiAgaWYgKGlzUmVuZGVyUmVmZXJlbmNlTGluZUJ5RGF0YUNvbmZpZyhwcm9wcykpIHtcbiAgICByZXR1cm4gcmVuZGVyUmVmZXJlbmNlTGluZUJ5RGF0YShwcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlbmRlclNpbXBsZVJlZmVyZW5jZUxpbmUocHJvcHMpO1xuICB9XG59XG4iXX0=