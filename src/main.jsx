import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx'; // Tu componente principal



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
