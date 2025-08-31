import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import './index.css'
//import App from './App.jsx'
import React from 'react';             // esto me da que lo mismo tampoco hace falta
import ReactDOM from 'react-dom/client'; // esto me da que lo mismo tampoco hace falta
import { GifExpertApp } from './GifExpertApp.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
