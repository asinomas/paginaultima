import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detecta si el build se ejecuta en GitHub Actions (GitHub Pages)
// Cloudflare Pages NO requiere base distinta, siempre usa '/'
const isGithubPages =
  process.env.GITHUB_ACTIONS === 'true' && !process.env.CF_PAGES;

export default defineConfig({
  // Plugin oficial de React (JSX, Fast Refresh, etc.)
  plugins: [react()],

  /**
   * Base path:
   * - GitHub Pages requiere el nombre del repo como base
   * - Cloudflare Pages y local usan '/'
   */
  base: isGithubPages ? '/paginaultima/' : '/',

  build: {
    /**
     * Directorio de salida del build
     * Compatible con GitHub Pages y Cloudflare Pages
     */
    outDir: 'dist',

    /**
     * Carpeta donde Vite coloca JS, CSS, imágenes y fonts procesadas
     */
    assetsDir: 'assets',

    /**
     * Sourcemaps desactivados en producción
     * - Reduce tamaño
     * - Evita exponer código
     */
    sourcemap: false,

    /**
     * Minificación rápida y estable
     * esbuild es suficiente para este tamaño de app
     */
    minify: 'esbuild',

    /**
     * No se define manualChunks:
     * - Vite ya hace code splitting automático óptimo
     * - Evita conflictos (como duplicar react-router-dom)
     * - React.lazy ya genera chunks separados
     */
  },

  server: {
    /**
     * Configuración de desarrollo local
     */
    port: 3000,
    open: true,
  },
});
