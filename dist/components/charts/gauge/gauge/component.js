"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _d3Scale = require("d3-scale");

var _arcs = _interopRequireDefault(require("./arcs"));

var _ticks = _interopRequireDefault(require("./ticks"));

var _needle = _interopRequireDefault(require("./needle"));

var _backgroundArc = _interopRequireDefault(require("./background-arc"));

function Gauge(_ref) {
  var value = _ref.value,
      segments = _ref.segments,
      segmentLabels = _ref.segmentLabels,
      colors = _ref.colors,
      ticks = _ref.ticks;
  var min = segments[0];
  var max = segments[segments.length - 1];
  var percentScale = (0, _d3Scale.scaleLinear)().domain([min, max]).range([0, 1]);
  var percentages = (0, _react.useMemo)(function () {
    return segments.map(percentScale);
  }, [segments]);
  var angleScale = (0, _d3Scale.scaleLinear)().domain([0, 1]).range([-Math.PI / 2, Math.PI / 2]).clamp(true);
  var percent = percentScale(value);
  var angle = angleScale(percent);
  return /*#__PURE__*/_react["default"].createElement("svg", {
    style: {
      overflow: 'visible'
    },
    width: "100%",
    viewBox: "-1.2 -1.2 2.4 1.3"
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("filter", {
    id: "arc-shadow"
  }, /*#__PURE__*/_react["default"].createElement("feDropShadow", {
    dx: "0",
    dy: "0",
    stdDeviation: "0.01",
    floodColor: "rgb(0,0,0)",
    floodOpacity: 0.1
  })), /*#__PURE__*/_react["default"].createElement("filter", {
    id: "needle-shadow"
  }, /*#__PURE__*/_react["default"].createElement("feDropShadow", {
    dx: "0",
    dy: "0",
    stdDeviation: "0.006",
    floodColor: "rgb(0,0,0)",
    floodOpacity: 0.5
  }))), /*#__PURE__*/_react["default"].createElement(_backgroundArc["default"], null), /*#__PURE__*/_react["default"].createElement(_arcs["default"], {
    percentScale: percentScale,
    angleScale: angleScale,
    colors: colors,
    segmentLabels: segmentLabels,
    percentages: percentages
  }), /*#__PURE__*/_react["default"].createElement(_ticks["default"], {
    percentScale: percentScale,
    angleScale: angleScale,
    colors: colors,
    ticks: ticks
  }), /*#__PURE__*/_react["default"].createElement(_needle["default"], {
    angle: angle
  }));
}

var _default = Gauge;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS9jb21wb25lbnQudHN4Il0sIm5hbWVzIjpbIkdhdWdlIiwidmFsdWUiLCJzZWdtZW50cyIsInNlZ21lbnRMYWJlbHMiLCJjb2xvcnMiLCJ0aWNrcyIsIm1pbiIsIm1heCIsImxlbmd0aCIsInBlcmNlbnRTY2FsZSIsImRvbWFpbiIsInJhbmdlIiwicGVyY2VudGFnZXMiLCJtYXAiLCJhbmdsZVNjYWxlIiwiTWF0aCIsIlBJIiwiY2xhbXAiLCJwZXJjZW50IiwiYW5nbGUiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQXVFO0FBQUEsTUFBdERDLEtBQXNELFFBQXREQSxLQUFzRDtBQUFBLE1BQS9DQyxRQUErQyxRQUEvQ0EsUUFBK0M7QUFBQSxNQUFyQ0MsYUFBcUMsUUFBckNBLGFBQXFDO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUNyRSxNQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQyxDQUFELENBQXBCO0FBQ0EsTUFBTUssR0FBRyxHQUFHTCxRQUFRLENBQUNBLFFBQVEsQ0FBQ00sTUFBVCxHQUFrQixDQUFuQixDQUFwQjtBQUVBLE1BQU1DLFlBQVksR0FBRyw0QkFBY0MsTUFBZCxDQUFxQixDQUFDSixHQUFELEVBQU1DLEdBQU4sQ0FBckIsRUFBaUNJLEtBQWpDLENBQXVDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBdkMsQ0FBckI7QUFFQSxNQUFNQyxXQUFXLEdBQUcsb0JBQVE7QUFBQSxXQUFNVixRQUFRLENBQUNXLEdBQVQsQ0FBYUosWUFBYixDQUFOO0FBQUEsR0FBUixFQUEwQyxDQUFDUCxRQUFELENBQTFDLENBQXBCO0FBRUEsTUFBTVksVUFBVSxHQUFHLDRCQUNoQkosTUFEZ0IsQ0FDVCxDQUFDLENBQUQsRUFBSSxDQUFKLENBRFMsRUFFaEJDLEtBRmdCLENBRVYsQ0FBQyxDQUFDSSxJQUFJLENBQUNDLEVBQU4sR0FBVyxDQUFaLEVBQWVELElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXpCLENBRlUsRUFHaEJDLEtBSGdCLENBR1YsSUFIVSxDQUFuQjtBQUtBLE1BQU1DLE9BQU8sR0FBR1QsWUFBWSxDQUFDUixLQUFELENBQTVCO0FBQ0EsTUFBTWtCLEtBQUssR0FBR0wsVUFBVSxDQUFDSSxPQUFELENBQXhCO0FBRUEsc0JBQ0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFRSxNQUFBQSxRQUFRLEVBQUU7QUFBWixLQUFaO0FBQXFDLElBQUEsS0FBSyxFQUFDLE1BQTNDO0FBQWtELElBQUEsT0FBTyxFQUFDO0FBQTFELGtCQUNFLDJEQUNFO0FBQVEsSUFBQSxFQUFFLEVBQUM7QUFBWCxrQkFDRTtBQUFjLElBQUEsRUFBRSxFQUFDLEdBQWpCO0FBQXFCLElBQUEsRUFBRSxFQUFDLEdBQXhCO0FBQTRCLElBQUEsWUFBWSxFQUFDLE1BQXpDO0FBQWdELElBQUEsVUFBVSxFQUFDLFlBQTNEO0FBQXdFLElBQUEsWUFBWSxFQUFFO0FBQXRGLElBREYsQ0FERixlQUlFO0FBQVEsSUFBQSxFQUFFLEVBQUM7QUFBWCxrQkFDRTtBQUFjLElBQUEsRUFBRSxFQUFDLEdBQWpCO0FBQXFCLElBQUEsRUFBRSxFQUFDLEdBQXhCO0FBQTRCLElBQUEsWUFBWSxFQUFDLE9BQXpDO0FBQWlELElBQUEsVUFBVSxFQUFDLFlBQTVEO0FBQXlFLElBQUEsWUFBWSxFQUFFO0FBQXZGLElBREYsQ0FKRixDQURGLGVBU0UsZ0NBQUMseUJBQUQsT0FURixlQVVFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxZQUFZLEVBQUVYLFlBRGhCO0FBRUUsSUFBQSxVQUFVLEVBQUVLLFVBRmQ7QUFHRSxJQUFBLE1BQU0sRUFBRVYsTUFIVjtBQUlFLElBQUEsYUFBYSxFQUFFRCxhQUpqQjtBQUtFLElBQUEsV0FBVyxFQUFFUztBQUxmLElBVkYsZUFpQkUsZ0NBQUMsaUJBQUQ7QUFBTyxJQUFBLFlBQVksRUFBRUgsWUFBckI7QUFBbUMsSUFBQSxVQUFVLEVBQUVLLFVBQS9DO0FBQTJELElBQUEsTUFBTSxFQUFFVixNQUFuRTtBQUEyRSxJQUFBLEtBQUssRUFBRUM7QUFBbEYsSUFqQkYsZUFrQkUsZ0NBQUMsa0JBQUQ7QUFBUSxJQUFBLEtBQUssRUFBRWM7QUFBZixJQWxCRixDQURGO0FBc0JEOztlQUVjbkIsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2NhbGVMaW5lYXIgfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQgQXJjcyBmcm9tICcuL2FyY3MnO1xuaW1wb3J0IFRpY2tzIGZyb20gJy4vdGlja3MnO1xuaW1wb3J0IE5lZWRsZSBmcm9tICcuL25lZWRsZSc7XG5pbXBvcnQgQmFja2dyb3VuZEFyYyBmcm9tICcuL2JhY2tncm91bmQtYXJjJztcblxuZnVuY3Rpb24gR2F1Z2UoeyB2YWx1ZSwgc2VnbWVudHMsIHNlZ21lbnRMYWJlbHMsIGNvbG9ycywgdGlja3MgfTogYW55KSB7XG4gIGNvbnN0IG1pbiA9IHNlZ21lbnRzWzBdO1xuICBjb25zdCBtYXggPSBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXTtcblxuICBjb25zdCBwZXJjZW50U2NhbGUgPSBzY2FsZUxpbmVhcigpLmRvbWFpbihbbWluLCBtYXhdKS5yYW5nZShbMCwgMV0pO1xuXG4gIGNvbnN0IHBlcmNlbnRhZ2VzID0gdXNlTWVtbygoKSA9PiBzZWdtZW50cy5tYXAocGVyY2VudFNjYWxlKSwgW3NlZ21lbnRzXSk7XG5cbiAgY29uc3QgYW5nbGVTY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKFswLCAxXSlcbiAgICAucmFuZ2UoWy1NYXRoLlBJIC8gMiwgTWF0aC5QSSAvIDJdKVxuICAgIC5jbGFtcCh0cnVlKTtcblxuICBjb25zdCBwZXJjZW50ID0gcGVyY2VudFNjYWxlKHZhbHVlKTtcbiAgY29uc3QgYW5nbGUgPSBhbmdsZVNjYWxlKHBlcmNlbnQpO1xuXG4gIHJldHVybiAoXG4gICAgPHN2ZyBzdHlsZT17eyBvdmVyZmxvdzogJ3Zpc2libGUnIH19IHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCItMS4yIC0xLjIgMi40IDEuM1wiPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxmaWx0ZXIgaWQ9XCJhcmMtc2hhZG93XCI+XG4gICAgICAgICAgPGZlRHJvcFNoYWRvdyBkeD1cIjBcIiBkeT1cIjBcIiBzdGREZXZpYXRpb249XCIwLjAxXCIgZmxvb2RDb2xvcj1cInJnYigwLDAsMClcIiBmbG9vZE9wYWNpdHk9ezAuMX0gLz5cbiAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgIDxmaWx0ZXIgaWQ9XCJuZWVkbGUtc2hhZG93XCI+XG4gICAgICAgICAgPGZlRHJvcFNoYWRvdyBkeD1cIjBcIiBkeT1cIjBcIiBzdGREZXZpYXRpb249XCIwLjAwNlwiIGZsb29kQ29sb3I9XCJyZ2IoMCwwLDApXCIgZmxvb2RPcGFjaXR5PXswLjV9IC8+XG4gICAgICAgIDwvZmlsdGVyPlxuICAgICAgPC9kZWZzPlxuICAgICAgPEJhY2tncm91bmRBcmMgLz5cbiAgICAgIDxBcmNzXG4gICAgICAgIHBlcmNlbnRTY2FsZT17cGVyY2VudFNjYWxlfVxuICAgICAgICBhbmdsZVNjYWxlPXthbmdsZVNjYWxlfVxuICAgICAgICBjb2xvcnM9e2NvbG9yc31cbiAgICAgICAgc2VnbWVudExhYmVscz17c2VnbWVudExhYmVsc31cbiAgICAgICAgcGVyY2VudGFnZXM9e3BlcmNlbnRhZ2VzfVxuICAgICAgLz5cbiAgICAgIDxUaWNrcyBwZXJjZW50U2NhbGU9e3BlcmNlbnRTY2FsZX0gYW5nbGVTY2FsZT17YW5nbGVTY2FsZX0gY29sb3JzPXtjb2xvcnN9IHRpY2tzPXt0aWNrc30gLz5cbiAgICAgIDxOZWVkbGUgYW5nbGU9e2FuZ2xlfSAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYXVnZTtcbiJdfQ==