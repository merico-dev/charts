"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.calcIdealWidthForBarChart = calcIdealWidthForBarChart;
exports.calcIdealHeightForBarChart = calcIdealHeightForBarChart;

/**
 * calculate an ideal width for RechartsBarChart
 * @param {Number} len data length
 * @returns {Number} ideal width
 */
function calcIdealWidthForBarChart(len) {
  if (!len) {
    return 0;
  }

  var box = 20;
  var gap = 8;
  var widths = len * box;
  var gapWidths = len * gap;
  var yTickWidth = box * 4; // temp
  // const adjustment = len * box * 0.5; // for x tick labels

  var adjustment = 0;
  var idealWidth = widths + gapWidths + yTickWidth + adjustment;
  return idealWidth;
}
/**
 * calculate an ideal height for RechartsBarChart
 * @param {Number} len data length
 * @returns {Number} ideal height
 */


function calcIdealHeightForBarChart(len) {
  var adjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

  if (!len) {
    return 0;
  }

  var box = 20;
  var gap = 8;
  var heights = len * box;
  var gapHeights = len * gap;
  var idealHeight = heights + gapHeights + adjustment;
  return idealHeight;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9iYXItY2hhcnRzL3JlY2hhcnRzLWJhci1jaGFydC9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbImNhbGNJZGVhbFdpZHRoRm9yQmFyQ2hhcnQiLCJsZW4iLCJib3giLCJnYXAiLCJ3aWR0aHMiLCJnYXBXaWR0aHMiLCJ5VGlja1dpZHRoIiwiYWRqdXN0bWVudCIsImlkZWFsV2lkdGgiLCJjYWxjSWRlYWxIZWlnaHRGb3JCYXJDaGFydCIsImhlaWdodHMiLCJnYXBIZWlnaHRzIiwiaWRlYWxIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS08sU0FBU0EseUJBQVQsQ0FBbUNDLEdBQW5DLEVBQTZDO0FBQ2xELE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ1IsV0FBTyxDQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFDQSxNQUFNQyxHQUFHLEdBQUcsQ0FBWjtBQUNBLE1BQU1DLE1BQU0sR0FBR0gsR0FBRyxHQUFHQyxHQUFyQjtBQUNBLE1BQU1HLFNBQVMsR0FBR0osR0FBRyxHQUFHRSxHQUF4QjtBQUNBLE1BQU1HLFVBQVUsR0FBR0osR0FBRyxHQUFHLENBQXpCLENBVGtELENBU3RCO0FBQzVCOztBQUNBLE1BQU1LLFVBQVUsR0FBRyxDQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0osTUFBTSxHQUFHQyxTQUFULEdBQXFCQyxVQUFyQixHQUFrQ0MsVUFBckQ7QUFDQSxTQUFPQyxVQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtPLFNBQVNDLDBCQUFULENBQW9DUixHQUFwQyxFQUErRDtBQUFBLE1BQWpCTSxVQUFpQix1RUFBSixFQUFJOztBQUNwRSxNQUFJLENBQUNOLEdBQUwsRUFBVTtBQUNSLFdBQU8sQ0FBUDtBQUNEOztBQUVELE1BQU1DLEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLENBQVo7QUFDQSxNQUFNTyxPQUFPLEdBQUdULEdBQUcsR0FBR0MsR0FBdEI7QUFDQSxNQUFNUyxVQUFVLEdBQUdWLEdBQUcsR0FBR0UsR0FBekI7QUFDQSxNQUFNUyxXQUFXLEdBQUdGLE9BQU8sR0FBR0MsVUFBVixHQUF1QkosVUFBM0M7QUFDQSxTQUFPSyxXQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGNhbGN1bGF0ZSBhbiBpZGVhbCB3aWR0aCBmb3IgUmVjaGFydHNCYXJDaGFydFxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbiBkYXRhIGxlbmd0aFxuICogQHJldHVybnMge051bWJlcn0gaWRlYWwgd2lkdGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNJZGVhbFdpZHRoRm9yQmFyQ2hhcnQobGVuOiBhbnkpIHtcbiAgaWYgKCFsZW4pIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbnN0IGJveCA9IDIwO1xuICBjb25zdCBnYXAgPSA4O1xuICBjb25zdCB3aWR0aHMgPSBsZW4gKiBib3g7XG4gIGNvbnN0IGdhcFdpZHRocyA9IGxlbiAqIGdhcDtcbiAgY29uc3QgeVRpY2tXaWR0aCA9IGJveCAqIDQ7IC8vIHRlbXBcbiAgLy8gY29uc3QgYWRqdXN0bWVudCA9IGxlbiAqIGJveCAqIDAuNTsgLy8gZm9yIHggdGljayBsYWJlbHNcbiAgY29uc3QgYWRqdXN0bWVudCA9IDA7XG4gIGNvbnN0IGlkZWFsV2lkdGggPSB3aWR0aHMgKyBnYXBXaWR0aHMgKyB5VGlja1dpZHRoICsgYWRqdXN0bWVudDtcbiAgcmV0dXJuIGlkZWFsV2lkdGg7XG59XG5cbi8qKlxuICogY2FsY3VsYXRlIGFuIGlkZWFsIGhlaWdodCBmb3IgUmVjaGFydHNCYXJDaGFydFxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbiBkYXRhIGxlbmd0aFxuICogQHJldHVybnMge051bWJlcn0gaWRlYWwgaGVpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjSWRlYWxIZWlnaHRGb3JCYXJDaGFydChsZW46IGFueSwgYWRqdXN0bWVudCA9IDMwKSB7XG4gIGlmICghbGVuKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb25zdCBib3ggPSAyMDtcbiAgY29uc3QgZ2FwID0gODtcbiAgY29uc3QgaGVpZ2h0cyA9IGxlbiAqIGJveDtcbiAgY29uc3QgZ2FwSGVpZ2h0cyA9IGxlbiAqIGdhcDtcbiAgY29uc3QgaWRlYWxIZWlnaHQgPSBoZWlnaHRzICsgZ2FwSGVpZ2h0cyArIGFkanVzdG1lbnQ7XG4gIHJldHVybiBpZGVhbEhlaWdodDtcbn1cbiJdfQ==