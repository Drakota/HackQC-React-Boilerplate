import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser, loginUserFailure } from '../actions/index';
import { Redirect } from 'react-router-dom';
import LoginPage from '../components/LoginPage';


class LoginPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    clearError = () => {
        this.props.loginUserFailure(false);
    }

    render() { 
        return ( 
            <LoginPage 
                loginUser={this.props.loginUser} 
                clearError={this.clearError} 
                loginPending={this.props.login_pending} 
                loginFailed={this.props.login_failed} 
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        login_pending: state.userReducer.login_pending,
        login_failed: state.userReducer.login_failed,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password)),
        loginUserFailure: (bool) => dispatch(loginUserFailure(bool))
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);