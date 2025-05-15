import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['text', 'text-summary', 'html', 'lcov'],
      all: true,
    },
    css: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
})
