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
  'Current Sprint': '#FFC7AD',
  Average: '#A2C5F6'
};
var STROKE_COLOR_MAP = {
  'Current Sprint': '#F0876A',
  Average: '#4B90EE'
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
  var NAME_CURRENT = 'Current Sprint';
  var NAME_AVG = 'Average';
  var data = [{
    issues: X_MAX,
    story_point: Y_MAX,
    dev_eq: DEVEQ_MAX,
    name: NAME_CURRENT
  }, {
    issues: X_MIN,
    story_point: Y_MIN,
    dev_eq: DEVEQ_MIN,
    name: NAME_AVG
  }];
  var xField = 'issues';
  var yField = 'story_point';
  var sizeField = 'dev_eq';
  var nameMap = (_nameMap = {}, (0, _defineProperty3["default"])(_nameMap, xField, 'Issues'), (0, _defineProperty3["default"])(_nameMap, yField, 'Story Point'), (0, _defineProperty3["default"])(_nameMap, sizeField, 'Dev Equivalent'), _nameMap);
  var xAxis = {
    min: X_MIN * 0.8,
    max: X_MAX * 1.2,
    grid: null,
    tickLine: null,
    tickCount: 3,
    title: {
      text: nameMap[xField],
      style: {
        fontSize: 14
      }
    }
  };
  var yAxisMax = Y_MAX === Y_MIN ? 2 * Y_MAX : Math.max(2 * Y_MAX - Y_MIN, 10);
  var yAxisMin = Y_MAX === Y_MIN ? -yAxisMax + 2 * Y_MAX : 0;
  var yAxis = {
    min: yAxisMin,
    max: yAxisMax,
    grid: {
      line: {
        style: {
          stroke: '#E0E0E5'
        }
      }
    },
    line: null,
    title: {
      text: nameMap[yField],
      style: {
        fontSize: 14
      }
    }
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
    legend: {
      layout: 'horizontal',
      position: 'top-right',
      custom: true,
      items: [{
        name: 'Size: DevEq',
        value: 0,
        marker: {
          style: {
            fill: '#E0E0E5',
            stroke: '#828487'
          }
        }
      }, {
        name: NAME_CURRENT,
        value: NAME_CURRENT,
        marker: {
          style: {
            fill: COLOR_MAP[NAME_CURRENT]
          }
        }
      }, {
        name: NAME_AVG,
        value: NAME_AVG,
        marker: {
          style: {
            fill: COLOR_MAP[NAME_AVG]
          }
        }
      }]
    },
    pointStyle: function pointStyle(x) {
      return {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        fill: COLOR_MAP[x.name],
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        stroke: STROKE_COLOR_MAP[x.name],
        fillOpacity: 0.7,
        lineWidth: 2
      };
    },
    // straight line, origin point -> the central point of Average Bubble
    regressionLine: {
      type: 'linear',
      algorithm: regressionLineData,
      style: {
        stroke: '#C1C1C7',
        lineDash: [5]
      }
    },
    onReady: function onReady(plot) {
      // https://g2plot.antv.vision/zh/docs/api/options/interactions
      plot.chart.removeInteraction('legend-filter');
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Custom Legend"), /*#__PURE__*/_react["default"].createElement("p", null, "Tip: Hover on bubbles to see tooltip"), /*#__PURE__*/_react["default"].createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGUtY2hhcnRzL2J1YmJsZS1jaGFydC9zdG9yaWVzL2N1c3RvbS1sZWdlbmQvY29udGVudC50c3giXSwibmFtZXMiOlsidG9UaG91c2FuZHMiLCJudW0iLCJyZXQiLCJ0b0ZpeGVkIiwiQ09MT1JfTUFQIiwiQXZlcmFnZSIsIlNUUk9LRV9DT0xPUl9NQVAiLCJjb250ZW50IiwiQ29udGVudCIsIlhfTUlOIiwiWF9NQVgiLCJZX01JTiIsIllfTUFYIiwiREVWRVFfTUlOIiwiREVWRVFfTUFYIiwiTUFYX1JBRElVUyIsIk5BTUVfQ1VSUkVOVCIsIk5BTUVfQVZHIiwiZGF0YSIsImlzc3VlcyIsInN0b3J5X3BvaW50IiwiZGV2X2VxIiwibmFtZSIsInhGaWVsZCIsInlGaWVsZCIsInNpemVGaWVsZCIsIm5hbWVNYXAiLCJ4QXhpcyIsIm1pbiIsIm1heCIsImdyaWQiLCJ0aWNrTGluZSIsInRpY2tDb3VudCIsInRpdGxlIiwidGV4dCIsInN0eWxlIiwiZm9udFNpemUiLCJ5QXhpc01heCIsIk1hdGgiLCJ5QXhpc01pbiIsInlBeGlzIiwibGluZSIsInN0cm9rZSIsInJlZ3Jlc3Npb25MaW5lRGF0YSIsIngxIiwieTEiLCJ4MiIsInkyIiwic2xvcGUiLCJpbnRlcmNlcHQiLCJ4MyIsInkzIiwiY29uZmlndXJhdGlvbnMiLCJjb2xvckZpZWxkIiwiY29sb3IiLCJtYXAiLCJpdGVtIiwic2l6ZSIsInRvb2x0aXBWYWx1ZUZvcm1hdHRlciIsIl9uYW1lIiwidmFsdWUiLCJsYWJlbCIsImxlZ2VuZCIsImxheW91dCIsInBvc2l0aW9uIiwiY3VzdG9tIiwiaXRlbXMiLCJtYXJrZXIiLCJmaWxsIiwicG9pbnRTdHlsZSIsIngiLCJmaWxsT3BhY2l0eSIsImxpbmVXaWR0aCIsInJlZ3Jlc3Npb25MaW5lIiwidHlwZSIsImFsZ29yaXRobSIsImxpbmVEYXNoIiwib25SZWFkeSIsInBsb3Qi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QUF0RW9CLEdBQXZCO0FBd0VBLHNCQUNFLDBEQUNFLDREQURGLGVBRUUsa0ZBRkYsZUFHRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLHVCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVoRSxJQURSO0FBRUUsSUFBQSxjQUFjLGtDQUNUa0MsY0FEUztBQUVaNkIsTUFBQUEsS0FBSyxFQUFFLEdBRks7QUFHWkMsTUFBQUEsTUFBTSxFQUFFO0FBSEk7QUFGaEIsSUFERixDQUhGLENBREY7QUFnQkQsQ0F4S00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByb3VuZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICcuLi8uLi9idWJibGUtY2hhcnQnO1xuXG5mdW5jdGlvbiB0b1Rob3VzYW5kcyhudW06IGFueSkge1xuICBjb25zdCByZXQgPSByb3VuZChudW0pO1xuICBpZiAocmV0IDwgMTAwMCkge1xuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgcmV0dXJuIGAkeyhyZXQgLyAxMDAwKS50b0ZpeGVkKDApfWtgO1xufVxuXG5jb25zdCBDT0xPUl9NQVAgPSB7XG4gICdDdXJyZW50IFNwcmludCc6ICcjRkZDN0FEJyxcbiAgQXZlcmFnZTogJyNBMkM1RjYnLFxufTtcblxuY29uc3QgU1RST0tFX0NPTE9SX01BUCA9IHtcbiAgJ0N1cnJlbnQgU3ByaW50JzogJyNGMDg3NkEnLFxuICBBdmVyYWdlOiAnIzRCOTBFRScsXG59O1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoeyBYX01JTiwgWF9NQVgsIFlfTUlOLCBZX01BWCwgREVWRVFfTUlOLCBERVZFUV9NQVgsIE1BWF9SQURJVVMgfTogYW55KSB7XG4gIGNvbnN0IE5BTUVfQ1VSUkVOVCA9ICdDdXJyZW50IFNwcmludCc7XG4gIGNvbnN0IE5BTUVfQVZHID0gJ0F2ZXJhZ2UnO1xuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIGlzc3VlczogWF9NQVgsXG4gICAgICBzdG9yeV9wb2ludDogWV9NQVgsXG4gICAgICBkZXZfZXE6IERFVkVRX01BWCxcbiAgICAgIG5hbWU6IE5BTUVfQ1VSUkVOVCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlzc3VlczogWF9NSU4sXG4gICAgICBzdG9yeV9wb2ludDogWV9NSU4sXG4gICAgICBkZXZfZXE6IERFVkVRX01JTixcbiAgICAgIG5hbWU6IE5BTUVfQVZHLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgeEZpZWxkID0gJ2lzc3Vlcyc7XG4gIGNvbnN0IHlGaWVsZCA9ICdzdG9yeV9wb2ludCc7XG4gIGNvbnN0IHNpemVGaWVsZCA9ICdkZXZfZXEnO1xuICBjb25zdCBuYW1lTWFwID0ge1xuICAgIFt4RmllbGRdOiAnSXNzdWVzJyxcbiAgICBbeUZpZWxkXTogJ1N0b3J5IFBvaW50JyxcbiAgICBbc2l6ZUZpZWxkXTogJ0RldiBFcXVpdmFsZW50JyxcbiAgfTtcblxuICBjb25zdCB4QXhpcyA9IHtcbiAgICBtaW46IFhfTUlOICogMC44LFxuICAgIG1heDogWF9NQVggKiAxLjIsXG4gICAgZ3JpZDogbnVsbCxcbiAgICB0aWNrTGluZTogbnVsbCxcbiAgICB0aWNrQ291bnQ6IDMsXG4gICAgdGl0bGU6IHtcbiAgICAgIHRleHQ6IG5hbWVNYXBbeEZpZWxkXSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgeUF4aXNNYXggPSBZX01BWCA9PT0gWV9NSU4gPyAyICogWV9NQVggOiBNYXRoLm1heCgyICogWV9NQVggLSBZX01JTiwgMTApO1xuICBjb25zdCB5QXhpc01pbiA9IFlfTUFYID09PSBZX01JTiA/IC15QXhpc01heCArIDIgKiBZX01BWCA6IDA7XG4gIGNvbnN0IHlBeGlzID0ge1xuICAgIG1pbjogeUF4aXNNaW4sXG4gICAgbWF4OiB5QXhpc01heCxcbiAgICBncmlkOiB7XG4gICAgICBsaW5lOiB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI0UwRTBFNScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGluZTogbnVsbCxcbiAgICB0aXRsZToge1xuICAgICAgdGV4dDogbmFtZU1hcFt5RmllbGRdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHJlZ3Jlc3Npb25MaW5lRGF0YSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHgxID0gMDtcbiAgICBjb25zdCB5MSA9IDA7XG5cbiAgICBjb25zdCB4MiA9IGRhdGFbMV1beEZpZWxkXTtcbiAgICBjb25zdCB5MiA9IGRhdGFbMV1beUZpZWxkXTtcblxuICAgIC8vIHkgPSBzbG9wZSAqIHggKyBpbnRlcmNlcHRcbiAgICBjb25zdCBzbG9wZSA9ICh5MiAtIHkxKSAvICh4MiAtIHgxKTtcbiAgICBjb25zdCBpbnRlcmNlcHQgPSB5MiAtIHgyICogc2xvcGU7XG5cbiAgICBjb25zdCB4MyA9IHhBeGlzLm1heCAqIDEuNTsgLy8gZm9yY2UgaXQgdG8gb3ZlcmZsb3dcbiAgICBjb25zdCB5MyA9IHNsb3BlICogeDMgKyBpbnRlcmNlcHQ7XG4gICAgcmV0dXJuIFtcbiAgICAgIFt4MSwgeTFdLFxuICAgICAgW3gzLCB5M10sXG4gICAgXTtcbiAgfSwgW3hBeGlzLm1pbiwgeUF4aXMubWluLCBkYXRhXSk7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgeEZpZWxkLFxuICAgIHlGaWVsZCxcbiAgICBzaXplRmllbGQsXG4gICAgY29sb3JGaWVsZDogJ25hbWUnLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSg3MDUzKSBGSVhNRTogRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmUuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgIGNvbG9yOiBkYXRhLm1hcCgoaXRlbSkgPT4gQ09MT1JfTUFQW2l0ZW0ubmFtZV0pLFxuICAgIHNpemU6IFtNYXRoLm1heCgxLCAoREVWRVFfTUlOICogTUFYX1JBRElVUykgLyBERVZFUV9NQVgpLCBNQVhfUkFESVVTXSxcbiAgICB4QXhpcyxcbiAgICB5QXhpcyxcbiAgICBuYW1lTWFwLFxuICAgIHRvb2x0aXBWYWx1ZUZvcm1hdHRlcjogKF9uYW1lOiBhbnksIHZhbHVlOiBhbnkpID0+IHRvVGhvdXNhbmRzKHZhbHVlKSxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGxheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdTaXplOiBEZXZFcScsXG4gICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBmaWxsOiAnI0UwRTBFNScsXG4gICAgICAgICAgICAgIHN0cm9rZTogJyM4Mjg0ODcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogTkFNRV9DVVJSRU5ULFxuICAgICAgICAgIHZhbHVlOiBOQU1FX0NVUlJFTlQsXG4gICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBmaWxsOiBDT0xPUl9NQVBbTkFNRV9DVVJSRU5UXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IE5BTUVfQVZHLFxuICAgICAgICAgIHZhbHVlOiBOQU1FX0FWRyxcbiAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGZpbGw6IENPTE9SX01BUFtOQU1FX0FWR10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgcG9pbnRTdHlsZTogKHg6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDcwNTMpIEZJWE1FOiBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZS4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgICAgIGZpbGw6IENPTE9SX01BUFt4Lm5hbWVdLFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzA1MykgRklYTUU6IEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgc3Ryb2tlOiBTVFJPS0VfQ09MT1JfTUFQW3gubmFtZV0sXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwLjcsXG4gICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgIH07XG4gICAgfSxcbiAgICAvLyBzdHJhaWdodCBsaW5lLCBvcmlnaW4gcG9pbnQgLT4gdGhlIGNlbnRyYWwgcG9pbnQgb2YgQXZlcmFnZSBCdWJibGVcbiAgICByZWdyZXNzaW9uTGluZToge1xuICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICBhbGdvcml0aG06IHJlZ3Jlc3Npb25MaW5lRGF0YSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHN0cm9rZTogJyNDMUMxQzcnLFxuICAgICAgICBsaW5lRGFzaDogWzVdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9uUmVhZHk6IChwbG90OiBhbnkpID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZzJwbG90LmFudHYudmlzaW9uL3poL2RvY3MvYXBpL29wdGlvbnMvaW50ZXJhY3Rpb25zXG4gICAgICBwbG90LmNoYXJ0LnJlbW92ZUludGVyYWN0aW9uKCdsZWdlbmQtZmlsdGVyJyk7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkN1c3RvbSBMZWdlbmQ8L2gxPlxuICAgICAgPHA+VGlwOiBIb3ZlciBvbiBidWJibGVzIHRvIHNlZSB0b29sdGlwPC9wPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPEJ1YmJsZUNoYXJ0XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBjb25maWd1cmF0aW9ucz17e1xuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==