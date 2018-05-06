/* global google */
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"
import mapStyle from './style.json';

const defaultMapOptions = {
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    styles: mapStyle,
};

class MapComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var currentActivityCoords = null;
        var currentActivityZoom = null;
        if (this.props.currentActivity) {
            var lat = this.props.currentActivity.coords[1];
            var lng = this.props.currentActivity.coords[0];
            currentActivityCoords = {lat, lng};
            currentActivityZoom  = 15;
        }
        return (
            <GoogleMap
                    {...this.props}
                    defaultOptions={defaultMapOptions}
                    center={currentActivityCoords}
                    zoom={currentActivityZoom}
                >
                {this.props.directions && <DirectionsRenderer directions={this.props.directions} />}
            </GoogleMap>
        )
    }
}

 
export default withScriptjs(withGoogleMap(MapComponent));




















