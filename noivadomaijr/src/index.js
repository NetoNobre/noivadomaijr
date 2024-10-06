import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Se você tiver algum estilo global
import App from './App'; // O componente que você criou

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
