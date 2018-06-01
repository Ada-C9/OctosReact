import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewStudentForm extends Component {
  static propTypes = {
    addStudentCallback: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      name: 'Ada',
      email: '',
    };
  }

  onInputChange = (event) => {
    // console.log(`Got an input change event on input ${event.target.name}, new value is ${event.target.value}`);

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

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log("Form submission!");

    // Question: how do we tell the parent component
    // (StudentCollection) that something happened?
    // Answer: Callback via props

    // With a controlled form, the component's state
    // (not the DOM) is the source of truth
    const name = this.state.name;
    const email = this.state.email;
    this.props.addStudentCallback(name, email);

    // Question: If the form is controlled, and the
    // state of this component is the source of truth
    // how should we clear the form?
    this.setState({
      name: '',
      email: '',
    })
  }

  render() {
    return (
      <form
        id="new-student"
        onSubmit={this.onFormSubmit}
        >
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
