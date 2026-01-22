import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Esto asegura que las rutas de CSS y JS sean relativas y no fallen en Vercel
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000
  }
})
