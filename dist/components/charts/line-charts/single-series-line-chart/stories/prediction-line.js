"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.parameters = exports.content = exports.name = void 0;

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _lodash = require("lodash");

var _semanticUiReact = require("semantic-ui-react");

var _prediction = require("../../../../helpers/prediction");

var _singleSeriesLineChart = _interopRequireDefault(require("../single-series-line-chart"));

var name = 'Prediction Line';
exports.name = name;

function calcAcc(data) {
  data.forEach(function (item, index) {
    if (index === 0) {
      return;
    }

    item.value += data[index - 1].value;
  });
  return data;
}

function calcBurndown(data) {
  var copy = (0, _lodash.cloneDeep)(data);

  for (var i = copy.length - 2; i >= 0; i--) {
    copy[i].value += copy[i + 1].value + (0, _lodash.round)((Math.random() - 0.1) * 5);
  }

  return copy;
}

var content = function Content(_ref) {
  var withRegressionLine = _ref.withRegressionLine,
      extendDays = _ref.extendDays,
      dataCount = _ref.dataCount;
  var index = 0;

  var _useMemo = (0, _react.useMemo)(function () {
    var now = (0, _moment["default"])();
    var ret = (0, _from["default"])(new Array(dataCount), function () {
      return {
        date: now.add(1, 'days').toISOString(),
        value: (0, _lodash.round)(Math.random() * 10)
      };
    });
    return {
      randomUp: calcAcc(ret),
      randomDown: calcBurndown(ret)
    };
  }, [dataCount]),
      randomUp = _useMemo.randomUp,
      randomDown = _useMemo.randomDown;

  var seriesUp = (0, _react.useMemo)(function () {
    var seriesData = randomUp; // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.

    var lastDate = (0, _moment["default"])((0, _lodash.last)(seriesData).date);
    var tailingDates = (0, _from["default"])(new Array(extendDays), function () {
      return {
        date: lastDate.add(1, 'days').toISOString(),
        value: null
      };
    });
    return seriesData.concat(tailingDates);
  }, [index, randomUp, extendDays]);
  var seriesDown = (0, _react.useMemo)(function () {
    var seriesData = randomDown; // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.

    var lastDate = (0, _moment["default"])((0, _lodash.last)(seriesData).date);
    var tailingDates = (0, _from["default"])(new Array(extendDays), function () {
      return {
        date: lastDate.add(1, 'days').toISOString(),
        value: null
      };
    });
    return seriesData.concat(tailingDates);
  }, [index, randomDown, extendDays]);
  var configurations = {
    withTooltip: true,
    legend: {
      enabled: false
    },
    interpolationType: 'linear',
    storkeColor: '#CA4521',
    refPredictionLine: {
      // HERE
      key: 'prediction-line',
      type: _prediction.PREDICTION_TYPES.regressionLinear,
      color: '#3b6efd',
      strokeDashArray: '3'
    },
    tooltipExcludedNames: ['prediction-line'],
    // HERE
    xAxis: {
      name: ''
    },
    xTickCount: 3,
    yAxis: {
      name: 'Dev Equivalent'
    },
    yDomain: [0, 'auto'],
    labelKey: 'date',
    labelFormatter: {
      type: 'DATE_TIME',
      format: 'YYYY-MM-DD'
    }
  };

  if (withRegressionLine) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'refRegressionType' does not exist on typ... Remove this comment to see the full error message
    configurations.refRegressionType = 'regressionLinear'; // @ts-expect-error ts-migrate(2339) FIXME: Property 'refRegressionColor' does not exist on ty... Remove this comment to see the full error message

    configurations.refRegressionColor = '#2152ca';
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Prediction Line"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
    columns: 2
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Going up"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 400
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: seriesUp,
    configurations: configurations
  }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Burning down"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 600,
      height: 400
    }
  }, /*#__PURE__*/_react["default"].createElement(_singleSeriesLineChart["default"], {
    data: seriesDown,
    configurations: configurations
  })))));
};

exports.content = content;
var parameters = {
  args: {
    extendDays: 3,
    dataCount: 30,
    withRegressionLine: false
  },
  argTypes: {
    extendDays: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1
      }
    },
    dataCount: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 1
      }
    },
    withRegressionLine: 'boolean'
  }
};
exports.parameters = parameters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0cy9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQvc3Rvcmllcy9wcmVkaWN0aW9uLWxpbmUudHN4Il0sIm5hbWVzIjpbIm5hbWUiLCJjYWxjQWNjIiwiZGF0YSIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJ2YWx1ZSIsImNhbGNCdXJuZG93biIsImNvcHkiLCJpIiwibGVuZ3RoIiwiTWF0aCIsInJhbmRvbSIsImNvbnRlbnQiLCJDb250ZW50Iiwid2l0aFJlZ3Jlc3Npb25MaW5lIiwiZXh0ZW5kRGF5cyIsImRhdGFDb3VudCIsIm5vdyIsInJldCIsIkFycmF5IiwiZGF0ZSIsImFkZCIsInRvSVNPU3RyaW5nIiwicmFuZG9tVXAiLCJyYW5kb21Eb3duIiwic2VyaWVzVXAiLCJzZXJpZXNEYXRhIiwibGFzdERhdGUiLCJ0YWlsaW5nRGF0ZXMiLCJjb25jYXQiLCJzZXJpZXNEb3duIiwiY29uZmlndXJhdGlvbnMiLCJ3aXRoVG9vbHRpcCIsImxlZ2VuZCIsImVuYWJsZWQiLCJpbnRlcnBvbGF0aW9uVHlwZSIsInN0b3JrZUNvbG9yIiwicmVmUHJlZGljdGlvbkxpbmUiLCJrZXkiLCJ0eXBlIiwiUFJFRElDVElPTl9UWVBFUyIsInJlZ3Jlc3Npb25MaW5lYXIiLCJjb2xvciIsInN0cm9rZURhc2hBcnJheSIsInRvb2x0aXBFeGNsdWRlZE5hbWVzIiwieEF4aXMiLCJ4VGlja0NvdW50IiwieUF4aXMiLCJ5RG9tYWluIiwibGFiZWxLZXkiLCJsYWJlbEZvcm1hdHRlciIsImZvcm1hdCIsInJlZlJlZ3Jlc3Npb25UeXBlIiwicmVmUmVncmVzc2lvbkNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJwYXJhbWV0ZXJzIiwiYXJncyIsImFyZ1R5cGVzIiwiY29udHJvbCIsIm1pbiIsIm1heCIsInN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNQSxJQUFJLEdBQUcsaUJBQWI7OztBQUVQLFNBQVNDLE9BQVQsQ0FBaUJDLElBQWpCLEVBQTRCO0FBQzFCQSxFQUFBQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVlDLEtBQVosRUFBMkI7QUFDdEMsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZjtBQUNEOztBQUNERCxJQUFBQSxJQUFJLENBQUNFLEtBQUwsSUFBY0osSUFBSSxDQUFDRyxLQUFLLEdBQUcsQ0FBVCxDQUFKLENBQWdCQyxLQUE5QjtBQUNELEdBTEQ7QUFNQSxTQUFPSixJQUFQO0FBQ0Q7O0FBRUQsU0FBU0ssWUFBVCxDQUFzQkwsSUFBdEIsRUFBaUM7QUFDL0IsTUFBTU0sSUFBSSxHQUFHLHVCQUFVTixJQUFWLENBQWI7O0FBQ0EsT0FBSyxJQUFJTyxDQUFDLEdBQUdELElBQUksQ0FBQ0UsTUFBTCxHQUFjLENBQTNCLEVBQThCRCxDQUFDLElBQUksQ0FBbkMsRUFBc0NBLENBQUMsRUFBdkMsRUFBMkM7QUFDekNELElBQUFBLElBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVFILEtBQVIsSUFBaUJFLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLENBQUwsQ0FBSixDQUFZSCxLQUFaLEdBQW9CLG1CQUFNLENBQUNLLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixJQUF3QixDQUE5QixDQUFyQztBQUNEOztBQUNELFNBQU9KLElBQVA7QUFDRDs7QUFFTSxJQUFNSyxPQUFPLEdBQUcsU0FBU0MsT0FBVCxPQUFxRTtBQUFBLE1BQWxEQyxrQkFBa0QsUUFBbERBLGtCQUFrRDtBQUFBLE1BQTlCQyxVQUE4QixRQUE5QkEsVUFBOEI7QUFBQSxNQUFsQkMsU0FBa0IsUUFBbEJBLFNBQWtCO0FBQzFGLE1BQU1aLEtBQUssR0FBRyxDQUFkOztBQUQwRixpQkFFekQsb0JBQVEsWUFBTTtBQUM3QyxRQUFNYSxHQUFHLEdBQUcseUJBQVo7QUFDQSxRQUFNQyxHQUFHLEdBQUcsc0JBQVcsSUFBSUMsS0FBSixDQUFVSCxTQUFWLENBQVgsRUFBaUM7QUFBQSxhQUFPO0FBQ2xESSxRQUFBQSxJQUFJLEVBQUVILEdBQUcsQ0FBQ0ksR0FBSixDQUFRLENBQVIsRUFBVyxNQUFYLEVBQW1CQyxXQUFuQixFQUQ0QztBQUVsRGpCLFFBQUFBLEtBQUssRUFBRSxtQkFBTUssSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQXRCO0FBRjJDLE9BQVA7QUFBQSxLQUFqQyxDQUFaO0FBS0EsV0FBTztBQUNMWSxNQUFBQSxRQUFRLEVBQUV2QixPQUFPLENBQUNrQixHQUFELENBRFo7QUFFTE0sTUFBQUEsVUFBVSxFQUFFbEIsWUFBWSxDQUFDWSxHQUFEO0FBRm5CLEtBQVA7QUFJRCxHQVhnQyxFQVc5QixDQUFDRixTQUFELENBWDhCLENBRnlEO0FBQUEsTUFFbEZPLFFBRmtGLFlBRWxGQSxRQUZrRjtBQUFBLE1BRXhFQyxVQUZ3RSxZQUV4RUEsVUFGd0U7O0FBZTFGLE1BQU1DLFFBQVEsR0FBRyxvQkFBUSxZQUFNO0FBQzdCLFFBQU1DLFVBQVUsR0FBR0gsUUFBbkIsQ0FENkIsQ0FFN0I7O0FBQ0EsUUFBTUksUUFBUSxHQUFHLHdCQUFPLGtCQUFLRCxVQUFMLEVBQWlCTixJQUF4QixDQUFqQjtBQUNBLFFBQU1RLFlBQVksR0FBRyxzQkFBVyxJQUFJVCxLQUFKLENBQVVKLFVBQVYsQ0FBWCxFQUFrQyxZQUFNO0FBQzNELGFBQU87QUFDTEssUUFBQUEsSUFBSSxFQUFFTyxRQUFRLENBQUNOLEdBQVQsQ0FBYSxDQUFiLEVBQWdCLE1BQWhCLEVBQXdCQyxXQUF4QixFQUREO0FBRUxqQixRQUFBQSxLQUFLLEVBQUU7QUFGRixPQUFQO0FBSUQsS0FMb0IsQ0FBckI7QUFNQSxXQUFPcUIsVUFBVSxDQUFDRyxNQUFYLENBQWtCRCxZQUFsQixDQUFQO0FBQ0QsR0FYZ0IsRUFXZCxDQUFDeEIsS0FBRCxFQUFRbUIsUUFBUixFQUFrQlIsVUFBbEIsQ0FYYyxDQUFqQjtBQWFBLE1BQU1lLFVBQVUsR0FBRyxvQkFBUSxZQUFNO0FBQy9CLFFBQU1KLFVBQVUsR0FBR0YsVUFBbkIsQ0FEK0IsQ0FFL0I7O0FBQ0EsUUFBTUcsUUFBUSxHQUFHLHdCQUFPLGtCQUFLRCxVQUFMLEVBQWlCTixJQUF4QixDQUFqQjtBQUNBLFFBQU1RLFlBQVksR0FBRyxzQkFBVyxJQUFJVCxLQUFKLENBQVVKLFVBQVYsQ0FBWCxFQUFrQyxZQUFNO0FBQzNELGFBQU87QUFDTEssUUFBQUEsSUFBSSxFQUFFTyxRQUFRLENBQUNOLEdBQVQsQ0FBYSxDQUFiLEVBQWdCLE1BQWhCLEVBQXdCQyxXQUF4QixFQUREO0FBRUxqQixRQUFBQSxLQUFLLEVBQUU7QUFGRixPQUFQO0FBSUQsS0FMb0IsQ0FBckI7QUFNQSxXQUFPcUIsVUFBVSxDQUFDRyxNQUFYLENBQWtCRCxZQUFsQixDQUFQO0FBQ0QsR0FYa0IsRUFXaEIsQ0FBQ3hCLEtBQUQsRUFBUW9CLFVBQVIsRUFBb0JULFVBQXBCLENBWGdCLENBQW5CO0FBYUEsTUFBTWdCLGNBQWMsR0FBRztBQUNyQkMsSUFBQUEsV0FBVyxFQUFFLElBRFE7QUFFckJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESCxLQUZhO0FBS3JCQyxJQUFBQSxpQkFBaUIsRUFBRSxRQUxFO0FBTXJCQyxJQUFBQSxXQUFXLEVBQUUsU0FOUTtBQU9yQkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFDakI7QUFDQUMsTUFBQUEsR0FBRyxFQUFFLGlCQUZZO0FBR2pCQyxNQUFBQSxJQUFJLEVBQUVDLDZCQUFpQkMsZ0JBSE47QUFJakJDLE1BQUFBLEtBQUssRUFBRSxTQUpVO0FBS2pCQyxNQUFBQSxlQUFlLEVBQUU7QUFMQSxLQVBFO0FBY3JCQyxJQUFBQSxvQkFBb0IsRUFBRSxDQUFDLGlCQUFELENBZEQ7QUFjc0I7QUFDM0NDLElBQUFBLEtBQUssRUFBRTtBQUNMOUMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FmYztBQWtCckIrQyxJQUFBQSxVQUFVLEVBQUUsQ0FsQlM7QUFtQnJCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTGhELE1BQUFBLElBQUksRUFBRTtBQURELEtBbkJjO0FBc0JyQmlELElBQUFBLE9BQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBdEJZO0FBdUJyQkMsSUFBQUEsUUFBUSxFQUFFLE1BdkJXO0FBd0JyQkMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RYLE1BQUFBLElBQUksRUFBRSxXQURRO0FBRWRZLE1BQUFBLE1BQU0sRUFBRTtBQUZNO0FBeEJLLEdBQXZCOztBQTZCQSxNQUFJckMsa0JBQUosRUFBd0I7QUFDdEI7QUFDQWlCLElBQUFBLGNBQWMsQ0FBQ3FCLGlCQUFmLEdBQW1DLGtCQUFuQyxDQUZzQixDQUd0Qjs7QUFDQXJCLElBQUFBLGNBQWMsQ0FBQ3NCLGtCQUFmLEdBQW9DLFNBQXBDO0FBQ0Q7O0FBQ0Qsc0JBQ0UsMERBQ0UsOERBREYsZUFFRSxnQ0FBQyxxQkFBRDtBQUFNLElBQUEsT0FBTyxFQUFFO0FBQWYsa0JBQ0UsZ0NBQUMscUJBQUQsQ0FBTSxNQUFOLHFCQUNFLHVEQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEI7QUFBWixrQkFDRSxnQ0FBQyxpQ0FBRDtBQUF1QixJQUFBLElBQUksRUFBRTlCLFFBQTdCO0FBQXVDLElBQUEsY0FBYyxFQUFFTTtBQUF2RCxJQURGLENBRkYsQ0FERixlQVFFLGdDQUFDLHFCQUFELENBQU0sTUFBTixxQkFDRSwyREFERixlQUVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRXVCLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLE1BQUFBLE1BQU0sRUFBRTtBQUF0QjtBQUFaLGtCQUNFLGdDQUFDLGlDQUFEO0FBQXVCLElBQUEsSUFBSSxFQUFFekIsVUFBN0I7QUFBeUMsSUFBQSxjQUFjLEVBQUVDO0FBQXpELElBREYsQ0FGRixDQVJGLENBRkYsQ0FERjtBQW9CRCxDQWhHTTs7O0FBa0dBLElBQU15QixVQUFVLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRTtBQUNKMUMsSUFBQUEsVUFBVSxFQUFFLENBRFI7QUFFSkMsSUFBQUEsU0FBUyxFQUFFLEVBRlA7QUFHSkYsSUFBQUEsa0JBQWtCLEVBQUU7QUFIaEIsR0FEa0I7QUFNeEI0QyxFQUFBQSxRQUFRLEVBQUU7QUFDUjNDLElBQUFBLFVBQVUsRUFBRTtBQUNWNEMsTUFBQUEsT0FBTyxFQUFFO0FBQ1BwQixRQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQcUIsUUFBQUEsR0FBRyxFQUFFLENBRkU7QUFHUEMsUUFBQUEsR0FBRyxFQUFFLEVBSEU7QUFJUEMsUUFBQUEsSUFBSSxFQUFFO0FBSkM7QUFEQyxLQURKO0FBU1I5QyxJQUFBQSxTQUFTLEVBQUU7QUFDVDJDLE1BQUFBLE9BQU8sRUFBRTtBQUNQcEIsUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUHFCLFFBQUFBLEdBQUcsRUFBRSxFQUZFO0FBR1BDLFFBQUFBLEdBQUcsRUFBRSxHQUhFO0FBSVBDLFFBQUFBLElBQUksRUFBRTtBQUpDO0FBREEsS0FUSDtBQWlCUmhELElBQUFBLGtCQUFrQixFQUFFO0FBakJaO0FBTmMsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IGNsb25lRGVlcCwgbGFzdCwgcm91bmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IFBSRURJQ1RJT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3ByZWRpY3Rpb24nO1xuaW1wb3J0IFNpbmdsZVNlcmllc0xpbmVDaGFydCBmcm9tICcuLi9zaW5nbGUtc2VyaWVzLWxpbmUtY2hhcnQnO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdQcmVkaWN0aW9uIExpbmUnO1xuXG5mdW5jdGlvbiBjYWxjQWNjKGRhdGE6IGFueSkge1xuICBkYXRhLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpdGVtLnZhbHVlICs9IGRhdGFbaW5kZXggLSAxXS52YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBjYWxjQnVybmRvd24oZGF0YTogYW55KSB7XG4gIGNvbnN0IGNvcHkgPSBjbG9uZURlZXAoZGF0YSk7XG4gIGZvciAobGV0IGkgPSBjb3B5Lmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29weVtpXS52YWx1ZSArPSBjb3B5W2kgKyAxXS52YWx1ZSArIHJvdW5kKChNYXRoLnJhbmRvbSgpIC0gMC4xKSAqIDUpO1xuICB9XG4gIHJldHVybiBjb3B5O1xufVxuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQoeyB3aXRoUmVncmVzc2lvbkxpbmUsIGV4dGVuZERheXMsIGRhdGFDb3VudCB9OiBhbnkpIHtcbiAgY29uc3QgaW5kZXggPSAwO1xuICBjb25zdCB7IHJhbmRvbVVwLCByYW5kb21Eb3duIH0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgICBjb25zdCByZXQgPSBBcnJheS5mcm9tKG5ldyBBcnJheShkYXRhQ291bnQpLCAoKSA9PiAoe1xuICAgICAgZGF0ZTogbm93LmFkZCgxLCAnZGF5cycpLnRvSVNPU3RyaW5nKCksXG4gICAgICB2YWx1ZTogcm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmFuZG9tVXA6IGNhbGNBY2MocmV0KSxcbiAgICAgIHJhbmRvbURvd246IGNhbGNCdXJuZG93bihyZXQpLFxuICAgIH07XG4gIH0sIFtkYXRhQ291bnRdKTtcblxuICBjb25zdCBzZXJpZXNVcCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByYW5kb21VcDtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjU3MSkgRklYTUU6IE9iamVjdCBpcyBvZiB0eXBlICd1bmtub3duJy5cbiAgICBjb25zdCBsYXN0RGF0ZSA9IG1vbWVudChsYXN0KHNlcmllc0RhdGEpLmRhdGUpO1xuICAgIGNvbnN0IHRhaWxpbmdEYXRlcyA9IEFycmF5LmZyb20obmV3IEFycmF5KGV4dGVuZERheXMpLCAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRlOiBsYXN0RGF0ZS5hZGQoMSwgJ2RheXMnKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmllc0RhdGEuY29uY2F0KHRhaWxpbmdEYXRlcyk7XG4gIH0sIFtpbmRleCwgcmFuZG9tVXAsIGV4dGVuZERheXNdKTtcblxuICBjb25zdCBzZXJpZXNEb3duID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IHJhbmRvbURvd247XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDI1NzEpIEZJWE1FOiBPYmplY3QgaXMgb2YgdHlwZSAndW5rbm93bicuXG4gICAgY29uc3QgbGFzdERhdGUgPSBtb21lbnQobGFzdChzZXJpZXNEYXRhKS5kYXRlKTtcbiAgICBjb25zdCB0YWlsaW5nRGF0ZXMgPSBBcnJheS5mcm9tKG5ldyBBcnJheShleHRlbmREYXlzKSwgKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZTogbGFzdERhdGUuYWRkKDEsICdkYXlzJykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBzZXJpZXNEYXRhLmNvbmNhdCh0YWlsaW5nRGF0ZXMpO1xuICB9LCBbaW5kZXgsIHJhbmRvbURvd24sIGV4dGVuZERheXNdKTtcblxuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICB3aXRoVG9vbHRpcDogdHJ1ZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgaW50ZXJwb2xhdGlvblR5cGU6ICdsaW5lYXInLFxuICAgIHN0b3JrZUNvbG9yOiAnI0NBNDUyMScsXG4gICAgcmVmUHJlZGljdGlvbkxpbmU6IHtcbiAgICAgIC8vIEhFUkVcbiAgICAgIGtleTogJ3ByZWRpY3Rpb24tbGluZScsXG4gICAgICB0eXBlOiBQUkVESUNUSU9OX1RZUEVTLnJlZ3Jlc3Npb25MaW5lYXIsXG4gICAgICBjb2xvcjogJyMzYjZlZmQnLFxuICAgICAgc3Ryb2tlRGFzaEFycmF5OiAnMycsXG4gICAgfSxcbiAgICB0b29sdGlwRXhjbHVkZWROYW1lczogWydwcmVkaWN0aW9uLWxpbmUnXSwgLy8gSEVSRVxuICAgIHhBeGlzOiB7XG4gICAgICBuYW1lOiAnJyxcbiAgICB9LFxuICAgIHhUaWNrQ291bnQ6IDMsXG4gICAgeUF4aXM6IHtcbiAgICAgIG5hbWU6ICdEZXYgRXF1aXZhbGVudCcsXG4gICAgfSxcbiAgICB5RG9tYWluOiBbMCwgJ2F1dG8nXSxcbiAgICBsYWJlbEtleTogJ2RhdGUnLFxuICAgIGxhYmVsRm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnREFURV9USU1FJyxcbiAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgIH0sXG4gIH07XG4gIGlmICh3aXRoUmVncmVzc2lvbkxpbmUpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjMzOSkgRklYTUU6IFByb3BlcnR5ICdyZWZSZWdyZXNzaW9uVHlwZScgZG9lcyBub3QgZXhpc3Qgb24gdHlwLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICBjb25maWd1cmF0aW9ucy5yZWZSZWdyZXNzaW9uVHlwZSA9ICdyZWdyZXNzaW9uTGluZWFyJztcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoMjMzOSkgRklYTUU6IFByb3BlcnR5ICdyZWZSZWdyZXNzaW9uQ29sb3InIGRvZXMgbm90IGV4aXN0IG9uIHR5Li4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbiAgICBjb25maWd1cmF0aW9ucy5yZWZSZWdyZXNzaW9uQ29sb3IgPSAnIzIxNTJjYSc7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlByZWRpY3Rpb24gTGluZTwvaDE+XG4gICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cbiAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgIDxoMj5Hb2luZyB1cDwvaDI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogNjAwLCBoZWlnaHQ6IDQwMCB9fT5cbiAgICAgICAgICAgIDxTaW5nbGVTZXJpZXNMaW5lQ2hhcnQgZGF0YT17c2VyaWVzVXB9IGNvbmZpZ3VyYXRpb25zPXtjb25maWd1cmF0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgPGgyPkJ1cm5pbmcgZG93bjwvaDI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogNjAwLCBoZWlnaHQ6IDQwMCB9fT5cbiAgICAgICAgICAgIDxTaW5nbGVTZXJpZXNMaW5lQ2hhcnQgZGF0YT17c2VyaWVzRG93bn0gY29uZmlndXJhdGlvbnM9e2NvbmZpZ3VyYXRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gIGFyZ3M6IHtcbiAgICBleHRlbmREYXlzOiAzLFxuICAgIGRhdGFDb3VudDogMzAsXG4gICAgd2l0aFJlZ3Jlc3Npb25MaW5lOiBmYWxzZSxcbiAgfSxcbiAgYXJnVHlwZXM6IHtcbiAgICBleHRlbmREYXlzOiB7XG4gICAgICBjb250cm9sOiB7XG4gICAgICAgIHR5cGU6ICdyYW5nZScsXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgc3RlcDogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhQ291bnQ6IHtcbiAgICAgIGNvbnRyb2w6IHtcbiAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgbWluOiAxMCxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHN0ZXA6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gICAgd2l0aFJlZ3Jlc3Npb25MaW5lOiAnYm9vbGVhbicsXG4gIH0sXG59O1xuIl19