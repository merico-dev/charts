"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = ReferenceDot;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var Recharts = _interopRequireWildcard(require("recharts"));

var _enum = require("../helpers/enum");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function renderReferenceDotLabel(props) {
  if (!props) {
    return null;
  }

  var _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? _enum.TICK_FONT_SIZE : _props$fontSize,
      text = props.text,
      position = props.position,
      _props$angle = props.angle,
      angle = _props$angle === void 0 ? 0 : _props$angle,
      _props$offset = props.offset,
      offset = _props$offset === void 0 ? 5 : _props$offset,
      textAnchor = props.textAnchor,
      fill = props.fill;
  var style = {
    textAnchor: textAnchor,
    fontSize: fontSize,
    fill: fill,
    strokeWidth: '0.1'
  };
  return /*#__PURE__*/_react["default"].createElement(Recharts.Label, {
    position: position,
    offset: offset,
    value: text,
    style: style // @ts-expect-error ts-migrate(2322) FIXME: Type '{ position: any; offset: any; value: any; st... Remove this comment to see the full error message
    ,
    angle: angle
  });
}

function ReferenceDot(_ref) {
  var labelProps = _ref.labelProps,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["labelProps"]);
  return /*#__PURE__*/_react["default"].createElement(Recharts.ReferenceDot, (0, _extends2["default"])({
    ifOverflow: "extendDomain"
  }, rest, {
    label: renderReferenceDotLabel(_objectSpread({}, labelProps))
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2hhcnRzL3JlZmVyZW5jZS1kb3QudHN4Il0sIm5hbWVzIjpbInJlbmRlclJlZmVyZW5jZURvdExhYmVsIiwicHJvcHMiLCJmb250U2l6ZSIsIlRJQ0tfRk9OVF9TSVpFIiwidGV4dCIsInBvc2l0aW9uIiwiYW5nbGUiLCJvZmZzZXQiLCJ0ZXh0QW5jaG9yIiwiZmlsbCIsInN0eWxlIiwic3Ryb2tlV2lkdGgiLCJSZWZlcmVuY2VEb3QiLCJsYWJlbFByb3BzIiwicmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsdUJBQVQsQ0FBaUNDLEtBQWpDLEVBQTZDO0FBQzNDLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1YsV0FBTyxJQUFQO0FBQ0Q7O0FBSDBDLHdCQUtvREEsS0FMcEQsQ0FLbkNDLFFBTG1DO0FBQUEsTUFLbkNBLFFBTG1DLGdDQUt4QkMsb0JBTHdCO0FBQUEsTUFLUkMsSUFMUSxHQUtvREgsS0FMcEQsQ0FLUkcsSUFMUTtBQUFBLE1BS0ZDLFFBTEUsR0FLb0RKLEtBTHBELENBS0ZJLFFBTEU7QUFBQSxxQkFLb0RKLEtBTHBELENBS1FLLEtBTFI7QUFBQSxNQUtRQSxLQUxSLDZCQUtnQixDQUxoQjtBQUFBLHNCQUtvREwsS0FMcEQsQ0FLbUJNLE1BTG5CO0FBQUEsTUFLbUJBLE1BTG5CLDhCQUs0QixDQUw1QjtBQUFBLE1BSytCQyxVQUwvQixHQUtvRFAsS0FMcEQsQ0FLK0JPLFVBTC9CO0FBQUEsTUFLMkNDLElBTDNDLEdBS29EUixLQUxwRCxDQUsyQ1EsSUFMM0M7QUFPM0MsTUFBTUMsS0FBSyxHQUFHO0FBQ1pGLElBQUFBLFVBQVUsRUFBVkEsVUFEWTtBQUVaTixJQUFBQSxRQUFRLEVBQVJBLFFBRlk7QUFHWk8sSUFBQUEsSUFBSSxFQUFFQSxJQUhNO0FBSVpFLElBQUFBLFdBQVcsRUFBRTtBQUpELEdBQWQ7QUFNQSxzQkFDRSxnQ0FBQyxRQUFELENBQVUsS0FBVjtBQUNFLElBQUEsUUFBUSxFQUFFTixRQURaO0FBRUUsSUFBQSxNQUFNLEVBQUVFLE1BRlY7QUFHRSxJQUFBLEtBQUssRUFBRUgsSUFIVDtBQUlFLElBQUEsS0FBSyxFQUFFTSxLQUpULENBS0U7QUFMRjtBQU1FLElBQUEsS0FBSyxFQUFFSjtBQU5ULElBREY7QUFVRDs7QUFFYyxTQUFTTSxZQUFULE9BQW9EO0FBQUEsTUFBNUJDLFVBQTRCLFFBQTVCQSxVQUE0QjtBQUFBLE1BQWJDLElBQWE7QUFDakUsc0JBQ0UsZ0NBQUMsUUFBRCxDQUFVLFlBQVY7QUFBdUIsSUFBQSxVQUFVLEVBQUM7QUFBbEMsS0FBcURBLElBQXJEO0FBQTJELElBQUEsS0FBSyxFQUFFZCx1QkFBdUIsbUJBQU1hLFVBQU47QUFBekYsS0FERjtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlY2hhcnRzIGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IFRJQ0tfRk9OVF9TSVpFIH0gZnJvbSAnLi4vaGVscGVycy9lbnVtJztcblxuZnVuY3Rpb24gcmVuZGVyUmVmZXJlbmNlRG90TGFiZWwocHJvcHM6IGFueSkge1xuICBpZiAoIXByb3BzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB7IGZvbnRTaXplID0gVElDS19GT05UX1NJWkUsIHRleHQsIHBvc2l0aW9uLCBhbmdsZSA9IDAsIG9mZnNldCA9IDUsIHRleHRBbmNob3IsIGZpbGwgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHRleHRBbmNob3IsXG4gICAgZm9udFNpemUsXG4gICAgZmlsbDogZmlsbCxcbiAgICBzdHJva2VXaWR0aDogJzAuMScsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPFJlY2hhcnRzLkxhYmVsXG4gICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICBvZmZzZXQ9e29mZnNldH1cbiAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMjIpIEZJWE1FOiBUeXBlICd7IHBvc2l0aW9uOiBhbnk7IG9mZnNldDogYW55OyB2YWx1ZTogYW55OyBzdC4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG4gICAgICBhbmdsZT17YW5nbGV9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVmZXJlbmNlRG90KHsgbGFiZWxQcm9wcywgLi4ucmVzdCB9OiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8UmVjaGFydHMuUmVmZXJlbmNlRG90IGlmT3ZlcmZsb3c9XCJleHRlbmREb21haW5cIiB7Li4ucmVzdH0gbGFiZWw9e3JlbmRlclJlZmVyZW5jZURvdExhYmVsKHsgLi4ubGFiZWxQcm9wcyB9KX0gLz5cbiAgKTtcbn1cbiJdfQ==