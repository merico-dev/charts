/**
 * calculate an ideal width for RechartsBarChart
 * @param {Number} len data length
 * @returns {Number} ideal width
 */
export function calcIdealWidthForBarChart(len: any) {
  if (!len) {
    return 0;
  }

  const box = 20;
  const gap = 8;
  const widths = len * box;
  const gapWidths = len * gap;
  const yTickWidth = box * 4; // temp
  // const adjustment = len * box * 0.5; // for x tick labels
  const adjustment = 0;
  const idealWidth = widths + gapWidths + yTickWidth + adjustment;
  return idealWidth;
}

/**
 * calculate an ideal height for RechartsBarChart
 * @param {Number} len data length
 * @returns {Number} ideal height
 */
export function calcIdealHeightForBarChart(len: any, adjustment = 30) {
  if (!len) {
    return 0;
  }

  const box = 20;
  const gap = 8;
  const heights = len * box;
  const gapHeights = len * gap;
  const idealHeight = heights + gapHeights + adjustment;
  return idealHeight;
}
