import React from 'react';
import './styles/BadgeList.css'
import { Link } from 'react-router-dom';

class BadgeList extends React.Component {
  render () {
    if (this.props.badges.length === 0) {
      return (
        <div className="container">
          <h2>No badges were found</h2>
          <Link
            className="btn btn-primary"
            to="/badges/new"
          >
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge)=>{
            return(
              <li key={badge.id} className="BadgesListItem">
                  <img src={badge.avatarUrl} alt="" className="BadgesListItem__avatar"/>
                  <div>
                    <div>
                      <strong>{badge.firstName} {badge.lastName}</strong>
                    </div>
                    <div className="Twitter__name">
                        <span className="Twitter__logo"></span>@{badge.twitter}
                    </div>
                    <div>{badge.jobTitle}</div>
                  </div>
              </li>
            )
        })}
      </ul>
    );
  }
}

export default BadgeList;