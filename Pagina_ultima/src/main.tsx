import React from 'react'
import ReactDOM from 'react-dom/client'
import AIConsultant from './components/AIConsultant'
import { HelmetProvider } from 'react-helmet-async'

// Buscamos el div específico que creamos en el index.html
const rootElement = document.getElementById('root-ia');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <AIConsultant />
      </HelmetProvider>
    </React.StrictMode>
  )
} else {
  console.error("No se encontró el elemento 'root-ia'. Revisa tu index.html");
}
