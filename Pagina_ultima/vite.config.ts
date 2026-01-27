import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta si estamos en GitHub Pages
const isGithubPages = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? '/paginaultima/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'charts': ['d3', 'topojson-client']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
