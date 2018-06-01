import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewStudentForm extends Component {
  static propTypes = {

  }

  constructor() {
    super();

    this.state = {
      name: 'Ada',
      email: '',
    };
  }

  render() {
    return (
      <form id="new-student" >
        <div>
          <label htmlFor="name">Student Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            />
        </div>

        <div>
          <label htmlFor="email">Student Email</label>
          <input
            name="email"
            type="text"
            value={this.state.email}
            />
        </div>

        <input type="submit" value="Add Student" />
      </form>
    );
  }
}

export default NewStudentForm;
