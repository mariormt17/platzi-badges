import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgeDetails.css'
import conferenceLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge';

function BadgeDetails (props) {
  const badge = props.data;

  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={conferenceLogo} alt="conference-logo" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{badge.firstName} {badge.lastName}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName = {badge.firstName}
              lastName = {badge.lastName}
              twitter = {badge.twitter}
              jobTitle = {badge.jobTitle}
              avatarUrl = {badge.avatarUrl}
              email = {badge.email}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div><Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4">Edit</Link></div>
              <div><Link to={`/badges/${badge.id}/edit`} className="btn btn-danger">Delete</Link></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;