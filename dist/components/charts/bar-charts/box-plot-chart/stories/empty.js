"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _boxPlotChart = _interopRequireDefault(require("../box-plot-chart"));

var _basic = _interopRequireDefault(require("./mocks/basic.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  var configurations = {
    strokeColor: '#727272',
    lowLabel: 'statistic.minimum',
    q1Label: 'statistic.q1',
    medianLabel: 'statistic.median',
    q3Label: 'statistic.q3',
    highLabel: 'statistic.maximum',
    outliersLabel: 'statistic.outliers'
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Empty"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_boxPlotChart["default"], {
    data: _basic["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      isDataEmpty: true // TODO(leto) change it

    }),
    emptyContent: "Empty"
  })));
};

exports.content = content;
var name = 'Empty';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL2JveC1wbG90LWNoYXJ0L3N0b3JpZXMvZW1wdHkudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJDb250ZW50IiwiY29uZmlndXJhdGlvbnMiLCJzdHJva2VDb2xvciIsImxvd0xhYmVsIiwicTFMYWJlbCIsIm1lZGlhbkxhYmVsIiwicTNMYWJlbCIsImhpZ2hMYWJlbCIsIm91dGxpZXJzTGFiZWwiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJkYXRhIiwiaXNEYXRhRW1wdHkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxTQURRO0FBRXJCQyxJQUFBQSxRQUFRLEVBQUUsbUJBRlc7QUFHckJDLElBQUFBLE9BQU8sRUFBRSxjQUhZO0FBSXJCQyxJQUFBQSxXQUFXLEVBQUUsa0JBSlE7QUFLckJDLElBQUFBLE9BQU8sRUFBRSxjQUxZO0FBTXJCQyxJQUFBQSxTQUFTLEVBQUUsbUJBTlU7QUFPckJDLElBQUFBLGFBQWEsRUFBRTtBQVBNLEdBQXZCO0FBU0Esc0JBQ0UsMERBQ0Usb0RBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRSxHQUF0QjtBQUEyQkMsTUFBQUEsYUFBYSxFQUFFO0FBQTFDO0FBQVosa0JBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUMsaUJBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RYLGNBRFM7QUFFWlksTUFBQUEsV0FBVyxFQUFFLElBRkQsQ0FFTzs7QUFGUCxNQUZoQjtBQU1FLElBQUEsWUFBWSxFQUFDO0FBTmYsSUFERixDQUZGLENBREY7QUFlRCxDQXpCTTs7O0FBMEJBLElBQU1DLElBQUksR0FBRyxPQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3hQbG90Q2hhcnQgZnJvbSAnLi4vYm94LXBsb3QtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2Nrcy9iYXNpYy5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICBzdHJva2VDb2xvcjogJyM3MjcyNzInLFxuICAgIGxvd0xhYmVsOiAnc3RhdGlzdGljLm1pbmltdW0nLFxuICAgIHExTGFiZWw6ICdzdGF0aXN0aWMucTEnLFxuICAgIG1lZGlhbkxhYmVsOiAnc3RhdGlzdGljLm1lZGlhbicsXG4gICAgcTNMYWJlbDogJ3N0YXRpc3RpYy5xMycsXG4gICAgaGlnaExhYmVsOiAnc3RhdGlzdGljLm1heGltdW0nLFxuICAgIG91dGxpZXJzTGFiZWw6ICdzdGF0aXN0aWMub3V0bGllcnMnLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+RW1wdHk8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCwgcGFkZGluZ0JvdHRvbTogMTAwIH19PlxuICAgICAgICA8Qm94UGxvdENoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICBpc0RhdGFFbXB0eTogdHJ1ZSwgLy8gVE9ETyhsZXRvKSBjaGFuZ2UgaXRcbiAgICAgICAgICB9fVxuICAgICAgICAgIGVtcHR5Q29udGVudD1cIkVtcHR5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0VtcHR5JztcbiJdfQ==