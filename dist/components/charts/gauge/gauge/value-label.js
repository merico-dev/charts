"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = ValueLabel;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _lodash = require("lodash");

var _react = _interopRequireWildcard(require("react"));

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var ValueLabelContainer = (0, _styledBase["default"])("div", {
  target: "e1azxe460",
  label: "ValueLabelContainer"
})(process.env.NODE_ENV === "production" ? {
  name: "1hdkwv3",
  styles: "display:table;width:auto;margin:0 auto;text-align:center;"
} : {
  name: "1hdkwv3",
  styles: "display:table;width:auto;margin:0 auto;text-align:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS92YWx1ZS1sYWJlbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXNDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS92YWx1ZS1sYWJlbC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBmaW5kSW5kZXggfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFZhbHVlTGFiZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBEZWZhdWx0VmFsdWVMYWJlbCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZnVuY3Rpb24gZGVmYXVsdFZhbHVlTGFiZWxSZW5kZXJlcih7IHZhbHVlLCBzZWdtZW50TGFiZWwgfTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPERlZmF1bHRWYWx1ZUxhYmVsPlxuICAgICAge3NlZ21lbnRMYWJlbCAmJiAoXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBzZWdtZW50TGFiZWwuY29sb3IgfX0+XG4gICAgICAgICAge3NlZ21lbnRMYWJlbC50ZXh0fVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuICAgICAge3ZhbHVlfVxuICAgIDwvRGVmYXVsdFZhbHVlTGFiZWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhbHVlTGFiZWwoe1xuICB2YWx1ZSxcbiAgc2VnbWVudHMsXG4gIHNlZ21lbnRMYWJlbHMsXG4gIGNvbG9ycyxcbiAgcmVuZGVyVmFsdWVMYWJlbCA9IGRlZmF1bHRWYWx1ZUxhYmVsUmVuZGVyZXIsXG59OiBhbnkpIHtcbiAgY29uc3QgbGFiZWxQcm9wcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHNlZ21lbnRzLmxlbmd0aCAtIDI7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXgoc2VnbWVudHMsIChzLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnQgPSBzO1xuICAgICAgY29uc3QgZW5kID0gc2VnbWVudHNbaSArIDFdO1xuICAgICAgLy8gdHJ1ZSBpZiB2YWx1ZSBpbiBbc3RhcnQsIGVuZClcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTcxKSBGSVhNRTogT2JqZWN0IGlzIG9mIHR5cGUgJ3Vua25vd24nLlxuICAgICAgcmV0dXJuIHN0YXJ0IDw9IHZhbHVlICYmIHZhbHVlIDwgZW5kO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHNlZ21lbnRTdGFydDogc2VnbWVudHNbaW5kZXhdLFxuICAgICAgc2VnbWVudENvbG9yOiBjb2xvcnNbaW5kZXhdLFxuICAgICAgc2VnbWVudExhYmVsOiBzZWdtZW50TGFiZWxzW2luZGV4XSxcbiAgICB9O1xuICB9LCBbdmFsdWUsIHNlZ21lbnRzLCBjb2xvcnNdKTtcblxuICByZXR1cm4gPFZhbHVlTGFiZWxDb250YWluZXIgY2xhc3NOYW1lPVwidmFsdWUtbGFiZWxcIj57cmVuZGVyVmFsdWVMYWJlbChsYWJlbFByb3BzKX08L1ZhbHVlTGFiZWxDb250YWluZXI+O1xufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var DefaultValueLabel = (0, _styledBase["default"])("div", {
  target: "e1azxe461",
  label: "DefaultValueLabel"
})(process.env.NODE_ENV === "production" ? {
  name: "17busxr",
  styles: "font-size:14px;text-align:center;"
} : {
  name: "17busxr",
  styles: "font-size:14px;text-align:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS92YWx1ZS1sYWJlbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV29DIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS92YWx1ZS1sYWJlbC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBmaW5kSW5kZXggfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFZhbHVlTGFiZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBEZWZhdWx0VmFsdWVMYWJlbCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZnVuY3Rpb24gZGVmYXVsdFZhbHVlTGFiZWxSZW5kZXJlcih7IHZhbHVlLCBzZWdtZW50TGFiZWwgfTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPERlZmF1bHRWYWx1ZUxhYmVsPlxuICAgICAge3NlZ21lbnRMYWJlbCAmJiAoXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBzZWdtZW50TGFiZWwuY29sb3IgfX0+XG4gICAgICAgICAge3NlZ21lbnRMYWJlbC50ZXh0fVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuICAgICAge3ZhbHVlfVxuICAgIDwvRGVmYXVsdFZhbHVlTGFiZWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhbHVlTGFiZWwoe1xuICB2YWx1ZSxcbiAgc2VnbWVudHMsXG4gIHNlZ21lbnRMYWJlbHMsXG4gIGNvbG9ycyxcbiAgcmVuZGVyVmFsdWVMYWJlbCA9IGRlZmF1bHRWYWx1ZUxhYmVsUmVuZGVyZXIsXG59OiBhbnkpIHtcbiAgY29uc3QgbGFiZWxQcm9wcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHNlZ21lbnRzLmxlbmd0aCAtIDI7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXgoc2VnbWVudHMsIChzLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnQgPSBzO1xuICAgICAgY29uc3QgZW5kID0gc2VnbWVudHNbaSArIDFdO1xuICAgICAgLy8gdHJ1ZSBpZiB2YWx1ZSBpbiBbc3RhcnQsIGVuZClcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTcxKSBGSVhNRTogT2JqZWN0IGlzIG9mIHR5cGUgJ3Vua25vd24nLlxuICAgICAgcmV0dXJuIHN0YXJ0IDw9IHZhbHVlICYmIHZhbHVlIDwgZW5kO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHNlZ21lbnRTdGFydDogc2VnbWVudHNbaW5kZXhdLFxuICAgICAgc2VnbWVudENvbG9yOiBjb2xvcnNbaW5kZXhdLFxuICAgICAgc2VnbWVudExhYmVsOiBzZWdtZW50TGFiZWxzW2luZGV4XSxcbiAgICB9O1xuICB9LCBbdmFsdWUsIHNlZ21lbnRzLCBjb2xvcnNdKTtcblxuICByZXR1cm4gPFZhbHVlTGFiZWxDb250YWluZXIgY2xhc3NOYW1lPVwidmFsdWUtbGFiZWxcIj57cmVuZGVyVmFsdWVMYWJlbChsYWJlbFByb3BzKX08L1ZhbHVlTGFiZWxDb250YWluZXI+O1xufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

function defaultValueLabelRenderer(_ref) {
  var value = _ref.value,
      segmentLabel = _ref.segmentLabel;
  return /*#__PURE__*/_react["default"].createElement(DefaultValueLabel, null, segmentLabel && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: segmentLabel.color
    }
  }, segmentLabel.text, /*#__PURE__*/_react["default"].createElement("br", null)), value);
}

function ValueLabel(_ref2) {
  var value = _ref2.value,
      segments = _ref2.segments,
      segmentLabels = _ref2.segmentLabels,
      colors = _ref2.colors,
      _ref2$renderValueLabe = _ref2.renderValueLabel,
      renderValueLabel = _ref2$renderValueLabe === void 0 ? defaultValueLabelRenderer : _ref2$renderValueLabe;
  var labelProps = (0, _react.useMemo)(function () {
    var lastIndex = segments.length - 2;
    var index = (0, _lodash.findIndex)(segments, function (s, i) {
      if (i === lastIndex) {
        return true;
      }

      var start = s;
      var end = segments[i + 1]; // true if value in [start, end)
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.

      return start <= value && value < end;
    });
    return {
      value: value,
      segmentStart: segments[index],
      segmentColor: colors[index],
      segmentLabel: segmentLabels[index]
    };
  }, [value, segments, colors]);
  return /*#__PURE__*/_react["default"].createElement(ValueLabelContainer, {
    className: "value-label"
  }, renderValueLabel(labelProps));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS92YWx1ZS1sYWJlbC50c3giXSwibmFtZXMiOlsiVmFsdWVMYWJlbENvbnRhaW5lciIsIkRlZmF1bHRWYWx1ZUxhYmVsIiwiZGVmYXVsdFZhbHVlTGFiZWxSZW5kZXJlciIsInZhbHVlIiwic2VnbWVudExhYmVsIiwiY29sb3IiLCJ0ZXh0IiwiVmFsdWVMYWJlbCIsInNlZ21lbnRzIiwic2VnbWVudExhYmVscyIsImNvbG9ycyIsInJlbmRlclZhbHVlTGFiZWwiLCJsYWJlbFByb3BzIiwibGFzdEluZGV4IiwibGVuZ3RoIiwiaW5kZXgiLCJzIiwiaSIsInN0YXJ0IiwiZW5kIiwic2VnbWVudFN0YXJ0Iiwic2VnbWVudENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxtQkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXpCO0FBT0EsSUFBTUMsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUF2Qjs7QUFLQSxTQUFTQyx5QkFBVCxPQUFpRTtBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkMsWUFBcUIsUUFBckJBLFlBQXFCO0FBQy9ELHNCQUNFLGdDQUFDLGlCQUFELFFBQ0dBLFlBQVksaUJBQ1g7QUFBTSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUVELFlBQVksQ0FBQ0M7QUFBdEI7QUFBYixLQUNHRCxZQUFZLENBQUNFLElBRGhCLGVBRUUsMkNBRkYsQ0FGSixFQU9HSCxLQVBILENBREY7QUFXRDs7QUFFYyxTQUFTSSxVQUFULFFBTVA7QUFBQSxNQUxOSixLQUtNLFNBTE5BLEtBS007QUFBQSxNQUpOSyxRQUlNLFNBSk5BLFFBSU07QUFBQSxNQUhOQyxhQUdNLFNBSE5BLGFBR007QUFBQSxNQUZOQyxNQUVNLFNBRk5BLE1BRU07QUFBQSxvQ0FETkMsZ0JBQ007QUFBQSxNQUROQSxnQkFDTSxzQ0FEYVQseUJBQ2I7QUFDTixNQUFNVSxVQUFVLEdBQUcsb0JBQVEsWUFBTTtBQUMvQixRQUFNQyxTQUFTLEdBQUdMLFFBQVEsQ0FBQ00sTUFBVCxHQUFrQixDQUFwQztBQUNBLFFBQU1DLEtBQUssR0FBRyx1QkFBVVAsUUFBVixFQUFvQixVQUFDUSxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMxQyxVQUFJQSxDQUFDLEtBQUtKLFNBQVYsRUFBcUI7QUFDbkIsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsVUFBTUssS0FBSyxHQUFHRixDQUFkO0FBQ0EsVUFBTUcsR0FBRyxHQUFHWCxRQUFRLENBQUNTLENBQUMsR0FBRyxDQUFMLENBQXBCLENBTDBDLENBTTFDO0FBQ0E7O0FBQ0EsYUFBT0MsS0FBSyxJQUFJZixLQUFULElBQWtCQSxLQUFLLEdBQUdnQixHQUFqQztBQUNELEtBVGEsQ0FBZDtBQVVBLFdBQU87QUFDTGhCLE1BQUFBLEtBQUssRUFBTEEsS0FESztBQUVMaUIsTUFBQUEsWUFBWSxFQUFFWixRQUFRLENBQUNPLEtBQUQsQ0FGakI7QUFHTE0sTUFBQUEsWUFBWSxFQUFFWCxNQUFNLENBQUNLLEtBQUQsQ0FIZjtBQUlMWCxNQUFBQSxZQUFZLEVBQUVLLGFBQWEsQ0FBQ00sS0FBRDtBQUp0QixLQUFQO0FBTUQsR0FsQmtCLEVBa0JoQixDQUFDWixLQUFELEVBQVFLLFFBQVIsRUFBa0JFLE1BQWxCLENBbEJnQixDQUFuQjtBQW9CQSxzQkFBTyxnQ0FBQyxtQkFBRDtBQUFxQixJQUFBLFNBQVMsRUFBQztBQUEvQixLQUE4Q0MsZ0JBQWdCLENBQUNDLFVBQUQsQ0FBOUQsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgZmluZEluZGV4IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBWYWx1ZUxhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuY29uc3QgRGVmYXVsdFZhbHVlTGFiZWwgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmZ1bmN0aW9uIGRlZmF1bHRWYWx1ZUxhYmVsUmVuZGVyZXIoeyB2YWx1ZSwgc2VnbWVudExhYmVsIH06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0VmFsdWVMYWJlbD5cbiAgICAgIHtzZWdtZW50TGFiZWwgJiYgKFxuICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogc2VnbWVudExhYmVsLmNvbG9yIH19PlxuICAgICAgICAgIHtzZWdtZW50TGFiZWwudGV4dH1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKX1cbiAgICAgIHt2YWx1ZX1cbiAgICA8L0RlZmF1bHRWYWx1ZUxhYmVsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWYWx1ZUxhYmVsKHtcbiAgdmFsdWUsXG4gIHNlZ21lbnRzLFxuICBzZWdtZW50TGFiZWxzLFxuICBjb2xvcnMsXG4gIHJlbmRlclZhbHVlTGFiZWwgPSBkZWZhdWx0VmFsdWVMYWJlbFJlbmRlcmVyLFxufTogYW55KSB7XG4gIGNvbnN0IGxhYmVsUHJvcHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBsYXN0SW5kZXggPSBzZWdtZW50cy5sZW5ndGggLSAyO1xuICAgIGNvbnN0IGluZGV4ID0gZmluZEluZGV4KHNlZ21lbnRzLCAocywgaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IGxhc3RJbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXJ0ID0gcztcbiAgICAgIGNvbnN0IGVuZCA9IHNlZ21lbnRzW2kgKyAxXTtcbiAgICAgIC8vIHRydWUgaWYgdmFsdWUgaW4gW3N0YXJ0LCBlbmQpXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjU3MSkgRklYTUU6IE9iamVjdCBpcyBvZiB0eXBlICd1bmtub3duJy5cbiAgICAgIHJldHVybiBzdGFydCA8PSB2YWx1ZSAmJiB2YWx1ZSA8IGVuZDtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWUsXG4gICAgICBzZWdtZW50U3RhcnQ6IHNlZ21lbnRzW2luZGV4XSxcbiAgICAgIHNlZ21lbnRDb2xvcjogY29sb3JzW2luZGV4XSxcbiAgICAgIHNlZ21lbnRMYWJlbDogc2VnbWVudExhYmVsc1tpbmRleF0sXG4gICAgfTtcbiAgfSwgW3ZhbHVlLCBzZWdtZW50cywgY29sb3JzXSk7XG5cbiAgcmV0dXJuIDxWYWx1ZUxhYmVsQ29udGFpbmVyIGNsYXNzTmFtZT1cInZhbHVlLWxhYmVsXCI+e3JlbmRlclZhbHVlTGFiZWwobGFiZWxQcm9wcyl9PC9WYWx1ZUxhYmVsQ29udGFpbmVyPjtcbn1cbiJdfQ==