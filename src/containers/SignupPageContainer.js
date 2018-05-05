import React, { Component } from 'react';
import { connect } from "react-redux";
import SignupPage from '../components/SignupPage';
import { signupUser } from '../actions';
import axios from 'axios';

class SignupPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    signupUser = (values) => {
        var params = new URLSearchParams();
        params.append('firstName', values.first_name);
        params.append('lastName', values.last_name);
        params.append('email', values.email);
        params.append('password', values.password);
        axios.post('/users', params)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() { 
        return ( 
            <SignupPage
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                handleSubmit={this.signupUser}
             />
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (user_info) => dispatch(signupUser(user_info))
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(SignupPageContainer);