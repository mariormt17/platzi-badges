import React from 'react';
import Loader from '../components/Loader';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';
import api from '../api';

class BadgeDetailsContainer extends React.Component {
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
      <BadgeDetails data={this.state.data} />
    );
  }
}

export default BadgeDetailsContainer;