import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { toggleDrawer, toggleSidebar, logoutUser } from '../actions/index';
import { generateDirections } from '../actions';

class MainPageContainer extends Component {

    toggleSidebar = () => {
        this.props.toggleSidebar(!this.props.toggle_sidebar)
    }

    logoutUser = () => {
        this.props.logoutUser(this.props.user.token);
    }

    render() {
        return (
            <MainPage 
                toggleSidebar={this.toggleSidebar}
                sidebarIsToggled={this.props.toggle_sidebar}
                user={this.props.user} 
                logoutUser={this.logoutUser}
                generateDirections={this.props.generateDirections}
            />
        );
    }
}

const mapStateToProps = (state) => {    
    return {
        user: state.userReducer.user,
        toggle_sidebar: state.layoutReducer.toggle_sidebar,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidebar: (bool) => dispatch(toggleSidebar(bool)),
        logoutUser: (data) => dispatch(logoutUser(data)),
        generateDirections: (coords) => dispatch(generateDirections(coords))
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);