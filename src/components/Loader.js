import React from 'react';
import infinityLoader from '../images/infinity-loader.svg';
import './styles/Loader.css'

function Loader () {
  return (
    <div className="loader">
      <img src={infinityLoader} alt="loader" />
    </div>
  );
}

export default Loader;