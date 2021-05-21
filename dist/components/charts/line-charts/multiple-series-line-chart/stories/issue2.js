"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _multipleSeriesLineChart = _interopRequireDefault(require("../multiple-series-line-chart"));

var _mock = _interopRequireDefault(require("./mocks/mock.json"));

require("semantic-ui-css/semantic.min.css");

var content = function Content() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

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
    // HERE
    onClick: function onClick(props) {
      if (!props || !props.activePayload) {
        return;
      }

      setOpened(true);
    }
  }; // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.

  var close = (0, _react.useCallback)(function () {
    setOpened(false);
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Issues - 2"), /*#__PURE__*/_react["default"].createElement("h2", null, "Not resuming focus after clicking chart, hence cannot activate tooltip"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_multipleSeriesLineChart["default"], {
    series: _mock["default"].dataSets,
    configurations: configurations
  }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Confirm, {
    open: opened,
    onCancel: close,
    onConfirm: close
  })));
};

exports.content = content;
var name = 'Issues - 2';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydC9zdG9yaWVzL2lzc3VlMi50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwid2l0aExlZ2VuZCIsImludGVycG9sYXRpb25UeXBlIiwieEF4aXMiLCJuYW1lIiwieUF4aXMiLCJzZXJpZXNEYXRhS2V5Iiwic2VyaWVzTmFtZUtleSIsInNlcmllc05hbWVGb3JtYXR0ZXIiLCJzZXJpZXMiLCJkZXZlbG9wZXIiLCJwcmltYXJ5RW1haWwiLCJsYWJlbEtleSIsImxhYmVsRm9ybWF0dGVyIiwidHlwZSIsImZvcm1hdCIsIm9uQ2xpY2siLCJwcm9wcyIsImFjdGl2ZVBheWxvYWQiLCJjbG9zZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSIsImRhdGFTZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFBQSxrQkFDWixxQkFBUyxLQUFULENBRFk7QUFBQTtBQUFBLE1BQ2pDQyxNQURpQztBQUFBLE1BQ3pCQyxTQUR5Qjs7QUFHeEMsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxXQUFXLEVBQUUsSUFEUTtBQUVyQkMsSUFBQUEsVUFBVSxFQUFFLElBRlM7QUFHckJDLElBQUFBLGlCQUFpQixFQUFFLFVBSEU7QUFJckJDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQUpjO0FBT3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEQsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FQYztBQVVyQkUsSUFBQUEsYUFBYSxFQUFFLFNBVk07QUFXckJDLElBQUFBLGFBQWEsRUFBRSxpQkFYTTtBQVlyQkMsSUFBQUEsbUJBQW1CLEVBQUUsNkJBQUNDLE1BQUQ7QUFBQSx1QkFBb0JBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQk4sSUFBckMsZUFBOENLLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsWUFBL0Q7QUFBQSxLQVpBO0FBYXJCQyxJQUFBQSxRQUFRLEVBQUUsTUFiVztBQWNyQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RDLE1BQUFBLElBQUksRUFBRSxXQURRO0FBRWRDLE1BQUFBLE1BQU0sRUFBRTtBQUZNLEtBZEs7QUFrQnJCO0FBQ0FDLElBQUFBLE9BQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFnQjtBQUN2QixVQUFJLENBQUNBLEtBQUQsSUFBVSxDQUFDQSxLQUFLLENBQUNDLGFBQXJCLEVBQW9DO0FBQ2xDO0FBQ0Q7O0FBRURwQixNQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0Q7QUF6Qm9CLEdBQXZCLENBSHdDLENBOEJ4Qzs7QUFDQSxNQUFNcUIsS0FBSyxHQUFHLHdCQUFZLFlBQU07QUFDOUJyQixJQUFBQSxTQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0QsR0FGYSxDQUFkO0FBR0Esc0JBQ0UsMERBQ0UseURBREYsZUFFRSxxSEFGRixlQUdFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRXNCLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLG1DQUFEO0FBQXlCLElBQUEsTUFBTSxFQUFFQyxpQkFBS0MsUUFBdEM7QUFBZ0QsSUFBQSxjQUFjLEVBQUV4QjtBQUFoRSxJQURGLGVBRUUsZ0NBQUMsd0JBQUQ7QUFBUyxJQUFBLElBQUksRUFBRUYsTUFBZjtBQUF1QixJQUFBLFFBQVEsRUFBRXNCLEtBQWpDO0FBQXdDLElBQUEsU0FBUyxFQUFFQTtBQUFuRCxJQUZGLENBSEYsQ0FERjtBQVVELENBNUNNOzs7QUE2Q0EsSUFBTWYsSUFBSSxHQUFHLFlBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29uZmlybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBNdWx0aXBsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9tdWx0aXBsZS1zZXJpZXMtbGluZS1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2tzL21vY2suanNvbic7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIHdpdGhMZWdlbmQ6IHRydWUsXG4gICAgaW50ZXJwb2xhdGlvblR5cGU6ICdtb25vdG9uZScsXG4gICAgeEF4aXM6IHtcbiAgICAgIG5hbWU6ICdEYXRlJyxcbiAgICB9LFxuICAgIHlBeGlzOiB7XG4gICAgICBuYW1lOiAnRGV2IEVxdWl2YWxlbnQnLFxuICAgIH0sXG4gICAgc2VyaWVzRGF0YUtleTogJ2RhdGFTZXQnLFxuICAgIHNlcmllc05hbWVLZXk6ICdkZXZlbG9wZXIkLm5hbWUnLFxuICAgIHNlcmllc05hbWVGb3JtYXR0ZXI6IChzZXJpZXM6IGFueSkgPT4gYCR7c2VyaWVzLmRldmVsb3Blci5uYW1lfSA8JHtzZXJpZXMuZGV2ZWxvcGVyLnByaW1hcnlFbWFpbH0+YCxcbiAgICBsYWJlbEtleTogJ2RhdGUnLFxuICAgIGxhYmVsRm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnREFURV9USU1FJyxcbiAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgIH0sXG4gICAgLy8gSEVSRVxuICAgIG9uQ2xpY2s6IChwcm9wczogYW55KSA9PiB7XG4gICAgICBpZiAoIXByb3BzIHx8ICFwcm9wcy5hY3RpdmVQYXlsb2FkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0T3BlbmVkKHRydWUpO1xuICAgIH0sXG4gIH07XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTU0KSBGSVhNRTogRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgY29uc3QgY2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0T3BlbmVkKGZhbHNlKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Jc3N1ZXMgLSAyPC9oMT5cbiAgICAgIDxoMj5Ob3QgcmVzdW1pbmcgZm9jdXMgYWZ0ZXIgY2xpY2tpbmcgY2hhcnQsIGhlbmNlIGNhbm5vdCBhY3RpdmF0ZSB0b29sdGlwPC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxNdWx0aXBsZVNlcmllc0xpbmVDaGFydCBzZXJpZXM9e2RhdGEuZGF0YVNldHN9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgICAgPENvbmZpcm0gb3Blbj17b3BlbmVkfSBvbkNhbmNlbD17Y2xvc2V9IG9uQ29uZmlybT17Y2xvc2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgbmFtZSA9ICdJc3N1ZXMgLSAyJztcbiJdfQ==