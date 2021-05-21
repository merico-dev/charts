"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.CustomTooltipContent = CustomTooltipContent;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _styled = require("./styled");

var _recharts = require("../../../../../recharts");

function calcPercentage(value, sum) {
  if (typeof value === 'string') {
    return value;
  }

  if (!sum) {
    return '0%';
  }

  return "".concat((0, _lodash.round)(value / sum * 100, 2), "%");
}

var getRowRenderer = function getRowRenderer(_ref, sum) {
  var rowNameFormatter = _ref.rowNameFormatter,
      valueFormatter = _ref.valueFormatter;
  return function RowRenderer(row, index) {
    var _ref2, _row$key;

    var fill = row.stroke || row.color || row.fill;
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: (_ref2 = (_row$key = row.key) !== null && _row$key !== void 0 ? _row$key : row.name) !== null && _ref2 !== void 0 ? _ref2 : index
    }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_recharts.Dot, {
      fill: fill
    }), " ", rowNameFormatter(row.name)), /*#__PURE__*/_react["default"].createElement("td", null, valueFormatter(row.value, valueFormatter, row.name)), /*#__PURE__*/_react["default"].createElement("td", null, calcPercentage(row.value, sum)));
  };
};
/**
 * Basically same as tooltip/tooltip-content
 */


function CustomTooltipContent(_ref3) {
  var active = _ref3.active,
      payload = _ref3.payload,
      label = _ref3.label,
      labelFormatter = _ref3.labelFormatter,
      valueFormatter = _ref3.valueFormatter,
      _ref3$rowNameFormatte = _ref3.rowNameFormatter,
      rowNameFormatter = _ref3$rowNameFormatte === void 0 ? function (n) {
    return n;
  } : _ref3$rowNameFormatte,
      appender = _ref3.appender,
      excludedNames = _ref3.excludedNames,
      sorter = _ref3.sorter;

  var excludesNameSet = _react["default"].useMemo(function () {
    return new _set["default"]([].concat((0, _toConsumableArray2["default"])(excludedNames), ['refInterpolation', 'refRegression']));
  }, [excludedNames]);

  var filtered = _react["default"].useMemo(function () {
    if (!active || !payload) {
      return [];
    }

    var ret = payload.filter(function (row) {
      return !excludesNameSet.has(row.name);
    });

    if (sorter) {
      ret.sort(sorter);
    }

    return ret;
  }, [payload, excludesNameSet, sorter, active]);

  var sum = _react["default"].useMemo(function () {
    return filtered.reduce(function (acc, curr) {
      return acc + curr.value;
    }, 0);
  }, [filtered]);

  if (filtered.length === 0) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_styled.TooltipContentRoot, null, /*#__PURE__*/_react["default"].createElement(_styled.TooltipTitle, null, labelFormatter(label, 'tooltip')), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Series"), /*#__PURE__*/_react["default"].createElement("th", null, "Value"), /*#__PURE__*/_react["default"].createElement("th", null, "Percentage"))), /*#__PURE__*/_react["default"].createElement("tbody", null, filtered.map(getRowRenderer({
    rowNameFormatter: rowNameFormatter,
    valueFormatter: valueFormatter
  }, sum)))), appender === null || appender === void 0 ? void 0 : appender(payload));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvY3VzdG9tLXRvb2x0aXAtY29udGVudC90b29sdGlwLWNvbnRlbnQudHN4Il0sIm5hbWVzIjpbImNhbGNQZXJjZW50YWdlIiwidmFsdWUiLCJzdW0iLCJnZXRSb3dSZW5kZXJlciIsInJvd05hbWVGb3JtYXR0ZXIiLCJ2YWx1ZUZvcm1hdHRlciIsIlJvd1JlbmRlcmVyIiwicm93IiwiaW5kZXgiLCJmaWxsIiwic3Ryb2tlIiwiY29sb3IiLCJrZXkiLCJuYW1lIiwiQ3VzdG9tVG9vbHRpcENvbnRlbnQiLCJhY3RpdmUiLCJwYXlsb2FkIiwibGFiZWwiLCJsYWJlbEZvcm1hdHRlciIsIm4iLCJhcHBlbmRlciIsImV4Y2x1ZGVkTmFtZXMiLCJzb3J0ZXIiLCJleGNsdWRlc05hbWVTZXQiLCJSZWFjdCIsInVzZU1lbW8iLCJmaWx0ZXJlZCIsInJldCIsImZpbHRlciIsImhhcyIsInNvcnQiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBYUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBZ0RDLEdBQWhELEVBQTZEO0FBQzNELE1BQUksT0FBT0QsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixXQUFPQSxLQUFQO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDQyxHQUFMLEVBQVU7QUFDUixXQUFPLElBQVA7QUFDRDs7QUFDRCxtQkFBVSxtQkFBT0QsS0FBSyxHQUFHQyxHQUFULEdBQWdCLEdBQXRCLEVBQTJCLENBQTNCLENBQVY7QUFDRDs7QUFFRCxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BUXJCRCxHQVJxQixFQVNsQjtBQUFBLE1BUERFLGdCQU9DLFFBUERBLGdCQU9DO0FB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RUUsNERBQ0UsNERBQ0UseURBQ0UscURBREYsZUFFRSxvREFGRixlQUdFLHlEQUhGLENBREYsQ0FERixlQVFFLCtDQUNHUyxRQUFRLENBQUNTLEdBQVQsQ0FDQ2hDLGNBQWMsQ0FDWjtBQUNFQyxJQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQURGO0FBRUVDLElBQUFBLGNBQWMsRUFBZEE7QUFGRixHQURZLEVBS1pILEdBTFksQ0FEZixDQURILENBUkYsQ0FGRixFQXNCR2tCLFFBdEJILGFBc0JHQSxRQXRCSCx1QkFzQkdBLFFBQVEsQ0FBR0osT0FBSCxDQXRCWCxDQURGO0FBMEJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFRvb2x0aXBDb250ZW50Um9vdCwgVG9vbHRpcFRpdGxlIH0gZnJvbSAnLi9zdHlsZWQnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnRQcm9wcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlY2hhcnRzL3Rvb2x0aXAnO1xuaW1wb3J0IHsgRG90IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVjaGFydHMnO1xuaW1wb3J0IHsgRm9ybWF0dGVyRnVuYyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2hlbHBlcnMnO1xuXG50eXBlIFJvd1dpdGhDb25mID0ge1xuICBzdHJva2U/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBmaWxsPzogc3RyaW5nO1xuICBrZXk/OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xufTtcblxuZnVuY3Rpb24gY2FsY1BlcmNlbnRhZ2UodmFsdWU6IHN0cmluZyB8IG51bWJlciwgc3VtOiBudW1iZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKCFzdW0pIHtcbiAgICByZXR1cm4gJzAlJztcbiAgfVxuICByZXR1cm4gYCR7cm91bmQoKHZhbHVlIC8gc3VtKSAqIDEwMCwgMil9JWA7XG59XG5cbmNvbnN0IGdldFJvd1JlbmRlcmVyID0gKFxuICB7XG4gICAgcm93TmFtZUZvcm1hdHRlcixcbiAgICB2YWx1ZUZvcm1hdHRlcixcbiAgfToge1xuICAgIHJvd05hbWVGb3JtYXR0ZXI6IEZvcm1hdHRlckZ1bmM7XG4gICAgdmFsdWVGb3JtYXR0ZXI6IFRvb2x0aXBDb250ZW50UHJvcHNbJ3ZhbHVlRm9ybWF0dGVyJ107XG4gIH0sXG4gIHN1bTogbnVtYmVyXG4pID0+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFJvd1JlbmRlcmVyKHJvdzogUm93V2l0aENvbmYsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBmaWxsID0gcm93LnN0cm9rZSB8fCByb3cuY29sb3IgfHwgcm93LmZpbGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e3Jvdy5rZXkgPz8gcm93Lm5hbWUgPz8gaW5kZXh9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPERvdCBmaWxsPXtmaWxsfSAvPiB7cm93TmFtZUZvcm1hdHRlcihyb3cubmFtZSl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD57dmFsdWVGb3JtYXR0ZXIocm93LnZhbHVlLCB2YWx1ZUZvcm1hdHRlciwgcm93Lm5hbWUpfTwvdGQ+XG4gICAgICAgIDx0ZD57Y2FsY1BlcmNlbnRhZ2Uocm93LnZhbHVlLCBzdW0pfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH07XG59O1xuXG4vKipcbiAqIEJhc2ljYWxseSBzYW1lIGFzIHRvb2x0aXAvdG9vbHRpcC1jb250ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21Ub29sdGlwQ29udGVudCh7XG4gIGFjdGl2ZSxcblxuICAvLyB0eXBlLFxuICAvLyBuYW1lLFxuICBwYXlsb2FkLFxuXG4gIGxhYmVsLFxuICBsYWJlbEZvcm1hdHRlcixcbiAgdmFsdWVGb3JtYXR0ZXIsXG4gIHJvd05hbWVGb3JtYXR0ZXIgPSAobikgPT4gbixcbiAgYXBwZW5kZXIsXG4gIGV4Y2x1ZGVkTmFtZXMsXG4gIHNvcnRlcixcbn06IFRvb2x0aXBDb250ZW50UHJvcHMpIHtcbiAgY29uc3QgZXhjbHVkZXNOYW1lU2V0ID0gUmVhY3QudXNlTWVtbygoKSA9PiBuZXcgU2V0KFsuLi5leGNsdWRlZE5hbWVzLCAncmVmSW50ZXJwb2xhdGlvbicsICdyZWZSZWdyZXNzaW9uJ10pLCBbXG4gICAgZXhjbHVkZWROYW1lcyxcbiAgXSk7XG4gIGNvbnN0IGZpbHRlcmVkID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFhY3RpdmUgfHwgIXBheWxvYWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gcGF5bG9hZC5maWx0ZXIoKHJvdykgPT4ge1xuICAgICAgcmV0dXJuICFleGNsdWRlc05hbWVTZXQuaGFzKHJvdy5uYW1lKTtcbiAgICB9KTtcbiAgICBpZiAoc29ydGVyKSB7XG4gICAgICByZXQuc29ydChzb3J0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LCBbcGF5bG9hZCwgZXhjbHVkZXNOYW1lU2V0LCBzb3J0ZXIsIGFjdGl2ZV0pO1xuXG4gIGNvbnN0IHN1bSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBmaWx0ZXJlZC5yZWR1Y2UoKGFjYywgY3VycjogYW55KSA9PiBhY2MgKyBjdXJyLnZhbHVlLCAwKTtcbiAgfSwgW2ZpbHRlcmVkXSk7XG5cbiAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcENvbnRlbnRSb290PlxuICAgICAgPFRvb2x0aXBUaXRsZT57bGFiZWxGb3JtYXR0ZXIobGFiZWwsICd0b29sdGlwJyl9PC9Ub29sdGlwVGl0bGU+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+U2VyaWVzPC90aD5cbiAgICAgICAgICAgIDx0aD5WYWx1ZTwvdGg+XG4gICAgICAgICAgICA8dGg+UGVyY2VudGFnZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtmaWx0ZXJlZC5tYXAoXG4gICAgICAgICAgICBnZXRSb3dSZW5kZXJlcihcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvd05hbWVGb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgdmFsdWVGb3JtYXR0ZXIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN1bVxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAge2FwcGVuZGVyPy4ocGF5bG9hZCl9XG4gICAgPC9Ub29sdGlwQ29udGVudFJvb3Q+XG4gICk7XG59XG4iXX0=