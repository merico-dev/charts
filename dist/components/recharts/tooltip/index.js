"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$keys2 = require("@babel/runtime-corejs2/core-js/object/keys");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _exportNames = {
  renderTooltip: true
};
exports.renderTooltip = renderTooltip;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

var _lodash = require("lodash");

var _tooltipContent = require("./tooltip-content");

var _formatter = require("../../helpers/formatter");

var _types = require("./types");

_Object$keys2(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

/** @jsx jsx */
function getNonEmptyStringArray() {
  for (var _len = arguments.length, arrs = new Array(_len), _key = 0; _key < _len; _key++) {
    arrs[_key] = arguments[_key];
  }

  var match = arrs.find(function (arr) {
    return arr.length > 0;
  });
  return match !== null && match !== void 0 ? match : [];
}

function shouldRenderTooltip(configurations) {
  var _configurations$toolt;

  if (configurations.withTooltip === false) {
    return false;
  }

  if ((configurations === null || configurations === void 0 ? void 0 : (_configurations$toolt = configurations.tooltip) === null || _configurations$toolt === void 0 ? void 0 : _configurations$toolt.enabled) === false) {
    return false;
  }

  return true;
}

var DEPRECATED_TOOLTIP_PROPS = ['withTooltip', 'tooltipAppender', 'tooltipExcludedNames', 'tooltipSorter', 'tooltipTrigger', 'tooltipValueFormatter', 'tooltipLabelFormatter'];

function warnTooltipDeprecations(configurations) {
  var s = new _set["default"](DEPRECATED_TOOLTIP_PROPS);
  (0, _keys["default"])(configurations).forEach(function (key) {
    if (!s.has(key)) {
      return;
    }

    console.error("[charts/Tooltip] prop [".concat(key, "] is deprecated, use the corresponding field in configurations.tooltip instead"));
  });
}

function getLabelFormatter(configurations) {
  var tooltip = configurations.tooltip,
      labelFormatter = configurations.labelFormatter,
      tooltipLabelFormatter = configurations.tooltipLabelFormatter;

  if (tooltip === null || tooltip === void 0 ? void 0 : tooltip.labelFormatter) {
    return tooltip === null || tooltip === void 0 ? void 0 : tooltip.labelFormatter;
  }

  if (tooltipLabelFormatter) {
    return tooltipLabelFormatter;
  }

  return (0, _formatter.normalizeFormatter)(labelFormatter);
}

function getValueFormatter(configurations) {
  var tooltip = configurations.tooltip,
      valueFormatter = configurations.valueFormatter,
      tooltipValueFormatter = configurations.tooltipValueFormatter;

  if (tooltip === null || tooltip === void 0 ? void 0 : tooltip.valueFormatter) {
    return tooltip === null || tooltip === void 0 ? void 0 : tooltip.valueFormatter;
  }

  if (tooltipValueFormatter) {
    return tooltipValueFormatter;
  }

  return (0, _formatter.normalizeFormatter)(valueFormatter);
}

function extractTooltipConfiguration(configurations) {
  var defaultFormatter = function defaultFormatter(value) {
    return value;
  };

  var tooltip = {
    active: undefined,
    appender: undefined,
    cursor: undefined,
    enabled: true,
    excludedNames: [],
    label: undefined,
    labelFormatter: defaultFormatter,
    payload: undefined,
    rowNameFormatter: undefined,
    sorter: undefined,
    trigger: 'hover',
    valueFormatter: defaultFormatter,
    content: _tooltipContent.TooltipContent
  };

  if (configurations.tooltip) {
    (0, _assign["default"])(tooltip, configurations.tooltip);
  }

  tooltip.labelFormatter = getLabelFormatter(configurations);
  tooltip.valueFormatter = getValueFormatter(configurations);
  var tooltipAppender = configurations.tooltipAppender,
      tooltipCursor = configurations.tooltipCursor,
      _configurations$toolt2 = configurations.tooltipExcludedNames,
      tooltipExcludedNames = _configurations$toolt2 === void 0 ? [] : _configurations$toolt2,
      tooltipSorter = configurations.tooltipSorter;
  warnTooltipDeprecations(configurations);
  tooltip.appender = (0, _lodash.get)(tooltip, 'appender', tooltipAppender);
  tooltip.cursor = (0, _lodash.get)(tooltip, 'cursor', tooltipCursor);
  tooltip.excludedNames = getNonEmptyStringArray(tooltip.excludedNames, tooltipExcludedNames);
  tooltip.sorter = (0, _lodash.get)(tooltip, 'sorter', tooltipSorter);
  return tooltip;
}

function renderTooltip(configurations) {
  if (!shouldRenderTooltip(configurations)) {
    return null;
  }

  var _extractTooltipConfig = extractTooltipConfiguration(configurations),
      trigger = _extractTooltipConfig.trigger,
      cursor = _extractTooltipConfig.cursor,
      content = _extractTooltipConfig.content,
      rest = (0, _objectWithoutProperties2["default"])(_extractTooltipConfig, ["trigger", "cursor", "content"]);

  return (0, _core.jsx)(_recharts.Tooltip, {
    trigger: trigger,
    cursor: cursor,
    wrapperStyle: {
      zIndex: 1000
    },
    content: content && /*#__PURE__*/_react["default"].createElement(content, rest, null)
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL3Rvb2x0aXAvaW5kZXgudHN4Il0sIm5hbWVzIjpbImdldE5vbkVtcHR5U3RyaW5nQXJyYXkiLCJhcnJzIiwibWF0Y2giLCJmaW5kIiwiYXJyIiwibGVuZ3RoIiwic2hvdWxkUmVuZGVyVG9vbHRpcCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ0b29sdGlwIiwiZW5hYmxlZCIsIkRFUFJFQ0FURURfVE9PTFRJUF9QUk9QUyIsIndhcm5Ub29sdGlwRGVwcmVjYXRpb25zIiwicyIsImZvckVhY2giLCJrZXkiLCJoYXMiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRMYWJlbEZvcm1hdHRlciIsImxhYmVsRm9ybWF0dGVyIiwidG9vbHRpcExhYmVsRm9ybWF0dGVyIiwiZ2V0VmFsdWVGb3JtYXR0ZXIiLCJ2YWx1ZUZvcm1hdHRlciIsInRvb2x0aXBWYWx1ZUZvcm1hdHRlciIsImV4dHJhY3RUb29sdGlwQ29uZmlndXJhdGlvbiIsImRlZmF1bHRGb3JtYXR0ZXIiLCJ2YWx1ZSIsImFjdGl2ZSIsInVuZGVmaW5lZCIsImFwcGVuZGVyIiwiY3Vyc29yIiwiZXhjbHVkZWROYW1lcyIsImxhYmVsIiwicGF5bG9hZCIsInJvd05hbWVGb3JtYXR0ZXIiLCJzb3J0ZXIiLCJ0cmlnZ2VyIiwiY29udGVudCIsIlRvb2x0aXBDb250ZW50IiwidG9vbHRpcEFwcGVuZGVyIiwidG9vbHRpcEN1cnNvciIsInRvb2x0aXBFeGNsdWRlZE5hbWVzIiwidG9vbHRpcFNvcnRlciIsInJlbmRlclRvb2x0aXAiLCJyZXN0IiwiekluZGV4IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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aUIsaUJBQUl0QixPQUFKLEVBQWEsUUFBYixFQUF1QmdDLGFBQXZCLENBQWpCO0FBQ0FoQyxFQUFBQSxPQUFPLENBQUN1QixhQUFSLEdBQXdCaEMsc0JBQXNCLENBQUNTLE9BQU8sQ0FBQ3VCLGFBQVQsRUFBd0JVLG9CQUF4QixDQUE5QztBQUNBakMsRUFBQUEsT0FBTyxDQUFDMkIsTUFBUixHQUFpQixpQkFBSTNCLE9BQUosRUFBYSxRQUFiLEVBQXVCa0MsYUFBdkIsQ0FBakI7QUFFQSxTQUFPbEMsT0FBUDtBQUNEOztBQUVNLFNBQVNtQyxhQUFULENBQXVCckMsY0FBdkIsRUFBNEQ7QUFDakUsTUFBSSxDQUFDRCxtQkFBbUIsQ0FBQ0MsY0FBRCxDQUF4QixFQUEwQztBQUN4QyxXQUFPLElBQVA7QUFDRDs7QUFIZ0UsOEJBSW5Ca0IsMkJBQTJCLENBQUNsQixjQUFELENBSlI7QUFBQSxNQUl6RDhCLE9BSnlELHlCQUl6REEsT0FKeUQ7QUFBQSxNQUloRE4sTUFKZ0QseUJBSWhEQSxNQUpnRDtBQUFBLE1BSXhDTyxPQUp3Qyx5QkFJeENBLE9BSndDO0FBQUEsTUFJNUJPLElBSjRCOztBQUtqRSxTQUNFLGVBQUMsaUJBQUQ7QUFDRSxJQUFBLE9BQU8sRUFBRVIsT0FEWDtBQUVFLElBQUEsTUFBTSxFQUFFTixNQUZWO0FBR0UsSUFBQSxZQUFZLEVBQUU7QUFBRWUsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FIaEI7QUFJRSxJQUFBLE9BQU8sRUFBRVIsT0FBTyxpQkFBSVMsa0JBQU1DLGFBQU4sQ0FBb0JWLE9BQXBCLEVBQTZCTyxJQUE3QixFQUFtQyxJQUFuQztBQUp0QixJQURGO0FBUUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWNoYXJ0cyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgUmVuZGVyVG9vbHRpcENvbmZpZywgVG9vbHRpcENvbnRlbnRQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL3Rvb2x0aXAtY29udGVudCc7XG5pbXBvcnQgeyBub3JtYWxpemVGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2Zvcm1hdHRlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBnZXROb25FbXB0eVN0cmluZ0FycmF5KC4uLmFycnM6IHN0cmluZ1tdW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IG1hdGNoID0gYXJycy5maW5kKChhcnIpID0+IGFyci5sZW5ndGggPiAwKTtcbiAgcmV0dXJuIG1hdGNoID8/IFtdO1xufVxuXG5mdW5jdGlvbiBzaG91bGRSZW5kZXJUb29sdGlwKGNvbmZpZ3VyYXRpb25zOiBSZW5kZXJUb29sdGlwQ29uZmlnKSB7XG4gIGlmIChjb25maWd1cmF0aW9ucy53aXRoVG9vbHRpcCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGNvbmZpZ3VyYXRpb25zPy50b29sdGlwPy5lbmFibGVkID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgREVQUkVDQVRFRF9UT09MVElQX1BST1BTID0gW1xuICAnd2l0aFRvb2x0aXAnLFxuICAndG9vbHRpcEFwcGVuZGVyJyxcbiAgJ3Rvb2x0aXBFeGNsdWRlZE5hbWVzJyxcbiAgJ3Rvb2x0aXBTb3J0ZXInLFxuICAndG9vbHRpcFRyaWdnZXInLFxuICAndG9vbHRpcFZhbHVlRm9ybWF0dGVyJyxcbiAgJ3Rvb2x0aXBMYWJlbEZvcm1hdHRlcicsXG5dO1xuXG5mdW5jdGlvbiB3YXJuVG9vbHRpcERlcHJlY2F0aW9ucyhjb25maWd1cmF0aW9uczogUmVuZGVyVG9vbHRpcENvbmZpZykge1xuICBjb25zdCBzID0gbmV3IFNldChERVBSRUNBVEVEX1RPT0xUSVBfUFJPUFMpO1xuICBPYmplY3Qua2V5cyhjb25maWd1cmF0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgW2NoYXJ0cy9Ub29sdGlwXSBwcm9wIFske2tleX1dIGlzIGRlcHJlY2F0ZWQsIHVzZSB0aGUgY29ycmVzcG9uZGluZyBmaWVsZCBpbiBjb25maWd1cmF0aW9ucy50b29sdGlwIGluc3RlYWRgXG4gICAgKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldExhYmVsRm9ybWF0dGVyKGNvbmZpZ3VyYXRpb25zOiBSZW5kZXJUb29sdGlwQ29uZmlnKSB7XG4gIGNvbnN0IHsgdG9vbHRpcCwgbGFiZWxGb3JtYXR0ZXIsIHRvb2x0aXBMYWJlbEZvcm1hdHRlciB9ID0gY29uZmlndXJhdGlvbnM7XG4gIGlmICh0b29sdGlwPy5sYWJlbEZvcm1hdHRlcikge1xuICAgIHJldHVybiB0b29sdGlwPy5sYWJlbEZvcm1hdHRlcjtcbiAgfVxuICBpZiAodG9vbHRpcExhYmVsRm9ybWF0dGVyKSB7XG4gICAgcmV0dXJuIHRvb2x0aXBMYWJlbEZvcm1hdHRlcjtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplRm9ybWF0dGVyKGxhYmVsRm9ybWF0dGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGb3JtYXR0ZXIoY29uZmlndXJhdGlvbnM6IFJlbmRlclRvb2x0aXBDb25maWcpIHtcbiAgY29uc3QgeyB0b29sdGlwLCB2YWx1ZUZvcm1hdHRlciwgdG9vbHRpcFZhbHVlRm9ybWF0dGVyIH0gPSBjb25maWd1cmF0aW9ucztcbiAgaWYgKHRvb2x0aXA/LnZhbHVlRm9ybWF0dGVyKSB7XG4gICAgcmV0dXJuIHRvb2x0aXA/LnZhbHVlRm9ybWF0dGVyO1xuICB9XG4gIGlmICh0b29sdGlwVmFsdWVGb3JtYXR0ZXIpIHtcbiAgICByZXR1cm4gdG9vbHRpcFZhbHVlRm9ybWF0dGVyO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVGb3JtYXR0ZXIodmFsdWVGb3JtYXR0ZXIpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0VG9vbHRpcENvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbnM6IFJlbmRlclRvb2x0aXBDb25maWcpIHtcbiAgY29uc3QgZGVmYXVsdEZvcm1hdHRlciA9ICh2YWx1ZTogYW55KSA9PiB2YWx1ZTtcbiAgY29uc3QgdG9vbHRpcDogVG9vbHRpcENvbnRlbnRQcm9wcyA9IHtcbiAgICBhY3RpdmU6IHVuZGVmaW5lZCxcbiAgICBhcHBlbmRlcjogdW5kZWZpbmVkLFxuICAgIGN1cnNvcjogdW5kZWZpbmVkLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZXhjbHVkZWROYW1lczogW10sXG4gICAgbGFiZWw6IHVuZGVmaW5lZCxcbiAgICBsYWJlbEZvcm1hdHRlcjogZGVmYXVsdEZvcm1hdHRlcixcbiAgICBwYXlsb2FkOiB1bmRlZmluZWQsXG4gICAgcm93TmFtZUZvcm1hdHRlcjogdW5kZWZpbmVkLFxuICAgIHNvcnRlcjogdW5kZWZpbmVkLFxuICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgdmFsdWVGb3JtYXR0ZXI6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgY29udGVudDogVG9vbHRpcENvbnRlbnQsXG4gIH07XG4gIGlmIChjb25maWd1cmF0aW9ucy50b29sdGlwKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0b29sdGlwLCBjb25maWd1cmF0aW9ucy50b29sdGlwKTtcbiAgfVxuICB0b29sdGlwLmxhYmVsRm9ybWF0dGVyID0gZ2V0TGFiZWxGb3JtYXR0ZXIoY29uZmlndXJhdGlvbnMpO1xuICB0b29sdGlwLnZhbHVlRm9ybWF0dGVyID0gZ2V0VmFsdWVGb3JtYXR0ZXIoY29uZmlndXJhdGlvbnMpO1xuXG4gIGNvbnN0IHsgdG9vbHRpcEFwcGVuZGVyLCB0b29sdGlwQ3Vyc29yLCB0b29sdGlwRXhjbHVkZWROYW1lcyA9IFtdLCB0b29sdGlwU29ydGVyIH0gPSBjb25maWd1cmF0aW9ucztcbiAgd2FyblRvb2x0aXBEZXByZWNhdGlvbnMoY29uZmlndXJhdGlvbnMpO1xuICB0b29sdGlwLmFwcGVuZGVyID0gZ2V0KHRvb2x0aXAsICdhcHBlbmRlcicsIHRvb2x0aXBBcHBlbmRlcik7XG4gIHRvb2x0aXAuY3Vyc29yID0gZ2V0KHRvb2x0aXAsICdjdXJzb3InLCB0b29sdGlwQ3Vyc29yKTtcbiAgdG9vbHRpcC5leGNsdWRlZE5hbWVzID0gZ2V0Tm9uRW1wdHlTdHJpbmdBcnJheSh0b29sdGlwLmV4Y2x1ZGVkTmFtZXMsIHRvb2x0aXBFeGNsdWRlZE5hbWVzKTtcbiAgdG9vbHRpcC5zb3J0ZXIgPSBnZXQodG9vbHRpcCwgJ3NvcnRlcicsIHRvb2x0aXBTb3J0ZXIpO1xuXG4gIHJldHVybiB0b29sdGlwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9vbHRpcChjb25maWd1cmF0aW9uczogUmVuZGVyVG9vbHRpcENvbmZpZykge1xuICBpZiAoIXNob3VsZFJlbmRlclRvb2x0aXAoY29uZmlndXJhdGlvbnMpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgeyB0cmlnZ2VyLCBjdXJzb3IsIGNvbnRlbnQsIC4uLnJlc3QgfSA9IGV4dHJhY3RUb29sdGlwQ29uZmlndXJhdGlvbihjb25maWd1cmF0aW9ucyk7XG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXBcbiAgICAgIHRyaWdnZXI9e3RyaWdnZXJ9XG4gICAgICBjdXJzb3I9e2N1cnNvcn1cbiAgICAgIHdyYXBwZXJTdHlsZT17eyB6SW5kZXg6IDEwMDAgfX1cbiAgICAgIGNvbnRlbnQ9e2NvbnRlbnQgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZW50LCByZXN0LCBudWxsKX1cbiAgICAvPlxuICApO1xufVxuIl19