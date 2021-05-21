"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = ComposingScatter;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

function renderScatterLabel(props) {
  var dataKey = props.dataKey,
      labelProps = (0, _objectWithoutProperties2["default"])(props, ["dataKey"]);
  return /*#__PURE__*/_react["default"].createElement(Recharts.LabelList, (0, _extends2["default"])({
    dataKey: dataKey
  }, labelProps));
}

function ComposingScatter(_ref) {
  var labelProps = _ref.labelProps,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["labelProps"]);
  return /*#__PURE__*/_react["default"].createElement(Recharts.Scatter, (0, _extends2["default"])({
    isAnimationActive: false
  }, rest), labelProps && renderScatterLabel(labelProps));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL2NvbXBvc2luZy1zY2F0dGVyLnRzeCJdLCJuYW1lcyI6WyJyZW5kZXJTY2F0dGVyTGFiZWwiLCJwcm9wcyIsImRhdGFLZXkiLCJsYWJlbFByb3BzIiwiQ29tcG9zaW5nU2NhdHRlciIsInJlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLFNBQVNBLGtCQUFULENBQTRCQyxLQUE1QixFQUF3QztBQUFBLE1BQzlCQyxPQUQ4QixHQUNIRCxLQURHLENBQzlCQyxPQUQ4QjtBQUFBLE1BQ2xCQyxVQURrQiw2Q0FDSEYsS0FERztBQUV0QyxzQkFBTyxnQ0FBQyxRQUFELENBQVUsU0FBVjtBQUFvQixJQUFBLE9BQU8sRUFBRUM7QUFBN0IsS0FBMENDLFVBQTFDLEVBQVA7QUFDRDs7QUFFYyxTQUFTQyxnQkFBVCxPQUF3RDtBQUFBLE1BQTVCRCxVQUE0QixRQUE1QkEsVUFBNEI7QUFBQSxNQUFiRSxJQUFhO0FBQ3JFLHNCQUNFLGdDQUFDLFFBQUQsQ0FBVSxPQUFWO0FBQWtCLElBQUEsaUJBQWlCLEVBQUU7QUFBckMsS0FBZ0RBLElBQWhELEdBQ0dGLFVBQVUsSUFBSUgsa0JBQWtCLENBQUNHLFVBQUQsQ0FEbkMsQ0FERjtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlY2hhcnRzIGZyb20gJ3JlY2hhcnRzJztcblxuZnVuY3Rpb24gcmVuZGVyU2NhdHRlckxhYmVsKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyBkYXRhS2V5LCAuLi5sYWJlbFByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIDxSZWNoYXJ0cy5MYWJlbExpc3QgZGF0YUtleT17ZGF0YUtleX0gey4uLmxhYmVsUHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb3NpbmdTY2F0dGVyKHsgbGFiZWxQcm9wcywgLi4ucmVzdCB9OiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8UmVjaGFydHMuU2NhdHRlciBpc0FuaW1hdGlvbkFjdGl2ZT17ZmFsc2V9IHsuLi5yZXN0fT5cbiAgICAgIHtsYWJlbFByb3BzICYmIHJlbmRlclNjYXR0ZXJMYWJlbChsYWJlbFByb3BzKX1cbiAgICA8L1JlY2hhcnRzLlNjYXR0ZXI+XG4gICk7XG59XG4iXX0=