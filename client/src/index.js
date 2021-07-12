import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import NavRightProvider from './contexts/NavRightContext';
import AuthProvider from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <NavRightProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NavRightProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

