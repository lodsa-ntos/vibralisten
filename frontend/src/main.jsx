import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx";
import { AuthProvider } from './context/AuthContext.jsx';
import './assets/styles/global.css'

// Renderizar os componentes na DOM do navegador
// Render the components in the browser's DOM
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);