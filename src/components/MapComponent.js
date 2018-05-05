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
        this.state = {
            directions: null,
        }
    }

    componentDidMount() {
        const DirectionsService = new google.maps.DirectionsService();
        DirectionsService.route({
          origin: new google.maps.LatLng(41.8507300, -87.6512600),
          destination: new google.maps.LatLng(41.8525800, -87.6514100),
          waypoints: [
                {
                    location: new google.maps.LatLng(41.8507300, -87.6512600)
                },
                {
                    location: new google.maps.LatLng(41.8525800, -87.6514100)
                }
          ],
          travelMode: google.maps.TravelMode.WALKING,
        }, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        });
    }

    render() { 
        return ( 
            <GoogleMap
                defaultZoom={1}
                defaultOptions={defaultMapOptions}
                defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
            >
            {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
          </GoogleMap>
        )
    }
}
 
export default withScriptjs(withGoogleMap(MapComponent));




















