import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    render() { 
        return ( 
            <Fragment>
                <div> Page de Login </div>
                <Link to='/signup'>Sign up</Link>
            </Fragment>
        )
    }
}
 
export default LoginPage;