"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.TooltipContent = TooltipContent;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _indicator = require("../indicator");

var _tooltipContent = require("./tooltip-content.styled");

/** @jsx jsx */
function TooltipContent(_ref) {
  var active = _ref.active,
      payload = _ref.payload,
      label = _ref.label,
      labelFormatter = _ref.labelFormatter,
      valueFormatter = _ref.valueFormatter,
      _ref$rowNameFormatter = _ref.rowNameFormatter,
      rowNameFormatter = _ref$rowNameFormatter === void 0 ? function (n) {
    return n;
  } : _ref$rowNameFormatter,
      appender = _ref.appender,
      excludedNames = _ref.excludedNames,
      sorter = _ref.sorter;

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
  }, [payload, excludesNameSet, sorter]);

  if (filtered.length === 0) {
    return null;
  } // single line, with no yaxis name


  if (filtered.length === 1 && filtered[0].name === 'value') {
    return (0, _core.jsx)(_tooltipContent.TooltipContentRoot, null, (0, _core.jsx)("span", null, labelFormatter(label, 'tooltip'), ": ", filtered[0].value));
  }

  return (0, _core.jsx)(_tooltipContent.TooltipContentRoot, null, (0, _core.jsx)("span", null, labelFormatter(label, 'tooltip')), (0, _core.jsx)("table", null, (0, _core.jsx)("tbody", null, filtered.map(function (row, index) {
    var _ref2, _row$key;

    var fill = row.stroke || row.color || row.fill;

    if (typeof fill === 'function') {
      fill = fill(row, row.payload);
    }

    return (0, _core.jsx)("tr", {
      key: (_ref2 = (_row$key = row.key) !== null && _row$key !== void 0 ? _row$key : row.name) !== null && _ref2 !== void 0 ? _ref2 : index
    }, (0, _core.jsx)("td", null, (0, _core.jsx)(_indicator.Dot, {
      fill: fill
    }), " ", rowNameFormatter(row.name)), (0, _core.jsx)("td", null, valueFormatter(row.value, valueFormatter, row.name)));
  }))), appender && appender(payload));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL3Rvb2x0aXAvdG9vbHRpcC1jb250ZW50LnRzeCJdLCJuYW1lcyI6WyJUb29sdGlwQ29udGVudCIsImFjdGl2ZSIsInBheWxvYWQiLCJsYWJlbCIsImxhYmVsRm9ybWF0dGVyIiwidmFsdWVGb3JtYXR0ZXIiLCJyb3dOYW1lRm9ybWF0dGVyIiwibiIsImFwcGVuZGVyIiwiZXhjbHVkZWROYW1lcyIsInNvcnRlciIsImV4Y2x1ZGVzTmFtZVNldCIsIlJlYWN0IiwidXNlTWVtbyIsImZpbHRlcmVkIiwicmV0IiwiZmlsdGVyIiwicm93IiwiaGFzIiwibmFtZSIsInNvcnQiLCJsZW5ndGgiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwiZmlsbCIsInN0cm9rZSIsImNvbG9yIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBTEE7QUFRTyxTQUFTQSxjQUFULE9BY2lCO0FBQUEsTUFidEJDLE1BYXNCLFFBYnRCQSxNQWFzQjtBQUFBLE1BVHRCQyxPQVNzQixRQVR0QkEsT0FTc0I7QUFBQSxNQVB0QkMsS0FPc0IsUUFQdEJBLEtBT3NCO0FBQUEsTUFOdEJDLGNBTXNCLFFBTnRCQSxjQU1zQjtBQUFBLE1BTHRCQyxjQUtzQixRQUx0QkEsY0FLc0I7QUFBQSxtQ0FKdEJDLGdCQUlzQjtBQUFBLE1BSnRCQSxnQkFJc0Isc0NBSkgsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQVA7QUFBQSxHQUlHO0FBQUEsTUFIdEJDLFFBR3NCLFFBSHRCQSxRQUdzQjtBQUFBLE1BRnRCQyxhQUVzQixRQUZ0QkEsYUFFc0I7QUFBQSxNQUR0QkMsTUFDc0IsUUFEdEJBLE1BQ3NCOztBQUN0QixNQUFNQyxlQUFlLEdBQUdDLGtCQUFNQyxPQUFOLENBQWM7QUFBQSxXQUFNLGtFQUFZSixhQUFaLElBQTJCLGtCQUEzQixFQUErQyxlQUEvQyxHQUFOO0FBQUEsR0FBZCxFQUFzRixDQUM1R0EsYUFENEcsQ0FBdEYsQ0FBeEI7O0FBR0EsTUFBTUssUUFBUSxHQUFHRixrQkFBTUMsT0FBTixDQUFjLFlBQU07QUFDbkMsUUFBSSxDQUFDWixNQUFELElBQVcsQ0FBQ0MsT0FBaEIsRUFBeUI7QUFDdkIsYUFBTyxFQUFQO0FBQ0Q7O0FBQ0QsUUFBTWEsR0FBRyxHQUFHYixPQUFPLENBQUNjLE1BQVIsQ0FBZSxVQUFDQyxHQUFELEVBQVM7QUFDbEMsYUFBTyxDQUFDTixlQUFlLENBQUNPLEdBQWhCLENBQW9CRCxHQUFHLENBQUNFLElBQXhCLENBQVI7QUFDRCxLQUZXLENBQVo7O0FBR0EsUUFBSVQsTUFBSixFQUFZO0FBQ1ZLLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTVixNQUFUO0FBQ0Q7O0FBQ0QsV0FBT0ssR0FBUDtBQUNELEdBWGdCLEVBV2QsQ0FBQ2IsT0FBRCxFQUFVUyxlQUFWLEVBQTJCRCxNQUEzQixDQVhjLENBQWpCOztBQWFBLE1BQUlJLFFBQVEsQ0FBQ08sTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN6QixXQUFPLElBQVA7QUFDRCxHQW5CcUIsQ0FvQnRCOzs7QUFDQSxNQUFJUCxRQUFRLENBQUNPLE1BQVQsS0FBb0IsQ0FBcEIsSUFBeUJQLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUssSUFBWixLQUFxQixPQUFsRCxFQUEyRDtBQUN6RCxXQUNFLGVBQUMsa0NBQUQsUUFDRSw2QkFDR2YsY0FBYyxDQUFDRCxLQUFELEVBQVEsU0FBUixDQURqQixRQUN1Q1csUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZUSxLQURuRCxDQURGLENBREY7QUFPRDs7QUFFRCxTQUNFLGVBQUMsa0NBQUQsUUFDRSw2QkFBT2xCLGNBQWMsQ0FBQ0QsS0FBRCxFQUFRLFNBQVIsQ0FBckIsQ0FERixFQUVFLDhCQUNFLDhCQUNHVyxRQUFRLENBQUNTLEdBQVQsQ0FBYSxVQUFDTixHQUFELEVBQVdPLEtBQVgsRUFBMEI7QUFBQTs7QUFDdEMsUUFBSUMsSUFBSSxHQUFHUixHQUFHLENBQUNTLE1BQUosSUFBY1QsR0FBRyxDQUFDVSxLQUFsQixJQUEyQlYsR0FBRyxDQUFDUSxJQUExQzs7QUFDQSxRQUFJLE9BQU9BLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDOUJBLE1BQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDUixHQUFELEVBQU1BLEdBQUcsQ0FBQ2YsT0FBVixDQUFYO0FBQ0Q7O0FBQ0QsV0FDRTtBQUFJLE1BQUEsR0FBRyx1QkFBRWUsR0FBRyxDQUFDVyxHQUFOLCtDQUFhWCxHQUFHLENBQUNFLElBQWpCLHlDQUF5Qks7QUFBaEMsT0FDRSwyQkFDRSxlQUFDLGNBQUQ7QUFBSyxNQUFBLElBQUksRUFBRUM7QUFBWCxNQURGLE9BQ3VCbkIsZ0JBQWdCLENBQUNXLEdBQUcsQ0FBQ0UsSUFBTCxDQUR2QyxDQURGLEVBSUUsMkJBQUtkLGNBQWMsQ0FBQ1ksR0FBRyxDQUFDSyxLQUFMLEVBQVlqQixjQUFaLEVBQTRCWSxHQUFHLENBQUNFLElBQWhDLENBQW5CLENBSkYsQ0FERjtBQVFELEdBYkEsQ0FESCxDQURGLENBRkYsRUFvQkdYLFFBQVEsSUFBSUEsUUFBUSxDQUFDTixPQUFELENBcEJ2QixDQURGO0FBd0JEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IERvdCB9IGZyb20gJy4uL2luZGljYXRvcic7XG5pbXBvcnQgeyBUb29sdGlwQ29udGVudFJvb3QgfSBmcm9tICcuL3Rvb2x0aXAtY29udGVudC5zdHlsZWQnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnRQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9vbHRpcENvbnRlbnQoe1xuICBhY3RpdmUsXG5cbiAgLy8gdHlwZSxcbiAgLy8gbmFtZSxcbiAgcGF5bG9hZCxcblxuICBsYWJlbCxcbiAgbGFiZWxGb3JtYXR0ZXIsXG4gIHZhbHVlRm9ybWF0dGVyLFxuICByb3dOYW1lRm9ybWF0dGVyID0gKG4pID0+IG4sXG4gIGFwcGVuZGVyLFxuICBleGNsdWRlZE5hbWVzLFxuICBzb3J0ZXIsXG59OiBUb29sdGlwQ29udGVudFByb3BzKSB7XG4gIGNvbnN0IGV4Y2x1ZGVzTmFtZVNldCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gbmV3IFNldChbLi4uZXhjbHVkZWROYW1lcywgJ3JlZkludGVycG9sYXRpb24nLCAncmVmUmVncmVzc2lvbiddKSwgW1xuICAgIGV4Y2x1ZGVkTmFtZXMsXG4gIF0pO1xuICBjb25zdCBmaWx0ZXJlZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghYWN0aXZlIHx8ICFwYXlsb2FkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHBheWxvYWQuZmlsdGVyKChyb3cpID0+IHtcbiAgICAgIHJldHVybiAhZXhjbHVkZXNOYW1lU2V0Lmhhcyhyb3cubmFtZSk7XG4gICAgfSk7XG4gICAgaWYgKHNvcnRlcikge1xuICAgICAgcmV0LnNvcnQoc29ydGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSwgW3BheWxvYWQsIGV4Y2x1ZGVzTmFtZVNldCwgc29ydGVyXSk7XG5cbiAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIHNpbmdsZSBsaW5lLCB3aXRoIG5vIHlheGlzIG5hbWVcbiAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMSAmJiBmaWx0ZXJlZFswXS5uYW1lID09PSAndmFsdWUnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwQ29udGVudFJvb3Q+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtsYWJlbEZvcm1hdHRlcihsYWJlbCwgJ3Rvb2x0aXAnKX06IHtmaWx0ZXJlZFswXS52YWx1ZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9Ub29sdGlwQ29udGVudFJvb3Q+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXBDb250ZW50Um9vdD5cbiAgICAgIDxzcGFuPntsYWJlbEZvcm1hdHRlcihsYWJlbCwgJ3Rvb2x0aXAnKX08L3NwYW4+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZmlsdGVyZWQubWFwKChyb3c6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpbGwgPSByb3cuc3Ryb2tlIHx8IHJvdy5jb2xvciB8fCByb3cuZmlsbDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBmaWxsID0gZmlsbChyb3csIHJvdy5wYXlsb2FkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5rZXkgPz8gcm93Lm5hbWUgPz8gaW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxEb3QgZmlsbD17ZmlsbH0gLz4ge3Jvd05hbWVGb3JtYXR0ZXIocm93Lm5hbWUpfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt2YWx1ZUZvcm1hdHRlcihyb3cudmFsdWUsIHZhbHVlRm9ybWF0dGVyLCByb3cubmFtZSl9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAge2FwcGVuZGVyICYmIGFwcGVuZGVyKHBheWxvYWQpfVxuICAgIDwvVG9vbHRpcENvbnRlbnRSb290PlxuICApO1xufVxuIl19