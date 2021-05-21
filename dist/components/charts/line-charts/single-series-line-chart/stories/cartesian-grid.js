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
      // HERE
      horizontal: true,
      vertical: false
    },
    cartesianGridStyle: {
      // AND HERE
      stroke: '#DEDFE3'
    },
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
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Customize Cartesian Grid"), /*#__PURE__*/_react["default"].createElement("div", {
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
var name = 'Cartesian Grid';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9jYXJ0ZXNpYW4tZ3JpZC50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJpbmRleCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwiY2FydGVzaWFuR3JpZCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImNhcnRlc2lhbkdyaWRTdHlsZSIsInN0cm9rZSIsImludGVycG9sYXRpb25UeXBlIiwic3RvcmtlQ29sb3IiLCJyZWZJbnRlcnBvbGF0aW9uVHlwZSIsInJlZkludGVycG9sYXRpb25Db2xvciIsInJlZlJlZ3Jlc3Npb25UeXBlIiwicmVmUmVncmVzc2lvbkNvbG9yIiwieEF4aXMiLCJuYW1lIiwieUF4aXMiLCJsYWJlbEtleSIsImxhYmVsRm9ybWF0dGVyIiwidHlwZSIsImZvcm1hdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSIsImRhdGFTZXRzIiwiZGF0YVNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEMsTUFBTUMsS0FBSyxHQUFHLENBQWQ7QUFDQSxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUUsS0FGUztBQUdyQkMsSUFBQUEsYUFBYSxFQUFFO0FBQ2I7QUFDQUMsTUFBQUEsVUFBVSxFQUFFLElBRkM7QUFHYkMsTUFBQUEsUUFBUSxFQUFFO0FBSEcsS0FITTtBQVFyQkMsSUFBQUEsa0JBQWtCLEVBQUU7QUFDbEI7QUFDQUMsTUFBQUEsTUFBTSxFQUFFO0FBRlUsS0FSQztBQVlyQkMsSUFBQUEsaUJBQWlCLEVBQUUsUUFaRTtBQWFyQkMsSUFBQUEsV0FBVyxFQUFFLFNBYlE7QUFjckJDLElBQUFBLG9CQUFvQixFQUFFLEVBZEQ7QUFlckJDLElBQUFBLHFCQUFxQixFQUFFLFNBZkY7QUFnQnJCQyxJQUFBQSxpQkFBaUIsRUFBRSxrQkFoQkU7QUFpQnJCQyxJQUFBQSxrQkFBa0IsRUFBRSxTQWpCQztBQWtCckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQWxCYztBQXFCckJDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQXJCYztBQXdCckJFLElBQUFBLFFBQVEsRUFBRSxNQXhCVztBQXlCckJDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxJQUFJLEVBQUUsV0FEUTtBQUVkQyxNQUFBQSxNQUFNLEVBQUU7QUFGTTtBQXpCSyxHQUF2QjtBQThCQSxzQkFDRSwwREFDRSx1RUFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsaUNBQUQ7QUFBdUIsSUFBQSxJQUFJLEVBQUVDLGlCQUFLQyxRQUFMLENBQWN6QixLQUFkLEVBQXFCMEIsT0FBbEQ7QUFBMkQsSUFBQSxjQUFjLEVBQUV6QjtBQUEzRSxJQURGLENBRkYsQ0FERjtBQVFELENBeENNOzs7QUF5Q0EsSUFBTWUsSUFBSSxHQUFHLGdCQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW5nbGVTZXJpZXNMaW5lQ2hhcnQgZnJvbSAnLi4vc2luZ2xlLXNlcmllcy1saW5lLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9jay5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBpbmRleCA9IDA7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIHdpdGhMZWdlbmQ6IGZhbHNlLFxuICAgIGNhcnRlc2lhbkdyaWQ6IHtcbiAgICAgIC8vIEhFUkVcbiAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgfSxcbiAgICBjYXJ0ZXNpYW5HcmlkU3R5bGU6IHtcbiAgICAgIC8vIEFORCBIRVJFXG4gICAgICBzdHJva2U6ICcjREVERkUzJyxcbiAgICB9LFxuICAgIGludGVycG9sYXRpb25UeXBlOiAnbGluZWFyJyxcbiAgICBzdG9ya2VDb2xvcjogJyNDQTQ1MjEnLFxuICAgIHJlZkludGVycG9sYXRpb25UeXBlOiAnJyxcbiAgICByZWZJbnRlcnBvbGF0aW9uQ29sb3I6ICcjMjE1MmNhJyxcbiAgICByZWZSZWdyZXNzaW9uVHlwZTogJ3JlZ3Jlc3Npb25MaW5lYXInLFxuICAgIHJlZlJlZ3Jlc3Npb25Db2xvcjogJyMyMTUyY2EnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkN1c3RvbWl6ZSBDYXJ0ZXNpYW4gR3JpZDwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8U2luZ2xlU2VyaWVzTGluZUNoYXJ0IGRhdGE9e2RhdGEuZGF0YVNldHNbaW5kZXhdLmRhdGFTZXR9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0NhcnRlc2lhbiBHcmlkJztcbiJdfQ==