import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { toggleDrawer, toggleSidebar, logoutUser } from '../actions/index';


class MainPageContainer extends Component {
    constructor(props) {
        super(props);
     
    }

    toggleDrawer = () => {
        this.props.toggleDrawer(!this.props.toggle_drawer)
    }

    toggleSidebar = () => {
        this.props.toggleSidebar(!this.props.toggle_sidebar)
    }

    logoutUser = () => {
        this.props.logoutUser(this.props.user.token);
    }

    render() {
        return (
            <MainPage 
                toggleDrawer={this.toggleDrawer}
                drawerIsToggled={this.props.toggle_drawer} 
                toggleSidebar={this.toggleSidebar}
                sidebarIsToggled={this.props.toggle_sidebar} 
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
        toggle_sidebar: state.layoutReducer.toggle_sidebar,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: (bool) => dispatch(toggleDrawer(bool)),
        toggleSidebar: (bool) => dispatch(toggleSidebar(bool)),
        logoutUser: (data) => dispatch(logoutUser(data))
    };
}
 
export default  connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);