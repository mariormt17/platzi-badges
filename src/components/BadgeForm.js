import React from 'react';

class BadgeForm extends React.Component {
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  render () {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group mb-3">
          <label className="mb-2">First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={this.props.values.firstName}
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
            value={this.props.values.lastName}
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
            value={this.props.values.email}
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
            value={this.props.values.jobTitle}
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
            value={this.props.values.twitter}
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
            value={this.props.values.avatarUrl}
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
    );
  }
}

export default BadgeForm;