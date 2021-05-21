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
  var series = _mock["default"].dataSets[index].dataSet;
  var composingScatters = [{
    key: 'scatter-outliers',
    name: 'Outlier',
    dataKey: 'outlier',
    data: [{
      date: '2020-04-16T16:00:00.000Z',
      outlier: 500
    }, {
      date: '2020-05-01T16:00:00.000Z',
      outlier: 180
    }, {
      date: '2020-05-12T16:00:00.000Z',
      outlier: 2180
    } // extend yAxis domain
    ],
    r: 20,
    fill: 'orange',
    labelProps: {
      position: 'top',
      textAnchor: 'middle',
      fill: 'red',
      offset: 10,
      dataKey: 'outlier'
    }
  }];
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: false
    },
    composingScatters: composingScatters,
    interpolationType: 'linear',
    storkeColor: '#CA4521',
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
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Composing Scatters"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: series,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Composing Scatters';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9jb21wb3Npbmctc2NhdHRlcnMudHN4Il0sIm5hbWVzIjpbImNvbnRlbnQiLCJDb250ZW50IiwiaW5kZXgiLCJzZXJpZXMiLCJkYXRhIiwiZGF0YVNldHMiLCJkYXRhU2V0IiwiY29tcG9zaW5nU2NhdHRlcnMiLCJrZXkiLCJuYW1lIiwiZGF0YUtleSIsImRhdGUiLCJvdXRsaWVyIiwiciIsImZpbGwiLCJsYWJlbFByb3BzIiwicG9zaXRpb24iLCJ0ZXh0QW5jaG9yIiwib2Zmc2V0IiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsImxlZ2VuZCIsImVuYWJsZWQiLCJpbnRlcnBvbGF0aW9uVHlwZSIsInN0b3JrZUNvbG9yIiwicmVmUmVncmVzc2lvblR5cGUiLCJyZWZSZWdyZXNzaW9uQ29sb3IiLCJ4QXhpcyIsInlBeGlzIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsInR5cGUiLCJmb3JtYXQiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEMsTUFBTUMsS0FBSyxHQUFHLENBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLGlCQUFLQyxRQUFMLENBQWNILEtBQWQsRUFBcUJJLE9BQXBDO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDeEI7QUFDRUMsSUFBQUEsR0FBRyxFQUFFLGtCQURQO0FBRUVDLElBQUFBLElBQUksRUFBRSxTQUZSO0FBR0VDLElBQUFBLE9BQU8sRUFBRSxTQUhYO0FBSUVOLElBQUFBLElBQUksRUFBRSxDQUNKO0FBQUVPLE1BQUFBLElBQUksRUFBRSwwQkFBUjtBQUFvQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQTdDLEtBREksRUFFSjtBQUFFRCxNQUFBQSxJQUFJLEVBQUUsMEJBQVI7QUFBb0NDLE1BQUFBLE9BQU8sRUFBRTtBQUE3QyxLQUZJLEVBR0o7QUFBRUQsTUFBQUEsSUFBSSxFQUFFLDBCQUFSO0FBQW9DQyxNQUFBQSxPQUFPLEVBQUU7QUFBN0MsS0FISSxDQUdpRDtBQUhqRCxLQUpSO0FBU0VDLElBQUFBLENBQUMsRUFBRSxFQVRMO0FBVUVDLElBQUFBLElBQUksRUFBRSxRQVZSO0FBV0VDLElBQUFBLFVBQVUsRUFBRTtBQUNWQyxNQUFBQSxRQUFRLEVBQUUsS0FEQTtBQUVWQyxNQUFBQSxVQUFVLEVBQUUsUUFGRjtBQUdWSCxNQUFBQSxJQUFJLEVBQUUsS0FISTtBQUlWSSxNQUFBQSxNQUFNLEVBQUUsRUFKRTtBQUtWUixNQUFBQSxPQUFPLEVBQUU7QUFMQztBQVhkLEdBRHdCLENBQTFCO0FBc0JBLE1BQU1TLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESCxLQUZhO0FBS3JCZixJQUFBQSxpQkFBaUIsRUFBakJBLGlCQUxxQjtBQU1yQmdCLElBQUFBLGlCQUFpQixFQUFFLFFBTkU7QUFPckJDLElBQUFBLFdBQVcsRUFBRSxTQVBRO0FBUXJCQyxJQUFBQSxpQkFBaUIsRUFBRSxrQkFSRTtBQVNyQkMsSUFBQUEsa0JBQWtCLEVBQUUsU0FUQztBQVVyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xsQixNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVZjO0FBYXJCbUIsSUFBQUEsS0FBSyxFQUFFO0FBQ0xuQixNQUFBQSxJQUFJLEVBQUU7QUFERCxLQWJjO0FBZ0JyQm9CLElBQUFBLFFBQVEsRUFBRSxNQWhCVztBQWlCckJDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxJQUFJLEVBQUUsV0FEUTtBQUVkQyxNQUFBQSxNQUFNLEVBQUU7QUFGTTtBQWpCSyxHQUF2QjtBQXVCQSxzQkFDRSwwREFDRSxpRUFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsaUNBQUQ7QUFBdUIsSUFBQSxJQUFJLEVBQUUvQixNQUE3QjtBQUFxQyxJQUFBLGNBQWMsRUFBRWdCO0FBQXJELElBREYsQ0FGRixDQURGO0FBUUQsQ0F6RE07OztBQTBEQSxJQUFNVixJQUFJLEdBQUcsb0JBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpbmdsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGluZGV4ID0gMDtcbiAgY29uc3Qgc2VyaWVzID0gZGF0YS5kYXRhU2V0c1tpbmRleF0uZGF0YVNldDtcblxuICBjb25zdCBjb21wb3NpbmdTY2F0dGVycyA9IFtcbiAgICB7XG4gICAgICBrZXk6ICdzY2F0dGVyLW91dGxpZXJzJyxcbiAgICAgIG5hbWU6ICdPdXRsaWVyJyxcbiAgICAgIGRhdGFLZXk6ICdvdXRsaWVyJyxcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgeyBkYXRlOiAnMjAyMC0wNC0xNlQxNjowMDowMC4wMDBaJywgb3V0bGllcjogNTAwIH0sXG4gICAgICAgIHsgZGF0ZTogJzIwMjAtMDUtMDFUMTY6MDA6MDAuMDAwWicsIG91dGxpZXI6IDE4MCB9LFxuICAgICAgICB7IGRhdGU6ICcyMDIwLTA1LTEyVDE2OjAwOjAwLjAwMFonLCBvdXRsaWVyOiAyMTgwIH0sIC8vIGV4dGVuZCB5QXhpcyBkb21haW5cbiAgICAgIF0sXG4gICAgICByOiAyMCxcbiAgICAgIGZpbGw6ICdvcmFuZ2UnLFxuICAgICAgbGFiZWxQcm9wczoge1xuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIHRleHRBbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICBmaWxsOiAncmVkJyxcbiAgICAgICAgb2Zmc2V0OiAxMCxcbiAgICAgICAgZGF0YUtleTogJ291dGxpZXInLFxuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIGxlZ2VuZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBjb21wb3NpbmdTY2F0dGVycyxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ2xpbmVhcicsXG4gICAgc3RvcmtlQ29sb3I6ICcjQ0E0NTIxJyxcbiAgICByZWZSZWdyZXNzaW9uVHlwZTogJ3JlZ3Jlc3Npb25MaW5lYXInLFxuICAgIHJlZlJlZ3Jlc3Npb25Db2xvcjogJyMyMTUyY2EnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q29tcG9zaW5nIFNjYXR0ZXJzPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxTaW5nbGVTZXJpZXNMaW5lQ2hhcnQgZGF0YT17c2VyaWVzfSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdDb21wb3NpbmcgU2NhdHRlcnMnO1xuIl19