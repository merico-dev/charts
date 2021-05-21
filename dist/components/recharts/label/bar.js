"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getBarLabelRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

var _enum = require("../../helpers/enum");

var getBarLabelRenderer = function getBarLabelRenderer(transposed, formatter, conf) {
  var enabled = conf.enabled,
      _conf$fill = conf.fill,
      fill = _conf$fill === void 0 ? '#666' : _conf$fill,
      _conf$fontSize = conf.fontSize,
      fontSize = _conf$fontSize === void 0 ? _enum.TICK_FONT_SIZE : _conf$fontSize,
      _conf$dominantBaselin = conf.dominantBaseline,
      dominantBaseline = _conf$dominantBaselin === void 0 ? 'middle' : _conf$dominantBaselin,
      _conf$position = conf.position,
      position = _conf$position === void 0 ? 'outsideTop' : _conf$position;
  return function barLabelRenderer(props) {
    if (!enabled) {
      return null;
    }

    var x = props.x,
        y = props.y,
        width = props.width,
        height = props.height,
        value = props.value;
    var textAnchor = transposed ? 'start' : 'middle';
    var dx = transposed ? fontSize / 2 : width / 2;
    var dy = transposed ? height / 2 : -fontSize / 2;
    var dySign = 1;

    if (!transposed && position === 'outsideBottom') {
      dySign = -1;
    }

    var xNeedShift = transposed;
    var xWithShift = xNeedShift ? x + width : x;
    return /*#__PURE__*/_react["default"].createElement("g", {
      transform: "translate(".concat(xWithShift, ",").concat(y, ")")
    }, /*#__PURE__*/_react["default"].createElement("text", {
      x: 0,
      y: 0,
      dx: dx,
      dy: dy * dySign,
      fill: fill,
      textAnchor: textAnchor,
      dominantBaseline: dominantBaseline,
      fontSize: fontSize
    }, formatter(value)));
  };
};

exports.getBarLabelRenderer = getBarLabelRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL2xhYmVsL2Jhci50c3giXSwibmFtZXMiOlsiZ2V0QmFyTGFiZWxSZW5kZXJlciIsInRyYW5zcG9zZWQiLCJmb3JtYXR0ZXIiLCJjb25mIiwiZW5hYmxlZCIsImZpbGwiLCJmb250U2l6ZSIsIlRJQ0tfRk9OVF9TSVpFIiwiZG9taW5hbnRCYXNlbGluZSIsInBvc2l0aW9uIiwiYmFyTGFiZWxSZW5kZXJlciIsInByb3BzIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInZhbHVlIiwidGV4dEFuY2hvciIsImR4IiwiZHkiLCJkeVNpZ24iLCJ4TmVlZFNoaWZ0IiwieFdpdGhTaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRU8sSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxVQUFELEVBQWtCQyxTQUFsQixFQUFrQ0MsSUFBbEMsRUFBZ0Q7QUFBQSxNQUUvRUMsT0FGK0UsR0FPN0VELElBUDZFLENBRS9FQyxPQUYrRTtBQUFBLG1CQU83RUQsSUFQNkUsQ0FHL0VFLElBSCtFO0FBQUEsTUFHL0VBLElBSCtFLDJCQUd4RSxNQUh3RTtBQUFBLHVCQU83RUYsSUFQNkUsQ0FJL0VHLFFBSitFO0FBQUEsTUFJL0VBLFFBSitFLCtCQUlwRUMsb0JBSm9FO0FBQUEsOEJBTzdFSixJQVA2RSxDQUsvRUssZ0JBTCtFO0FBQUEsTUFLL0VBLGdCQUwrRSxzQ0FLNUQsUUFMNEQ7QUFBQSx1QkFPN0VMLElBUDZFLENBTS9FTSxRQU4rRTtBQUFBLE1BTS9FQSxRQU4rRSwrQkFNcEUsWUFOb0U7QUFTakYsU0FBTyxTQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBc0M7QUFDM0MsUUFBSSxDQUFDUCxPQUFMLEVBQWM7QUFDWixhQUFPLElBQVA7QUFDRDs7QUFIMEMsUUFJbkNRLENBSm1DLEdBSUpELEtBSkksQ0FJbkNDLENBSm1DO0FBQUEsUUFJaENDLENBSmdDLEdBSUpGLEtBSkksQ0FJaENFLENBSmdDO0FBQUEsUUFJN0JDLEtBSjZCLEdBSUpILEtBSkksQ0FJN0JHLEtBSjZCO0FBQUEsUUFJdEJDLE1BSnNCLEdBSUpKLEtBSkksQ0FJdEJJLE1BSnNCO0FBQUEsUUFJZEMsS0FKYyxHQUlKTCxLQUpJLENBSWRLLEtBSmM7QUFLM0MsUUFBTUMsVUFBVSxHQUFHaEIsVUFBVSxHQUFHLE9BQUgsR0FBYSxRQUExQztBQUNBLFFBQU1pQixFQUFFLEdBQUdqQixVQUFVLEdBQUdLLFFBQVEsR0FBRyxDQUFkLEdBQWtCUSxLQUFLLEdBQUcsQ0FBL0M7QUFDQSxRQUFNSyxFQUFFLEdBQUdsQixVQUFVLEdBQUdjLE1BQU0sR0FBRyxDQUFaLEdBQWdCLENBQUNULFFBQUQsR0FBWSxDQUFqRDtBQUNBLFFBQUljLE1BQU0sR0FBRyxDQUFiOztBQUNBLFFBQUksQ0FBQ25CLFVBQUQsSUFBZVEsUUFBUSxLQUFLLGVBQWhDLEVBQWlEO0FBQy9DVyxNQUFBQSxNQUFNLEdBQUcsQ0FBQyxDQUFWO0FBQ0Q7O0FBRUQsUUFBTUMsVUFBVSxHQUFHcEIsVUFBbkI7QUFDQSxRQUFNcUIsVUFBVSxHQUFHRCxVQUFVLEdBQUdULENBQUMsR0FBR0UsS0FBUCxHQUFlRixDQUE1QztBQUVBLHdCQUNFO0FBQUcsTUFBQSxTQUFTLHNCQUFlVSxVQUFmLGNBQTZCVCxDQUE3QjtBQUFaLG9CQUNFO0FBQ0UsTUFBQSxDQUFDLEVBQUUsQ0FETDtBQUVFLE1BQUEsQ0FBQyxFQUFFLENBRkw7QUFHRSxNQUFBLEVBQUUsRUFBRUssRUFITjtBQUlFLE1BQUEsRUFBRSxFQUFFQyxFQUFFLEdBQUdDLE1BSlg7QUFLRSxNQUFBLElBQUksRUFBRWYsSUFMUjtBQU1FLE1BQUEsVUFBVSxFQUFFWSxVQU5kO0FBT0UsTUFBQSxnQkFBZ0IsRUFBRVQsZ0JBUHBCO0FBUUUsTUFBQSxRQUFRLEVBQUVGO0FBUlosT0FVR0osU0FBUyxDQUFDYyxLQUFELENBVlosQ0FERixDQURGO0FBZ0JELEdBaENEO0FBaUNELENBMUNNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRJQ0tfRk9OVF9TSVpFIH0gZnJvbSAnLi4vLi4vaGVscGVycy9lbnVtJztcblxuZXhwb3J0IGNvbnN0IGdldEJhckxhYmVsUmVuZGVyZXIgPSAodHJhbnNwb3NlZDogYW55LCBmb3JtYXR0ZXI6IGFueSwgY29uZjogYW55KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBlbmFibGVkLFxuICAgIGZpbGwgPSAnIzY2NicsXG4gICAgZm9udFNpemUgPSBUSUNLX0ZPTlRfU0laRSxcbiAgICBkb21pbmFudEJhc2VsaW5lID0gJ21pZGRsZScsXG4gICAgcG9zaXRpb24gPSAnb3V0c2lkZVRvcCcsXG4gIH0gPSBjb25mO1xuXG4gIHJldHVybiBmdW5jdGlvbiBiYXJMYWJlbFJlbmRlcmVyKHByb3BzOiBhbnkpIHtcbiAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIHZhbHVlIH0gPSBwcm9wcztcbiAgICBjb25zdCB0ZXh0QW5jaG9yID0gdHJhbnNwb3NlZCA/ICdzdGFydCcgOiAnbWlkZGxlJztcbiAgICBjb25zdCBkeCA9IHRyYW5zcG9zZWQgPyBmb250U2l6ZSAvIDIgOiB3aWR0aCAvIDI7XG4gICAgY29uc3QgZHkgPSB0cmFuc3Bvc2VkID8gaGVpZ2h0IC8gMiA6IC1mb250U2l6ZSAvIDI7XG4gICAgbGV0IGR5U2lnbiA9IDE7XG4gICAgaWYgKCF0cmFuc3Bvc2VkICYmIHBvc2l0aW9uID09PSAnb3V0c2lkZUJvdHRvbScpIHtcbiAgICAgIGR5U2lnbiA9IC0xO1xuICAgIH1cblxuICAgIGNvbnN0IHhOZWVkU2hpZnQgPSB0cmFuc3Bvc2VkO1xuICAgIGNvbnN0IHhXaXRoU2hpZnQgPSB4TmVlZFNoaWZ0ID8geCArIHdpZHRoIDogeDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt4V2l0aFNoaWZ0fSwke3l9KWB9PlxuICAgICAgICA8dGV4dFxuICAgICAgICAgIHg9ezB9XG4gICAgICAgICAgeT17MH1cbiAgICAgICAgICBkeD17ZHh9XG4gICAgICAgICAgZHk9e2R5ICogZHlTaWdufVxuICAgICAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICAgICAgdGV4dEFuY2hvcj17dGV4dEFuY2hvcn1cbiAgICAgICAgICBkb21pbmFudEJhc2VsaW5lPXtkb21pbmFudEJhc2VsaW5lfVxuICAgICAgICAgIGZvbnRTaXplPXtmb250U2l6ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtmb3JtYXR0ZXIodmFsdWUpfVxuICAgICAgICA8L3RleHQ+XG4gICAgICA8L2c+XG4gICAgKTtcbiAgfTtcbn07XG4iXX0=