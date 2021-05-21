"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = BackgroundArc;

var _react = _interopRequireWildcard(require("react"));

var _d3Shape = require("d3-shape");

var _constants = require("./constants");

function BackgroundArc() {
  var backgroundArc = (0, _react.useMemo)(function () {
    // @ts-expect-error ts-migrate(2555) FIXME: Expected at least 1 arguments, but got 0.
    return (0, _d3Shape.arc)().innerRadius(_constants.INNER_RADIUS).outerRadius(_constants.OUTER_RADIUS).startAngle(-Math.PI / 2).endAngle(Math.PI / 2).cornerRadius(0)();
  }, []);
  return /*#__PURE__*/_react["default"].createElement("path", {
    d: backgroundArc,
    fill: "white",
    filter: "url(#arc-shadow)"
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS9iYWNrZ3JvdW5kLWFyYy50c3giXSwibmFtZXMiOlsiQmFja2dyb3VuZEFyYyIsImJhY2tncm91bmRBcmMiLCJpbm5lclJhZGl1cyIsIklOTkVSX1JBRElVUyIsIm91dGVyUmFkaXVzIiwiT1VURVJfUkFESVVTIiwic3RhcnRBbmdsZSIsIk1hdGgiLCJQSSIsImVuZEFuZ2xlIiwiY29ybmVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLE1BQU1DLGFBQWEsR0FBRyxvQkFBUSxZQUFNO0FBQ2xDO0FBQ0EsV0FBTyxvQkFDSkMsV0FESSxDQUNRQyx1QkFEUixFQUVKQyxXQUZJLENBRVFDLHVCQUZSLEVBR0pDLFVBSEksQ0FHTyxDQUFDQyxJQUFJLENBQUNDLEVBQU4sR0FBVyxDQUhsQixFQUlKQyxRQUpJLENBSUtGLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBSmYsRUFLSkUsWUFMSSxDQUtTLENBTFQsR0FBUDtBQU1ELEdBUnFCLEVBUW5CLEVBUm1CLENBQXRCO0FBVUEsc0JBQU87QUFBTSxJQUFBLENBQUMsRUFBRVQsYUFBVDtBQUF3QixJQUFBLElBQUksRUFBQyxPQUE3QjtBQUFxQyxJQUFBLE1BQU0sRUFBQztBQUE1QyxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFyYyB9IGZyb20gJ2QzLXNoYXBlJztcbmltcG9ydCB7IE9VVEVSX1JBRElVUywgSU5ORVJfUkFESVVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrZ3JvdW5kQXJjKCkge1xuICBjb25zdCBiYWNrZ3JvdW5kQXJjID0gdXNlTWVtbygoKSA9PiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI1NTUpIEZJWE1FOiBFeHBlY3RlZCBhdCBsZWFzdCAxIGFyZ3VtZW50cywgYnV0IGdvdCAwLlxuICAgIHJldHVybiBhcmMoKVxuICAgICAgLmlubmVyUmFkaXVzKElOTkVSX1JBRElVUylcbiAgICAgIC5vdXRlclJhZGl1cyhPVVRFUl9SQURJVVMpXG4gICAgICAuc3RhcnRBbmdsZSgtTWF0aC5QSSAvIDIpXG4gICAgICAuZW5kQW5nbGUoTWF0aC5QSSAvIDIpXG4gICAgICAuY29ybmVyUmFkaXVzKDApKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPHBhdGggZD17YmFja2dyb3VuZEFyY30gZmlsbD1cIndoaXRlXCIgZmlsdGVyPVwidXJsKCNhcmMtc2hhZG93KVwiIC8+O1xufVxuIl19