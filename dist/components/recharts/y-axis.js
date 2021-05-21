"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.RenderYAxis = RenderYAxis;
exports.renderYAxis = exports.measureText = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _recharts = require("recharts");

var _enum = require("../helpers/enum");

var SHIFT = _enum.TICK_FONT_SIZE / 2;
var Y_FONT_SHIFT = 2;

function renderTick(props) {
  var x = props.x,
      y = props.y,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      textAnchor = props.textAnchor,
      transform = props.transform,
      getCustomTick = props.getCustomTick,
      valueText = props.valueText,
      color = props.color;

  if (getCustomTick) {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number | undefined' is not assignable to typ... Remove this comment to see the full error message
    return getCustomTick({
      x: x,
      y: y,
      valueText: valueText
    });
  }

  return (
    /*#__PURE__*/
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    _react["default"].createElement("g", {
      transform: "translate(".concat(x, ",").concat(y + SHIFT - Y_FONT_SHIFT, ")")
    }, /*#__PURE__*/_react["default"].createElement("text", {
      className: "x-tick ".concat(className),
      x: 0,
      y: 0,
      textAnchor: textAnchor,
      fontSize: _enum.TICK_FONT_SIZE,
      transform: transform,
      fill: color !== null && color !== void 0 ? color : '#666'
    }, valueText))
  );
}

function renderClippedTick(props, maxTickLength) {
  var x = props.x,
      y = props.y,
      _props$className2 = props.className,
      className = _props$className2 === void 0 ? '' : _props$className2,
      textAnchor = props.textAnchor,
      transform = props.transform,
      valueText = props.valueText,
      vertical = props.vertical,
      color = props.color;
  var measures = {
    width: vertical ? maxTickLength : _enum.TICK_FONT_SIZE * 1.5,
    height: vertical ? _enum.TICK_FONT_SIZE * 1.5 : maxTickLength
  };
  var style = {
    textAnchor: textAnchor,
    fontSize: _enum.TICK_FONT_SIZE,
    color: color !== null && color !== void 0 ? color : '#666',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };

  if (vertical) {
    style.textAlign = 'right';
  }

  var dx = vertical ? -SHIFT : 0;
  var dy = -SHIFT - Y_FONT_SHIFT;
  return (
    /*#__PURE__*/
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    _react["default"].createElement("g", {
      transform: "translate(".concat(x - measures.width + dx, ",").concat(y + dy, ") ").concat(transform)
    }, /*#__PURE__*/_react["default"].createElement("svg", measures, /*#__PURE__*/_react["default"].createElement("rect", (0, _extends2["default"])({}, measures, {
      fill: "none"
    })), /*#__PURE__*/_react["default"].createElement("foreignObject", (0, _extends2["default"])({
      x: 0,
      y: 0
    }, measures), /*#__PURE__*/_react["default"].createElement("div", {
      className: "x-tick ".concat(className),
      style: style
    }, valueText))))
  );
}

var Tick = function Tick(props) {
  var x = props.x,
      y = props.y,
      payload = props.payload,
      formatter = props.formatter,
      className = props.className,
      vertical = props.vertical,
      maxTickLength = props.maxTickLength,
      forYAxis = props.forYAxis,
      _props$textAnchor = props.textAnchor,
      textAnchor = _props$textAnchor === void 0 ? 'end' : _props$textAnchor,
      _props$preserveZero = props.preserveZero,
      preserveZero = _props$preserveZero === void 0 ? false : _props$preserveZero,
      getCustomTick = props.getCustomTick,
      color = props.color; // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.

  var value = payload.value;

  if (value === 'auto') {
    return null;
  }

  if (value === 0 && !preserveZero) {
    return null;
  }

  var valueText = formatter(value, 'tick');
  var transform = '';
  var tickProps = {
    x: x,
    y: y,
    className: className,
    textAnchor: textAnchor,
    transform: transform,
    valueText: valueText,
    vertical: vertical,
    forYAxis: forYAxis,
    getCustomTick: getCustomTick,
    color: color
  };

  if (!maxTickLength) {
    return renderTick(tickProps);
  }

  return renderClippedTick(tickProps, maxTickLength);
};

var measureText = function () {
  var ctx = null;
  return function (text) {
    var fontOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (ctx == null) {
      // eslint-disable-next-line no-undef
      var canvas = document.createElement('canvas');
      ctx = canvas.getContext('2d');
    }

    var _fontOptions$fontSize = fontOptions.fontSize,
        fontSize = _fontOptions$fontSize === void 0 ? "".concat(_enum.TICK_FONT_SIZE, "px") : _fontOptions$fontSize,
        _fontOptions$lineHeig = fontOptions.lineHeight,
        lineHeight = _fontOptions$lineHeig === void 0 ? '1.4' : _fontOptions$lineHeig,
        _fontOptions$fontFami = fontOptions.fontFamily,
        fontFamily = _fontOptions$fontFami === void 0 ? 'Roboto, sans-serif' : _fontOptions$fontFami,
        _fontOptions$fontWeig = fontOptions.fontWeight,
        fontWeight = _fontOptions$fontWeig === void 0 ? 'normal' : _fontOptions$fontWeig;
    ctx.font = "".concat(fontWeight, " ").concat(fontSize, "/").concat(lineHeight, " ").concat(fontFamily);
    return ctx.measureText(text);
  };
}();

exports.measureText = measureText;

function RenderYAxis(_ref) {
  var name = _ref.name,
      _ref$formatter = _ref.formatter,
      formatter = _ref$formatter === void 0 ? function (v) {
    return v;
  } : _ref$formatter,
      labelClassName = _ref.labelClassName,
      _ref$tickLabelPositio = _ref.tickLabelPosition,
      tickLabelPosition = _ref$tickLabelPositio === void 0 ? 'insideLeft' : _ref$tickLabelPositio,
      tickClassName = _ref.tickClassName,
      textAnchor = _ref.textAnchor,
      _ref$domain = _ref.domain,
      domain = _ref$domain === void 0 ? ['dataMin', 'auto'] : _ref$domain,
      tickTextColor = _ref.tickTextColor,
      maxTickLength = _ref.maxTickLength,
      vertical = _ref.vertical,
      preserveTickZero = _ref.preserveTickZero,
      getCustomTick = _ref.getCustomTick,
      barSize = _ref.barSize,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["name", "formatter", "labelClassName", "tickLabelPosition", "tickClassName", "textAnchor", "domain", "tickTextColor", "maxTickLength", "vertical", "preserveTickZero", "getCustomTick", "barSize"]);

  var _useState = (0, _react.useState)(maxTickLength !== null && maxTickLength !== void 0 ? maxTickLength : 0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      maxTickLabelWidth = _useState2[0],
      setMaxTickLabelWidth = _useState2[1];

  var tickFormatter = (0, _react.useCallback)(function (value) {
    var text = formatter(value, 'tick');

    var _measureText = measureText(text),
        textWidth = _measureText.width;

    setMaxTickLabelWidth(function (width) {
      return Math.max(width, textWidth);
    });
    return text;
  }, [formatter]);
  (0, _react.useEffect)(function () {
    maxTickLength && setMaxTickLabelWidth(maxTickLength);
  }, [maxTickLength]);

  var _useState3 = (0, _react.useState)(40),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      width = _useState4[0],
      setWidth = _useState4[1];

  (0, _react.useLayoutEffect)(function () {
    setWidth(Math.ceil(Math.max(maxTickLabelWidth + 8 + (name ? _enum.TICK_FONT_SIZE : 0), 40)));
  }, [maxTickLabelWidth, name]);
  return /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, (0, _extends2["default"])({
    width: width // @ts-expect-error ts-migrate(2322) FIXME: Type '((value: any) => any) | null' is not assigna... Remove this comment to see the full error message
    ,
    tickFormatter: maxTickLength ? null : tickFormatter,
    domain: domain,
    tick:
    /*#__PURE__*/
    // @ts-expect-error ts-migrate(2786) FIXME: 'Tick' cannot be used as a JSX component.
    _react["default"].createElement(Tick, {
      formatter: formatter,
      className: tickClassName,
      textAnchor: textAnchor,
      vertical: vertical,
      maxTickLength: maxTickLength,
      preserveZero: preserveTickZero,
      forYAxis: true,
      getCustomTick: getCustomTick,
      barSize: barSize,
      color: tickTextColor
    })
  }, props), name && /*#__PURE__*/_react["default"].createElement(_recharts.Label, {
    className: labelClassName,
    value: name,
    position: tickLabelPosition // @ts-expect-error ts-migrate(2322) FIXME: Type '{ value: string; position: "end" | "center" ... Remove this comment to see the full error message
    ,
    angle: -90,
    style: {
      textAnchor: 'middle'
    }
  }));
}

var renderYAxis = RenderYAxis;
exports.renderYAxis = renderYAxis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL3ktYXhpcy50c3giXSwibmFtZXMiOlsiU0hJRlQiLCJUSUNLX0ZPTlRfU0laRSIsIllfRk9OVF9TSElGVCIsInJlbmRlclRpY2siLCJwcm9wcyIsIngiLCJ5IiwiY2xhc3NOYW1lIiwidGV4dEFuY2hvciIsInRyYW5zZm9ybSIsImdldEN1c3RvbVRpY2siLCJ2YWx1ZVRleHQiLCJjb2xvciIsInJlbmRlckNsaXBwZWRUaWNrIiwibWF4VGlja0xlbmd0aCIsInZlcnRpY2FsIiwibWVhc3VyZXMiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwiZm9udFNpemUiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJ0ZXh0QWxpZ24iLCJkeCIsImR5IiwiVGljayIsInBheWxvYWQiLCJmb3JtYXR0ZXIiLCJmb3JZQXhpcyIsInByZXNlcnZlWmVybyIsInZhbHVlIiwidGlja1Byb3BzIiwibWVhc3VyZVRleHQiLCJjdHgiLCJ0ZXh0IiwiZm9udE9wdGlvbnMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRDb250ZXh0IiwibGluZUhlaWdodCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udCIsIlJlbmRlcllBeGlzIiwibmFtZSIsInYiLCJsYWJlbENsYXNzTmFtZSIsInRpY2tMYWJlbFBvc2l0aW9uIiwidGlja0NsYXNzTmFtZSIsImRvbWFpbiIsInRpY2tUZXh0Q29sb3IiLCJwcmVzZXJ2ZVRpY2taZXJvIiwiYmFyU2l6ZSIsIm1heFRpY2tMYWJlbFdpZHRoIiwic2V0TWF4VGlja0xhYmVsV2lkdGgiLCJ0aWNrRm9ybWF0dGVyIiwidGV4dFdpZHRoIiwiTWF0aCIsIm1heCIsInNldFdpZHRoIiwiY2VpbCIsInJlbmRlcllBeGlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7QUFHQSxJQUFNQSxL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O0FBSkY7QUFLRSxJQUFBLEtBQUssRUFBRSxDQUFDLEVBTFY7QUFNRSxJQUFBLEtBQUssRUFBRTtBQUFFMUMsTUFBQUEsVUFBVSxFQUFFO0FBQWQ7QUFOVCxJQXZCSixDQURGO0FBbUNEOztBQUNNLElBQU13RCxXQUFXLEdBQUdsQixXQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgWUF4aXMsIExhYmVsIH0gZnJvbSAncmVjaGFydHMnO1xuaW1wb3J0IHsgQXhpc0RvbWFpbiB9IGZyb20gJ3JlY2hhcnRzL3R5cGVzL3V0aWwvdHlwZXMnO1xuXG5pbXBvcnQgeyBUSUNLX0ZPTlRfU0laRSB9IGZyb20gJy4uL2hlbHBlcnMvZW51bSc7XG5pbXBvcnQgeyBGb3JtYXR0ZXJGdW5jIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmNvbnN0IFNISUZUID0gVElDS19GT05UX1NJWkUgLyAyO1xuY29uc3QgWV9GT05UX1NISUZUID0gMjtcblxudHlwZSBSZW5kZXJUaWNrQ29uZmlnID0ge1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHZhbHVlVGV4dD86IHN0cmluZztcbiAgdGV4dEFuY2hvcj86IFJlYWN0LkNTU1Byb3BlcnRpZXNbJ3RleHRBbmNob3InXTtcbiAgdHJhbnNmb3JtPzogUmVhY3QuU1ZHQXR0cmlidXRlczxTVkdFbGVtZW50PlsndHJhbnNmb3JtJ107XG4gIGNvbG9yPzogc3RyaW5nO1xuICBnZXRDdXN0b21UaWNrPzogKGNvbmZpZzogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdmFsdWVUZXh0Pzogc3RyaW5nIH0pID0+IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdmVydGljYWw/OiBib29sZWFuO1xuICBmb3JZQXhpcz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBUaWNrUHJvcHMgPSBSZW5kZXJUaWNrQ29uZmlnICYge1xuICBmb3JtYXR0ZXI6IEZvcm1hdHRlckZ1bmM7XG4gIG1heFRpY2tMZW5ndGg/OiBudW1iZXI7XG4gIHByZXNlcnZlWmVybz86IGJvb2xlYW47XG4gIHBheWxvYWQ/OiB7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfTtcbiAgYmFyU2l6ZT86IHVua25vd247XG59O1xuXG5mdW5jdGlvbiByZW5kZXJUaWNrKHByb3BzOiBSZW5kZXJUaWNrQ29uZmlnKSB7XG4gIGNvbnN0IHsgeCwgeSwgY2xhc3NOYW1lID0gJycsIHRleHRBbmNob3IsIHRyYW5zZm9ybSwgZ2V0Q3VzdG9tVGljaywgdmFsdWVUZXh0LCBjb2xvciAvKiBmb3JZQXhpcyAqLyB9ID0gcHJvcHM7XG4gIGlmIChnZXRDdXN0b21UaWNrKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMjIpIEZJWE1FOiBUeXBlICdudW1iZXIgfCB1bmRlZmluZWQnIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHR5cC4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgcmV0dXJuIGdldEN1c3RvbVRpY2soeyB4LCB5LCB2YWx1ZVRleHQgfSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjUzMikgRklYTUU6IE9iamVjdCBpcyBwb3NzaWJseSAndW5kZWZpbmVkJy5cbiAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt4fSwke3kgKyBTSElGVCAtIFlfRk9OVF9TSElGVH0pYH0+XG4gICAgICA8dGV4dFxuICAgICAgICBjbGFzc05hbWU9e2B4LXRpY2sgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgeD17MH1cbiAgICAgICAgeT17MH1cbiAgICAgICAgdGV4dEFuY2hvcj17dGV4dEFuY2hvcn1cbiAgICAgICAgZm9udFNpemU9e1RJQ0tfRk9OVF9TSVpFfVxuICAgICAgICB0cmFuc2Zvcm09e3RyYW5zZm9ybX1cbiAgICAgICAgZmlsbD17Y29sb3IgPz8gJyM2NjYnfVxuICAgICAgPlxuICAgICAgICB7dmFsdWVUZXh0fVxuICAgICAgPC90ZXh0PlxuICAgIDwvZz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2xpcHBlZFRpY2socHJvcHM6IFJlbmRlclRpY2tDb25maWcsIG1heFRpY2tMZW5ndGg6IG51bWJlcikge1xuICBjb25zdCB7IHgsIHksIGNsYXNzTmFtZSA9ICcnLCB0ZXh0QW5jaG9yLCB0cmFuc2Zvcm0sIHZhbHVlVGV4dCwgLyogZm9yWUF4aXMsICovIHZlcnRpY2FsLCBjb2xvciB9ID0gcHJvcHM7XG4gIGNvbnN0IG1lYXN1cmVzID0ge1xuICAgIHdpZHRoOiB2ZXJ0aWNhbCA/IG1heFRpY2tMZW5ndGggOiBUSUNLX0ZPTlRfU0laRSAqIDEuNSxcbiAgICBoZWlnaHQ6IHZlcnRpY2FsID8gVElDS19GT05UX1NJWkUgKiAxLjUgOiBtYXhUaWNrTGVuZ3RoLFxuICB9O1xuICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICB0ZXh0QW5jaG9yLFxuICAgIGZvbnRTaXplOiBUSUNLX0ZPTlRfU0laRSxcbiAgICBjb2xvcjogY29sb3IgPz8gJyM2NjYnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIH07XG5cbiAgaWYgKHZlcnRpY2FsKSB7XG4gICAgc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgfVxuXG4gIGNvbnN0IGR4ID0gdmVydGljYWwgPyAtU0hJRlQgOiAwO1xuICBjb25zdCBkeSA9IC1TSElGVCAtIFlfRk9OVF9TSElGVDtcbiAgcmV0dXJuIChcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjUzMikgRklYTUU6IE9iamVjdCBpcyBwb3NzaWJseSAndW5kZWZpbmVkJy5cbiAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt4IC0gbWVhc3VyZXMud2lkdGggKyBkeH0sJHt5ICsgZHl9KSAke3RyYW5zZm9ybX1gfT5cbiAgICAgIDxzdmcgey4uLm1lYXN1cmVzfT5cbiAgICAgICAgPHJlY3Qgey4uLm1lYXN1cmVzfSBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgIDxmb3JlaWduT2JqZWN0IHg9ezB9IHk9ezB9IHsuLi5tZWFzdXJlc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B4LXRpY2sgJHtjbGFzc05hbWV9YH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIHt2YWx1ZVRleHR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9yZWlnbk9iamVjdD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZz5cbiAgKTtcbn1cblxuY29uc3QgVGljayA9IChwcm9wczogVGlja1Byb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICAvLyBpbmRleCxcbiAgICAvLyB3aWR0aCxcbiAgICAvLyB2aXNpYmxlVGlja3NDb3VudCxcbiAgICB4LFxuICAgIHksXG4gICAgcGF5bG9hZCxcbiAgICBmb3JtYXR0ZXIsXG4gICAgY2xhc3NOYW1lLFxuICAgIHZlcnRpY2FsLFxuICAgIG1heFRpY2tMZW5ndGgsXG4gICAgZm9yWUF4aXMsXG4gICAgdGV4dEFuY2hvciA9ICdlbmQnLFxuICAgIHByZXNlcnZlWmVybyA9IGZhbHNlLFxuICAgIGdldEN1c3RvbVRpY2ssXG4gICAgY29sb3IsXG4gICAgLy8gLi4ucmVzdFxuICB9ID0gcHJvcHM7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTMyKSBGSVhNRTogT2JqZWN0IGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCB2YWx1ZSA9IHBheWxvYWQudmFsdWU7XG4gIGlmICh2YWx1ZSA9PT0gJ2F1dG8nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHZhbHVlID09PSAwICYmICFwcmVzZXJ2ZVplcm8pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB2YWx1ZVRleHQgPSBmb3JtYXR0ZXIodmFsdWUsICd0aWNrJyk7XG5cbiAgY29uc3QgdHJhbnNmb3JtID0gJyc7XG4gIGNvbnN0IHRpY2tQcm9wcyA9IHsgeCwgeSwgY2xhc3NOYW1lLCB0ZXh0QW5jaG9yLCB0cmFuc2Zvcm0sIHZhbHVlVGV4dCwgdmVydGljYWwsIGZvcllBeGlzLCBnZXRDdXN0b21UaWNrLCBjb2xvciB9O1xuICBpZiAoIW1heFRpY2tMZW5ndGgpIHtcbiAgICByZXR1cm4gcmVuZGVyVGljayh0aWNrUHJvcHMpO1xuICB9XG4gIHJldHVybiByZW5kZXJDbGlwcGVkVGljayh0aWNrUHJvcHMsIG1heFRpY2tMZW5ndGgpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lYXN1cmVUZXh0ID0gKCgpID0+IHtcbiAgbGV0IGN0eDogYW55ID0gbnVsbDtcbiAgcmV0dXJuICh0ZXh0OiBhbnksIGZvbnRPcHRpb25zID0ge30pID0+IHtcbiAgICBpZiAoY3R4ID09IG51bGwpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnZm9udFNpemUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3t9Jy5cbiAgICAgIGZvbnRTaXplID0gYCR7VElDS19GT05UX1NJWkV9cHhgLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnbGluZUhlaWdodCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgbGluZUhlaWdodCA9ICcxLjQnLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnZm9udEZhbWlseScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgZm9udEZhbWlseSA9ICdSb2JvdG8sIHNhbnMtc2VyaWYnLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnZm9udFdlaWdodCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgZm9udFdlaWdodCA9ICdub3JtYWwnLFxuICAgIH0gPSBmb250T3B0aW9ucztcbiAgICBjdHguZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9LyR7bGluZUhlaWdodH0gJHtmb250RmFtaWx5fWA7XG4gICAgcmV0dXJuIGN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB0eXBlIFJlbmRlcllBeGlzQ29uZmlnID0gUGFydGlhbDx7XG4gIG5hbWU6IHN0cmluZztcbiAgZm9ybWF0dGVyOiBGb3JtYXR0ZXJGdW5jO1xuICBsYWJlbENsYXNzTmFtZTogc3RyaW5nO1xuICB0aWNrQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHRpY2tMYWJlbFBvc2l0aW9uOiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgTGFiZWw+Wydwb3NpdGlvbiddO1xuICB0ZXh0QW5jaG9yOiBSZWFjdC5DU1NQcm9wZXJ0aWVzWyd0ZXh0QW5jaG9yJ107XG4gIGRvbWFpbjogQXhpc0RvbWFpbjtcbiAgdGlja1RleHRDb2xvcjogc3RyaW5nO1xuICBtYXhUaWNrTGVuZ3RoOiBudW1iZXI7XG4gIHZlcnRpY2FsOiBib29sZWFuO1xuICBwcmVzZXJ2ZVRpY2taZXJvOiBib29sZWFuO1xuICBnZXRDdXN0b21UaWNrOiBUaWNrUHJvcHNbJ2dldEN1c3RvbVRpY2snXTtcbiAgYmFyU2l6ZTogdW5rbm93bjtcbn0+ICZcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFlBeGlzPjtcblxuZXhwb3J0IGZ1bmN0aW9uIFJlbmRlcllBeGlzKHtcbiAgbmFtZSxcbiAgZm9ybWF0dGVyID0gKHY6IGFueSkgPT4gdixcbiAgbGFiZWxDbGFzc05hbWUsXG4gIHRpY2tMYWJlbFBvc2l0aW9uID0gJ2luc2lkZUxlZnQnLFxuICB0aWNrQ2xhc3NOYW1lLFxuICB0ZXh0QW5jaG9yLFxuXG4gIC8vIHNhbWUgYXMgcmVjaGFydHMgZGVmYXVsdFxuICBkb21haW4gPSBbJ2RhdGFNaW4nLCAnYXV0byddLFxuICB0aWNrVGV4dENvbG9yLFxuICBtYXhUaWNrTGVuZ3RoLFxuICB2ZXJ0aWNhbCxcbiAgcHJlc2VydmVUaWNrWmVybyxcbiAgZ2V0Q3VzdG9tVGljayxcbiAgYmFyU2l6ZSxcbiAgLi4ucHJvcHNcbn06IFJlbmRlcllBeGlzQ29uZmlnKSB7XG4gIGNvbnN0IFttYXhUaWNrTGFiZWxXaWR0aCwgc2V0TWF4VGlja0xhYmVsV2lkdGhdID0gdXNlU3RhdGUobWF4VGlja0xlbmd0aCA/PyAwKTtcblxuICBjb25zdCB0aWNrRm9ybWF0dGVyID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gZm9ybWF0dGVyKHZhbHVlLCAndGljaycpO1xuICAgICAgY29uc3QgeyB3aWR0aDogdGV4dFdpZHRoIH0gPSBtZWFzdXJlVGV4dCh0ZXh0KTtcbiAgICAgIHNldE1heFRpY2tMYWJlbFdpZHRoKCh3aWR0aCkgPT4gTWF0aC5tYXgod2lkdGgsIHRleHRXaWR0aCkpO1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSxcbiAgICBbZm9ybWF0dGVyXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbWF4VGlja0xlbmd0aCAmJiBzZXRNYXhUaWNrTGFiZWxXaWR0aChtYXhUaWNrTGVuZ3RoKTtcbiAgfSwgW21heFRpY2tMZW5ndGhdKTtcblxuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDQwKTtcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaWR0aChNYXRoLmNlaWwoTWF0aC5tYXgobWF4VGlja0xhYmVsV2lkdGggKyA4ICsgKG5hbWUgPyBUSUNLX0ZPTlRfU0laRSA6IDApLCA0MCkpKTtcbiAgfSwgW21heFRpY2tMYWJlbFdpZHRoLCBuYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8WUF4aXNcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzIyKSBGSVhNRTogVHlwZSAnKCh2YWx1ZTogYW55KSA9PiBhbnkpIHwgbnVsbCcgaXMgbm90IGFzc2lnbmEuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgICAgdGlja0Zvcm1hdHRlcj17bWF4VGlja0xlbmd0aCA/IG51bGwgOiB0aWNrRm9ybWF0dGVyfVxuICAgICAgZG9tYWluPXtkb21haW59XG4gICAgICB0aWNrPXtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI3ODYpIEZJWE1FOiAnVGljaycgY2Fubm90IGJlIHVzZWQgYXMgYSBKU1ggY29tcG9uZW50LlxuICAgICAgICA8VGlja1xuICAgICAgICAgIGZvcm1hdHRlcj17Zm9ybWF0dGVyfVxuICAgICAgICAgIGNsYXNzTmFtZT17dGlja0NsYXNzTmFtZX1cbiAgICAgICAgICB0ZXh0QW5jaG9yPXt0ZXh0QW5jaG9yfVxuICAgICAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgICAgICBtYXhUaWNrTGVuZ3RoPXttYXhUaWNrTGVuZ3RofVxuICAgICAgICAgIHByZXNlcnZlWmVybz17cHJlc2VydmVUaWNrWmVyb31cbiAgICAgICAgICBmb3JZQXhpc1xuICAgICAgICAgIGdldEN1c3RvbVRpY2s9e2dldEN1c3RvbVRpY2t9XG4gICAgICAgICAgYmFyU2l6ZT17YmFyU2l6ZX1cbiAgICAgICAgICBjb2xvcj17dGlja1RleHRDb2xvcn1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7bmFtZSAmJiAoXG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIGNsYXNzTmFtZT17bGFiZWxDbGFzc05hbWV9XG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgcG9zaXRpb249e3RpY2tMYWJlbFBvc2l0aW9ufVxuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzIyKSBGSVhNRTogVHlwZSAneyB2YWx1ZTogc3RyaW5nOyBwb3NpdGlvbjogXCJlbmRcIiB8IFwiY2VudGVyXCIgLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICBhbmdsZT17LTkwfVxuICAgICAgICAgIHN0eWxlPXt7IHRleHRBbmNob3I6ICdtaWRkbGUnIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvWUF4aXM+XG4gICk7XG59XG5leHBvcnQgY29uc3QgcmVuZGVyWUF4aXMgPSBSZW5kZXJZQXhpcztcbiJdfQ==