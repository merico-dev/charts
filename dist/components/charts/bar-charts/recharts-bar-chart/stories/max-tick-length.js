"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.parameters = exports.name = exports.content = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _rechartsBarChart = _interopRequireDefault(require("../recharts-bar-chart"));

var _singleValue = _interopRequireDefault(require("./mocks/single-value.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var content = function content(_ref) {
  var maxTickLength = _ref.maxTickLength;
  var configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    subSeriesConfiguration: [{
      label: 'Rounded Value',
      dataKey: 'value'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Max Tick Length - SeriesNames"), /*#__PURE__*/_react["default"].createElement("h2", null, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      xAxis: {
        maxTickLength: maxTickLength
      }
    })
  })), /*#__PURE__*/_react["default"].createElement("h2", null, "Transposed"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      transposed: true,
      xAxis: {
        maxTickLength: maxTickLength
      }
    })
  })));
};

exports.content = content;
var name = 'Max Tick Length - SeriesNames';
exports.name = name;
var parameters = {
  args: {
    maxTickLength: 50
  },
  argTypes: {
    maxTickLength: {
      control: {
        type: 'range',
        min: 10,
        max: 150,
        step: 10
      }
    }
  }
};
exports.parameters = parameters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL21heC10aWNrLWxlbmd0aC50c3giXSwibmFtZXMiOlsiY29udGVudCIsIm1heFRpY2tMZW5ndGgiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwid2l0aExlZ2VuZCIsImxhYmVsS2V5Iiwic3ViU2VyaWVzQ29uZmlndXJhdGlvbiIsImxhYmVsIiwiZGF0YUtleSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImRhdGEiLCJ4QXhpcyIsInRyYW5zcG9zZWQiLCJuYW1lIiwicGFyYW1ldGVycyIsImFyZ3MiLCJhcmdUeXBlcyIsImNvbnRyb2wiLCJ0eXBlIiwibWluIiwibWF4Iiwic3RlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBNEI7QUFBQSxNQUF6QkMsYUFBeUIsUUFBekJBLGFBQXlCO0FBQ2pELE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxLQUZTO0FBR3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFIVztBQUlyQkMsSUFBQUEsc0JBQXNCLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUUsZUFBVDtBQUEwQkMsTUFBQUEsT0FBTyxFQUFFO0FBQW5DLEtBQUQ7QUFKSCxHQUF2QjtBQU1BLHNCQUNFLDBEQUNFLDRFQURGLGVBRUUsc0RBRkYsZUFHRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRSxHQUF0QjtBQUEyQkMsTUFBQUEsYUFBYSxFQUFFO0FBQTFDO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUMsdUJBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1RWLGNBRFM7QUFFWlcsTUFBQUEsS0FBSyxFQUFFO0FBQ0xaLFFBQUFBLGFBQWEsRUFBYkE7QUFESztBQUZLO0FBRmhCLElBREYsQ0FIRixlQWVFLHlEQWZGLGVBZ0JFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRVEsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFBQSxhQUFhLEVBQUU7QUFBMUM7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFQyx1QkFEUjtBQUVFLElBQUEsY0FBYyxrQ0FDVFYsY0FEUztBQUVaWSxNQUFBQSxVQUFVLEVBQUUsSUFGQTtBQUdaRCxNQUFBQSxLQUFLLEVBQUU7QUFDTFosUUFBQUEsYUFBYSxFQUFiQTtBQURLO0FBSEs7QUFGaEIsSUFERixDQWhCRixDQURGO0FBK0JELENBdENNOzs7QUF1Q0EsSUFBTWMsSUFBSSxHQUFHLCtCQUFiOztBQUNBLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0poQixJQUFBQSxhQUFhLEVBQUU7QUFEWCxHQURrQjtBQUl4QmlCLEVBQUFBLFFBQVEsRUFBRTtBQUNSakIsSUFBQUEsYUFBYSxFQUFFO0FBQ2JrQixNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsUUFBQUEsR0FBRyxFQUFFLEVBRkU7QUFHUEMsUUFBQUEsR0FBRyxFQUFFLEdBSEU7QUFJUEMsUUFBQUEsSUFBSSxFQUFFO0FBSkM7QUFESTtBQURQO0FBSmMsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9ja3Mvc2luZ2xlLXZhbHVlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9ICh7IG1heFRpY2tMZW5ndGggfTogYW55KSA9PiB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIHdpdGhMZWdlbmQ6IGZhbHNlLFxuICAgIGxhYmVsS2V5OiAnbmFtZScsXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW3sgbGFiZWw6ICdSb3VuZGVkIFZhbHVlJywgZGF0YUtleTogJ3ZhbHVlJyB9XSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPk1heCBUaWNrIExlbmd0aCAtIFNlcmllc05hbWVzPC9oMT5cbiAgICAgIDxoMj5EZWZhdWx0PC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAsIHBhZGRpbmdCb3R0b206IDEwMCB9fT5cbiAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnRcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXt7XG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9ucyxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgIG1heFRpY2tMZW5ndGgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgyPlRyYW5zcG9zZWQ8L2gyPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCwgcGFkZGluZ0JvdHRvbTogMTAwIH19PlxuICAgICAgICA8UmVjaGFydHNCYXJDaGFydFxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgY29uZmlndXJhdGlvbnM9e3tcbiAgICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb25zLFxuICAgICAgICAgICAgdHJhbnNwb3NlZDogdHJ1ZSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgIG1heFRpY2tMZW5ndGgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdNYXggVGljayBMZW5ndGggLSBTZXJpZXNOYW1lcyc7XG5leHBvcnQgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgYXJnczoge1xuICAgIG1heFRpY2tMZW5ndGg6IDUwLFxuICB9LFxuICBhcmdUeXBlczoge1xuICAgIG1heFRpY2tMZW5ndGg6IHtcbiAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgbWluOiAxMCxcbiAgICAgICAgbWF4OiAxNTAsXG4gICAgICAgIHN0ZXA6IDEwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==