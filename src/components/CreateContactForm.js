import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContact } from '../redux/actions/contacts';
import validator from '../utils/formValidator';

import { Form } from 'semantic-ui-react';

class CreateContactForm extends Component {
  state = {
    phone: '',
    name: '',
    company: '',
    email: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const contact = {
      ...this.state,
      id: this.state.phone,
    };

    this.props.createContact(contact);
  }

  render() {
    const { state } = this;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            placeholder='Phone number'
            value={state.phone}
            name='phone'
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder='Name'
            value={state.name}
            name='name'
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Company"
            value={state.company}
            name='company'
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Email"
            value={state.email}
            name='email'
            onChange={this.handleChange}
          />
          <Form.Button>
            Create contact
          </Form.Button>
        </Form>
      </div>
    )
  }
}

export default connect(state => ({
  contacts: state.contacts
}), { createContact })(CreateContactForm);
