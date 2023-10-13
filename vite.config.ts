import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import paths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    paths(),
    svgr(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint "src/**/*.{js,ts,tsx}"' },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
});
