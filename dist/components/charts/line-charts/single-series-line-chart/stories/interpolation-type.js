"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.parameters = exports.name = exports.content = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _singleSeriesLineChart = _interopRequireDefault(require("../single-series-line-chart"));

var _interpolation = require("../../../../helpers/interpolation");

var _mock = _interopRequireDefault(require("./mock.json"));

var content = function Content(_ref) {
  var interpolationTypeKey = _ref.interpolationTypeKey;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
      index = _useState2[0];

  var interpolationType = _react["default"].useMemo(function () {
    if (_interpolation.INTERPOLATION_TYPES.basic.includes(interpolationTypeKey)) {
      return interpolationTypeKey;
    } // @ts-expect-error Element implicitly has an 'any' type because expression of type 'string' can't be used to index type ...


    return _interpolation.INTERPOLATION_TYPES.func[interpolationTypeKey];
  }, [interpolationTypeKey]);

  var configurations = {
    withTooltip: true,
    withLegend: false,
    interpolationType: interpolationType,
    storkeColor: '#CA4521',
    refInterpolationType: '',
    refInterpolationColor: '#2152ca',
    refRegressionType: 'regressionLinear',
    refRegressionColor: '#2152ca',
    xAxis: {
      name: 'Date'
    },
    yAxis: {
      name: 'Dev Equivalent'
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD'
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Interpolation Type"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: _mock["default"].dataSets[index].dataSet,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Interpolation Type';
exports.name = name;
var parameters = {
  args: {
    interpolationTypeKey: 'linear'
  },
  argTypes: {
    interpolationTypeKey: {
      control: {
        type: 'inline-radio',
        options: [].concat((0, _toConsumableArray2["default"])(_interpolation.INTERPOLATION_TYPES.basic), (0, _toConsumableArray2["default"])((0, _keys["default"])(_interpolation.INTERPOLATION_TYPES.func)))
      }
    }
  }
};
exports.parameters = parameters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9pbnRlcnBvbGF0aW9uLXR5cGUudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJDb250ZW50IiwiaW50ZXJwb2xhdGlvblR5cGVLZXkiLCJpbmRleCIsImludGVycG9sYXRpb25UeXBlIiwiUmVhY3QiLCJ1c2VNZW1vIiwiSU5URVJQT0xBVElPTl9UWVBFUyIsImJhc2ljIiwiaW5jbHVkZXMiLCJmdW5jIiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsIndpdGhMZWdlbmQiLCJzdG9ya2VDb2xvciIsInJlZkludGVycG9sYXRpb25UeXBlIiwicmVmSW50ZXJwb2xhdGlvbkNvbG9yIiwicmVmUmVncmVzc2lvblR5cGUiLCJyZWZSZWdyZXNzaW9uQ29sb3IiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0Iiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwiZGF0YVNldHMiLCJkYXRhU2V0IiwicGFyYW1ldGVycyIsImFyZ3MiLCJhcmdUeXBlcyIsImNvbnRyb2wiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULE9BQTZFO0FBQUEsTUFBMURDLG9CQUEwRCxRQUExREEsb0JBQTBEOztBQUFBLGtCQUNsRixxQkFBUyxDQUFULENBRGtGO0FBQUE7QUFBQSxNQUMzRkMsS0FEMkY7O0FBRWxHLE1BQU1DLGlCQUFpQixHQUFHQyxrQkFBTUMsT0FBTixDQUFjLFlBQU07QUFDNUMsUUFBSUMsbUNBQW9CQyxLQUFwQixDQUEwQkMsUUFBMUIsQ0FBbUNQLG9CQUFuQyxDQUFKLEVBQThEO0FBQzVELGFBQU9BLG9CQUFQO0FBQ0QsS0FIMkMsQ0FJNUM7OztBQUNBLFdBQU9LLG1DQUFvQkcsSUFBcEIsQ0FBeUJSLG9CQUF6QixDQUFQO0FBQ0QsR0FOeUIsRUFNdkIsQ0FBQ0Esb0JBQUQsQ0FOdUIsQ0FBMUI7O0FBUUEsTUFBTVMsY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxXQUFXLEVBQUUsSUFEUTtBQUVyQkMsSUFBQUEsVUFBVSxFQUFFLEtBRlM7QUFHckJULElBQUFBLGlCQUFpQixFQUFqQkEsaUJBSHFCO0FBSXJCVSxJQUFBQSxXQUFXLEVBQUUsU0FKUTtBQUtyQkMsSUFBQUEsb0JBQW9CLEVBQUUsRUFMRDtBQU1yQkMsSUFBQUEscUJBQXFCLEVBQUUsU0FORjtBQU9yQkMsSUFBQUEsaUJBQWlCLEVBQUUsa0JBUEU7QUFRckJDLElBQUFBLGtCQUFrQixFQUFFLFNBUkM7QUFTckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVRjO0FBWXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FaYztBQWVyQkUsSUFBQUEsUUFBUSxFQUFFLE1BZlc7QUFnQnJCQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsSUFBSSxFQUFFLFdBRFE7QUFFZEMsTUFBQUEsTUFBTSxFQUFFO0FBRk07QUFoQkssR0FBdkI7QUFxQkEsc0JBQ0UsMERBQ0UsaUVBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLGlDQUFEO0FBQXVCLElBQUEsSUFBSSxFQUFFQyxpQkFBS0MsUUFBTCxDQUFjMUIsS0FBZCxFQUFxQjJCLE9BQWxEO0FBQTJELElBQUEsY0FBYyxFQUFFbkI7QUFBM0UsSUFERixDQUZGLENBREY7QUFRRCxDQXZDTTs7O0FBd0NBLElBQU1TLElBQUksR0FBRyxvQkFBYjs7QUFFQSxJQUFNVyxVQUFVLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRTtBQUNKOUIsSUFBQUEsb0JBQW9CLEVBQUU7QUFEbEIsR0FEa0I7QUFJeEIrQixFQUFBQSxRQUFRLEVBQUU7QUFDUi9CLElBQUFBLG9CQUFvQixFQUFFO0FBQ3BCZ0MsTUFBQUEsT0FBTyxFQUFFO0FBQ1BWLFFBQUFBLElBQUksRUFBRSxjQURDO0FBRVBXLFFBQUFBLE9BQU8sZ0RBQU01QixtQ0FBb0JDLEtBQTFCLHVDQUFvQyxzQkFBWUQsbUNBQW9CRyxJQUFoQyxDQUFwQztBQUZBO0FBRFc7QUFEZDtBQUpjLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpbmdsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQnO1xuaW1wb3J0IHsgSU5URVJQT0xBVElPTl9UWVBFUyB9IGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvaW50ZXJwb2xhdGlvbic7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2suanNvbic7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCh7IGludGVycG9sYXRpb25UeXBlS2V5IH06IHsgaW50ZXJwb2xhdGlvblR5cGVLZXk6IHN0cmluZyB9KSB7XG4gIGNvbnN0IFtpbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaW50ZXJwb2xhdGlvblR5cGUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoSU5URVJQT0xBVElPTl9UWVBFUy5iYXNpYy5pbmNsdWRlcyhpbnRlcnBvbGF0aW9uVHlwZUtleSkpIHtcbiAgICAgIHJldHVybiBpbnRlcnBvbGF0aW9uVHlwZUtleTtcbiAgICB9XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ3N0cmluZycgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlIC4uLlxuICAgIHJldHVybiBJTlRFUlBPTEFUSU9OX1RZUEVTLmZ1bmNbaW50ZXJwb2xhdGlvblR5cGVLZXldO1xuICB9LCBbaW50ZXJwb2xhdGlvblR5cGVLZXldKTtcblxuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiBmYWxzZSxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZSxcbiAgICBzdG9ya2VDb2xvcjogJyNDQTQ1MjEnLFxuICAgIHJlZkludGVycG9sYXRpb25UeXBlOiAnJyxcbiAgICByZWZJbnRlcnBvbGF0aW9uQ29sb3I6ICcjMjE1MmNhJyxcbiAgICByZWZSZWdyZXNzaW9uVHlwZTogJ3JlZ3Jlc3Npb25MaW5lYXInLFxuICAgIHJlZlJlZ3Jlc3Npb25Db2xvcjogJyMyMTUyY2EnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkludGVycG9sYXRpb24gVHlwZTwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8U2luZ2xlU2VyaWVzTGluZUNoYXJ0IGRhdGE9e2RhdGEuZGF0YVNldHNbaW5kZXhdLmRhdGFTZXR9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0ludGVycG9sYXRpb24gVHlwZSc7XG5cbmV4cG9ydCBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICBhcmdzOiB7XG4gICAgaW50ZXJwb2xhdGlvblR5cGVLZXk6ICdsaW5lYXInLFxuICB9LFxuICBhcmdUeXBlczoge1xuICAgIGludGVycG9sYXRpb25UeXBlS2V5OiB7XG4gICAgICBjb250cm9sOiB7XG4gICAgICAgIHR5cGU6ICdpbmxpbmUtcmFkaW8nLFxuICAgICAgICBvcHRpb25zOiBbLi4uSU5URVJQT0xBVElPTl9UWVBFUy5iYXNpYywgLi4uT2JqZWN0LmtleXMoSU5URVJQT0xBVElPTl9UWVBFUy5mdW5jKV0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl19