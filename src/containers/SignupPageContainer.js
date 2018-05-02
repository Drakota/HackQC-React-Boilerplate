import React, { Component } from 'react';
import { connect } from "react-redux";
import SignupPage from '../components/SignupPage';
import { signupUser } from '../actions';

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

    handleSubmit = () => {
        if (this.state.email && this.state.password) {
            const email = this.state.email;
            const password = this.state.password;
            this.props.signupUser({ email, password });
        }
        else {
            console.log('error');
        }
    }

    render() { 
        return ( 
            <SignupPage
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                handleSubmit={this.handleSubmit}
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