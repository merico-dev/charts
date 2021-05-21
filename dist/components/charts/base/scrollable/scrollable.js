"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Horizontal = Horizontal;
exports.Vertical = Vertical;
exports.ScrollableContainer = ScrollableContainer;
exports.Scrollable = Scrollable;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactResizeAware = _interopRequireDefault(require("react-resize-aware"));

function Horizontal(_ref) {
  var width = _ref.width,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%',
      minWidth: width,
      height: '100%'
    }
  }, children);
}

function Vertical(_ref2) {
  var height = _ref2.height,
      children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%',
      minHeight: height,
      height: '100%'
    }
  }, children);
}

function ScrollableContainer(_ref3) {
  var width = _ref3.width,
      height = _ref3.height,
      children = _ref3.children;

  var _useResizeAware = (0, _reactResizeAware["default"])(),
      _useResizeAware2 = (0, _slicedToArray2["default"])(_useResizeAware, 2),
      resizeListener = _useResizeAware2[0],
      sizes = _useResizeAware2[1];

  var _useMemo = (0, _react.useMemo)(function () {
    var ret = {
      overflowX: 'visible',
      overflowY: 'visible'
    };

    if (!sizes) {
      return ret;
    } // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.


    if (width > sizes.width) {
      ret.overflowX = 'scroll';
    } // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.


    if (height > sizes.height) {
      ret.overflowY = 'scroll';
    }

    return ret;
  }, [sizes]),
      overflowX = _useMemo.overflowX,
      overflowY = _useMemo.overflowY;

  return (
    /*#__PURE__*/
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"-moz-ini... Remove this comment to see the full error message
    _react["default"].createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflowX: overflowX,
        overflowY: overflowY
      }
    }, resizeListener, children)
  );
}

function Scrollable(_ref4) {
  var direction = _ref4.direction,
      rest = (0, _objectWithoutProperties2["default"])(_ref4, ["direction"]);

  if (!direction) {
    throw new Error('[Scrollable] missing essential prop "direction"');
  }

  var Component = direction === 'horizontal' ? Horizontal : Vertical;
  return /*#__PURE__*/_react["default"].createElement(ScrollableContainer, rest, /*#__PURE__*/_react["default"].createElement(Component, rest));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL3Njcm9sbGFibGUvc2Nyb2xsYWJsZS50c3giXSwibmFtZXMiOlsiSG9yaXpvbnRhbCIsIndpZHRoIiwiY2hpbGRyZW4iLCJtaW5XaWR0aCIsImhlaWdodCIsIlZlcnRpY2FsIiwibWluSGVpZ2h0IiwiU2Nyb2xsYWJsZUNvbnRhaW5lciIsInJlc2l6ZUxpc3RlbmVyIiwic2l6ZXMiLCJyZXQiLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsIlNjcm9sbGFibGUiLCJkaXJlY3Rpb24iLCJyZXN0IiwiRXJyb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVPLFNBQVNBLFVBQVQsT0FBOEM7QUFBQSxNQUF4QkMsS0FBd0IsUUFBeEJBLEtBQXdCO0FBQUEsTUFBakJDLFFBQWlCLFFBQWpCQSxRQUFpQjtBQUNuRCxzQkFBTztBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCRSxNQUFBQSxRQUFRLEVBQUVGLEtBQTNCO0FBQWtDRyxNQUFBQSxNQUFNLEVBQUU7QUFBMUM7QUFBWixLQUFpRUYsUUFBakUsQ0FBUDtBQUNEOztBQUVNLFNBQVNHLFFBQVQsUUFBNkM7QUFBQSxNQUF6QkQsTUFBeUIsU0FBekJBLE1BQXlCO0FBQUEsTUFBakJGLFFBQWlCLFNBQWpCQSxRQUFpQjtBQUNsRCxzQkFBTztBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCSyxNQUFBQSxTQUFTLEVBQUVGLE1BQTVCO0FBQW9DQSxNQUFBQSxNQUFNLEVBQUU7QUFBNUM7QUFBWixLQUFtRUYsUUFBbkUsQ0FBUDtBQUNEOztBQUVNLFNBQVNLLG1CQUFULFFBQStEO0FBQUEsTUFBaENOLEtBQWdDLFNBQWhDQSxLQUFnQztBQUFBLE1BQXpCRyxNQUF5QixTQUF6QkEsTUFBeUI7QUFBQSxNQUFqQkYsUUFBaUIsU0FBakJBLFFBQWlCOztBQUFBLHdCQUNwQyxtQ0FEb0M7QUFBQTtBQUFBLE1BQzdETSxjQUQ2RDtBQUFBLE1BQzdDQyxLQUQ2Qzs7QUFBQSxpQkFHbkMsb0JBQVEsWUFBTTtBQUM3QyxRQUFNQyxHQUFHLEdBQUc7QUFDVkMsTUFBQUEsU0FBUyxFQUFFLFNBREQ7QUFFVkMsTUFBQUEsU0FBUyxFQUFFO0FBRkQsS0FBWjs7QUFJQSxRQUFJLENBQUNILEtBQUwsRUFBWTtBQUNWLGFBQU9DLEdBQVA7QUFDRCxLQVA0QyxDQVM3Qzs7O0FBQ0EsUUFBSVQsS0FBSyxHQUFHUSxLQUFLLENBQUNSLEtBQWxCLEVBQXlCO0FBQ3ZCUyxNQUFBQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsUUFBaEI7QUFDRCxLQVo0QyxDQWE3Qzs7O0FBQ0EsUUFBSVAsTUFBTSxHQUFHSyxLQUFLLENBQUNMLE1BQW5CLEVBQTJCO0FBQ3pCTSxNQUFBQSxHQUFHLENBQUNFLFNBQUosR0FBZ0IsUUFBaEI7QUFDRDs7QUFDRCxXQUFPRixHQUFQO0FBQ0QsR0FsQmdDLEVBa0I5QixDQUFDRCxLQUFELENBbEI4QixDQUhtQztBQUFBLE1BRzVERSxTQUg0RCxZQUc1REEsU0FINEQ7QUFBQSxNQUdqREMsU0FIaUQsWUFHakRBLFNBSGlEOztBQXVCcEU7QUFBQTtBQUNFO0FBQ0E7QUFBSyxNQUFBLEtBQUssRUFBRTtBQUFFWCxRQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkcsUUFBQUEsTUFBTSxFQUFFLE1BQXpCO0FBQWlDUyxRQUFBQSxRQUFRLEVBQUUsVUFBM0M7QUFBdURGLFFBQUFBLFNBQVMsRUFBVEEsU0FBdkQ7QUFBa0VDLFFBQUFBLFNBQVMsRUFBVEE7QUFBbEU7QUFBWixPQUNHSixjQURILEVBRUdOLFFBRkg7QUFGRjtBQU9EOztBQUVNLFNBQVNZLFVBQVQsUUFBaUQ7QUFBQSxNQUEzQkMsU0FBMkIsU0FBM0JBLFNBQTJCO0FBQUEsTUFBYkMsSUFBYTs7QUFDdEQsTUFBSSxDQUFDRCxTQUFMLEVBQWdCO0FBQ2QsVUFBTSxJQUFJRSxLQUFKLENBQVUsaURBQVYsQ0FBTjtBQUNEOztBQUNELE1BQU1DLFNBQVMsR0FBR0gsU0FBUyxLQUFLLFlBQWQsR0FBNkJmLFVBQTdCLEdBQTBDSyxRQUE1RDtBQUNBLHNCQUNFLGdDQUFDLG1CQUFELEVBQXlCVyxJQUF6QixlQUNFLGdDQUFDLFNBQUQsRUFBZUEsSUFBZixDQURGLENBREY7QUFLRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVJlc2l6ZUF3YXJlIGZyb20gJ3JlYWN0LXJlc2l6ZS1hd2FyZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIb3Jpem9udGFsKHsgd2lkdGgsIGNoaWxkcmVuIH06IGFueSkge1xuICByZXR1cm4gPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtaW5XaWR0aDogd2lkdGgsIGhlaWdodDogJzEwMCUnIH19PntjaGlsZHJlbn08L2Rpdj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWZXJ0aWNhbCh7IGhlaWdodCwgY2hpbGRyZW4gfTogYW55KSB7XG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1pbkhlaWdodDogaGVpZ2h0LCBoZWlnaHQ6ICcxMDAlJyB9fT57Y2hpbGRyZW59PC9kaXY+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2Nyb2xsYWJsZUNvbnRhaW5lcih7IHdpZHRoLCBoZWlnaHQsIGNoaWxkcmVuIH06IGFueSkge1xuICBjb25zdCBbcmVzaXplTGlzdGVuZXIsIHNpemVzXSA9IHVzZVJlc2l6ZUF3YXJlKCk7XG5cbiAgY29uc3QgeyBvdmVyZmxvd1gsIG92ZXJmbG93WSB9ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgb3ZlcmZsb3dYOiAndmlzaWJsZScsXG4gICAgICBvdmVyZmxvd1k6ICd2aXNpYmxlJyxcbiAgICB9O1xuICAgIGlmICghc2l6ZXMpIHtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI1MzEpIEZJWE1FOiBPYmplY3QgaXMgcG9zc2libHkgJ251bGwnLlxuICAgIGlmICh3aWR0aCA+IHNpemVzLndpZHRoKSB7XG4gICAgICByZXQub3ZlcmZsb3dYID0gJ3Njcm9sbCc7XG4gICAgfVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSgyNTMxKSBGSVhNRTogT2JqZWN0IGlzIHBvc3NpYmx5ICdudWxsJy5cbiAgICBpZiAoaGVpZ2h0ID4gc2l6ZXMuaGVpZ2h0KSB7XG4gICAgICByZXQub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sIFtzaXplc10pO1xuXG4gIHJldHVybiAoXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDIzMjIpIEZJWE1FOiBUeXBlICdzdHJpbmcnIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHR5cGUgJ1wiLW1vei1pbmkuLi4gUmVtb3ZlIHRoaXMgY29tbWVudCB0byBzZWUgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZVxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBvdmVyZmxvd1gsIG92ZXJmbG93WSB9fT5cbiAgICAgIHtyZXNpemVMaXN0ZW5lcn1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNjcm9sbGFibGUoeyBkaXJlY3Rpb24sIC4uLnJlc3QgfTogYW55KSB7XG4gIGlmICghZGlyZWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbU2Nyb2xsYWJsZV0gbWlzc2luZyBlc3NlbnRpYWwgcHJvcCBcImRpcmVjdGlvblwiJyk7XG4gIH1cbiAgY29uc3QgQ29tcG9uZW50ID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBIb3Jpem9udGFsIDogVmVydGljYWw7XG4gIHJldHVybiAoXG4gICAgPFNjcm9sbGFibGVDb250YWluZXIgey4uLnJlc3R9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucmVzdH0gLz5cbiAgICA8L1Njcm9sbGFibGVDb250YWluZXI+XG4gICk7XG59XG4iXX0=