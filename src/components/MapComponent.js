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

    componentDidMount() {
        console.log(this.props.coords);
        
        this.props.generateDirections(google, this.props.coords);
    }

    render() { 
        return (
            <GoogleMap
                    defaultOptions={defaultMapOptions}
                    defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
                >
                {this.props.directions && <DirectionsRenderer options={{preserveViewport: false}} directions={this.props.directions} />}
            </GoogleMap>
        )
    }
}

 
export default withScriptjs(withGoogleMap(MapComponent));




















