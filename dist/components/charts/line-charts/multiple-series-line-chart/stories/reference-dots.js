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
    },
    referenceDots: [{
      key: 'ref-dot-1',
      fill: 'white',
      stroke: 'red',
      strokeWidth: 10,
      r: 20,
      x: '2020-04-22T16:00:00.000Z',
      y: 6402
    }, {
      key: 'ref-dot-2',
      fill: 'blue',
      stroke: 'none',
      r: 10,
      x: '2020-05-10T16:00:00.000Z',
      y: 5262,
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
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: _mock["default"].dataSets,
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Reference Dots';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL3JlZmVyZW5jZS1kb3RzLnRzeCJdLCJuYW1lcyI6WyJjb250ZW50IiwiQ29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwid2l0aFRvb2x0aXAiLCJ3aXRoTGVnZW5kIiwiaW50ZXJwb2xhdGlvblR5cGUiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsInNlcmllc0RhdGFLZXkiLCJzZXJpZXNOYW1lS2V5Iiwic2VyaWVzTmFtZUZvcm1hdHRlciIsInNlcmllcyIsImRldmVsb3BlciIsInByaW1hcnlFbWFpbCIsImxhYmVsS2V5IiwibGFiZWxGb3JtYXR0ZXIiLCJ0eXBlIiwiZm9ybWF0IiwicmVmZXJlbmNlRG90cyIsImtleSIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInIiLCJ4IiwieSIsImxhYmVsUHJvcHMiLCJ0ZXh0IiwidGV4dEFuY2hvciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwiZGF0YVNldHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxJQUZTO0FBR3JCQyxJQUFBQSxpQkFBaUIsRUFBRSxVQUhFO0FBSXJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FKYztBQU9yQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLElBQUksRUFBRTtBQURELEtBUGM7QUFVckJFLElBQUFBLGFBQWEsRUFBRSxTQVZNO0FBV3JCQyxJQUFBQSxhQUFhLEVBQUUsaUJBWE07QUFZckJDLElBQUFBLG1CQUFtQixFQUFFLDZCQUFDQyxNQUFEO0FBQUEsdUJBQW9CQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJOLElBQXJDLGVBQThDSyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFlBQS9EO0FBQUEsS0FaQTtBQWFyQkMsSUFBQUEsUUFBUSxFQUFFLE1BYlc7QUFjckJDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxJQUFJLEVBQUUsV0FEUTtBQUVkQyxNQUFBQSxNQUFNLEVBQUU7QUFGTSxLQWRLO0FBa0JyQkMsSUFBQUEsYUFBYSxFQUFFLENBQ2I7QUFDRUMsTUFBQUEsR0FBRyxFQUFFLFdBRFA7QUFFRUMsTUFBQUEsSUFBSSxFQUFFLE9BRlI7QUFHRUMsTUFBQUEsTUFBTSxFQUFFLEtBSFY7QUFJRUMsTUFBQUEsV0FBVyxFQUFFLEVBSmY7QUFLRUMsTUFBQUEsQ0FBQyxFQUFFLEVBTEw7QUFNRUMsTUFBQUEsQ0FBQyxFQUFFLDBCQU5MO0FBT0VDLE1BQUFBLENBQUMsRUFBRTtBQVBMLEtBRGEsRUFVYjtBQUNFTixNQUFBQSxHQUFHLEVBQUUsV0FEUDtBQUVFQyxNQUFBQSxJQUFJLEVBQUUsTUFGUjtBQUdFQyxNQUFBQSxNQUFNLEVBQUUsTUFIVjtBQUlFRSxNQUFBQSxDQUFDLEVBQUUsRUFKTDtBQUtFQyxNQUFBQSxDQUFDLEVBQUUsMEJBTEw7QUFNRUMsTUFBQUEsQ0FBQyxFQUFFLElBTkw7QUFPRUMsTUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLFFBQUFBLElBQUksRUFBRSxZQURJO0FBRVZQLFFBQUFBLElBQUksRUFBRSxNQUZJO0FBR1ZRLFFBQUFBLFVBQVUsRUFBRSxRQUhGO0FBSVZDLFFBQUFBLFFBQVEsRUFBRTtBQUpBO0FBUGQsS0FWYTtBQWxCTSxHQUF2QjtBQTRDQSxzQkFDRSwwREFDRSw2REFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsbUNBQUQ7QUFBeUIsSUFBQSxNQUFNLEVBQUVDLGlCQUFLQyxRQUF0QztBQUFnRCxJQUFBLGNBQWMsRUFBRWhDO0FBQWhFLElBREYsQ0FGRixDQURGO0FBUUQsQ0FyRE07OztBQXNEQSxJQUFNSyxJQUFJLEdBQUcsZ0JBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE11bHRpcGxlU2VyaWVzTGluZUNoYXJ0IGZyb20gJy4uL211bHRpcGxlLXNlcmllcy1saW5lLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vbW9ja3MvbW9jay5qc29uJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICB3aXRoTGVnZW5kOiB0cnVlLFxuICAgIGludGVycG9sYXRpb25UeXBlOiAnbW9ub3RvbmUnLFxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnRGF0ZScsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ0RldiBFcXVpdmFsZW50JyxcbiAgICB9LFxuICAgIHNlcmllc0RhdGFLZXk6ICdkYXRhU2V0JyxcbiAgICBzZXJpZXNOYW1lS2V5OiAnZGV2ZWxvcGVyJC5uYW1lJyxcbiAgICBzZXJpZXNOYW1lRm9ybWF0dGVyOiAoc2VyaWVzOiBhbnkpID0+IGAke3Nlcmllcy5kZXZlbG9wZXIubmFtZX0gPCR7c2VyaWVzLmRldmVsb3Blci5wcmltYXJ5RW1haWx9PmAsXG4gICAgbGFiZWxLZXk6ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ0RBVEVfVElNRScsXG4gICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICB9LFxuICAgIHJlZmVyZW5jZURvdHM6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmVmLWRvdC0xJyxcbiAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgc3Ryb2tlOiAncmVkJyxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEwLFxuICAgICAgICByOiAyMCxcbiAgICAgICAgeDogJzIwMjAtMDQtMjJUMTY6MDA6MDAuMDAwWicsXG4gICAgICAgIHk6IDY0MDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdyZWYtZG90LTInLFxuICAgICAgICBmaWxsOiAnYmx1ZScsXG4gICAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgICByOiAxMCxcbiAgICAgICAgeDogJzIwMjAtMDUtMTBUMTY6MDA6MDAuMDAwWicsXG4gICAgICAgIHk6IDUyNjIsXG4gICAgICAgIGxhYmVsUHJvcHM6IHtcbiAgICAgICAgICB0ZXh0OiAnd2l0aCBsYWJlbCcsXG4gICAgICAgICAgZmlsbDogJ2JsdWUnLFxuICAgICAgICAgIHRleHRBbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlJlZmVyZW5jZSBEb3RzPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxNdWx0aXBsZVNlcmllc0xpbmVDaGFydCBzZXJpZXM9e2RhdGEuZGF0YVNldHN9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ1JlZmVyZW5jZSBEb3RzJztcbiJdfQ==