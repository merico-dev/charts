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

var name = 'Zoom';
exports.name = name;
var parameters = {
  args: {
    dataCount: 30
  },
  argTypes: {
    dataCount: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 1
      }
    }
  }
};
exports.parameters = parameters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvem9vbS9pbmRleC50cyJdLCJuYW1lcyI6WyJuYW1lIiwicGFyYW1ldGVycyIsImFyZ3MiLCJkYXRhQ291bnQiLCJhcmdUeXBlcyIsImNvbnRyb2wiLCJ0eXBlIiwibWluIiwibWF4Iiwic3RlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQURPLElBQU1BLElBQUksR0FBRyxNQUFiOztBQUdBLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLFNBQVMsRUFBRTtBQURQLEdBRGtCO0FBSXhCQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkQsSUFBQUEsU0FBUyxFQUFFO0FBQ1RFLE1BQUFBLE9BQU8sRUFBRTtBQUNQQyxRQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxRQUFBQSxHQUFHLEVBQUUsRUFGRTtBQUdQQyxRQUFBQSxHQUFHLEVBQUUsR0FIRTtBQUlQQyxRQUFBQSxJQUFJLEVBQUU7QUFKQztBQURBO0FBREg7QUFKYyxDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBuYW1lID0gJ1pvb20nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb250ZW50IH0gZnJvbSAnLi9jb250ZW50JztcblxuZXhwb3J0IGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gIGFyZ3M6IHtcbiAgICBkYXRhQ291bnQ6IDMwLFxuICB9LFxuICBhcmdUeXBlczoge1xuICAgIGRhdGFDb3VudDoge1xuICAgICAgY29udHJvbDoge1xuICAgICAgICB0eXBlOiAncmFuZ2UnLFxuICAgICAgICBtaW46IDEwLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgc3RlcDogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=