import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import { Main, CreateContactForm, Page404 } from './components/';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Container>
              <Link to='/'>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
              </Link>
              <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/new' component={CreateContactForm} />
                <Route component={Page404} />
              </Switch>
            </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
