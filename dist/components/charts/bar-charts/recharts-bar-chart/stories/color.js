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

var _lodash = require("lodash");

var _rechartsBarChart = _interopRequireDefault(require("../recharts-bar-chart"));

var _singleValue = _interopRequireDefault(require("./mocks/single-value.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function Content() {
  var fillByName = [{
    label: 'Rounded Value',
    dataKey: 'value',
    valueLabel: {
      enabled: true
    },
    fill: function fill(_conf, entry) {
      // HERE
      if (entry.name === 'RandomSeriesName-8') {
        return '#E86452';
      }

      return '#5B8FF9';
    }
  }];
  var fillByValue = [{
    label: 'Rounded Value',
    dataKey: 'value',
    valueLabel: {
      enabled: true
    },
    fill: function fill(conf, entry) {
      // HERE
      if (entry.value <= 100) {
        return conf.color;
      }

      if (entry.value <= 200) {
        return '#5AD8A6';
      }

      if (entry.value <= 300) {
        return '#F6BD16';
      }

      if (entry.value <= 400) {
        return '#FF99C3';
      }

      if (entry.value <= 800) {
        return '#E86452';
      }

      if (entry.value > 800) {
        return '#945FB9';
      }
    }
  }];
  var configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    valueFormatter: function valueFormatter(v) {
      return (0, _lodash.round)(v, 0);
    },
    xAxis: {
      name: 'Series'
    },
    yAxis: {
      name: 'Mock Value'
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Custom Fill Color"), /*#__PURE__*/_react["default"].createElement("h2", null, "Fill by name"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      subSeriesConfiguration: fillByName
    })
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "Fill by value"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      subSeriesConfiguration: fillByValue
    })
  })));
};

exports.content = content;
var name = 'Custom Fill Color';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL2NvbG9yLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImZpbGxCeU5hbWUiLCJsYWJlbCIsImRhdGFLZXkiLCJ2YWx1ZUxhYmVsIiwiZW5hYmxlZCIsImZpbGwiLCJfY29uZiIsImVudHJ5IiwibmFtZSIsImZpbGxCeVZhbHVlIiwiY29uZiIsInZhbHVlIiwiY29sb3IiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwid2l0aExlZ2VuZCIsImxhYmVsS2V5IiwidmFsdWVGb3JtYXR0ZXIiLCJ2IiwieEF4aXMiLCJ5QXhpcyIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImRhdGEiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsSUFBQUEsS0FBSyxFQUFFLGVBRFQ7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLE9BRlg7QUFHRUMsSUFBQUEsVUFBVSxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBSGQ7QUFJRUMsSUFBQUEsSUFBSSxFQUFFLGNBQUNDLEtBQUQsRUFBYUMsS0FBYixFQUE0QjtBQUNoQztBQUNBLFVBQUlBLEtBQUssQ0FBQ0MsSUFBTixLQUFlLG9CQUFuQixFQUF5QztBQUN2QyxlQUFPLFNBQVA7QUFDRDs7QUFDRCxhQUFPLFNBQVA7QUFDRDtBQVZILEdBRGlCLENBQW5CO0FBZUEsTUFBTUMsV0FBVyxHQUFHLENBQ2xCO0FBQ0VSLElBQUFBLEtBQUssRUFBRSxlQURUO0FBRUVDLElBQUFBLE9BQU8sRUFBRSxPQUZYO0FBR0VDLElBQUFBLFVBQVUsRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUhkO0FBSUVDLElBQUFBLElBQUksRUFBRSxjQUFDSyxJQUFELEVBQVlILEtBQVosRUFBMkI7QUFDL0I7QUFDQSxVQUFJQSxLQUFLLENBQUNJLEtBQU4sSUFBZSxHQUFuQixFQUF3QjtBQUN0QixlQUFPRCxJQUFJLENBQUNFLEtBQVo7QUFDRDs7QUFDRCxVQUFJTCxLQUFLLENBQUNJLEtBQU4sSUFBZSxHQUFuQixFQUF3QjtBQUN0QixlQUFPLFNBQVA7QUFDRDs7QUFDRCxVQUFJSixLQUFLLENBQUNJLEtBQU4sSUFBZSxHQUFuQixFQUF3QjtBQUN0QixlQUFPLFNBQVA7QUFDRDs7QUFDRCxVQUFJSixLQUFLLENBQUNJLEtBQU4sSUFBZSxHQUFuQixFQUF3QjtBQUN0QixlQUFPLFNBQVA7QUFDRDs7QUFDRCxVQUFJSixLQUFLLENBQUNJLEtBQU4sSUFBZSxHQUFuQixFQUF3QjtBQUN0QixlQUFPLFNBQVA7QUFDRDs7QUFDRCxVQUFJSixLQUFLLENBQUNJLEtBQU4sR0FBYyxHQUFsQixFQUF1QjtBQUNyQixlQUFPLFNBQVA7QUFDRDtBQUNGO0FBeEJILEdBRGtCLENBQXBCO0FBNkJBLE1BQU1FLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxLQUZTO0FBR3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFIVztBQUlyQkMsSUFBQUEsY0FBYyxFQUFFLHdCQUFDQyxDQUFEO0FBQUEsYUFBWSxtQkFBTUEsQ0FBTixFQUFTLENBQVQsQ0FBWjtBQUFBLEtBSks7QUFLckJDLElBQUFBLEtBQUssRUFBRTtBQUNMWCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQUxjO0FBUXJCWSxJQUFBQSxLQUFLLEVBQUU7QUFDTFosTUFBQUEsSUFBSSxFQUFFO0FBREQ7QUFSYyxHQUF2QjtBQVlBLHNCQUNFLDBEQUNFLGdFQURGLGVBRUUsMkRBRkYsZUFHRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVhLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRSxHQUF0QjtBQUEyQkMsTUFBQUEsYUFBYSxFQUFFO0FBQTFDO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUMsdUJBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RYLGNBRFM7QUFFWlksTUFBQUEsc0JBQXNCLEVBQUV6QjtBQUZaO0FBRmhCLElBREYsQ0FIRixlQVlFLDREQVpGLGVBYUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFcUIsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFBQSxhQUFhLEVBQUU7QUFBMUM7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFQyx1QkFEUjtBQUVFLElBQUEsY0FBYyxrQ0FDVFgsY0FEUztBQUVaWSxNQUFBQSxzQkFBc0IsRUFBRWhCO0FBRlo7QUFGaEIsSUFERixDQWJGLENBREY7QUF5QkQsQ0FsRk07OztBQW1GQSxJQUFNRCxJQUFJLEdBQUcsbUJBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9ja3Mvc2luZ2xlLXZhbHVlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGZpbGxCeU5hbWUgPSBbXG4gICAge1xuICAgICAgbGFiZWw6ICdSb3VuZGVkIFZhbHVlJyxcbiAgICAgIGRhdGFLZXk6ICd2YWx1ZScsXG4gICAgICB2YWx1ZUxhYmVsOiB7IGVuYWJsZWQ6IHRydWUgfSxcbiAgICAgIGZpbGw6IChfY29uZjogYW55LCBlbnRyeTogYW55KSA9PiB7XG4gICAgICAgIC8vIEhFUkVcbiAgICAgICAgaWYgKGVudHJ5Lm5hbWUgPT09ICdSYW5kb21TZXJpZXNOYW1lLTgnKSB7XG4gICAgICAgICAgcmV0dXJuICcjRTg2NDUyJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyM1QjhGRjknO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGZpbGxCeVZhbHVlID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnUm91bmRlZCBWYWx1ZScsXG4gICAgICBkYXRhS2V5OiAndmFsdWUnLFxuICAgICAgdmFsdWVMYWJlbDogeyBlbmFibGVkOiB0cnVlIH0sXG4gICAgICBmaWxsOiAoY29uZjogYW55LCBlbnRyeTogYW55KSA9PiB7XG4gICAgICAgIC8vIEhFUkVcbiAgICAgICAgaWYgKGVudHJ5LnZhbHVlIDw9IDEwMCkge1xuICAgICAgICAgIHJldHVybiBjb25mLmNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS52YWx1ZSA8PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4gJyM1QUQ4QTYnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS52YWx1ZSA8PSAzMDApIHtcbiAgICAgICAgICByZXR1cm4gJyNGNkJEMTYnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS52YWx1ZSA8PSA0MDApIHtcbiAgICAgICAgICByZXR1cm4gJyNGRjk5QzMnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS52YWx1ZSA8PSA4MDApIHtcbiAgICAgICAgICByZXR1cm4gJyNFODY0NTInO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS52YWx1ZSA+IDgwMCkge1xuICAgICAgICAgIHJldHVybiAnIzk0NUZCOSc7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiBmYWxzZSxcbiAgICBsYWJlbEtleTogJ25hbWUnLFxuICAgIHZhbHVlRm9ybWF0dGVyOiAodjogYW55KSA9PiByb3VuZCh2LCAwKSxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ1NlcmllcycsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ01vY2sgVmFsdWUnLFxuICAgIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DdXN0b20gRmlsbCBDb2xvcjwvaDE+XG4gICAgICA8aDI+RmlsbCBieSBuYW1lPC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAsIHBhZGRpbmdCb3R0b206IDEwMCB9fT5cbiAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnRcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXt7XG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9ucyxcbiAgICAgICAgICAgIHN1YlNlcmllc0NvbmZpZ3VyYXRpb246IGZpbGxCeU5hbWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyPkZpbGwgYnkgdmFsdWU8L2gyPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCwgcGFkZGluZ0JvdHRvbTogMTAwIH19PlxuICAgICAgICA8UmVjaGFydHNCYXJDaGFydFxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgY29uZmlndXJhdGlvbnM9e3tcbiAgICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb25zLFxuICAgICAgICAgICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogZmlsbEJ5VmFsdWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0N1c3RvbSBGaWxsIENvbG9yJztcbiJdfQ==