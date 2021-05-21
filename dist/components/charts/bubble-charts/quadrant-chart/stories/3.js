"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _jsonStableStringify = _interopRequireDefault(require("json-stable-stringify"));

var _quadrantChart = _interopRequireDefault(require("../quadrant-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

// for a prettier axis
var roundDevEquivalent = function roundDevEquivalent(number) {
  if (number < 100) return 100;

  if (number < 10000) {
    return (0, _lodash.round)(number, -2);
  }

  return (0, _lodash.round)(number, -3);
};

var content = function Content() {
  var _nameMap;

  var xField = 'avg';
  var yField = 'cv';
  var nameMap = (_nameMap = {}, (0, _defineProperty3["default"])(_nameMap, xField, 'Average Dev Equivalent'), (0, _defineProperty3["default"])(_nameMap, yField, 'Discrete Coefficient'), _nameMap);
  /* ====== BEGIN ====== */

  var dep = (0, _jsonStableStringify["default"])(_mock["default"]);
  var processedData = (0, _react.useMemo)(function () {
    var target = _mock["default"].find(function (item) {
      return item.key === 'randomID5';
    });

    return [].concat((0, _toConsumableArray2["default"])(_mock["default"]), [// @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    _objectSpread(_objectSpread({}, target), {}, {
      key: 'randomID5-1',
      name: "Dup-".concat(target.name)
    })]);
  }, [dep]);
  var seriesBySameValue = (0, _react.useMemo)(function () {
    var m = {};
    processedData.forEach(function (item) {
      var key = "".concat(item[xField], "-").concat(item[yField]); // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message

      if (!m[key]) {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        m[key] = [item];
      } else {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        m[key].push(item);
      }
    });
    return m;
  }, [(0, _jsonStableStringify["default"])(processedData)]);

  function labelFormatter(_value, data)
  /* style */
  {
    var _data$_origin = data._origin,
        x = _data$_origin[xField],
        y = _data$_origin[yField],
        name = _data$_origin.name;

    if (x === 0 && y === 0) {
      return '';
    } // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message


    var series = seriesBySameValue["".concat(x, "-").concat(y)];

    if (series.length === 1) {
      return "".concat(name, "\n(").concat(x, ", ").concat(y, ")");
    }

    if (name !== series[series.length - 1].name) {
      return null;
    }

    return "".concat(series.map(function (item) {
      return "".concat(item.name);
    }).join('\n'), "\n(").concat(x, ", ").concat(y, ")");
  }
  /* ====== END ====== */
  // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.


  var maxX = Math.max(100, (0, _lodash.maxBy)(processedData, function (a) {
    return a[xField];
  })[xField]); // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.

  var maxY = Math.max(1, (0, _lodash.maxBy)(processedData, function (a) {
    return a[yField];
  })[yField]);
  var configurations = {
    xField: xField,
    yField: yField,
    sizeField: 'size',
    pointSize: [20, 60],
    xAxis: {
      name: 'Dev Equivalent per Capita'
    },
    yAxis: {
      name: 'Coefficient of Variation'
    },
    nameMap: nameMap,
    tooltipTitleFormatter: function tooltipTitleFormatter(v) {
      return v;
    },
    xBoundary: {
      min: 0,
      max: roundDevEquivalent(maxX * 1.5)
    },
    yBoundary: {
      min: 0,
      max: maxY * 1.5
    },

    /* ====== BEGIN ====== */
    labelProps: {
      visible: true,
      formatter: labelFormatter,
      offsetX: 10,
      offsetY: 12,
      style: {
        textAlign: 'start',
        textBaseline: 'middle'
      }
    },

    /* ====== END ====== */
    quadrantLabels: ['High Stability', '', '', 'High Efficiency']
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Bubble Labels"), /*#__PURE__*/_react["default"].createElement("p", null, "Share labels between bubbles with same value ", /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_quadrantChart["default"], {
    data: processedData,
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      width: 800,
      height: 600
    })
  })));
};

exports.content = content;
var name = 'Bubble Labels';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9idWJibGUtY2hhcnRzL3F1YWRyYW50LWNoYXJ0L3N0b3JpZXMvMy50c3giXSwibmFtZXMiOlsicm91bmREZXZFcXVpdmFsZW50IiwibnVtYmVyIiwiY29udGVudCIsIkNvbnRlbnQiLCJ4RmllbGQiLCJ5RmllbGQiLCJuYW1lTWFwIiwiZGVwIiwiZGF0YSIsInByb2Nlc3NlZERhdGEiLCJ0YXJnZXQiLCJmaW5kIiwiaXRlbSIsImtleSIsIm5hbWUiLCJzZXJpZXNCeVNhbWVWYWx1ZSIsIm0iLCJmb3JFYWNoIiwicHVzaCIsImxhYmVsRm9ybWF0dGVyIiwiX3ZhbHVlIiwiX29yaWdpbiIsIngiLCJ5Iiwic2VyaWVzIiwibGVuZ3RoIiwibWFwIiwiam9pbiIsIm1heFgiLCJNYXRoIiwibWF4IiwiYSIsIm1heFkiLCJjb25maWd1cmF0aW9ucyIsInNpemVGaWVsZCIsInBvaW50U2l6ZSIsInhBeGlzIiwieUF4aXMiLCJ0b29sdGlwVGl0bGVGb3JtYXR0ZXIiLCJ2IiwieEJvdW5kYXJ5IiwibWluIiwieUJvdW5kYXJ5IiwibGFiZWxQcm9wcyIsInZpc2libGUiLCJmb3JtYXR0ZXIiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInN0eWxlIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwicXVhZHJhbnRMYWJlbHMiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxNQUFELEVBQWlCO0FBQzFDLE1BQUlBLE1BQU0sR0FBRyxHQUFiLEVBQWtCLE9BQU8sR0FBUDs7QUFDbEIsTUFBSUEsTUFBTSxHQUFHLEtBQWIsRUFBb0I7QUFDbEIsV0FBTyxtQkFBTUEsTUFBTixFQUFjLENBQUMsQ0FBZixD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QUdWMkIsTUFBQUEsT0FBTyxFQUFFLEVBSEM7QUFJVkMsTUFBQUEsT0FBTyxFQUFFLEVBSkM7QUFLVkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLFNBQVMsRUFBRSxPQUROO0FBRUxDLFFBQUFBLFlBQVksRUFBRTtBQUZUO0FBTEcsS0FoQlM7O0FBMEJyQjtBQUNBQyxJQUFBQSxjQUFjLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQixpQkFBM0I7QUEzQkssR0FBdkI7QUE2QkEsc0JBQ0UsMERBQ0UsNERBREYsZUFFRSx5R0FDK0MsMkNBRC9DLENBRkYsZUFLRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLHlCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUU1QyxhQURSO0FBRUUsSUFBQSxjQUFjLGtDQUNUd0IsY0FEUztBQUVabUIsTUFBQUEsS0FBSyxFQUFFLEdBRks7QUFHWkMsTUFBQUEsTUFBTSxFQUFFO0FBSEk7QUFGaEIsSUFERixDQUxGLENBREY7QUFrQkQsQ0F6R007OztBQTBHQSxJQUFNdkMsSUFBSSxHQUFHLGVBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1heEJ5LCByb3VuZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQganNvblN0YWJsZVN0cmluZ2lmeSBmcm9tICdqc29uLXN0YWJsZS1zdHJpbmdpZnknO1xuaW1wb3J0IFF1YWRyYW50Q2hhcnQgZnJvbSAnLi4vcXVhZHJhbnQtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG4vLyBmb3IgYSBwcmV0dGllciBheGlzXG5jb25zdCByb3VuZERldkVxdWl2YWxlbnQgPSAobnVtYmVyOiBhbnkpID0+IHtcbiAgaWYgKG51bWJlciA8IDEwMCkgcmV0dXJuIDEwMDtcbiAgaWYgKG51bWJlciA8IDEwMDAwKSB7XG4gICAgcmV0dXJuIHJvdW5kKG51bWJlciwgLTIpO1xuICB9XG4gIHJldHVybiByb3VuZChudW1iZXIsIC0zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgeEZpZWxkID0gJ2F2Zyc7XG4gIGNvbnN0IHlGaWVsZCA9ICdjdic7XG4gIGNvbnN0IG5hbWVNYXAgPSB7XG4gICAgW3hGaWVsZF06ICdBdmVyYWdlIERldiBFcXVpdmFsZW50JyxcbiAgICBbeUZpZWxkXTogJ0Rpc2NyZXRlIENvZWZmaWNpZW50JyxcbiAgfTtcblxuICAvKiA9PT09PT0gQkVHSU4gPT09PT09ICovXG4gIGNvbnN0IGRlcCA9IGpzb25TdGFibGVTdHJpbmdpZnkoZGF0YSk7XG5cbiAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5rZXkgPT09ICdyYW5kb21JRDUnKTtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uZGF0YSxcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTMyKSBGSVhNRTogT2JqZWN0IGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICAgICAgeyAuLi50YXJnZXQsIGtleTogJ3JhbmRvbUlENS0xJywgbmFtZTogYER1cC0ke3RhcmdldC5uYW1lfWAgfSxcbiAgICBdO1xuICB9LCBbZGVwXSk7XG5cbiAgY29uc3Qgc2VyaWVzQnlTYW1lVmFsdWUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBtID0ge307XG4gICAgcHJvY2Vzc2VkRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtpdGVtW3hGaWVsZF19LSR7aXRlbVt5RmllbGRdfWA7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzA1MykgRklYTUU6IEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICAgIGlmICghbVtrZXldKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSg3MDUzKSBGSVhNRTogRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmUuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgICAgICBtW2tleV0gPSBbaXRlbV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzA1MykgRklYTUU6IEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgbVtrZXldLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG07XG4gIH0sIFtqc29uU3RhYmxlU3RyaW5naWZ5KHByb2Nlc3NlZERhdGEpXSk7XG5cbiAgZnVuY3Rpb24gbGFiZWxGb3JtYXR0ZXIoX3ZhbHVlOiBhbnksIGRhdGE6IGFueSAvKiBzdHlsZSAqLykge1xuICAgIGNvbnN0IHsgW3hGaWVsZF06IHgsIFt5RmllbGRdOiB5LCBuYW1lIC8qIHNpemUgKi8gfSA9IGRhdGEuX29yaWdpbjtcbiAgICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSg3MDUzKSBGSVhNRTogRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmUuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgIGNvbnN0IHNlcmllcyA9IHNlcmllc0J5U2FtZVZhbHVlW2Ake3h9LSR7eX1gXTtcbiAgICBpZiAoc2VyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9XFxuKCR7eH0sICR7eX0pYDtcbiAgICB9XG4gICAgaWYgKG5hbWUgIT09IHNlcmllc1tzZXJpZXMubGVuZ3RoIC0gMV0ubmFtZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBgJHtzZXJpZXMubWFwKChpdGVtOiBhbnkpID0+IGAke2l0ZW0ubmFtZX1gKS5qb2luKCdcXG4nKX1cXG4oJHt4fSwgJHt5fSlgO1xuICB9XG4gIC8qID09PT09PSBFTkQgPT09PT09ICovXG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI1MzIpIEZJWE1FOiBPYmplY3QgaXMgcG9zc2libHkgJ3VuZGVmaW5lZCcuXG4gIGNvbnN0IG1heFggPSBNYXRoLm1heCgxMDAsIG1heEJ5KHByb2Nlc3NlZERhdGEsIChhKSA9PiBhW3hGaWVsZF0pW3hGaWVsZF0pO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjUzMikgRklYTUU6IE9iamVjdCBpcyBwb3NzaWJseSAndW5kZWZpbmVkJy5cbiAgY29uc3QgbWF4WSA9IE1hdGgubWF4KDEsIG1heEJ5KHByb2Nlc3NlZERhdGEsIChhKSA9PiBhW3lGaWVsZF0pW3lGaWVsZF0pO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHhGaWVsZCxcbiAgICB5RmllbGQsXG4gICAgc2l6ZUZpZWxkOiAnc2l6ZScsXG4gICAgcG9pbnRTaXplOiBbMjAsIDYwXSxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50IHBlciBDYXBpdGEnLFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdDb2VmZmljaWVudCBvZiBWYXJpYXRpb24nLFxuICAgIH0sXG4gICAgbmFtZU1hcCxcbiAgICB0b29sdGlwVGl0bGVGb3JtYXR0ZXI6ICh2OiBhbnkpID0+IHYsXG4gICAgeEJvdW5kYXJ5OiB7IG1pbjogMCwgbWF4OiByb3VuZERldkVxdWl2YWxlbnQobWF4WCAqIDEuNSkgfSxcbiAgICB5Qm91bmRhcnk6IHsgbWluOiAwLCBtYXg6IG1heFkgKiAxLjUgfSxcbiAgICAvKiA9PT09PT0gQkVHSU4gPT09PT09ICovXG4gICAgbGFiZWxQcm9wczoge1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGZvcm1hdHRlcjogbGFiZWxGb3JtYXR0ZXIsXG4gICAgICBvZmZzZXRYOiAxMCxcbiAgICAgIG9mZnNldFk6IDEyLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnc3RhcnQnLFxuICAgICAgICB0ZXh0QmFzZWxpbmU6ICdtaWRkbGUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8qID09PT09PSBFTkQgPT09PT09ICovXG4gICAgcXVhZHJhbnRMYWJlbHM6IFsnSGlnaCBTdGFiaWxpdHknLCAnJywgJycsICdIaWdoIEVmZmljaWVuY3knXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkJ1YmJsZSBMYWJlbHM8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIFNoYXJlIGxhYmVscyBiZXR3ZWVuIGJ1YmJsZXMgd2l0aCBzYW1lIHZhbHVlIDxiciAvPlxuICAgICAgPC9wPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFF1YWRyYW50Q2hhcnRcbiAgICAgICAgICBkYXRhPXtwcm9jZXNzZWREYXRhfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXt7XG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9ucyxcbiAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnQnViYmxlIExhYmVscyc7XG4iXX0=