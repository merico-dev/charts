export const name = 'Zoom';
export { default as content } from './content';

export const parameters = {
  args: {
    dataCount: 30,
  },
  argTypes: {
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
