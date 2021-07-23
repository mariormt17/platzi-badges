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
      data: {},
      modalIsOpen: false
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

  handleOpenModal = () => {
    this.setState({
      modalIsOpen: true
    });
  }

  handleCloseModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  handleDeleteBadge = async () => {
    this.setState({
      loading: true,
      error: null
    })

    try {
      await api.badges.remove(
        this.props.match.params.badgeId
      );

      this.props.history.push("/badges");

      this.setState({
        loading: false
      });
    } catch (error) {
      this.setState({
        loading:false,
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
      <BadgeDetails
        data={this.state.data}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalIsOpen={this.state.modalIsOpen}
      />
    );
  }
}

export default BadgeDetailsContainer;