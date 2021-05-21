"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.G2ChartBase = exports.RechartsChartBase = exports.ChartEmpty = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

var _core = require("@emotion/core");

var _emptyIcon = require("./empty-icon");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var BASE_STYLE = "\n  font-size: 16px;\n  font-family: Roboto, sans-serif;\n  font-weight: normal;\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n";
var CSS_RECHARTS_BRUSH = process.env.NODE_ENV === "production" ? {
  name: "1if0car-CSS_RECHARTS_BRUSH",
  styles: ".recharts-layer.recharts-brush{> rect:not(.recharts-brush-slide){fill:white;stroke:#f5f5f7;}> rect.recharts-brush-slide{fill:#c7dcfa;fill-opacity:0.4;cursor:move !important;cursor:grab !important;&:active{cursor:grabbing !important;}}> .recharts-layer.recharts-brush-traveller{> rect{#height:10px;#width:9px;#transform:translate(-2px,10px);fill:#828487;}}> .recharts-layer.recharts-brush-texts{display:none;}};label:CSS_RECHARTS_BRUSH;"
} : {
  name: "1if0car-CSS_RECHARTS_BRUSH",
  styles: ".recharts-layer.recharts-brush{> rect:not(.recharts-brush-slide){fill:white;stroke:#f5f5f7;}> rect.recharts-brush-slide{fill:#c7dcfa;fill-opacity:0.4;cursor:move !important;cursor:grab !important;&:active{cursor:grabbing !important;}}> .recharts-layer.recharts-brush-traveller{> rect{#height:10px;#width:9px;#transform:translate(-2px,10px);fill:#828487;}}> .recharts-layer.recharts-brush-texts{display:none;}};label:CSS_RECHARTS_BRUSH;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL2NoYXJ0LWJhc2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWU4QiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9jaGFydHMvYmFzZS9jaGFydC1iYXNlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQ29udGFpbmVyIH0gZnJvbSAncmVjaGFydHMnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBFbXB0eUljb24gfSBmcm9tICcuL2VtcHR5LWljb24nO1xuXG5jb25zdCBCQVNFX1NUWUxFID0gYFxuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5gO1xuXG5jb25zdCBDU1NfUkVDSEFSVFNfQlJVU0ggPSBjc3NgXG4gIC5yZWNoYXJ0cy1sYXllci5yZWNoYXJ0cy1icnVzaCB7XG4gICAgPiByZWN0Om5vdCgucmVjaGFydHMtYnJ1c2gtc2xpZGUpIHtcbiAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgc3Ryb2tlOiAjZjVmNWY3O1xuICAgIH1cbiAgICA+IHJlY3QucmVjaGFydHMtYnJ1c2gtc2xpZGUge1xuICAgICAgZmlsbDogI2M3ZGNmYTtcbiAgICAgIGZpbGwtb3BhY2l0eTogMC40O1xuXG4gICAgICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDsgLyogZmFsbGJhY2sgaWYgZ3JhYiBjdXJzb3IgaXMgdW5zdXBwb3J0ZWQgKi9cbiAgICAgIGN1cnNvcjogZ3JhYiAhaW1wb3J0YW50O1xuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmcgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgPiAucmVjaGFydHMtbGF5ZXIucmVjaGFydHMtYnJ1c2gtdHJhdmVsbGVyIHtcbiAgICAgID4gcmVjdCB7XG4gICAgICAgICNoZWlnaHQ6IDEwcHg7XG4gICAgICAgICN3aWR0aDogOXB4O1xuICAgICAgICAjdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMTBweCk7XG4gICAgICAgIGZpbGw6ICM4Mjg0ODc7XG4gICAgICB9XG4gICAgfVxuICAgID4gLnJlY2hhcnRzLWxheWVyLnJlY2hhcnRzLWJydXNoLXRleHRzIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBSZWNoYXJ0c1Jvb3QgPSBzdHlsZWQuZGl2YFxuICAke0JBU0VfU1RZTEV9XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHN2Zy5yZWNoYXJ0cy1zdXJmYWNlIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICAke0NTU19SRUNIQVJUU19CUlVTSH1cbmA7XG5cbmNvbnN0IEcyUm9vdCA9IHN0eWxlZC5kaXZgXG4gICR7QkFTRV9TVFlMRX1cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBHMlJvb3RXaXRoVW5pdEhlaWdodCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG4vLyBXaHkgQkFTRV9TVFlMRSBoZXJlPyBiZWNhdXNlIFF1YWRyYW50IENoYXJ0IGlzIHVzaW5nIDxDaGFydEVtcHR5IC8+IHdpdGhvdXQgYSBCYXNlXG5jb25zdCBFbXB0eUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICR7QkFTRV9TVFlMRX1cblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmOWY4Zjg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC5jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAuY2hhcnQtZW1wdHktaWNvbiB7XG4gICAgICB3aWR0aDogMTEwcHg7XG4gICAgICBoZWlnaHQ6IDY3cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBjb2xvcjogcmdiKDIwMiwgNjksIDMzKTtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRW1wdHkgPSAoeyBjb250ZW50ID0gJ05vIERhdGEnIH0pID0+IChcbiAgPEVtcHR5Q29udGFpbmVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICA8RW1wdHlJY29uIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57Y29udGVudH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9FbXB0eUNvbnRhaW5lcj5cbik7XG5cbmNvbnN0IFJlY2hhcnRzQ2hhcnRCYXNlID0gKHsgY2hpbGRyZW4sIGVtcHR5ID0gZmFsc2UsIGVtcHR5Q29udGVudCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVjaGFydHNSb290PlxuICAgICAgPFJlc3BvbnNpdmVDb250YWluZXI+e2VtcHR5ID8gPEVtcHR5IGNvbnRlbnQ9e2VtcHR5Q29udGVudH0gLz4gOiBjaGlsZHJlbn08L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgPC9SZWNoYXJ0c1Jvb3Q+XG4gICk7XG59O1xuXG5jb25zdCBHMkNoYXJ0QmFzZSA9ICh7IGNoaWxkcmVuLCBlbXB0eSA9IGZhbHNlLCBlbXB0eUNvbnRlbnQsIGNvbmYgPSB7fSwgY2xhc3NOYW1lID0gJycgfTogYW55KSA9PiB7XG4gIGNvbnN0IFJvb3RDb250YWluZXIgPSBjb25mLnVuaXRIZWlnaHQgPyBHMlJvb3RXaXRoVW5pdEhlaWdodCA6IEcyUm9vdDtcbiAgcmV0dXJuIDxSb290Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57ZW1wdHkgPyA8RW1wdHkgY29udGVudD17ZW1wdHlDb250ZW50fSAvPiA6IGNoaWxkcmVufTwvUm9vdENvbnRhaW5lcj47XG59O1xuXG5leHBvcnQgeyBFbXB0eSBhcyBDaGFydEVtcHR5LCBSZWNoYXJ0c0NoYXJ0QmFzZSwgRzJDaGFydEJhc2UgfTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var RechartsRoot = (0, _styledBase["default"])("div", {
  target: "e1ydktrx0",
  label: "RechartsRoot"
})(BASE_STYLE, " width:100%;height:100%;svg.recharts-surface{overflow:visible;}", CSS_RECHARTS_BRUSH, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL2NoYXJ0LWJhc2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDK0IiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2Jhc2UvY2hhcnQtYmFzZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgRW1wdHlJY29uIH0gZnJvbSAnLi9lbXB0eS1pY29uJztcblxuY29uc3QgQkFTRV9TVFlMRSA9IGBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuYDtcblxuY29uc3QgQ1NTX1JFQ0hBUlRTX0JSVVNIID0gY3NzYFxuICAucmVjaGFydHMtbGF5ZXIucmVjaGFydHMtYnJ1c2gge1xuICAgID4gcmVjdDpub3QoLnJlY2hhcnRzLWJydXNoLXNsaWRlKSB7XG4gICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgIHN0cm9rZTogI2Y1ZjVmNztcbiAgICB9XG4gICAgPiByZWN0LnJlY2hhcnRzLWJydXNoLXNsaWRlIHtcbiAgICAgIGZpbGw6ICNjN2RjZmE7XG4gICAgICBmaWxsLW9wYWNpdHk6IDAuNDtcblxuICAgICAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7IC8qIGZhbGxiYWNrIGlmIGdyYWIgY3Vyc29yIGlzIHVuc3VwcG9ydGVkICovXG4gICAgICBjdXJzb3I6IGdyYWIgIWltcG9ydGFudDtcblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgID4gLnJlY2hhcnRzLWxheWVyLnJlY2hhcnRzLWJydXNoLXRyYXZlbGxlciB7XG4gICAgICA+IHJlY3Qge1xuICAgICAgICAjaGVpZ2h0OiAxMHB4O1xuICAgICAgICAjd2lkdGg6IDlweDtcbiAgICAgICAgI3RyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDEwcHgpO1xuICAgICAgICBmaWxsOiAjODI4NDg3O1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5yZWNoYXJ0cy1sYXllci5yZWNoYXJ0cy1icnVzaC10ZXh0cyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUmVjaGFydHNSb290ID0gc3R5bGVkLmRpdmBcbiAgJHtCQVNFX1NUWUxFfVxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBzdmcucmVjaGFydHMtc3VyZmFjZSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgJHtDU1NfUkVDSEFSVFNfQlJVU0h9XG5gO1xuXG5jb25zdCBHMlJvb3QgPSBzdHlsZWQuZGl2YFxuICAke0JBU0VfU1RZTEV9XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRzJSb290V2l0aFVuaXRIZWlnaHQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuLy8gV2h5IEJBU0VfU1RZTEUgaGVyZT8gYmVjYXVzZSBRdWFkcmFudCBDaGFydCBpcyB1c2luZyA8Q2hhcnRFbXB0eSAvPiB3aXRob3V0IGEgQmFzZVxuY29uc3QgRW1wdHlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke0JBU0VfU1RZTEV9XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjlmOGY4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAuY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLmNoYXJ0LWVtcHR5LWljb24ge1xuICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgaGVpZ2h0OiA2N3B4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6IHJnYigyMDIsIDY5LCAzMyk7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEVtcHR5ID0gKHsgY29udGVudCA9ICdObyBEYXRhJyB9KSA9PiAoXG4gIDxFbXB0eUNvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgPEVtcHR5SWNvbiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NvbnRlbnR9PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvRW1wdHlDb250YWluZXI+XG4pO1xuXG5jb25zdCBSZWNoYXJ0c0NoYXJ0QmFzZSA9ICh7IGNoaWxkcmVuLCBlbXB0eSA9IGZhbHNlLCBlbXB0eUNvbnRlbnQgfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlY2hhcnRzUm9vdD5cbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPntlbXB0eSA/IDxFbXB0eSBjb250ZW50PXtlbXB0eUNvbnRlbnR9IC8+IDogY2hpbGRyZW59PC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgIDwvUmVjaGFydHNSb290PlxuICApO1xufTtcblxuY29uc3QgRzJDaGFydEJhc2UgPSAoeyBjaGlsZHJlbiwgZW1wdHkgPSBmYWxzZSwgZW1wdHlDb250ZW50LCBjb25mID0ge30sIGNsYXNzTmFtZSA9ICcnIH06IGFueSkgPT4ge1xuICBjb25zdCBSb290Q29udGFpbmVyID0gY29uZi51bml0SGVpZ2h0ID8gRzJSb290V2l0aFVuaXRIZWlnaHQgOiBHMlJvb3Q7XG4gIHJldHVybiA8Um9vdENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2VtcHR5ID8gPEVtcHR5IGNvbnRlbnQ9e2VtcHR5Q29udGVudH0gLz4gOiBjaGlsZHJlbn08L1Jvb3RDb250YWluZXI+O1xufTtcblxuZXhwb3J0IHsgRW1wdHkgYXMgQ2hhcnRFbXB0eSwgUmVjaGFydHNDaGFydEJhc2UsIEcyQ2hhcnRCYXNlIH07XG4iXX0= */");
var G2Root = (0, _styledBase["default"])("div", {
  target: "e1ydktrx1",
  label: "G2Root"
})(BASE_STYLE, " width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL2NoYXJ0LWJhc2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEeUIiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2Jhc2UvY2hhcnQtYmFzZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgRW1wdHlJY29uIH0gZnJvbSAnLi9lbXB0eS1pY29uJztcblxuY29uc3QgQkFTRV9TVFlMRSA9IGBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuYDtcblxuY29uc3QgQ1NTX1JFQ0hBUlRTX0JSVVNIID0gY3NzYFxuICAucmVjaGFydHMtbGF5ZXIucmVjaGFydHMtYnJ1c2gge1xuICAgID4gcmVjdDpub3QoLnJlY2hhcnRzLWJydXNoLXNsaWRlKSB7XG4gICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgIHN0cm9rZTogI2Y1ZjVmNztcbiAgICB9XG4gICAgPiByZWN0LnJlY2hhcnRzLWJydXNoLXNsaWRlIHtcbiAgICAgIGZpbGw6ICNjN2RjZmE7XG4gICAgICBmaWxsLW9wYWNpdHk6IDAuNDtcblxuICAgICAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7IC8qIGZhbGxiYWNrIGlmIGdyYWIgY3Vyc29yIGlzIHVuc3VwcG9ydGVkICovXG4gICAgICBjdXJzb3I6IGdyYWIgIWltcG9ydGFudDtcblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgID4gLnJlY2hhcnRzLWxheWVyLnJlY2hhcnRzLWJydXNoLXRyYXZlbGxlciB7XG4gICAgICA+IHJlY3Qge1xuICAgICAgICAjaGVpZ2h0OiAxMHB4O1xuICAgICAgICAjd2lkdGg6IDlweDtcbiAgICAgICAgI3RyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDEwcHgpO1xuICAgICAgICBmaWxsOiAjODI4NDg3O1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5yZWNoYXJ0cy1sYXllci5yZWNoYXJ0cy1icnVzaC10ZXh0cyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUmVjaGFydHNSb290ID0gc3R5bGVkLmRpdmBcbiAgJHtCQVNFX1NUWUxFfVxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBzdmcucmVjaGFydHMtc3VyZmFjZSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgJHtDU1NfUkVDSEFSVFNfQlJVU0h9XG5gO1xuXG5jb25zdCBHMlJvb3QgPSBzdHlsZWQuZGl2YFxuICAke0JBU0VfU1RZTEV9XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRzJSb290V2l0aFVuaXRIZWlnaHQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuLy8gV2h5IEJBU0VfU1RZTEUgaGVyZT8gYmVjYXVzZSBRdWFkcmFudCBDaGFydCBpcyB1c2luZyA8Q2hhcnRFbXB0eSAvPiB3aXRob3V0IGEgQmFzZVxuY29uc3QgRW1wdHlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke0JBU0VfU1RZTEV9XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjlmOGY4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAuY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLmNoYXJ0LWVtcHR5LWljb24ge1xuICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgaGVpZ2h0OiA2N3B4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6IHJnYigyMDIsIDY5LCAzMyk7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEVtcHR5ID0gKHsgY29udGVudCA9ICdObyBEYXRhJyB9KSA9PiAoXG4gIDxFbXB0eUNvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgPEVtcHR5SWNvbiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NvbnRlbnR9PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvRW1wdHlDb250YWluZXI+XG4pO1xuXG5jb25zdCBSZWNoYXJ0c0NoYXJ0QmFzZSA9ICh7IGNoaWxkcmVuLCBlbXB0eSA9IGZhbHNlLCBlbXB0eUNvbnRlbnQgfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlY2hhcnRzUm9vdD5cbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPntlbXB0eSA/IDxFbXB0eSBjb250ZW50PXtlbXB0eUNvbnRlbnR9IC8+IDogY2hpbGRyZW59PC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgIDwvUmVjaGFydHNSb290PlxuICApO1xufTtcblxuY29uc3QgRzJDaGFydEJhc2UgPSAoeyBjaGlsZHJlbiwgZW1wdHkgPSBmYWxzZSwgZW1wdHlDb250ZW50LCBjb25mID0ge30sIGNsYXNzTmFtZSA9ICcnIH06IGFueSkgPT4ge1xuICBjb25zdCBSb290Q29udGFpbmVyID0gY29uZi51bml0SGVpZ2h0ID8gRzJSb290V2l0aFVuaXRIZWlnaHQgOiBHMlJvb3Q7XG4gIHJldHVybiA8Um9vdENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2VtcHR5ID8gPEVtcHR5IGNvbnRlbnQ9e2VtcHR5Q29udGVudH0gLz4gOiBjaGlsZHJlbn08L1Jvb3RDb250YWluZXI+O1xufTtcblxuZXhwb3J0IHsgRW1wdHkgYXMgQ2hhcnRFbXB0eSwgUmVjaGFydHNDaGFydEJhc2UsIEcyQ2hhcnRCYXNlIH07XG4iXX0= */"));
var G2RootWithUnitHeight = (0, _styledBase["default"])("div", {
  target: "e1ydktrx2",
  label: "G2RootWithUnitHeight"
})(process.env.NODE_ENV === "production" ? {
  name: "uwwqev",
  styles: "width:100%;height:100%;"
} : {
  name: "uwwqev",
  styles: "width:100%;height:100%;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL2NoYXJ0LWJhc2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFdUMiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2Jhc2UvY2hhcnQtYmFzZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgRW1wdHlJY29uIH0gZnJvbSAnLi9lbXB0eS1pY29uJztcblxuY29uc3QgQkFTRV9TVFlMRSA9IGBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuYDtcblxuY29uc3QgQ1NTX1JFQ0hBUlRTX0JSVVNIID0gY3NzYFxuICAucmVjaGFydHMtbGF5ZXIucmVjaGFydHMtYnJ1c2gge1xuICAgID4gcmVjdDpub3QoLnJlY2hhcnRzLWJydXNoLXNsaWRlKSB7XG4gICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgIHN0cm9rZTogI2Y1ZjVmNztcbiAgICB9XG4gICAgPiByZWN0LnJlY2hhcnRzLWJydXNoLXNsaWRlIHtcbiAgICAgIGZpbGw6ICNjN2RjZmE7XG4gICAgICBmaWxsLW9wYWNpdHk6IDAuNDtcblxuICAgICAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7IC8qIGZhbGxiYWNrIGlmIGdyYWIgY3Vyc29yIGlzIHVuc3VwcG9ydGVkICovXG4gICAgICBjdXJzb3I6IGdyYWIgIWltcG9ydGFudDtcblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgID4gLnJlY2hhcnRzLWxheWVyLnJlY2hhcnRzLWJydXNoLXRyYXZlbGxlciB7XG4gICAgICA+IHJlY3Qge1xuICAgICAgICAjaGVpZ2h0OiAxMHB4O1xuICAgICAgICAjd2lkdGg6IDlweDtcbiAgICAgICAgI3RyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDEwcHgpO1xuICAgICAgICBmaWxsOiAjODI4NDg3O1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5yZWNoYXJ0cy1sYXllci5yZWNoYXJ0cy1icnVzaC10ZXh0cyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUmVjaGFydHNSb290ID0gc3R5bGVkLmRpdmBcbiAgJHtCQVNFX1NUWUxFfVxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBzdmcucmVjaGFydHMtc3VyZmFjZSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgJHtDU1NfUkVDSEFSVFNfQlJVU0h9XG5gO1xuXG5jb25zdCBHMlJvb3QgPSBzdHlsZWQuZGl2YFxuICAke0JBU0VfU1RZTEV9XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRzJSb290V2l0aFVuaXRIZWlnaHQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuLy8gV2h5IEJBU0VfU1RZTEUgaGVyZT8gYmVjYXVzZSBRdWFkcmFudCBDaGFydCBpcyB1c2luZyA8Q2hhcnRFbXB0eSAvPiB3aXRob3V0IGEgQmFzZVxuY29uc3QgRW1wdHlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke0JBU0VfU1RZTEV9XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjlmOGY4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAuY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLmNoYXJ0LWVtcHR5LWljb24ge1xuICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgaGVpZ2h0OiA2N3B4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6IHJnYigyMDIsIDY5LCAzMyk7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEVtcHR5ID0gKHsgY29udGVudCA9ICdObyBEYXRhJyB9KSA9PiAoXG4gIDxFbXB0eUNvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgPEVtcHR5SWNvbiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NvbnRlbnR9PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvRW1wdHlDb250YWluZXI+XG4pO1xuXG5jb25zdCBSZWNoYXJ0c0NoYXJ0QmFzZSA9ICh7IGNoaWxkcmVuLCBlbXB0eSA9IGZhbHNlLCBlbXB0eUNvbnRlbnQgfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlY2hhcnRzUm9vdD5cbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPntlbXB0eSA/IDxFbXB0eSBjb250ZW50PXtlbXB0eUNvbnRlbnR9IC8+IDogY2hpbGRyZW59PC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgIDwvUmVjaGFydHNSb290PlxuICApO1xufTtcblxuY29uc3QgRzJDaGFydEJhc2UgPSAoeyBjaGlsZHJlbiwgZW1wdHkgPSBmYWxzZSwgZW1wdHlDb250ZW50LCBjb25mID0ge30sIGNsYXNzTmFtZSA9ICcnIH06IGFueSkgPT4ge1xuICBjb25zdCBSb290Q29udGFpbmVyID0gY29uZi51bml0SGVpZ2h0ID8gRzJSb290V2l0aFVuaXRIZWlnaHQgOiBHMlJvb3Q7XG4gIHJldHVybiA8Um9vdENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2VtcHR5ID8gPEVtcHR5IGNvbnRlbnQ9e2VtcHR5Q29udGVudH0gLz4gOiBjaGlsZHJlbn08L1Jvb3RDb250YWluZXI+O1xufTtcblxuZXhwb3J0IHsgRW1wdHkgYXMgQ2hhcnRFbXB0eSwgUmVjaGFydHNDaGFydEJhc2UsIEcyQ2hhcnRCYXNlIH07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
}); // Why BASE_STYLE here? because Quadrant Chart is using <ChartEmpty /> without a Base

var EmptyContainer = (0, _styledBase["default"])("div", {
  target: "e1ydktrx3",
  label: "EmptyContainer"
})(BASE_STYLE, " position:relative;background:#f9f8f8;width:100%;height:100%;.center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);.chart-empty-icon{width:110px;height:67px;display:block;margin:0 auto;}.content{margin-top:4px;text-align:center;font-size:18px;color:rgb(202,69,33);user-select:none;opacity:0.7;}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL2NoYXJ0LWJhc2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFaUMiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2Jhc2UvY2hhcnQtYmFzZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgRW1wdHlJY29uIH0gZnJvbSAnLi9lbXB0eS1pY29uJztcblxuY29uc3QgQkFTRV9TVFlMRSA9IGBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuYDtcblxuY29uc3QgQ1NTX1JFQ0hBUlRTX0JSVVNIID0gY3NzYFxuICAucmVjaGFydHMtbGF5ZXIucmVjaGFydHMtYnJ1c2gge1xuICAgID4gcmVjdDpub3QoLnJlY2hhcnRzLWJydXNoLXNsaWRlKSB7XG4gICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgIHN0cm9rZTogI2Y1ZjVmNztcbiAgICB9XG4gICAgPiByZWN0LnJlY2hhcnRzLWJydXNoLXNsaWRlIHtcbiAgICAgIGZpbGw6ICNjN2RjZmE7XG4gICAgICBmaWxsLW9wYWNpdHk6IDAuNDtcblxuICAgICAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7IC8qIGZhbGxiYWNrIGlmIGdyYWIgY3Vyc29yIGlzIHVuc3VwcG9ydGVkICovXG4gICAgICBjdXJzb3I6IGdyYWIgIWltcG9ydGFudDtcblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgID4gLnJlY2hhcnRzLWxheWVyLnJlY2hhcnRzLWJydXNoLXRyYXZlbGxlciB7XG4gICAgICA+IHJlY3Qge1xuICAgICAgICAjaGVpZ2h0OiAxMHB4O1xuICAgICAgICAjd2lkdGg6IDlweDtcbiAgICAgICAgI3RyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDEwcHgpO1xuICAgICAgICBmaWxsOiAjODI4NDg3O1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5yZWNoYXJ0cy1sYXllci5yZWNoYXJ0cy1icnVzaC10ZXh0cyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUmVjaGFydHNSb290ID0gc3R5bGVkLmRpdmBcbiAgJHtCQVNFX1NUWUxFfVxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBzdmcucmVjaGFydHMtc3VyZmFjZSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgJHtDU1NfUkVDSEFSVFNfQlJVU0h9XG5gO1xuXG5jb25zdCBHMlJvb3QgPSBzdHlsZWQuZGl2YFxuICAke0JBU0VfU1RZTEV9XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRzJSb290V2l0aFVuaXRIZWlnaHQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuLy8gV2h5IEJBU0VfU1RZTEUgaGVyZT8gYmVjYXVzZSBRdWFkcmFudCBDaGFydCBpcyB1c2luZyA8Q2hhcnRFbXB0eSAvPiB3aXRob3V0IGEgQmFzZVxuY29uc3QgRW1wdHlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke0JBU0VfU1RZTEV9XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjlmOGY4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAuY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLmNoYXJ0LWVtcHR5LWljb24ge1xuICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgaGVpZ2h0OiA2N3B4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6IHJnYigyMDIsIDY5LCAzMyk7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEVtcHR5ID0gKHsgY29udGVudCA9ICdObyBEYXRhJyB9KSA9PiAoXG4gIDxFbXB0eUNvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgPEVtcHR5SWNvbiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NvbnRlbnR9PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvRW1wdHlDb250YWluZXI+XG4pO1xuXG5jb25zdCBSZWNoYXJ0c0NoYXJ0QmFzZSA9ICh7IGNoaWxkcmVuLCBlbXB0eSA9IGZhbHNlLCBlbXB0eUNvbnRlbnQgfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlY2hhcnRzUm9vdD5cbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPntlbXB0eSA/IDxFbXB0eSBjb250ZW50PXtlbXB0eUNvbnRlbnR9IC8+IDogY2hpbGRyZW59PC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgIDwvUmVjaGFydHNSb290PlxuICApO1xufTtcblxuY29uc3QgRzJDaGFydEJhc2UgPSAoeyBjaGlsZHJlbiwgZW1wdHkgPSBmYWxzZSwgZW1wdHlDb250ZW50LCBjb25mID0ge30sIGNsYXNzTmFtZSA9ICcnIH06IGFueSkgPT4ge1xuICBjb25zdCBSb290Q29udGFpbmVyID0gY29uZi51bml0SGVpZ2h0ID8gRzJSb290V2l0aFVuaXRIZWlnaHQgOiBHMlJvb3Q7XG4gIHJldHVybiA8Um9vdENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2VtcHR5ID8gPEVtcHR5IGNvbnRlbnQ9e2VtcHR5Q29udGVudH0gLz4gOiBjaGlsZHJlbn08L1Jvb3RDb250YWluZXI+O1xufTtcblxuZXhwb3J0IHsgRW1wdHkgYXMgQ2hhcnRFbXB0eSwgUmVjaGFydHNDaGFydEJhc2UsIEcyQ2hhcnRCYXNlIH07XG4iXX0= */"));

var Empty = function Empty(_ref) {
  var _ref$content = _ref.content,
      content = _ref$content === void 0 ? 'No Data' : _ref$content;
  return /*#__PURE__*/_react["default"].createElement(EmptyContainer, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "center"
  }, /*#__PURE__*/_react["default"].createElement(_emptyIcon.EmptyIcon, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, content)));
};

exports.ChartEmpty = Empty;

var RechartsChartBase = function RechartsChartBase(_ref2) {
  var children = _ref2.children,
      _ref2$empty = _ref2.empty,
      empty = _ref2$empty === void 0 ? false : _ref2$empty,
      emptyContent = _ref2.emptyContent;
  return /*#__PURE__*/_react["default"].createElement(RechartsRoot, null, /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, null, empty ? /*#__PURE__*/_react["default"].createElement(Empty, {
    content: emptyContent
  }) : children));
};

exports.RechartsChartBase = RechartsChartBase;

var G2ChartBase = function G2ChartBase(_ref3) {
  var children = _ref3.children,
      _ref3$empty = _ref3.empty,
      empty = _ref3$empty === void 0 ? false : _ref3$empty,
      emptyContent = _ref3.emptyContent,
      _ref3$conf = _ref3.conf,
      conf = _ref3$conf === void 0 ? {} : _ref3$conf,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? '' : _ref3$className;
  var RootContainer = conf.unitHeight ? G2RootWithUnitHeight : G2Root;
  return /*#__PURE__*/_react["default"].createElement(RootContainer, {
    className: className
  }, empty ? /*#__PURE__*/_react["default"].createElement(Empty, {
    content: emptyContent
  }) : children);
};

exports.G2ChartBase = G2ChartBase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXNlL2NoYXJ0LWJhc2UudHN4Il0sIm5hbWVzIjpbIkJBU0VfU1RZTEUiLCJDU1NfUkVDSEFSVFNfQlJVU0giLCJSZWNoYXJ0c1Jvb3QiLCJHMlJvb3QiLCJHMlJvb3RXaXRoVW5pdEhlaWdodCIsIkVtcHR5Q29udGFpbmVyIiwiRW1wdHkiLCJjb250ZW50IiwiUmVjaGFydHNDaGFydEJhc2UiLCJjaGlsZHJlbiIsImVtcHR5IiwiZW1wdHlDb250ZW50IiwiRzJDaGFydEJhc2UiLCJjb25mIiwiY2xhc3NOYW1lIiwiUm9vdENvbnRhaW5lciIsInVuaXRIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxVQUFVLG1KQUFoQjtBQVNBLElBQU1DLGtCQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUErQkEsSUFBTUMsWUFBWTtBQUFBO0FBQUE7QUFBQSxHQUNkRixVQURjLHFFQU9kQyxrQkFQYyx5dklBQWxCO0FBVUEsSUFBTUUsTUFBTTtBQUFBO0FBQUE7QUFBQSxHQUNSSCxVQURRLHEySUFBWjtBQVVBLElBQU1JLG9CQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBMUIsQyxDQUtBOztBQUNBLElBQU1DLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FDaEJMLFVBRGdCLDJqSkFBcEI7O0FBOEJBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsMEJBQUdDLE9BQUg7QUFBQSxNQUFHQSxPQUFILDZCQUFhLFNBQWI7QUFBQSxzQkFDWixnQ0FBQyxjQUFELHFCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnQ0FBQyxvQkFBRCxPQURGLGVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTBCQSxPQUExQixDQUZGLENBREYsQ0FEWTtBQUFBLENBQWQ7Ozs7QUFTQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLFFBQW9EO0FBQUEsTUFBakRDLFFBQWlELFNBQWpEQSxRQUFpRDtBQUFBLDBCQUF2Q0MsS0FBdUM7QUFBQSxNQUF2Q0EsS0FBdUMsNEJBQS9CLEtBQStCO0FBQUEsTUFBeEJDLFlBQXdCLFNBQXhCQSxZQUF3QjtBQUM1RSxzQkFDRSxnQ0FBQyxZQUFELHFCQUNFLGdDQUFDLDZCQUFELFFBQXNCRCxLQUFLLGdCQUFHLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLE9BQU8sRUFBRUM7QUFBaEIsSUFBSCxHQUFzQ0YsUUFBakUsQ0FERixDQURGO0FBS0QsQ0FORDs7OztBQVFBLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFFBQStFO0FBQUEsTUFBNUVILFFBQTRFLFNBQTVFQSxRQUE0RTtBQUFBLDBCQUFsRUMsS0FBa0U7QUFBQSxNQUFsRUEsS0FBa0UsNEJBQTFELEtBQTBEO0FBQUEsTUFBbkRDLFlBQW1ELFNBQW5EQSxZQUFtRDtBQUFBLHlCQUFyQ0UsSUFBcUM7QUFBQSxNQUFyQ0EsSUFBcUMsMkJBQTlCLEVBQThCO0FBQUEsOEJBQTFCQyxTQUEwQjtBQUFBLE1BQTFCQSxTQUEwQixnQ0FBZCxFQUFjO0FBQ2pHLE1BQU1DLGFBQWEsR0FBR0YsSUFBSSxDQUFDRyxVQUFMLEdBQWtCWixvQkFBbEIsR0FBeUNELE1BQS9EO0FBQ0Esc0JBQU8sZ0NBQUMsYUFBRDtBQUFlLElBQUEsU0FBUyxFQUFFVztBQUExQixLQUFzQ0osS0FBSyxnQkFBRyxnQ0FBQyxLQUFEO0FBQU8sSUFBQSxPQUFPLEVBQUVDO0FBQWhCLElBQUgsR0FBc0NGLFFBQWpGLENBQVA7QUFDRCxDQUhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IFJlc3BvbnNpdmVDb250YWluZXIgfSBmcm9tICdyZWNoYXJ0cyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IEVtcHR5SWNvbiB9IGZyb20gJy4vZW1wdHktaWNvbic7XG5cbmNvbnN0IEJBU0VfU1RZTEUgPSBgXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbmA7XG5cbmNvbnN0IENTU19SRUNIQVJUU19CUlVTSCA9IGNzc2BcbiAgLnJlY2hhcnRzLWxheWVyLnJlY2hhcnRzLWJydXNoIHtcbiAgICA+IHJlY3Q6bm90KC5yZWNoYXJ0cy1icnVzaC1zbGlkZSkge1xuICAgICAgZmlsbDogd2hpdGU7XG4gICAgICBzdHJva2U6ICNmNWY1Zjc7XG4gICAgfVxuICAgID4gcmVjdC5yZWNoYXJ0cy1icnVzaC1zbGlkZSB7XG4gICAgICBmaWxsOiAjYzdkY2ZhO1xuICAgICAgZmlsbC1vcGFjaXR5OiAwLjQ7XG5cbiAgICAgIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50OyAvKiBmYWxsYmFjayBpZiBncmFiIGN1cnNvciBpcyB1bnN1cHBvcnRlZCAqL1xuICAgICAgY3Vyc29yOiBncmFiICFpbXBvcnRhbnQ7XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5yZWNoYXJ0cy1sYXllci5yZWNoYXJ0cy1icnVzaC10cmF2ZWxsZXIge1xuICAgICAgPiByZWN0IHtcbiAgICAgICAgI2hlaWdodDogMTBweDtcbiAgICAgICAgI3dpZHRoOiA5cHg7XG4gICAgICAgICN0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAxMHB4KTtcbiAgICAgICAgZmlsbDogIzgyODQ4NztcbiAgICAgIH1cbiAgICB9XG4gICAgPiAucmVjaGFydHMtbGF5ZXIucmVjaGFydHMtYnJ1c2gtdGV4dHMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFJlY2hhcnRzUm9vdCA9IHN0eWxlZC5kaXZgXG4gICR7QkFTRV9TVFlMRX1cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgc3ZnLnJlY2hhcnRzLXN1cmZhY2Uge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG4gICR7Q1NTX1JFQ0hBUlRTX0JSVVNIfVxuYDtcblxuY29uc3QgRzJSb290ID0gc3R5bGVkLmRpdmBcbiAgJHtCQVNFX1NUWUxFfVxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEcyUm9vdFdpdGhVbml0SGVpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbi8vIFdoeSBCQVNFX1NUWUxFIGhlcmU/IGJlY2F1c2UgUXVhZHJhbnQgQ2hhcnQgaXMgdXNpbmcgPENoYXJ0RW1wdHkgLz4gd2l0aG91dCBhIEJhc2VcbmNvbnN0IEVtcHR5Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHtCQVNFX1NUWUxFfVxuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2Y5ZjhmODtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLmNlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIC5jaGFydC1lbXB0eS1pY29uIHtcbiAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgIGhlaWdodDogNjdweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiByZ2IoMjAyLCA2OSwgMzMpO1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBFbXB0eSA9ICh7IGNvbnRlbnQgPSAnTm8gRGF0YScgfSkgPT4gKFxuICA8RW1wdHlDb250YWluZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgIDxFbXB0eUljb24gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntjb250ZW50fTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L0VtcHR5Q29udGFpbmVyPlxuKTtcblxuY29uc3QgUmVjaGFydHNDaGFydEJhc2UgPSAoeyBjaGlsZHJlbiwgZW1wdHkgPSBmYWxzZSwgZW1wdHlDb250ZW50IH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWNoYXJ0c1Jvb3Q+XG4gICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lcj57ZW1wdHkgPyA8RW1wdHkgY29udGVudD17ZW1wdHlDb250ZW50fSAvPiA6IGNoaWxkcmVufTwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICA8L1JlY2hhcnRzUm9vdD5cbiAgKTtcbn07XG5cbmNvbnN0IEcyQ2hhcnRCYXNlID0gKHsgY2hpbGRyZW4sIGVtcHR5ID0gZmFsc2UsIGVtcHR5Q29udGVudCwgY29uZiA9IHt9LCBjbGFzc05hbWUgPSAnJyB9OiBhbnkpID0+IHtcbiAgY29uc3QgUm9vdENvbnRhaW5lciA9IGNvbmYudW5pdEhlaWdodCA/IEcyUm9vdFdpdGhVbml0SGVpZ2h0IDogRzJSb290O1xuICByZXR1cm4gPFJvb3RDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntlbXB0eSA/IDxFbXB0eSBjb250ZW50PXtlbXB0eUNvbnRlbnR9IC8+IDogY2hpbGRyZW59PC9Sb290Q29udGFpbmVyPjtcbn07XG5cbmV4cG9ydCB7IEVtcHR5IGFzIENoYXJ0RW1wdHksIFJlY2hhcnRzQ2hhcnRCYXNlLCBHMkNoYXJ0QmFzZSB9O1xuIl19