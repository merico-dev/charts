export const name = 'Prediction Line';

export const parameters = {
  args: {
    extendDays: 3,
    dataCount: 30,
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
  },
};

export { default as content } from './content';
