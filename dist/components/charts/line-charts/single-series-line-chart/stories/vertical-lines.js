"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

var _singleSeriesLineChart = _interopRequireDefault(require("../single-series-line-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

var renderDot = function renderDot(props) {
  return /*#__PURE__*/_react["default"].createElement(Recharts.Dot, (0, _extends2["default"])({}, props, {
    fill: "rgb(237, 106, 69)",
    stroke: "#fff",
    r: 7,
    strokeWidth: 0
  }));
};

var content = function Content() {
  var index = 0;
  var configurations = {
    withTooltip: true,
    withLegend: false,
    cartesianGrid: {
      horizontal: false,
      vertical: false
    },
    cartesianGridStyle: {
      stroke: '#DEDFE3'
    },
    interpolationType: 'linear',
    storkeColor: 'rgb(240, 135, 106)',
    xAxis: {
      name: 'Date'
    },
    yAxis: {
      name: 'Dev Equivalent'
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD'
    },
    renderDot: renderDot,
    // HERE
    referenceLines: []
  }; // HERE

  (0, _react.useEffect)(function () {
    var _data = _mock["default"].dataSets[index].dataSet; // @ts-expect-error ts-migrate(2322) FIXME: Type '{ key: string; segmentData: { x: string; dat... Remove this comment to see the full error message

    configurations.referenceLines = _data.map(function (item) {
      var x = item.date;
      return {
        key: x,
        segmentData: [{
          x: x,
          date: x,
          y: 0
        }, {
          x: x,
          date: x,
          y: item.value
        }],
        // HERE
        stroke: 'rgb(222, 223, 227)',
        strokeDasharray: '0'
      };
    }); // @ts-expect-error ts-migrate(2339) FIXME: Property 'tooltipExcludedNames' does not exist on ... Remove this comment to see the full error message

    configurations.tooltipExcludedNames = _mock["default"].dataSets[index].dataSet.map(function (item) {
      return item.date;
    }); // FIXME: Nasty
  }, [index]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Vertical Lines from Dots"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: _mock["default"].dataSets[index].dataSet,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Vertical Lines';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy92ZXJ0aWNhbC1saW5lcy50c3giXSwibmFtZXMiOlsicmVuZGVyRG90IiwicHJvcHMiLCJjb250ZW50IiwiQ29udGVudCIsImluZGV4IiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsIndpdGhMZWdlbmQiLCJjYXJ0ZXNpYW5HcmlkIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiY2FydGVzaWFuR3JpZFN0eWxlIiwic3Ryb2tlIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJzdG9ya2VDb2xvciIsInhBeGlzIiwibmFtZSIsInlBeGlzIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsInR5cGUiLCJmb3JtYXQiLCJyZWZlcmVuY2VMaW5lcyIsIl9kYXRhIiwiZGF0YSIsImRhdGFTZXRzIiwiZGF0YVNldCIsIm1hcCIsIml0ZW0iLCJ4IiwiZGF0ZSIsImtleSIsInNlZ21lbnREYXRhIiwieSIsInZhbHVlIiwic3Ryb2tlRGFzaGFycmF5IiwidG9vbHRpcEV4Y2x1ZGVkTmFtZXMiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxzQkFDaEIsZ0NBQUMsUUFBRCxDQUFVLEdBQVYsZ0NBQWtCQSxLQUFsQjtBQUF5QixJQUFBLElBQUksRUFBQyxtQkFBOUI7QUFBa0QsSUFBQSxNQUFNLEVBQUMsTUFBekQ7QUFBZ0UsSUFBQSxDQUFDLEVBQUUsQ0FBbkU7QUFBc0UsSUFBQSxXQUFXLEVBQUU7QUFBbkYsS0FEZ0I7QUFBQSxDQUFsQjs7QUFJTyxJQUFNQyxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUNBLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxLQUZTO0FBR3JCQyxJQUFBQSxhQUFhLEVBQUU7QUFDYkMsTUFBQUEsVUFBVSxFQUFFLEtBREM7QUFFYkMsTUFBQUEsUUFBUSxFQUFFO0FBRkcsS0FITTtBQU9yQkMsSUFBQUEsa0JBQWtCLEVBQUU7QUFDbEJDLE1BQUFBLE1BQU0sRUFBRTtBQURVLEtBUEM7QUFVckJDLElBQUFBLGlCQUFpQixFQUFFLFFBVkU7QUFXckJDLElBQUFBLFdBQVcsRUFBRSxvQkFYUTtBQVlyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBWmM7QUFlckJDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQWZjO0FBa0JyQkUsSUFBQUEsUUFBUSxFQUFFLE1BbEJXO0FBbUJyQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxXQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNLEtBbkJLO0FBdUJyQnJCLElBQUFBLFNBQVMsRUFBVEEsU0F2QnFCO0FBdUJWO0FBQ1hzQixJQUFBQSxjQUFjLEVBQUU7QUF4QkssR0FBdkIsQ0FGd0MsQ0E2QnhDOztBQUNBLHdCQUFVLFlBQU07QUFDZCxRQUFNQyxLQUFLLEdBQUdDLGlCQUFLQyxRQUFMLENBQWNyQixLQUFkLEVBQXFCc0IsT0FBbkMsQ0FEYyxDQUVkOztBQUNBckIsSUFBQUEsY0FBYyxDQUFDaUIsY0FBZixHQUFnQ0MsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2xELFVBQU1DLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxJQUFmO0FBQ0EsYUFBTztBQUNMQyxRQUFBQSxHQUFHLEVBQUVGLENBREE7QUFFTEcsUUFBQUEsV0FBVyxFQUFFLENBQ1g7QUFBRUgsVUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLFVBQUFBLElBQUksRUFBRUQsQ0FBWDtBQUFjSSxVQUFBQSxDQUFDLEVBQUU7QUFBakIsU0FEVyxFQUVYO0FBQUVKLFVBQUFBLENBQUMsRUFBREEsQ0FBRjtBQUFLQyxVQUFBQSxJQUFJLEVBQUVELENBQVg7QUFBY0ksVUFBQUEsQ0FBQyxFQUFFTCxJQUFJLENBQUNNO0FBQXRCLFNBRlcsQ0FGUjtBQUtGO0FBQ0h0QixRQUFBQSxNQUFNLEVBQUUsb0JBTkg7QUFPTHVCLFFBQUFBLGVBQWUsRUFBRTtBQVBaLE9BQVA7QUFTRCxLQVgrQixDQUFoQyxDQUhjLENBZWQ7O0FBQ0E5QixJQUFBQSxjQUFjLENBQUMrQixvQkFBZixHQUFzQ1osaUJBQUtDLFFBQUwsQ0FBY3JCLEtBQWQsRUFBcUJzQixPQUFyQixDQUE2QkMsR0FBN0IsQ0FBaUMsVUFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ0UsSUFBZjtBQUFBLEtBQWpDLENBQXRDLENBaEJjLENBZ0IrRTtBQUM5RixHQWpCRCxFQWlCRyxDQUFDMUIsS0FBRCxDQWpCSDtBQWtCQSxzQkFDRSwwREFDRSx1RUFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRWlDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLGlDQUFEO0FBQXVCLElBQUEsSUFBSSxFQUFFZCxpQkFBS0MsUUFBTCxDQUFjckIsS0FBZCxFQUFxQnNCLE9BQWxEO0FBQTJELElBQUEsY0FBYyxFQUFFckI7QUFBM0UsSUFERixDQUZGLENBREY7QUFRRCxDQXhETTs7O0FBeURBLElBQU1XLElBQUksR0FBRyxnQkFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWNoYXJ0cyBmcm9tICdyZWNoYXJ0cyc7XG5pbXBvcnQgU2luZ2xlU2VyaWVzTGluZUNoYXJ0IGZyb20gJy4uL3NpbmdsZS1zZXJpZXMtbGluZS1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2suanNvbic7XG5cbmNvbnN0IHJlbmRlckRvdCA9IChwcm9wczogYW55KSA9PiAoXG4gIDxSZWNoYXJ0cy5Eb3Qgey4uLnByb3BzfSBmaWxsPVwicmdiKDIzNywgMTA2LCA2OSlcIiBzdHJva2U9XCIjZmZmXCIgcj17N30gc3Ryb2tlV2lkdGg9ezB9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGluZGV4ID0gMDtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogZmFsc2UsXG4gICAgY2FydGVzaWFuR3JpZDoge1xuICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgfSxcbiAgICBjYXJ0ZXNpYW5HcmlkU3R5bGU6IHtcbiAgICAgIHN0cm9rZTogJyNERURGRTMnLFxuICAgIH0sXG4gICAgaW50ZXJwb2xhdGlvblR5cGU6ICdsaW5lYXInLFxuICAgIHN0b3JrZUNvbG9yOiAncmdiKDI0MCwgMTM1LCAxMDYpJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ0RhdGUnLFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXYgRXF1aXZhbGVudCcsXG4gICAgfSxcbiAgICBsYWJlbEtleTogJ2RhdGUnLFxuICAgIGxhYmVsRm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnREFURV9USU1FJyxcbiAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgIH0sXG4gICAgcmVuZGVyRG90LCAvLyBIRVJFXG4gICAgcmVmZXJlbmNlTGluZXM6IFtdLFxuICB9O1xuXG4gIC8vIEhFUkVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBfZGF0YSA9IGRhdGEuZGF0YVNldHNbaW5kZXhdLmRhdGFTZXQ7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMjIpIEZJWE1FOiBUeXBlICd7IGtleTogc3RyaW5nOyBzZWdtZW50RGF0YTogeyB4OiBzdHJpbmc7IGRhdC4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgY29uZmlndXJhdGlvbnMucmVmZXJlbmNlTGluZXMgPSBfZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHggPSBpdGVtLmRhdGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IHgsXG4gICAgICAgIHNlZ21lbnREYXRhOiBbXG4gICAgICAgICAgeyB4LCBkYXRlOiB4LCB5OiAwIH0sXG4gICAgICAgICAgeyB4LCBkYXRlOiB4LCB5OiBpdGVtLnZhbHVlIH0sXG4gICAgICAgIF0sIC8vIEhFUkVcbiAgICAgICAgc3Ryb2tlOiAncmdiKDIyMiwgMjIzLCAyMjcpJyxcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnMCcsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyMzM5KSBGSVhNRTogUHJvcGVydHkgJ3Rvb2x0aXBFeGNsdWRlZE5hbWVzJyBkb2VzIG5vdCBleGlzdCBvbiAuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgIGNvbmZpZ3VyYXRpb25zLnRvb2x0aXBFeGNsdWRlZE5hbWVzID0gZGF0YS5kYXRhU2V0c1tpbmRleF0uZGF0YVNldC5tYXAoKGl0ZW0pID0+IGl0ZW0uZGF0ZSk7IC8vIEZJWE1FOiBOYXN0eVxuICB9LCBbaW5kZXhdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlZlcnRpY2FsIExpbmVzIGZyb20gRG90czwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8U2luZ2xlU2VyaWVzTGluZUNoYXJ0IGRhdGE9e2RhdGEuZGF0YVNldHNbaW5kZXhdLmRhdGFTZXR9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ1ZlcnRpY2FsIExpbmVzJztcbiJdfQ==