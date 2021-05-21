"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.renderRectReferenceArea = renderRectReferenceArea;
exports.renderReferenceAreaByData = renderReferenceAreaByData;
exports.renderReferenceAreas = renderReferenceAreas;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function renderRectReferenceArea(_ref) {
  var x1 = _ref.x1,
      x2 = _ref.x2,
      y1 = _ref.y1,
      y2 = _ref.y2,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["x1", "x2", "y1", "y2"]);
  return /*#__PURE__*/_react["default"].createElement(Recharts.ReferenceArea, (0, _extends2["default"])({
    x1: x1,
    x2: x2,
    y1: y1,
    y2: y2
  }, props));
}

var AreaShape = function AreaShape(_ref2) {
  var endPoints = _ref2.endPoints,
      xAxis = _ref2.xAxisMap[0],
      yAxis = _ref2.yAxisMap[0],
      fill = _ref2.fill,
      stroke = _ref2.stroke;
  var points = (0, _react.useMemo)(function () {
    var xScale = xAxis.scale;
    var yScale = yAxis.scale;
    return endPoints.map(function (_ref3) {
      var x = _ref3.x,
          y = _ref3.y,
          rest = (0, _objectWithoutProperties2["default"])(_ref3, ["x", "y"]);
      return _objectSpread({
        x: xScale(x),
        y: yScale(y)
      }, rest);
    });
  }, [// jsonStableStringify(endPoints),
  xAxis.x, xAxis.width, xAxis.height, yAxis.y, yAxis.width, yAxis.height]);
  return /*#__PURE__*/_react["default"].createElement(Recharts.Polygon, {
    points: points,
    fill: fill,
    stroke: stroke
  });
};

function renderReferenceAreaByData(_ref4) {
  var key = _ref4.key,
      props = (0, _objectWithoutProperties2["default"])(_ref4, ["key"]);
  return (
    /*#__PURE__*/
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'Element' is not assignable to type '(Element... Remove this comment to see the full error message
    _react["default"].createElement(Recharts.Customized, {
      key: key,
      component: /*#__PURE__*/_react["default"].createElement(AreaShape, props)
    })
  );
}

function isRenderReferenceAreaByDataConfig(config) {
  return !!config.endPoints;
}

function renderReferenceAreas(props) {
  if (isRenderReferenceAreaByDataConfig(props)) {
    return renderReferenceAreaByData(props);
  }

  return renderRectReferenceArea(props);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL3JlZmVyZW5jZS1hcmVhLnRzeCJdLCJuYW1lcyI6WyJyZW5kZXJSZWN0UmVmZXJlbmNlQXJlYSIsIngxIiwieDIiLCJ5MSIsInkyIiwicHJvcHMiLCJBcmVhU2hhcGUiLCJlbmRQb2ludHMiLCJ4QXhpcyIsInhBeGlzTWFwIiwieUF4aXMiLCJ5QXhpc01hcCIsImZpbGwiLCJzdHJva2UiLCJwb2ludHMiLCJ4U2NhbGUiLCJzY2FsZSIsInlTY2FsZSIsIm1hcCIsIngiLCJ5IiwicmVzdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyUmVmZXJlbmNlQXJlYUJ5RGF0YSIsImtleSIsImlzUmVuZGVyUmVmZXJlbmNlQXJlYUJ5RGF0YUNvbmZpZyIsImNvbmZpZyIsInJlbmRlclJlZmVyZW5jZUFyZWFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQU1PLFNBQVNBLHVCQUFULE9BUTJCO0FBQUEsTUFQaENDLEVBT2dDLFFBUGhDQSxFQU9nQztBQUFBLE1BTmhDQyxFQU1nQyxRQU5oQ0EsRUFNZ0M7QUFBQSxNQUxoQ0MsRUFLZ0MsUUFMaENBLEVBS2dDO0FBQUEsTUFKaENDLEVBSWdDLFFBSmhDQSxFQUlnQztBQUFBLE1BRDdCQyxLQUM2QjtBQUNoQyxzQkFBTyxnQ0FBQyxRQUFELENBQVUsYUFBVjtBQUF3QixJQUFBLEVBQUUsRUFBRUosRUFBNUI7QUFBZ0MsSUFBQSxFQUFFLEVBQUVDLEVBQXBDO0FBQXdDLElBQUEsRUFBRSxFQUFFQyxFQUE1QztBQUFnRCxJQUFBLEVBQUUsRUFBRUM7QUFBcEQsS0FBNERDLEtBQTVELEVBQVA7QUFDRDs7QUFZRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxRQVFJO0FBQUEsTUFQcEJDLFNBT29CLFNBUHBCQSxTQU9vQjtBQUFBLE1BTkxDLEtBTUssU0FOcEJDLFFBTW9CLENBTlIsQ0FNUTtBQUFBLE1BTExDLEtBS0ssU0FMcEJDLFFBS29CLENBTFIsQ0FLUTtBQUFBLE1BSnBCQyxJQUlvQixTQUpwQkEsSUFJb0I7QUFBQSxNQURwQkMsTUFDb0IsU0FEcEJBLE1BQ29CO0FBQ3BCLE1BQU1DLE1BQU0sR0FBRyxvQkFBUSxZQUFNO0FBQzNCLFFBQU1DLE1BQU0sR0FBR1AsS0FBSyxDQUFDUSxLQUFyQjtBQUNBLFFBQU1DLE1BQU0sR0FBR1AsS0FBSyxDQUFDTSxLQUFyQjtBQUVBLFdBQU9ULFNBQVMsQ0FBQ1csR0FBVixDQUFjO0FBQUEsVUFBR0MsQ0FBSCxTQUFHQSxDQUFIO0FBQUEsVUFBTUMsQ0FBTixTQUFNQSxDQUFOO0FBQUEsVUFBWUMsSUFBWjtBQUFBO0FBQ25CRixRQUFBQSxDQUFDLEVBQUVKLE1BQU0sQ0FBQ0ksQ0FBRCxDQURVO0FBRW5CQyxRQUFBQSxDQUFDLEVBQUVILE1BQU0sQ0FBQ0csQ0FBRDtBQUZVLFNBR2hCQyxJQUhnQjtBQUFBLEtBQWQsQ0FBUDtBQUtELEdBVGMsRUFTWixDQUNEO0FBQ0FiLEVBQUFBLEtBQUssQ0FBQ1csQ0FGTCxFQUdEWCxLQUFLLENBQUNjLEtBSEwsRUFJRGQsS0FBSyxDQUFDZSxNQUpMLEVBS0RiLEtBQUssQ0FBQ1UsQ0FMTCxFQU1EVixLQUFLLENBQUNZLEtBTkwsRUFPRFosS0FBSyxDQUFDYSxNQVBMLENBVFksQ0FBZjtBQW1CQSxzQkFBTyxnQ0FBQyxRQUFELENBQVUsT0FBVjtBQUFrQixJQUFBLE1BQU0sRUFBRVQsTUFBMUI7QUFBa0MsSUFBQSxJQUFJLEVBQUVGLElBQXhDO0FBQThDLElBQUEsTUFBTSxFQUFFQztBQUF0RCxJQUFQO0FBQ0QsQ0E3QkQ7O0FBbUNPLFNBQVNXLHlCQUFULFFBQXVGO0FBQUEsTUFBbERDLEdBQWtELFNBQWxEQSxHQUFrRDtBQUFBLE1BQTFDcEIsS0FBMEM7QUFDNUY7QUFBQTtBQUNFO0FBQ0Esb0NBQUMsUUFBRCxDQUFVLFVBQVY7QUFBcUIsTUFBQSxHQUFHLEVBQUVvQixHQUExQjtBQUErQixNQUFBLFNBQVMsZUFBRSxnQ0FBQyxTQUFELEVBQWVwQixLQUFmO0FBQTFDO0FBRkY7QUFJRDs7QUFJRCxTQUFTcUIsaUNBQVQsQ0FBMkNDLE1BQTNDLEVBQW1IO0FBQ2pILFNBQU8sQ0FBQyxDQUFDQSxNQUFNLENBQUNwQixTQUFoQjtBQUNEOztBQUVNLFNBQVNxQixvQkFBVCxDQUE4QnZCLEtBQTlCLEVBQWlFO0FBQ3RFLE1BQUlxQixpQ0FBaUMsQ0FBQ3JCLEtBQUQsQ0FBckMsRUFBOEM7QUFDNUMsV0FBT21CLHlCQUF5QixDQUFDbkIsS0FBRCxDQUFoQztBQUNEOztBQUNELFNBQU9MLHVCQUF1QixDQUFDSyxLQUFELENBQTlCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlY2hhcnRzIGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdyZWNoYXJ0cy90eXBlcy91dGlsL3R5cGVzJztcbi8vIGltcG9ydCBqc29uU3RhYmxlU3RyaW5naWZ5IGZyb20gJ2pzb24tc3RhYmxlLXN0cmluZ2lmeSc7XG5cbmV4cG9ydCB0eXBlIFJlbmRlclJlY3RSZWZlcmVuY2VBcmVhQ29uZmlnID0gUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFJlY2hhcnRzLlJlZmVyZW5jZUFyZWE+O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmVjdFJlZmVyZW5jZUFyZWEoe1xuICB4MSxcbiAgeDIsXG4gIHkxLFxuICB5MixcblxuICAvLyBmaWxsIC8gc3Ryb2tlIC8gc3Ryb2tlT3BhY2l0eSAuLi5cbiAgLi4ucHJvcHNcbn06IFJlbmRlclJlY3RSZWZlcmVuY2VBcmVhQ29uZmlnKSB7XG4gIHJldHVybiA8UmVjaGFydHMuUmVmZXJlbmNlQXJlYSB4MT17eDF9IHgyPXt4Mn0geTE9e3kxfSB5Mj17eTJ9IHsuLi5wcm9wc30gLz47XG59XG5cbnR5cGUgUG9seWdvblByb3BzID0gUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFJlY2hhcnRzLlBvbHlnb24+O1xuXG5leHBvcnQgdHlwZSBBcmVhU2hhcGVQcm9wcyA9IHtcbiAgZW5kUG9pbnRzOiBDb29yZGluYXRlW107XG4gIGZpbGw/OiBQb2x5Z29uUHJvcHNbJ2ZpbGwnXTtcbiAgc3Ryb2tlPzogUG9seWdvblByb3BzWydmaWxsJ107XG4gIHhBeGlzTWFwOiBhbnk7XG4gIHlBeGlzTWFwOiBhbnk7XG59O1xuXG5jb25zdCBBcmVhU2hhcGUgPSAoe1xuICBlbmRQb2ludHMsXG4gIHhBeGlzTWFwOiB7IDA6IHhBeGlzIH0sXG4gIHlBeGlzTWFwOiB7IDA6IHlBeGlzIH0sXG4gIGZpbGwsXG5cbiAgLy8gLi4ucHJvcHNcbiAgc3Ryb2tlLFxufTogQXJlYVNoYXBlUHJvcHMpID0+IHtcbiAgY29uc3QgcG9pbnRzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgeFNjYWxlID0geEF4aXMuc2NhbGU7XG4gICAgY29uc3QgeVNjYWxlID0geUF4aXMuc2NhbGU7XG5cbiAgICByZXR1cm4gZW5kUG9pbnRzLm1hcCgoeyB4LCB5LCAuLi5yZXN0IH06IGFueSkgPT4gKHtcbiAgICAgIHg6IHhTY2FsZSh4KSxcbiAgICAgIHk6IHlTY2FsZSh5KSxcbiAgICAgIC4uLnJlc3QsXG4gICAgfSkpO1xuICB9LCBbXG4gICAgLy8ganNvblN0YWJsZVN0cmluZ2lmeShlbmRQb2ludHMpLFxuICAgIHhBeGlzLngsXG4gICAgeEF4aXMud2lkdGgsXG4gICAgeEF4aXMuaGVpZ2h0LFxuICAgIHlBeGlzLnksXG4gICAgeUF4aXMud2lkdGgsXG4gICAgeUF4aXMuaGVpZ2h0LFxuICBdKTtcblxuICByZXR1cm4gPFJlY2hhcnRzLlBvbHlnb24gcG9pbnRzPXtwb2ludHN9IGZpbGw9e2ZpbGx9IHN0cm9rZT17c3Ryb2tlfSAvPjtcbn07XG5cbmV4cG9ydCB0eXBlIFJlbmRlclJlZmVyZW5jZUFyZWFCeURhdGFDb25maWcgPSB7XG4gIGtleTogUmVhY3QuS2V5O1xufSAmIEFyZWFTaGFwZVByb3BzO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmVmZXJlbmNlQXJlYUJ5RGF0YSh7IGtleSwgLi4ucHJvcHMgfTogUmVuZGVyUmVmZXJlbmNlQXJlYUJ5RGF0YUNvbmZpZykge1xuICByZXR1cm4gKFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzIyKSBGSVhNRTogVHlwZSAnRWxlbWVudCcgaXMgbm90IGFzc2lnbmFibGUgdG8gdHlwZSAnKEVsZW1lbnQuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgIDxSZWNoYXJ0cy5DdXN0b21pemVkIGtleT17a2V5fSBjb21wb25lbnQ9ezxBcmVhU2hhcGUgey4uLnByb3BzfSAvPn0gLz5cbiAgKTtcbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUmVmZXJlbmNlQXJlYXNDb25maWcgPSBSZW5kZXJSZWZlcmVuY2VBcmVhQnlEYXRhQ29uZmlnIHwgUmVuZGVyUmVjdFJlZmVyZW5jZUFyZWFDb25maWc7XG5cbmZ1bmN0aW9uIGlzUmVuZGVyUmVmZXJlbmNlQXJlYUJ5RGF0YUNvbmZpZyhjb25maWc6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBjb25maWcgaXMgUmVuZGVyUmVmZXJlbmNlQXJlYUJ5RGF0YUNvbmZpZyB7XG4gIHJldHVybiAhIWNvbmZpZy5lbmRQb2ludHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSZWZlcmVuY2VBcmVhcyhwcm9wczogUmVuZGVyUmVmZXJlbmNlQXJlYXNDb25maWcpIHtcbiAgaWYgKGlzUmVuZGVyUmVmZXJlbmNlQXJlYUJ5RGF0YUNvbmZpZyhwcm9wcykpIHtcbiAgICByZXR1cm4gcmVuZGVyUmVmZXJlbmNlQXJlYUJ5RGF0YShwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlclJlY3RSZWZlcmVuY2VBcmVhKHByb3BzKTtcbn1cbiJdfQ==