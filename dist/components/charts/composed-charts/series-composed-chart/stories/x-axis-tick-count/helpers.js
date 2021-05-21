"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getSeries = void 0;

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

/**
 * Like:
 * [
 *  {
 *    line-1: number,
 *    line-2: number,
 *    x: number,
 *  }
 * ]
 */
var getSeries = function getSeries(_ref) {
  var dataCount = _ref.dataCount,
      withOriginPoint = _ref.withOriginPoint;
  return function () {
    var keys = ['line-1'];
    var ret = (0, _from["default"])(new Array(dataCount), function (_, index) {
      var row = keys.reduce(function (acc, curr) {
        acc[curr] = Math.random();
        return acc;
      }, {});
      row.x = index + 1;
      return row;
    });

    if (withOriginPoint) {
      ret.unshift({
        x: 0,
        'line-1': 0
      });
    }

    return ret;
  };
};

exports.getSeries = getSeries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMveC1heGlzLXRpY2stY291bnQvaGVscGVycy50cyJdLCJuYW1lcyI6WyJnZXRTZXJpZXMiLCJkYXRhQ291bnQiLCJ3aXRoT3JpZ2luUG9pbnQiLCJrZXlzIiwicmV0IiwiQXJyYXkiLCJfIiwiaW5kZXgiLCJyb3ciLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwiTWF0aCIsInJhbmRvbSIsIngiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlBOzs7Ozs7Ozs7O0FBVU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxNQUFjQyxlQUFkLFFBQWNBLGVBQWQ7QUFBQSxTQUFxRixZQUFNO0FBQ2xILFFBQU1DLElBQUksR0FBRyxDQUFDLFFBQUQsQ0FBYjtBQUNBLFFBQU1DLEdBQUcsR0FBRyxzQkFBVyxJQUFJQyxLQUFKLENBQVVKLFNBQVYsQ0FBWCxFQUFpQyxVQUFDSyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN6RCxVQUFNQyxHQUFjLEdBQUdMLElBQUksQ0FBQ00sTUFBTCxDQUFZLFVBQUNDLEdBQUQsRUFBaUJDLElBQWpCLEVBQWtDO0FBQ25FRCxRQUFBQSxHQUFHLENBQUNDLElBQUQsQ0FBSCxHQUFZQyxJQUFJLENBQUNDLE1BQUwsRUFBWjtBQUNBLGVBQU9ILEdBQVA7QUFDRCxPQUhzQixFQUdwQixFQUhvQixDQUF2QjtBQUtBRixNQUFBQSxHQUFHLENBQUNNLENBQUosR0FBUVAsS0FBSyxHQUFHLENBQWhCO0FBRUEsYUFBT0MsR0FBUDtBQUNELEtBVFcsQ0FBWjs7QUFVQSxRQUFJTixlQUFKLEVBQXFCO0FBQ25CRSxNQUFBQSxHQUFHLENBQUNXLE9BQUosQ0FBWTtBQUNWRCxRQUFBQSxDQUFDLEVBQUUsQ0FETztBQUVWLGtCQUFVO0FBRkEsT0FBWjtBQUlEOztBQUNELFdBQU9WLEdBQVA7QUFDRCxHQW5Cd0I7QUFBQSxDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgU2VyaWVzUm93ID0ge1xuICBba2V5OiBzdHJpbmddOiBudW1iZXIgfCBzdHJpbmc7IC8vIGp1c3QgbnVtYmVyLCBhY3R1YWxseVxufTtcblxuLyoqXG4gKiBMaWtlOlxuICogW1xuICogIHtcbiAqICAgIGxpbmUtMTogbnVtYmVyLFxuICogICAgbGluZS0yOiBudW1iZXIsXG4gKiAgICB4OiBudW1iZXIsXG4gKiAgfVxuICogXVxuICovXG5leHBvcnQgY29uc3QgZ2V0U2VyaWVzID0gKHsgZGF0YUNvdW50LCB3aXRoT3JpZ2luUG9pbnQgfTogeyBkYXRhQ291bnQ6IG51bWJlcjsgd2l0aE9yaWdpblBvaW50OiBib29sZWFuIH0pID0+ICgpID0+IHtcbiAgY29uc3Qga2V5cyA9IFsnbGluZS0xJ107XG4gIGNvbnN0IHJldCA9IEFycmF5LmZyb20obmV3IEFycmF5KGRhdGFDb3VudCksIChfLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJvdzogU2VyaWVzUm93ID0ga2V5cy5yZWR1Y2UoKGFjYzogU2VyaWVzUm93LCBjdXJyOiBzdHJpbmcpID0+IHtcbiAgICAgIGFjY1tjdXJyXSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFNlcmllc1Jvdyk7XG5cbiAgICByb3cueCA9IGluZGV4ICsgMTtcblxuICAgIHJldHVybiByb3c7XG4gIH0pO1xuICBpZiAod2l0aE9yaWdpblBvaW50KSB7XG4gICAgcmV0LnVuc2hpZnQoe1xuICAgICAgeDogMCxcbiAgICAgICdsaW5lLTEnOiAwLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuIl19