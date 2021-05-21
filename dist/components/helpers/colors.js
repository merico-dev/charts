"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getColorGenerator = getColorGenerator;
exports.deriveColorByIndex = exports.CHART_COLOR_PALETTE = void 0;

var _isFinite = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/number/is-finite"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/is-array"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _marked = /*#__PURE__*/_regenerator["default"].mark(getColorGenerator);

var CHART_COLOR_PALETTE = ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E86452', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3', '#A67464', '#6C6C6C'];
exports.CHART_COLOR_PALETTE = CHART_COLOR_PALETTE;

function getColorGenerator(initial) {
  var palette,
      i,
      _args = arguments;
  return _regenerator["default"].wrap(function getColorGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          palette = _args.length > 1 && _args[1] !== undefined ? _args[1] : CHART_COLOR_PALETTE;

          if (!initial) {
            _context.next = 4;
            break;
          }

          _context.next = 4;
          return initial;

        case 4:
          i = 0;

        case 5:
          if (!true) {
            _context.next = 11;
            break;
          }

          _context.next = 8;
          return palette[i % palette.length];

        case 8:
          i++;
          _context.next = 5;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var deriveColorByIndex = function deriveColorByIndex(index) {
  var palette = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CHART_COLOR_PALETTE;

  if (!(0, _isArray["default"])(palette)) {
    return CHART_COLOR_PALETTE[0];
  }

  if (!(0, _isFinite["default"])(index) || index < 0) {
    return palette[0];
  }

  index = Math.round(index) % palette.length;
  return palette[index];
};

exports.deriveColorByIndex = deriveColorByIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlbHBlcnMvY29sb3JzLnRzIl0sIm5hbWVzIjpbImdldENvbG9yR2VuZXJhdG9yIiwiQ0hBUlRfQ09MT1JfUEFMRVRURSIsImluaXRpYWwiLCJwYWxldHRlIiwiaSIsImxlbmd0aCIsImRlcml2ZUNvbG9yQnlJbmRleCIsImluZGV4IiwiTWF0aCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dEQWVpQkEsaUI7O0FBZlYsSUFBTUMsbUJBQW1CLEdBQUcsQ0FDakMsU0FEaUMsRUFFakMsU0FGaUMsRUFHakMsU0FIaUMsRUFJakMsU0FKaUMsRUFLakMsU0FMaUMsRUFNakMsU0FOaUMsRUFPakMsU0FQaUMsRUFRakMsU0FSaUMsRUFTakMsU0FUaUMsRUFVakMsU0FWaUMsRUFXakMsU0FYaUMsRUFZakMsU0FaaUMsQ0FBNUI7OztBQWVBLFNBQVVELGlCQUFWLENBQTRCRSxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThDQyxVQUFBQSxPQUE5QywyREFBd0RGLG1CQUF4RDs7QUFBQSxlQUNEQyxPQURDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRUgsaUJBQU1BLE9BQU47O0FBRkc7QUFLREUsVUFBQUEsQ0FMQyxHQUtHLENBTEg7O0FBQUE7QUFBQSxlQU1FLElBTkY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFPSCxpQkFBTUQsT0FBTyxDQUFDQyxDQUFDLEdBQUdELE9BQU8sQ0FBQ0UsTUFBYixDQUFiOztBQVBHO0FBUUhELFVBQUFBLENBQUM7QUFSRTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVlBLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsS0FBRCxFQUFrRDtBQUFBLE1BQWxDSixPQUFrQyx1RUFBeEJGLG1CQUF3Qjs7QUFDbEYsTUFBSSxDQUFDLHlCQUFjRSxPQUFkLENBQUwsRUFBNkI7QUFDM0IsV0FBT0YsbUJBQW1CLENBQUMsQ0FBRCxDQUExQjtBQUNEOztBQUNELE1BQUksQ0FBQywwQkFBZ0JNLEtBQWhCLENBQUQsSUFBMkJBLEtBQUssR0FBRyxDQUF2QyxFQUEwQztBQUN4QyxXQUFPSixPQUFPLENBQUMsQ0FBRCxDQUFkO0FBQ0Q7O0FBQ0RJLEVBQUFBLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdGLEtBQVgsSUFBb0JKLE9BQU8sQ0FBQ0UsTUFBcEM7QUFDQSxTQUFPRixPQUFPLENBQUNJLEtBQUQsQ0FBZDtBQUNELENBVE0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ0hBUlRfQ09MT1JfUEFMRVRURSA9IFtcbiAgJyM1QjhGRjknLFxuICAnIzVBRDhBNicsXG4gICcjNUQ3MDkyJyxcbiAgJyNGNkJEMTYnLFxuICAnI0U4NjQ1MicsXG4gICcjNkRDOEVDJyxcbiAgJyM5NDVGQjknLFxuICAnI0ZGOTg0NScsXG4gICcjMUU5NDkzJyxcbiAgJyNGRjk5QzMnLFxuICAnI0E2NzQ2NCcsXG4gICcjNkM2QzZDJyxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0Q29sb3JHZW5lcmF0b3IoaW5pdGlhbD86IHN0cmluZywgcGFsZXR0ZSA9IENIQVJUX0NPTE9SX1BBTEVUVEUpOiBHZW5lcmF0b3I8c3RyaW5nLCBzdHJpbmc+IHtcbiAgaWYgKGluaXRpYWwpIHtcbiAgICB5aWVsZCBpbml0aWFsO1xuICB9XG5cbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHlpZWxkIHBhbGV0dGVbaSAlIHBhbGV0dGUubGVuZ3RoXTtcbiAgICBpKys7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlcml2ZUNvbG9yQnlJbmRleCA9IChpbmRleDogbnVtYmVyLCBwYWxldHRlID0gQ0hBUlRfQ09MT1JfUEFMRVRURSkgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocGFsZXR0ZSkpIHtcbiAgICByZXR1cm4gQ0hBUlRfQ09MT1JfUEFMRVRURVswXTtcbiAgfVxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShpbmRleCkgfHwgaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIHBhbGV0dGVbMF07XG4gIH1cbiAgaW5kZXggPSBNYXRoLnJvdW5kKGluZGV4KSAlIHBhbGV0dGUubGVuZ3RoO1xuICByZXR1cm4gcGFsZXR0ZVtpbmRleF07XG59O1xuIl19