module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'prettier', 'eslint-config-airbnb'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/quotes': [2, 'single'],
    '@typescript-eslint/semi': [2, 'always'],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-filename-extension': [0],
    'react/react-in-jsx-scope': [0],
    'react/function-component-definition': [0],
    'react/no-array-index-key': [0],
    'import/extensions': [0],
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'array-bracket-spacing': [0],
    'no-confusing-arrow': [0],
    'function-paren-newline': [0],
  },
  env: {
    jest: true,
  },
};
