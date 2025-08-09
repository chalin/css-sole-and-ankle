import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    ignores: ['dist/**', 'build/**', '*.min.js', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
        document: 'readonly',
        Element: 'readonly',
        Event: 'readonly',
        FormData: 'readonly',
        HTMLElement: 'readonly',
        HTMLSelectElement: 'readonly',
        KeyboardEvent: 'readonly',
        Node: 'readonly',
        process: 'readonly',
        window: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        queueMicrotask: 'readonly',
        matchMedia: 'readonly',
        __REACT_DEVTOOLS_GLOBAL_HOOK__: 'readonly',
        __webpack_nonce__: 'readonly',
        SC_DISABLE_SPEEDY: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // Adjust TypeScript rules for JavaScript usage
      '@typescript-eslint/no-unused-vars': 'off', // 'off' is TEMPORARY
      '@typescript-eslint/no-unused-expressions': 'off', // Too strict for bundled code
      '@typescript-eslint/no-this-alias': 'off', // Common pattern in bundled libraries
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off', // Not needed when using TypeScript
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'no-undef': 'off', // TypeScript parser handles this better
      'no-redeclare': 'off', // TypeScript parser handles this
      'no-func-assign': 'off', // Common in bundled code
      'no-fallthrough': 'off', // Common in bundled code
      'no-cond-assign': 'off', // Common in bundled code
      'no-empty': 'off', // Common in bundled code
      'no-control-regex': 'off', // Common in bundled code
      'no-prototype-builtins': 'off', // Common in bundled code
    },
  },
];
