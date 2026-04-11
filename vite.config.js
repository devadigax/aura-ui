import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const isLib = process.env.BUILD_MODE === 'lib';

export default defineConfig({
  plugins: [react()],

  // Dev server always runs the showcase
  root: '.',

  build: isLib
    ? {
        // ── LIBRARY BUILD (npm run build:lib) ──
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'AuraUI',
          fileName: 'aura-ui',
          formats: ['es', 'umd'],
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: { react: 'React', 'react-dom': 'ReactDOM' },
          },
        },
      }
    : {
        // ── SHOWCASE BUILD (npm run build) ──
        outDir: 'dist-showcase',
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            showcase: resolve(__dirname, 'showcase.html'),
          },
        },
      },
});
