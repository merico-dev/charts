"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _singleSeriesLineChart = _interopRequireDefault(require("../single-series-line-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

var content = function Content() {
  var index = 0;
  var configurations = {
    withTooltip: true,
    withLegend: false,
    interpolationType: 'linear',
    storkeColor: '#CA4521',
    refInterpolationType: '',
    refInterpolationColor: '#2152ca',
    refRegressionType: 'regressionLinear',
    refRegressionColor: '#2152ca',
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
    referenceDots: [{
      key: 'ref-dot-1',
      fill: 'white',
      stroke: 'red',
      strokeWidth: 10,
      r: 20,
      x: '2020-04-22T16:00:00.000Z',
      y: 2002
    }, {
      key: 'ref-dot-2',
      fill: 'blue',
      stroke: 'none',
      r: 10,
      x: '2020-05-10T16:00:00.000Z',
      y: 1262,
      labelProps: {
        text: 'with label',
        fill: 'blue',
        textAnchor: 'middle',
        position: 'top'
      }
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Reference Dots"), /*#__PURE__*/_react["default"].createElement("div", {
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
var name = 'Reference Dots';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9yZWZlcmVuY2UtZG90cy50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJpbmRleCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJzdG9ya2VDb2xvciIsInJlZkludGVycG9sYXRpb25UeXBlIiwicmVmSW50ZXJwb2xhdGlvbkNvbG9yIiwicmVmUmVncmVzc2lvblR5cGUiLCJyZWZSZWdyZXNzaW9uQ29sb3IiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0IiwicmVmZXJlbmNlRG90cyIsImtleSIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInIiLCJ4IiwieSIsImxhYmVsUHJvcHMiLCJ0ZXh0IiwidGV4dEFuY2hvciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwiZGF0YVNldHMiLCJkYXRhU2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUNBLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxLQUZTO0FBR3JCQyxJQUFBQSxpQkFBaUIsRUFBRSxRQUhFO0FBSXJCQyxJQUFBQSxXQUFXLEVBQUUsU0FKUTtBQUtyQkMsSUFBQUEsb0JBQW9CLEVBQUUsRUFMRDtBQU1yQkMsSUFBQUEscUJBQXFCLEVBQUUsU0FORjtBQU9yQkMsSUFBQUEsaUJBQWlCLEVBQUUsa0JBUEU7QUFRckJDLElBQUFBLGtCQUFrQixFQUFFLFNBUkM7QUFTckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVRjO0FBWXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FaYztBQWVyQkUsSUFBQUEsUUFBUSxFQUFFLE1BZlc7QUFnQnJCQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsSUFBSSxFQUFFLFdBRFE7QUFFZEMsTUFBQUEsTUFBTSxFQUFFO0FBRk0sS0FoQks7QUFvQnJCQyxJQUFBQSxhQUFhLEVBQUUsQ0FDYjtBQUNFQyxNQUFBQSxHQUFHLEVBQUUsV0FEUDtBQUVFQyxNQUFBQSxJQUFJLEVBQUUsT0FGUjtBQUdFQyxNQUFBQSxNQUFNLEVBQUUsS0FIVjtBQUlFQyxNQUFBQSxXQUFXLEVBQUUsRUFKZjtBQUtFQyxNQUFBQSxDQUFDLEVBQUUsRUFMTDtBQU1FQyxNQUFBQSxDQUFDLEVBQUUsMEJBTkw7QUFPRUMsTUFBQUEsQ0FBQyxFQUFFO0FBUEwsS0FEYSxFQVViO0FBQ0VOLE1BQUFBLEdBQUcsRUFBRSxXQURQO0FBRUVDLE1BQUFBLElBQUksRUFBRSxNQUZSO0FBR0VDLE1BQUFBLE1BQU0sRUFBRSxNQUhWO0FBSUVFLE1BQUFBLENBQUMsRUFBRSxFQUpMO0FBS0VDLE1BQUFBLENBQUMsRUFBRSwwQkFMTDtBQU1FQyxNQUFBQSxDQUFDLEVBQUUsSUFOTDtBQU9FQyxNQUFBQSxVQUFVLEVBQUU7QUFDVkMsUUFBQUEsSUFBSSxFQUFFLFlBREk7QUFFVlAsUUFBQUEsSUFBSSxFQUFFLE1BRkk7QUFHVlEsUUFBQUEsVUFBVSxFQUFFLFFBSEY7QUFJVkMsUUFBQUEsUUFBUSxFQUFFO0FBSkE7QUFQZCxLQVZhO0FBcEJNLEdBQXZCO0FBOENBLHNCQUNFLDBEQUNFLDZEQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyxpQ0FBRDtBQUF1QixJQUFBLElBQUksRUFBRUMsaUJBQUtDLFFBQUwsQ0FBY2hDLEtBQWQsRUFBcUJpQyxPQUFsRDtBQUEyRCxJQUFBLGNBQWMsRUFBRWhDO0FBQTNFLElBREYsQ0FGRixDQURGO0FBUUQsQ0F4RE07OztBQXlEQSxJQUFNVSxJQUFJLEdBQUcsZ0JBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpbmdsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGluZGV4ID0gMDtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogZmFsc2UsXG4gICAgaW50ZXJwb2xhdGlvblR5cGU6ICdsaW5lYXInLFxuICAgIHN0b3JrZUNvbG9yOiAnI0NBNDUyMScsXG4gICAgcmVmSW50ZXJwb2xhdGlvblR5cGU6ICcnLFxuICAgIHJlZkludGVycG9sYXRpb25Db2xvcjogJyMyMTUyY2EnLFxuICAgIHJlZlJlZ3Jlc3Npb25UeXBlOiAncmVncmVzc2lvbkxpbmVhcicsXG4gICAgcmVmUmVncmVzc2lvbkNvbG9yOiAnIzIxNTJjYScsXG4gICAgeEF4aXM6IHtcbiAgICAgIG5hbWU6ICdEYXRlJyxcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICBuYW1lOiAnRGV2IEVxdWl2YWxlbnQnLFxuICAgIH0sXG4gICAgbGFiZWxLZXk6ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ0RBVEVfVElNRScsXG4gICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICB9LFxuICAgIHJlZmVyZW5jZURvdHM6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmVmLWRvdC0xJyxcbiAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgc3Ryb2tlOiAncmVkJyxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEwLFxuICAgICAgICByOiAyMCxcbiAgICAgICAgeDogJzIwMjAtMDQtMjJUMTY6MDA6MDAuMDAwWicsXG4gICAgICAgIHk6IDIwMDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdyZWYtZG90LTInLFxuICAgICAgICBmaWxsOiAnYmx1ZScsXG4gICAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgICByOiAxMCxcbiAgICAgICAgeDogJzIwMjAtMDUtMTBUMTY6MDA6MDAuMDAwWicsXG4gICAgICAgIHk6IDEyNjIsXG4gICAgICAgIGxhYmVsUHJvcHM6IHtcbiAgICAgICAgICB0ZXh0OiAnd2l0aCBsYWJlbCcsXG4gICAgICAgICAgZmlsbDogJ2JsdWUnLFxuICAgICAgICAgIHRleHRBbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlJlZmVyZW5jZSBEb3RzPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxTaW5nbGVTZXJpZXNMaW5lQ2hhcnQgZGF0YT17ZGF0YS5kYXRhU2V0c1tpbmRleF0uZGF0YVNldH0gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnUmVmZXJlbmNlIERvdHMnO1xuIl19