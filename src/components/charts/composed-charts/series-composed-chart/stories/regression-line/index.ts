import { REGRESSION_TYPES } from '../../../../../helpers/regression';

export const name = 'Regression Line';
export { default as content } from './content';

export const parameters = {
  args: {
    regressionType1: 'regressionLinear',
    regressionType2: 'regressionLinear',
  },
  argTypes: {
    regressionType1: {
      control: {
        type: 'select',
        options: Object.values(REGRESSION_TYPES),
      },
    },
    regressionType2: {
      control: {
        type: 'select',
        options: Object.values(REGRESSION_TYPES),
      },
    },
  },
};
