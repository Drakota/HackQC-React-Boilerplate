import React, { Component } from 'react';
import { connect } from "react-redux";
import { generateDirections } from '../actions';
import MapComponent from '../components/MapComponent';
import {geolocated} from 'react-geolocated';

class MapContainer extends Component {

    render() {
        return (
            this.props.coords && (
                <MapComponent 
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVb99HgTAxKCABiclsF0X7uzoLCN3JnLQ&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `88.5vh` }} />}
                    generateDirections={this.props.generateDirections}
                    directions={this.props.directions}
                    coords={this.props.coords}
                />
            )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        directions: state.directionsReducer.directions,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        generateDirections: (google, coords) => dispatch(generateDirections(google, coords))
    };
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(connect(mapStateToProps, mapDispatchToProps)(MapContainer));