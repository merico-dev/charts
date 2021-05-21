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

var _radarChart = _interopRequireDefault(require("../radar-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  var configurations = {
    angleField: 'metricName',
    radiusField: 'value',
    seriesField: 'name',
    radiusAxis: {
      grid: {
        line: {
          type: 'line'
        }
      },
      min: 0,
      max: 1
    },
    line: {
      visible: true
    },
    point: {
      visible: true,
      shape: 'circle'
    },
    legend: {
      visible: true,
      position: 'bottom-center'
    },
    valueFormatter: function valueFormatter(v) {
      return v;
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Custom Color"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_radarChart["default"], {
    data: _mock["default"],
    configurations: configurations
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_radarChart["default"], {
    data: _mock["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      color: ['#d62728', '#2ca02c']
    })
  })));
};

exports.content = content;
var name = 'Color';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9yYWRhci1jaGFydHMvcmFkYXItY2hhcnQvc3Rvcmllcy9jb2xvci50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJjb25maWd1cmF0aW9ucyIsImFuZ2xlRmllbGQiLCJyYWRpdXNGaWVsZCIsInNlcmllc0ZpZWxkIiwicmFkaXVzQXhpcyIsImdyaWQiLCJsaW5lIiwidHlwZSIsIm1pbiIsIm1heCIsInZpc2libGUiLCJwb2ludCIsInNoYXBlIiwibGVnZW5kIiwicG9zaXRpb24iLCJ2YWx1ZUZvcm1hdHRlciIsInYiLCJ3aWR0aCIsImhlaWdodCIsImRhdGEiLCJjb2xvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsVUFBVSxFQUFFLFlBRFM7QUFFckJDLElBQUFBLFdBQVcsRUFBRSxPQUZRO0FBR3JCQyxJQUFBQSxXQUFXLEVBQUUsTUFIUTtBQUlyQkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLE1BQUFBLElBQUksRUFBRTtBQUNKQyxRQUFBQSxJQUFJLEVBQUU7QUFBRUMsVUFBQUEsSUFBSSxFQUFFO0FBQVI7QUFERixPQURJO0FBSVZDLE1BQUFBLEdBQUcsRUFBRSxDQUpLO0FBS1ZDLE1BQUFBLEdBQUcsRUFBRTtBQUxLLEtBSlM7QUFXckJILElBQUFBLElBQUksRUFBRTtBQUFFSSxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQVhlO0FBWXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsT0FBTyxFQUFFLElBREo7QUFFTEUsTUFBQUEsS0FBSyxFQUFFO0FBRkYsS0FaYztBQWdCckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOSCxNQUFBQSxPQUFPLEVBQUUsSUFESDtBQUVOSSxNQUFBQSxRQUFRLEVBQUU7QUFGSixLQWhCYTtBQW9CckJDLElBQUFBLGNBQWMsRUFBRSx3QkFBQ0MsQ0FBRDtBQUFBLGFBQVlBLENBQVo7QUFBQTtBQXBCSyxHQUF2QjtBQXNCQSxzQkFDRSwwREFDRSwyREFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsc0JBQUQ7QUFBWSxJQUFBLElBQUksRUFBRUMsZ0JBQWxCO0FBQXdCLElBQUEsY0FBYyxFQUFFbkI7QUFBeEMsSUFERixDQUZGLGVBS0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFaUIsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsc0JBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUMsZ0JBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RuQixjQURTO0FBRVpvQixNQUFBQSxLQUFLLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWjtBQUZLO0FBRmhCLElBREYsQ0FMRixDQURGO0FBaUJELENBeENNOzs7QUF5Q0EsSUFBTUMsSUFBSSxHQUFHLE9BQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhZGFyQ2hhcnQgZnJvbSAnLi4vcmFkYXItY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIGFuZ2xlRmllbGQ6ICdtZXRyaWNOYW1lJyxcbiAgICByYWRpdXNGaWVsZDogJ3ZhbHVlJyxcbiAgICBzZXJpZXNGaWVsZDogJ25hbWUnLFxuICAgIHJhZGl1c0F4aXM6IHtcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgbGluZTogeyB0eXBlOiAnbGluZScgfSxcbiAgICAgIH0sXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDEsXG4gICAgfSxcbiAgICBsaW5lOiB7IHZpc2libGU6IHRydWUgfSxcbiAgICBwb2ludDoge1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIHNoYXBlOiAnY2lyY2xlJyxcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLWNlbnRlcicsXG4gICAgfSxcbiAgICB2YWx1ZUZvcm1hdHRlcjogKHY6IGFueSkgPT4gdixcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkN1c3RvbSBDb2xvcjwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA2MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8UmFkYXJDaGFydCBkYXRhPXtkYXRhfSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDYwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxSYWRhckNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICBjb2xvcjogWycjZDYyNzI4JywgJyMyY2EwMmMnXSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnQ29sb3InO1xuIl19