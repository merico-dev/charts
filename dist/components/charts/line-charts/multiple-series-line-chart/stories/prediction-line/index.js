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

var name = 'Prediction Line';
exports.name = name;
var parameters = {
  args: {
    extendDays: 3,
    dataCount: 30
  },
  argTypes: {
    extendDays: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1
      }
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL3ByZWRpY3Rpb24tbGluZS9pbmRleC50cyJdLCJuYW1lcyI6WyJuYW1lIiwicGFyYW1ldGVycyIsImFyZ3MiLCJleHRlbmREYXlzIiwiZGF0YUNvdW50IiwiYXJnVHlwZXMiLCJjb250cm9sIiwidHlwZSIsIm1pbiIsIm1heCIsInN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7O0FBM0JPLElBQU1BLElBQUksR0FBRyxpQkFBYjs7QUFFQSxJQUFNQyxVQUFVLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxVQUFVLEVBQUUsQ0FEUjtBQUVKQyxJQUFBQSxTQUFTLEVBQUU7QUFGUCxHQURrQjtBQUt4QkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JGLElBQUFBLFVBQVUsRUFBRTtBQUNWRyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsUUFBQUEsR0FBRyxFQUFFLENBRkU7QUFHUEMsUUFBQUEsR0FBRyxFQUFFLEVBSEU7QUFJUEMsUUFBQUEsSUFBSSxFQUFFO0FBSkM7QUFEQyxLQURKO0FBU1JOLElBQUFBLFNBQVMsRUFBRTtBQUNURSxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsUUFBQUEsR0FBRyxFQUFFLEVBRkU7QUFHUEMsUUFBQUEsR0FBRyxFQUFFLEdBSEU7QUFJUEMsUUFBQUEsSUFBSSxFQUFFO0FBSkM7QUFEQTtBQVRIO0FBTGMsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbmFtZSA9ICdQcmVkaWN0aW9uIExpbmUnO1xuXG5leHBvcnQgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgYXJnczoge1xuICAgIGV4dGVuZERheXM6IDMsXG4gICAgZGF0YUNvdW50OiAzMCxcbiAgfSxcbiAgYXJnVHlwZXM6IHtcbiAgICBleHRlbmREYXlzOiB7XG4gICAgICBjb250cm9sOiB7XG4gICAgICAgIHR5cGU6ICdyYW5nZScsXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgc3RlcDogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhQ291bnQ6IHtcbiAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgbWluOiAxMCxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHN0ZXA6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnQnO1xuIl19