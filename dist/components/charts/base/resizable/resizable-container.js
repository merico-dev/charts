"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = WrapperCard;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _resizableContainer = require("./resizable-container.styled");

function SizeIndicator(_ref) {
  var width = _ref.width,
      height = _ref.height,
      setWidth = _ref.setWidth,
      setHeight = _ref.setHeight;
  return /*#__PURE__*/_react["default"].createElement(_resizableContainer.ResizableSizeIndicator, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, {
    type: "number",
    min: 100,
    max: 10000,
    step: 1,
    value: width,
    onChange: setWidth
  }), /*#__PURE__*/_react["default"].createElement("span", null, "x"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, {
    type: "number",
    min: 100,
    max: 10000,
    step: 1,
    value: height,
    onChange: setHeight
  }));
}

function ResizableContainer(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      setWidth = _ref2.setWidth,
      setHeight = _ref2.setHeight,
      children = _ref2.children;

  var onResize = function onResize(_event, _ref3) {
    var _ref3$size = _ref3.size,
        width = _ref3$size.width,
        height = _ref3$size.height;
    setWidth(width);
    setHeight(height);
  };

  return /*#__PURE__*/_react["default"].createElement(_resizableContainer.ResizableContainerWrapper, null, /*#__PURE__*/_react["default"].createElement(_resizableContainer.StyledResizable, {
    width: width,
    height: height,
    onResize: onResize,
    resizeHandles: ['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']
  }, /*#__PURE__*/_react["default"].createElement(_resizableContainer.ResizableContainerWrapper, {
    style: {
      width: "".concat(width, "px"),
      height: "".concat(height, "px")
    }
  }, children)));
}

function WrapperCard(_ref4) {
  var _ref4$initialWidth = _ref4.initialWidth,
      initialWidth = _ref4$initialWidth === void 0 ? 800 : _ref4$initialWidth,
      _ref4$initialHeight = _ref4.initialHeight,
      initialHeight = _ref4$initialHeight === void 0 ? 600 : _ref4$initialHeight,
      children = _ref4.children;

  var _useState = (0, _react.useState)(initialWidth),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(initialHeight),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var commonProps = {
    width: width,
    height: height,
    setWidth: setWidth,
    setHeight: setHeight
  };
  return /*#__PURE__*/_react["default"].createElement(_resizableContainer.ResizableCard, null, /*#__PURE__*/_react["default"].createElement(_resizableContainer.ResizableCardTitle, null, /*#__PURE__*/_react["default"].createElement(SizeIndicator, commonProps)), /*#__PURE__*/_react["default"].createElement(_resizableContainer.ResizableCardContent, null, /*#__PURE__*/_react["default"].createElement(ResizableContainer, commonProps, children)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL3Jlc2l6YWJsZS9yZXNpemFibGUtY29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJTaXplSW5kaWNhdG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsIlJlc2l6YWJsZUNvbnRhaW5lciIsImNoaWxkcmVuIiwib25SZXNpemUiLCJfZXZlbnQiLCJzaXplIiwiV3JhcHBlckNhcmQiLCJpbml0aWFsV2lkdGgiLCJpbml0aWFsSGVpZ2h0IiwiY29tbW9uUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFTQSxTQUFTQSxhQUFULE9BQW9FO0FBQUEsTUFBM0NDLEtBQTJDLFFBQTNDQSxLQUEyQztBQUFBLE1BQXBDQyxNQUFvQyxRQUFwQ0EsTUFBb0M7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFNBQWtCLFFBQWxCQSxTQUFrQjtBQUNsRSxzQkFDRSxnQ0FBQywwQ0FBRCxxQkFDRSxnQ0FBQyxzQkFBRDtBQUFPLElBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsSUFBQSxHQUFHLEVBQUUsR0FBMUI7QUFBK0IsSUFBQSxHQUFHLEVBQUUsS0FBcEM7QUFBMkMsSUFBQSxJQUFJLEVBQUUsQ0FBakQ7QUFBb0QsSUFBQSxLQUFLLEVBQUVILEtBQTNEO0FBQWtFLElBQUEsUUFBUSxFQUFFRTtBQUE1RSxJQURGLGVBRUUsa0RBRkYsZUFHRSxnQ0FBQyxzQkFBRDtBQUFPLElBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsSUFBQSxHQUFHLEVBQUUsR0FBMUI7QUFBK0IsSUFBQSxHQUFHLEVBQUUsS0FBcEM7QUFBMkMsSUFBQSxJQUFJLEVBQUUsQ0FBakQ7QUFBb0QsSUFBQSxLQUFLLEVBQUVELE1BQTNEO0FBQW1FLElBQUEsUUFBUSxFQUFFRTtBQUE3RSxJQUhGLENBREY7QUFPRDs7QUFDRCxTQUFTQyxrQkFBVCxRQUFtRjtBQUFBLE1BQXJESixLQUFxRCxTQUFyREEsS0FBcUQ7QUFBQSxNQUE5Q0MsTUFBOEMsU0FBOUNBLE1BQThDO0FBQUEsTUFBdENDLFFBQXNDLFNBQXRDQSxRQUFzQztBQUFBLE1BQTVCQyxTQUE0QixTQUE1QkEsU0FBNEI7QUFBQSxNQUFqQkUsUUFBaUIsU0FBakJBLFFBQWlCOztBQUNqRixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELFNBQWdGO0FBQUEsMkJBQWhEQyxJQUFnRDtBQUFBLFFBQXhDUixLQUF3QyxjQUF4Q0EsS0FBd0M7QUFBQSxRQUFqQ0MsTUFBaUMsY0FBakNBLE1BQWlDO0FBQy9GQyxJQUFBQSxRQUFRLENBQUNGLEtBQUQsQ0FBUjtBQUNBRyxJQUFBQSxTQUFTLENBQUNGLE1BQUQsQ0FBVDtBQUNELEdBSEQ7O0FBSUEsc0JBQ0UsZ0NBQUMsNkNBQUQscUJBQ0UsZ0NBQUMsbUNBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRUQsS0FEVDtBQUVFLElBQUEsTUFBTSxFQUFFQyxNQUZWO0FBR0UsSUFBQSxRQUFRLEVBQUVLLFFBSFo7QUFJRSxJQUFBLGFBQWEsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxHQUFuQyxFQUF3QyxHQUF4QztBQUpqQixrQkFNRSxnQ0FBQyw2Q0FBRDtBQUEyQixJQUFBLEtBQUssRUFBRTtBQUFFTixNQUFBQSxLQUFLLFlBQUtBLEtBQUwsT0FBUDtBQUF1QkMsTUFBQUEsTUFBTSxZQUFLQSxNQUFMO0FBQTdCO0FBQWxDLEtBQ0dJLFFBREgsQ0FORixDQURGLENBREY7QUFjRDs7QUFFYyxTQUFTSSxXQUFULFFBQWlGO0FBQUEsaUNBQTFEQyxZQUEwRDtBQUFBLE1BQTFEQSxZQUEwRCxtQ0FBM0MsR0FBMkM7QUFBQSxrQ0FBdENDLGFBQXNDO0FBQUEsTUFBdENBLGFBQXNDLG9DQUF0QixHQUFzQjtBQUFBLE1BQWpCTixRQUFpQixTQUFqQkEsUUFBaUI7O0FBQUEsa0JBQ3BFLHFCQUFTSyxZQUFULENBRG9FO0FBQUE7QUFBQSxNQUN2RlYsS0FEdUY7QUFBQSxNQUNoRkUsUUFEZ0Y7O0FBQUEsbUJBRWxFLHFCQUFTUyxhQUFULENBRmtFO0FBQUE7QUFBQSxNQUV2RlYsTUFGdUY7QUFBQSxNQUUvRUUsU0FGK0U7O0FBRzlGLE1BQU1TLFdBQVcsR0FBRztBQUFFWixJQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU0MsSUFBQUEsTUFBTSxFQUFOQSxNQUFUO0FBQWlCQyxJQUFBQSxRQUFRLEVBQVJBLFFBQWpCO0FBQTJCQyxJQUFBQSxTQUFTLEVBQVRBO0FBQTNCLEdBQXBCO0FBQ0Esc0JBQ0UsZ0NBQUMsaUNBQUQscUJBQ0UsZ0NBQUMsc0NBQUQscUJBQ0UsZ0NBQUMsYUFBRCxFQUFtQlMsV0FBbkIsQ0FERixDQURGLGVBSUUsZ0NBQUMsd0NBQUQscUJBQ0UsZ0NBQUMsa0JBQUQsRUFBd0JBLFdBQXhCLEVBQXNDUCxRQUF0QyxDQURGLENBSkYsQ0FERjtBQVVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmltcG9ydCB7XG4gIFJlc2l6YWJsZVNpemVJbmRpY2F0b3IsXG4gIFJlc2l6YWJsZUNvbnRhaW5lcldyYXBwZXIsXG4gIFN0eWxlZFJlc2l6YWJsZSxcbiAgUmVzaXphYmxlQ2FyZFRpdGxlLFxuICBSZXNpemFibGVDYXJkQ29udGVudCxcbiAgUmVzaXphYmxlQ2FyZCxcbn0gZnJvbSAnLi9yZXNpemFibGUtY29udGFpbmVyLnN0eWxlZCc7XG5cbmZ1bmN0aW9uIFNpemVJbmRpY2F0b3IoeyB3aWR0aCwgaGVpZ2h0LCBzZXRXaWR0aCwgc2V0SGVpZ2h0IH06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxSZXNpemFibGVTaXplSW5kaWNhdG9yPlxuICAgICAgPElucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49ezEwMH0gbWF4PXsxMDAwMH0gc3RlcD17MX0gdmFsdWU9e3dpZHRofSBvbkNoYW5nZT17c2V0V2lkdGh9IC8+XG4gICAgICA8c3Bhbj54PC9zcGFuPlxuICAgICAgPElucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49ezEwMH0gbWF4PXsxMDAwMH0gc3RlcD17MX0gdmFsdWU9e2hlaWdodH0gb25DaGFuZ2U9e3NldEhlaWdodH0gLz5cbiAgICA8L1Jlc2l6YWJsZVNpemVJbmRpY2F0b3I+XG4gICk7XG59XG5mdW5jdGlvbiBSZXNpemFibGVDb250YWluZXIoeyB3aWR0aCwgaGVpZ2h0LCBzZXRXaWR0aCwgc2V0SGVpZ2h0LCBjaGlsZHJlbiB9OiBhbnkpIHtcbiAgY29uc3Qgb25SZXNpemUgPSAoX2V2ZW50OiBhbnksIHsgLyogZWxlbWVudCAsICovIHNpemU6IHsgd2lkdGgsIGhlaWdodCB9IC8qIGhhbmRsZSAqLyB9OiBhbnkpID0+IHtcbiAgICBzZXRXaWR0aCh3aWR0aCk7XG4gICAgc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFJlc2l6YWJsZUNvbnRhaW5lcldyYXBwZXI+XG4gICAgICA8U3R5bGVkUmVzaXphYmxlXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIG9uUmVzaXplPXtvblJlc2l6ZX1cbiAgICAgICAgcmVzaXplSGFuZGxlcz17WydzdycsICdzZScsICdudycsICduZScsICd3JywgJ2UnLCAnbicsICdzJ119XG4gICAgICA+XG4gICAgICAgIDxSZXNpemFibGVDb250YWluZXJXcmFwcGVyIHN0eWxlPXt7IHdpZHRoOiBgJHt3aWR0aH1weGAsIGhlaWdodDogYCR7aGVpZ2h0fXB4YCB9fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUmVzaXphYmxlQ29udGFpbmVyV3JhcHBlcj5cbiAgICAgIDwvU3R5bGVkUmVzaXphYmxlPlxuICAgIDwvUmVzaXphYmxlQ29udGFpbmVyV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlckNhcmQoeyBpbml0aWFsV2lkdGggPSA4MDAsIGluaXRpYWxIZWlnaHQgPSA2MDAsIGNoaWxkcmVuIH06IGFueSkge1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKGluaXRpYWxXaWR0aCk7XG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZShpbml0aWFsSGVpZ2h0KTtcbiAgY29uc3QgY29tbW9uUHJvcHMgPSB7IHdpZHRoLCBoZWlnaHQsIHNldFdpZHRoLCBzZXRIZWlnaHQgfTtcbiAgcmV0dXJuIChcbiAgICA8UmVzaXphYmxlQ2FyZD5cbiAgICAgIDxSZXNpemFibGVDYXJkVGl0bGU+XG4gICAgICAgIDxTaXplSW5kaWNhdG9yIHsuLi5jb21tb25Qcm9wc30gLz5cbiAgICAgIDwvUmVzaXphYmxlQ2FyZFRpdGxlPlxuICAgICAgPFJlc2l6YWJsZUNhcmRDb250ZW50PlxuICAgICAgICA8UmVzaXphYmxlQ29udGFpbmVyIHsuLi5jb21tb25Qcm9wc30+e2NoaWxkcmVufTwvUmVzaXphYmxlQ29udGFpbmVyPlxuICAgICAgPC9SZXNpemFibGVDYXJkQ29udGVudD5cbiAgICA8L1Jlc2l6YWJsZUNhcmQ+XG4gICk7XG59XG4iXX0=