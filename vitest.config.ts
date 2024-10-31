import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['**/node_modules/**', '**/dist/**']
    },
    alias: {
      '$core': path.resolve(__dirname, './src/packages/core'),
      '$components': path.resolve(__dirname, './src/packages/core/components'),
      '$utils': path.resolve(__dirname, './src/packages/core/utils')
    }
  }
});