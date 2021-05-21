"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Arcs;

var _react = _interopRequireWildcard(require("react"));

var _d3Shape = require("d3-shape");

var _constants = require("./constants");

var truthy = function truthy(v) {
  return v;
};

function Arcs(_ref) {
  var percentages = _ref.percentages,
      colors = _ref.colors,
      segmentLabels = _ref.segmentLabels;
  var arcs = (0, _react.useMemo)(function () {
    function percentageToArc(p, index) {
      if (index === percentages.length - 1) {
        return;
      }

      var ret = {};
      var start = p;
      var end = percentages[index + 1]; // @ts-expect-error ts-migrate(2339) FIXME: Property 'startAngle' does not exist on type '{}'.

      ret.startAngle = Math.PI * (-0.5 + start); // @ts-expect-error ts-migrate(2339) FIXME: Property 'endAngle' does not exist on type '{}'.

      ret.endAngle = Math.PI * (-0.5 + end); // @ts-expect-error ts-migrate(2339) FIXME: Property 'midAngle' does not exist on type '{}'.

      ret.midAngle = Math.PI * (-0.5 + (end + start) / 2); // @ts-expect-error ts-migrate(2339) FIXME: Property 'arc' does not exist on type '{}'.

      ret.arc = (0, _d3Shape.arc)().innerRadius(_constants.INNER_RADIUS).outerRadius(_constants.OUTER_RADIUS) // @ts-expect-error ts-migrate(2339) FIXME: Property 'startAngle' does not exist on type '{}'.
      .startAngle(ret.startAngle) // @ts-expect-error ts-migrate(2339) FIXME: Property 'endAngle' does not exist on type '{}'.
      .endAngle(ret.endAngle).cornerRadius(0)(); // @ts-expect-error ts-migrate(2339) FIXME: Property 'center' does not exist on type '{}'.

      ret.center = (0, _d3Shape.arc)().innerRadius(_constants.OUTER_RADIUS).outerRadius(_constants.OUTER_RADIUS + _constants.RING_WIDTH / 2) // @ts-expect-error ts-migrate(2339) FIXME: Property 'startAngle' does not exist on type '{}'.
      .startAngle(ret.startAngle) // @ts-expect-error ts-migrate(2339) FIXME: Property 'endAngle' does not exist on type '{}'.
      .endAngle(ret.endAngle).cornerRadius(0) // @ts-expect-error ts-migrate(2555) FIXME: Expected at least 1 arguments, but got 0.
      .centroid();
      return ret;
    }

    return percentages.map(percentageToArc).filter(truthy);
  }, [percentages, colors]);
  return arcs.map(function (item, index) {
    var _segmentLabels$index$;

    return [/*#__PURE__*/_react["default"].createElement("path", {
      key: "arc-".concat(item.startAngle),
      d: item.arc,
      fill: colors[index]
    }), /*#__PURE__*/_react["default"].createElement("text", {
      key: "arc-text-".concat(item.startAngle),
      fontSize: 0.1,
      fill: (_segmentLabels$index$ = segmentLabels[index].color) !== null && _segmentLabels$index$ !== void 0 ? _segmentLabels$index$ : 'black',
      textAnchor: "middle",
      transform: "translate(".concat(item.center[0], ", ").concat(item.center[1], ") rotate(").concat(item.midAngle * (180 / Math.PI), ")")
    }, segmentLabels[index].text)];
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS9hcmNzLnRzeCJdLCJuYW1lcyI6WyJ0cnV0aHkiLCJ2IiwiQXJjcyIsInBlcmNlbnRhZ2VzIiwiY29sb3JzIiwic2VnbWVudExhYmVscyIsImFyY3MiLCJwZXJjZW50YWdlVG9BcmMiLCJwIiwiaW5kZXgiLCJsZW5ndGgiLCJyZXQiLCJzdGFydCIsImVuZCIsInN0YXJ0QW5nbGUiLCJNYXRoIiwiUEkiLCJlbmRBbmdsZSIsIm1pZEFuZ2xlIiwiYXJjIiwiaW5uZXJSYWRpdXMiLCJJTk5FUl9SQURJVVMiLCJvdXRlclJhZGl1cyIsIk9VVEVSX1JBRElVUyIsImNvcm5lclJhZGl1cyIsImNlbnRlciIsIlJJTkdfV0lEVEgiLCJjZW50cm9pZCIsIm1hcCIsImZpbHRlciIsIml0ZW0iLCJjb2xvciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQ7QUFBQSxTQUFZQSxDQUFaO0FBQUEsQ0FBZjs7QUFFZSxTQUFTQyxJQUFULE9BQTJGO0FBQUEsTUFBM0NDLFdBQTJDLFFBQTNDQSxXQUEyQztBQUFBLE1BQTlCQyxNQUE4QixRQUE5QkEsTUFBOEI7QUFBQSxNQUF0QkMsYUFBc0IsUUFBdEJBLGFBQXNCO0FBQ3hHLE1BQU1DLElBQUksR0FBRyxvQkFBUSxZQUFNO0FBQ3pCLGFBQVNDLGVBQVQsQ0FBeUJDLENBQXpCLEVBQWlDQyxLQUFqQyxFQUE2QztBQUMzQyxVQUFJQSxLQUFLLEtBQUtOLFdBQVcsQ0FBQ08sTUFBWixHQUFxQixDQUFuQyxFQUFzQztBQUNwQztBQUNEOztBQUNELFVBQU1DLEdBQUcsR0FBRyxFQUFaO0FBRUEsVUFBTUMsS0FBSyxHQUFHSixDQUFkO0FBQ0EsVUFBTUssR0FBRyxHQUFHVixXQUFXLENBQUNNLEtBQUssR0FBRyxDQUFULENBQXZCLENBUDJDLENBUzNDOztBQUNBRSxNQUFBQSxHQUFHLENBQUNHLFVBQUosR0FBaUJDLElBQUksQ0FBQ0MsRUFBTCxJQUFXLENBQUMsR0FBRCxHQUFPSixLQUFsQixDQUFqQixDQVYyQyxDQVczQzs7QUFDQUQsTUFBQUEsR0FBRyxDQUFDTSxRQUFKLEdBQWVGLElBQUksQ0FBQ0MsRUFBTCxJQUFXLENBQUMsR0FBRCxHQUFPSCxHQUFsQixDQUFmLENBWjJDLENBYTNDOztBQUNBRixNQUFBQSxHQUFHLENBQUNPLFFBQUosR0FBZUgsSUFBSSxDQUFDQyxFQUFMLElBQVcsQ0FBQyxHQUFELEdBQU8sQ0FBQ0gsR0FBRyxHQUFHRCxLQUFQLElBQWdCLENBQWxDLENBQWYsQ0FkMkMsQ0FnQjNDOztBQUNBRCxNQUFBQSxHQUFHLENBQUNRLEdBQUosR0FBVSxvQkFDUEMsV0FETyxDQUNLQyx1QkFETCxFQUVQQyxXQUZPLENBRUtDLHVCQUZMLEVBR1I7QUFIUSxPQUlQVCxVQUpPLENBSUlILEdBQUcsQ0FBQ0csVUFKUixFQUtSO0FBTFEsT0FNUEcsUUFOTyxDQU1FTixHQUFHLENBQUNNLFFBTk4sRUFPUE8sWUFQTyxDQU9NLENBUE4sR0FBVixDQWpCMkMsQ0EwQjNDOztBQUNBYixNQUFBQSxHQUFHLENBQUNjLE1BQUosR0FBYSxvQkFDVkwsV0FEVSxDQUNFRyx1QkFERixFQUVWRCxXQUZVLENBRUVDLDBCQUFlRyx3QkFBYSxDQUY5QixFQUdYO0FBSFcsT0FJVlosVUFKVSxDQUlDSCxHQUFHLENBQUNHLFVBSkwsRUFLWDtBQUxXLE9BTVZHLFFBTlUsQ0FNRE4sR0FBRyxDQUFDTSxRQU5ILEVBT1ZPLFlBUFUsQ0FPRyxDQVBILEVBUVg7QUFSVyxPQVNWRyxRQVRVLEVBQWI7QUFXQSxhQUFPaEIsR0FBUDtBQUNEOztBQUVELFdBQU9SLFdBQVcsQ0FBQ3lCLEdBQVosQ0FBZ0JyQixlQUFoQixFQUFpQ3NCLE1BQWpDLENBQXdDN0IsTUFBeEMsQ0FBUDtBQUNELEdBM0NZLEVBMkNWLENBQUNHLFdBQUQsRUFBY0MsTUFBZCxDQTNDVSxDQUFiO0FBNkNBLFNBQU9FLElBQUksQ0FBQ3NCLEdBQUwsQ0FBUyxVQUFDRSxJQUFELEVBQVlyQixLQUFaO0FBQUE7O0FBQUEsV0FBMkIsY0FDekM7QUFBTSxNQUFBLEdBQUcsZ0JBQVNxQixJQUFJLENBQUNoQixVQUFkLENBQVQ7QUFBcUMsTUFBQSxDQUFDLEVBQUVnQixJQUFJLENBQUNYLEdBQTdDO0FBQWtELE1BQUEsSUFBSSxFQUFFZixNQUFNLENBQUNLLEtBQUQ7QUFBOUQsTUFEeUMsZUFFekM7QUFDRSxNQUFBLEdBQUcscUJBQWNxQixJQUFJLENBQUNoQixVQUFuQixDQURMO0FBRUUsTUFBQSxRQUFRLEVBQUUsR0FGWjtBQUdFLE1BQUEsSUFBSSwyQkFBRVQsYUFBYSxDQUFDSSxLQUFELENBQWIsQ0FBcUJzQixLQUF2Qix5RUFBZ0MsT0FIdEM7QUFJRSxNQUFBLFVBQVUsRUFBQyxRQUpiO0FBS0UsTUFBQSxTQUFTLHNCQUFlRCxJQUFJLENBQUNMLE1BQUwsQ0FBWSxDQUFaLENBQWYsZUFBa0NLLElBQUksQ0FBQ0wsTUFBTCxDQUFZLENBQVosQ0FBbEMsc0JBQTRESyxJQUFJLENBQUNaLFFBQUwsSUFBaUIsTUFBTUgsSUFBSSxDQUFDQyxFQUE1QixDQUE1RDtBQUxYLE9BT0dYLGFBQWEsQ0FBQ0ksS0FBRCxDQUFiLENBQXFCdUIsSUFQeEIsQ0FGeUMsQ0FBM0I7QUFBQSxHQUFULENBQVA7QUFZRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXJjIH0gZnJvbSAnZDMtc2hhcGUnO1xuaW1wb3J0IHsgT1VURVJfUkFESVVTLCBJTk5FUl9SQURJVVMsIFJJTkdfV0lEVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHRydXRoeSA9ICh2OiBhbnkpID0+IHY7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyY3MoeyAvKiBwZXJjZW50U2NhbGUsIGFuZ2xlU2NhbGUsICovIHBlcmNlbnRhZ2VzLCBjb2xvcnMsIHNlZ21lbnRMYWJlbHMgfTogYW55KSB7XG4gIGNvbnN0IGFyY3MgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBmdW5jdGlvbiBwZXJjZW50YWdlVG9BcmMocDogYW55LCBpbmRleDogYW55KSB7XG4gICAgICBpZiAoaW5kZXggPT09IHBlcmNlbnRhZ2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcmV0ID0ge307XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gcDtcbiAgICAgIGNvbnN0IGVuZCA9IHBlcmNlbnRhZ2VzW2luZGV4ICsgMV07XG5cbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzM5KSBGSVhNRTogUHJvcGVydHkgJ3N0YXJ0QW5nbGUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3t9Jy5cbiAgICAgIHJldC5zdGFydEFuZ2xlID0gTWF0aC5QSSAqICgtMC41ICsgc3RhcnQpO1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnZW5kQW5nbGUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3t9Jy5cbiAgICAgIHJldC5lbmRBbmdsZSA9IE1hdGguUEkgKiAoLTAuNSArIGVuZCk7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjMzOSkgRklYTUU6IFByb3BlcnR5ICdtaWRBbmdsZScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgcmV0Lm1pZEFuZ2xlID0gTWF0aC5QSSAqICgtMC41ICsgKGVuZCArIHN0YXJ0KSAvIDIpO1xuXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjMzOSkgRklYTUU6IFByb3BlcnR5ICdhcmMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3t9Jy5cbiAgICAgIHJldC5hcmMgPSBhcmMoKVxuICAgICAgICAuaW5uZXJSYWRpdXMoSU5ORVJfUkFESVVTKVxuICAgICAgICAub3V0ZXJSYWRpdXMoT1VURVJfUkFESVVTKVxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjMzOSkgRklYTUU6IFByb3BlcnR5ICdzdGFydEFuZ2xlJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7fScuXG4gICAgICAgIC5zdGFydEFuZ2xlKHJldC5zdGFydEFuZ2xlKVxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjMzOSkgRklYTUU6IFByb3BlcnR5ICdlbmRBbmdsZScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgICAuZW5kQW5nbGUocmV0LmVuZEFuZ2xlKVxuICAgICAgICAuY29ybmVyUmFkaXVzKDApKCk7XG5cbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzM5KSBGSVhNRTogUHJvcGVydHkgJ2NlbnRlcicgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgcmV0LmNlbnRlciA9IGFyYygpXG4gICAgICAgIC5pbm5lclJhZGl1cyhPVVRFUl9SQURJVVMpXG4gICAgICAgIC5vdXRlclJhZGl1cyhPVVRFUl9SQURJVVMgKyBSSU5HX1dJRFRIIC8gMilcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnc3RhcnRBbmdsZScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgICAuc3RhcnRBbmdsZShyZXQuc3RhcnRBbmdsZSlcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnZW5kQW5nbGUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3t9Jy5cbiAgICAgICAgLmVuZEFuZ2xlKHJldC5lbmRBbmdsZSlcbiAgICAgICAgLmNvcm5lclJhZGl1cygwKVxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjU1NSkgRklYTUU6IEV4cGVjdGVkIGF0IGxlYXN0IDEgYXJndW1lbnRzLCBidXQgZ290IDAuXG4gICAgICAgIC5jZW50cm9pZCgpO1xuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHJldHVybiBwZXJjZW50YWdlcy5tYXAocGVyY2VudGFnZVRvQXJjKS5maWx0ZXIodHJ1dGh5KTtcbiAgfSwgW3BlcmNlbnRhZ2VzLCBjb2xvcnNdKTtcblxuICByZXR1cm4gYXJjcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4gW1xuICAgIDxwYXRoIGtleT17YGFyYy0ke2l0ZW0uc3RhcnRBbmdsZX1gfSBkPXtpdGVtLmFyY30gZmlsbD17Y29sb3JzW2luZGV4XX0gLz4sXG4gICAgPHRleHRcbiAgICAgIGtleT17YGFyYy10ZXh0LSR7aXRlbS5zdGFydEFuZ2xlfWB9XG4gICAgICBmb250U2l6ZT17MC4xfVxuICAgICAgZmlsbD17c2VnbWVudExhYmVsc1tpbmRleF0uY29sb3IgPz8gJ2JsYWNrJ31cbiAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7aXRlbS5jZW50ZXJbMF19LCAke2l0ZW0uY2VudGVyWzFdfSkgcm90YXRlKCR7aXRlbS5taWRBbmdsZSAqICgxODAgLyBNYXRoLlBJKX0pYH1cbiAgICA+XG4gICAgICB7c2VnbWVudExhYmVsc1tpbmRleF0udGV4dH1cbiAgICA8L3RleHQ+LFxuICBdKTtcbn1cbiJdfQ==