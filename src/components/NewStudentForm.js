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

  onInputChange = (event) => {
    console.log(`Got an input change event on input ${event.target.name}, new value is ${event.target.value}`);

    // Because the key is stored in a variable
    // (event.target.name), we _must_ create an
    // empty object and use subscript notation
    // to set the value
    // JavaScript rules, not React
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);

    // this.setState({ other_key: 'value' });
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
            onChange={this.onInputChange}
            />
        </div>

        <div>
          <label htmlFor="email">Student Email</label>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.onInputChange}
            />
        </div>

        <input type="submit" value="Add Student" />
      </form>
    );
  }
}

export default NewStudentForm;
