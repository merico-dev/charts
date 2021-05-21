"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.useFilteredSeries = useFilteredSeries;

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = require("react");

function arrayAndSetMatch(array, set) {
  if (!array && !set || !array.length && !set.size) {
    return true;
  }

  if (!array || !set) {
    return false;
  }

  if (array.length !== set.size) {
    return false;
  }

  return array.every(function (item) {
    return set.has(item);
  });
}

function useFilteredSeries(initial, callback) {
  var _useState = (0, _react.useState)(new _set["default"](initial)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      filtered = _useState2[0],
      setFiltered = _useState2[1]; // filtered -> initial


  (0, _react.useEffect)(function () {
    if (!callback) {
      return;
    }

    if (arrayAndSetMatch(initial, filtered)) {
      return;
    }

    callback((0, _from["default"])(filtered));
  }, [filtered]); // initial -> filtered

  (0, _react.useEffect)(function () {
    if (arrayAndSetMatch(initial, filtered)) {
      return;
    }

    setFiltered(new _set["default"](initial));
  }, [initial.length]);
  return [filtered, setFiltered];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlbHBlcnMvaG9va3MudHMiXSwibmFtZXMiOlsiYXJyYXlBbmRTZXRNYXRjaCIsImFycmF5Iiwic2V0IiwibGVuZ3RoIiwic2l6ZSIsImV2ZXJ5IiwiaXRlbSIsImhhcyIsInVzZUZpbHRlcmVkU2VyaWVzIiwiaW5pdGlhbCIsImNhbGxiYWNrIiwiZmlsdGVyZWQiLCJzZXRGaWx0ZXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQXNDQyxHQUF0QyxFQUFnRDtBQUM5QyxNQUFLLENBQUNELEtBQUQsSUFBVSxDQUFDQyxHQUFaLElBQXFCLENBQUNELEtBQUssQ0FBQ0UsTUFBUCxJQUFpQixDQUFDRCxHQUFHLENBQUNFLElBQS9DLEVBQXNEO0FBQ3BELFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQUksQ0FBQ0gsS0FBRCxJQUFVLENBQUNDLEdBQWYsRUFBb0I7QUFDbEIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBSUQsS0FBSyxDQUFDRSxNQUFOLEtBQWlCRCxHQUFHLENBQUNFLElBQXpCLEVBQStCO0FBQzdCLFdBQU8sS0FBUDtBQUNEOztBQUNELFNBQU9ILEtBQUssQ0FBQ0ksS0FBTixDQUFZLFVBQUNDLElBQUQ7QUFBQSxXQUFlSixHQUFHLENBQUNLLEdBQUosQ0FBUUQsSUFBUixDQUFmO0FBQUEsR0FBWixDQUFQO0FBQ0Q7O0FBRU0sU0FBU0UsaUJBQVQsQ0FBMkJDLE9BQTNCLEVBQThDQyxRQUE5QyxFQUF3RjtBQUFBLGtCQUM3RCxxQkFBOEIsb0JBQVFELE9BQVIsQ0FBOUIsQ0FENkQ7QUFBQTtBQUFBLE1BQ3RGRSxRQURzRjtBQUFBLE1BQzVFQyxXQUQ0RSxrQkFHN0Y7OztBQUNBLHdCQUFVLFlBQU07QUFDZCxRQUFJLENBQUNGLFFBQUwsRUFBZTtBQUNiO0FBQ0Q7O0FBQ0QsUUFBSVYsZ0JBQWdCLENBQUNTLE9BQUQsRUFBVUUsUUFBVixDQUFwQixFQUF5QztBQUN2QztBQUNEOztBQUVERCxJQUFBQSxRQUFRLENBQUMsc0JBQVdDLFFBQVgsQ0FBRCxDQUFSO0FBQ0QsR0FURCxFQVNHLENBQUNBLFFBQUQsQ0FUSCxFQUo2RixDQWU3Rjs7QUFDQSx3QkFBVSxZQUFNO0FBQ2QsUUFBSVgsZ0JBQWdCLENBQUNTLE9BQUQsRUFBVUUsUUFBVixDQUFwQixFQUF5QztBQUN2QztBQUNEOztBQUNEQyxJQUFBQSxXQUFXLENBQUMsb0JBQVFILE9BQVIsQ0FBRCxDQUFYO0FBQ0QsR0FMRCxFQUtHLENBQUNBLE9BQU8sQ0FBQ04sTUFBVCxDQUxIO0FBT0EsU0FBTyxDQUFDUSxRQUFELEVBQVdDLFdBQVgsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gYXJyYXlBbmRTZXRNYXRjaChhcnJheTogYW55LCBzZXQ6IGFueSkge1xuICBpZiAoKCFhcnJheSAmJiAhc2V0KSB8fCAoIWFycmF5Lmxlbmd0aCAmJiAhc2V0LnNpemUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFhcnJheSB8fCAhc2V0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChhcnJheS5sZW5ndGggIT09IHNldC5zaXplKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBhcnJheS5ldmVyeSgoaXRlbTogYW55KSA9PiBzZXQuaGFzKGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZpbHRlcmVkU2VyaWVzKGluaXRpYWw6IHN0cmluZ1tdLCBjYWxsYmFjaz86IChuZXdTZXJpZXM6IHN0cmluZ1tdKSA9PiB2b2lkKSB7XG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGU8UmVhZG9ubHlTZXQ8c3RyaW5nPj4obmV3IFNldChpbml0aWFsKSk7XG5cbiAgLy8gZmlsdGVyZWQgLT4gaW5pdGlhbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFycmF5QW5kU2V0TWF0Y2goaW5pdGlhbCwgZmlsdGVyZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FsbGJhY2soQXJyYXkuZnJvbShmaWx0ZXJlZCkpO1xuICB9LCBbZmlsdGVyZWRdKTtcblxuICAvLyBpbml0aWFsIC0+IGZpbHRlcmVkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFycmF5QW5kU2V0TWF0Y2goaW5pdGlhbCwgZmlsdGVyZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEZpbHRlcmVkKG5ldyBTZXQoaW5pdGlhbCkpO1xuICB9LCBbaW5pdGlhbC5sZW5ndGhdKTtcblxuICByZXR1cm4gW2ZpbHRlcmVkLCBzZXRGaWx0ZXJlZF0gYXMgY29uc3Q7XG59XG4iXX0=