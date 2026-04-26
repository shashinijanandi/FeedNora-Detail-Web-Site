import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FeedNora-Detail-Web-Site/',
  server: {
    proxy: {
      '/api': 'httSp://localhost:5000'
    }
  }
})
