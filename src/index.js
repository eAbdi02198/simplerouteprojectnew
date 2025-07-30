import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ThemeProvider } from 'react-bootstrap';

const basename = process.env.NODE_ENV === "production" ? "/simplerouteprojectnew" : "/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider dir='rtl'>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);