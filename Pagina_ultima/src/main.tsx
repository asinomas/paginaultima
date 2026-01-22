import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Importamos el ensamblador
import { HelmetProvider } from 'react-helmet-async'

const rootElement = document.getElementById('root'); // Volvemos a usar 'root'

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  )
}
