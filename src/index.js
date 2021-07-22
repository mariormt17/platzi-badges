import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BadgeNew from './pages/BadgeNew.js';
import Badges from './pages/Badges.js';

ReactDOM.render (
  <React.StrictMode>
    <Badges />
  </React.StrictMode>,
  document.getElementById('app')
);
