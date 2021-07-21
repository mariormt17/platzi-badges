import React from 'react';
import conferenceLogo from '../images/badge-header.svg';
import './styles/Badge.css'

class Badge extends React.Component {
  render () {
    const {
      firstName,
      lastName,
      twitter,
      jobTitle,
      avatarUrl
     } = this.props

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={conferenceLogo} alt="conference-logo" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={avatarUrl}
            alt="avatar"
          />
          <h1>{firstName} <br /> {lastName}</h1>
        </div>
        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
        <div className="Badge__footer">
          #PlatziConf
        </div>
      </div>
    );
  }
}

export default Badge;