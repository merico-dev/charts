export const name = 'Prediction Line';
export { default as content } from './content';

export const parameters = {
  args: {
    extendDays: 3,
    dataCount: 30,
    scale: 'auto',
  },
  argTypes: {
    extendDays: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    dataCount: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 1,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: [
          'auto',
          'linear',
          'pow',
          'sqrt',
          'log',
          'identity',
          'time',
          'band',
          'point',
          'ordinal',
          'quantile',
          'quantize',
          'utc',
          'sequential',
          'threshold',
        ],
      },
    },
  },
};
