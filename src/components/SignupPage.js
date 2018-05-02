import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class SignupPage extends Component {
    render() { 
        return ( 
            <Fragment>
                <div> Page de Signup </div>
                <input onChange={this.props.handleEmailChange} type="email" name="email"/>
                <input onChange={this.props.handlePasswordChange} type="password" name="password"/>    
                <button onClick={this.props.handleSubmit}>GO</button>
                <Link to='/login'>login Page</Link>
            </Fragment>
        )
    }
}
 
export default SignupPage;