import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgeDetails.css'
import conferenceLogo from '../images/platziconf-logo.svg'
import Loader from '../components/Loader';
import PageError from '../components/PageError';
import api from '../api';
import Badge from '../components/Badge';

class BadgeDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {}
    }
  }

  componentDidMount () {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      this.setState({
        loading: false,
        data: data
      });
    } catch (error) {
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
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={conferenceLogo} alt="conference-logo" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName = {this.state.data.firstName}
                lastName = {this.state.data.lastName}
                twitter = {this.state.data.twitter}
                jobTitle = {this.state.data.jobTitle}
                avatarUrl = {this.state.data.avatarUrl}
                email = {this.state.data.email}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div><Link to={`/badges/${this.state.data.id}/edit`} className="btn btn-primary mb-4">Edit</Link></div>
                <div><Link to={`/badges/${this.state.data.id}/edit`} className="btn btn-danger">Delete</Link></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeDetails