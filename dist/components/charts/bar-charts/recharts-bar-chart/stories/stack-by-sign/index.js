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

var name = 'Stack by Sign';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL3N0YWNrLWJ5LXNpZ24vaW5kZXgudHMiXSwibmFtZXMiOlsibmFtZSIsInBhcmFtZXRlcnMiLCJhcmdzIiwiZGF0YUNvdW50IiwiYXJnVHlwZXMiLCJjb250cm9sIiwidHlwZSIsIm1pbiIsIm1heCIsInN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFETyxJQUFNQSxJQUFJLEdBQUcsZUFBYjs7QUFHQSxJQUFNQyxVQUFVLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxTQUFTLEVBQUU7QUFEUCxHQURrQjtBQUl4QkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JELElBQUFBLFNBQVMsRUFBRTtBQUNURSxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsUUFBQUEsR0FBRyxFQUFFLEVBRkU7QUFHUEMsUUFBQUEsR0FBRyxFQUFFLEdBSEU7QUFJUEMsUUFBQUEsSUFBSSxFQUFFO0FBSkM7QUFEQTtBQURIO0FBSmMsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbmFtZSA9ICdTdGFjayBieSBTaWduJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29udGVudCB9IGZyb20gJy4vY29udGVudCc7XG5cbmV4cG9ydCBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICBhcmdzOiB7XG4gICAgZGF0YUNvdW50OiAzMCxcbiAgfSxcbiAgYXJnVHlwZXM6IHtcbiAgICBkYXRhQ291bnQ6IHtcbiAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgbWluOiAxMCxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHN0ZXA6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl19