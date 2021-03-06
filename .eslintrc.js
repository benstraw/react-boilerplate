module.exports = {
  parser: 'babel-eslint',
  extends: 'react-app',
  globals: {
    chrome: true,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'react/forbid-prop-types': 0,
    'default-case': 0, // Required default case is nonsense.
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'consistent-return': 0,
    'comma-dangle': 0,
    'spaced-comment': 0,
    'global-require': 0,
    'no-console': 0,
    'default-case': 0,
    semi: ['error', 'never'],
    'react/prop-types': 0,
    'max-len': [
      'error',
      160,
      {
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
  },
  plugins: ['react'],
}
