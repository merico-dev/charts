"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.normalizeFormatter = normalizeFormatter;
exports.getNumeralFormatter = exports.getPeriodFormatter = exports.MOMENT_DATE_FORMAT = exports.MOMENT_YEAR_MONTH_FORMAT = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _moment = _interopRequireDefault(require("moment"));

var _numeral = _interopRequireDefault(require("numeral"));

var getDateTimeFormatter = function getDateTimeFormatter(_ref) {
  var format = _ref.format;
  return function (value) {
    return (0, _moment["default"])(value).format(format);
  };
};

var MOMENT_YEAR_MONTH_FORMAT = 'YYYY/MM';
exports.MOMENT_YEAR_MONTH_FORMAT = MOMENT_YEAR_MONTH_FORMAT;
var MOMENT_DATE_FORMAT = 'YYYY/MM/DD';
exports.MOMENT_DATE_FORMAT = MOMENT_DATE_FORMAT;

var getPeriodFormatter = function getPeriodFormatter(_ref2) {
  var format = _ref2.format;
  return function (date, caller) {
    var shortMode = caller === 'tick'; // @ts-expect-error ts-migrate(2488) FIXME: Type 'RegExpExecArray | null' must have a '[Symbol... Remove this comment to see the full error message

    var _$exec = /(\d*)(\w+)/.exec(format),
        _$exec2 = (0, _slicedToArray2["default"])(_$exec, 3),
        scalar0 = _$exec2[1],
        units = _$exec2[2];

    var scalar = +scalar0;

    switch (units) {
      case 'd':
        {
          var endDate = (0, _moment["default"])(date).clone().add(scalar, 'days').subtract(1, 'millisecond');

          if (shortMode || scalar === 1) {
            return (0, _moment["default"])(endDate).format(MOMENT_DATE_FORMAT);
          }

          return "".concat((0, _moment["default"])(date).format(MOMENT_DATE_FORMAT), " ~ ").concat((0, _moment["default"])(endDate).format(MOMENT_DATE_FORMAT));
        }

      case 'w':
        {
          var _endDate = (0, _moment["default"])(date).clone().add(scalar, 'weeks').subtract(1, 'millisecond');

          if (shortMode) {
            return (0, _moment["default"])(_endDate).format('YYYY [W]w');
          }

          return "".concat((0, _moment["default"])(date).format(MOMENT_DATE_FORMAT), " ~ ").concat((0, _moment["default"])(_endDate).format(MOMENT_DATE_FORMAT));
        }

      case 'm':
        {
          var _endDate2 = (0, _moment["default"])(date).clone().add(scalar, 'months').subtract(1, 'millisecond');

          if (shortMode || scalar === 1) {
            return (0, _moment["default"])(_endDate2).format(MOMENT_YEAR_MONTH_FORMAT);
          }

          return "".concat((0, _moment["default"])(date).format(MOMENT_YEAR_MONTH_FORMAT), " ~ ").concat((0, _moment["default"])(_endDate2).format(MOMENT_YEAR_MONTH_FORMAT));
        }

      case 'q':
        {
          var _endDate3 = (0, _moment["default"])(date).clone().add(scalar, 'quarters').subtract(1, 'millisecond');

          if (shortMode || scalar === 1) {
            return (0, _moment["default"])(_endDate3).format('YYYY [Q]Q');
          }

          return "".concat((0, _moment["default"])(date).format('YYYY [Q]Q'), " ~ ").concat((0, _moment["default"])(_endDate3).format('YYYY [Q]Q'));
        }

      case 'y':
        {
          var _endDate4 = (0, _moment["default"])(date).clone().add(scalar, 'years').subtract(1, 'millisecond');

          if (shortMode || scalar === 1) {
            return "".concat((0, _moment["default"])(_endDate4).format('YYYY'));
          }

          return "".concat((0, _moment["default"])(date).format('YYYY'), " ~ ").concat((0, _moment["default"])(_endDate4).format('YYYY'));
        }

      default:
        throw new Error('Unsupported format');
    }
  };
};

exports.getPeriodFormatter = getPeriodFormatter;

var getNumeralFormatter = function getNumeralFormatter(_ref3) {
  var format = _ref3.format;
  return function (value) {
    return (0, _numeral["default"])(value).format(format);
  };
};

exports.getNumeralFormatter = getNumeralFormatter;

function normalizeFormatter(formatter) {
  if (typeof formatter === 'function') {
    return formatter;
  }

  if ((0, _typeof2["default"])(formatter) === 'object') {
    var type = formatter.type,
        format = formatter.format;

    if (type === 'DATE_TIME') {
      return getDateTimeFormatter({
        format: format
      });
    }

    if (type === 'PERIOD') {
      return getPeriodFormatter({
        format: format
      });
    }

    if (type === 'NUMERAL') {
      return getNumeralFormatter({
        format: format
      });
    }
  }

  return function (val) {
    return val;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlbHBlcnMvZm9ybWF0dGVyLnRzIl0sIm5hbWVzIjpbImdldERhdGVUaW1lRm9ybWF0dGVyIiwiZm9ybWF0IiwidmFsdWUiLCJNT01FTlRfWUVBUl9NT05USF9GT1JNQVQiLCJNT01FTlRfREFURV9GT1JNQVQiLCJnZXRQZXJpb2RGb3JtYXR0ZXIiLCJkYXRlIiwiY2FsbGVyIiwic2hvcnRNb2RlIiwiZXhlYyIsInNjYWxhcjAiLCJ1bml0cyIsInNjYWxhciIsImVuZERhdGUiLCJjbG9uZSIsImFkZCIsInN1YnRyYWN0IiwiRXJyb3IiLCJnZXROdW1lcmFsRm9ybWF0dGVyIiwibm9ybWFsaXplRm9ybWF0dGVyIiwiZm9ybWF0dGVyIiwidHlwZSIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FBb0MsVUFBQ0MsS0FBRDtBQUFBLFdBQWdCLHdCQUFPQSxLQUFQLEVBQWNELE1BQWQsQ0FBcUJBLE1BQXJCLENBQWhCO0FBQUEsR0FBcEM7QUFBQSxDQUE3Qjs7QUFFTyxJQUFNRSx3QkFBd0IsR0FBRyxTQUFqQzs7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxZQUEzQjs7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdKLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQW9DLFVBQUNLLElBQUQsRUFBWUMsTUFBWixFQUE0QjtBQUNoRyxRQUFNQyxTQUFTLEdBQUdELE1BQU0sS0FBSyxNQUE3QixDQURnRyxDQUVoRzs7QUFGZ0csaUJBR3JFLGFBQWFFLElBQWIsQ0FBa0JSLE1BQWxCLENBSHFFO0FBQUE7QUFBQSxRQUd2RlMsT0FIdUY7QUFBQSxRQUc5RUMsS0FIOEU7O0FBSWhHLFFBQU1DLE1BQU0sR0FBRyxDQUFDRixPQUFo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cmFsIGZyb20gJ251bWVyYWwnO1xuXG5jb25zdCBnZXREYXRlVGltZUZvcm1hdHRlciA9ICh7IGZvcm1hdCB9OiB7IGZvcm1hdDogc3RyaW5nIH0pID0+ICh2YWx1ZTogYW55KSA9PiBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuXG5leHBvcnQgY29uc3QgTU9NRU5UX1lFQVJfTU9OVEhfRk9STUFUID0gJ1lZWVkvTU0nO1xuZXhwb3J0IGNvbnN0IE1PTUVOVF9EQVRFX0ZPUk1BVCA9ICdZWVlZL01NL0REJztcblxuZXhwb3J0IGNvbnN0IGdldFBlcmlvZEZvcm1hdHRlciA9ICh7IGZvcm1hdCB9OiB7IGZvcm1hdDogc3RyaW5nIH0pID0+IChkYXRlOiBhbnksIGNhbGxlcjogYW55KSA9PiB7XG4gIGNvbnN0IHNob3J0TW9kZSA9IGNhbGxlciA9PT0gJ3RpY2snO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjQ4OCkgRklYTUU6IFR5cGUgJ1JlZ0V4cEV4ZWNBcnJheSB8IG51bGwnIG11c3QgaGF2ZSBhICdbU3ltYm9sLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgY29uc3QgWywgc2NhbGFyMCwgdW5pdHNdID0gLyhcXGQqKShcXHcrKS8uZXhlYyhmb3JtYXQpO1xuICBjb25zdCBzY2FsYXIgPSArc2NhbGFyMDtcbiAgc3dpdGNoICh1bml0cykge1xuICAgIGNhc2UgJ2QnOiB7XG4gICAgICBjb25zdCBlbmREYXRlID0gbW9tZW50KGRhdGUpLmNsb25lKCkuYWRkKHNjYWxhciwgJ2RheXMnKS5zdWJ0cmFjdCgxLCAnbWlsbGlzZWNvbmQnKTtcbiAgICAgIGlmIChzaG9ydE1vZGUgfHwgc2NhbGFyID09PSAxKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQoZW5kRGF0ZSkuZm9ybWF0KE1PTUVOVF9EQVRFX0ZPUk1BVCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYCR7bW9tZW50KGRhdGUpLmZvcm1hdChNT01FTlRfREFURV9GT1JNQVQpfSB+ICR7bW9tZW50KGVuZERhdGUpLmZvcm1hdChNT01FTlRfREFURV9GT1JNQVQpfWA7XG4gICAgfVxuICAgIGNhc2UgJ3cnOiB7XG4gICAgICBjb25zdCBlbmREYXRlID0gbW9tZW50KGRhdGUpLmNsb25lKCkuYWRkKHNjYWxhciwgJ3dlZWtzJykuc3VidHJhY3QoMSwgJ21pbGxpc2Vjb25kJyk7XG4gICAgICBpZiAoc2hvcnRNb2RlKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQoZW5kRGF0ZSkuZm9ybWF0KCdZWVlZIFtXXXcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgJHttb21lbnQoZGF0ZSkuZm9ybWF0KE1PTUVOVF9EQVRFX0ZPUk1BVCl9IH4gJHttb21lbnQoZW5kRGF0ZSkuZm9ybWF0KE1PTUVOVF9EQVRFX0ZPUk1BVCl9YDtcbiAgICB9XG4gICAgY2FzZSAnbSc6IHtcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBtb21lbnQoZGF0ZSkuY2xvbmUoKS5hZGQoc2NhbGFyLCAnbW9udGhzJykuc3VidHJhY3QoMSwgJ21pbGxpc2Vjb25kJyk7XG4gICAgICBpZiAoc2hvcnRNb2RlIHx8IHNjYWxhciA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbW9tZW50KGVuZERhdGUpLmZvcm1hdChNT01FTlRfWUVBUl9NT05USF9GT1JNQVQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGAke21vbWVudChkYXRlKS5mb3JtYXQoTU9NRU5UX1lFQVJfTU9OVEhfRk9STUFUKX0gfiAke21vbWVudChlbmREYXRlKS5mb3JtYXQoTU9NRU5UX1lFQVJfTU9OVEhfRk9STUFUKX1gO1xuICAgIH1cbiAgICBjYXNlICdxJzoge1xuICAgICAgY29uc3QgZW5kRGF0ZSA9IG1vbWVudChkYXRlKS5jbG9uZSgpLmFkZChzY2FsYXIsICdxdWFydGVycycpLnN1YnRyYWN0KDEsICdtaWxsaXNlY29uZCcpO1xuICAgICAgaWYgKHNob3J0TW9kZSB8fCBzY2FsYXIgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChlbmREYXRlKS5mb3JtYXQoJ1lZWVkgW1FdUScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGAke21vbWVudChkYXRlKS5mb3JtYXQoJ1lZWVkgW1FdUScpfSB+ICR7bW9tZW50KGVuZERhdGUpLmZvcm1hdCgnWVlZWSBbUV1RJyl9YDtcbiAgICB9XG4gICAgY2FzZSAneSc6IHtcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBtb21lbnQoZGF0ZSkuY2xvbmUoKS5hZGQoc2NhbGFyLCAneWVhcnMnKS5zdWJ0cmFjdCgxLCAnbWlsbGlzZWNvbmQnKTtcbiAgICAgIGlmIChzaG9ydE1vZGUgfHwgc2NhbGFyID09PSAxKSB7XG4gICAgICAgIHJldHVybiBgJHttb21lbnQoZW5kRGF0ZSkuZm9ybWF0KCdZWVlZJyl9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgJHttb21lbnQoZGF0ZSkuZm9ybWF0KCdZWVlZJyl9IH4gJHttb21lbnQoZW5kRGF0ZSkuZm9ybWF0KCdZWVlZJyl9YDtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgZm9ybWF0Jyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXROdW1lcmFsRm9ybWF0dGVyID0gKHsgZm9ybWF0IH06IGFueSkgPT4gKHZhbHVlOiBhbnkpID0+IHtcbiAgcmV0dXJuIG51bWVyYWwodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xufTtcblxuZXhwb3J0IHR5cGUgRm9ybWF0dGVyRnVuYyA9ICh2YWx1ZTogYW55LCAuLi5vdGhlcnM6IGFueVtdKSA9PiBhbnk7XG5cbmV4cG9ydCB0eXBlIEZvcm1hdHRlckNvbmZpZyA9IHtcbiAgdHlwZTogJ0RBVEVfVElNRScgfCAnUEVSSU9EJyB8ICdOVU1FUkFMJztcbiAgZm9ybWF0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBGb3JtYXR0ZXJUeXBlID0gRm9ybWF0dGVyRnVuYyB8IEZvcm1hdHRlckNvbmZpZztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUZvcm1hdHRlcihmb3JtYXR0ZXI/OiBGb3JtYXR0ZXJUeXBlKTogRm9ybWF0dGVyRnVuYyB7XG4gIGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZvcm1hdHRlcjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IHsgdHlwZSwgZm9ybWF0IH0gPSBmb3JtYXR0ZXI7XG5cbiAgICBpZiAodHlwZSA9PT0gJ0RBVEVfVElNRScpIHtcbiAgICAgIHJldHVybiBnZXREYXRlVGltZUZvcm1hdHRlcih7IGZvcm1hdCB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ1BFUklPRCcpIHtcbiAgICAgIHJldHVybiBnZXRQZXJpb2RGb3JtYXR0ZXIoeyBmb3JtYXQgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdOVU1FUkFMJykge1xuICAgICAgcmV0dXJuIGdldE51bWVyYWxGb3JtYXR0ZXIoeyBmb3JtYXQgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICh2YWw6IGFueSkgPT4gdmFsO1xufVxuIl19