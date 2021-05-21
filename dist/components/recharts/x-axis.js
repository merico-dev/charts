"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getNickTicks = getNickTicks;
exports.renderSimpleXAxis = renderSimpleXAxis;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

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
      valueText = props.valueText,
      getCustomTick = props.getCustomTick,
      color = props.color;

  if (getCustomTick) {
    return getCustomTick({
      x: x,
      y: y,
      valueText: valueText
    });
  }

  return /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(".concat(x - SHIFT, ",").concat(y + SHIFT, ")")
  }, /*#__PURE__*/_react["default"].createElement("text", {
    className: "x-tick ".concat(className),
    x: 0,
    y: 0,
    textAnchor: textAnchor,
    fontSize: _enum.TICK_FONT_SIZE,
    transform: transform,
    fill: color !== null && color !== void 0 ? color : '#666'
  }, valueText));
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
  var dx = vertical ? SHIFT : 0;
  var dy = Y_FONT_SHIFT;
  return /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(".concat(x + dx, ",").concat(y + dy, ") ").concat(transform)
  }, /*#__PURE__*/_react["default"].createElement("svg", measures, /*#__PURE__*/_react["default"].createElement("rect", (0, _extends2["default"])({}, measures, {
    fill: "none"
  })), /*#__PURE__*/_react["default"].createElement("foreignObject", (0, _extends2["default"])({
    x: 0,
    y: 0
  }, measures), /*#__PURE__*/_react["default"].createElement("div", {
    className: "x-tick ".concat(className),
    style: style
  }, valueText))));
}

var Tick = function Tick(props) {
  var index = props.index,
      width = props.width,
      visibleTicksCount = props.visibleTicksCount,
      x = props.x,
      y = props.y,
      payload = props.payload,
      formatter = props.formatter,
      className = props.className,
      vertical = props.vertical,
      maxTickLength = props.maxTickLength,
      color = props.color,
      rest = (0, _objectWithoutProperties2["default"])(props, ["index", "width", "visibleTicksCount", "x", "y", "payload", "formatter", "className", "vertical", "maxTickLength", "color"]);
  var textAnchor = rest.textAnchor,
      getCustomTick = rest.getCustomTick;

  if (!textAnchor) {
    textAnchor = function () {
      if (index === 0) {
        return 'start';
      } else if (index === visibleTicksCount - 1 && x >= width - 100) {
        return 'end';
      } else {
        return 'middle';
      }
    }();
  }

  var value = payload.value;

  if (value === 0 || value === 'auto') {
    return null;
  }

  var valueText = formatter(value, 'tick');
  var transform = vertical ? 'rotate(90)' : '';
  var tickProps = {
    x: x,
    y: y,
    className: className,
    textAnchor: textAnchor,
    transform: transform,
    valueText: valueText,
    vertical: vertical,
    getCustomTick: getCustomTick,
    color: color
  };

  if ( /*#__PURE__*/_react["default"].isValidElement(valueText)) {
    return valueText;
  }

  if (!maxTickLength) {
    return renderTick(tickProps);
  }

  return renderClippedTick(tickProps, maxTickLength);
};
/**
 * evenly distribute ticks by minTickCount
 * @param points axis points
 * @param minTickCount a number, like 7
 */


function getNickTicks(points, minTickCount) {
  if (!minTickCount) {
    return points;
  }

  var len = points.length;

  if (len <= minTickCount) {
    return points;
  }

  var ret = [];
  var step = Math.floor(len / minTickCount);
  var i = 0;

  while (i <= len - 1) {
    ret.push(points[i]);
    i += step;
  }

  return ret;
}

function renderSimpleXAxis(_ref) {
  var name = _ref.name,
      formatter = _ref.formatter,
      labelClassName = _ref.labelClassName,
      tickClassName = _ref.tickClassName,
      tickCount = _ref.tickCount,
      textAnchor = _ref.textAnchor,
      interval = _ref.interval,
      vertical = _ref.vertical,
      orientation = _ref.orientation,
      maxTickLength = _ref.maxTickLength,
      getCustomTick = _ref.getCustomTick,
      tickTextColor = _ref.tickTextColor,
      points = _ref.points,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["name", "formatter", "labelClassName", "tickClassName", "tickCount", "textAnchor", "interval", "vertical", "orientation", "maxTickLength", "getCustomTick", "tickTextColor", "points"]);

  if (!textAnchor) {
    textAnchor = vertical ? 'start' : 'middle';
  }

  if (typeof interval !== 'string' && typeof interval !== 'number') {
    // @ts-expect-error ts-migrate(2322) FIXME: Type '0 | null' is not assignable to type 'number ... Remove this comment to see the full error message
    interval = vertical ? 0 : null;
  }

  var ticks = points ? getNickTicks(points, tickCount) : undefined;
  return (
    /*#__PURE__*/
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: "" | Element | undefined; xAxisI... Remove this comment to see the full error message
    _react["default"].createElement(_recharts.XAxis, (0, _extends2["default"])({
      allowDataOverflow: false,
      allowDuplicatedCategory: false,
      orientation: orientation,
      interval: interval,
      ticks: ticks,
      tick: /*#__PURE__*/_react["default"].createElement(Tick, {
        formatter: formatter,
        className: tickClassName,
        textAnchor: textAnchor,
        vertical: vertical,
        maxTickLength: maxTickLength,
        getCustomTick: getCustomTick,
        color: tickTextColor
      })
    }, props), name && /*#__PURE__*/_react["default"].createElement(_recharts.Label, {
      className: labelClassName,
      value: name,
      position: orientation
    }))
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL3gtYXhpcy50c3giXSwibmFtZXMiOlsiU0hJRlQiLCJUSUNLX0ZPTlRfU0laRSIsIllfRk9OVF9TSElGVCIsInJlbmRlclRpY2siLCJwcm9wcyIsIngiLCJ5IiwiY2xhc3NOYW1lIiwidGV4dEFuY2hvciIsInRyYW5zZm9ybSIsInZhbHVlVGV4dCIsImdldEN1c3RvbVRpY2siLCJjb2xvciIsInJlbmRlckNsaXBwZWRUaWNrIiwibWF4VGlja0xlbmd0aCIsInZlcnRpY2FsIiwibWVhc3VyZXMiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwiZm9udFNpemUiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJkeCIsImR5IiwiVGljayIsImluZGV4IiwidmlzaWJsZVRpY2tzQ291bnQiLCJwYXlsb2FkIiwiZm9ybWF0dGVyIiwicmVzdCIsInZhbHVlIiwidGlja1Byb3BzIiwiUmVhY3QiLCJpc1ZhbGlkRWxlbWVudCIsImdldE5pY2tUaWNrcyIsInBvaW50cyIsIm1pblRpY2tDb3VudCIsImxlbiIsImxlbmd0aCIsInJldCIsInN0ZXAiLCJNYXRoIiwiZmxvb3IiLCJpIiwicHVzaCIsInJlbmRlclNpbXBsZVhBeGlzIiwibmFtZSIsImxhYmVsQ2xhc3NOYW1lIiwidGlja0NsYXNzTmFtZSIsInRpY2tDb3VudCIsImludGVydmFsIiwib3JpZW50YXRpb24iLCJ0aWNrVGV4dENvbG9yIiwidGlja3MiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0EsSUFBTUEsS0FBSyxHQUFHQyx1QkFBaUIsQ0FBL0I7QUFDQSxJQUFNQyxZQUFZLEdBQUcsQ0FBckI7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBZ0M7QUFBQSxNQUN0QkMsQ0FEc0IsR0FDMkRELEtBRDNELENBQ3RCQyxDQURzQjtBQUFBLE1BQ25C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WDtBQUZGO0FBd0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFhBeGlzLCBMYWJlbCB9IGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IFRJQ0tfRk9OVF9TSVpFIH0gZnJvbSAnLi4vaGVscGVycy9lbnVtJztcbmltcG9ydCB7IEZvcm1hdHRlckZ1bmMgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgU0hJRlQgPSBUSUNLX0ZPTlRfU0laRSAvIDI7XG5jb25zdCBZX0ZPTlRfU0hJRlQgPSAyO1xuXG5mdW5jdGlvbiByZW5kZXJUaWNrKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyB4LCB5LCBjbGFzc05hbWUgPSAnJywgdGV4dEFuY2hvciwgdHJhbnNmb3JtLCB2YWx1ZVRleHQsIGdldEN1c3RvbVRpY2ssIGNvbG9yIH0gPSBwcm9wcztcbiAgaWYgKGdldEN1c3RvbVRpY2spIHtcbiAgICByZXR1cm4gZ2V0Q3VzdG9tVGljayh7IHgsIHksIHZhbHVlVGV4dCB9KTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3ggLSBTSElGVH0sJHt5ICsgU0hJRlR9KWB9PlxuICAgICAgPHRleHRcbiAgICAgICAgY2xhc3NOYW1lPXtgeC10aWNrICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHg9ezB9XG4gICAgICAgIHk9ezB9XG4gICAgICAgIHRleHRBbmNob3I9e3RleHRBbmNob3J9XG4gICAgICAgIGZvbnRTaXplPXtUSUNLX0ZPTlRfU0laRX1cbiAgICAgICAgdHJhbnNmb3JtPXt0cmFuc2Zvcm19XG4gICAgICAgIGZpbGw9e2NvbG9yID8/ICcjNjY2J31cbiAgICAgID5cbiAgICAgICAge3ZhbHVlVGV4dH1cbiAgICAgIDwvdGV4dD5cbiAgICA8L2c+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNsaXBwZWRUaWNrKHByb3BzOiBhbnksIG1heFRpY2tMZW5ndGg6IGFueSkge1xuICBjb25zdCB7IHgsIHksIGNsYXNzTmFtZSA9ICcnLCB0ZXh0QW5jaG9yLCB0cmFuc2Zvcm0sIHZhbHVlVGV4dCwgdmVydGljYWwsIGNvbG9yIH0gPSBwcm9wcztcbiAgY29uc3QgbWVhc3VyZXMgPSB7XG4gICAgd2lkdGg6IHZlcnRpY2FsID8gbWF4VGlja0xlbmd0aCA6IFRJQ0tfRk9OVF9TSVpFICogMS41LFxuICAgIGhlaWdodDogdmVydGljYWwgPyBUSUNLX0ZPTlRfU0laRSAqIDEuNSA6IG1heFRpY2tMZW5ndGgsXG4gIH07XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHRleHRBbmNob3IsXG4gICAgZm9udFNpemU6IFRJQ0tfRk9OVF9TSVpFLFxuICAgIGNvbG9yOiBjb2xvciA/PyAnIzY2NicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgfTtcbiAgY29uc3QgZHggPSB2ZXJ0aWNhbCA/IFNISUZUIDogMDtcbiAgY29uc3QgZHkgPSBZX0ZPTlRfU0hJRlQ7XG4gIHJldHVybiAoXG4gICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eCArIGR4fSwke3kgKyBkeX0pICR7dHJhbnNmb3JtfWB9PlxuICAgICAgPHN2ZyB7Li4ubWVhc3VyZXN9PlxuICAgICAgICA8cmVjdCB7Li4ubWVhc3VyZXN9IGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgPGZvcmVpZ25PYmplY3QgeD17MH0geT17MH0gey4uLm1lYXN1cmVzfT5cbiAgICAgICAgICB7LyogQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMjIpIEZJWE1FOiBUeXBlICd7IHRleHRBbmNob3I6IGFueTsgZm9udFNpemU6IG51bWJlcjsgY29sb3I6IC4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgeC10aWNrICR7Y2xhc3NOYW1lfWB9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICB7dmFsdWVUZXh0fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+XG4gICAgICA8L3N2Zz5cbiAgICA8L2c+XG4gICk7XG59XG5cbmNvbnN0IFRpY2sgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCB7XG4gICAgaW5kZXgsXG4gICAgd2lkdGgsXG4gICAgdmlzaWJsZVRpY2tzQ291bnQsXG4gICAgeCxcbiAgICB5LFxuICAgIHBheWxvYWQsXG4gICAgZm9ybWF0dGVyLFxuICAgIGNsYXNzTmFtZSxcbiAgICB2ZXJ0aWNhbCxcbiAgICBtYXhUaWNrTGVuZ3RoLFxuICAgIGNvbG9yLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuXG4gIGxldCB7IHRleHRBbmNob3IsIGdldEN1c3RvbVRpY2sgfSA9IHJlc3Q7XG4gIGlmICghdGV4dEFuY2hvcikge1xuICAgIHRleHRBbmNob3IgPSAoKCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnc3RhcnQnO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdmlzaWJsZVRpY2tzQ291bnQgLSAxICYmIHggPj0gd2lkdGggLSAxMDApIHtcbiAgICAgICAgcmV0dXJuICdlbmQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdtaWRkbGUnO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH1cblxuICBjb25zdCB2YWx1ZSA9IHBheWxvYWQudmFsdWU7XG4gIGlmICh2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA9PT0gJ2F1dG8nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdmFsdWVUZXh0ID0gZm9ybWF0dGVyKHZhbHVlLCAndGljaycpO1xuXG4gIGNvbnN0IHRyYW5zZm9ybSA9IHZlcnRpY2FsID8gJ3JvdGF0ZSg5MCknIDogJyc7XG4gIGNvbnN0IHRpY2tQcm9wcyA9IHsgeCwgeSwgY2xhc3NOYW1lLCB0ZXh0QW5jaG9yLCB0cmFuc2Zvcm0sIHZhbHVlVGV4dCwgdmVydGljYWwsIGdldEN1c3RvbVRpY2ssIGNvbG9yIH07XG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudCh2YWx1ZVRleHQpKSB7XG4gICAgcmV0dXJuIHZhbHVlVGV4dDtcbiAgfVxuICBpZiAoIW1heFRpY2tMZW5ndGgpIHtcbiAgICByZXR1cm4gcmVuZGVyVGljayh0aWNrUHJvcHMpO1xuICB9XG4gIHJldHVybiByZW5kZXJDbGlwcGVkVGljayh0aWNrUHJvcHMsIG1heFRpY2tMZW5ndGgpO1xufTtcblxuLyoqXG4gKiBldmVubHkgZGlzdHJpYnV0ZSB0aWNrcyBieSBtaW5UaWNrQ291bnRcbiAqIEBwYXJhbSBwb2ludHMgYXhpcyBwb2ludHNcbiAqIEBwYXJhbSBtaW5UaWNrQ291bnQgYSBudW1iZXIsIGxpa2UgN1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tmlja1RpY2tzKHBvaW50czogYW55W10sIG1pblRpY2tDb3VudDogbnVtYmVyKTogYW55W10ge1xuICBpZiAoIW1pblRpY2tDb3VudCkge1xuICAgIHJldHVybiBwb2ludHM7XG4gIH1cblxuICBjb25zdCBsZW4gPSBwb2ludHMubGVuZ3RoO1xuICBpZiAobGVuIDw9IG1pblRpY2tDb3VudCkge1xuICAgIHJldHVybiBwb2ludHM7XG4gIH1cblxuICBjb25zdCByZXQgPSBbXTtcblxuICBjb25zdCBzdGVwID0gTWF0aC5mbG9vcihsZW4gLyBtaW5UaWNrQ291bnQpO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDw9IGxlbiAtIDEpIHtcbiAgICByZXQucHVzaChwb2ludHNbaV0pO1xuICAgIGkgKz0gc3RlcDtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCB0eXBlIENvbW1vblJlbmRlclhBeGlzQ29uZmlnID0ge1xuICBuYW1lPzogc3RyaW5nO1xuICBsYWJlbENsYXNzTmFtZT86IHN0cmluZztcbn0gJiBPbWl0PFBhcnRpYWw8UmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFhBeGlzPj4sICdwb2ludHMnPjtcblxuZXhwb3J0IHR5cGUgUmVuZGVyU2ltcGxlWEF4aXNDb25maWcgPSBDb21tb25SZW5kZXJYQXhpc0NvbmZpZyAmIHtcbiAgcG9pbnRzPzogYW55W107XG4gIGZvcm1hdHRlcjogRm9ybWF0dGVyRnVuYztcbiAgdGlja0NsYXNzTmFtZT86IHN0cmluZztcbiAgdGlja0NvdW50OiBudW1iZXI7XG4gIHRleHRBbmNob3I/OiBzdHJpbmc7XG4gIHRpY2tUZXh0Q29sb3I/OiBzdHJpbmc7XG4gIHZlcnRpY2FsPzogYm9vbGVhbjtcbiAgbWF4VGlja0xlbmd0aD86IG51bWJlcjtcbiAgZ2V0Q3VzdG9tVGljaz86IChwYXJhbXM6IHsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgdmFsdWVUZXh0Pzogc3RyaW5nIH0pID0+IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaW1wbGVYQXhpcyh7XG4gIG5hbWUsXG4gIGZvcm1hdHRlcixcbiAgbGFiZWxDbGFzc05hbWUsXG4gIHRpY2tDbGFzc05hbWUsXG4gIHRpY2tDb3VudCxcbiAgdGV4dEFuY2hvcixcbiAgaW50ZXJ2YWwsXG4gIHZlcnRpY2FsLFxuICBvcmllbnRhdGlvbixcbiAgbWF4VGlja0xlbmd0aCxcbiAgZ2V0Q3VzdG9tVGljayxcbiAgdGlja1RleHRDb2xvcixcbiAgcG9pbnRzLFxuICAuLi5wcm9wc1xufTogUmVuZGVyU2ltcGxlWEF4aXNDb25maWcpIHtcbiAgaWYgKCF0ZXh0QW5jaG9yKSB7XG4gICAgdGV4dEFuY2hvciA9IHZlcnRpY2FsID8gJ3N0YXJ0JyA6ICdtaWRkbGUnO1xuICB9XG4gIGlmICh0eXBlb2YgaW50ZXJ2YWwgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBpbnRlcnZhbCAhPT0gJ251bWJlcicpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjMyMikgRklYTUU6IFR5cGUgJzAgfCBudWxsJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdudW1iZXIgLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICBpbnRlcnZhbCA9IHZlcnRpY2FsID8gMCA6IG51bGw7XG4gIH1cbiAgY29uc3QgdGlja3MgPSBwb2ludHMgPyBnZXROaWNrVGlja3MocG9pbnRzLCB0aWNrQ291bnQpIDogdW5kZWZpbmVkO1xuICByZXR1cm4gKFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzIyKSBGSVhNRTogVHlwZSAneyBjaGlsZHJlbjogXCJcIiB8IEVsZW1lbnQgfCB1bmRlZmluZWQ7IHhBeGlzSS4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgPFhBeGlzXG4gICAgICBhbGxvd0RhdGFPdmVyZmxvdz17ZmFsc2V9XG4gICAgICBhbGxvd0R1cGxpY2F0ZWRDYXRlZ29yeT17ZmFsc2V9XG4gICAgICBvcmllbnRhdGlvbj17b3JpZW50YXRpb259XG4gICAgICBpbnRlcnZhbD17aW50ZXJ2YWx9XG4gICAgICB0aWNrcz17dGlja3N9XG4gICAgICB0aWNrPXtcbiAgICAgICAgPFRpY2tcbiAgICAgICAgICBmb3JtYXR0ZXI9e2Zvcm1hdHRlcn1cbiAgICAgICAgICBjbGFzc05hbWU9e3RpY2tDbGFzc05hbWV9XG4gICAgICAgICAgdGV4dEFuY2hvcj17dGV4dEFuY2hvcn1cbiAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICAgICAgbWF4VGlja0xlbmd0aD17bWF4VGlja0xlbmd0aH1cbiAgICAgICAgICBnZXRDdXN0b21UaWNrPXtnZXRDdXN0b21UaWNrfVxuICAgICAgICAgIGNvbG9yPXt0aWNrVGV4dENvbG9yfVxuICAgICAgICAvPlxuICAgICAgfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtuYW1lICYmIDxMYWJlbCBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfSB2YWx1ZT17bmFtZX0gcG9zaXRpb249e29yaWVudGF0aW9ufSAvPn1cbiAgICA8L1hBeGlzPlxuICApO1xufVxuIl19