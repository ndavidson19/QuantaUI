import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Global settings
  {
    ignores: ['dist/*', 'node_modules/*']
  },

  // TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      },
      globals: {
        ...globals.browser,
        ...globals.es2020
      }
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }]
    }
  },

  // Svelte files
  {
    files: ['**/*.svelte'],
    plugins: {
      svelte: sveltePlugin
    },
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser
      },
      globals: {
        ...globals.browser,
        ...globals.es2020
      }
    },
    rules: {
      ...sveltePlugin.configs.recommended.rules,
      'svelte/valid-compile': 'error',
      'svelte/no-unused-svelte-ignore': 'error',
      'svelte/require-store-callbacks-use-set-param': 'error',
      'svelte/require-store-reactive-access': 'error'
    }
  },

  // JavaScript files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020
      }
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }]
    }
  },

  // Apply Prettier config last
  prettierConfig
];