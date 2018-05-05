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

    signupUser = (values) => {
        this.props.signupUser(values);
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