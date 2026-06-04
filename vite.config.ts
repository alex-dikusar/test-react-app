import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "src/**/*.{js,ts,tsx}"',
        useFlatConfig: true,
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
