import react from 'react';
import React from 'react';

class BadgeForm extends React.Component {
  handleChange (e) {
    console.log(e.target.value);
  }

  handleClick (e) {
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
              onChange={this.handleChange}
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