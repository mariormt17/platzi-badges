import React from 'react';
import conferenceLogo from '../images/badge-header.svg';
import './styles/Badge.css'
import Gravatar from './Gravatar';

class Badge extends React.Component {
  render () {
    const {
      firstName,
      lastName,
      twitter,
      jobTitle,
      avatarUrl,
      email
    } = this.props

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={conferenceLogo} alt="conference-logo" />
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            source={email || 'email@example.com'}
            avatarUrl={avatarUrl}
          />
          <h1>{firstName ? firstName : "Your"} <br /> {lastName ? lastName : "Name"}</h1>
        </div>
        <div className="Badge__section-info">
          <h3>{jobTitle ? jobTitle : "Your Job"}</h3>
          <div>@{twitter ? twitter : "your_twitter_user"}</div>
        </div>
        <div className="Badge__footer">
          #PlatziConf
        </div>
      </div>
    );
  }
}

export default Badge;