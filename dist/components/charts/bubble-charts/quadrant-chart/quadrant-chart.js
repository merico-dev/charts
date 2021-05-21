"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = QuadrantChart;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _charts = require("@ant-design/charts");

var _colors = require("../../../helpers/colors");

var _chartBase = require("../../base/chart-base");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var getTooltipRenderer = function getTooltipRenderer(nameMap, titleFormatter) {
  return function (title, items) {
    if (!items || !items.length) {
      return '<div />';
    }

    title = items[0].data.name;
    var color = items[0].color;
    var rows = items.map(function (item) {
      var name = nameMap[item.name];

      if (!name) {
        return '';
      }

      return "\n      <li class=\"g2-tooltip-list-item\">\n        <span class=\"g2-tooltip-marker\"></span>\n        <span class=\"g2-tooltip-name\">".concat(name, "</span>\n        <span class=\"g2-tooltip-value\">").concat(item.value, "</span>\n      </li>\n    ");
    }).join('');
    var ret = "\n    <div class=\"g2-tooltip-title\">\n      <span class=\"g2-tooltip-marker\" style=\"background-color: ".concat(color, "\"></span>\n      ").concat(titleFormatter(title), "\n    </div>\n    <ul class=\"g2-tooltip-list\">\n      ").concat(rows, "\n    </ul>\n  ");
    return ret;
  };
};

function QuadrantChart(_ref) {
  var data = _ref.data,
      configurations = _ref.configurations,
      emptyContent = _ref.emptyContent;

  if (!configurations) {
    throw new Error('[QuadrantChart] missing prop: configurations');
  }

  var chartRef = (0, _react.useRef)(null);
  var _configurations$width = configurations.width,
      width = _configurations$width === void 0 ? 300 : _configurations$width,
      _configurations$heigh = configurations.height,
      height = _configurations$heigh === void 0 ? 300 : _configurations$heigh,
      _configurations$xFiel = configurations.xField,
      xField = _configurations$xFiel === void 0 ? 'dev_equivalent' : _configurations$xFiel,
      _configurations$yFiel = configurations.yField,
      yField = _configurations$yFiel === void 0 ? 'deviation' : _configurations$yFiel,
      _configurations$xAxis = configurations.xAxis,
      xAxisProps = _configurations$xAxis === void 0 ? {
    axisLine: true,
    name: ''
  } : _configurations$xAxis,
      _configurations$yAxis = configurations.yAxis,
      yAxisProps = _configurations$yAxis === void 0 ? {
    axisLine: true,
    name: ''
  } : _configurations$yAxis,
      xBaseline = configurations.xBaseline,
      yBaseline = configurations.yBaseline,
      nameMap = configurations.nameMap,
      _configurations$label = configurations.labelProps,
      labelProps = _configurations$label === void 0 ? false : _configurations$label,
      _configurations$toolt = configurations.tooltipTitleFormatter,
      tooltipTitleFormatter = _configurations$toolt === void 0 ? function (v) {
    return v;
  } : _configurations$toolt,
      xBoundary = configurations.xBoundary,
      yBoundary = configurations.yBoundary,
      sizeField = configurations.sizeField,
      _configurations$paddi = configurations.padding,
      padding = _configurations$paddi === void 0 ? 'auto' : _configurations$paddi,
      _configurations$point = configurations.pointSize,
      pointSize = _configurations$point === void 0 ? [6, 20] : _configurations$point,
      _configurations$quadr = configurations.quadrantLabels,
      quadrantLabels = _configurations$quadr === void 0 ? ['', '', '', ''] : _configurations$quadr,
      _configurations$regio = configurations.regionStyle,
      regionStyle = _configurations$regio === void 0 ? [{
    fill: 'white',
    fillOpacity: 1,
    opacity: 1
  }, {
    fill: '#FFF4F4',
    fillOpacity: 1,
    opacity: 1
  }, {
    fill: 'white',
    fillOpacity: 1,
    opacity: 1
  }, {
    fill: '#F4FFF9',
    fillOpacity: 1,
    opacity: 1
  }] : _configurations$regio;

  if (!xBoundary || !yBoundary) {
    throw new Error('[QuadrantChart] missing conf: xBoundary/yBoundary');
  }

  var xAxis = _objectSpread(_objectSpread({}, xBoundary), {}, {
    /*
     * Note(leto):
     * if true, g2(not g2plot) will round up max by wilkinson-extended,
     * and it's hard to obtain calculated max,
     * then the baseline of quadrant would not be a center value
     */
    nice: false,
    grid: {
      visible: false
    },
    line: {
      style: {
        stroke: '#C4C4C4'
      }
    }
  });

  if (xAxisProps.name) {
    xAxis.title = {
      visible: true,
      text: xAxisProps.name
    };
  }
  /**
   * setting mix/max/minLimit/maxLimit would cause dots on edges be clipped into half
   * search "isLimitInPlot"
   */


  var yAxis = _objectSpread(_objectSpread({}, yBoundary), {}, {
    nice: false,
    line: {
      visible: false
    },
    grid: {
      visible: false
    }
  });

  if (yAxisProps.name) {
    yAxis.title = {
      visible: true,
      text: yAxisProps.name
    };
  }

  var quadrant = {
    xBaseline: xBaseline !== null && xBaseline !== void 0 ? xBaseline : xBoundary.max / 2,
    yBaseline: yBaseline !== null && yBaseline !== void 0 ? yBaseline : yBoundary.max / 2,
    lineStyle: {
      stroke: '#CBCBCB'
    },
    regionStyle: regionStyle,
    labels: quadrantLabels.map(function (content) {
      return {
        content: content
      };
    })
  };
  /**
   * final config
   */

  var colorGenerator = (0, _colors.getColorGenerator)();
  var config = {
    width: width,
    height: height,
    data: data,
    xField: xField,
    yField: yField,
    shape: 'circle',
    color: function color() {
      return colorGenerator.next().value;
    },
    pointStyle: {
      lineWidth: 0
    },
    xAxis: xAxis,
    yAxis: yAxis,
    tooltip: {
      customContent: getTooltipRenderer(nameMap, tooltipTitleFormatter)
    },
    quadrant: quadrant,
    sizeField: sizeField,
    padding: padding,
    size: pointSize,
    label: labelProps
  };
  (0, _react.useEffect)(function () {// Use this to debug when you are desperate
    // const chart = chartRef.current.getChart();
    // console.log(chart);
  }, []); // TODO: use ChartBase?

  if (data.every(function (item) {
    return !item[xField] && !item[yField];
  })) {
    return /*#__PURE__*/_react["default"].createElement(_chartBase.ChartEmpty, {
      content: emptyContent
    });
  } // @ts-expect-error ts-migrate(2322) FIXME: Type '{ width: any; height: any; data: any; xField... Remove this comment to see the full error message


  return /*#__PURE__*/_react["default"].createElement(_charts.Scatter, (0, _extends2["default"])({
    ref: chartRef
  }, config));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGUtY2hhcnRzL3F1YWRyYW50LWNoYXJ0L3F1YWRyYW50LWNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJnZXRUb29sdGlwUmVuZGVyZXIiLCJuYW1lTWFwIiwidGl0bGVGb3JtYXR0ZXIiLCJ0aXRsZSIsIml0ZW1zIiwibGVuZ3RoIiwiZGF0YSIsIm5hbWUiLCJjb2xvciIsInJvd3MiLCJtYXAiLCJpdGVtIiwidmFsdWUiLCJqb2luIiwicmV0IiwiUXVhZHJhbnRDaGFydCIsImNvbmZpZ3VyYXRpb25zIiwiZW1wdHlDb250ZW50IiwiRXJyb3IiLCJjaGFydFJlZiIsIndpZHRoIiwiaGVpZ2h0IiwieEZpZWxkIiwieUZpZWxkIiwieEF4aXMiLCJ4QXhpc1Byb3BzIiwiYXhpc0xpbmUiLCJ5QXhpcyIsInlBeGlzUHJvcHMiLCJ4QmFzZWxpbmUiLCJ5QmFzZWxpbmUiLCJsYWJlbFByb3BzIiwidG9vbHRpcFRpdGxlRm9ybWF0dGVyIiwidiIsInhCb3VuZGFyeSIsInlCb3VuZGFyeSIsInNpemVGaWVsZCIsInBhZGRpbmciLCJwb2ludFNpemUiLCJxdWFkcmFudExhYmVscyIsInJlZ2lvblN0eWxlIiwiZmlsbCIsImZpbGxPcGFjaXR5Iiwib3BhY2l0eSIsIm5pY2UiLCJncmlkIiwidmlzaWJsZSIsImxpbmUiLCJzdHlsZSIsInN0cm9rZSIsInRleHQiLCJxdWFkcmFudCIsIm1heCIsImxpbmVTdHlsZSIsImxhYmVscyIsImNvbnRlbnQiLCJjb2xvckdlbmVyYXRvciIsImNvbmZpZyIsInNoYXBlIiwibmV4dCIsInBvaW50U3R5bGUiLCJsaW5lV2lkdGgiLCJ0b29sdGlwIiwiY3VzdG9tQ29udGVudCIsInNpemUiLCJsYWJlbCIsImV2ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsa0JB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QUFDQSxNQUFJekIsSUFBSSxDQUFDNEQsS0FBTCxDQUFXLFVBQUN2RCxJQUFEO0FBQUEsV0FBZSxDQUFDQSxJQUFJLENBQUNXLE1BQUQsQ0FBTCxJQUFpQixDQUFDWCxJQUFJLENBQUNZLE1BQUQsQ0FBckM7QUFBQSxHQUFYLENBQUosRUFBK0Q7QUFDN0Qsd0JBQU8sZ0NBQUMscUJBQUQ7QUFBWSxNQUFBLE9BQU8sRUFBRU47QUFBckIsTUFBUDtBQUNELEdBMUhnRixDQTJIakY7OztBQUNBLHNCQUFPLGdDQUFDLGVBQUQ7QUFBUyxJQUFBLEdBQUcsRUFBRUU7QUFBZCxLQUE0QnNDLE1BQTVCLEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNjYXR0ZXIgfSBmcm9tICdAYW50LWRlc2lnbi9jaGFydHMnO1xuaW1wb3J0IHsgZ2V0Q29sb3JHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2NvbG9ycyc7XG5pbXBvcnQgeyBDaGFydEVtcHR5IH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC1iYXNlJztcblxuY29uc3QgZ2V0VG9vbHRpcFJlbmRlcmVyID0gKG5hbWVNYXA6IGFueSwgdGl0bGVGb3JtYXR0ZXI6IGFueSkgPT4gKHRpdGxlOiBhbnksIGl0ZW1zOiBhbnkpID0+IHtcbiAgaWYgKCFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICc8ZGl2IC8+JztcbiAgfVxuICB0aXRsZSA9IGl0ZW1zWzBdLmRhdGEubmFtZTtcbiAgY29uc3QgY29sb3IgPSBpdGVtc1swXS5jb2xvcjtcbiAgY29uc3Qgcm93cyA9IGl0ZW1zXG4gICAgLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZU1hcFtpdGVtLm5hbWVdO1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBgXG4gICAgICA8bGkgY2xhc3M9XCJnMi10b29sdGlwLWxpc3QtaXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImcyLXRvb2x0aXAtbWFya2VyXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImcyLXRvb2x0aXAtbmFtZVwiPiR7bmFtZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZzItdG9vbHRpcC12YWx1ZVwiPiR7aXRlbS52YWx1ZX08L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIGA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG5cbiAgY29uc3QgcmV0ID0gYFxuICAgIDxkaXYgY2xhc3M9XCJnMi10b29sdGlwLXRpdGxlXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImcyLXRvb2x0aXAtbWFya2VyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfVwiPjwvc3Bhbj5cbiAgICAgICR7dGl0bGVGb3JtYXR0ZXIodGl0bGUpfVxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cImcyLXRvb2x0aXAtbGlzdFwiPlxuICAgICAgJHtyb3dzfVxuICAgIDwvdWw+XG4gIGA7XG4gIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWFkcmFudENoYXJ0KHsgZGF0YSwgY29uZmlndXJhdGlvbnMsIGVtcHR5Q29udGVudCB9OiBhbnkpIHtcbiAgaWYgKCFjb25maWd1cmF0aW9ucykge1xuICAgIHRocm93IG5ldyBFcnJvcignW1F1YWRyYW50Q2hhcnRdIG1pc3NpbmcgcHJvcDogY29uZmlndXJhdGlvbnMnKTtcbiAgfVxuICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCB7XG4gICAgd2lkdGggPSAzMDAsXG4gICAgaGVpZ2h0ID0gMzAwLFxuICAgIHhGaWVsZCA9ICdkZXZfZXF1aXZhbGVudCcsXG4gICAgeUZpZWxkID0gJ2RldmlhdGlvbicsXG4gICAgeEF4aXM6IHhBeGlzUHJvcHMgPSB7XG4gICAgICBheGlzTGluZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgIH0sXG4gICAgeUF4aXM6IHlBeGlzUHJvcHMgPSB7XG4gICAgICBheGlzTGluZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICcnLFxuICAgIH0sXG4gICAgeEJhc2VsaW5lLFxuICAgIHlCYXNlbGluZSxcbiAgICBuYW1lTWFwLFxuICAgIGxhYmVsUHJvcHMgPSBmYWxzZSxcbiAgICB0b29sdGlwVGl0bGVGb3JtYXR0ZXIgPSAodjogYW55KSA9PiB2LFxuICAgIHhCb3VuZGFyeSwgLy8geyBtaW46IDAsIG1heDogMTAwMDAgfVxuICAgIHlCb3VuZGFyeSxcbiAgICBzaXplRmllbGQsXG4gICAgcGFkZGluZyA9ICdhdXRvJyxcbiAgICBwb2ludFNpemUgPSBbNiwgMjBdLFxuICAgIHF1YWRyYW50TGFiZWxzID0gWycnLCAnJywgJycsICcnXSxcbiAgICByZWdpb25TdHlsZSA9IFtcbiAgICAgIHsgZmlsbDogJ3doaXRlJywgZmlsbE9wYWNpdHk6IDEsIG9wYWNpdHk6IDEgfSxcbiAgICAgIHsgZmlsbDogJyNGRkY0RjQnLCBmaWxsT3BhY2l0eTogMSwgb3BhY2l0eTogMSB9LFxuICAgICAgeyBmaWxsOiAnd2hpdGUnLCBmaWxsT3BhY2l0eTogMSwgb3BhY2l0eTogMSB9LFxuICAgICAgeyBmaWxsOiAnI0Y0RkZGOScsIGZpbGxPcGFjaXR5OiAxLCBvcGFjaXR5OiAxIH0sXG4gICAgXSxcbiAgfSA9IGNvbmZpZ3VyYXRpb25zO1xuXG4gIGlmICgheEJvdW5kYXJ5IHx8ICF5Qm91bmRhcnkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1tRdWFkcmFudENoYXJ0XSBtaXNzaW5nIGNvbmY6IHhCb3VuZGFyeS95Qm91bmRhcnknKTtcbiAgfVxuXG4gIGNvbnN0IHhBeGlzID0ge1xuICAgIC4uLnhCb3VuZGFyeSxcbiAgICAvKlxuICAgICAqIE5vdGUobGV0byk6XG4gICAgICogaWYgdHJ1ZSwgZzIobm90IGcycGxvdCkgd2lsbCByb3VuZCB1cCBtYXggYnkgd2lsa2luc29uLWV4dGVuZGVkLFxuICAgICAqIGFuZCBpdCdzIGhhcmQgdG8gb2J0YWluIGNhbGN1bGF0ZWQgbWF4LFxuICAgICAqIHRoZW4gdGhlIGJhc2VsaW5lIG9mIHF1YWRyYW50IHdvdWxkIG5vdCBiZSBhIGNlbnRlciB2YWx1ZVxuICAgICAqL1xuICAgIG5pY2U6IGZhbHNlLFxuICAgIGdyaWQ6IHsgdmlzaWJsZTogZmFsc2UgfSxcbiAgICBsaW5lOiB7IHN0eWxlOiB7IHN0cm9rZTogJyNDNEM0QzQnIH0gfSxcbiAgfTtcbiAgaWYgKHhBeGlzUHJvcHMubmFtZSkge1xuICAgIHhBeGlzLnRpdGxlID0ge1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIHRleHQ6IHhBeGlzUHJvcHMubmFtZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRpbmcgbWl4L21heC9taW5MaW1pdC9tYXhMaW1pdCB3b3VsZCBjYXVzZSBkb3RzIG9uIGVkZ2VzIGJlIGNsaXBwZWQgaW50byBoYWxmXG4gICAqIHNlYXJjaCBcImlzTGltaXRJblBsb3RcIlxuICAgKi9cbiAgY29uc3QgeUF4aXMgPSB7XG4gICAgLi4ueUJvdW5kYXJ5LFxuICAgIG5pY2U6IGZhbHNlLFxuICAgIGxpbmU6IHsgdmlzaWJsZTogZmFsc2UgfSxcbiAgICBncmlkOiB7IHZpc2libGU6IGZhbHNlIH0sXG4gIH07XG4gIGlmICh5QXhpc1Byb3BzLm5hbWUpIHtcbiAgICB5QXhpcy50aXRsZSA9IHtcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICB0ZXh0OiB5QXhpc1Byb3BzLm5hbWUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHF1YWRyYW50ID0ge1xuICAgIHhCYXNlbGluZTogeEJhc2VsaW5lID8/IHhCb3VuZGFyeS5tYXggLyAyLFxuICAgIHlCYXNlbGluZTogeUJhc2VsaW5lID8/IHlCb3VuZGFyeS5tYXggLyAyLFxuICAgIGxpbmVTdHlsZToge1xuICAgICAgc3Ryb2tlOiAnI0NCQ0JDQicsXG4gICAgfSxcbiAgICByZWdpb25TdHlsZSxcbiAgICBsYWJlbHM6IHF1YWRyYW50TGFiZWxzLm1hcCgoY29udGVudDogc3RyaW5nKSA9PiAoeyBjb250ZW50IH0pKSxcbiAgfTtcblxuICAvKipcbiAgICogZmluYWwgY29uZmlnXG4gICAqL1xuICBjb25zdCBjb2xvckdlbmVyYXRvciA9IGdldENvbG9yR2VuZXJhdG9yKCk7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgZGF0YSxcbiAgICB4RmllbGQsXG4gICAgeUZpZWxkLFxuICAgIHNoYXBlOiAnY2lyY2xlJyxcblxuICAgIGNvbG9yOiAoKSA9PiBjb2xvckdlbmVyYXRvci5uZXh0KCkudmFsdWUsXG4gICAgcG9pbnRTdHlsZToge1xuICAgICAgbGluZVdpZHRoOiAwLFxuICAgIH0sXG4gICAgeEF4aXMsXG4gICAgeUF4aXMsXG4gICAgdG9vbHRpcDogeyBjdXN0b21Db250ZW50OiBnZXRUb29sdGlwUmVuZGVyZXIobmFtZU1hcCwgdG9vbHRpcFRpdGxlRm9ybWF0dGVyKSB9LFxuICAgIHF1YWRyYW50LFxuICAgIHNpemVGaWVsZCxcbiAgICBwYWRkaW5nLFxuICAgIHNpemU6IHBvaW50U2l6ZSxcbiAgICBsYWJlbDogbGFiZWxQcm9wcyxcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBVc2UgdGhpcyB0byBkZWJ1ZyB3aGVuIHlvdSBhcmUgZGVzcGVyYXRlXG4gICAgLy8gY29uc3QgY2hhcnQgPSBjaGFydFJlZi5jdXJyZW50LmdldENoYXJ0KCk7XG4gICAgLy8gY29uc29sZS5sb2coY2hhcnQpO1xuICB9LCBbXSk7XG5cbiAgLy8gVE9ETzogdXNlIENoYXJ0QmFzZT9cbiAgaWYgKGRhdGEuZXZlcnkoKGl0ZW06IGFueSkgPT4gIWl0ZW1beEZpZWxkXSAmJiAhaXRlbVt5RmllbGRdKSkge1xuICAgIHJldHVybiA8Q2hhcnRFbXB0eSBjb250ZW50PXtlbXB0eUNvbnRlbnR9IC8+O1xuICB9XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzIyKSBGSVhNRTogVHlwZSAneyB3aWR0aDogYW55OyBoZWlnaHQ6IGFueTsgZGF0YTogYW55OyB4RmllbGQuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICByZXR1cm4gPFNjYXR0ZXIgcmVmPXtjaGFydFJlZn0gey4uLmNvbmZpZ30gLz47XG59XG4iXX0=