/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/reacdle/',
  plugins: [react()],
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: './src/test/test-setup.ts',
  },
});
