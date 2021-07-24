import React from 'react';
import './styles/BadgeList.css'
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

function useSearchBadges (badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
    })
    setFilteredBadges(result)
  }, [ badges, query ]);

  return { query, setQuery, filteredBadges }
}

function BadgeList (props) {
  const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);

  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="form-group mb-4">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type a Badge name"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <div className="container">
          <h2>No badges were found</h2>
          <Link
            className="btn btn-primary"
            to="/badges/new"
            >
            Create new badge
          </Link>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="form-group mb-4">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          placeholder="Type a Badge name"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled BadgesList">
        {filteredBadges.map((badge)=>{
          return(
            <Link
            className="text-reset text-decoration-none"
            to={`/badges/${badge.id}`}
            >
                <li key={badge.id} className="BadgesListItem">
                    <Gravatar
                      className="BadgesListItem__avatar"
                      source={badge.email || 'email@example.com'}
                      avatarUrl={badge.avatarUrl}
                      />
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
              </Link>
            )
          })}
      </ul>
    </React.Fragment>
  );
}

export default BadgeList;