module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': 0,
    'react/self-closing-comp': 0,
    'max-len': ['error', { code: 300, comments: 250 }],
    'click-events-have-key-events': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
    'default-param-last': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 0,
    'import/extensions': 0,
    'no-const-assign': 0,
    'react/no-array-index-key': 0,
  },
};
