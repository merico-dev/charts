export const CHART_COLOR_PALETTE = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#E86452',
  '#6DC8EC',
  '#945FB9',
  '#FF9845',
  '#1E9493',
  '#FF99C3',
  '#A67464',
  '#6C6C6C',
];

export function* getColorGenerator(initial?: string, palette = CHART_COLOR_PALETTE): Generator<string, string> {
  if (initial) {
    yield initial;
  }

  let i = 0;
  while (true) {
    yield palette[i % palette.length];
    i++;
  }
}

export const deriveColorByIndex = (index: number, palette = CHART_COLOR_PALETTE) => {
  if (!Array.isArray(palette)) {
    return CHART_COLOR_PALETTE[0];
  }
  if (!Number.isFinite(index) || index < 0) {
    return palette[0];
  }
  index = Math.round(index) % palette.length;
  return palette[index];
};
