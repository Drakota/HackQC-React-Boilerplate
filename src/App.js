import React, { Component, Fragment } from 'react';
import LoginPageContainer from './containers/LoginPageContainer';
import MainPageContainer from './containers/MainPageContainer';
import SignupPageContainer from './containers/SignupPageContainer';
import { Route } from 'react-router-dom';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/login" component={LoginPageContainer} />
        <Route path="/signup" component={SignupPageContainer} />
        <Route exact path="/" component={MainPageContainer} />
      </Fragment>
    );
  }
}

export default App;
