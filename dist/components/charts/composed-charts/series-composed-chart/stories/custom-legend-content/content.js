"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Content;

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _react = _interopRequireDefault(require("react"));

var _legend = require("../../../../../recharts/legend");

var _style = require("../../../../../recharts/legend/style");

var _seriesComposedChart = _interopRequireDefault(require("../../series-composed-chart"));

var _hooks = require("../../../../../helpers/hooks");

var _data = _interopRequireDefault(require("./data.json"));

var _styled = require("./styled");

function LegendContent(_ref) {
  var customPayload = _ref.customPayload,
      filtered = _ref.filtered,
      setFiltered = _ref.setFiltered,
      align = _ref.align;

  var toggleSeries = _react["default"].useCallback(function (seriesName) {
    setFiltered(function (prev) {
      if (!filtered.has(seriesName)) {
        return new _set["default"](filtered.add(seriesName));
      }

      return new _set["default"]((0, _toConsumableArray2["default"])(prev).filter(function (item) {
        return item !== seriesName;
      }));
    });
  }, [customPayload, filtered]);

  return /*#__PURE__*/_react["default"].createElement(_styled.LegendItems, {
    "data-align": align
  }, customPayload.map(function (_ref2) {
    var _id;

    var id = _ref2.id,
        name = _ref2.name,
        rest = (0, _objectWithoutProperties2["default"])(_ref2, ["id", "name"]);
    id = (_id = id) !== null && _id !== void 0 ? _id : name;
    var inactive = filtered.has(id);
    return /*#__PURE__*/_react["default"].createElement(_style.LegendItem, {
      key: id,
      onClick: function onClick() {
        return toggleSeries(id);
      },
      "data-inactive": inactive
    }, (0, _legend.renderLegendItemIcon)(rest, inactive), /*#__PURE__*/_react["default"].createElement(_style.LegendItemText, null, name));
  }));
}

function Content() {
  var _React$useState = _react["default"].useState([]),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      filteredSeries = _React$useState2[0],
      setFilteredSeries = _React$useState2[1]; // ❇️ STEP 1


  var filterSeries = _react["default"].useCallback(function (values) {
    if (values.length === 0) {
      setFilteredSeries(values);
      return;
    }

    var s = new _set["default"](values);

    if (s.has('human')) {
      s.add('Male');
      s.add('Female');
    } else {
      s["delete"]('Male');
      s["delete"]('Female');
    }

    setFilteredSeries((0, _from["default"])(s));
  }, [setFilteredSeries]); // ❇️ STEP 2


  var _useFilteredSeries = (0, _hooks.useFilteredSeries)(filteredSeries, filterSeries),
      _useFilteredSeries2 = (0, _slicedToArray2["default"])(_useFilteredSeries, 2),
      filtered = _useFilteredSeries2[0],
      setFiltered = _useFilteredSeries2[1]; // ❇️ STEP 3


  var legendPayload = [{
    id: 'UV',
    name: 'Click me to toggle UV',
    color: '#ccc',
    chartType: 'bar'
  }, {
    id: 'human',
    name: 'Click me to toggle UV',
    color: 'red',
    chartType: 'line'
  }]; // ❇️ STEP 4

  var legendContent = _react["default"].useMemo(function () {
    return /*#__PURE__*/_react["default"].createElement(LegendContent, {
      customPayload: legendPayload,
      filtered: filtered,
      setFiltered: setFiltered
    });
  }, [legendPayload, filtered, setFiltered]);

  var configurations = {
    withTooltip: true,
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
      // ❇️ STEP 5
      content: legendContent
    },
    labelKey: 'name',
    xAxis: {
      padding: {
        left: 20,
        right: 20
      }
    },
    subSeriesConfiguration: [{
      label: 'UV',
      dataKey: 'uv',
      fill: '#ccc'
    }, {
      label: 'Male',
      chartType: 'line',
      dataKey: 'human-male',
      stackId: 'human',
      stroke: 'red',
      dot: null
    }, {
      label: 'Female',
      chartType: 'line',
      dataKey: 'human-female',
      stackId: 'human',
      stroke: 'red',
      dot: null
    }]
  };
  return /*#__PURE__*/_react["default"].createElement(_styled.Container, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Custom Legend Content"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_seriesComposedChart["default"], {
    data: _data["default"],
    configurations: configurations,
    filteredSeries: filteredSeries,
    setFilteredSeries: filterSeries
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvY3VzdG9tLWxlZ2VuZC1jb250ZW50L2NvbnRlbnQudHN4Il0sIm5hbWVzIjpbIkxlZ2VuZENvbnRlbnQiLCJjdXN0b21QYXlsb2FkIiwiZmlsdGVyZWQiLCJzZXRGaWx0ZXJlZCIsImFsaWduIiwidG9nZ2xlU2VyaWVzIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInNlcmllc05hbWUiLCJwcmV2IiwiaGFzIiwiYWRkIiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImlkIiwibmFtZSIsInJlc3QiLCJpbmFjdGl2ZSIsIkNvbnRlbnQiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkU2VyaWVzIiwic2V0RmlsdGVyZWRTZXJpZXMiLCJmaWx0ZXJTZXJpZXMiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJzIiwibGVnZW5kUGF5bG9hZCIsImNvbG9yIiwiY2hhcnRUeXBlIiwibGVnZW5kQ29udGVudCIsInVzZU1lbW8iLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwibGVnZW5kIiwiZW5hYmxlZCIsInZlcnRpY2FsQWxpZ24iLCJjb250ZW50IiwibGFiZWxLZXkiLCJ4QXhpcyIsInBhZGRpbmciLCJsZWZ0IiwicmlnaHQiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5IiwiZmlsbCIsInN0YWNrSWQiLCJzdHJva2UiLCJkb3QiLCJ3aWR0aCIsImhlaWdodCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BQTZFO0FBQUEsTUFBcERDLGFBQW9ELFFBQXBEQSxhQUFvRDtBQUFBLE1BQXJDQyxRQUFxQyxRQUFyQ0EsUUFBcUM7QUFBQSxNQUEzQkMsV0FBMkIs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RSxZQUE3QztBQUEyREUsTUFBQUEsT0FBTyxFQUFFLE9BQXBFO0FBQTZFQyxNQUFBQSxNQUFNLEVBQUUsS0FBckY7QUFBNEZDLE1BQUFBLEdBQUcsRUFBRTtBQUFqRyxLQUZzQixFQUd0QjtBQUFFTCxNQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQmYsTUFBQUEsU0FBUyxFQUFFLE1BQTlCO0FBQXNDZ0IsTUFBQUEsT0FBTyxFQUFFLGNBQS9DO0FBQStERSxNQUFBQSxPQUFPLEVBQUUsT0FBeEU7QUFBaUZDLE1BQUFBLE1BQU0sRUFBRSxLQUF6RjtBQUFnR0MsTUFBQUEsR0FBRyxFQUFFO0FBQXJHLEtBSHNCO0FBYmdDLEdBQTFEO0FBb0JBLHNCQUNFLGdDQUFDLGlCQUFELHFCQUNFLG9FQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQywrQkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFQyxnQkFEUjtBQUVFLElBQUEsY0FBYyxFQUFFcEIsY0FGbEI7QUFHRSxJQUFBLGNBQWMsRUFBRVgsY0FIbEI7QUFJRSxJQUFBLGlCQUFpQixFQUFFRTtBQUpyQixJQURGLENBRkYsQ0FERjtBQWFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlckxlZ2VuZEl0ZW1JY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVjaGFydHMvbGVnZW5kJztcbmltcG9ydCB7IExlZ2VuZEl0ZW0sIExlZ2VuZEl0ZW1UZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVjaGFydHMvbGVnZW5kL3N0eWxlJztcbmltcG9ydCBTZXJpZXNDb21wb3NlZENoYXJ0LCB7IFNlcmllc0NvbXBvc2VkQ2hhcnRDb25maWd1cmF0aW9ucyB9IGZyb20gJy4uLy4uL3Nlcmllcy1jb21wb3NlZC1jaGFydCc7XG5pbXBvcnQgeyB1c2VGaWx0ZXJlZFNlcmllcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2hlbHBlcnMvaG9va3MnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzb24nO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBMZWdlbmRJdGVtcyB9IGZyb20gJy4vc3R5bGVkJztcblxuZnVuY3Rpb24gTGVnZW5kQ29udGVudCh7IGN1c3RvbVBheWxvYWQsIGZpbHRlcmVkLCBzZXRGaWx0ZXJlZCwgYWxpZ24gfTogYW55KSB7XG4gIGNvbnN0IHRvZ2dsZVNlcmllcyA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChzZXJpZXNOYW1lKSA9PiB7XG4gICAgICBzZXRGaWx0ZXJlZCgocHJldjogc3RyaW5nW10pID0+IHtcbiAgICAgICAgaWYgKCFmaWx0ZXJlZC5oYXMoc2VyaWVzTmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNldChmaWx0ZXJlZC5hZGQoc2VyaWVzTmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2V0KFsuLi5wcmV2XS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHNlcmllc05hbWUpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW2N1c3RvbVBheWxvYWQsIGZpbHRlcmVkXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExlZ2VuZEl0ZW1zIGRhdGEtYWxpZ249e2FsaWdufT5cbiAgICAgIHtjdXN0b21QYXlsb2FkLm1hcCgoeyBpZCwgbmFtZSwgLi4ucmVzdCB9OiBhbnkpID0+IHtcbiAgICAgICAgaWQgPSBpZCA/PyBuYW1lO1xuICAgICAgICBjb25zdCBpbmFjdGl2ZSA9IGZpbHRlcmVkLmhhcyhpZCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExlZ2VuZEl0ZW0ga2V5PXtpZH0gb25DbGljaz17KCkgPT4gdG9nZ2xlU2VyaWVzKGlkKX0gZGF0YS1pbmFjdGl2ZT17aW5hY3RpdmV9PlxuICAgICAgICAgICAge3JlbmRlckxlZ2VuZEl0ZW1JY29uKHJlc3QsIGluYWN0aXZlKX1cbiAgICAgICAgICAgIDxMZWdlbmRJdGVtVGV4dD57bmFtZX08L0xlZ2VuZEl0ZW1UZXh0PlxuICAgICAgICAgIDwvTGVnZW5kSXRlbT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvTGVnZW5kSXRlbXM+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IFtmaWx0ZXJlZFNlcmllcywgc2V0RmlsdGVyZWRTZXJpZXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgLy8g4p2H77iPIFNURVAgMVxuICBjb25zdCBmaWx0ZXJTZXJpZXMgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAodmFsdWVzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0RmlsdGVyZWRTZXJpZXModmFsdWVzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcyA9IG5ldyBTZXQodmFsdWVzKTtcbiAgICAgIGlmIChzLmhhcygnaHVtYW4nKSkge1xuICAgICAgICBzLmFkZCgnTWFsZScpO1xuICAgICAgICBzLmFkZCgnRmVtYWxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzLmRlbGV0ZSgnTWFsZScpO1xuICAgICAgICBzLmRlbGV0ZSgnRmVtYWxlJyk7XG4gICAgICB9XG4gICAgICBzZXRGaWx0ZXJlZFNlcmllcyhBcnJheS5mcm9tKHMpKTtcbiAgICB9LFxuICAgIFtzZXRGaWx0ZXJlZFNlcmllc11cbiAgKTtcblxuICAvLyDinYfvuI8gU1RFUCAyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlRmlsdGVyZWRTZXJpZXMoZmlsdGVyZWRTZXJpZXMsIGZpbHRlclNlcmllcyk7XG5cbiAgLy8g4p2H77iPIFNURVAgM1xuICBjb25zdCBsZWdlbmRQYXlsb2FkID0gW1xuICAgIHtcbiAgICAgIGlkOiAnVVYnLFxuICAgICAgbmFtZTogJ0NsaWNrIG1lIHRvIHRvZ2dsZSBVVicsXG4gICAgICBjb2xvcjogJyNjY2MnLFxuICAgICAgY2hhcnRUeXBlOiAnYmFyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnaHVtYW4nLFxuICAgICAgbmFtZTogJ0NsaWNrIG1lIHRvIHRvZ2dsZSBVVicsXG4gICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICBjaGFydFR5cGU6ICdsaW5lJyxcbiAgICB9LFxuICBdO1xuXG4gIC8vIOKdh++4jyBTVEVQIDRcbiAgY29uc3QgbGVnZW5kQ29udGVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiA8TGVnZW5kQ29udGVudCBjdXN0b21QYXlsb2FkPXtsZWdlbmRQYXlsb2FkfSBmaWx0ZXJlZD17ZmlsdGVyZWR9IHNldEZpbHRlcmVkPXtzZXRGaWx0ZXJlZH0gLz47XG4gIH0sIFtsZWdlbmRQYXlsb2FkLCBmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdKTtcblxuICBjb25zdCBjb25maWd1cmF0aW9uczogU2VyaWVzQ29tcG9zZWRDaGFydENvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIGxlZ2VuZDoge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAvLyDinYfvuI8gU1RFUCA1XG4gICAgICBjb250ZW50OiBsZWdlbmRDb250ZW50LFxuICAgIH0sXG4gICAgbGFiZWxLZXk6ICduYW1lJyxcbiAgICB4QXhpczoge1xuICAgICAgcGFkZGluZzogeyBsZWZ0OiAyMCwgcmlnaHQ6IDIwIH0sXG4gICAgfSxcbiAgICBzdWJTZXJpZXNDb25maWd1cmF0aW9uOiBbXG4gICAgICB7IGxhYmVsOiAnVVYnLCBkYXRhS2V5OiAndXYnLCBmaWxsOiAnI2NjYycgfSxcbiAgICAgIHsgbGFiZWw6ICdNYWxlJywgY2hhcnRUeXBlOiAnbGluZScsIGRhdGFLZXk6ICdodW1hbi1tYWxlJywgc3RhY2tJZDogJ2h1bWFuJywgc3Ryb2tlOiAncmVkJywgZG90OiBudWxsIH0sXG4gICAgICB7IGxhYmVsOiAnRmVtYWxlJywgY2hhcnRUeXBlOiAnbGluZScsIGRhdGFLZXk6ICdodW1hbi1mZW1hbGUnLCBzdGFja0lkOiAnaHVtYW4nLCBzdHJva2U6ICdyZWQnLCBkb3Q6IG51bGwgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMT5DdXN0b20gTGVnZW5kIENvbnRlbnQ8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFNlcmllc0NvbXBvc2VkQ2hhcnRcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc31cbiAgICAgICAgICBmaWx0ZXJlZFNlcmllcz17ZmlsdGVyZWRTZXJpZXN9XG4gICAgICAgICAgc2V0RmlsdGVyZWRTZXJpZXM9e2ZpbHRlclNlcmllc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl19