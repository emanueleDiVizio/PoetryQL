module.exports = {
  parser: 'babel-eslint',
  plugins: ['jest'],
  extends: ['airbnb', 'plugin:jest/recommended'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
  },
};
