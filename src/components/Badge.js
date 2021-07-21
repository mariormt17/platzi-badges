import React from 'react';
import conferenceLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render () {
    return (
      <div>
        <div>
          <img src={conferenceLogo} alt="conference-logo" />
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="avatar" />
          <h1>Mario <br /> Mancilla</h1>
        </div>
        <div>
          <p>Ruby on Rails Developer</p>
          <p>@MarioManTin</p>
        </div>
        <div>
          #PlatziConf
        </div>
      </div>
    );
  }
}

export default Badge;