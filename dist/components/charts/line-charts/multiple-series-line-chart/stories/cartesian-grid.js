"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _multipleSeriesLineChart = _interopRequireDefault(require("../multiple-series-line-chart"));

var _mock = _interopRequireDefault(require("./mocks/mock.json"));

var content = function Content() {
  var configurations = {
    withTooltip: true,
    withLegend: true,
    cartesianGrid: {
      // HERE
      horizontal: true,
      vertical: false
    },
    cartesianGridStyle: {
      // AND HERE
      stroke: '#DEDFE3'
    },
    interpolationType: 'monotone',
    xAxis: {
      name: 'Date'
    },
    yAxis: {
      name: 'Dev Equivalent'
    },
    seriesDataKey: 'dataSet',
    seriesNameKey: 'developer$.name',
    seriesNameFormatter: function seriesNameFormatter(series) {
      return "".concat(series.developer.name, " <").concat(series.developer.primaryEmail, ">");
    },
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD'
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Customize Cartesian Grid Lines"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: _mock["default"].dataSets,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Cartesian Grid';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL2NhcnRlc2lhbi1ncmlkLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwiY2FydGVzaWFuR3JpZCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImNhcnRlc2lhbkdyaWRTdHlsZSIsInN0cm9rZSIsImludGVycG9sYXRpb25UeXBlIiwieEF4aXMiLCJuYW1lIiwieUF4aXMiLCJzZXJpZXNEYXRhS2V5Iiwic2VyaWVzTmFtZUtleSIsInNlcmllc05hbWVGb3JtYXR0ZXIiLCJzZXJpZXMiLCJkZXZlbG9wZXIiLCJwcmltYXJ5RW1haWwiLCJsYWJlbEtleSIsImxhYmVsRm9ybWF0dGVyIiwidHlwZSIsImZvcm1hdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSIsImRhdGFTZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFdBQVcsRUFBRSxJQURRO0FBRXJCQyxJQUFBQSxVQUFVLEVBQUUsSUFGUztBQUdyQkMsSUFBQUEsYUFBYSxFQUFFO0FBQ2I7QUFDQUMsTUFBQUEsVUFBVSxFQUFFLElBRkM7QUFHYkMsTUFBQUEsUUFBUSxFQUFFO0FBSEcsS0FITTtBQVFyQkMsSUFBQUEsa0JBQWtCLEVBQUU7QUFDbEI7QUFDQUMsTUFBQUEsTUFBTSxFQUFFO0FBRlUsS0FSQztBQVlyQkMsSUFBQUEsaUJBQWlCLEVBQUUsVUFaRTtBQWFyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBYmM7QUFnQnJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FoQmM7QUFtQnJCRSxJQUFBQSxhQUFhLEVBQUUsU0FuQk07QUFvQnJCQyxJQUFBQSxhQUFhLEVBQUUsaUJBcEJNO0FBcUJyQkMsSUFBQUEsbUJBQW1CLEVBQUUsNkJBQUNDLE1BQUQ7QUFBQSx1QkFBb0JBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQk4sSUFBckMsZUFBOENLLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsWUFBL0Q7QUFBQSxLQXJCQTtBQXNCckJDLElBQUFBLFFBQVEsRUFBRSxNQXRCVztBQXVCckJDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxJQUFJLEVBQUUsV0FEUTtBQUVkQyxNQUFBQSxNQUFNLEVBQUU7QUFGTTtBQXZCSyxHQUF2QjtBQTRCQSxzQkFDRSwwREFDRSw2RUFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsbUNBQUQ7QUFBeUIsSUFBQSxNQUFNLEVBQUVDLGlCQUFLQyxRQUF0QztBQUFnRCxJQUFBLGNBQWMsRUFBRXpCO0FBQWhFLElBREYsQ0FGRixDQURGO0FBUUQsQ0FyQ007OztBQXNDQSxJQUFNVSxJQUFJLEdBQUcsZ0JBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE11bHRpcGxlU2VyaWVzTGluZUNoYXJ0IGZyb20gJy4uL211bHRpcGxlLXNlcmllcy1saW5lLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9ja3MvbW9jay5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiB0cnVlLFxuICAgIGNhcnRlc2lhbkdyaWQ6IHtcbiAgICAgIC8vIEhFUkVcbiAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgfSxcbiAgICBjYXJ0ZXNpYW5HcmlkU3R5bGU6IHtcbiAgICAgIC8vIEFORCBIRVJFXG4gICAgICBzdHJva2U6ICcjREVERkUzJyxcbiAgICB9LFxuICAgIGludGVycG9sYXRpb25UeXBlOiAnbW9ub3RvbmUnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIHNlcmllc0RhdGFLZXk6ICdkYXRhU2V0JyxcbiAgICBzZXJpZXNOYW1lS2V5OiAnZGV2ZWxvcGVyJC5uYW1lJyxcbiAgICBzZXJpZXNOYW1lRm9ybWF0dGVyOiAoc2VyaWVzOiBhbnkpID0+IGAke3Nlcmllcy5kZXZlbG9wZXIubmFtZX0gPCR7c2VyaWVzLmRldmVsb3Blci5wcmltYXJ5RW1haWx9PmAsXG4gICAgbGFiZWxLZXk6ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ0RBVEVfVElNRScsXG4gICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q3VzdG9taXplIENhcnRlc2lhbiBHcmlkIExpbmVzPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxNdWx0aXBsZVNlcmllc0xpbmVDaGFydCBzZXJpZXM9e2RhdGEuZGF0YVNldHN9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0NhcnRlc2lhbiBHcmlkJztcbiJdfQ==