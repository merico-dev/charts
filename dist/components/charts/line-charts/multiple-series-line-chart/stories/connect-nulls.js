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

var _react = _interopRequireWildcard(require("react"));

var _multipleSeriesLineChart = _interopRequireDefault(require("../multiple-series-line-chart"));

var _mock = _interopRequireDefault(require("./mocks/mock.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: false
    },
    interpolationType: 'monotone',
    xAxis: {
      name: 'Date'
    },
    yAxis: {
      name: 'Dev Equivalent'
    },
    seriesDataKey: 'dataSet',
    seriesNameKey: 'developer$.name',
    seriesNameFormatter: function seriesNameFormatter(series) {
      return "".concat(series.developer.name, " <").concat(series.developer.primaryEmail, ">");
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD'
    }
  };
  var seriesWithNulls = (0, _react.useMemo)(function () {
    var ret = JSON.parse((0, _stringify["default"])(_mock["default"].dataSets));
    ret[4].dataSet[3].value = null;
    ret[4].dataSet[6].value = null;
    ret[4].dataSet[10].value = null;
    ret[4].dataSet[18].value = null;
    return ret;
  }, [_mock["default"]]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Connect Nulls"), /*#__PURE__*/_react["default"].createElement("h2", null, "connectNulls: true"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: seriesWithNulls,
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      connectNulls: true
    })
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "connectNulls: false"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: seriesWithNulls,
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      connectNulls: false
    })
  })));
};

exports.content = content;
var name = 'Connect Nulls';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL2Nvbm5lY3QtbnVsbHMudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJDb250ZW50IiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsImxlZ2VuZCIsImVuYWJsZWQiLCJpbnRlcnBvbGF0aW9uVHlwZSIsInhBeGlzIiwibmFtZSIsInlBeGlzIiwic2VyaWVzRGF0YUtleSIsInNlcmllc05hbWVLZXkiLCJzZXJpZXNOYW1lRm9ybWF0dGVyIiwic2VyaWVzIiwiZGV2ZWxvcGVyIiwicHJpbWFyeUVtYWlsIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsInR5cGUiLCJmb3JtYXQiLCJzZXJpZXNXaXRoTnVsbHMiLCJyZXQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiZGF0YVNldHMiLCJkYXRhU2V0IiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsImNvbm5lY3ROdWxscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESCxLQUZhO0FBS3JCQyxJQUFBQSxpQkFBaUIsRUFBRSxVQUxFO0FBTXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FOYztBQVNyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLElBQUksRUFBRTtBQURELEtBVGM7QUFZckJFLElBQUFBLGFBQWEsRUFBRSxTQVpNO0FBYXJCQyxJQUFBQSxhQUFhLEVBQUUsaUJBYk07QUFjckJDLElBQUFBLG1CQUFtQixFQUFFLDZCQUFDQyxNQUFEO0FBQUEsdUJBQW9CQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJOLElBQXJDLGVBQThDSyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFlBQS9EO0FBQUEsS0FkQTtBQWVyQkMsSUFBQUEsUUFBUSxFQUFFLE1BZlc7QUFnQnJCQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsSUFBSSxFQUFFLFdBRFE7QUFFZEMsTUFBQUEsTUFBTSxFQUFFO0FBRk07QUFoQkssR0FBdkI7QUFxQkEsTUFBTUMsZUFBZSxHQUFHLG9CQUFRLFlBQU07QUFDcEMsUUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVywyQkFBZUMsaUJBQUtDLFFBQXBCLENBQVgsQ0FBWjtBQUNBSixJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9LLE9BQVAsQ0FBZSxDQUFmLEVBQWtCQyxLQUFsQixHQUEwQixJQUExQjtBQUNBTixJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9LLE9BQVAsQ0FBZSxDQUFmLEVBQWtCQyxLQUFsQixHQUEwQixJQUExQjtBQUNBTixJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9LLE9BQVAsQ0FBZSxFQUFmLEVBQW1CQyxLQUFuQixHQUEyQixJQUEzQjtBQUNBTixJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9LLE9BQVAsQ0FBZSxFQUFmLEVBQW1CQyxLQUFuQixHQUEyQixJQUEzQjtBQUNBLFdBQU9OLEdBQVA7QUFDRCxHQVB1QixFQU9yQixDQUFDRyxnQkFBRCxDQVBxQixDQUF4QjtBQVNBLHNCQUNFLDBEQUNFLDREQURGLGVBRUUsaUVBRkYsZUFHRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVJLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLG1DQUFEO0FBQ0UsSUFBQSxNQUFNLEVBQUVULGVBRFY7QUFFRSxJQUFBLGNBQWMsa0NBQ1RsQixjQURTO0FBRVo0QixNQUFBQSxZQUFZLEVBQUU7QUFGRjtBQUZoQixJQURGLENBSEYsZUFhRSxrRUFiRixlQWNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUYsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsbUNBQUQ7QUFDRSxJQUFBLE1BQU0sRUFBRVQsZUFEVjtBQUVFLElBQUEsY0FBYyxrQ0FDVGxCLGNBRFM7QUFFWjRCLE1BQUFBLFlBQVksRUFBRTtBQUZGO0FBRmhCLElBREYsQ0FkRixDQURGO0FBMEJELENBekRNOzs7QUEwREEsSUFBTXRCLElBQUksR0FBRyxlQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnQgZnJvbSAnLi4vbXVsdGlwbGUtc2VyaWVzLWxpbmUtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2Nrcy9tb2NrLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIGxlZ2VuZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ21vbm90b25lJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ0RhdGUnLFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXYgRXF1aXZhbGVudCcsXG4gICAgfSxcbiAgICBzZXJpZXNEYXRhS2V5OiAnZGF0YVNldCcsXG4gICAgc2VyaWVzTmFtZUtleTogJ2RldmVsb3BlciQubmFtZScsXG4gICAgc2VyaWVzTmFtZUZvcm1hdHRlcjogKHNlcmllczogYW55KSA9PiBgJHtzZXJpZXMuZGV2ZWxvcGVyLm5hbWV9IDwke3Nlcmllcy5kZXZlbG9wZXIucHJpbWFyeUVtYWlsfT5gLFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgfTtcbiAgY29uc3Qgc2VyaWVzV2l0aE51bGxzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhLmRhdGFTZXRzKSk7XG4gICAgcmV0WzRdLmRhdGFTZXRbM10udmFsdWUgPSBudWxsO1xuICAgIHJldFs0XS5kYXRhU2V0WzZdLnZhbHVlID0gbnVsbDtcbiAgICByZXRbNF0uZGF0YVNldFsxMF0udmFsdWUgPSBudWxsO1xuICAgIHJldFs0XS5kYXRhU2V0WzE4XS52YWx1ZSA9IG51bGw7XG4gICAgcmV0dXJuIHJldDtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q29ubmVjdCBOdWxsczwvaDE+XG4gICAgICA8aDI+Y29ubmVjdE51bGxzOiB0cnVlPC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxNdWx0aXBsZVNlcmllc0xpbmVDaGFydFxuICAgICAgICAgIHNlcmllcz17c2VyaWVzV2l0aE51bGxzfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXt7XG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9ucyxcbiAgICAgICAgICAgIGNvbm5lY3ROdWxsczogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoMj5jb25uZWN0TnVsbHM6IGZhbHNlPC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxNdWx0aXBsZVNlcmllc0xpbmVDaGFydFxuICAgICAgICAgIHNlcmllcz17c2VyaWVzV2l0aE51bGxzfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXt7XG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9ucyxcbiAgICAgICAgICAgIGNvbm5lY3ROdWxsczogZmFsc2UsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0Nvbm5lY3QgTnVsbHMnO1xuIl19