export const name = 'Custom Legend';
export * from './content';

export const parameters = {
  args: {
    Y_MIN: 230,
    Y_MAX: 1440,
    X_MIN: 10,
    X_MAX: 55,
    DEVEQ_MIN: 300,
    DEVEQ_MAX: 6000,
    MAX_RADIUS: 100,
  },
  argTypes: {
    Y_MIN: {
      control: {
        type: 'range',
        min: 10,
        max: 3000,
        step: 10,
      },
    },
    Y_MAX: {
      control: {
        type: 'range',
        min: 10,
        max: 3000,
        step: 10,
      },
    },
    X_MIN: {
      control: {
        type: 'range',
        min: 1,
        max: 100,
        step: 1,
      },
    },
    X_MAX: {
      control: {
        type: 'range',
        min: 1,
        max: 100,
        step: 1,
      },
    },
    DEVEQ_MIN: {
      control: {
        type: 'range',
        min: 10,
        max: 10000,
        step: 10,
      },
    },
    DEVEQ_MAX: {
      control: {
        type: 'range',
        min: 10,
        max: 10000,
        step: 10,
      },
    },
    MAX_RADIUS: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 1,
      },
    },
  },
};
