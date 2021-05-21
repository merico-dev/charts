"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

var _regression = require("../helpers/regression");

// TODO: deprecate 'strokeDashArray'
// TODO: deprecate 'color'
var _default = function _default(_ref) {
  var key = _ref.key,
      data = _ref.data,
      labelKey = _ref.labelKey,
      valueKey = _ref.valueKey,
      type = _ref.type,
      stroke = _ref.stroke,
      color = _ref.color,
      strokeDasharray = _ref.strokeDasharray,
      strokeDashArray = _ref.strokeDashArray,
      _ref$yAxisId = _ref.yAxisId,
      yAxisId = _ref$yAxisId === void 0 ? 0 : _ref$yAxisId;

  if (!type) {
    return null;
  }

  var regressionData = (0, _regression.calcRegressionData)({
    type: type,
    data: data,
    x: labelKey,
    y: valueKey
  });
  return /*#__PURE__*/_react["default"].createElement(Recharts.ReferenceLine, {
    key: key !== null && key !== void 0 ? key : labelKey,
    segment: regressionData,
    stroke: stroke !== null && stroke !== void 0 ? stroke : color,
    strokeWidth: 1,
    strokeDasharray: strokeDasharray !== null && strokeDasharray !== void 0 ? strokeDasharray : strokeDashArray // @ts-expect-error ts-migrate(2322) FIXME: Type '{ segment: any; stroke: any; strokeWidth: nu... Remove this comment to see the full error message
    ,
    dot: false,
    ifOverflow: "hidden",
    yAxisId: yAxisId
  });
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL3JlZ3Jlc3Npb24tbGluZS50c3giXSwibmFtZXMiOlsia2V5IiwiZGF0YSIsImxhYmVsS2V5IiwidmFsdWVLZXkiLCJ0eXBlIiwic3Ryb2tlIiwiY29sb3IiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNoQXJyYXkiLCJ5QXhpc0lkIiwicmVncmVzc2lvbkRhdGEiLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO2VBQ2Usd0JBV0o7QUFBQSxNQVZUQSxHQVVTLFFBVlRBLEdBVVM7QUFBQSxNQVRUQyxJQVNTLFFBVFRBLElBU1M7QUFBQSxNQVJUQyxRQVFTLFFBUlRBLFFBUVM7QUFBQSxNQVBUQyxRQU9TLFFBUFRBLFFBT1M7QUFBQSxNQU5UQyxJQU1TLFFBTlRBLElBTVM7QUFBQSxNQUxUQyxNQUtTLFFBTFRBLE1BS1M7QUFBQSxNQUpUQyxLQUlTLFFBSlRBLEtBSVM7QUFBQSxNQUhUQyxlQUdTLFFBSFRBLGVBR1M7QUFBQSxNQUZUQyxlQUVTLFFBRlRBLGVBRVM7QUFBQSwwQkFEVEMsT0FDUztBQUFBLE1BRFRBLE9BQ1MsNkJBREMsQ0FDRDs7QUFDVCxNQUFJLENBQUNMLElBQUwsRUFBVztBQUNULFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQU1NLGNBQWMsR0FBRyxvQ0FBbUI7QUFDeENOLElBQUFBLElBQUksRUFBSkEsSUFEd0M7QUFFeENILElBQUFBLElBQUksRUFBSkEsSUFGd0M7QUFHeENVLElBQUFBLENBQUMsRUFBRVQsUUFIcUM7QUFJeENVLElBQUFBLENBQUMsRUFBRVQ7QUFKcUMsR0FBbkIsQ0FBdkI7QUFPQSxzQkFDRSxnQ0FBQyxRQUFELENBQVUsYUFBVjtBQUNFLElBQUEsR0FBRyxFQUFFSCxHQUFGLGFBQUVBLEdBQUYsY0FBRUEsR0FBRixHQUFTRSxRQURkO0FBRUUsSUFBQSxPQUFPLEVBQUVRLGNBRlg7QUFHRSxJQUFBLE1BQU0sRUFBRUwsTUFBRixhQUFFQSxNQUFGLGNBQUVBLE1BQUYsR0FBWUMsS0FIcEI7QUFJRSxJQUFBLFdBQVcsRUFBRSxDQUpmO0FBS0UsSUFBQSxlQUFlLEVBQUVDLGVBQUYsYUFBRUEsZUFBRixjQUFFQSxlQUFGLEdBQXFCQyxlQUx0QyxDQU1FO0FBTkY7QUFPRSxJQUFBLEdBQUcsRUFBRSxLQVBQO0FBUUUsSUFBQSxVQUFVLEVBQUMsUUFSYjtBQVNFLElBQUEsT0FBTyxFQUFFQztBQVRYLElBREY7QUFhRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlY2hhcnRzIGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IGNhbGNSZWdyZXNzaW9uRGF0YSB9IGZyb20gJy4uL2hlbHBlcnMvcmVncmVzc2lvbic7XG5cbi8vIFRPRE86IGRlcHJlY2F0ZSAnc3Ryb2tlRGFzaEFycmF5J1xuLy8gVE9ETzogZGVwcmVjYXRlICdjb2xvcidcbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGtleSxcbiAgZGF0YSxcbiAgbGFiZWxLZXksXG4gIHZhbHVlS2V5LFxuICB0eXBlLFxuICBzdHJva2UsXG4gIGNvbG9yLFxuICBzdHJva2VEYXNoYXJyYXksXG4gIHN0cm9rZURhc2hBcnJheSxcbiAgeUF4aXNJZCA9IDAsXG59OiBhbnkpID0+IHtcbiAgaWYgKCF0eXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCByZWdyZXNzaW9uRGF0YSA9IGNhbGNSZWdyZXNzaW9uRGF0YSh7XG4gICAgdHlwZSxcbiAgICBkYXRhLFxuICAgIHg6IGxhYmVsS2V5LFxuICAgIHk6IHZhbHVlS2V5LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWNoYXJ0cy5SZWZlcmVuY2VMaW5lXG4gICAgICBrZXk9e2tleSA/PyBsYWJlbEtleX1cbiAgICAgIHNlZ21lbnQ9e3JlZ3Jlc3Npb25EYXRhfVxuICAgICAgc3Ryb2tlPXtzdHJva2UgPz8gY29sb3J9XG4gICAgICBzdHJva2VXaWR0aD17MX1cbiAgICAgIHN0cm9rZURhc2hhcnJheT17c3Ryb2tlRGFzaGFycmF5ID8/IHN0cm9rZURhc2hBcnJheX1cbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzIyKSBGSVhNRTogVHlwZSAneyBzZWdtZW50OiBhbnk7IHN0cm9rZTogYW55OyBzdHJva2VXaWR0aDogbnUuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgICAgZG90PXtmYWxzZX1cbiAgICAgIGlmT3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgeUF4aXNJZD17eUF4aXNJZH1cbiAgICAvPlxuICApO1xufTtcbiJdfQ==