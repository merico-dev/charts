"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.renderBrush = renderBrush;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

function renderBrush(brushConfigurations, tickFormatter) {
  if (!brushConfigurations) {
    return null;
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  var enabled = brushConfigurations.enabled,
      dataKey = brushConfigurations.dataKey,
      stroke = brushConfigurations.stroke,
      fill = brushConfigurations.fill;

  if (!enabled) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(Recharts.Brush, (0, _extends2["default"])({
    tickFormatter: tickFormatter,
    height: 30
  }, brushConfigurations));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL2JydXNoLnRzeCJdLCJuYW1lcyI6WyJyZW5kZXJCcnVzaCIsImJydXNoQ29uZmlndXJhdGlvbnMiLCJ0aWNrRm9ybWF0dGVyIiwiZW5hYmxlZCIsImRhdGFLZXkiLCJzdHJva2UiLCJmaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBUU8sU0FBU0EsV0FBVCxDQUFxQkMsbUJBQXJCLEVBQTZEQyxhQUE3RCxFQUEyRjtBQUNoRyxNQUFJLENBQUNELG1CQUFMLEVBQTBCO0FBQ3hCLFdBQU8sSUFBUDtBQUNELEdBSCtGLENBS2hHOzs7QUFMZ0csTUFNeEZFLE9BTndGLEdBTXJERixtQkFOcUQsQ0FNeEZFLE9BTndGO0FBQUEsTUFNL0VDLE9BTitFLEdBTXJESCxtQkFOcUQsQ0FNL0VHLE9BTitFO0FBQUEsTUFNdEVDLE1BTnNFLEdBTXJESixtQkFOcUQsQ0FNdEVJLE1BTnNFO0FBQUEsTUFNOURDLElBTjhELEdBTXJETCxtQkFOcUQsQ0FNOURLLElBTjhEOztBQVFoRyxNQUFJLENBQUNILE9BQUwsRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUFPLGdDQUFDLFFBQUQsQ0FBVSxLQUFWO0FBQWdCLElBQUEsYUFBYSxFQUFFRCxhQUEvQjtBQUE4QyxJQUFBLE1BQU0sRUFBRTtBQUF0RCxLQUE4REQsbUJBQTlELEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWNoYXJ0cyBmcm9tICdyZWNoYXJ0cyc7XG5cbmltcG9ydCB7IEZvcm1hdHRlckZ1bmMgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IHR5cGUgUmVuZGVyQnJ1c2hDb25maWcgPSBQYXJ0aWFsPFxuICBPbWl0PFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBSZWNoYXJ0cy5CcnVzaD4sICdyZWYnPiAmIHsgZW5hYmxlZDogYm9vbGVhbiB9XG4+O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQnJ1c2goYnJ1c2hDb25maWd1cmF0aW9uczogUmVuZGVyQnJ1c2hDb25maWcsIHRpY2tGb3JtYXR0ZXI6IEZvcm1hdHRlckZ1bmMpIHtcbiAgaWYgKCFicnVzaENvbmZpZ3VyYXRpb25zKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIGNvbnN0IHsgZW5hYmxlZCwgZGF0YUtleSwgc3Ryb2tlLCBmaWxsIH0gPSBicnVzaENvbmZpZ3VyYXRpb25zO1xuXG4gIGlmICghZW5hYmxlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIDxSZWNoYXJ0cy5CcnVzaCB0aWNrRm9ybWF0dGVyPXt0aWNrRm9ybWF0dGVyfSBoZWlnaHQ9ezMwfSB7Li4uYnJ1c2hDb25maWd1cmF0aW9uc30gLz47XG59XG4iXX0=