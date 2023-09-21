module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  ignorePatterns: ['**/built/**'],

  rules: {
    'linebreak-style': 0,
    'max-len': [
      'warn',
      {
        code: 160,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'space-infix-ops': ['error', { int32Hint: false }],
    'no-undef': 'warn',
    'valid-jsdoc': ['warn', { requireParamType: false }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'prettier'],
      extends: ['google', 'plugin:@typescript-eslint/recommended', 'prettier'],
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      /**
       * Typescript Rules
       */
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'require-jsdoc': 'off',
        'guard-for-in': 'off',
      },
    },
  ],
};
