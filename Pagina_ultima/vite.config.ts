import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Detecta si el build se está ejecutando en GitHub Actions
 * (caso GitHub Pages).
 *
 * - GitHub Pages requiere que `base` sea el nombre del repositorio
 * - Cloudflare Pages y desarrollo local funcionan correctamente con '/'
 *
 * Evitamos lógica innecesaria o dependiente de Rollup hasta
 * tener métricas reales que justifiquen optimización adicional.
 */
const isGithubPages =
  process.env.GITHUB_ACTIONS === 'true' && !process.env.CF_PAGES

export default defineConfig({
  /**
   * Plugins
   * Solo lo necesario.
   * Vite + React ya vienen altamente optimizados.
   */
  plugins: [react()],

  /**
   * base:
   * - GitHub Pages → '/paginaultima/'
   * - Cloudflare Pages → '/'
   * - Desarrollo local → '/'
   *
   * Mantener esta lógica explícita reduce errores de deploy
   * y hace el comportamiento del build predecible.
   */
  base: isGithubPages ? '/paginaultima/' : '/',
})
