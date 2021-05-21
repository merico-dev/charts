"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.formatValue = formatValue;
exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _numeral = _interopRequireDefault(require("numeral"));

var _radarChart = _interopRequireDefault(require("../../radar-chart"));

var _data = _interopRequireDefault(require("./data.json"));

var overflowValue = 1.00000001;

function formatValue(value) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
  var minimumValueText = arguments.length > 2 ? arguments[2] : undefined;

  if (format === '0.00%' && value < 0.0001) {
    var text = minimumValueText || '< 0.01%';
    return value < 0.00000001 ? '0%' : text;
  }

  if (format === '0.00‰' && value < 0.00001) {
    var _text = minimumValueText || '< 0.01‰';

    return value < 0.000000001 ? '0‰' : _text;
  }

  return (0, _numeral["default"])(value).format(format);
}

var content = function Content() {
  var valueFormatter = function valueFormatter(v) {
    if (v === overflowValue) {
      return '>100%';
    }

    return formatValue(v, '0.00%');
  };

  var configurations = {
    angleField: 'metricName',
    radiusField: 'value',
    seriesField: 'name',
    radiusAxis: {
      grid: {
        line: {
          type: 'line'
        }
      },
      alternateColor: 'rgba(0, 0, 0, 0.04)',
      min: 0,
      max: 1
    },
    appendPadding: [0, 30, 0, 30],
    point: {
      shape: 'circle'
    },
    legend: {
      layout: 'horizontal',
      position: 'bottom'
    },
    valueFormatter: valueFormatter
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Advanced"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_radarChart["default"], {
    data: _data["default"],
    configurations: configurations
  })));
};

exports.content = content;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9yYWRhci1jaGFydHMvcmFkYXItY2hhcnQvc3Rvcmllcy9hZHZhbmNlZC9jb250ZW50LnRzeCJdLCJuYW1lcyI6WyJvdmVyZmxvd1ZhbHVlIiwiZm9ybWF0VmFsdWUiLCJ2YWx1ZSIsImZvcm1hdCIsIm1pbmltdW1WYWx1ZVRleHQiLCJ0ZXh0IiwiY29udGVudCIsIkNvbnRlbnQiLCJ2YWx1ZUZvcm1hdHRlciIsInYiLCJjb25maWd1cmF0aW9ucyIsImFuZ2xlRmllbGQiLCJyYWRpdXNGaWVsZCIsInNlcmllc0ZpZWxkIiwicmFkaXVzQXhpcyIsImdyaWQiLCJsaW5lIiwidHlwZSIsImFsdGVybmF0ZUNvbG9yIiwibWluIiwibWF4IiwiYXBwZW5kUGFkZGluZyIsInBvaW50Iiwic2hhcGUiLCJsZWdlbmQiLCJsYXlvdXQiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxVQUF0Qjs7QUFFTyxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE2RTtBQUFBLE1BQXpDQyxNQUF5Qyx1RUFBaEMsR0FBZ0M7QUFBQSxNQUEzQkMsZ0JBQTJCOztBQUNsRixNQUFJRCxNQUFNLEtBQUssT0FBWCxJQUFzQkQsS0FBSyxHQUFHLE1BQWxDLEVBQTBDO0FBQ3hDLFFBQU1HLElBQUksR0FBR0QsZ0JBQWdCLElBQUksU0FBakM7QUFDQSxXQUFPRixLQUFLLEdBQUcsVUFBUixHQUFxQixJQUFyQixHQUE0QkcsSUFBbkM7QUFDRDs7QUFDRCxNQUFJRixNQUFNLEtBQUssT0FBWCxJQUFzQkQsS0FBSyxHQUFHLE9BQWxDLEVBQTJDO0FBQ3pDLFFBQU1HLEtBQUksR0FBR0QsZ0JBQWdCLElBQUksU0FBakM7O0FBQ0EsV0FBT0YsS0FBSyxHQUFHLFdBQVIsR0FBc0IsSUFBdEIsR0FBNkJHLEtBQXBDO0FBQ0Q7O0FBQ0QsU0FBTyx5QkFBUUgsS0FBUixFQUFlQyxNQUFmLENBQXNCQSxNQUF0QixDQUFQO0FBQ0Q7O0FBRU0sSUFBTUcsT0FBTyxHQUFHLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQWU7QUFDcEMsUUFBSUEsQ0FBQyxLQUFLVCxhQUFWLEVBQXlCO0FBQ3ZCLGFBQU8sT0FBUDtBQUNEOztBQUNELFdBQU9DLFdBQVcsQ0FBQ1EsQ0FBRCxFQUFJLE9BQUosQ0FBbEI7QUFDRCxHQUxEOztBQU1BLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsVUFBVSxFQUFFLFlBRFM7QUFFckJDLElBQUFBLFdBQVcsRUFBRSxPQUZRO0FBR3JCQyxJQUFBQSxXQUFXLEVBQUUsTUFIUTtBQUlyQkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLE1BQUFBLElBQUksRUFBRTtBQUFFQyxRQUFBQSxJQUFJLEVBQUU7QUFBRUMsVUFBQUEsSUFBSSxFQUFFO0FBQVI7QUFBUixPQURJO0FBRVZDLE1BQUFBLGNBQWMsRUFBRSxxQkFGTjtBQUdWQyxNQUFBQSxHQUFHLEVBQUUsQ0FISztBQUlWQyxNQUFBQSxHQUFHLEVBQUU7QUFKSyxLQUpTO0FBVXJCQyxJQUFBQSxhQUFhLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLENBQVIsRUFBVyxFQUFYLENBVk07QUFXckJDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQVhjO0FBWXJCQyxJQUFBQSxNQUFNLEVBQUU7QUFBRUMsTUFBQUEsTUFBTSxFQUFFLFlBQVY7QUFBd0JDLE1BQUFBLFFBQVEsRUFBRTtBQUFsQyxLQVphO0FBYXJCbEIsSUFBQUEsY0FBYyxFQUFkQTtBQWJxQixHQUF2QjtBQWVBLHNCQUNFLDBEQUNFLHVEQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFbUIsTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsTUFBQUEsTUFBTSxFQUFFO0FBQXRCO0FBQVosa0JBQ0UsZ0NBQUMsc0JBQUQ7QUFBWSxJQUFBLElBQUksRUFBRUMsZ0JBQWxCO0FBQXdCLElBQUEsY0FBYyxFQUFFbkI7QUFBeEMsSUFERixDQUZGLENBREY7QUFRRCxDQTlCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJztcbmltcG9ydCBSYWRhckNoYXJ0IGZyb20gJy4uLy4uL3JhZGFyLWNoYXJ0JztcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS5qc29uJztcblxuY29uc3Qgb3ZlcmZsb3dWYWx1ZSA9IDEuMDAwMDAwMDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWx1ZTogbnVtYmVyLCBmb3JtYXQgPSAnMCcsIG1pbmltdW1WYWx1ZVRleHQ/OiBzdHJpbmcpIHtcbiAgaWYgKGZvcm1hdCA9PT0gJzAuMDAlJyAmJiB2YWx1ZSA8IDAuMDAwMSkge1xuICAgIGNvbnN0IHRleHQgPSBtaW5pbXVtVmFsdWVUZXh0IHx8ICc8IDAuMDElJztcbiAgICByZXR1cm4gdmFsdWUgPCAwLjAwMDAwMDAxID8gJzAlJyA6IHRleHQ7XG4gIH1cbiAgaWYgKGZvcm1hdCA9PT0gJzAuMDDigLAnICYmIHZhbHVlIDwgMC4wMDAwMSkge1xuICAgIGNvbnN0IHRleHQgPSBtaW5pbXVtVmFsdWVUZXh0IHx8ICc8IDAuMDHigLAnO1xuICAgIHJldHVybiB2YWx1ZSA8IDAuMDAwMDAwMDAxID8gJzDigLAnIDogdGV4dDtcbiAgfVxuICByZXR1cm4gbnVtZXJhbCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG59XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgdmFsdWVGb3JtYXR0ZXIgPSAodjogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHYgPT09IG92ZXJmbG93VmFsdWUpIHtcbiAgICAgIHJldHVybiAnPjEwMCUnO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0VmFsdWUodiwgJzAuMDAlJyk7XG4gIH07XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIGFuZ2xlRmllbGQ6ICdtZXRyaWNOYW1lJyxcbiAgICByYWRpdXNGaWVsZDogJ3ZhbHVlJyxcbiAgICBzZXJpZXNGaWVsZDogJ25hbWUnLFxuICAgIHJhZGl1c0F4aXM6IHtcbiAgICAgIGdyaWQ6IHsgbGluZTogeyB0eXBlOiAnbGluZScgfSB9LFxuICAgICAgYWx0ZXJuYXRlQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMSxcbiAgICB9LFxuICAgIGFwcGVuZFBhZGRpbmc6IFswLCAzMCwgMCwgMzBdLFxuICAgIHBvaW50OiB7IHNoYXBlOiAnY2lyY2xlJyB9LFxuICAgIGxlZ2VuZDogeyBsYXlvdXQ6ICdob3Jpem9udGFsJywgcG9zaXRpb246ICdib3R0b20nIH0sXG4gICAgdmFsdWVGb3JtYXR0ZXIsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5BZHZhbmNlZDwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA2MDAsIGhlaWdodDogNjAwIH19PlxuICAgICAgICA8UmFkYXJDaGFydCBkYXRhPXtkYXRhfSBjb25maWd1cmF0aW9ucz17Y29uZmlndXJhdGlvbnN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=