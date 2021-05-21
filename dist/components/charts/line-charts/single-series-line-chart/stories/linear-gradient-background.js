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
    extraAreas: [{
      name: 'backgroundDrop',
      fill: 'url(#background)',
      stroke: 'none'
    }],
    tooltipExcludedNames: ['backgroundDrop']
  };
  var definitions = [function () {
    return /*#__PURE__*/_react["default"].createElement("linearGradient", {
      key: "background",
      id: "background",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/_react["default"].createElement("stop", {
      offset: "5%",
      stopColor: "rgb(240, 135, 106)",
      stopOpacity: 1
    }), /*#__PURE__*/_react["default"].createElement("stop", {
      offset: "95%",
      stopColor: "rgb(240, 135, 106)",
      stopOpacity: 0
    }));
  }];
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Linear Gradient Background"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: _mock["default"].dataSets[index].dataSet,
    configurations: configurations,
    definitions: definitions
  })));
};

exports.content = content;
var name = 'Linear Gradient Background';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9saW5lYXItZ3JhZGllbnQtYmFja2dyb3VuZC50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJpbmRleCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwiY2FydGVzaWFuR3JpZCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImNhcnRlc2lhbkdyaWRTdHlsZSIsInN0cm9rZSIsImludGVycG9sYXRpb25UeXBlIiwic3RvcmtlQ29sb3IiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0IiwiZXh0cmFBcmVhcyIsImZpbGwiLCJ0b29sdGlwRXhjbHVkZWROYW1lcyIsImRlZmluaXRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwiZGF0YVNldHMiLCJkYXRhU2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUNBLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxLQUZTO0FBR3JCQyxJQUFBQSxhQUFhLEVBQUU7QUFDYkMsTUFBQUEsVUFBVSxFQUFFLEtBREM7QUFFYkMsTUFBQUEsUUFBUSxFQUFFO0FBRkcsS0FITTtBQU9yQkMsSUFBQUEsa0JBQWtCLEVBQUU7QUFDbEJDLE1BQUFBLE1BQU0sRUFBRTtBQURVLEtBUEM7QUFVckJDLElBQUFBLGlCQUFpQixFQUFFLFFBVkU7QUFXckJDLElBQUFBLFdBQVcsRUFBRSxvQkFYUTtBQVlyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBWmM7QUFlckJDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQWZjO0FBa0JyQkUsSUFBQUEsUUFBUSxFQUFFLE1BbEJXO0FBbUJyQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxXQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNLEtBbkJLO0FBdUJyQkMsSUFBQUEsVUFBVSxFQUFFLENBQ1Y7QUFDRU4sTUFBQUEsSUFBSSxFQUFFLGdCQURSO0FBRUVPLE1BQUFBLElBQUksRUFBRSxrQkFGUjtBQUdFWCxNQUFBQSxNQUFNLEVBQUU7QUFIVixLQURVLENBdkJTO0FBOEJyQlksSUFBQUEsb0JBQW9CLEVBQUUsQ0FBQyxnQkFBRDtBQTlCRCxHQUF2QjtBQWlDQSxNQUFNQyxXQUFXLEdBQUcsQ0FDbEI7QUFBQSx3QkFDRTtBQUFnQixNQUFBLEdBQUcsRUFBQyxZQUFwQjtBQUFpQyxNQUFBLEVBQUUsRUFBQyxZQUFwQztBQUFpRCxNQUFBLEVBQUUsRUFBQyxHQUFwRDtBQUF3RCxNQUFBLEVBQUUsRUFBQyxHQUEzRDtBQUErRCxNQUFBLEVBQUUsRUFBQyxHQUFsRTtBQUFzRSxNQUFBLEVBQUUsRUFBQztBQUF6RSxvQkFDRTtBQUFNLE1BQUEsTUFBTSxFQUFDLElBQWI7QUFBa0IsTUFBQSxTQUFTLEVBQUMsb0JBQTVCO0FBQWlELE1BQUEsV0FBVyxFQUFFO0FBQTlELE1BREYsZUFFRTtBQUFNLE1BQUEsTUFBTSxFQUFDLEtBQWI7QUFBbUIsTUFBQSxTQUFTLEVBQUMsb0JBQTdCO0FBQWtELE1BQUEsV0FBVyxFQUFFO0FBQS9ELE1BRkYsQ0FERjtBQUFBLEdBRGtCLENBQXBCO0FBU0Esc0JBQ0UsMERBQ0UseUVBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLGlDQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVDLGlCQUFLQyxRQUFMLENBQWN6QixLQUFkLEVBQXFCMEIsT0FEN0I7QUFFRSxJQUFBLGNBQWMsRUFBRXpCLGNBRmxCO0FBR0UsSUFBQSxXQUFXLEVBQUVvQjtBQUhmLElBREYsQ0FGRixDQURGO0FBWUQsQ0F4RE07OztBQXlEQSxJQUFNVCxJQUFJLEdBQUcsNEJBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpbmdsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGluZGV4ID0gMDtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogZmFsc2UsXG4gICAgY2FydGVzaWFuR3JpZDoge1xuICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgfSxcbiAgICBjYXJ0ZXNpYW5HcmlkU3R5bGU6IHtcbiAgICAgIHN0cm9rZTogJyNERURGRTMnLFxuICAgIH0sXG4gICAgaW50ZXJwb2xhdGlvblR5cGU6ICdsaW5lYXInLFxuICAgIHN0b3JrZUNvbG9yOiAncmdiKDI0MCwgMTM1LCAxMDYpJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ0RhdGUnLFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXYgRXF1aXZhbGVudCcsXG4gICAgfSxcbiAgICBsYWJlbEtleTogJ2RhdGUnLFxuICAgIGxhYmVsRm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnREFURV9USU1FJyxcbiAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgIH0sXG4gICAgZXh0cmFBcmVhczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnYmFja2dyb3VuZERyb3AnLFxuICAgICAgICBmaWxsOiAndXJsKCNiYWNrZ3JvdW5kKScsXG4gICAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHRvb2x0aXBFeGNsdWRlZE5hbWVzOiBbJ2JhY2tncm91bmREcm9wJ10sXG4gIH07XG5cbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBbXG4gICAgKCkgPT4gKFxuICAgICAgPGxpbmVhckdyYWRpZW50IGtleT1cImJhY2tncm91bmRcIiBpZD1cImJhY2tncm91bmRcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjBcIiB5Mj1cIjFcIj5cbiAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNSVcIiBzdG9wQ29sb3I9XCJyZ2IoMjQwLCAxMzUsIDEwNilcIiBzdG9wT3BhY2l0eT17MX0gLz5cbiAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTUlXCIgc3RvcENvbG9yPVwicmdiKDI0MCwgMTM1LCAxMDYpXCIgc3RvcE9wYWNpdHk9ezB9IC8+XG4gICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICksXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkxpbmVhciBHcmFkaWVudCBCYWNrZ3JvdW5kPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxTaW5nbGVTZXJpZXNMaW5lQ2hhcnRcbiAgICAgICAgICBkYXRhPXtkYXRhLmRhdGFTZXRzW2luZGV4XS5kYXRhU2V0fVxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc31cbiAgICAgICAgICBkZWZpbml0aW9ucz17ZGVmaW5pdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdMaW5lYXIgR3JhZGllbnQgQmFja2dyb3VuZCc7XG4iXX0=