import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';

  return {
    plugins: [
      svelte({
        compilerOptions: {
          dev: !isProduction,
        },
        hot: !isProduction,
      })
    ],
    resolve: {
      alias: {
        $core: path.resolve('./src/packages/core'),
        $components: path.resolve('./src/packages/core/components'),
        $utils: path.resolve('./src/packages/core/utils')
      }
    },
    build: isProduction ? {
      lib: {
        entry: path.resolve(__dirname, 'src/packages/core/index.ts'),
        name: 'QuantaUI',
        fileName: (format) => `svelte-quanta-ui.${format}.js`
      },
      rollupOptions: {
        external: ['svelte', '@melt-ui/svelte', '@bits-ui/core'],
        output: {
          globals: {
            svelte: 'Svelte',
            '@melt-ui/svelte': 'MeltUI',
            '@bits-ui/core': 'BitsUI'
          }
        }
      }
    } : undefined,
    server: {
      port: 5173,
      strictPort: true,
      host: true
    },
    test: {
      globals: true,
      environment: 'jsdom'
    }
  };
});