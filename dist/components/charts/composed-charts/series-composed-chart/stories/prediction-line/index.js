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
    dataCount: 30,
    scale: 'auto'
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
    },
    scale: {
      control: {
        type: 'select',
        options: ['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utc', 'sequential', 'threshold']
      }
    }
  }
};
exports.parameters = parameters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvcHJlZGljdGlvbi1saW5lL2luZGV4LnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJwYXJhbWV0ZXJzIiwiYXJncyIsImV4dGVuZERheXMiLCJkYXRhQ291bnQiLCJzY2FsZSIsImFyZ1R5cGVzIiwiY29udHJvbCIsInR5cGUiLCJtaW4iLCJtYXgiLCJzdGVwIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQURPLElBQU1BLElBQUksR0FBRyxpQkFBYjs7QUFHQSxJQUFNQyxVQUFVLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxVQUFVLEVBQUUsQ0FEUjtBQUVKQyxJQUFBQSxTQUFTLEVBQUUsRUFGUDtBQUdKQyxJQUFBQSxLQUFLLEVBQUU7QUFISCxHQURrQjtBQU14QkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JILElBQUFBLFVBQVUsRUFBRTtBQUNWSSxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsUUFBQUEsR0FBRyxFQUFFLENBRkU7QUFHUEMsUUFBQUEsR0FBRyxFQUFFLEVBSEU7QUFJUEMsUUFBQUEsSUFBSSxFQUFFO0FBSkM7QUFEQyxLQURKO0FBU1JQLElBQUFBLFNBQVMsRUFBRTtBQUNURyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsUUFBQUEsR0FBRyxFQUFFLEVBRkU7QUFHUEMsUUFBQUEsR0FBRyxFQUFFLEdBSEU7QUFJUEMsUUFBQUEsSUFBSSxFQUFFO0FBSkM7QUFEQSxLQVRIO0FBaUJSTixJQUFBQSxLQUFLLEVBQUU7QUFDTEUsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLElBQUksRUFBRSxRQURDO0FBRVBJLFFBQUFBLE9BQU8sRUFBRSxDQUNQLE1BRE8sRUFFUCxRQUZPLEVBR1AsS0FITyxFQUlQLE1BSk8sRUFLUCxLQUxPLEVBTVAsVUFOTyxFQU9QLE1BUE8sRUFRUCxNQVJPLEVBU1AsT0FUTyxFQVVQLFNBVk8sRUFXUCxVQVhPLEVBWVAsVUFaTyxFQWFQLEtBYk8sRUFjUCxZQWRPLEVBZVAsV0FmTztBQUZGO0FBREo7QUFqQkM7QUFOYyxDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBuYW1lID0gJ1ByZWRpY3Rpb24gTGluZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnQnO1xuXG5leHBvcnQgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgYXJnczoge1xuICAgIGV4dGVuZERheXM6IDMsXG4gICAgZGF0YUNvdW50OiAzMCxcbiAgICBzY2FsZTogJ2F1dG8nLFxuICB9LFxuICBhcmdUeXBlczoge1xuICAgIGV4dGVuZERheXM6IHtcbiAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDEwLFxuICAgICAgICBzdGVwOiAxLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGFDb3VudDoge1xuICAgICAgY29udHJvbDoge1xuICAgICAgICB0eXBlOiAncmFuZ2UnLFxuICAgICAgICBtaW46IDEwLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgc3RlcDogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzY2FsZToge1xuICAgICAgY29udHJvbDoge1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICdhdXRvJyxcbiAgICAgICAgICAnbGluZWFyJyxcbiAgICAgICAgICAncG93JyxcbiAgICAgICAgICAnc3FydCcsXG4gICAgICAgICAgJ2xvZycsXG4gICAgICAgICAgJ2lkZW50aXR5JyxcbiAgICAgICAgICAndGltZScsXG4gICAgICAgICAgJ2JhbmQnLFxuICAgICAgICAgICdwb2ludCcsXG4gICAgICAgICAgJ29yZGluYWwnLFxuICAgICAgICAgICdxdWFudGlsZScsXG4gICAgICAgICAgJ3F1YW50aXplJyxcbiAgICAgICAgICAndXRjJyxcbiAgICAgICAgICAnc2VxdWVudGlhbCcsXG4gICAgICAgICAgJ3RocmVzaG9sZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl19