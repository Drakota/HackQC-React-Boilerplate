import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MainPage from '../components/MainPage';
import { toggleDrawer } from '../actions/index';


class MainPageContainer extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        
    }

    toggleDrawer = () => {
        this.props.toggleDrawer(!this.props.toggle_drawer)
    }

    render() {
        return (
            <MainPage 
                toggleDrawer={this.toggleDrawer}
                drawerIsToggled={this.props.toggle_drawer} 
                user={this.props.user} 
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
    };
}
 
export default  connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);