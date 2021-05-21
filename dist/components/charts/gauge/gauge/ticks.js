"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Ticks;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _helpers = require("./helpers");

var _constants = require("./constants");

function Ticks(_ref) {
  var percentScale = _ref.percentScale,
      angleScale = _ref.angleScale,
      ticks = _ref.ticks;
  var scaledTicks = (0, _react.useMemo)(function () {
    var scaledTicks = ticks.map(function (t) {
      var tick = {
        value: t,
        percent: percentScale(t)
      }; // @ts-expect-error ts-migrate(2339) FIXME: Property 'angle' does not exist on type '{ value: ... Remove this comment to see the full error message

      tick.angle = angleScale(tick.percent); // @ts-expect-error ts-migrate(2339) FIXME: Property 'location' does not exist on type '{ valu... Remove this comment to see the full error message

      tick.location = (0, _helpers.getCoordsOnArc)(tick.angle, _constants.INNER_RADIUS); // @ts-expect-error ts-migrate(2339) FIXME: Property 'textLocation' does not exist on type '{ ... Remove this comment to see the full error message

      tick.textLocation = (0, _helpers.getCoordsOnArc)(tick.angle, _constants.INNER_RADIUS - _constants.RING_WIDTH / 2);
      return tick;
    });
    return scaledTicks;
  }, [ticks, percentScale, angleScale]);
  return scaledTicks.map(function (_ref2) {
    var _ref2$location = (0, _slicedToArray2["default"])(_ref2.location, 2),
        cx = _ref2$location[0],
        cy = _ref2$location[1],
        _ref2$textLocation = (0, _slicedToArray2["default"])(_ref2.textLocation, 2),
        tcx = _ref2$textLocation[0],
        tcy = _ref2$textLocation[1],
        angle = _ref2.angle,
        value = _ref2.value;

    return [/*#__PURE__*/_react["default"].createElement("line", {
      key: "tick-line-".concat(cx),
      x1: cx,
      x2: cx,
      y1: cy,
      y2: cy - _constants.RING_WIDTH / 4,
      transform: "rotate(".concat(angle * (180 / Math.PI), ", ").concat(cx, ", ").concat(cy, ")"),
      stroke: "white",
      strokeWidth: 0.005
    }), /*#__PURE__*/_react["default"].createElement("text", {
      key: "tick-text-".concat(tcx),
      fontSize: 0.1,
      fill: "#A1A3A9",
      transform: "translate(".concat(tcx, ", ").concat(tcy, ") rotate(").concat(angle * (180 / Math.PI), ")"),
      textAnchor: "middle"
    }, value)];
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS90aWNrcy50c3giXSwibmFtZXMiOlsiVGlja3MiLCJwZXJjZW50U2NhbGUiLCJhbmdsZVNjYWxlIiwidGlja3MiLCJzY2FsZWRUaWNrcyIsIm1hcCIsInQiLCJ0aWNrIiwidmFsdWUiLCJwZXJjZW50IiwiYW5nbGUiLCJsb2NhdGlvbiIsIklOTkVSX1JBRElVUyIsInRleHRMb2NhdGlvbiIsIlJJTkdfV0lEVEgiLCJjeCIsImN5IiwidGN4IiwidGN5IiwiTWF0aCIsIlBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRWUsU0FBU0EsS0FBVCxPQUF5RDtBQUFBLE1BQXhDQyxZQUF3QyxRQUF4Q0EsWUFBd0M7QUFBQSxNQUExQkMsVUFBMEIsUUFBMUJBLFVBQTBCO0FBQUEsTUFBZEMsS0FBYyxRQUFkQSxLQUFjO0FBQ3RFLE1BQU1DLFdBQVcsR0FBRyxvQkFBUSxZQUFNO0FBQ2hDLFFBQU1BLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFZO0FBQ3hDLFVBQU1DLElBQUksR0FBRztBQUNYQyxRQUFBQSxLQUFLLEVBQUVGLENBREk7QUFFWEcsUUFBQUEsT0FBTyxFQUFFUixZQUFZLENBQUNLLENBQUQ7QUFGVixPQUFiLENBRHdDLENBS3hDOztBQUNBQyxNQUFBQSxJQUFJLENBQUNHLEtBQUwsR0FBYVIsVUFBVSxDQUFDSyxJQUFJLENBQUNFLE9BQU4sQ0FBdkIsQ0FOd0MsQ0FPeEM7O0FBQ0FGLE1BQUFBLElBQUksQ0FBQ0ksUUFBTCxHQUFnQiw2QkFBZUosSUFBSSxDQUFDRyxLQUFwQixFQUEyQkUsdUJBQTNCLENBQWhCLENBUndDLENBU3hDOztBQUNBTCxNQUFBQSxJQUFJLENBQUNNLFlBQUwsR0FBb0IsNkJBQWVOLElBQUksQ0FBQ0csS0FBcEIsRUFBMkJFLDBCQUFlRSx3QkFBYSxDQUF2RCxDQUFwQjtBQUNBLGFBQU9QLElBQVA7QUFDRCxLQVptQixDQUFwQjtBQWFBLFdBQU9ILFdBQVA7QUFDRCxHQWZtQixFQWVqQixDQUFDRCxLQUFELEVBQVFGLFlBQVIsRUFBc0JDLFVBQXRCLENBZmlCLENBQXBCO0FBaUJBLFNBQU9FLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQjtBQUFBLCtEQUFHTSxRQUFIO0FBQUEsUUFBY0ksRUFBZDtBQUFBLFFBQWtCQyxFQUFsQjtBQUFBLG1FQUF1QkgsWUFBdkI7QUFBQSxRQUFzQ0ksR0FBdEM7QUFBQSxRQUEyQ0MsR0FBM0M7QUFBQSxRQUFpRFIsS0FBakQsU0FBaURBLEtBQWpEO0FBQUEsUUFBd0RGLEtBQXhELFNBQXdEQSxLQUF4RDs7QUFBQSxXQUF5RSxjQUM5RjtBQUNFLE1BQUEsR0FBRyxzQkFBZU8sRUFBZixDQURMO0FBRUUsTUFBQSxFQUFFLEVBQUVBLEVBRk47QUFHRSxNQUFBLEVBQUUsRUFBRUEsRUFITjtBQUlFLE1BQUEsRUFBRSxFQUFFQyxFQUpOO0FBS0UsTUFBQSxFQUFFLEVBQUVBLEVBQUUsR0FBR0Ysd0JBQWEsQ0FMeEI7QUFNRSxNQUFBLFNBQVMsbUJBQVlKLEtBQUssSUFBSSxNQUFNUyxJQUFJLENBQUNDLEVBQWYsQ0FBakIsZUFBd0NMLEVBQXhDLGVBQStDQyxFQUEvQyxNQU5YO0FBT0UsTUFBQSxNQUFNLEVBQUMsT0FQVDtBQVFFLE1BQUEsV0FBVyxFQUFFO0FBUmYsTUFEOEYsZUFXOUY7QUFDRSxNQUFBLEdBQUcsc0JBQWVDLEdBQWYsQ0FETDtBQUVFLE1BQUEsUUFBUSxFQUFFLEdBRlo7QUFHRSxNQUFBLElBQUksRUFBQyxTQUhQO0FBSUUsTUFBQSxTQUFTLHNCQUFlQSxHQUFmLGVBQXVCQyxHQUF2QixzQkFBc0NSLEtBQUssSUFBSSxNQUFNUyxJQUFJLENBQUNDLEVBQWYsQ0FBM0MsTUFKWDtBQUtFLE1BQUEsVUFBVSxFQUFDO0FBTGIsT0FPR1osS0FQSCxDQVg4RixDQUF6RTtBQUFBLEdBQWhCLENBQVA7QUFxQkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldENvb3Jkc09uQXJjIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IElOTkVSX1JBRElVUywgUklOR19XSURUSCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGlja3MoeyBwZXJjZW50U2NhbGUsIGFuZ2xlU2NhbGUsIHRpY2tzIH06IGFueSkge1xuICBjb25zdCBzY2FsZWRUaWNrcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlZFRpY2tzID0gdGlja3MubWFwKCh0OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHRpY2sgPSB7XG4gICAgICAgIHZhbHVlOiB0LFxuICAgICAgICBwZXJjZW50OiBwZXJjZW50U2NhbGUodCksXG4gICAgICB9O1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnYW5nbGUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3sgdmFsdWU6IC4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgICB0aWNrLmFuZ2xlID0gYW5nbGVTY2FsZSh0aWNrLnBlcmNlbnQpO1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnbG9jYXRpb24nIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3sgdmFsdS4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgICB0aWNrLmxvY2F0aW9uID0gZ2V0Q29vcmRzT25BcmModGljay5hbmdsZSwgSU5ORVJfUkFESVVTKTtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzM5KSBGSVhNRTogUHJvcGVydHkgJ3RleHRMb2NhdGlvbicgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAneyAuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgICAgdGljay50ZXh0TG9jYXRpb24gPSBnZXRDb29yZHNPbkFyYyh0aWNrLmFuZ2xlLCBJTk5FUl9SQURJVVMgLSBSSU5HX1dJRFRIIC8gMik7XG4gICAgICByZXR1cm4gdGljaztcbiAgICB9KTtcbiAgICByZXR1cm4gc2NhbGVkVGlja3M7XG4gIH0sIFt0aWNrcywgcGVyY2VudFNjYWxlLCBhbmdsZVNjYWxlXSk7XG5cbiAgcmV0dXJuIHNjYWxlZFRpY2tzLm1hcCgoeyBsb2NhdGlvbjogW2N4LCBjeV0sIHRleHRMb2NhdGlvbjogW3RjeCwgdGN5XSwgYW5nbGUsIHZhbHVlIH06IGFueSkgPT4gW1xuICAgIDxsaW5lXG4gICAgICBrZXk9e2B0aWNrLWxpbmUtJHtjeH1gfVxuICAgICAgeDE9e2N4fVxuICAgICAgeDI9e2N4fVxuICAgICAgeTE9e2N5fVxuICAgICAgeTI9e2N5IC0gUklOR19XSURUSCAvIDR9XG4gICAgICB0cmFuc2Zvcm09e2Byb3RhdGUoJHthbmdsZSAqICgxODAgLyBNYXRoLlBJKX0sICR7Y3h9LCAke2N5fSlgfVxuICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgc3Ryb2tlV2lkdGg9ezAuMDA1fVxuICAgIC8+LFxuICAgIDx0ZXh0XG4gICAgICBrZXk9e2B0aWNrLXRleHQtJHt0Y3h9YH1cbiAgICAgIGZvbnRTaXplPXswLjF9XG4gICAgICBmaWxsPVwiI0ExQTNBOVwiXG4gICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt0Y3h9LCAke3RjeX0pIHJvdGF0ZSgke2FuZ2xlICogKDE4MCAvIE1hdGguUEkpfSlgfVxuICAgICAgdGV4dEFuY2hvcj1cIm1pZGRsZVwiXG4gICAgPlxuICAgICAge3ZhbHVlfVxuICAgIDwvdGV4dD4sXG4gIF0pO1xufVxuIl19