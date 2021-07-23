import React from 'react';
import './styles/BadgeList.css'

class BadgeList extends React.Component {
  render () {
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.data.results.map((character)=>{
            return(
              <li key={character.id} className="BadgesListItem">
                  <img src={character.image} alt="" className="BadgesListItem__avatar"/>
                  <div>
                    <div>
                      <strong>{character.name} - {character.origin.name}</strong>
                    </div>
                    <div className="Twitter__name">
                        <span className="Twitter__logo"></span>@{character.name}
                    </div>
                    <div>{character.gender}</div>
                  </div>
              </li>
            )
        })}
      </ul>
    );
  }
}

export default BadgeList;