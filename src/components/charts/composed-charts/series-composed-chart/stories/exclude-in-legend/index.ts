export const name = 'Exclude in Legend';
export { default as content } from './content';

export const parameters = {
  args: {
    enabled: false,
  },
  argTypes: {
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};
