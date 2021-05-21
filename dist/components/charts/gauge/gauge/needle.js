"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Needle;

var _react = _interopRequireDefault(require("react"));

function Needle(_ref) {
  var angle = _ref.angle;
  return /*#__PURE__*/_react["default"].createElement("polygon", {
    points: ['0,-1', '0.05,-0.1', '0,0', '-0.05,-0.1'].join(' '),
    fill: "#82260D",
    transform: "translate(0, 0.1) rotate(".concat(angle * (180 / Math.PI), ", 0, -0.1)"),
    filter: "url(#needle-shadow)"
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS9uZWVkbGUudHN4Il0sIm5hbWVzIjpbIk5lZWRsZSIsImFuZ2xlIiwiam9pbiIsIk1hdGgiLCJQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0EsTUFBVCxPQUFnQztBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUM3QyxzQkFDRTtBQUNFLElBQUEsTUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0IsS0FBdEIsRUFBNkIsWUFBN0IsRUFBMkNDLElBQTNDLENBQWdELEdBQWhELENBRFY7QUFFRSxJQUFBLElBQUksRUFBQyxTQUZQO0FBR0UsSUFBQSxTQUFTLHFDQUE4QkQsS0FBSyxJQUFJLE1BQU1FLElBQUksQ0FBQ0MsRUFBZixDQUFuQyxlQUhYO0FBSUUsSUFBQSxNQUFNLEVBQUM7QUFKVCxJQURGO0FBUUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZWVkbGUoeyBhbmdsZSB9OiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8cG9seWdvblxuICAgICAgcG9pbnRzPXtbJzAsLTEnLCAnMC4wNSwtMC4xJywgJzAsMCcsICctMC4wNSwtMC4xJ10uam9pbignICcpfVxuICAgICAgZmlsbD1cIiM4MjI2MERcIlxuICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsIDAuMSkgcm90YXRlKCR7YW5nbGUgKiAoMTgwIC8gTWF0aC5QSSl9LCAwLCAtMC4xKWB9XG4gICAgICBmaWx0ZXI9XCJ1cmwoI25lZWRsZS1zaGFkb3cpXCJcbiAgICAvPlxuICApO1xufVxuIl19