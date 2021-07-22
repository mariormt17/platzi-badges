import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import BadgeNew from './pages/BadgeNew.js';

ReactDOM.render (
  <React.StrictMode>
    <BadgeNew />
  </React.StrictMode>,
  document.getElementById('app')
);
