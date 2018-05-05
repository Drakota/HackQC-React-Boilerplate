import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from '../actions/index';
import { Redirect } from 'react-router-dom'
import LoginPage from '../components/LoginPage';

class LoginPageContainer extends Component {
    constructor(props) {
        super(props);

    }
    render() { 
        return ( 
            <LoginPage/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (username, password) => dispatch(loginUser(username, password))
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);