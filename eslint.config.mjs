import { defineFlatConfig } from 'eslint-define-config';
import vue from 'eslint-plugin-vue';
import parser from 'vue-eslint-parser';
import tseslint from '@typescript-eslint/eslint-plugin';

export default defineFlatConfig([
  {
    ignores: ['.nuxt', 'node_modules', 'dist', 'output', 'public'],
  },
  {
    files: ['**/*.mjs', '**/*.js', '**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: parser,
    },
    plugins: {
      vue,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...vue.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'semi': ['error', 'always'],
      'prefer-const': 'error',
      'indent': ['error', 2],
      'vue/html-indent': ['error', 2],
      'quotes': ['error', 'single'],
      'no-console': 'warn',
      'prefer-const': 'warn',
      'eqeqeq': ['error', 'always'],
      'no-var': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'space-before-blocks': ['error', 'always'],
      'no-debugger': 'warn',
      'curly': ['error', 'all'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],

      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': ['error', { 'singleline': 3 }],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/no-mutating-props': 'error',
      'vue/no-unused-components': 'warn',
      'vue/require-default-prop': 'off',

      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    },
  },
]);
