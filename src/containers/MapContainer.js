import React, { Component } from 'react';
import { connect } from "react-redux";
import MapComponent from '../components/MapComponent';

class MapContainer extends Component {

    render() {
        return (
            <MapComponent 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVb99HgTAxKCABiclsF0X7uzoLCN3JnLQ&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div className={"map-element"} />}
                currentActivity={this.props.current_activity}
                directions={this.props.directions}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        directions: state.directionsReducer.directions,
        current_activity: state.activitiesReducer.current_activity,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);