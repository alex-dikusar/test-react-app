module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-no-target-blank': 'off',
  },
};
