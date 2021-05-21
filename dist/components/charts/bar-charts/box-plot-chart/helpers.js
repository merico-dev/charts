"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.calcIdealWidthForBoxPlotChart = calcIdealWidthForBoxPlotChart;
exports.calcIdealHeightForBoxPlotChart = calcIdealHeightForBoxPlotChart;

/* eslint-disable */

/**
 * TODO
 * calculate an ideal width for BoxPlotChart
 * @param {Number} len data length
 * @returns {Number} ideal width
 */
function calcIdealWidthForBoxPlotChart(len) {// if (!len) { return 0; }
  // const box = 20;
  // const gap = 8;
  // const widths = len * box;
  // const gapWidths = len * gap;
  // const yTickWidth = box * 4; // temp
  // // const adjustment = len * box * 0.5; // for x tick labels
  // const adjustment = 0;
  // const idealWidth = widths + gapWidths + yTickWidth + adjustment;
  // return idealWidth;
}
/**
 * TODO
 * calculate an ideal height for BoxPlotChart
 * @param {Number} len data length
 * @returns {Number} ideal height
 */


function calcIdealHeightForBoxPlotChart(len) {// if (!len) { return 0; }
  // const box = 20;
  // const gap = 8;
  // const heights = len * box;
  // const gapHeights = len * gap;
  // const idealHeight = heights + gapHeights + adjustment;
  // return idealHeight;

  var adjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL2JveC1wbG90LWNoYXJ0L2hlbHBlcnMudHMiXSwibmFtZXMiOlsiY2FsY0lkZWFsV2lkdGhGb3JCb3hQbG90Q2hhcnQiLCJsZW4iLCJjYWxjSWRlYWxIZWlnaHRGb3JCb3hQbG90Q2hhcnQiLCJhZGp1c3RtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7QUFNTyxTQUFTQSw2QkFBVCxDQUF1Q0MsR0FBdkMsRUFBaUQsQ0FDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNDLDhCQUFULENBQXdDRCxHQUF4QyxFQUFtRSxDQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQd0UsTUFBakJFLFVBQWlCLHVFQUFKLEVBQUk7QUFRekUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKipcbiAqIFRPRE9cbiAqIGNhbGN1bGF0ZSBhbiBpZGVhbCB3aWR0aCBmb3IgQm94UGxvdENoYXJ0XG4gKiBAcGFyYW0ge051bWJlcn0gbGVuIGRhdGEgbGVuZ3RoXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBpZGVhbCB3aWR0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY0lkZWFsV2lkdGhGb3JCb3hQbG90Q2hhcnQobGVuOiBhbnkpIHtcbiAgLy8gaWYgKCFsZW4pIHsgcmV0dXJuIDA7IH1cbiAgLy8gY29uc3QgYm94ID0gMjA7XG4gIC8vIGNvbnN0IGdhcCA9IDg7XG4gIC8vIGNvbnN0IHdpZHRocyA9IGxlbiAqIGJveDtcbiAgLy8gY29uc3QgZ2FwV2lkdGhzID0gbGVuICogZ2FwO1xuICAvLyBjb25zdCB5VGlja1dpZHRoID0gYm94ICogNDsgLy8gdGVtcFxuICAvLyAvLyBjb25zdCBhZGp1c3RtZW50ID0gbGVuICogYm94ICogMC41OyAvLyBmb3IgeCB0aWNrIGxhYmVsc1xuICAvLyBjb25zdCBhZGp1c3RtZW50ID0gMDtcbiAgLy8gY29uc3QgaWRlYWxXaWR0aCA9IHdpZHRocyArIGdhcFdpZHRocyArIHlUaWNrV2lkdGggKyBhZGp1c3RtZW50O1xuICAvLyByZXR1cm4gaWRlYWxXaWR0aDtcbn1cblxuLyoqXG4gKiBUT0RPXG4gKiBjYWxjdWxhdGUgYW4gaWRlYWwgaGVpZ2h0IGZvciBCb3hQbG90Q2hhcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW4gZGF0YSBsZW5ndGhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGlkZWFsIGhlaWdodFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY0lkZWFsSGVpZ2h0Rm9yQm94UGxvdENoYXJ0KGxlbjogYW55LCBhZGp1c3RtZW50ID0gMzApIHtcbiAgLy8gaWYgKCFsZW4pIHsgcmV0dXJuIDA7IH1cbiAgLy8gY29uc3QgYm94ID0gMjA7XG4gIC8vIGNvbnN0IGdhcCA9IDg7XG4gIC8vIGNvbnN0IGhlaWdodHMgPSBsZW4gKiBib3g7XG4gIC8vIGNvbnN0IGdhcEhlaWdodHMgPSBsZW4gKiBnYXA7XG4gIC8vIGNvbnN0IGlkZWFsSGVpZ2h0ID0gaGVpZ2h0cyArIGdhcEhlaWdodHMgKyBhZGp1c3RtZW50O1xuICAvLyByZXR1cm4gaWRlYWxIZWlnaHQ7XG59XG4iXX0=