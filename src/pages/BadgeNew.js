import React from 'react';
import './styles/BadgeNew.css'
import badgeHeader from '../images/badge-header.svg'
import Navbar from '../components/Navbar.js'
import Badge from '../components/Badge.js'


class BadgeNew extends React.Component {
  render () {
    return (
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={badgeHeader} alt="header-img" />
        </div>

        <div className="container">
          <div className="row">
            <div className="column">
              <Badge
                firstName = "Mario"
                lastName = "Mancilla"
                twitter = "MarioManTin"
                jobTitle = "Ruby on Rails Developer"
                avatarUrl = "https://static.platzi.com/media/avatars/avatars/mariormt17_16089d54-49bc-4747-a459-c23cf4b26b05.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;