import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],

  // Base dinámica:
  // - GitHub Pages → /paginaultima/
  // - Cloudflare Pages → /
  base: mode === 'github' ? '/paginaultima/' : '/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          router: ['react-router-dom'],
          charts: ['d3', 'topojson-client']
        }
      }
    }
  },

  server: {
    port: 3000,
    open: true
  }
}))
