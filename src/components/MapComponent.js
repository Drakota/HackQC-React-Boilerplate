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

    componentDidMount() {     
        this.props.generateDirections(google, this.props.coords);
    }

    render() { 
        return (
            <GoogleMap
                    {...this.props}
                    defaultOptions={defaultMapOptions}
                >
                {this.props.directions && <DirectionsRenderer options={{preserveViewport: false}} directions={this.props.directions} />}
            </GoogleMap>
        )
    }
}

 
export default withScriptjs(withGoogleMap(MapComponent));




















