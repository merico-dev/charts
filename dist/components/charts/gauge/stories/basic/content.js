"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = content;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _gauge = _interopRequireDefault(require("../../gauge"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var renderValueLabel = function renderValueLabel(_ref) {
  var value = _ref.value,
      _ref$segmentLabel = _ref.segmentLabel,
      text = _ref$segmentLabel.text,
      color = _ref$segmentLabel.color,
      segmentStart = _ref.segmentStart;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, {
    open: true,
    position: "top center",
    content: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        color: color
      }
    }, text), "(\u2265 ", segmentStart, ")"),
    trigger: /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("strong", {
      style: {
        fontSize: 24
      }
    }, value), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontSize: 14,
        color: '#646568'
      }
    }, "/KEq"))
  });
};

function content(_ref2) {
  var value = _ref2.value;
  var configurations = {
    colors: ['rgba(82,196,26,0.6)', 'rgba(250,173,20,0.6)', 'rgba(255,77,79,0.8)'],
    renderValueLabel: renderValueLabel,
    segments: [0, 2, 4, 8],
    segmentLabels: [{
      text: '良好',
      color: '#43A910'
    }, {
      text: '轻度警告',
      color: '#E89A00'
    }, {
      text: '严重警告',
      color: '#E11C1E'
    }],
    ticks: [2, 4, 6]
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Basic"), /*#__PURE__*/_react["default"].createElement(_gauge["default"], {
    value: value,
    configurations: _objectSpread(_objectSpread({}, configurations), {}, {
      width: 460,
      height: 400
    })
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9zdG9yaWVzL2Jhc2ljL2NvbnRlbnQudHN4Il0sIm5hbWVzIjpbInJlbmRlclZhbHVlTGFiZWwiLCJ2YWx1ZSIsInNlZ21lbnRMYWJlbCIsInRleHQiLCJjb2xvciIsInNlZ21lbnRTdGFydCIsImZvbnRTaXplIiwiY29udGVudCIsImNvbmZpZ3VyYXRpb25zIiwiY29sb3JzIiwic2VnbWVudHMiLCJzZWdtZW50TGFiZWxzIiwidGlja3MiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLCtCQUFVQyxZQUFWO0FBQUEsTUFBMEJDLElBQTFCLHFCQUEwQkEsSUFBMUI7QUFBQSxNQUFnQ0MsS0FBaEMscUJBQWdDQSxLQUFoQztBQUFBLE1BQTZEQyxZQUE3RCxRQUE2REEsWUFBN0Q7QUFBQSxzQkFDdkIsZ0NBQUMsc0JBQUQ7QUFDRSxJQUFBLElBQUksTUFETjtBQUVFLElBQUEsUUFBUSxFQUFDLFlBRlg7QUFHRSxJQUFBLE9BQU8sZUFDTCwwREFDRTtBQUFNLE1BQUEsS0FBSyxFQUFFO0FBQUVELFFBQUFBLEtBQUssRUFBTEE7QUFBRjtBQUFiLE9BQXlCRCxJQUF6QixDQURGLGNBQzJDRSxZQUQzQyxNQUpKO0FBUUUsSUFBQSxPQUFPLGVBQ0wsMkRBQ0U7QUFBUSxNQUFBLEtBQUssRUFBRTtBQUFFQyxRQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUFmLE9BQWtDTCxLQUFsQyxDQURGLGVBRUU7QUFBTSxNQUFBLEtBQUssRUFBRTtBQUFFSyxRQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQkYsUUFBQUEsS0FBSyxFQUFFO0FBQXZCO0FBQWIsY0FGRjtBQVRKLElBRHVCO0FBQUEsQ0FBekI7O0FBa0JlLFNBQVNHLE9BQVQsUUFBaUM7QUFBQSxNQUFkTixLQUFjLFNBQWRBLEtBQWM7QUFDOUMsTUFBTU8sY0FBYyxHQUFHO0FBQ3JCQyxJQUFBQSxNQUFNLEVBQUUsQ0FBQyxxQkFBRCxFQUF3QixzQkFBeEIsRUFBZ0QscUJBQWhELENBRGE7QUFFckJULElBQUFBLGdCQUFnQixFQUFoQkEsZ0JBRnFCO0FBR3JCVSxJQUFBQSxRQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBSFc7QUFJckJDLElBQUFBLGFBQWEsRUFBRSxDQUNiO0FBQ0VSLE1BQUFBLElBQUksRUFBRSxJQURSO0FBRUVDLE1BQUFBLEtBQUssRUFBRTtBQUZULEtBRGEsRUFLYjtBQUNFRCxNQUFBQSxJQUFJLEVBQUUsTUFEUjtBQUVFQyxNQUFBQSxLQUFLLEVBQUU7QUFGVCxLQUxhLEVBU2I7QUFDRUQsTUFBQUEsSUFBSSxFQUFFLE1BRFI7QUFFRUMsTUFBQUEsS0FBSyxFQUFFO0FBRlQsS0FUYSxDQUpNO0FBa0JyQlEsSUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBbEJjLEdBQXZCO0FBcUJBLHNCQUNFLDBEQUNFLG9EQURGLGVBRUUsZ0NBQUMsaUJBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRVgsS0FEVDtBQUVFLElBQUEsY0FBYyxrQ0FDVE8sY0FEUztBQUVaSyxNQUFBQSxLQUFLLEVBQUUsR0FGSztBQUdaQyxNQUFBQSxNQUFNLEVBQUU7QUFISTtBQUZoQixJQUZGLENBREY7QUFhRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBHYXVnZSBmcm9tICcuLi8uLi9nYXVnZSc7XG5cbmNvbnN0IHJlbmRlclZhbHVlTGFiZWwgPSAoeyB2YWx1ZSwgc2VnbWVudExhYmVsOiB7IHRleHQsIGNvbG9yIH0sIC8qIHNlZ21lbnRDb2xvciwgKi8gc2VnbWVudFN0YXJ0IH06IGFueSkgPT4gKFxuICA8UG9wdXBcbiAgICBvcGVuXG4gICAgcG9zaXRpb249XCJ0b3AgY2VudGVyXCJcbiAgICBjb250ZW50PXtcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yIH19Pnt0ZXh0fTwvc3Bhbj4o4omlIHtzZWdtZW50U3RhcnR9KVxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIHRyaWdnZXI9e1xuICAgICAgPHNwYW4+XG4gICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgZm9udFNpemU6IDI0IH19Pnt2YWx1ZX08L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJyM2NDY1NjgnIH19Pi9LRXE8L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGVudCh7IHZhbHVlIH06IGFueSkge1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICBjb2xvcnM6IFsncmdiYSg4MiwxOTYsMjYsMC42KScsICdyZ2JhKDI1MCwxNzMsMjAsMC42KScsICdyZ2JhKDI1NSw3Nyw3OSwwLjgpJ10sXG4gICAgcmVuZGVyVmFsdWVMYWJlbCxcbiAgICBzZWdtZW50czogWzAsIDIsIDQsIDhdLFxuICAgIHNlZ21lbnRMYWJlbHM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+iJr+WlvScsXG4gICAgICAgIGNvbG9yOiAnIzQzQTkxMCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn6L275bqm6K2m5ZGKJyxcbiAgICAgICAgY29sb3I6ICcjRTg5QTAwJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfkuKXph43orablkYonLFxuICAgICAgICBjb2xvcjogJyNFMTFDMUUnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHRpY2tzOiBbMiwgNCwgNl0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkJhc2ljPC9oMT5cbiAgICAgIDxHYXVnZVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGNvbmZpZ3VyYXRpb25zPXt7XG4gICAgICAgICAgLi4uY29uZmlndXJhdGlvbnMsXG4gICAgICAgICAgd2lkdGg6IDQ2MCxcbiAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=