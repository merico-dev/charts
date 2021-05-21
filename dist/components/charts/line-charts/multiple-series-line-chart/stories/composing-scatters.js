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
    composingScatters: [{
      key: 'scatter-outliers',
      name: 'Outlier',
      dataKey: 'outlier',
      data: [{
        date: '2020-04-16T16:00:00.000Z',
        outlier: 1500
      }, {
        date: '2020-05-01T16:00:00.000Z',
        outlier: 2800
      }, {
        date: '2020-05-12T16:00:00.000Z',
        outlier: 13500
      } // extend yAxis domain
      ],
      r: 20,
      fill: 'orange',
      labelProps: {
        position: 'top',
        textAnchor: 'middle',
        fill: 'red',
        offset: 10,
        dataKey: 'outlier',
        fontSize: 11
      }
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Composing Scatters"), /*#__PURE__*/_react["default"].createElement("div", {
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
var name = 'Composing Scatters';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL2NvbXBvc2luZy1zY2F0dGVycy50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwid2l0aExlZ2VuZCIsImludGVycG9sYXRpb25UeXBlIiwieEF4aXMiLCJuYW1lIiwieUF4aXMiLCJzZXJpZXNEYXRhS2V5Iiwic2VyaWVzTmFtZUtleSIsInNlcmllc05hbWVGb3JtYXR0ZXIiLCJzZXJpZXMiLCJkZXZlbG9wZXIiLCJwcmltYXJ5RW1haWwiLCJsYWJlbEtleSIsImxhYmVsRm9ybWF0dGVyIiwidHlwZSIsImZvcm1hdCIsImNvbXBvc2luZ1NjYXR0ZXJzIiwia2V5IiwiZGF0YUtleSIsImRhdGEiLCJkYXRlIiwib3V0bGllciIsInIiLCJmaWxsIiwibGFiZWxQcm9wcyIsInBvc2l0aW9uIiwidGV4dEFuY2hvciIsIm9mZnNldCIsImZvbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhU2V0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEMsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxXQUFXLEVBQUUsSUFEUTtBQUVyQkMsSUFBQUEsVUFBVSxFQUFFLElBRlM7QUFHckJDLElBQUFBLGlCQUFpQixFQUFFLFVBSEU7QUFJckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQUpjO0FBT3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FQYztBQVVyQkUsSUFBQUEsYUFBYSxFQUFFLFNBVk07QUFXckJDLElBQUFBLGFBQWEsRUFBRSxpQkFYTTtBQVlyQkMsSUFBQUEsbUJBQW1CLEVBQUUsNkJBQUNDLE1BQUQ7QUFBQSx1QkFBb0JBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQk4sSUFBckMsZUFBOENLLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsWUFBL0Q7QUFBQSxLQVpBO0FBYXJCQyxJQUFBQSxRQUFRLEVBQUUsTUFiVztBQWNyQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxXQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNLEtBZEs7QUFrQnJCQyxJQUFBQSxpQkFBaUIsRUFBRSxDQUNqQjtBQUNFQyxNQUFBQSxHQUFHLEVBQUUsa0JBRFA7QUFFRWIsTUFBQUEsSUFBSSxFQUFFLFNBRlI7QUFHRWMsTUFBQUEsT0FBTyxFQUFFLFNBSFg7QUFJRUMsTUFBQUEsSUFBSSxFQUFFLENBQ0o7QUFBRUMsUUFBQUEsSUFBSSxFQUFFLDBCQUFSO0FBQW9DQyxRQUFBQSxPQUFPLEVBQUU7QUFBN0MsT0FESSxFQUVKO0FBQUVELFFBQUFBLElBQUksRUFBRSwwQkFBUjtBQUFvQ0MsUUFBQUEsT0FBTyxFQUFFO0FBQTdDLE9BRkksRUFHSjtBQUFFRCxRQUFBQSxJQUFJLEVBQUUsMEJBQVI7QUFBb0NDLFFBQUFBLE9BQU8sRUFBRTtBQUE3QyxPQUhJLENBR2tEO0FBSGxELE9BSlI7QUFTRUMsTUFBQUEsQ0FBQyxFQUFFLEVBVEw7QUFVRUMsTUFBQUEsSUFBSSxFQUFFLFFBVlI7QUFXRUMsTUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLFFBQUFBLFFBQVEsRUFBRSxLQURBO0FBRVZDLFFBQUFBLFVBQVUsRUFBRSxRQUZGO0FBR1ZILFFBQUFBLElBQUksRUFBRSxLQUhJO0FBSVZJLFFBQUFBLE1BQU0sRUFBRSxFQUpFO0FBS1ZULFFBQUFBLE9BQU8sRUFBRSxTQUxDO0FBTVZVLFFBQUFBLFFBQVEsRUFBRTtBQU5BO0FBWGQsS0FEaUI7QUFsQkUsR0FBdkI7QUF5Q0Esc0JBQ0UsMERBQ0UsaUVBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLG1DQUFEO0FBQXlCLElBQUEsTUFBTSxFQUFFWCxpQkFBS1ksUUFBdEM7QUFBZ0QsSUFBQSxjQUFjLEVBQUVoQztBQUFoRSxJQURGLENBRkYsQ0FERjtBQVFELENBbERNOzs7QUFtREEsSUFBTUssSUFBSSxHQUFHLG9CQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNdWx0aXBsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2tzL21vY2suanNvbic7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogdHJ1ZSxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZTogJ21vbm90b25lJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ0RhdGUnLFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXYgRXF1aXZhbGVudCcsXG4gICAgfSxcbiAgICBzZXJpZXNEYXRhS2V5OiAnZGF0YVNldCcsXG4gICAgc2VyaWVzTmFtZUtleTogJ2RldmVsb3BlciQubmFtZScsXG4gICAgc2VyaWVzTmFtZUZvcm1hdHRlcjogKHNlcmllczogYW55KSA9PiBgJHtzZXJpZXMuZGV2ZWxvcGVyLm5hbWV9IDwke3Nlcmllcy5kZXZlbG9wZXIucHJpbWFyeUVtYWlsfT5gLFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgfSxcbiAgICBjb21wb3NpbmdTY2F0dGVyczogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdzY2F0dGVyLW91dGxpZXJzJyxcbiAgICAgICAgbmFtZTogJ091dGxpZXInLFxuICAgICAgICBkYXRhS2V5OiAnb3V0bGllcicsXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7IGRhdGU6ICcyMDIwLTA0LTE2VDE2OjAwOjAwLjAwMFonLCBvdXRsaWVyOiAxNTAwIH0sXG4gICAgICAgICAgeyBkYXRlOiAnMjAyMC0wNS0wMVQxNjowMDowMC4wMDBaJywgb3V0bGllcjogMjgwMCB9LFxuICAgICAgICAgIHsgZGF0ZTogJzIwMjAtMDUtMTJUMTY6MDA6MDAuMDAwWicsIG91dGxpZXI6IDEzNTAwIH0sIC8vIGV4dGVuZCB5QXhpcyBkb21haW5cbiAgICAgICAgXSxcbiAgICAgICAgcjogMjAsXG4gICAgICAgIGZpbGw6ICdvcmFuZ2UnLFxuICAgICAgICBsYWJlbFByb3BzOiB7XG4gICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgIHRleHRBbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgIGZpbGw6ICdyZWQnLFxuICAgICAgICAgIG9mZnNldDogMTAsXG4gICAgICAgICAgZGF0YUtleTogJ291dGxpZXInLFxuICAgICAgICAgIGZvbnRTaXplOiAxMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNvbXBvc2luZyBTY2F0dGVyczwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8TXVsdGlwbGVTZXJpZXNMaW5lQ2hhcnQgc2VyaWVzPXtkYXRhLmRhdGFTZXRzfSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdDb21wb3NpbmcgU2NhdHRlcnMnO1xuIl19