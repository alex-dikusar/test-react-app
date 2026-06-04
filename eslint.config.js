import fs from 'fs';
import path from 'path';
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import-x';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), '.prettierrc'), 'utf8'),
);

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['eslint.config.js', 'nginx.conf.js'],
    rules: { 'no-undef': 'off' },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { prettier: pluginPrettier, 'react-hooks': pluginReactHooks },
    rules: {
      'prettier/prettier': ['error', prettierOptions],
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
    settings: {
      react: { version: 'detect' },
      'import-x/resolver': {
        typescript: { project: './tsconfig.json', alwaysTryTypes: true },
      },
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'src/components/ui/**',
      'package.json',
      'package-lock.json',
    ],
  },
];
