import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'ES2020'
  },
  server: {
    port: 5173,
    open: true
  }
})
