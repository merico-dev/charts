"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.deepFind = deepFind;
exports.clip = clip;
exports.deriveG2VerticalGuideEndpointPos = exports.deriveG2HorizontalGuideEndpointPos = exports.truncateLabel = exports.isSeriesEmpty = void 0;

var _isFinite = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/number/is-finite"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/is-array"));

var _lodash = require("lodash");

function deepFind(obj, path, separator) {
  var paths = path.split(separator);
  var current = obj;

  for (var i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined;
    }

    current = current[paths[i]];
  }

  return current;
}

function areRowsEmpty(rows, valueKey) {
  return rows.every(function (row) {
    if (!row[valueKey]) {
      return true;
    }

    if (!Number(row[valueKey])) {
      return true;
    }

    return false;
  });
}

var isSeriesEmpty = function isSeriesEmpty(series, seriesDatakey, valueKey) {
  return function () {
    if (!series || !series.length) {
      return true;
    } // series is rows


    if (!seriesDatakey) {
      return areRowsEmpty(series, valueKey);
    } // series includes rows by seriesDataKey.
    // Flatten data rows from every series


    var rows = series.map(function (row) {
      if (seriesDatakey) {
        row = row[seriesDatakey];
      }

      if (row && (0, _isArray["default"])(row) && row.length > 0) {
        return row;
      }

      return null;
    }).filter(function (v) {
      return v;
    }).flat();

    if (!rows.length) {
      return true;
    }

    return areRowsEmpty(rows, valueKey);
  };
};

exports.isSeriesEmpty = isSeriesEmpty;

var truncateLabel = function truncateLabel(label) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

  if (!label) {
    return '';
  }

  return (0, _lodash.truncate)(label.replace(/ <([^>]*)>$/, ''), {
    length: maxLength
  });
}; // 根据给定参数计算 G2 GuideLine/GuideRegion 等组件的端点位置，返回百分比数值型位置数组
// 目前只支持 Y 轴数据为 linear 情况，如果 Y 轴数据不为 linear，则将 yValue 当作纵坐标位置


exports.truncateLabel = truncateLabel;

var deriveG2HorizontalGuideEndpointPos = function deriveG2HorizontalGuideEndpointPos(xPos, yValue, yScaleKey, transpose) {
  if (transpose) {
    return function (_xScale, yScale) {
      var y = yScale[yScaleKey];

      if (yScaleKey && (y === null || y === void 0 ? void 0 : y.isLinear) && (0, _isFinite["default"])(yValue)) {
        var yPosValue = (yValue - y.min) / (y.max - y.min);
        return ["".concat(Math.round(yPosValue * 100), "%"), xPos];
      }

      return [yValue, xPos];
    };
  }

  return function (_xScale, yScale) {
    var y = yScale[yScaleKey];

    if (yScaleKey && (y === null || y === void 0 ? void 0 : y.isLinear) && (0, _isFinite["default"])(yValue)) {
      var yPosValue = 1 - (yValue - y.min) / (y.max - y.min);
      return [xPos, "".concat(Math.round(yPosValue * 100), "%")];
    }

    return [xPos, yValue];
  };
}; // 根据给定参数计算 G2 GuideLine/GuideRegion 等组件的端点位置，返回百分比数值型位置数组
// 目前只支持 X 轴数据为 linear 情况，如果 X 轴数据不为 linear，则将 xValue 当作横坐标位置


exports.deriveG2HorizontalGuideEndpointPos = deriveG2HorizontalGuideEndpointPos;

var deriveG2VerticalGuideEndpointPos = function deriveG2VerticalGuideEndpointPos(xValue, yPos, xScaleKey, transpose) {
  if (transpose) {
    return function (xScale)
    /* yScale */
    {
      var x = xScale[xScaleKey];

      if (xScaleKey && (x === null || x === void 0 ? void 0 : x.isLinear) && (0, _isFinite["default"])(xValue)) {
        var xPosValue = 1 - (xValue - x.min) / (x.max - x.min);
        return [yPos, "".concat(Math.round(xPosValue * 100), "%")];
      }

      return [yPos, xValue];
    };
  }

  return function (xScale)
  /* yScale */
  {
    var x = xScale[xScaleKey];

    if (xScaleKey && (x === null || x === void 0 ? void 0 : x.isLinear) && (0, _isFinite["default"])(xValue)) {
      var xPosValue = (xValue - x.min) / (x.max - x.min);
      return ["".concat(Math.round(xPosValue * 100), "%"), yPos];
    }

    return [xValue, yPos];
  };
};

exports.deriveG2VerticalGuideEndpointPos = deriveG2VerticalGuideEndpointPos;

function clip(str, len) {
  if (!len) {
    return str;
  }

  if (str.length <= len) {
    return str;
  }

  return "".concat(str.substring(0, len), "...");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlbHBlcnMvdXRpbHMudHMiXSwibmFtZXMiOlsiZGVlcEZpbmQiLCJvYmoiLCJwYXRoIiwic2VwYXJhdG9yIiwicGF0aHMiLCJzcGxpdCIsImN1cnJlbnQiLCJpIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYXJlUm93c0VtcHR5Iiwicm93cyIsInZhbHVlS2V5IiwiZXZlcnkiLCJyb3ciLCJOdW1iZXIiLCJpc1Nlcmllc0VtcHR5Iiwic2VyaWVzIiwic2VyaWVzRGF0YWtleSIsIm1hcCIsImZpbHRlciIsInYiLCJmbGF0IiwidHJ1bmNhdGVMYWJlbCIsImxhYmVsIiwibWF4TGVuZ3RoIiwicmVwbGFjZSIsImRlcml2ZUcySG9yaXpvbnRhbEd1aWRlRW5kcG9pbnRQb3MiLCJ4UG9zIiwieVZhbHVlIiwieVNjYWxlS2V5IiwidHJhbnNwb3NlIiwiX3hTY2FsZSIsInlTY2FsZSIsInkiLCJpc0xpbmVhciIsInlQb3NWYWx1ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyb3VuZCIsImRlcml2ZUcyVmVydGljYWxHdWlkZUVuZHBvaW50UG9zIiwieFZhbHVlIiwieVBvcyIsInhTY2FsZUtleSIsInhTY2FsZSIsIngiLCJ4UG9zVmFsdWUiLCJjbGlwIiwic3RyIiwibGVuIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTyxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUE0QkMsSUFBNUIsRUFBdUNDLFNBQXZDLEVBQXVEO0FBQzVELE1BQU1DLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVdGLFNBQVgsQ0FBZDtBQUNBLE1BQUlHLE9BQU8sR0FBR0wsR0FBZDs7QUFFQSxPQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksTUFBMUIsRUFBa0MsRUFBRUQsQ0FBcEMsRUFBdUM7QUFDckMsUUFBSUQsT0FBTyxDQUFDRixLQUFL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QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRydW5jYXRlIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBGaW5kKG9iajogYW55LCBwYXRoOiBhbnksIHNlcGFyYXRvcjogYW55KSB7XG4gIGNvbnN0IHBhdGhzID0gcGF0aC5zcGxpdChzZXBhcmF0b3IpO1xuICBsZXQgY3VycmVudCA9IG9iajtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGN1cnJlbnRbcGF0aHNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgfVxuICByZXR1cm4gY3VycmVudDtcbn1cblxuZnVuY3Rpb24gYXJlUm93c0VtcHR5KHJvd3M6IGFueSwgdmFsdWVLZXk6IGFueSkge1xuICByZXR1cm4gcm93cy5ldmVyeSgocm93OiBhbnkpID0+IHtcbiAgICBpZiAoIXJvd1t2YWx1ZUtleV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIU51bWJlcihyb3dbdmFsdWVLZXldKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBpc1Nlcmllc0VtcHR5ID0gKHNlcmllczogYW55LCBzZXJpZXNEYXRha2V5OiBhbnksIHZhbHVlS2V5OiBhbnkpID0+ICgpID0+IHtcbiAgaWYgKCFzZXJpZXMgfHwgIXNlcmllcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHNlcmllcyBpcyByb3dzXG4gIGlmICghc2VyaWVzRGF0YWtleSkge1xuICAgIHJldHVybiBhcmVSb3dzRW1wdHkoc2VyaWVzLCB2YWx1ZUtleSk7XG4gIH1cbiAgLy8gc2VyaWVzIGluY2x1ZGVzIHJvd3MgYnkgc2VyaWVzRGF0YUtleS5cbiAgLy8gRmxhdHRlbiBkYXRhIHJvd3MgZnJvbSBldmVyeSBzZXJpZXNcbiAgY29uc3Qgcm93cyA9IHNlcmllc1xuICAgIC5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICBpZiAoc2VyaWVzRGF0YWtleSkge1xuICAgICAgICByb3cgPSByb3dbc2VyaWVzRGF0YWtleV07XG4gICAgICB9XG4gICAgICBpZiAocm93ICYmIEFycmF5LmlzQXJyYXkocm93KSAmJiByb3cubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gcm93O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSlcbiAgICAuZmlsdGVyKCh2OiBhbnkpID0+IHYpXG4gICAgLmZsYXQoKTtcblxuICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGFyZVJvd3NFbXB0eShyb3dzLCB2YWx1ZUtleSk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVMYWJlbCA9IChsYWJlbDogYW55LCBtYXhMZW5ndGggPSAyMCkgPT4ge1xuICBpZiAoIWxhYmVsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiB0cnVuY2F0ZShsYWJlbC5yZXBsYWNlKC8gPChbXj5dKik+JC8sICcnKSwgeyBsZW5ndGg6IG1heExlbmd0aCB9KTtcbn07XG5cbi8vIOagueaNrue7meWumuWPguaVsOiuoeeulyBHMiBHdWlkZUxpbmUvR3VpZGVSZWdpb24g562J57uE5Lu255qE56uv54K55L2N572u77yM6L+U5Zue55m+5YiG5q+U5pWw5YC85Z6L5L2N572u5pWw57uEXG4vLyDnm67liY3lj6rmlK/mjIEgWSDovbTmlbDmja7kuLogbGluZWFyIOaDheWGte+8jOWmguaenCBZIOi9tOaVsOaNruS4jeS4uiBsaW5lYXLvvIzliJnlsIYgeVZhbHVlIOW9k+S9nOe6teWdkOagh+S9jee9rlxuZXhwb3J0IGNvbnN0IGRlcml2ZUcySG9yaXpvbnRhbEd1aWRlRW5kcG9pbnRQb3MgPSAoeFBvczogYW55LCB5VmFsdWU6IGFueSwgeVNjYWxlS2V5OiBhbnksIHRyYW5zcG9zZTogYW55KSA9PiB7XG4gIGlmICh0cmFuc3Bvc2UpIHtcbiAgICByZXR1cm4gKF94U2NhbGU6IGFueSwgeVNjYWxlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHkgPSB5U2NhbGVbeVNjYWxlS2V5XTtcbiAgICAgIGlmICh5U2NhbGVLZXkgJiYgeT8uaXNMaW5lYXIgJiYgTnVtYmVyLmlzRmluaXRlKHlWYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgeVBvc1ZhbHVlID0gKHlWYWx1ZSAtIHkubWluKSAvICh5Lm1heCAtIHkubWluKTtcbiAgICAgICAgcmV0dXJuIFtgJHtNYXRoLnJvdW5kKHlQb3NWYWx1ZSAqIDEwMCl9JWAsIHhQb3NdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt5VmFsdWUsIHhQb3NdO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gKF94U2NhbGU6IGFueSwgeVNjYWxlOiBhbnkpID0+IHtcbiAgICBjb25zdCB5ID0geVNjYWxlW3lTY2FsZUtleV07XG4gICAgaWYgKHlTY2FsZUtleSAmJiB5Py5pc0xpbmVhciAmJiBOdW1iZXIuaXNGaW5pdGUoeVZhbHVlKSkge1xuICAgICAgY29uc3QgeVBvc1ZhbHVlID0gMSAtICh5VmFsdWUgLSB5Lm1pbikgLyAoeS5tYXggLSB5Lm1pbik7XG4gICAgICByZXR1cm4gW3hQb3MsIGAke01hdGgucm91bmQoeVBvc1ZhbHVlICogMTAwKX0lYF07XG4gICAgfVxuICAgIHJldHVybiBbeFBvcywgeVZhbHVlXTtcbiAgfTtcbn07XG5cbi8vIOagueaNrue7meWumuWPguaVsOiuoeeulyBHMiBHdWlkZUxpbmUvR3VpZGVSZWdpb24g562J57uE5Lu255qE56uv54K55L2N572u77yM6L+U5Zue55m+5YiG5q+U5pWw5YC85Z6L5L2N572u5pWw57uEXG4vLyDnm67liY3lj6rmlK/mjIEgWCDovbTmlbDmja7kuLogbGluZWFyIOaDheWGte+8jOWmguaenCBYIOi9tOaVsOaNruS4jeS4uiBsaW5lYXLvvIzliJnlsIYgeFZhbHVlIOW9k+S9nOaoquWdkOagh+S9jee9rlxuZXhwb3J0IGNvbnN0IGRlcml2ZUcyVmVydGljYWxHdWlkZUVuZHBvaW50UG9zID0gKHhWYWx1ZTogYW55LCB5UG9zOiBhbnksIHhTY2FsZUtleTogYW55LCB0cmFuc3Bvc2U6IGFueSkgPT4ge1xuICBpZiAodHJhbnNwb3NlKSB7XG4gICAgcmV0dXJuICh4U2NhbGU6IGFueSAvKiB5U2NhbGUgKi8pID0+IHtcbiAgICAgIGNvbnN0IHggPSB4U2NhbGVbeFNjYWxlS2V5XTtcbiAgICAgIGlmICh4U2NhbGVLZXkgJiYgeD8uaXNMaW5lYXIgJiYgTnVtYmVyLmlzRmluaXRlKHhWYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgeFBvc1ZhbHVlID0gMSAtICh4VmFsdWUgLSB4Lm1pbikgLyAoeC5tYXggLSB4Lm1pbik7XG4gICAgICAgIHJldHVybiBbeVBvcywgYCR7TWF0aC5yb3VuZCh4UG9zVmFsdWUgKiAxMDApfSVgXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbeVBvcywgeFZhbHVlXTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuICh4U2NhbGU6IGFueSAvKiB5U2NhbGUgKi8pID0+IHtcbiAgICBjb25zdCB4ID0geFNjYWxlW3hTY2FsZUtleV07XG4gICAgaWYgKHhTY2FsZUtleSAmJiB4Py5pc0xpbmVhciAmJiBOdW1iZXIuaXNGaW5pdGUoeFZhbHVlKSkge1xuICAgICAgY29uc3QgeFBvc1ZhbHVlID0gKHhWYWx1ZSAtIHgubWluKSAvICh4Lm1heCAtIHgubWluKTtcbiAgICAgIHJldHVybiBbYCR7TWF0aC5yb3VuZCh4UG9zVmFsdWUgKiAxMDApfSVgLCB5UG9zXTtcbiAgICB9XG4gICAgcmV0dXJuIFt4VmFsdWUsIHlQb3NdO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsaXAoc3RyOiBhbnksIGxlbjogYW55KSB7XG4gIGlmICghbGVuKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICBpZiAoc3RyLmxlbmd0aCA8PSBsZW4pIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcmV0dXJuIGAke3N0ci5zdWJzdHJpbmcoMCwgbGVuKX0uLi5gO1xufVxuIl19