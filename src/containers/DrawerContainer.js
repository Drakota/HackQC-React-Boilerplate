import React, { Component } from 'react';
import DrawerComponent from '../components/DrawerComponent';
import { connect } from "react-redux";
import { toggleDrawer, generateDirections, clearActivities, clearDirections, changeCurrentActivity } from '../actions/index';
import { geolocated } from 'react-geolocated';

class DrawerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 0,
            range: 2
        };
    }

    toggleDrawer = () => {        
        this.props.toggleDrawer(!this.props.toggle_drawer);
    }

    createRadioChange = (e) => {
        this.setState({ category: e.target.value });
    }

    createRangeChange = (value) => {
        this.setState({ range: value*1000 });
    }

    createOnClick = () => {        
        this.props.generateDirections(this.props.coords, this.state.range, this.state.category);
    }

    cancelRally = () => {
        this.setState({
            range: 2,
            category: 0
        });
        this.props.clearActivities();
        this.props.clearDirections();
    }

    restartRally = () => {
        this.props.generateDirections(this.props.coords, this.state.range, this.state.category);
    }

    readyRally = () => {
        this.props.changeCurrentActivity(this.props.activities[0]);
    }

    render() {
        return (
            <DrawerComponent
                activities={this.props.activities}
                current_activity={this.props.current_activity}
                toggleDrawer={this.toggleDrawer}
                drawerIsToggled={this.props.toggle_drawer}
                createRadioChange={this.createRadioChange}
                createRangeChange={this.createRangeChange}
                createOnClick={this.createOnClick}
                readyRally={this.readyRally}
                restartRally={this.restartRally}
                cancelRally={this.cancelRally}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activities: state.activitiesReducer.activities,
        current_activity: state.activitiesReducer.current_activity,
        toggle_drawer: state.layoutReducer.toggle_drawer,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: (bool) => dispatch(toggleDrawer(bool)),
        generateDirections: (coords, range, category) => dispatch(generateDirections(coords, range, category)),
        clearActivities: () => dispatch(clearActivities()),
        clearDirections: () => dispatch(clearDirections()),
        changeCurrentActivity: (activity) => dispatch(changeCurrentActivity(activity)),
    };
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(connect(mapStateToProps, mapDispatchToProps)(DrawerContainer));