"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.calcDownwardsSeriesData = exports.calcUpwardsSeriesData = exports.calcBurndown = exports.calcAcc = void 0;

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

var _moment = _interopRequireDefault(require("moment"));

var _lodash = require("lodash");

var NOW = (0, _moment["default"])('2020-12-01');

var calcAcc = function calcAcc(key) {
  return function (data) {
    data.forEach(function (item, index) {
      if (index === 0) {
        return;
      }

      item[key] += data[index - 1][key];
    });
    return data;
  };
};

exports.calcAcc = calcAcc;

var calcBurndown = function calcBurndown(key) {
  return function (data) {
    var copy = (0, _lodash.cloneDeep)(data);

    for (var i = copy.length - 2; i >= 0; i--) {
      copy[i][key] += copy[i + 1][key];
    }

    copy.forEach(function (item) {
      item[key] += 500;
    });
    return copy;
  };
};

exports.calcBurndown = calcBurndown;

function calcSeriesBase(keys, dataCount, extendDays) {
  var now = NOW.clone();
  var randomBase = (0, _from["default"])(new Array(dataCount), function () {
    var ret = keys.reduce(function (acc, curr) {
      acc[curr] = Math.random();
      return acc;
    }, {});
    ret.date = now.add(1, 'days').toISOString();
    return ret;
  });
  var lastDate = (0, _moment["default"])((0, _lodash.last)(randomBase).date);
  var tailingDates = (0, _from["default"])(new Array(extendDays), function () {
    var ret = keys.reduce(function (acc, curr) {
      acc[curr] = null;
      return acc;
    }, {});
    ret.date = lastDate.add(1, 'days').toISOString();
    return ret;
  });
  return randomBase.concat(tailingDates);
}

function adjustValue(data, key, factor) {
  data.forEach(function (item) {
    item[key] = (0, _lodash.round)(item[key] * factor);
  });
}
/**
 * Like:
 * [
 *  {
 *    line-1: number,
 *    line-2: number,
 *    date: ISOString,
 *  }
 * ]
 */


var calcUpwardsSeriesData = function calcUpwardsSeriesData(_ref) {
  var dataCount = _ref.dataCount,
      extendDays = _ref.extendDays,
      _ref$keys = _ref.keys,
      keys = _ref$keys === void 0 ? ['line-1', 'line-2'] : _ref$keys,
      _ref$factors = _ref.factors,
      factors = _ref$factors === void 0 ? [100, 100] : _ref$factors,
      _ref$accumulators = _ref.accumulators,
      accumulators = _ref$accumulators === void 0 ? [calcBurndown, calcBurndown] : _ref$accumulators;
  return function () {
    var base = calcSeriesBase(keys, dataCount, extendDays); // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'key' implicitly has an 'any' type.

    keys.forEach(function (key, index) {
      adjustValue(base, key, factors[index]);
    }); // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.

    accumulators.forEach(function (acc, index) {
      if (!acc) {
        return;
      }

      var key = keys[index];
      base = acc(key)(base);
    });
    base[base.length - 1][keys[0]] = 100;
    return base;
  };
};

exports.calcUpwardsSeriesData = calcUpwardsSeriesData;
var calcDownwardsSeriesData = calcUpwardsSeriesData;
exports.calcDownwardsSeriesData = calcDownwardsSeriesData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9jb21wb3NlZC1jaGFydHMvc2VyaWVzLWNvbXBvc2VkLWNoYXJ0L3N0b3JpZXMvcHJlZGljdGlvbi1saW5lL2hlbHBlcnMudHMiXSwibmFtZXMiOlsiTk9XIiwiY2FsY0FjYyIsImtleSIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiY2FsY0J1cm5kb3duIiwiY29weSIsImkiLCJsZW5ndGgiLCJjYWxjU2VyaWVzQmFzZSIsImtleXMiLCJkYXRhQ291bnQiLCJleHRlbmREYXlzIiwibm93IiwiY2xvbmUiLCJyYW5kb21CYXNlIiwiQXJyYXkiLCJyZXQiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwiTWF0aCIsInJhbmRvbSIsImRhdGUiLCJhZGQiLCJ0b0lTT1N0cmluZyIsImxhc3REYXRlIiwidGFpbGluZ0RhdGVzIiwiY29uY2F0IiwiYWRqdXN0VmFsdWUiLCJmYWN0b3IiLCJjYWxjVXB3YXJkc1Nlcmllc0RhdGEiLCJmYWN0b3JzIiwiYWNjdW11bGF0b3JzIiwiYmFzZSIsImNhbGNEb3dud2FyZHNTZXJpZXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyx3QkFBTyxZQUFQLENBQVo7O0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQWMsVUFBQ0MsSUFBRCxFQUFlO0FBQ2xEQSxJQUFBQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVlDLEtBQVosRUFBMkI7QUFDdEMsVUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZjtBQUNEOztBQUNERCxNQUFBQSxJQUFJLENBQUNILEdBQUQsQ0FBSixJQUFhQyxJQUFJLENBQUNHLEtBQUssR0FBRyxDQUFULENBQUosQ0FBZ0JKLEdBQWhCLENBQWI7QUFDRCxLQUxEO0FBTUEsV0FBT0MsSUFB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LENBSDRCO0FBQUEsMEJBSW5Dc0IsT0FKbUM7QUFBQSxNQUluQ0EsT0FKbUMsNkJBSXpCLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FKeUI7QUFBQSwrQkFLbkNDLFlBTG1DO0FBQUEsTUFLbkNBLFlBTG1DLGtDQUtwQixDQUFDNUIsWUFBRCxFQUFlQSxZQUFmLENBTG9CO0FBQUEsU0FNMUIsWUFBTTtBQUNmLFFBQUk2QixJQUFJLEdBQUd6QixjQUFjLENBQUNDLElBQUQsRUFBT0MsU0FBUCxFQUFrQkMsVUFBbEIsQ0FBekIsQ0FEZSxDQUVmOztBQUNBRixJQUFBQSxJQUFJLENBQUNSLE9BQUwsQ0FBYSxVQUFDRixHQUFELEVBQU1JLEtBQU4sRUFBZ0I7QUFDM0J5QixNQUFBQSxXQUFXLENBQUNLLElBQUQsRUFBT2xDLEdBQVAsRUFBWWdDLE9BQU8sQ0FBQzVCLEtBQUQsQ0FBbkIsQ0FBWDtBQUNELEtBRkQsRUFIZSxDQU1mOztBQUNBNkIsSUFBQUEsWUFBWSxDQUFDL0IsT0FBYixDQUFxQixVQUFDaUIsR0FBRCxFQUFNZixLQUFOLEVBQWdCO0FBQ25DLFVBQUksQ0FBQ2UsR0FBTCxFQUFVO0FBQ1I7QUFDRDs7QUFDRCxVQUFNbkIsR0FBRyxHQUFHVSxJQUFJLENBQUNOLEtBQUQsQ0FBaEI7QUFDQThCLE1BQUFBLElBQUksR0FBR2YsR0FBRyxDQUFDbkIsR0FBRCxDQUFILENBQVNrQyxJQUFULENBQVA7QUFDRCxLQU5EO0FBUUFBLElBQUFBLElBQUksQ0FBQ0EsSUFBSSxDQUFDMUIsTUFBTCxHQUFjLENBQWYsQ0FBSixDQUFzQkUsSUFBSSxDQUFDLENBQUQsQ0FBMUIsSUFBaUMsR0FBakM7QUFDQSxXQUFPd0IsSUFBUDtBQUNELEdBdkJvQztBQUFBLENBQTlCOzs7QUF5QkEsSUFBTUMsdUJBQXVCLEdBQUdKLHFCQUFoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IGNsb25lRGVlcCwgbGFzdCwgcm91bmQgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBOT1cgPSBtb21lbnQoJzIwMjAtMTItMDEnKTtcblxuZXhwb3J0IGNvbnN0IGNhbGNBY2MgPSAoa2V5OiBhbnkpID0+IChkYXRhOiBhbnkpID0+IHtcbiAgZGF0YS5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbVtrZXldICs9IGRhdGFbaW5kZXggLSAxXVtrZXldO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY0J1cm5kb3duID0gKGtleTogYW55KSA9PiAoZGF0YTogYW55KSA9PiB7XG4gIGNvbnN0IGNvcHkgPSBjbG9uZURlZXAoZGF0YSk7XG4gIGZvciAobGV0IGkgPSBjb3B5Lmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29weVtpXVtrZXldICs9IGNvcHlbaSArIDFdW2tleV07XG4gIH1cbiAgY29weS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICBpdGVtW2tleV0gKz0gNTAwO1xuICB9KTtcbiAgcmV0dXJuIGNvcHk7XG59O1xuXG5mdW5jdGlvbiBjYWxjU2VyaWVzQmFzZShrZXlzOiBhbnksIGRhdGFDb3VudDogYW55LCBleHRlbmREYXlzOiBhbnkpIHtcbiAgY29uc3Qgbm93ID0gTk9XLmNsb25lKCk7XG4gIGNvbnN0IHJhbmRvbUJhc2UgPSBBcnJheS5mcm9tKG5ldyBBcnJheShkYXRhQ291bnQpLCAoKSA9PiB7XG4gICAgY29uc3QgcmV0ID0ga2V5cy5yZWR1Y2UoKGFjYzogYW55LCBjdXJyOiBhbnkpID0+IHtcbiAgICAgIGFjY1tjdXJyXSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICByZXQuZGF0ZSA9IG5vdy5hZGQoMSwgJ2RheXMnKS50b0lTT1N0cmluZygpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xuXG4gIGNvbnN0IGxhc3REYXRlID0gbW9tZW50KGxhc3QocmFuZG9tQmFzZSkuZGF0ZSk7XG4gIGNvbnN0IHRhaWxpbmdEYXRlcyA9IEFycmF5LmZyb20obmV3IEFycmF5KGV4dGVuZERheXMpLCAoKSA9PiB7XG4gICAgY29uc3QgcmV0ID0ga2V5cy5yZWR1Y2UoKGFjYzogYW55LCBjdXJyOiBhbnkpID0+IHtcbiAgICAgIGFjY1tjdXJyXSA9IG51bGw7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICByZXQuZGF0ZSA9IGxhc3REYXRlLmFkZCgxLCAnZGF5cycpLnRvSVNPU3RyaW5nKCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG4gIHJldHVybiByYW5kb21CYXNlLmNvbmNhdCh0YWlsaW5nRGF0ZXMpO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RWYWx1ZShkYXRhOiBhbnksIGtleTogYW55LCBmYWN0b3I6IGFueSkge1xuICBkYXRhLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgIGl0ZW1ba2V5XSA9IHJvdW5kKGl0ZW1ba2V5XSAqIGZhY3Rvcik7XG4gIH0pO1xufVxuXG4vKipcbiAqIExpa2U6XG4gKiBbXG4gKiAge1xuICogICAgbGluZS0xOiBudW1iZXIsXG4gKiAgICBsaW5lLTI6IG51bWJlcixcbiAqICAgIGRhdGU6IElTT1N0cmluZyxcbiAqICB9XG4gKiBdXG4gKi9cbmV4cG9ydCBjb25zdCBjYWxjVXB3YXJkc1Nlcmllc0RhdGEgPSAoe1xuICBkYXRhQ291bnQsXG4gIGV4dGVuZERheXMsXG4gIGtleXMgPSBbJ2xpbmUtMScsICdsaW5lLTInXSxcbiAgZmFjdG9ycyA9IFsxMDAsIDEwMF0sXG4gIGFjY3VtdWxhdG9ycyA9IFtjYWxjQnVybmRvd24sIGNhbGNCdXJuZG93bl0sXG59OiBhbnkpID0+ICgpID0+IHtcbiAgbGV0IGJhc2UgPSBjYWxjU2VyaWVzQmFzZShrZXlzLCBkYXRhQ291bnQsIGV4dGVuZERheXMpO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNzAwNikgRklYTUU6IFBhcmFtZXRlciAna2V5JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBrZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICBhZGp1c3RWYWx1ZShiYXNlLCBrZXksIGZhY3RvcnNbaW5kZXhdKTtcbiAgfSk7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgdHMtbWlncmF0ZSg3MDA2KSBGSVhNRTogUGFyYW1ldGVyICdhY2MnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGFjY3VtdWxhdG9ycy5mb3JFYWNoKChhY2MsIGluZGV4KSA9PiB7XG4gICAgaWYgKCFhY2MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpbmRleF07XG4gICAgYmFzZSA9IGFjYyhrZXkpKGJhc2UpO1xuICB9KTtcblxuICBiYXNlW2Jhc2UubGVuZ3RoIC0gMV1ba2V5c1swXV0gPSAxMDA7XG4gIHJldHVybiBiYXNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGNEb3dud2FyZHNTZXJpZXNEYXRhID0gY2FsY1Vwd2FyZHNTZXJpZXNEYXRhO1xuIl19