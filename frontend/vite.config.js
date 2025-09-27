import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // ye /signup aur /login requests automatically backend pe forward karega
      '/signup': 'http://localhost:8080',
      '/login': 'http://localhost:8080',
    },
  },
})
