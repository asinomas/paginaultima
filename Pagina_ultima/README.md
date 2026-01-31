# Página 

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-success)](https://asinomas.github.io/paginaultima/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-live-F38020?logo=cloudflare)](https://paginaultima.pages.dev)
[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)

Una aplicación web moderna construida con React, TypeScript y Vite. Optimizada para rendimiento.

## Características

- **Vite** - Build tool ultrarrápido
- **React 18** - Última versión con concurrent features
- **Tailwind CSS** - Utility-first CSS framework
- **D3.js** - Visualizaciones de datos interactivas
- **React Router** - Navegación entre páginas
- **TypeScript** - Type safety
- **ESLint & Prettier** - Code quality

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/asinomas/paginaultima.git
cd paginaultima/Pagina_ultima

# Instalar dependencias
npm install
```

## Desarrollo

```bash
# Servidor de desarrollo (http://localhost:3000)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## Despliegue

El proyecto se despliega automáticamente en:
- GitHub Pages mediante GitHub Actions al hacer push a la rama `main`.
- Cloudflare Pages usando el build generado por Vite

### URL de producción

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-success)](https://asinomas.github.io/paginaultima/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-live-F38020?logo=cloudflare)](https://paginaultima.pages.dev)

### Despliegue manual

```bash
# Construir el proyecto
npm run build

# Los archivos estarán en la carpeta dist/
```

## Estructura del proyecto

```
Pagina_ultima/
├── src/
│   ├── components/      # Componentes React reutilizables
│   ├── assets/          # Imágenes, fuentes, etc.
│   ├── hooks/           # Custom React hooks
│   ├── services/        # Servicios y APIs
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── public/              # Archivos estáticos
│   ├── images/          # Imágenes generales
│   ├── logos/           # Logos de empresas
│   └── team/            # Fotos del equipo
├── dist/                # Build de producción (generado)
├── vite.config.ts       # Configuración de Vite
├── tsconfig.json        # Configuración de TypeScript
├── tailwind.config.js   # Configuración de Tailwind
└── package.json         # Dependencies y scripts
```

## Configuración

### Variables de entorno

Crea un archivo `.env` en la raíz si necesitas variables:

```env
VITE_API_URL=https://api.example.com
```

### Rutas de GitHub Pages

El proyecto está configurado para desplegarse en:
`https://asinomas.github.io/paginaultima/`

La configuración se encuentra en `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/paginaultima/',
  // ...
})
```

### Rutas de Cloudflare Pages

No requiere configuración de base cuando se usa el dominio `.pages.dev`.

El proyecto se despliega en:
'https://paginaultima.pages.dev'

## Troubleshooting

### Pantalla blanca después del deploy

- Verifica que `base` en `vite.config.ts` coincida con tu ruta de GitHub Pages
- Asegúrate de que el workflow de GitHub Actions haya terminado exitosamente
- Revisa la consola del navegador (F12) para errores

### Errores de rutas 404

- Confirma que GitHub Pages esté habilitado en Settings → Pages
- Verifica que la configuración sea "Source: GitHub Actions"
- Limpia la caché del navegador con `Ctrl + Shift + R`

- Cloudflare Pages: sección Deployments

### Imágenes no cargan

- Las imágenes deben estar en la carpeta `public/`
- Las rutas deben empezar con `/` (ej: `/images/foto.jpg`)
- Vite resuelve automáticamente las rutas con el `base` configurado

## Licencia

MIT - Ver [LICENSE](LICENSE) para más detalles.

## Autor

FR.


**Página**
- GitHub: [@asinomas](https://github.com/asinomas)
- Website: [https://asinomas.github.io/paginaultima/](https://asinomas.github.io/paginaultima/)
- Cloudflare: https://paginaultima.pages.dev/


