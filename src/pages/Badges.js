import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Badges.css';
import conferenceLogo from '../images/badge-header.svg';
import BadgeList from '../components/BadgeList';
import Loader from '../components/Loader';
import PageError from '../components/PageError';
import api from '../api';

class Badges extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
    }
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data
      });
    } catch(error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <Loader />
      );
    }

    if (this.state.error) {
      return (
        <PageError error={this.state.error} />
      );
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={conferenceLogo} alt="conference-logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={this.state.data}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;