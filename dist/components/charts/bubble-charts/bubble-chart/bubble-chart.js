"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = BubbleChart;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _charts = require("@ant-design/charts");

var _colors = require("../../../helpers/colors");

var _chartBase = require("../../base/chart-base");

var getTooltipRenderer = function getTooltipRenderer(nameMap, titleFormatter, valueFormatter) {
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

      return "\n      <li class=\"g2-tooltip-list-item\">\n        <span class=\"g2-tooltip-marker\"></span>\n        <span class=\"g2-tooltip-name\">".concat(name, "</span>\n        <span class=\"g2-tooltip-value\">\n          ").concat(valueFormatter(name, item.value), "\n        </span>\n      </li>\n    ");
    }).join('');
    var ret = "\n    <div class=\"g2-tooltip-title\">\n      <span class=\"g2-tooltip-marker\" style=\"background-color: ".concat(color, "\"></span>\n      ").concat(titleFormatter(title), "\n    </div>\n    <ul class=\"g2-tooltip-list\">\n      ").concat(rows, "\n    </ul>\n  ");
    return ret;
  };
};

function BubbleChart(_ref) {
  var data = _ref.data,
      configurations = _ref.configurations,
      emptyContent = _ref.emptyContent;

  if (!configurations) {
    throw new Error('[BubbleChart] missing prop: configurations');
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
      xAxis = configurations.xAxis,
      yAxis = configurations.yAxis,
      colorField = configurations.colorField,
      color = configurations.color,
      nameMap = configurations.nameMap,
      _configurations$label = configurations.label,
      label = _configurations$label === void 0 ? false : _configurations$label,
      _configurations$toolt = configurations.tooltipTitleFormatter,
      tooltipTitleFormatter = _configurations$toolt === void 0 ? function (v) {
    return v;
  } : _configurations$toolt,
      _configurations$toolt2 = configurations.tooltipValueFormatter,
      tooltipValueFormatter = _configurations$toolt2 === void 0 ? function (v) {
    return v;
  } : _configurations$toolt2,
      sizeField = configurations.sizeField,
      _configurations$paddi = configurations.padding,
      padding = _configurations$paddi === void 0 ? 'auto' : _configurations$paddi,
      _configurations$point = configurations.pointStyle,
      pointStyle = _configurations$point === void 0 ? {
    lineWidth: 2,
    fillOpacity: 1
  } : _configurations$point,
      _configurations$size = configurations.size,
      size = _configurations$size === void 0 ? [6, 20] : _configurations$size,
      _configurations$regre = configurations.regressionLine,
      regressionLine = _configurations$regre === void 0 ? null : _configurations$regre,
      _configurations$legen = configurations.legend,
      legend = _configurations$legen === void 0 ? {
    layout: 'horizontal',
    position: 'top-right'
  } : _configurations$legen,
      _configurations$onRea = configurations.onReady,
      onReady = _configurations$onRea === void 0 ? null : _configurations$onRea;
  /**
   * final config
   */

  var config = {
    width: width,
    height: height,
    data: data,
    xField: xField,
    yField: yField,
    shape: 'circle',
    colorField: colorField,
    color: color,
    pointStyle: pointStyle,
    xAxis: xAxis,
    yAxis: yAxis,
    tooltip: {
      customContent: getTooltipRenderer(nameMap, tooltipTitleFormatter, tooltipValueFormatter)
    },
    sizeField: sizeField,
    padding: padding,
    size: size,
    label: label,
    legend: legend,
    regressionLine: regressionLine,
    onReady: onReady
  };

  if (!config.color) {
    var colorGenerator = (0, _colors.getColorGenerator)();

    config.color = function () {
      return colorGenerator.next().value;
    };
  } // TODO: use ChartBase?


  if (data.every(function (item) {
    return !item[xField] && !item[yField];
  })) {
    return /*#__PURE__*/_react["default"].createElement(_chartBase.ChartEmpty, {
      content: emptyContent
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_charts.Scatter, (0, _extends2["default"])({
    ref: chartRef
  }, config));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGUtY2hhcnRzL2J1YmJsZS1jaGFydC9idWJibGUtY2hhcnQudHN4Il0sIm5hbWVzIjpbImdldFRvb2x0aXBSZW5kZXJlciIsIm5hbWVNYXAiLCJ0aXRsZUZvcm1hdHRlciIsInZhbHVlRm9ybWF0dGVyIiwidGl0bGUiLCJpdGVtcyIsImxlbmd0aCIsImRhdGEiLCJuYW1lIiwiY29sb3IiLCJyb3dzIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiam9pbiIsInJldCIsIkJ1YmJsZUNoYXJ0IiwiY29uZmlndXJhdGlvbnMiLCJlbXB0eUNvbnRlbnQiLCJFcnJvciIsImNoYXJ0UmVmIiwid2lkdGgiLCJoZWlnaHQiLCJ4RmllbGQiLCJ5RmllbGQiLCJ4QXhpcyIsInlBeGlzIiwiY29sb3JGaWVsZCIsImxhYmVsIiwidG9vbHRpcFRpdGxlRm9ybWF0dGVyIiwidiIsInRvb2x0aXBWYWx1ZUZvcm1hdHRlciIsInNpemVGaWVsZCIsInBhZGRpbmciLCJwb2ludFN0eWxlIiwibGluZVdpZHRoIiwiZmlsbE9wYWNpdHkiLCJzaXplIiwicmVncmVzc2lvbkxpbmUiLCJsZWdlbmQiLCJsYXlvdXQiLCJwb3NpdGlvbiIsIm9uUmVhZHkiLCJjb25maWciLCJzaGFwZSIsInRvb2x0aXAiLCJjdXN0b21Db250ZW50IiwiY29sb3JHZW5lcmF0b3IiLCJuZXh0IiwiZXZlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLE9BQUQsRUFBZUMsY0FBZixFQUFvQ0MsY0FBcEM7QUFBQSxTQUE0RCxVQUFDQyxLQUFELEVBQWFDLEtBQWIsRUFBNEI7QUFDakgsUUFBSSxDQUFDQSxLQUFELElBQVUsQ0FBQ0EsS0FBSyxDQUFDQyxNQUFyQixFQUE2QjtBQUMzQixhQUFPLFNBQVA7QUFDRDs7QUFDREYsSUFBQUEsS0FBSyxHQUFHQyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNFLElBQVQsQ0FBY0MsSUFBdEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ksS0FBdkI7QUFDQSxRQUFNQyxJQUFJLEdBQUdMLEtBQUssQ0FDZk0sR0FEVSxDQUNOLFVBQUNDLElBQUQsRUFBZTtBQUNsQixVQUFNSixJQUFJLEdBQUdQLE9BQU8sQ0FBQ1csSUFBSSxDQUFDSixJQUFOLENBQXBCOztBQUNBLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsZUFBTyxFQUFQO0FBQ0Q7O0FBQ0QsK0pBR2tDQSxJQUhsQywyRUFLTUwsY0FBYyxDQUFDSyxJQUFELEVBQU9JLElBQUksQ0FBQ0MsS0FBWixDQUxwQjtBQVNELEtBZlUsRUFnQlZDLElBaEJVLENBZ0JMLEVBaEJLLENBQWI7QUFrQkEsUUFBTUMsR0FBRyx1SEFFc0ROLEtBRnRELCtCQUdIUCxjQUFjLENBQUNFLEtBQUQsQ0FIWCxxRUFNSE0sSUFORyxvQkFBVDtBQVNBLFdBQU9LLEdBQVA7QUFDRCxHQWxDMEI7QUFBQSxDQUEzQjs7QUFvQ2UsU0FBU0MsV0FBVCxPQUFrRTtBQUFBLE1BQTNDVCxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ1UsY0FBcUMsUUFBckNBLGNBQXFDO0FBQUEsTUFBckJDLFlBQXFCLFFBQXJCQSxZQUFxQjs7QUFDL0UsTUFBSSxDQUFDRCxjQUFMLEVBQXFCO0FBQ25CLFVBQU0sSUFBSUUsS0FBSixDQUFVLDRDQUFWLENBQU47QUFDRDs7QUFDRCxNQUFNQyxRQUFRLEdBQUcsbUJBQU8sSUFBUCxDQUFqQjtBQUorRSw4QkFnQzNFSCxjQWhDMkUsQ0FPN0VJLEtBUDZFO0FBQUEsTUFPN0VBLEtBUDZFLHNDQU9yRSxHQVBxRTtBQUFBLDhCQWdDM0VKLGNBaEMyRSxDQVE3RUssTUFSNkU7QUFBQSxNQVE3RUEsTUFSNkUsc0NBUXBFLEdBUm9FO0FBQUEsOEJBZ0MzRUwsY0FoQzJFLENBUzdFTSxNQVQ2RTtBQUFBLE1BUzdFQSxNQVQ2RSxzQ0FTcEUsZ0JBVG9FO0FBQUEsOEJBZ0MzRU4sY0FoQzJFLENBVTdFTyxNQVY2RTtBQUFBLE1BVTdFQSxNQVY2RSxzQ0FVcEUsV0FWb0U7QUFBQSxNQVc3RUMsS0FYNkUsR0FnQzNFUixjQWhDMkUsQ0FXN0VRLEtBWDZFO0FBQUEsTUFZN0VDLEtBWjZFLEdBZ0MzRVQsY0FoQzJFLENBWTdFUyxLQVo2RTtBQUFBLE1BYTdFQyxVQWI2RSxHQWdDM0VWLGNBaEMyRSxDQWE3RVUsVUFiNkU7QUFBQSxNQWM3RWxCLEtBZDZFLEdBZ0MzRVEsY0FoQzJFLENBYzdFUixLQWQ2RTtBQUFBLE1BZTdFUixPQWY2RSxHQWdDM0VnQixjQWhDMkUsQ0FlN0VoQixPQWY2RTtBQUFBLDhCQWdDM0VnQixjQWhDMkUsQ0FnQjdFVyxLQWhCNkU7QUFBQSxNQWdCN0VBLEtBaEI2RSxzQ0FnQnJFLEtBaEJxRTtBQUFBLDhCQWdDM0VYLGNBaEMyRSxDQWlCN0VZLHFCQWpCNkU7QUFBQSxNQWlCN0VBLHFCQWpCNkUsc0NBaUJyRCxVQUFDQyxDQUFEO0FBQUEsV0FBWUEsQ0FBWjtBQUFBLEdBakJxRDtBQUFBLCtCQWdDM0ViLGNBaEMyRSxDQWtCN0VjLHFCQWxCNkU7QUFBQSxNQWtCN0VBLHFCQWxCNkUsdUNBa0JyRCxVQUFDRCxDQUFEO0FBQUEsV0FBWUEsQ0FBWjtBQUFBLEdBbEJxRDtBQUFBLE1BbUI3RUUsU0FuQjZFLEdBZ0MzRWYsY0FoQzJFLENBbUI3RWUsU0FuQjZFO0FBQUEsOEJBZ0MzRWYsY0FoQzJFLENBb0I3RWdCLE9BcEI2RTtBQUFBLE1Bb0I3RUEsT0FwQjZFLHNDQW9CbkUsTUFwQm1FO0FBQUEsOEJBZ0MzRWhCLGNBaEMyRSxDQXFCN0VpQixVQXJCNkU7QUFBQSxNQXFCN0VBLFVBckI2RSxzQ0FxQmhFO0FBQ1hDLElBQUFBLFNBQVMsRUFBRSxDQURBO0FBRVhDLElBQUFBLFdBQVcsRUFBRTtBQUZGLEdBckJnRTtBQUFBLDZCQWdDM0VuQixjQWhDMkUsQ0F5QjdFb0IsSUF6QjZFO0FBQUEsTUF5QjdFQSxJQXpCNkUscUNBeUJ0RSxDQUFDLENBQUQsRUFBSSxFQUFKLENBekJzRTtBQUFBLDhCQWdDM0VwQixjQWhDMkUsQ0EwQjdFcUIsY0ExQjZFO0FBQUEsTUEwQjdFQSxjQTFCNkUsc0NBMEI1RCxJQTFCNEQ7QUFBQSw4QkFnQzNFckIsY0FoQzJFLENBMkI3RXNCLE1BM0I2RTtBQUFBLE1BMkI3RUEsTUEzQjZFLHNDQTJCcEU7QUFDUEMsSUFBQUEsTUFBTSxFQUFFLFlBREQ7QUFFUEMsSUFBQUEsUUFBUSxFQUFFO0FBRkgsR0EzQm9FO0FBQUEsOEJBZ0MzRXhCLGNBaEMyRSxDQStCN0V5QixPQS9CNkU7QUFBQSxNQStCN0VBLE9BL0I2RSxzQ0ErQm5FLElBL0JtRTtBQWtDL0U7Ozs7QUFHQSxNQUFNQyxNQUFNLEdBQUc7QUFDYnRCLElBQUFBLEtBQUssRUFBTEEsS0FEYTtBQUViQyxJQUFBQSxNQUFNLEVBQU5BLE1BRmE7QUFHYmYsSUFBQUEsSUFBSSxFQUFKQSxJQUhhO0FBSWJnQixJQUFBQSxNQUFNLEVBQU5BLE1BSmE7QUFLYkMsSUFBQUEsTUFBTSxFQUFOQSxNQUxhO0FBTWJvQixJQUFBQSxLQUFLLEVBQUUsUUFOTTtBQU9iakIsSUFBQUEsVUFBVSxFQUFWQSxVQVBhO0FBUWJsQixJQUFBQSxLQUFLLEVBQUxBLEtBUmE7QUFTYnlCLElBQUFBLFVBQVUsRUFBVkEsVUFUYTtBQVViVCxJQUFBQSxLQUFLLEVBQUxBLEtBVmE7QUFXYkMsSUFBQUEsS0FBSyxFQUFMQSxLQVhhO0FBWWJtQixJQUFBQSxPQUFPLEVBQUU7QUFBRUMsTUFBQUEsYUFBYSxFQUFFOUMsa0JBQWtCLENBQUNDLE9BQUQsRUFBVTRCLHFCQUFWLEVBQWlDRSxxQkFBakM7QUFBbkMsS0FaSTtBQWFiQyxJQUFBQSxTQUFTLEVBQVRBLFNBYmE7QUFjYkMsSUFBQUEsT0FBTyxFQUFQQSxPQWRhO0FBZWJJLElBQUFBLElBQUksRUFBSkEsSUFmYTtBQWdCYlQsSUFBQUEsS0FBSyxFQUFMQSxLQWhCYTtBQWlCYlcsSUFBQUEsTUFBTSxFQUFOQSxNQWpCYTtBQWtCYkQsSUFBQUEsY0FBYyxFQUFkQSxjQWxCYTtBQW1CYkksSUFBQUEsT0FBTyxFQUFQQTtBQW5CYSxHQUFmOztBQXFCQSxNQUFJLENBQUNDLE1BQU0sQ0FBQ2xDLEtBQVosRUFBbUI7QUFDakIsUUFBTXNDLGNBQWMsR0FBRyxnQ0FBdkI7O0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ2xDLEtBQVAsR0FBZTtBQUFBLGFBQU1zQyxjQUFjLENBQUNDLElBQWYsR0FBc0JuQyxLQUE1QjtBQUFBLEtBQWY7QUFDRCxHQTdEOEUsQ0ErRC9FOzs7QUFDQSxNQUFJTixJQUFJLENBQUMwQyxLQUFMLENBQVcsVUFBQ3JDLElBQUQ7QUFBQSxXQUFlLENBQUNBLElBQUksQ0FBQ1csTUFBRCxDQUFMLElBQWlCLENBQUNYLElBQUksQ0FBQ1ksTUFBRCxDQUFyQztBQUFBLEdBQVgsQ0FBSixFQUErRDtBQUM3RCx3QkFBTyxnQ0FBQyxxQkFBRDtBQUFZLE1BQUEsT0FBTyxFQUFFTjtBQUFyQixNQUFQO0FBQ0Q7O0FBQ0Qsc0JBQU8sZ0NBQUMsZUFBRDtBQUFTLElBQUEsR0FBRyxFQUFFRTtBQUFkLEtBQTRCdUIsTUFBNUIsRUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNjYXR0ZXIgfSBmcm9tICdAYW50LWRlc2lnbi9jaGFydHMnO1xuaW1wb3J0IHsgZ2V0Q29sb3JHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2NvbG9ycyc7XG5pbXBvcnQgeyBDaGFydEVtcHR5IH0gZnJvbSAnLi4vLi4vYmFzZS9jaGFydC1iYXNlJztcblxuY29uc3QgZ2V0VG9vbHRpcFJlbmRlcmVyID0gKG5hbWVNYXA6IGFueSwgdGl0bGVGb3JtYXR0ZXI6IGFueSwgdmFsdWVGb3JtYXR0ZXI6IGFueSkgPT4gKHRpdGxlOiBhbnksIGl0ZW1zOiBhbnkpID0+IHtcbiAgaWYgKCFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICc8ZGl2IC8+JztcbiAgfVxuICB0aXRsZSA9IGl0ZW1zWzBdLmRhdGEubmFtZTtcbiAgY29uc3QgY29sb3IgPSBpdGVtc1swXS5jb2xvcjtcbiAgY29uc3Qgcm93cyA9IGl0ZW1zXG4gICAgLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZU1hcFtpdGVtLm5hbWVdO1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBgXG4gICAgICA8bGkgY2xhc3M9XCJnMi10b29sdGlwLWxpc3QtaXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImcyLXRvb2x0aXAtbWFya2VyXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImcyLXRvb2x0aXAtbmFtZVwiPiR7bmFtZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZzItdG9vbHRpcC12YWx1ZVwiPlxuICAgICAgICAgICR7dmFsdWVGb3JtYXR0ZXIobmFtZSwgaXRlbS52YWx1ZSl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgYDtcbiAgICB9KVxuICAgIC5qb2luKCcnKTtcblxuICBjb25zdCByZXQgPSBgXG4gICAgPGRpdiBjbGFzcz1cImcyLXRvb2x0aXAtdGl0bGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZzItdG9vbHRpcC1tYXJrZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9XCI+PC9zcGFuPlxuICAgICAgJHt0aXRsZUZvcm1hdHRlcih0aXRsZSl9XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwiZzItdG9vbHRpcC1saXN0XCI+XG4gICAgICAke3Jvd3N9XG4gICAgPC91bD5cbiAgYDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1YmJsZUNoYXJ0KHsgZGF0YSwgY29uZmlndXJhdGlvbnMsIGVtcHR5Q29udGVudCB9OiBhbnkpIHtcbiAgaWYgKCFjb25maWd1cmF0aW9ucykge1xuICAgIHRocm93IG5ldyBFcnJvcignW0J1YmJsZUNoYXJ0XSBtaXNzaW5nIHByb3A6IGNvbmZpZ3VyYXRpb25zJyk7XG4gIH1cbiAgY29uc3QgY2hhcnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qge1xuICAgIHdpZHRoID0gMzAwLFxuICAgIGhlaWdodCA9IDMwMCxcbiAgICB4RmllbGQgPSAnZGV2X2VxdWl2YWxlbnQnLFxuICAgIHlGaWVsZCA9ICdkZXZpYXRpb24nLFxuICAgIHhBeGlzLFxuICAgIHlBeGlzLFxuICAgIGNvbG9yRmllbGQsXG4gICAgY29sb3IsXG4gICAgbmFtZU1hcCxcbiAgICBsYWJlbCA9IGZhbHNlLFxuICAgIHRvb2x0aXBUaXRsZUZvcm1hdHRlciA9ICh2OiBhbnkpID0+IHYsXG4gICAgdG9vbHRpcFZhbHVlRm9ybWF0dGVyID0gKHY6IGFueSkgPT4gdixcbiAgICBzaXplRmllbGQsXG4gICAgcGFkZGluZyA9ICdhdXRvJyxcbiAgICBwb2ludFN0eWxlID0ge1xuICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgZmlsbE9wYWNpdHk6IDEsXG4gICAgfSxcbiAgICBzaXplID0gWzYsIDIwXSxcbiAgICByZWdyZXNzaW9uTGluZSA9IG51bGwsXG4gICAgbGVnZW5kID0ge1xuICAgICAgbGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gICAgICBwb3NpdGlvbjogJ3RvcC1yaWdodCcsXG4gICAgfSxcbiAgICBvblJlYWR5ID0gbnVsbCxcbiAgfSA9IGNvbmZpZ3VyYXRpb25zO1xuXG4gIC8qKlxuICAgKiBmaW5hbCBjb25maWdcbiAgICovXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgZGF0YSxcbiAgICB4RmllbGQsXG4gICAgeUZpZWxkLFxuICAgIHNoYXBlOiAnY2lyY2xlJyxcbiAgICBjb2xvckZpZWxkLFxuICAgIGNvbG9yLFxuICAgIHBvaW50U3R5bGUsXG4gICAgeEF4aXMsXG4gICAgeUF4aXMsXG4gICAgdG9vbHRpcDogeyBjdXN0b21Db250ZW50OiBnZXRUb29sdGlwUmVuZGVyZXIobmFtZU1hcCwgdG9vbHRpcFRpdGxlRm9ybWF0dGVyLCB0b29sdGlwVmFsdWVGb3JtYXR0ZXIpIH0sXG4gICAgc2l6ZUZpZWxkLFxuICAgIHBhZGRpbmcsXG4gICAgc2l6ZSxcbiAgICBsYWJlbCxcbiAgICBsZWdlbmQsXG4gICAgcmVncmVzc2lvbkxpbmUsXG4gICAgb25SZWFkeSxcbiAgfTtcbiAgaWYgKCFjb25maWcuY29sb3IpIHtcbiAgICBjb25zdCBjb2xvckdlbmVyYXRvciA9IGdldENvbG9yR2VuZXJhdG9yKCk7XG4gICAgY29uZmlnLmNvbG9yID0gKCkgPT4gY29sb3JHZW5lcmF0b3IubmV4dCgpLnZhbHVlO1xuICB9XG5cbiAgLy8gVE9ETzogdXNlIENoYXJ0QmFzZT9cbiAgaWYgKGRhdGEuZXZlcnkoKGl0ZW06IGFueSkgPT4gIWl0ZW1beEZpZWxkXSAmJiAhaXRlbVt5RmllbGRdKSkge1xuICAgIHJldHVybiA8Q2hhcnRFbXB0eSBjb250ZW50PXtlbXB0eUNvbnRlbnR9IC8+O1xuICB9XG4gIHJldHVybiA8U2NhdHRlciByZWY9e2NoYXJ0UmVmfSB7Li4uY29uZmlnfSAvPjtcbn1cbiJdfQ==