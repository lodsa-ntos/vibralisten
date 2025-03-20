import React from 'react'
import App from "./App.jsx";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './provider/authProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);