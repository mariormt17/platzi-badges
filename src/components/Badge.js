import React from 'react';
import conferenceLogo from '../images/badge-header.svg';
import './styles/Badge.css'

class Badge extends React.Component {
  render () {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={conferenceLogo} alt="conference-logo" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://static.platzi.com/media/avatars/avatars/mariormt17_16089d54-49bc-4747-a459-c23cf4b26b05.jpg"
            alt="avatar"
          />
          <h1>Mario <br /> Mancilla</h1>
        </div>
        <div className="Badge__section-info">
          <h3>Ruby on Rails Developer</h3>
          <div>@MarioManTin</div>
        </div>
        <div className="Badge__footer">
          #PlatziConf
        </div>
      </div>
    );
  }
}

export default Badge;