import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { toggleDrawer, logoutUser } from '../actions/index';


class MainPageContainer extends Component {
    constructor(props) {
        super(props);
     
    }

    toggleDrawer = () => {
        this.props.toggleDrawer(!this.props.toggle_drawer)
    }

    logoutUser = () => {
        this.props.logoutUser(this.props.user.token);
    }

    render() {
        return (
            <MainPage 
                toggleDrawer={this.toggleDrawer}
                drawerIsToggled={this.props.toggle_drawer} 
                user={this.props.user} 
                logoutUser={this.logoutUser}
            />
        );
    }
}

const mapStateToProps = (state) => {    
    return {
        user: state.userReducer.user,
        toggle_drawer: state.layoutReducer.toggle_drawer,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: (bool) => dispatch(toggleDrawer(bool)),
        logoutUser: (data) => dispatch(logoutUser(data))
    };
}
 
export default  connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);