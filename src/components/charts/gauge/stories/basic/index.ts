export const name = 'Basic';
export { default as content } from './content';

export const parameters = {
  args: {
    value: 2.2,
  },
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 8,
        step: 0.1,
      },
    },
  },
};
