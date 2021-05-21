export const name = 'XAxis Tick Count';
export { default as content } from './content';

export const parameters = {
  args: {
    dataCount: 14,
    withOriginPoint: false,
  },
  argTypes: {
    dataCount: {
      control: {
        type: 'range',
        min: 1,
        max: 30,
        step: 1,
      },
    },
    withOriginPoint: 'boolean',
  },
};
