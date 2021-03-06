"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.name = exports.content = void 0;

var _react = _interopRequireDefault(require("react"));

var _enum = require("../../../../../helpers/enum");

var _rechartsBarChart = _interopRequireDefault(require("../../recharts-bar-chart"));

var _singleValue = _interopRequireDefault(require("../mocks/single-value.json"));

var content = function Content() {
  var configurations = {
    withTooltip: true,
    withLegend: false,
    labelKey: 'name',
    xAxis: {
      name: 'Series'
    },
    yAxis: {
      name: 'Mock Value'
    },
    subSeriesConfiguration: [{
      label: 'Rounded Value',
      dataKey: 'value'
    }],
    // HERE
    referenceLines: [{
      key: 'ref-line-1',
      vertical: false,
      renderOnTop: true,
      value: 800,
      labelText: 'Reference Line 1',
      labelPosition: _enum.REFERENCE_LINE_LABEL_POSITION.RIGHT,
      labelFillColor: 'rgb(255,177,177)',
      stroke: 'rgb(255,177,177)',
      strokeDasharray: '3 3'
    }, {
      key: 'ref-line-2',
      vertical: false,
      renderOnTop: true,
      value: 600,
      labelText: 'Reference Line 2',
      labelPosition: _enum.REFERENCE_LINE_LABEL_POSITION.CENTER,
      labelFillColor: '#727272',
      stroke: '#727272',
      strokeDasharray: '3 3'
    }, {
      key: 'ref-line-3',
      vertical: false,
      renderOnTop: true,
      value: 200,
      labelText: 'Reference Line 3',
      labelPosition: _enum.REFERENCE_LINE_LABEL_POSITION.LEFT,
      labelFillColor: 'blue',
      stroke: 'blue',
      strokeDasharray: '0'
    }, {
      key: 'ref-line-4',
      vertical: true,
      renderOnTop: true,
      value: _singleValue["default"][3].name,
      labelText: 'Reference Line 4',
      labelProps: {
        position: 'insideTopLeft',
        textAnchor: 'start',
        angle: 90,
        offset: 15
      },
      labelFillColor: 'black',
      stroke: 'black',
      strokeDasharray: '0',
      position: 'end'
    }],
    // HERE
    referenceAreas: [{
      key: 'ref-area-1',
      y1: 800,
      y2: 600,
      fill: 'rgba(255,177,177, .2)'
    }, {
      key: 'ref-area-2',
      y1: 600,
      y2: 200,
      fill: 'rgba(177,255,216, .2)'
    }]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Reference Line (Horizontal)"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react["default"].createElement(_rechartsBarChart["default"], {
    data: _singleValue["default"],
    configurations: configurations
  })));
};

exports.content = content;
var name = 'Reference Lines & Areas (Horizontal)';
exports.name = name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9zdG9yaWVzL3JlZmVyZW5jZS1saW5lcy1hbmQtYXJlYXMvaG9yaXpvbnRhbC50c3giXSwibmFtZXMiOlsiY29udGVudCIsIkNvbnRlbnQiLCJjb25maWd1cmF0aW9ucyIsIndpdGhUb29sdGlwIiwid2l0aExlZ2VuZCIsImxhYmVsS2V5IiwieEF4aXMiLCJuYW1lIiwieUF4aXMiLCJzdWJTZXJpZXNDb25maWd1cmF0aW9uIiwibGFiZWwiLCJkYXRhS2V5IiwicmVmZXJlbmNlTGluZXMiLCJrZXkiLCJ2ZXJ0aWNhbCIsInJlbmRlck9uVG9wIiwidmFsdWUiLCJsYWJlbFRleHQiLCJsYWJlbFBvc2l0aW9uIiwiUkVGRVJFTkNFX0xJTkVfTEFCRUxfUE9TSVRJT04iLCJSSUdIVCIsImxhYmVsRmlsbENvbG9yIiwic3Ryb2tlIiwic3Ryb2tlRGFzaGFycmF5IiwiQ0VOVEVSIiwiTEVGVCIsImRhdGEiLCJsYWJlbFByb3BzIiwicG9zaXRpb24iLCJ0ZXh0QW5jaG9yIiwiYW5nbGUiLCJvZmZzZXQiLCJyZWZlcmVuY2VBcmVhcyIsInkxIiwieTIiLCJmaWxsIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hDLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLFVBQVUsRUFBRSxLQUZTO0FBR3JCQyxJQUFBQSxRQUFRLEVBQUUsTUFIVztBQUlyQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBSmM7QUFPckJDLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxJQUFJLEVBQUU7QUFERCxLQVBjO0FB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QjtBQUE5QyxJQURGLENBRkYsQ0FERjtBQVFELENBekZNOzs7QUEwRkEsSUFBTUssSUFBSSxHQUFHLHNDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJFRkVSRU5DRV9MSU5FX0xBQkVMX1BPU0lUSU9OIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaGVscGVycy9lbnVtJztcbmltcG9ydCBSZWNoYXJ0c0JhckNoYXJ0IGZyb20gJy4uLy4uL3JlY2hhcnRzLWJhci1jaGFydCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9tb2Nrcy9zaW5nbGUtdmFsdWUuanNvbic7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgd2l0aFRvb2x0aXA6IHRydWUsXG4gICAgd2l0aExlZ2VuZDogZmFsc2UsXG4gICAgbGFiZWxLZXk6ICduYW1lJyxcbiAgICB4QXhpczoge1xuICAgICAgbmFtZTogJ1NlcmllcycsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgbmFtZTogJ01vY2sgVmFsdWUnLFxuICAgIH0sXG4gICAgc3ViU2VyaWVzQ29uZmlndXJhdGlvbjogW3sgbGFiZWw6ICdSb3VuZGVkIFZhbHVlJywgZGF0YUtleTogJ3ZhbHVlJyB9XSxcbiAgICAvLyBIRVJFXG4gICAgcmVmZXJlbmNlTGluZXM6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmVmLWxpbmUtMScsXG4gICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgcmVuZGVyT25Ub3A6IHRydWUsXG4gICAgICAgIHZhbHVlOiA4MDAsXG4gICAgICAgIGxhYmVsVGV4dDogJ1JlZmVyZW5jZSBMaW5lIDEnLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiBSRUZFUkVOQ0VfTElORV9MQUJFTF9QT1NJVElPTi5SSUdIVCxcbiAgICAgICAgbGFiZWxGaWxsQ29sb3I6ICdyZ2IoMjU1LDE3NywxNzcpJyxcbiAgICAgICAgc3Ryb2tlOiAncmdiKDI1NSwxNzcsMTc3KScsXG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogJzMgMycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdyZWYtbGluZS0yJyxcbiAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICByZW5kZXJPblRvcDogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IDYwMCxcbiAgICAgICAgbGFiZWxUZXh0OiAnUmVmZXJlbmNlIExpbmUgMicsXG4gICAgICAgIGxhYmVsUG9zaXRpb246IFJFRkVSRU5DRV9MSU5FX0xBQkVMX1BPU0lUSU9OLkNFTlRFUixcbiAgICAgICAgbGFiZWxGaWxsQ29sb3I6ICcjNzI3MjcyJyxcbiAgICAgICAgc3Ryb2tlOiAnIzcyNzI3MicsXG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogJzMgMycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdyZWYtbGluZS0zJyxcbiAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICByZW5kZXJPblRvcDogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IDIwMCxcbiAgICAgICAgbGFiZWxUZXh0OiAnUmVmZXJlbmNlIExpbmUgMycsXG4gICAgICAgIGxhYmVsUG9zaXRpb246IFJFRkVSRU5DRV9MSU5FX0xBQkVMX1BPU0lUSU9OLkxFRlQsXG4gICAgICAgIGxhYmVsRmlsbENvbG9yOiAnYmx1ZScsXG4gICAgICAgIHN0cm9rZTogJ2JsdWUnLFxuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcwJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JlZi1saW5lLTQnLFxuICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgICAgcmVuZGVyT25Ub3A6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkYXRhWzNdLm5hbWUsXG4gICAgICAgIGxhYmVsVGV4dDogJ1JlZmVyZW5jZSBMaW5lIDQnLFxuICAgICAgICBsYWJlbFByb3BzOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdpbnNpZGVUb3BMZWZ0JyxcbiAgICAgICAgICB0ZXh0QW5jaG9yOiAnc3RhcnQnLFxuICAgICAgICAgIGFuZ2xlOiA5MCxcbiAgICAgICAgICBvZmZzZXQ6IDE1LFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbEZpbGxDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgc3Ryb2tlOiAnYmxhY2snLFxuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcwJyxcbiAgICAgICAgcG9zaXRpb246ICdlbmQnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIC8vIEhFUkVcbiAgICByZWZlcmVuY2VBcmVhczogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdyZWYtYXJlYS0xJyxcbiAgICAgICAgeTE6IDgwMCxcbiAgICAgICAgeTI6IDYwMCxcbiAgICAgICAgZmlsbDogJ3JnYmEoMjU1LDE3NywxNzcsIC4yKScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdyZWYtYXJlYS0yJyxcbiAgICAgICAgeTE6IDYwMCxcbiAgICAgICAgeTI6IDIwMCxcbiAgICAgICAgZmlsbDogJ3JnYmEoMTc3LDI1NSwyMTYsIC4yKScsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5SZWZlcmVuY2UgTGluZSAoSG9yaXpvbnRhbCk8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgPFJlY2hhcnRzQmFyQ2hhcnQgZGF0YT17ZGF0YX0gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IG5hbWUgPSAnUmVmZXJlbmNlIExpbmVzICYgQXJlYXMgKEhvcml6b250YWwpJztcbiJdfQ==