"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "content", {
  enumerable: true,
  get: function get() {
    return _content["default"];
  }
});

exports.parameters = exports.name = void 0;

var _content = _interopRequireDefault(require("./content"));

var name = 'XAxis Tick Count';
exports.name = name;
var parameters = {
  args: {
    dataCount: 14,
    withOriginPoint: false
  },
  argTypes: {
    dataCount: {
      control: {
        type: 'range',
        min: 1,
        max: 30,
        step: 1
      }
    },
    withOriginPoint: 'boolean'
  }
};
exports.parameters = parameters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMveC1heGlzLXRpY2stY291bnQvaW5kZXgudHMiXSwibmFtZXMiOlsibmFtZSIsInBhcmFtZXRlcnMiLCJhcmdzIiwiZGF0YUNvdW50Iiwid2l0aE9yaWdpblBvaW50IiwiYXJnVHlwZXMiLCJjb250cm9sIiwidHlwZSIsIm1pbiIsIm1heCIsInN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFETyxJQUFNQSxJQUFJLEdBQUcsa0JBQWI7O0FBR0EsSUFBTUMsVUFBVSxHQUFHO0FBQ3hCQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsU0FBUyxFQUFFLEVBRFA7QUFFSkMsSUFBQUEsZUFBZSxFQUFFO0FBRmIsR0FEa0I7QUFLeEJDLEVBQUFBLFFBQVEsRUFBRTtBQUNSRixJQUFBQSxTQUFTLEVBQUU7QUFDVEcsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLFFBQUFBLEdBQUcsRUFBRSxDQUZFO0FBR1BDLFFBQUFBLEdBQUcsRUFBRSxFQUhFO0FBSVBDLFFBQUFBLElBQUksRUFBRTtBQUpDO0FBREEsS0FESDtBQVNSTixJQUFBQSxlQUFlLEVBQUU7QUFUVDtBQUxjLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5hbWUgPSAnWEF4aXMgVGljayBDb3VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnQnO1xuXG5leHBvcnQgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgYXJnczoge1xuICAgIGRhdGFDb3VudDogMTQsXG4gICAgd2l0aE9yaWdpblBvaW50OiBmYWxzZSxcbiAgfSxcbiAgYXJnVHlwZXM6IHtcbiAgICBkYXRhQ291bnQ6IHtcbiAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgbWluOiAxLFxuICAgICAgICBtYXg6IDMwLFxuICAgICAgICBzdGVwOiAxLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdpdGhPcmlnaW5Qb2ludDogJ2Jvb2xlYW4nLFxuICB9LFxufTtcbiJdfQ==