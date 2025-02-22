import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Configuración de Vite con proxy para el backend
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        /* rewrite: (path) => path.replace(/^\/api/, '/api') */
      }
    }
  }
}) 