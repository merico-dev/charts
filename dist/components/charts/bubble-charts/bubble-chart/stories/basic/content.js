"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.content = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _lodash = require("lodash");

var _react = _interopRequireWildcard(require("react"));

var _bubbleChart = _interopRequireDefault(require("../../bubble-chart"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function toThousands(num) {
  var ret = (0, _lodash.round)(num);

  if (ret < 1000) {
    return ret;
  }

  return "".concat((ret / 1000).toFixed(0), "k");
}

var COLOR_MAP = {
  'Current Sprint': '#FFA940',
  Average: '#8C8C8C'
};

var content = function Content(_ref) {
  var _nameMap;

  var X_MIN = _ref.X_MIN,
      X_MAX = _ref.X_MAX,
      Y_MIN = _ref.Y_MIN,
      Y_MAX = _ref.Y_MAX,
      DEVEQ_MIN = _ref.DEVEQ_MIN,
      DEVEQ_MAX = _ref.DEVEQ_MAX,
      MAX_RADIUS = _ref.MAX_RADIUS;
  var data = [{
    issues: X_MAX,
    story_point: Y_MAX,
    dev_eq: DEVEQ_MAX,
    name: 'Current Sprint'
  }, {
    issues: X_MIN,
    story_point: Y_MIN,
    dev_eq: DEVEQ_MIN,
    name: 'Average'
  }];
  var xField = 'issues';
  var yField = 'story_point';
  var sizeField = 'dev_eq';
  var nameMap = (_nameMap = {}, (0, _defineProperty3["default"])(_nameMap, xField, 'Issues'), (0, _defineProperty3["default"])(_nameMap, yField, 'Story Point'), (0, _defineProperty3["default"])(_nameMap, sizeField, 'Dev Equivalent'), _nameMap);
  var xAxis = {
    min: X_MIN * 0.8,
    max: X_MAX * 1.2,
    grid: null
  };
  var yAxis = {
    min: Math.max(2 * Y_MIN - Y_MAX, 0),
    max: 2 * Y_MAX - Y_MIN,
    grid: {
      line: {
        style: {
          stroke: '#EAEAEA',
          lineDash: [5]
        }
      }
    },
    line: null
  };
  var regressionLineData = (0, _react.useMemo)(function () {
    var x1 = 0;
    var y1 = 0;
    var x2 = data[1][xField];
    var y2 = data[1][yField]; // y = slope * x + intercept

    var slope = (y2 - y1) / (x2 - x1);
    var intercept = y2 - x2 * slope;
    var x3 = xAxis.max * 1.5; // force it to overflow

    var y3 = slope * x3 + intercept;
    return [[x1, y1], [x3, y3]];
  }, [xAxis.min, yAxis.min, data]);
  var configurations = {
    xField: xField,
    yField: yField,
    sizeField: sizeField,
    colorField: 'name',
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    color: data.map(function (item) {
      return COLOR_MAP[item.name];
    }),
    size: [Math.max(1, DEVEQ_MIN * MAX_RADIUS / DEVEQ_MAX), MAX_RADIUS],
    xAxis: xAxis,
    yAxis: yAxis,
    nameMap: nameMap,
    tooltipValueFormatter: function tooltipValueFormatter(_name, value) {
      return toThousands(value);
    },
    label: null,
    pointStyle: function pointStyle(x) {
      return {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        fill: COLOR_MAP[x.name],
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        stroke: COLOR_MAP[x.name],
        fillOpacity: 0.15,
        lineWidth: 2
      };
    },
    // straight line, origin point -> the central point of Average Bubble
    regressionLine: {
      type: 'linear',
      algorithm: regressionLineData
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Basic"), /*#__PURE__*/_react["default"].createElement("p", null, "Tip: Hover on bubbles to see tooltip"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_bubbleChart["default"], {
    data: data,
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      width: 800,
      height: 600
    })
  })));
};

exports.content = content;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGUtY2hhcnRzL2J1YmJsZS1jaGFydC9zdG9yaWVzL2Jhc2ljL2NvbnRlbnQudHN4Il0sIm5hbWVzIjpbInRvVGhvdXNhbmRzIiwibnVtIiwicmV0IiwidG9GaXhlZCIsIkNPTE9SX01BUCIsIkF2ZXJhZ2UiLCJjb250ZW50IiwiQ29udGVudCIsIlhfTUlOIiwiWF9NQVgiLCJZX01JTiIsIllfTUFYIiwiREVWRVFfTUlOIiwiREVWRVFfTUFYIiwiTUFYX1JBRElVUyIsImRhdGEiLCJpc3N1ZXMiLCJzdG9yeV9wb2ludCIsImRldl9lcSIsIm5hbWUiLCJ4RmllbGQiLCJ5RmllbGQiLCJzaXplRmllbGQiLCJuYW1lTWFwIiwieEF4aXMiLCJtaW4iLCJtYXgiLCJncmlkIiwieUF4aXMiLCJNYXRoIiwibGluZSIsInN0eWxlIiwic3Ryb2tlIiwibGluZURhc2giLCJyZWdyZXNzaW9uTGluZURhdGEiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInNsb3BlIiwiaW50ZXJjZXB0IiwieDMiLCJ5MyIsImNvbmZpZ3VyYXRpb25zIiwiY29sb3JGaWVsZCIsImNvbG9yIiwibWFwIiwiaXRlbSIsInNpemUiLCJ0b29sdGlwVmFsdWVGb3JtYXR0ZXIiLCJfbmFtZSIsInZhbHVlIiwibGFiZWwiLCJwb2ludFN0eWxlIiwieCIsImZpbGwiLCJmaWxsT3BhY2l0eSIsImxpbmVXaWR0aCIsInJlZ3Jlc3Npb25MaW5lIiwidHlwZSIsImFsZ29yaXRobSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQStCO0FBQzdCLE1BQU1DLEdBQUcsR0FBRyxtQkFBTUQsR0FBTixDQUFaOztBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFWLEVBQWdCO0FBQ2QsV0FB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SUFBSCxDQUpaO0FBS0xxQyxRQUFBQSxXQUFXLEVBQUUsSUFMUjtBQU1MQyxRQUFBQSxTQUFTLEVBQUU7QUFOTixPQUFQO0FBUUQsS0F0Qm9CO0FBdUJyQjtBQUNBQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsSUFBSSxFQUFFLFFBRFE7QUFFZEMsTUFBQUEsU0FBUyxFQUFFMUI7QUFGRztBQXhCSyxHQUF2QjtBQTZCQSxzQkFDRSwwREFDRSxvREFERixlQUVFLGtGQUZGLGVBR0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFMkIsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsdUJBQUQ7QUFDRSxJQUFBLElBQUksRUFBRS9DLElBRFI7QUFFRSxJQUFBLGNBQWMsa0NBQ1Q0QixjQURTO0FBRVprQixNQUFBQSxLQUFLLEVBQUUsR0FGSztBQUdaQyxNQUFBQSxNQUFNLEVBQUU7QUFISTtBQUZoQixJQURGLENBSEYsQ0FERjtBQWdCRCxDQTVHTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvdW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1YmJsZUNoYXJ0IGZyb20gJy4uLy4uL2J1YmJsZS1jaGFydCc7XG5cbmZ1bmN0aW9uIHRvVGhvdXNhbmRzKG51bTogYW55KSB7XG4gIGNvbnN0IHJldCA9IHJvdW5kKG51bSk7XG4gIGlmIChyZXQgPCAxMDAwKSB7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICByZXR1cm4gYCR7KHJldCAvIDEwMDApLnRvRml4ZWQoMCl9a2A7XG59XG5cbmNvbnN0IENPTE9SX01BUCA9IHtcbiAgJ0N1cnJlbnQgU3ByaW50JzogJyNGRkE5NDAnLFxuICBBdmVyYWdlOiAnIzhDOEM4QycsXG59O1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoeyBYX01JTiwgWF9NQVgsIFlfTUlOLCBZX01BWCwgREVWRVFfTUlOLCBERVZFUV9NQVgsIE1BWF9SQURJVVMgfTogYW55KSB7XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgaXNzdWVzOiBYX01BWCxcbiAgICAgIHN0b3J5X3BvaW50OiBZX01BWCxcbiAgICAgIGRldl9lcTogREVWRVFfTUFYLFxuICAgICAgbmFtZTogJ0N1cnJlbnQgU3ByaW50JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlzc3VlczogWF9NSU4sXG4gICAgICBzdG9yeV9wb2ludDogWV9NSU4sXG4gICAgICBkZXZfZXE6IERFVkVRX01JTixcbiAgICAgIG5hbWU6ICdBdmVyYWdlJyxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHhGaWVsZCA9ICdpc3N1ZXMnO1xuICBjb25zdCB5RmllbGQgPSAnc3RvcnlfcG9pbnQnO1xuICBjb25zdCBzaXplRmllbGQgPSAnZGV2X2VxJztcbiAgY29uc3QgbmFtZU1hcCA9IHtcbiAgICBbeEZpZWxkXTogJ0lzc3VlcycsXG4gICAgW3lGaWVsZF06ICdTdG9yeSBQb2ludCcsXG4gICAgW3NpemVGaWVsZF06ICdEZXYgRXF1aXZhbGVudCcsXG4gIH07XG5cbiAgY29uc3QgeEF4aXMgPSB7XG4gICAgbWluOiBYX01JTiAqIDAuOCxcbiAgICBtYXg6IFhfTUFYICogMS4yLFxuICAgIGdyaWQ6IG51bGwsXG4gIH07XG4gIGNvbnN0IHlBeGlzID0ge1xuICAgIG1pbjogTWF0aC5tYXgoMiAqIFlfTUlOIC0gWV9NQVgsIDApLFxuICAgIG1heDogMiAqIFlfTUFYIC0gWV9NSU4sXG4gICAgZ3JpZDoge1xuICAgICAgbGluZToge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHN0cm9rZTogJyNFQUVBRUEnLFxuICAgICAgICAgIGxpbmVEYXNoOiBbNV0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGluZTogbnVsbCxcbiAgfTtcblxuICBjb25zdCByZWdyZXNzaW9uTGluZURhdGEgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCB4MSA9IDA7XG4gICAgY29uc3QgeTEgPSAwO1xuXG4gICAgY29uc3QgeDIgPSBkYXRhWzFdW3hGaWVsZF07XG4gICAgY29uc3QgeTIgPSBkYXRhWzFdW3lGaWVsZF07XG5cbiAgICAvLyB5ID0gc2xvcGUgKiB4ICsgaW50ZXJjZXB0XG4gICAgY29uc3Qgc2xvcGUgPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG4gICAgY29uc3QgaW50ZXJjZXB0ID0geTIgLSB4MiAqIHNsb3BlO1xuXG4gICAgY29uc3QgeDMgPSB4QXhpcy5tYXggKiAxLjU7IC8vIGZvcmNlIGl0IHRvIG92ZXJmbG93XG4gICAgY29uc3QgeTMgPSBzbG9wZSAqIHgzICsgaW50ZXJjZXB0O1xuICAgIHJldHVybiBbXG4gICAgICBbeDEsIHkxXSxcbiAgICAgIFt4MywgeTNdLFxuICAgIF07XG4gIH0sIFt4QXhpcy5taW4sIHlBeGlzLm1pbiwgZGF0YV0pO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHhGaWVsZCxcbiAgICB5RmllbGQsXG4gICAgc2l6ZUZpZWxkLFxuICAgIGNvbG9yRmllbGQ6ICduYW1lJyxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzA1MykgRklYTUU6IEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICBjb2xvcjogZGF0YS5tYXAoKGl0ZW0pID0+IENPTE9SX01BUFtpdGVtLm5hbWVdKSxcbiAgICBzaXplOiBbTWF0aC5tYXgoMSwgKERFVkVRX01JTiAqIE1BWF9SQURJVVMpIC8gREVWRVFfTUFYKSwgTUFYX1JBRElVU10sXG4gICAgeEF4aXMsXG4gICAgeUF4aXMsXG4gICAgbmFtZU1hcCxcbiAgICB0b29sdGlwVmFsdWVGb3JtYXR0ZXI6IChfbmFtZTogYW55LCB2YWx1ZTogYW55KSA9PiB0b1Rob3VzYW5kcyh2YWx1ZSksXG4gICAgbGFiZWw6IG51bGwsXG4gICAgcG9pbnRTdHlsZTogKHg6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDcwNTMpIEZJWE1FOiBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZS4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgICAgIGZpbGw6IENPTE9SX01BUFt4Lm5hbWVdLFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzA1MykgRklYTUU6IEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgc3Ryb2tlOiBDT0xPUl9NQVBbeC5uYW1lXSxcbiAgICAgICAgZmlsbE9wYWNpdHk6IDAuMTUsXG4gICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgIH07XG4gICAgfSxcbiAgICAvLyBzdHJhaWdodCBsaW5lLCBvcmlnaW4gcG9pbnQgLT4gdGhlIGNlbnRyYWwgcG9pbnQgb2YgQXZlcmFnZSBCdWJibGVcbiAgICByZWdyZXNzaW9uTGluZToge1xuICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICBhbGdvcml0aG06IHJlZ3Jlc3Npb25MaW5lRGF0YSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+QmFzaWM8L2gxPlxuICAgICAgPHA+VGlwOiBIb3ZlciBvbiBidWJibGVzIHRvIHNlZSB0b29sdGlwPC9wPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPEJ1YmJsZUNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==