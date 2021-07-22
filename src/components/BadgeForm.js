import React from 'react';

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

  handleClick = (e) => {
    console.log("Button was clicked")
  }

  render () {
    return (
      <div>
        <h1>New Attendant</h1>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.props.onChange}
              placeholder="Enter your first name"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.props.onChange}
              placeholder="Enter your last name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.props.onChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={this.props.onChange}
              placeholder="Enter your job title"
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              onChange={this.props.onChange}
              placeholder="Enter your twitter user"
            />
          </div>

          <div className="form-group">
            <label>Avatar URL</label>
            <input
              className="form-control"
              type="text"
              name="avatar"
              onChange={this.props.onChange}
              placeholder="Enter your avatar url"
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={this.handleClick}
            type="button"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;