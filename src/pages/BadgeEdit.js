import React from 'react';
import './styles/BadgeEdit.css'
import badgeHeader from '../images/platziconf-logo.svg'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm.js'
import api from '../api';
import Loader from '../components/Loader'

class BadgeEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      form: {}
    };
  }

  componentDidMount () {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState ({
      loading: true,
      error: null
    });

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      this.setState ({
        loading: false,
        form: data
      })
    } catch (error) {
      this.setState ({
        loading: false,
        error: error
      })
    }
  }

  handleChange = (e) => {
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState ({
      loading: true,
      error: null,
    });

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({ loading: false })

      this.props.history.push("/badges");
    } catch (error) {
      this.setState ({
        loading: false,
        error: error,
      });
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <Loader />
      );
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="img-fluid" src={badgeHeader} alt="header-img" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName = {this.state.form.firstName}
                lastName = {this.state.form.lastName}
                twitter = {this.state.form.twitter}
                jobTitle = {this.state.form.jobTitle}
                avatarUrl = {this.state.form.avatarUrl}
                email = {this.state.form.email}
              />
            </div>
            <div className="col-6">
              <div className="form__container">
                <h1>Edit Attendant</h1>
                <BadgeForm
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  values={this.state.form}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit