"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = Content;

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _lodash = require("lodash");

var _rechartsBarChart = _interopRequireDefault(require("../../recharts-bar-chart"));

function Content(_ref) {
  var dataCount = _ref.dataCount;
  var data = (0, _react.useMemo)(function () {
    var now = (0, _moment["default"])();
    var ret = (0, _from["default"])(new Array(dataCount), function () {
      return {
        date: now.add(1, 'days').toISOString(),
        "new": (0, _lodash.round)(Math.random() * 10),
        solved: -(0, _lodash.round)(Math.random() * 10)
      };
    });
    return ret;
  }, [dataCount]);
  var configurations = {
    withTooltip: true,
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'MM-DD'
    },
    xAxis: {
      name: ''
    },
    yAxis: {
      name: 'Mock Value'
    },
    subSeriesConfiguration: [{
      label: 'New Issues',
      dataKey: 'new',
      stackId: 'issue'
    }, {
      label: 'Solved Issues',
      dataKey: 'solved',
      stackId: 'issue'
    }],
    stackOffset: 'sign',
    valueFormatter: function valueFormatter(v) {
      return Math.abs(v);
    }
  }; // HERE
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'brush' does not exist on type '{ withToo... Remove this comment to see the full error message

  configurations.brush = {
    enabled: true,
    dataKey: configurations.labelKey,
    stroke: '#828487',
    fill: 'rgba(199,220,250,0.4)',
    travellerWidth: 10
  }; // cant have brush & tick, brush would overlap tick
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'tick' does not exist on type '{ name: st... Remove this comment to see the full error message

  configurations.xAxis.tick = null;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Zoom"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600,
      paddingBottom: 100
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: data,
    configurations: configurations
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL3pvb20vY29udGVudC50c3giXSwibmFtZXMiOlsiQ29udGVudCIsImRhdGFDb3VudCIsImRhdGEiLCJub3ciLCJyZXQiLCJBcnJheSIsImRhdGUiLCJhZGQiLCJ0b0lTT1N0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzb2x2ZWQiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsInR5cGUiLCJmb3JtYXQiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsInN1YlNlcmllc0NvbmZpZ3VyYXRpb24iLCJsYWJlbCIsImRhdGFLZXkiLCJzdGFja0lkIiwic3RhY2tPZmZzZXQiLCJ2YWx1ZUZvcm1hdHRlciIsInYiLCJhYnMiLCJicnVzaCIsImVuYWJsZWQiLCJzdHJva2UiLCJmaWxsIiwidHJhdmVsbGVyV2lkdGgiLCJ0aWNrIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRWUsU0FBU0EsT0FBVCxPQUFxQztBQUFBLE1BQWxCQyxTQUFrQixRQUFsQkEsU0FBa0I7QUFDbEQsTUFBTUMsSUFBSSxHQUFHLG9CQUFRLFlBQU07QUFDekIsUUFBTUMsR0FBRyxHQUFHLHlCQUFaO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLHNCQUFXLElBQUlDLEtBQUosQ0FBVUosU0FBVixDQUFYLEVBQWlDO0FBQUEsYUFBTztBQUNsREssUUFBQUEsSUFBSSxFQUFFSCxHQUFHLENBQUNJLEdBQUosQ0FBUSxDQUFSLEVBQVcsTUFBWCxFQUFtQkMsV0FBbkIsRUFENEM7QUFFbEQsZUFBSyxtQkFBTUMsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQXRCLENBRjZDO0FBR2xEQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQyxtQkFBTUYsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQXRCO0FBSHlDLE9BQVA7QUFBQSxLQUFqQyxDQUFaO0FBTUEsV0FBT04sR0FBUDtBQUNELEdBVFksRUFTVixDQUFDSCxTQUFELENBVFUsQ0FBYjtBQVdBLE1BQU1XLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFFBQVEsRUFBRSxNQUZXO0FBR3JCQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsSUFBSSxFQUFFLFdBRFE7QUFFZEMsTUFBQUEsTUFBTSxFQUFFO0FBRk0sS0FISztBQU9yQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBUGM7QUFVckJDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVZjO0FBYXJCRSxJQUFBQSxzQkFBc0IsRUFBRSxDQUN0QjtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsWUFBVDtBQUF1QkMsTUFBQUEsT0FBTyxFQUFFLEtBQWhDO0FBQXVDQyxNQUFBQSxPQUFPLEVBQUU7QUFBaEQsS0FEc0IsRUFFdEI7QUFBRUYsTUFBQUEsS0FBSyxFQUFFLGVBQVQ7QUFBMEJDLE1BQUFBLE9BQU8sRUFBRSxRQUFuQztBQUE2Q0MsTUFBQUEsT0FBTyxFQUFFO0FBQXRELEtBRnNCLENBYkg7QUFpQnJCQyxJQUFBQSxXQUFXLEVBQUUsTUFqQlE7QUFrQnJCQyxJQUFBQSxjQUFjLEVBQUUsd0JBQUNDLENBQUQ7QUFBQSxhQUFZbEIsSUFBSSxDQUFDbUIsR0FBTCxDQUFTRCxDQUFULENBQVo7QUFBQTtBQWxCSyxHQUF2QixDQVprRCxDQWdDbEQ7QUFDQTs7QUFDQWYsRUFBQUEsY0FBYyxDQUFDaUIsS0FBZixHQUF1QjtBQUNyQkMsSUFBQUEsT0FBTyxFQUFFLElBRFk7QUFFckJQLElBQUFBLE9BQU8sRUFBRVgsY0FBYyxDQUFDRSxRQUZIO0FBR3JCaUIsSUFBQUEsTUFBTSxFQUFFLFNBSGE7QUFJckJDLElBQUFBLElBQUksRUFBRSx1QkFKZTtBQUtyQkMsSUFBQUEsY0FBYyxFQUFFO0FBTEssR0FBdkIsQ0FsQ2tELENBeUNsRDtBQUNBOztBQUNBckIsRUFBQUEsY0FBYyxDQUFDTSxLQUFmLENBQXFCZ0IsSUFBckIsR0FBNEIsSUFBNUI7QUFDQSxzQkFDRSwwREFDRSxtREFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFLEdBQXRCO0FBQTJCQyxNQUFBQSxhQUFhLEVBQUU7QUFBMUM7QUFBWixrQkFDRSxnQ0FBQyw0QkFBRDtBQUFrQixJQUFBLElBQUksRUFBRW5DLElBQXhCO0FBQThCLElBQUEsY0FBYyxFQUFFVTtBQUE5QyxJQURGLENBRkYsQ0FERjtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVjaGFydHNCYXJDaGFydCBmcm9tICcuLi8uLi9yZWNoYXJ0cy1iYXItY2hhcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHsgZGF0YUNvdW50IH06IGFueSkge1xuICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gbW9tZW50KCk7XG4gICAgY29uc3QgcmV0ID0gQXJyYXkuZnJvbShuZXcgQXJyYXkoZGF0YUNvdW50KSwgKCkgPT4gKHtcbiAgICAgIGRhdGU6IG5vdy5hZGQoMSwgJ2RheXMnKS50b0lTT1N0cmluZygpLFxuICAgICAgbmV3OiByb3VuZChNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgc29sdmVkOiAtcm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9LCBbZGF0YUNvdW50XSk7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgbGFiZWxLZXk6ICdkYXRlJyxcbiAgICBsYWJlbEZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ0RBVEVfVElNRScsXG4gICAgICBmb3JtYXQ6ICdNTS1ERCcsXG4gICAgfSxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJycsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ01vY2sgVmFsdWUnLFxuICAgIH0sXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW1xuICAgICAgeyBsYWJlbDogJ05ldyBJc3N1ZXMnLCBkYXRhS2V5OiAnbmV3Jywgc3RhY2tJZDogJ2lzc3VlJyB9LFxuICAgICAgeyBsYWJlbDogJ1NvbHZlZCBJc3N1ZXMnLCBkYXRhS2V5OiAnc29sdmVkJywgc3RhY2tJZDogJ2lzc3VlJyB9LFxuICAgIF0sXG4gICAgc3RhY2tPZmZzZXQ6ICdzaWduJyxcbiAgICB2YWx1ZUZvcm1hdHRlcjogKHY6IGFueSkgPT4gTWF0aC5hYnModiksXG4gIH07XG4gIC8vIEhFUkVcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAnYnJ1c2gnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3sgd2l0aFRvby4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gIGNvbmZpZ3VyYXRpb25zLmJydXNoID0ge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZGF0YUtleTogY29uZmlndXJhdGlvbnMubGFiZWxLZXksXG4gICAgc3Ryb2tlOiAnIzgyODQ4NycsXG4gICAgZmlsbDogJ3JnYmEoMTk5LDIyMCwyNTAsMC40KScsXG4gICAgdHJhdmVsbGVyV2lkdGg6IDEwLFxuICB9O1xuICAvLyBjYW50IGhhdmUgYnJ1c2ggJiB0aWNrLCBicnVzaCB3b3VsZCBvdmVybGFwIHRpY2tcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMzkpIEZJWE1FOiBQcm9wZXJ0eSAndGljaycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAneyBuYW1lOiBzdC4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gIGNvbmZpZ3VyYXRpb25zLnhBeGlzLnRpY2sgPSBudWxsO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Wm9vbTwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA4MDAsIGhlaWdodDogNjAwLCBwYWRkaW5nQm90dG9tOiAxMDAgfX0+XG4gICAgICAgIDxSZWNoYXJ0c0JhckNoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19