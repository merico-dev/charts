"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

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

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/json/stringify"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _singleSeriesLineChart = _interopRequireDefault(require("../single-series-line-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
      index = _useState2[0];

  var configurations = {
    withTooltip: true,
    withLegend: false,
    interpolationType: 'linear',
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
  var seriesWithNulls = (0, _react.useMemo)(function () {
    var ret = JSON.parse((0, _stringify["default"])(_mock["default"].dataSets[index].dataSet));
    ret[2].value = null;
    ret[7].value = null;
    ret[9].value = null;
    return ret;
  }, [_mock["default"]]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Connect Nulls"), /*#__PURE__*/_react["default"].createElement("h2", null, "connectNulls: true"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: seriesWithNulls,
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      connectNulls: true // HERE

    })
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "connectNulls: false"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: seriesWithNulls,
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      connectNulls: false
    })
  })));
};

exports.content = content;
var name = 'Connect Nulls';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9jb25uZWN0LW51bGxzLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImluZGV4IiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsIndpdGhMZWdlbmQiLCJpbnRlcnBvbGF0aW9uVHlwZSIsInN0b3JrZUNvbG9yIiwicmVmSW50ZXJwb2xhdGlvblR5cGUiLCJyZWZJbnRlcnBvbGF0aW9uQ29sb3IiLCJyZWZSZWdyZXNzaW9uVHlwZSIsInJlZlJlZ3Jlc3Npb25Db2xvciIsInhBeGlzIiwibmFtZSIsInlBeGlzIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsInR5cGUiLCJmb3JtYXQiLCJzZXJpZXNXaXRoTnVsbHMiLCJyZXQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiZGF0YVNldHMiLCJkYXRhU2V0IiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsImNvbm5lY3ROdWxscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFBQSxrQkFDeEIscUJBQVMsQ0FBVCxDQUR3QjtBQUFBO0FBQUEsTUFDakNDLEtBRGlDOztBQUV4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUUsS0FGUztBQUdyQkMsSUFBQUEsaUJBQWlCLEVBQUUsUUFIRTtBQUlyQkMsSUFBQUEsV0FBVyxFQUFFLFNBSlE7QUFLckJDLElBQUFBLG9CQUFvQixFQUFFLEVBTEQ7QUFNckJDLElBQUFBLHFCQUFxQixFQUFFLFNBTkY7QUFPckJDLElBQUFBLGlCQUFpQixFQUFFLGtCQVBFO0FBUXJCQyxJQUFBQSxrQkFBa0IsRUFBRSxTQVJDO0FBU3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FUYztBQVlyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLElBQUksRUFBRTtBQURELEtBWmM7QUFlckJFLElBQUFBLFFBQVEsRUFBRSxNQWZXO0FBZ0JyQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxXQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNO0FBaEJLLEdBQXZCO0FBcUJBLE1BQU1DLGVBQWUsR0FBRyxvQkFBUSxZQUFNO0FBQ3BDLFFBQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsMkJBQWVDLGlCQUFLQyxRQUFMLENBQWN0QixLQUFkLEVBQXFCdUIsT0FBcEMsQ0FBWCxDQUFaO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT00sS0FBUCxHQUFlLElBQWY7QUFDQU4sSUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPTSxLQUFQLEdBQWUsSUFBZjtBQUNBTixJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9NLEtBQVAsR0FBZSxJQUFmO0FBQ0EsV0FBT04sR0FBUDtBQUNELEdBTnVCLEVBTXJCLENBQUNHLGdCQUFELENBTnFCLENBQXhCO0FBT0Esc0JBQ0UsMERBQ0UsNERBREYsZUFFRSxpRUFGRixlQUdFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUksTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsaUNBQUQ7QUFDRSxJQUFBLElBQUksRUFBRVQsZUFEUjtBQUVFLElBQUEsY0FBYyxrQ0FDVGhCLGNBRFM7QUFFWjBCLE1BQUFBLFlBQVksRUFBRSxJQUZGLENBRVE7O0FBRlI7QUFGaEIsSUFERixDQUhGLGVBYUUsa0VBYkYsZUFjRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVGLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLGlDQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVULGVBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RoQixjQURTO0FBRVowQixNQUFBQSxZQUFZLEVBQUU7QUFGRjtBQUZoQixJQURGLENBZEYsQ0FERjtBQTBCRCxDQXhETTs7O0FBeURBLElBQU1oQixJQUFJLEdBQUcsZUFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW5nbGVTZXJpZXNMaW5lQ2hhcnQgZnJvbSAnLi4vc2luZ2xlLXNlcmllcy1saW5lLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9jay5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBbaW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIHdpdGhMZWdlbmQ6IGZhbHNlLFxuICAgIGludGVycG9sYXRpb25UeXBlOiAnbGluZWFyJyxcbiAgICBzdG9ya2VDb2xvcjogJyNDQTQ1MjEnLFxuICAgIHJlZkludGVycG9sYXRpb25UeXBlOiAnJyxcbiAgICByZWZJbnRlcnBvbGF0aW9uQ29sb3I6ICcjMjE1MmNhJyxcbiAgICByZWZSZWdyZXNzaW9uVHlwZTogJ3JlZ3Jlc3Npb25MaW5lYXInLFxuICAgIHJlZlJlZ3Jlc3Npb25Db2xvcjogJyMyMTUyY2EnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgfTtcbiAgY29uc3Qgc2VyaWVzV2l0aE51bGxzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhLmRhdGFTZXRzW2luZGV4XS5kYXRhU2V0KSk7XG4gICAgcmV0WzJdLnZhbHVlID0gbnVsbDtcbiAgICByZXRbN10udmFsdWUgPSBudWxsO1xuICAgIHJldFs5XS52YWx1ZSA9IG51bGw7XG4gICAgcmV0dXJuIHJldDtcbiAgfSwgW2RhdGFdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNvbm5lY3QgTnVsbHM8L2gxPlxuICAgICAgPGgyPmNvbm5lY3ROdWxsczogdHJ1ZTwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8U2luZ2xlU2VyaWVzTGluZUNoYXJ0XG4gICAgICAgICAgZGF0YT17c2VyaWVzV2l0aE51bGxzfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXt7XG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9ucyxcbiAgICAgICAgICAgIGNvbm5lY3ROdWxsczogdHJ1ZSwgLy8gSEVSRVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgyPmNvbm5lY3ROdWxsczogZmFsc2U8L2gyPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFNpbmdsZVNlcmllc0xpbmVDaGFydFxuICAgICAgICAgIGRhdGE9e3Nlcmllc1dpdGhOdWxsc31cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICBjb25uZWN0TnVsbHM6IGZhbHNlLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdDb25uZWN0IE51bGxzJztcbiJdfQ==