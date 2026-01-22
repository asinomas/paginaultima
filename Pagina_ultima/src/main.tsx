import React from 'react'
import ReactDOM from 'react-dom/client'
import AIConsultant from './components/AIConsultant'
import { HelmetProvider } from 'react-helmet-async'

// Cambiamos 'root' por 'root-ia' para que NO borre todo tu HTML de BlackTI
const rootElement = document.getElementById('root-ia');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <AIConsultant />
      </HelmetProvider>
    </React.StrictMode>
  )
}
