import React, { Component } from 'react';
import DrawerComponent from '../components/DrawerComponent';
import { connect } from "react-redux";
import { notification } from 'antd';
import { toggleDrawer, generateDirections, clearActivities, clearDirections, changeCurrentActivity, toggleModalFeedback, toggleLocationReviewed, toggleLocationNotReviewed } from '../actions/index';
import { geolocated } from 'react-geolocated';
import _ from 'lodash';

class DrawerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 0,
            range: 2,
            progress: 0
        };
    }

    componentDidMount() {
        this.calculatePercentage();
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
        this.props.toggleDrawer();
        this.props.clearActivities();
        this.props.clearDirections();
    }

    restartRally = () => {
        this.props.generateDirections(this.props.coords, this.state.range, this.state.category);
    }

    toggleReview = (event) => {
        event.stopPropagation();
        this.props.toggleModalFeedback(true);
        this.props.toggleLocationReviewed(true);
    }

    readyRally = (event) => {
        event.stopPropagation();
        if (!this.props.current_activity) {
            this.props.changeCurrentActivity(this.props.activities[0]);
        }
        else {
            this.props.toggleLocationReviewed(false);
            const current_activity = this.props.current_activity;
            var index = this.props.activities.findIndex(function(activity) {
                return _.isEqual(activity, current_activity);
            });
            if (this.props.activities.length === index + 1) {
                notification.open({
                    message: 'Congratulations !',
                    description: "You've just finished your rally, you were awarded 500 points.",
                });
                this.cancelRally();
            }
            else {
                this.props.changeCurrentActivity(this.props.activities[index+1]);
            }            
            this.setState({
                progress: ((index + 1) * 100) / 5
            });
        }
    }

    calculatePercentage = () => {
        const current_activity = this.props.current_activity;
            if (this.props.activities) {
            var index = this.props.activities.findIndex(function(activity) {
                return _.isEqual(activity, current_activity);
            });
            this.setState({
                progress: ((index + 1) * 100) / 5
            });
                        
        }
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
                progress={this.state.progress}
                reviewLocation={this.toggleReview}
                locationReviewed={this.props.locationReviewed}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activities: state.activitiesReducer.activities,
        current_activity: state.activitiesReducer.current_activity,
        toggle_drawer: state.layoutReducer.toggle_drawer,
        locationReviewed: state.layoutReducer.locationReviewed,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: (bool) => dispatch(toggleDrawer(bool)),
        generateDirections: (coords, range, category) => dispatch(generateDirections(coords, range, category)),
        clearActivities: () => dispatch(clearActivities()),
        clearDirections: () => dispatch(clearDirections()),
        changeCurrentActivity: (activity) => dispatch(changeCurrentActivity(activity)),
        toggleModalFeedback: (activity) => dispatch(toggleModalFeedback(activity)),
        toggleLocationReviewed: (bool) => dispatch(toggleLocationReviewed(bool)),
    };
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(connect(mapStateToProps, mapDispatchToProps)(DrawerContainer));