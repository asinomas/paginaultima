import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta la plataforma de deployment
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'
const isVercel = process.env.VERCEL === '1'
const isCloudflare = process.env.CF_PAGES === '1'

// Configura la base según la plataforma
let base = '/'
if (isGithubPages) {
  base = '/paginaultima/'
}

export default defineConfig({
  plugins: [react()],
  base: base,
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
