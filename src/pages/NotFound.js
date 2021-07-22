import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';
import error404 from '../images/404-error.svg';

function NotFound () {
  return (
    <div className="NotFound">
      <div className="container NotFound__container">
        <div className="NotFound__info">
          <h1>Error 404</h1>
          <h3>Page Not Found</h3>
          <p>Something went wrong</p>
          <Link className="btn btn-primary btn-back-home" to="/">
            Back to Home
          </Link>
        </div>
        <img src={error404} alt="error404" />
      </div>
    </div>
  );
}

export default NotFound;