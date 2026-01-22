import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'
import './index.css' // Asegúrate de importar tus estilos globales si existen

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  )
}
