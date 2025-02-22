import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import imports from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import sortExports from 'eslint-plugin-sort-exports';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['tailwind.config.ts', 'postcss.config.js'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      import: imports,
      'unused-imports': unusedImports,
      'sort-exports': sortExports,
      prettier,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/boolean-prop-naming': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      'sort-exports/sort-exports': [
        'error',
        { sortDir: 'asc', ignoreCase: true, sortExportKindFirst: 'type', pattern: '**/index.ts' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['variable'],
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'unknown',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './*.module.{css,scss}',
              group: 'unknown',
              position: 'after',
            },
          ],
          distinctGroup: false,
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
    },
  },
];

export default eslintConfig;
