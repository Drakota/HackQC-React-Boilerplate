import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { history } from '../index';
import MainPage from '../components/MainPage';


class MainPageContainer extends Component {    
    render() {
        return ( 
            this.props.user ? (
                <MainPage user={this.props.user} />
            ) : (
                <Redirect to={{ pathname: '/login' }} />
            )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
}
 
export default  connect(mapStateToProps)(MainPageContainer);