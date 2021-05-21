"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _radarChart = _interopRequireDefault(require("../radar-chart"));

var _mock = _interopRequireDefault(require("./mock.json"));

var content = function Content() {
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
      min: 0,
      max: 1
    },
    line: {
      visible: true
    },
    point: {
      visible: true,
      shape: 'circle'
    },
    legend: {
      visible: true,
      position: 'bottom-center'
    },
    valueFormatter: function valueFormatter(v) {
      return v;
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Basic"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_radarChart["default"], {
    data: _mock["default"],
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Basic';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9yYWRhci1jaGFydHMvcmFkYXItY2hhcnQvc3Rvcmllcy9iYXNpYy50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJjb25maWd1cmF0aW9ucyIsImFuZ2xlRmllbGQiLCJyYWRpdXNGaWVsZCIsInNlcmllc0ZpZWxkIiwicmFkaXVzQXhpcyIsImdyaWQiLCJsaW5lIiwidHlwZSIsIm1pbiIsIm1heCIsInZpc2libGUiLCJwb2ludCIsInNoYXBlIiwibGVnZW5kIiwicG9zaXRpb24iLCJ2YWx1ZUZvcm1hdHRlciIsInYiLCJ3aWR0aCIsImhlaWdodCIsImRhdGEiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNQSxPQUFPLEdBQUcsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QyxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLElBQUFBLFVBQVUsRUFBRSxZQURTO0FBRXJCQyxJQUFBQSxXQUFXLEVBQUUsT0FGUTtBQUdyQkMsSUFBQUEsV0FBVyxFQUFFLE1BSFE7QUFJckJDLElBQUFBLFVBQVUsRUFBRTtBQUNWQyxNQUFBQSxJQUFJLEVBQUU7QUFDSkMsUUFBQUEsSUFBSSxFQUFFO0FBQUVDLFVBQUFBLElBQUksRUFBRTtBQUFSO0FBREYsT0FESTtBQUlWQyxNQUFBQSxHQUFHLEVBQUUsQ0FKSztBQUtWQyxNQUFBQSxHQUFHLEVBQUU7QUFMSyxLQUpTO0FBV3JCSCxJQUFBQSxJQUFJLEVBQUU7QUFBRUksTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FYZTtBQVlyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xELE1BQUFBLE9BQU8sRUFBRSxJQURKO0FBRUxFLE1BQUFBLEtBQUssRUFBRTtBQUZGLEtBWmM7QUFnQnJCQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkgsTUFBQUEsT0FBTyxFQUFFLElBREg7QUFFTkksTUFBQUEsUUFBUSxFQUFFO0FBRkosS0FoQmE7QUFvQnJCQyxJQUFBQSxjQUFjLEVBQUUsd0JBQUNDLENBQUQ7QUFBQSxhQUFZQSxDQUFaO0FBQUE7QUFwQkssR0FBdkI7QUFzQkEsc0JBQ0UsMERBQ0Usb0RBREYsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLHNCQUFEO0FBQVksSUFBQSxJQUFJLEVBQUVDLGdCQUFsQjtBQUF3QixJQUFBLGNBQWMsRUFBRW5CO0FBQXhDLElBREYsQ0FGRixDQURGO0FBUUQsQ0EvQk07OztBQWdDQSxJQUFNb0IsSUFBSSxHQUFHLE9BQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhZGFyQ2hhcnQgZnJvbSAnLi4vcmFkYXItY2hhcnQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9tb2NrLmpzb24nO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIGFuZ2xlRmllbGQ6ICdtZXRyaWNOYW1lJyxcbiAgICByYWRpdXNGaWVsZDogJ3ZhbHVlJyxcbiAgICBzZXJpZXNGaWVsZDogJ25hbWUnLFxuICAgIHJhZGl1c0F4aXM6IHtcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgbGluZTogeyB0eXBlOiAnbGluZScgfSxcbiAgICAgIH0sXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDEsXG4gICAgfSxcbiAgICBsaW5lOiB7IHZpc2libGU6IHRydWUgfSxcbiAgICBwb2ludDoge1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIHNoYXBlOiAnY2lyY2xlJyxcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLWNlbnRlcicsXG4gICAgfSxcbiAgICB2YWx1ZUZvcm1hdHRlcjogKHY6IGFueSkgPT4gdixcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkJhc2ljPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDYwMCwgaGVpZ2h0OiA2MDAgfX0+XG4gICAgICAgIDxSYWRhckNoYXJ0IGRhdGE9e2RhdGF9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBuYW1lID0gJ0Jhc2ljJztcbiJdfQ==