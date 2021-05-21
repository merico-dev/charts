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

var _values = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/values"));

var _regression = require("../../../../../helpers/regression");

var _content = _interopRequireDefault(require("./content"));

var name = 'Regression Line';
exports.name = name;
var parameters = {
  args: {
    regressionType1: 'regressionLinear',
    regressionType2: 'regressionLinear'
  },
  argTypes: {
    regressionType1: {
      control: {
        type: 'select',
        options: (0, _values["default"])(_regression.REGRESSION_TYPES)
      }
    },
    regressionType2: {
      control: {
        type: 'select',
        options: (0, _values["default"])(_regression.REGRESSION_TYPES)
      }
    }
  }
};
exports.parameters = parameters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvcmVncmVzc2lvbi1saW5lL2luZGV4LnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJwYXJhbWV0ZXJzIiwiYXJncyIsInJlZ3Jlc3Npb25UeXBlMSIsInJlZ3Jlc3Npb25UeXBlMiIsImFyZ1R5cGVzIiwiY29udHJvbCIsInR5cGUiLCJvcHRpb25zIiwiUkVHUkVTU0lPTl9UWVBFUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0E7O0FBRE8sSUFBTUEsSUFBSSxHQUFHLGlCQUFiOztBQUdBLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLGVBQWUsRUFBRSxrQkFEYjtBQUVKQyxJQUFBQSxlQUFlLEVBQUU7QUFGYixHQURrQjtBQUt4QkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JGLElBQUFBLGVBQWUsRUFBRTtBQUNmRyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFLFFBREM7QUFFUEMsUUFBQUEsT0FBTyxFQUFFLHdCQUFjQyw0QkFBZDtBQUZGO0FBRE0sS0FEVDtBQU9STCxJQUFBQSxlQUFlLEVBQUU7QUFDZkUsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLElBQUksRUFBRSxRQURDO0FBRVBDLFFBQUFBLE9BQU8sRUFBRSx3QkFBY0MsNEJBQWQ7QUFGRjtBQURNO0FBUFQ7QUFMYyxDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJFR1JFU1NJT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9oZWxwZXJzL3JlZ3Jlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdSZWdyZXNzaW9uIExpbmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb250ZW50IH0gZnJvbSAnLi9jb250ZW50JztcblxuZXhwb3J0IGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gIGFyZ3M6IHtcbiAgICByZWdyZXNzaW9uVHlwZTE6ICdyZWdyZXNzaW9uTGluZWFyJyxcbiAgICByZWdyZXNzaW9uVHlwZTI6ICdyZWdyZXNzaW9uTGluZWFyJyxcbiAgfSxcbiAgYXJnVHlwZXM6IHtcbiAgICByZWdyZXNzaW9uVHlwZTE6IHtcbiAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIG9wdGlvbnM6IE9iamVjdC52YWx1ZXMoUkVHUkVTU0lPTl9UWVBFUyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVncmVzc2lvblR5cGUyOiB7XG4gICAgICBjb250cm9sOiB7XG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICBvcHRpb25zOiBPYmplY3QudmFsdWVzKFJFR1JFU1NJT05fVFlQRVMpLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==