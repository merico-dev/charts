"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.renderLegend = renderLegend;
exports.renderLegendItemIcon = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

var _icons = require("@ant-design/icons");

var _lodash = require("lodash");

var _useLegendCarousel2 = require("./use-legend-carousel");

var _indicator = require("../indicator");

var _style = require("./style");

function renderIcon(_ref, inactive) {
  var color = _ref.color,
      chartType = _ref.chartType,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["color", "chartType"]);
  var usingColorCallback = typeof color === 'function';

  if (!usingColorCallback) {
    // TODO(Leto) what was going on and not done with this usingColorCallback, a story?
    if (chartType === 'line') {
      return /*#__PURE__*/_react["default"].createElement(_indicator.Line, (0, _extends2["default"])({
        stroke: color
      }, rest));
    }

    return /*#__PURE__*/_react["default"].createElement(_indicator.Dot, {
      fill: color
    });
  }

  if (inactive) {
    return /*#__PURE__*/_react["default"].createElement(_icons.EyeInvisibleOutlined, null);
  }

  return /*#__PURE__*/_react["default"].createElement(_icons.EyeOutlined, null);
}

var renderLegendItemIcon = renderIcon;
exports.renderLegendItemIcon = renderLegendItemIcon;

function LegendContent(_ref2) {
  var excludeBy = _ref2.excludeBy,
      payload = _ref2.payload,
      series = _ref2.series,
      filtered = _ref2.filtered,
      setFiltered = _ref2.setFiltered,
      align = _ref2.align,
      _ref2$isSeriesClickab = _ref2.isSeriesClickable,
      isSeriesClickable = _ref2$isSeriesClickab === void 0 ? function () {
    return true;
  } : _ref2$isSeriesClickab;
  var itemsWrapperRef = (0, _react.useRef)(null);
  var itemsRef = (0, _react.useRef)(null);

  var _useLegendCarousel = (0, _useLegendCarousel2.useLegendCarousel)(itemsWrapperRef, itemsRef),
      offsetIndex = _useLegendCarousel.offsetIndex,
      maxOffsetIndex = _useLegendCarousel.maxOffsetIndex,
      backward = _useLegendCarousel.backward,
      forward = _useLegendCarousel.forward;

  var toggleSeris = (0, _react.useCallback)(function (seriesName) {
    setFiltered(function (prev) {
      if (!filtered.has(seriesName)) {
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'add' does not exist on type 'ReadonlySet... Remove this comment to see the full error message
        return new _set["default"](filtered.add(seriesName));
      }

      return new _set["default"]((0, _toConsumableArray2["default"])(prev).filter(function (item) {
        return item !== seriesName;
      }));
    });
  }, [payload, filtered]);
  var hideLegendSwitcher = maxOffsetIndex === 0;
  var showLegendSwitcher = !hideLegendSwitcher;

  var processedSeries = _react["default"].useMemo(function () {
    if (!excludeBy) {
      return series;
    }

    var copy = (0, _lodash.cloneDeep)(series);
    return excludeBy(copy);
  }, [series, excludeBy]);

  var getToggleHandler = function getToggleHandler(id) {
    if (isSeriesClickable(id)) {
      return function () {
        return toggleSeris(id);
      };
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_style.LegendContentContainer, null, showLegendSwitcher && /*#__PURE__*/_react["default"].createElement(_style.LegendSwitcher, null, /*#__PURE__*/_react["default"].createElement(_icons.CaretLeftOutlined, {
    onClick: backward,
    "data-disabled": offsetIndex === 0
  })), /*#__PURE__*/_react["default"].createElement(_style.LegendItemsWrapper, {
    ref: itemsWrapperRef,
    "data-full-width": hideLegendSwitcher,
    "data-align": align
  }, /*#__PURE__*/_react["default"].createElement(_style.LegendItems, {
    ref: itemsRef,
    style: {
      '--left': "-".concat(offsetIndex * 100, "%")
    }
  }, processedSeries.map(function (_ref3) {
    var _id;

    var id = _ref3.id,
        name = _ref3.name,
        rest = (0, _objectWithoutProperties2["default"])(_ref3, ["id", "name"]);
    id = (_id = id) !== null && _id !== void 0 ? _id : name;
    var inactive = filtered.has(id);
    return /*#__PURE__*/_react["default"].createElement(_style.LegendItem, {
      key: id,
      onClick: getToggleHandler(id),
      "data-inactive": inactive,
      "data-clickable": isSeriesClickable(id)
    }, renderIcon(rest, inactive), /*#__PURE__*/_react["default"].createElement(_style.LegendItemText, null, name));
  }))), showLegendSwitcher && /*#__PURE__*/_react["default"].createElement(_style.LegendSwitcher, null, /*#__PURE__*/_react["default"].createElement(_icons.CaretRightOutlined, {
    onClick: forward,
    "data-disabled": offsetIndex === maxOffsetIndex
  })));
}

function renderLegend(_ref4) {
  var legend = _ref4.legend,
      series = _ref4.series,
      filteredSeries = _ref4.filteredSeries,
      setFilteredSeries = _ref4.setFilteredSeries;

  // const { enabled, ...rest } = legend;
  if (legend.content) {
    return /*#__PURE__*/_react["default"].createElement(Recharts.Legend, legend);
  }

  return /*#__PURE__*/_react["default"].createElement(Recharts.Legend, (0, _extends2["default"])({}, legend, {
    content: /*#__PURE__*/_react["default"].createElement(LegendContent, {
      series: series,
      filtered: filteredSeries,
      setFiltered: setFilteredSeries,
      align: legend.align
    })
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL2xlZ2VuZC9pbmRleC50c3giXSwibmFtZXMiOlsicmVuZGVySWNvbiIsImluYWN0aXZlIiwiY29sb3IiLCJjaGFydFR5cGUiLCJyZXN0IiwidXNpbmdDb2xvckNhbGxiYWNrIiwicmVuZGVyTGVnZW5kSXRlbUljb24iLCJMZWdlbmRDb250ZW50IiwiZXhjbHVkZUJ5IiwicGF5bG9hZCIsInNlcmllcyIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJhbGlnbiIsImlzU2VyaWVzQ2xpY2thYmxlIiwiaXRlbXNXcmFwcGVyUmVmIiwiaXRlbXNSZWYiLCJvZmZzZXRJbmRleCIsIm1heE9mZnNldEluZGV4IiwiYmFja3dhcmQiLCJmb3J3YXJkIiwidG9nZ2xlU2VyaXMiLCJzZXJpZXNOYW1lIiwicHJldiIsImhhcyIsImFkZCIsImZpbHRlciIsIml0ZW0iLCJoaWRlTGVnZW5kU3dpdGNoZXIiLCJzaG93TGVnZW5kU3dpdGNoZXIiLCJwcm9jZXNzZWRTZXJpZXMiLCJSZWFjdCIsInVzZU1lbW8iLCJjb3B5IiwiZ2V0VG9nZ2xlSGFuZGxlciIsImlkIiwibWFwIiwibmFtZSIsInJlbmRlckxlZ2VuZCIsImxlZ2VuZCIsImZpbHRlcmVkU2VyaWVzIiwic2V0RmlsdGVyZWRTZXJpZXMiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQW9DQSxTQUFTQSxVQUFULE9BQXFFQyxRQUFyRSxFQUF3RjtBQUFBLE1BQWxFQyxLQUFrRSxRQUFsRUEsS0FBa0U7QUFBQSxNQUEzREMsU0FBMkQsUUFBM0RBLFNBQTJEO0FBQUEsTUFBN0NDLElBQTZDO0FBQ3RGLE1BQU1DLGtCQUFrQixHQUFHLE9BQU9ILEtBQVAsS0FBaUIsVUFBNUM7O0FBQ0EsTUFBSSxDQUFDRyxrQkFBTCxFQUF5QjtBQUN2QjtBQUNBLFFBQUlGLFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUN4QiwwQkFBTyxnQ0FBQyxlQUFEO0FBQU0sUUFBQSxNQUFNLEVBQUVEO0FBQWQsU0FBeUJFLElBQXpCLEVBQVA7QUFDRDs7QUFDRCx3QkFBTyxnQ0FBQyxjQUFEO0FBQUssTUFBQSxJQUFJLEVBQUVGO0FBQVgsTUFBUDtBQUNEOztBQUNELE1BQUlELFFBQUosRUFBYztBQUNaLHdCQUFPLGdDQUFDLDJCQUFELE9BQVA7QUFDRDs7QUFDRCxzQkFBTyxnQ0FBQyxrQkFBRCxPQUFQO0FBQ0Q7O0FBRU0sSUFBTUssb0JBQW9CLEdBQUdOLFVBQTdCOzs7QUFFUCxTQUFTTyxhQUFULFFBUXVCO0FBQUEsTUFQckJDLFNBT3FCLFNBUHJCQSxTQU9xQjtBQUFBLE1BTnJCQyxPQU1xQixTQU5yQkEsT0FNcUI7QUFBQSxNQUxyQkMsTUFLcUIsU0FMckJBLE1BS3FCO0FBQUEsTUFKckJDLFFBSXFCLFNBSnJCQSxRQUlxQjtBQUFBLE1BSHJCQyxXQUdxQixTQUhyQkEsV0FHcUI7QUFBQSxNQUZyQkMsS0FFcUIsU0FGckJBLEtBRXFCO0FBQUEsb0NBRHJCQyxpQkFDcUI7QUFBQSxNQURyQkEsaUJBQ3FCLHNDQUREO0FBQUEsV0FBTSxJQUFOO0FBQUEsR0FDQztBQUNyQixNQUFNQyxlQUFlLEdBQUcsbUJBQXVCLElBQXZCLENBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLG1CQUF1QixJQUF2QixDQUFqQjs7QUFGcUIsMkJBR3NDLDJDQUFrQkQsZUFBbEIsRUFBbUNDLFFBQW5DLENBSHRDO0FBQUEsTUFHYkMsV0FIYSxzQkFHYkEsV0FIYTtBQUFBLE1BR0FDLGNBSEEsc0JBR0FBLGNBSEE7QUFBQSxNQUdnQkMsUUFIaEIsc0JBR2dCQSxRQUhoQjtBQUFBLE1BRzBCQyxPQUgxQixzQkFHMEJBLE9BSDFCOztBQUtyQixNQUFNQyxXQUFXLEdBQUcsd0JBQ2xCLFVBQUNDLFVBQUQsRUFBZ0I7QUFDZFYsSUFBQUEsV0FBVyxDQUFDLFVBQUNXLElBQUQsRUFBVTtBQUNwQixVQUFJLENBQUNaLFFBQVEsQ0FBQ2EsR0FBVCxDQUFhRixVQUFiLENBQUwsRUFBK0I7QUFDN0I7QUFDQSxlQUFPLG9CQUFRWCxRQUFRLENBQUNjLEdBQVQsQ0FBYUgsVUFBYixDQUFSLENBQVA7QUFDRDs7QUFDRCxhQUFPLG9CQUFRLG9DQUFJQyxJQUFKLEVBQVVHLE1BQVYsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksS0FBS0wsVUFBbkI7QUFBQSxPQUFqQixDQUFSLENBQVA7QUFDRCxLQU5VLENBQVg7QUFPRCxHQVRpQixFQVVsQixDQUFDYixPQUFELEVBQVVFLFFBQVYsQ0FWa0IsQ0FBcEI7QUFhQSxNQUFNaUIsa0JBQWtCLEdBQUdWLGNBQWMsS0FBSyxDQUE5QztBQUNBLE1BQU1XLGtCQUFrQixHQUFHLENBQUNELGtCQUE1Qjs7QUFFQSxNQUFNRSxlQUFlLEdBQUdDLGtCQUFNQyxPQUFOLENBQWMsWUFBTTtBQUMxQyxRQUFJLENBQUN4QixTQUFMLEVBQWdCO0FBQ2QsYUFBT0UsTUFBUDtBQUNEOztBQUNELFFBQU11QixJQUFJLEdBQUcsdUJBQVV2QixNQUFWLENBQWI7QUFDQSxXQUFPRixTQUFTLENBQUN5QixJQUFELENBQWhCO0FBQ0QsR0FOdUIsRUFNckIsQ0FBQ3ZCLE1BQUQsRUFBU0YsU0FBVCxDQU5xQixDQUF4Qjs7QUFRQSxNQUFNMEIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxFQUFELEVBQXlCO0FBQ2hELFFBQUlyQixpQkFBaUIsQ0FBQ3FCLEVBQUQsQ0FBckIsRUFBMkI7QUFDekIsYUFBTztBQUFBLGVBQU1kLFdBQVcsQ0FBQ2MsRUFBRCxDQUFqQjtBQUFBLE9BQVA7QUFDRDtBQUNGLEdBSkQ7O0FBTUEsc0JBQ0UsZ0NBQUMsNkJBQUQsUUFDR04sa0JBQWtCLGlCQUNqQixnQ0FBQyxxQkFBRCxxQkFDRSxnQ0FBQyx3QkFBRDtBQUFtQixJQUFBLE9BQU8sRUFBRVYsUUFBNUI7QUFBc0MscUJBQWVGLFdBQVcsS0FBSztBQUFyRSxJQURGLENBRkosZUFPRSxnQ0FBQyx5QkFBRDtBQUFvQixJQUFBLEdBQUcsRUFBRUYsZUFBekI7QUFBMEMsdUJBQWlCYSxrQkFBM0Q7QUFBK0Usa0JBQVlmO0FBQTNGLGtCQUVFLGdDQUFDLGtCQUFEO0FBQWEsSUFBQSxHQUFHLEVBQUVHLFFBQWxCO0FBQTRCLElBQUEsS0FBSyxFQUFFO0FBQUUsMkJBQWNDLFdBQVcsR0FBRyxHQUE1QjtBQUFGO0FBQW5DLEtBQ0dhLGVBQWUsQ0FBQ00sR0FBaEIsQ0FBb0IsaUJBQTJCO0FBQUE7O0FBQUEsUUFBeEJELEVBQXdCLFNBQXhCQSxFQUF3QjtBQUFBLFFBQXBCRSxJQUFvQixTQUFwQkEsSUFBb0I7QUFBQSxRQUFYakMsSUFBVztBQUM5QytCLElBQUFBLEVBQUUsVUFBR0EsRUFBSCxxQ0FBU0UsSUFBWDtBQUNBLFFBQU1wQyxRQUFRLEdBQUdVLFFBQVEsQ0FBQ2EsR0FBVCxDQUFhVyxFQUFiLENBQWpCO0FBQ0Esd0JBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxNQUFBLEdBQUcsRUFBRUEsRUFEUDtBQUVFLE1BQUEsT0FBTyxFQUFFRCxnQkFBZ0IsQ0FBQ0MsRUFBRCxDQUYzQjtBQUdFLHVCQUFlbEMsUUFIakI7QUFJRSx3QkFBZ0JhLGlCQUFpQixDQUFDcUIsRUFBRDtBQUpuQyxPQU1HbkMsVUFBVSxDQUFDSSxJQUFELEVBQU9ILFFBQVAsQ0FOYixlQU9FLGdDQUFDLHFCQUFELFFBQWlCb0MsSUFBakIsQ0FQRixDQURGO0FBV0QsR0FkQSxDQURILENBRkYsQ0FQRixFQTRCR1Isa0JBQWtCLGlCQUNqQixnQ0FBQyxxQkFBRCxxQkFDRSxnQ0FBQyx5QkFBRDtBQUFvQixJQUFBLE9BQU8sRUFBRVQsT0FBN0I7QUFBc0MscUJBQWVILFdBQVcsS0FBS0M7QUFBckUsSUFERixDQTdCSixDQURGO0FBb0NEOztBQVNNLFNBQVNvQixZQUFULFFBQWlHO0FBQUEsTUFBekVDLE1BQXlFLFNBQXpFQSxNQUF5RTtBQUFBLE1BQWpFN0IsTUFBaUUsU0FBakVBLE1BQWlFO0FBQUEsTUFBekQ4QixjQUF5RCxTQUF6REEsY0FBeUQ7QUFBQSxNQUF6Q0MsaUJBQXlDLFNBQXpDQSxpQkFBeUM7O0FBQ3RHO0FBQ0EsTUFBSUYsTUFBTSxDQUFDRyxPQUFYLEVBQW9CO0FBQ2xCLHdCQUFPLGdDQUFDLFFBQUQsQ0FBVSxNQUFWLEVBQXFCSCxNQUFyQixDQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0UsZ0NBQUMsUUFBRCxDQUFVLE1BQVYsZ0NBQ01BLE1BRE47QUFFRSxJQUFBLE9BQU8sZUFDTCxnQ0FBQyxhQUFEO0FBQWUsTUFBQSxNQUFNLEVBQUU3QixNQUF2QjtBQUErQixNQUFBLFFBQVEsRUFBRThCLGNBQXpDO0FBQXlELE1BQUEsV0FBVyxFQUFFQyxpQkFBdEU7QUFBeUYsTUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQzFCO0FBQXZHO0FBSEosS0FERjtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWNoYXJ0cyBmcm9tICdyZWNoYXJ0cyc7XG5pbXBvcnQgeyBIb3Jpem9udGFsQWxpZ25tZW50VHlwZSB9IGZyb20gJ3JlY2hhcnRzL3R5cGVzL2NvbXBvbmVudC9EZWZhdWx0TGVnZW5kQ29udGVudCc7XG5pbXBvcnQgeyBDYXJldExlZnRPdXRsaW5lZCwgQ2FyZXRSaWdodE91dGxpbmVkLCBFeWVJbnZpc2libGVPdXRsaW5lZCwgRXllT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgdXNlTGVnZW5kQ2Fyb3VzZWwgfSBmcm9tICcuL3VzZS1sZWdlbmQtY2Fyb3VzZWwnO1xuaW1wb3J0IHsgRG90LCBMaW5lLCBMaW5lUHJvcHMgfSBmcm9tICcuLi9pbmRpY2F0b3InO1xuaW1wb3J0IHtcbiAgTGVnZW5kQ29udGVudENvbnRhaW5lcixcbiAgTGVnZW5kU3dpdGNoZXIsXG4gIExlZ2VuZEl0ZW1zV3JhcHBlcixcbiAgTGVnZW5kSXRlbXMsXG4gIExlZ2VuZEl0ZW0sXG4gIExlZ2VuZEl0ZW1UZXh0LFxufSBmcm9tICcuL3N0eWxlJztcblxuZXhwb3J0IHR5cGUgTGVnZW5kQ29udGVudFByb3BFeGNsdWRlQnkgPSAoc2VyaWVzOiBMZWdlbmRDb250ZW50UHJvcFNlcmllc1tdKSA9PiBMZWdlbmRDb250ZW50UHJvcFNlcmllc1tdO1xuXG5leHBvcnQgdHlwZSBDdXN0b21MZWdlbmRDb25maWcgPSB7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIGV4Y2x1ZGVCeT86IExlZ2VuZENvbnRlbnRQcm9wRXhjbHVkZUJ5O1xuICBpc1Nlcmllc0NsaWNrYWJsZT86IChpZDogc3RyaW5nIHwgbnVtYmVyKSA9PiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgUmVuZGVySWNvbkNvbmZpZyA9IFBhcnRpYWw8XG4gIExpbmVQcm9wcyAmIHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNoYXJ0VHlwZTogc3RyaW5nO1xuICB9XG4+O1xuXG5leHBvcnQgdHlwZSBMZWdlbmRDb250ZW50UHJvcFNlcmllcyA9IHsgaWQ/OiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9ICYgUmVuZGVySWNvbkNvbmZpZztcblxuZXhwb3J0IHR5cGUgTGVnZW5kQ29udGVudFByb3BzID0ge1xuICBleGNsdWRlQnk/OiBMZWdlbmRDb250ZW50UHJvcEV4Y2x1ZGVCeTtcbiAgc2VyaWVzOiBMZWdlbmRDb250ZW50UHJvcFNlcmllc1tdO1xuICBmaWx0ZXJlZDogUmVhZG9ubHlTZXQ8c3RyaW5nPjtcbiAgc2V0RmlsdGVyZWQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFJlYWRvbmx5U2V0PHN0cmluZz4+PjtcbiAgYWxpZ24/OiBIb3Jpem9udGFsQWxpZ25tZW50VHlwZTtcbiAgcGF5bG9hZD86IHVua25vd247XG4gIGlzU2VyaWVzQ2xpY2thYmxlPzogKGlkOiBzdHJpbmcgfCBudW1iZXIpID0+IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiByZW5kZXJJY29uKHsgY29sb3IsIGNoYXJ0VHlwZSwgLi4ucmVzdCB9OiBSZW5kZXJJY29uQ29uZmlnLCBpbmFjdGl2ZTogYm9vbGVhbikge1xuICBjb25zdCB1c2luZ0NvbG9yQ2FsbGJhY2sgPSB0eXBlb2YgY29sb3IgPT09ICdmdW5jdGlvbic7XG4gIGlmICghdXNpbmdDb2xvckNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETyhMZXRvKSB3aGF0IHdhcyBnb2luZyBvbiBhbmQgbm90IGRvbmUgd2l0aCB0aGlzIHVzaW5nQ29sb3JDYWxsYmFjaywgYSBzdG9yeT9cbiAgICBpZiAoY2hhcnRUeXBlID09PSAnbGluZScpIHtcbiAgICAgIHJldHVybiA8TGluZSBzdHJva2U9e2NvbG9yfSB7Li4ucmVzdH0gLz47XG4gICAgfVxuICAgIHJldHVybiA8RG90IGZpbGw9e2NvbG9yfSAvPjtcbiAgfVxuICBpZiAoaW5hY3RpdmUpIHtcbiAgICByZXR1cm4gPEV5ZUludmlzaWJsZU91dGxpbmVkIC8+O1xuICB9XG4gIHJldHVybiA8RXllT3V0bGluZWQgLz47XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJMZWdlbmRJdGVtSWNvbiA9IHJlbmRlckljb247XG5cbmZ1bmN0aW9uIExlZ2VuZENvbnRlbnQoe1xuICBleGNsdWRlQnksXG4gIHBheWxvYWQsXG4gIHNlcmllcyxcbiAgZmlsdGVyZWQsXG4gIHNldEZpbHRlcmVkLFxuICBhbGlnbixcbiAgaXNTZXJpZXNDbGlja2FibGUgPSAoKSA9PiB0cnVlLFxufTogTGVnZW5kQ29udGVudFByb3BzKSB7XG4gIGNvbnN0IGl0ZW1zV3JhcHBlclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGl0ZW1zUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgeyBvZmZzZXRJbmRleCwgbWF4T2Zmc2V0SW5kZXgsIGJhY2t3YXJkLCBmb3J3YXJkIH0gPSB1c2VMZWdlbmRDYXJvdXNlbChpdGVtc1dyYXBwZXJSZWYsIGl0ZW1zUmVmKTtcblxuICBjb25zdCB0b2dnbGVTZXJpcyA9IHVzZUNhbGxiYWNrKFxuICAgIChzZXJpZXNOYW1lKSA9PiB7XG4gICAgICBzZXRGaWx0ZXJlZCgocHJldikgPT4ge1xuICAgICAgICBpZiAoIWZpbHRlcmVkLmhhcyhzZXJpZXNOYW1lKSkge1xuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzM5KSBGSVhNRTogUHJvcGVydHkgJ2FkZCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnUmVhZG9ubHlTZXQuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgIHJldHVybiBuZXcgU2V0KGZpbHRlcmVkLmFkZChzZXJpZXNOYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTZXQoWy4uLnByZXZdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gc2VyaWVzTmFtZSkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBbcGF5bG9hZCwgZmlsdGVyZWRdXG4gICk7XG5cbiAgY29uc3QgaGlkZUxlZ2VuZFN3aXRjaGVyID0gbWF4T2Zmc2V0SW5kZXggPT09IDA7XG4gIGNvbnN0IHNob3dMZWdlbmRTd2l0Y2hlciA9ICFoaWRlTGVnZW5kU3dpdGNoZXI7XG5cbiAgY29uc3QgcHJvY2Vzc2VkU2VyaWVzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFleGNsdWRlQnkpIHtcbiAgICAgIHJldHVybiBzZXJpZXM7XG4gICAgfVxuICAgIGNvbnN0IGNvcHkgPSBjbG9uZURlZXAoc2VyaWVzKTtcbiAgICByZXR1cm4gZXhjbHVkZUJ5KGNvcHkpO1xuICB9LCBbc2VyaWVzLCBleGNsdWRlQnldKTtcblxuICBjb25zdCBnZXRUb2dnbGVIYW5kbGVyID0gKGlkOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICBpZiAoaXNTZXJpZXNDbGlja2FibGUoaWQpKSB7XG4gICAgICByZXR1cm4gKCkgPT4gdG9nZ2xlU2VyaXMoaWQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMZWdlbmRDb250ZW50Q29udGFpbmVyPlxuICAgICAge3Nob3dMZWdlbmRTd2l0Y2hlciAmJiAoXG4gICAgICAgIDxMZWdlbmRTd2l0Y2hlcj5cbiAgICAgICAgICA8Q2FyZXRMZWZ0T3V0bGluZWQgb25DbGljaz17YmFja3dhcmR9IGRhdGEtZGlzYWJsZWQ9e29mZnNldEluZGV4ID09PSAwfSAvPlxuICAgICAgICA8L0xlZ2VuZFN3aXRjaGVyPlxuICAgICAgKX1cblxuICAgICAgPExlZ2VuZEl0ZW1zV3JhcHBlciByZWY9e2l0ZW1zV3JhcHBlclJlZn0gZGF0YS1mdWxsLXdpZHRoPXtoaWRlTGVnZW5kU3dpdGNoZXJ9IGRhdGEtYWxpZ249e2FsaWdufT5cbiAgICAgICAgey8qIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzIyKSBGSVhNRTogVHlwZSAneyAnLS1sZWZ0Jzogc3RyaW5nOyB9JyBpcyBub3QgYXNzaWduYWJsZSB0byAuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSAqL31cbiAgICAgICAgPExlZ2VuZEl0ZW1zIHJlZj17aXRlbXNSZWZ9IHN0eWxlPXt7ICctLWxlZnQnOiBgLSR7b2Zmc2V0SW5kZXggKiAxMDB9JWAgfX0+XG4gICAgICAgICAge3Byb2Nlc3NlZFNlcmllcy5tYXAoKHsgaWQsIG5hbWUsIC4uLnJlc3QgfSkgPT4ge1xuICAgICAgICAgICAgaWQgPSBpZCA/PyBuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW5hY3RpdmUgPSBmaWx0ZXJlZC5oYXMoaWQpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExlZ2VuZEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2dldFRvZ2dsZUhhbmRsZXIoaWQpfVxuICAgICAgICAgICAgICAgIGRhdGEtaW5hY3RpdmU9e2luYWN0aXZlfVxuICAgICAgICAgICAgICAgIGRhdGEtY2xpY2thYmxlPXtpc1Nlcmllc0NsaWNrYWJsZShpZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmVuZGVySWNvbihyZXN0LCBpbmFjdGl2ZSl9XG4gICAgICAgICAgICAgICAgPExlZ2VuZEl0ZW1UZXh0PntuYW1lfTwvTGVnZW5kSXRlbVRleHQ+XG4gICAgICAgICAgICAgIDwvTGVnZW5kSXRlbT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvTGVnZW5kSXRlbXM+XG4gICAgICA8L0xlZ2VuZEl0ZW1zV3JhcHBlcj5cblxuICAgICAge3Nob3dMZWdlbmRTd2l0Y2hlciAmJiAoXG4gICAgICAgIDxMZWdlbmRTd2l0Y2hlcj5cbiAgICAgICAgICA8Q2FyZXRSaWdodE91dGxpbmVkIG9uQ2xpY2s9e2ZvcndhcmR9IGRhdGEtZGlzYWJsZWQ9e29mZnNldEluZGV4ID09PSBtYXhPZmZzZXRJbmRleH0gLz5cbiAgICAgICAgPC9MZWdlbmRTd2l0Y2hlcj5cbiAgICAgICl9XG4gICAgPC9MZWdlbmRDb250ZW50Q29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJMZWdlbmRDb25maWcgPSB7XG4gIGxlZ2VuZDogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFJlY2hhcnRzLkxlZ2VuZD47XG4gIHNlcmllczogTGVnZW5kQ29udGVudFByb3BzWydzZXJpZXMnXTtcbiAgZmlsdGVyZWRTZXJpZXM6IExlZ2VuZENvbnRlbnRQcm9wc1snZmlsdGVyZWQnXTtcbiAgc2V0RmlsdGVyZWRTZXJpZXM6IExlZ2VuZENvbnRlbnRQcm9wc1snc2V0RmlsdGVyZWQnXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMZWdlbmQoeyBsZWdlbmQsIHNlcmllcywgZmlsdGVyZWRTZXJpZXMsIHNldEZpbHRlcmVkU2VyaWVzIH06IFJlbmRlckxlZ2VuZENvbmZpZykge1xuICAvLyBjb25zdCB7IGVuYWJsZWQsIC4uLnJlc3QgfSA9IGxlZ2VuZDtcbiAgaWYgKGxlZ2VuZC5jb250ZW50KSB7XG4gICAgcmV0dXJuIDxSZWNoYXJ0cy5MZWdlbmQgey4uLmxlZ2VuZH0gLz47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8UmVjaGFydHMuTGVnZW5kXG4gICAgICB7Li4ubGVnZW5kfVxuICAgICAgY29udGVudD17XG4gICAgICAgIDxMZWdlbmRDb250ZW50IHNlcmllcz17c2VyaWVzfSBmaWx0ZXJlZD17ZmlsdGVyZWRTZXJpZXN9IHNldEZpbHRlcmVkPXtzZXRGaWx0ZXJlZFNlcmllc30gYWxpZ249e2xlZ2VuZC5hbGlnbn0gLz5cbiAgICAgIH1cbiAgICAvPlxuICApO1xufVxuIl19