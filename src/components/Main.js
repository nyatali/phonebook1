import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../redux/actions/contacts';

import { List } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

class Main extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <List >
          {this.props.contacts.data.map( contact => (
            <List.Content className="contacts__item">
              <List.Header>
                {contact.name}
              </List.Header>
              <List.Description>
                {contact.number}
              </List.Description>
            </List.Content>
          ))}
        </List>

        <Link to='/new'>Create new contact</Link>
      </div>
    )
  }
}

export default connect(
  state => ({
    contacts: state.contacts,
  }), { fetchContacts}
)(Main);
