const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

const baseText = {
  backgroundColor: 'transparent',
};

const style = {
  h1: {
    fontSize: size.h1,
    ...baseText,
  },
  h2: {
    fontSize: size.h2,
    ...baseText,

  },
  h3: {
    fontSize: size.h3,
    ...baseText,

  },
  h4: {
    fontSize: size.h4,
    ...baseText,

  },
  h5: {
    fontSize: size.h5,
    ...baseText,

  },
  h6: {
    fontSize: size.h6,
    ...baseText,

  },
  normal: {
    fontSize: size.regular,
    ...baseText,

  },
  description: {
    fontSize: size.medium,
    ...baseText,

  },
};

export default {
  size,
  style,
};
