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
      '@typescript-eslint': tseslint
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
    }
  }
]);
