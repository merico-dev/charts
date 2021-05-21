import * as d3 from 'd3-shape';

export const INTERPOLATION_TYPES = {
  basic: [
    'basis',
    'basisClosed',
    'basisOpen',
    'linear',
    'linearClosed',
    'natural',
    'monotoneX',
    'monotoneY',
    'monotone',
    'step',
    'stepBefore',
    'stepAfter',
  ],
  func: {
    // bundle
    curveBundle100: d3.curveBundle.beta(1),
    curveBundle75: d3.curveBundle.beta(0.75),
    curveBundle50: d3.curveBundle.beta(0.5),
    curveBundle0: d3.curveBundle.beta(0),
    // cardinal
    cardinal100: d3.curveCardinal.tension(1),
    cardinal75: d3.curveCardinal.tension(0.75),
    cardinal50: d3.curveCardinal.tension(0.5),
    cardinal0: d3.curveCardinal.tension(0),
  },
};

export const parseInterpolation = (type: any) => {
  if (!type) {
    return 'monotone';
  }
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  return INTERPOLATION_TYPES.func[type] || type;
};
