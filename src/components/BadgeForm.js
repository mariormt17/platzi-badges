import React from 'react';
import './styles/BadgeForm.css'

class BadgeForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName:"",
      lastName:"",
      email:"",
      jobTitle:"",
      twitter:""
    };
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  render () {
    return (
      <div className="form__container">
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group mb-3">
            <label className="mb-2">First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.props.onChange}
              placeholder="Enter your first name"
            />
          </div>

          <div className="form-group mb-3">
            <label className="mb-2">Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.props.onChange}
              placeholder="Enter your last name"
            />
          </div>

          <div className="form-group mb-3">
            <label className="mb-2">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.props.onChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group mb-3">
            <label className="mb-2">Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={this.props.onChange}
              placeholder="Enter your job title"
            />
          </div>

          <div className="form-group mb-3">
            <label className="mb-2">Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              onChange={this.props.onChange}
              placeholder="Enter your twitter user"
            />
          </div>

          <div className="form-group mb-3">
            <label className="mb-2">Avatar URL</label>
            <input
              className="form-control"
              type="text"
              name="avatarUrl"
              onChange={this.props.onChange}
              placeholder="Enter your avatar url"
            />
          </div>

          {this.props.error && (
            <div className="text-danger">
              {this.props.error.message}
            </div>
          )}

          <button
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;