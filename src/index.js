import React from 'react';
import { createRoot } from 'react-dom/client';
import { AccountProvider } from './Context';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </React.StrictMode>
);
