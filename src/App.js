import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import LoginPageContainer from './containers/LoginPageContainer';
import MainPageContainer from './containers/MainPageContainer';
import SignupPageContainer from './containers/SignupPageContainer';
import PrivateRoute from './containers/PrivateRoute';
import GuestRoute from './containers/GuestRoute';
import Leaderboards from './components/Leaderboard';
import 'antd/dist/antd.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <GuestRoute path="/login" component={LoginPageContainer} />
          <GuestRoute path="/signup" component={SignupPageContainer} />
          <PrivateRoute path="/leaderboard" component={Leaderboards}/>
          <PrivateRoute exact path="/" component={MainPageContainer}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
