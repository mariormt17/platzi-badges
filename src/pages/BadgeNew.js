import React from 'react';
import './styles/BadgeNew.css'
import badgeHeader from '../images/platziconf-logo.svg'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm.js'

class BadgeNew extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {}
    };
  }

  handleChange = (e) => {
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value

    this.setState({
      form: {
        ... this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  render () {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
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
                avatarUrl = {this.state.form.avatar}
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;