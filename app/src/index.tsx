/*
  Sandbox application for development and experimenting.
  Run 'npm start' (or 'npm run app') to launch a dev server.
*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-root')
);
