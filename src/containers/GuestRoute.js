import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ component: Component, user: user, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        !user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
);

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
}

export default connect(mapStateToProps)(GuestRoute);
