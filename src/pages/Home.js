import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'
import conferenceLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg'

function Home () {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col col-12 col-md-4">
            <img
              src={conferenceLogo}
              alt="conf-logo"
              className="img-fluid mb-2"
            />

            <h1>PRINT YOUR BADGES</h1>
            <p>The easiest way to manage your conference</p>
            <Link className="btn btn-primary" to="/badges">
              Start Now
            </Link>
          </div>
          <div className="Home__col d-none d-md-block col-md-8">
            <img
              src={astronauts}
              alt="astronauts"
              className="img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;