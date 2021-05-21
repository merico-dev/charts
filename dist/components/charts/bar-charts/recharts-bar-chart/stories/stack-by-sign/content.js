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
      name: 'Mock Value',
      padding: {
        top: 15,
        bottom: 15
      }
    },
    subSeriesConfiguration: [{
      label: 'New Issues',
      dataKey: 'new',
      stackId: 'issue',
      valueLabel: {
        enabled: true
      }
    }, {
      label: 'Solved Issues',
      dataKey: 'solved',
      stackId: 'issue',
      valueLabel: {
        enabled: true,
        position: 'outsideBottom',
        valueAccessor: function valueAccessor(row) {
          return row.solved;
        },
        formatter: function formatter(v) {
          return v === 0 ? '' : Math.abs(v);
        }
      }
    }],
    stackOffset: 'sign',
    valueFormatter: function valueFormatter(v) {
      return Math.abs(v);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Stack by Sign"), /*#__PURE__*/_react["default"].createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL3N0YWNrLWJ5LXNpZ24vY29udGVudC50c3giXSwibmFtZXMiOlsiQ29udGVudCIsImRhdGFDb3VudCIsImRhdGEiLCJub3ciLCJyZXQiLCJBcnJheSIsImRhdGUiLCJhZGQiLCJ0b0lTT1N0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzb2x2ZWQiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsInR5cGUiLCJmb3JtYXQiLCJ4QXhpcyIsIm5hbWUiLCJ5QXhpcyIsInBhZGRpbmciLCJ0b3AiLCJib3R0b20iLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5Iiwic3RhY2tJZCIsInZhbHVlTGFiZWwiLCJlbmFibGVkIiwicG9zaXRpb24iLCJ2YWx1ZUFjY2Vzc29yIiwicm93IiwiZm9ybWF0dGVyIiwidiIsImFicyIsInN0YWNrT2Zmc2V0IiwidmFsdWVGb3JtYXR0ZXIiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFZSxTQUFTQSxPQUFULE9BQXFDO0FBQUEsTUFBbEJDLFNBQWtCLFFBQWxCQSxTQUFrQjtBQUNsRCxNQUFNQyxJQUFJLEdBQUcsb0JBQVEsWUFBTTtBQUN6QixRQUFNQyxHQUFHLEdBQUcseUJBQVo7QUFDQSxRQUFNQyxHQUFHLEdBQUcsc0JBQVcsSUFBSUMsS0FBSixDQUFVSixTQUFWLENBQVgsRUFBaUM7QUFBQSxhQUFPO0FBQ2xESyxRQUFBQSxJQUFJLEVBQUVILEdBQUcsQ0FBQ0ksR0FBSixDQUFRLENBQVIsRUFBVyxNQUFYLEVBQW1CQyxXQUFuQixFQUQ0QztBQUVsRCxlQUFLLG1CQUFNQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBdEIsQ0FGNkM7QUFHbERDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLG1CQUFNRixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBdEI7QUFIeUMsT0FBUDtBQUFBLEtBQWpDLENBQVo7QUFNQSxXQUFPTixHQUFQO0FBQ0QsR0FUWSxFQVNWLENBQUNILFNBQUQsQ0FUVSxDQUFiO0FBV0EsTUFBTVcsY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxXQUFXLEVBQUUsSUFEUTtBQUVyQkMsSUFBQUEsUUFBUSxFQUFFLE1BRlc7QUFHckJDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxJQUFJLEVBQUUsV0FEUTtBQUVkQyxNQUFBQSxNQUFNLEVBQUU7QUFGTSxLQUhLO0FBT3JCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FQYztBQVVyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLElBQUksRUFBRSxZQUREO0FBRUxFLE1BQUFBLE9BQU8sRUFBRTtBQUFFQyxRQUFBQSxHQUFHLEVBQUUsRUFBUDtBQUFXQyxRQUFBQSxNQUFNLEVBQUU7QUFBbkI7QUFGSixLQVZjO0FBY3JCQyxJQUFBQSxzQkFBc0IsRUFBRSxDQUN0QjtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsWUFBVDtBQUF1QkMsTUFBQUEsT0FBTyxFQUFFLEtBQWhDO0FBQXVDQyxNQUFBQSxPQUFPLEVBQUUsT0FBaEQ7QUFBeURDLE1BQUFBLFVBQVUsRUFBRTtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFyRSxLQURzQixFQUV0QjtBQUNFSixNQUFBQSxLQUFLLEVBQUUsZUFEVDtBQUVFQyxNQUFBQSxPQUFPLEVBQUUsUUFGWDtBQUdFQyxNQUFBQSxPQUFPLEVBQUUsT0FIWDtBQUlFQyxNQUFBQSxVQUFVLEVBQUU7QUFDVkMsUUFBQUEsT0FBTyxFQUFFLElBREM7QUFFVkMsUUFBQUEsUUFBUSxFQUFFLGVBRkE7QUFHVkMsUUFBQUEsYUFBYSxFQUFFLHVCQUFDQyxHQUFEO0FBQUEsaUJBQWNBLEdBQUcsQ0FBQ3JCLE1BQWxCO0FBQUEsU0FITDtBQUlWc0IsUUFBQUEsU0FBUyxFQUFFLG1CQUFDQyxDQUFEO0FBQUEsaUJBQWdCQSxDQUFDLEtBQUssQ0FBTixHQUFVLEVBQVYsR0FBZXpCLElBQUksQ0FBQzBCLEdBQUwsQ0FBU0QsQ0FBVCxDQUEvQjtBQUFBO0FBSkQ7QUFKZCxLQUZzQixDQWRIO0FBNEJyQkUsSUFBQUEsV0FBVyxFQUFFLE1BNUJRO0FBNkJyQkMsSUFBQUEsY0FBYyxFQUFFLHdCQUFDSCxDQUFEO0FBQUEsYUFBWXpCLElBQUksQ0FBQzBCLEdBQUwsQ0FBU0QsQ0FBVCxDQUFaO0FBQUE7QUE3QkssR0FBdkI7QUErQkEsc0JBQ0UsMERBQ0UsNERBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVJLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRSxHQUF0QjtBQUEyQkMsTUFBQUEsYUFBYSxFQUFFO0FBQTFDO0FBQVosa0JBQ0UsZ0NBQUMsNEJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUV0QyxJQUF4QjtBQUE4QixJQUFBLGNBQWMsRUFBRVU7QUFBOUMsSUFERixDQUZGLENBREY7QUFRRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlY2hhcnRzQmFyQ2hhcnQgZnJvbSAnLi4vLi4vcmVjaGFydHMtYmFyLWNoYXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudCh7IGRhdGFDb3VudCB9OiBhbnkpIHtcbiAgY29uc3QgZGF0YSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgIGNvbnN0IHJldCA9IEFycmF5LmZyb20obmV3IEFycmF5KGRhdGFDb3VudCksICgpID0+ICh7XG4gICAgICBkYXRlOiBub3cuYWRkKDEsICdkYXlzJykudG9JU09TdHJpbmcoKSxcbiAgICAgIG5ldzogcm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgIHNvbHZlZDogLXJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSwgW2RhdGFDb3VudF0pO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIHdpdGhUb29sdGlwOiB0cnVlLFxuICAgIGxhYmVsS2V5OiAnZGF0ZScsXG4gICAgbGFiZWxGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdEQVRFX1RJTUUnLFxuICAgICAgZm9ybWF0OiAnTU0tREQnLFxuICAgIH0sXG4gICAgeEF4aXM6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgIH0sXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdNb2NrIFZhbHVlJyxcbiAgICAgIHBhZGRpbmc6IHsgdG9wOiAxNSwgYm90dG9tOiAxNSB9LFxuICAgIH0sXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW1xuICAgICAgeyBsYWJlbDogJ05ldyBJc3N1ZXMnLCBkYXRhS2V5OiAnbmV3Jywgc3RhY2tJZDogJ2lzc3VlJywgdmFsdWVMYWJlbDogeyBlbmFibGVkOiB0cnVlIH0gfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdTb2x2ZWQgSXNzdWVzJyxcbiAgICAgICAgZGF0YUtleTogJ3NvbHZlZCcsXG4gICAgICAgIHN0YWNrSWQ6ICdpc3N1ZScsXG4gICAgICAgIHZhbHVlTGFiZWw6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiAnb3V0c2lkZUJvdHRvbScsXG4gICAgICAgICAgdmFsdWVBY2Nlc3NvcjogKHJvdzogYW55KSA9PiByb3cuc29sdmVkLFxuICAgICAgICAgIGZvcm1hdHRlcjogKHY6IG51bWJlcikgPT4gKHYgPT09IDAgPyAnJyA6IE1hdGguYWJzKHYpKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzdGFja09mZnNldDogJ3NpZ24nLFxuICAgIHZhbHVlRm9ybWF0dGVyOiAodjogYW55KSA9PiBNYXRoLmFicyh2KSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlN0YWNrIGJ5IFNpZ248L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCwgcGFkZGluZ0JvdHRvbTogMTAwIH19PlxuICAgICAgICA8UmVjaGFydHNCYXJDaGFydCBkYXRhPXtkYXRhfSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==