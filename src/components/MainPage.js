import React, { Component } from 'react';
import Drawer from 'react-drag-drawer';
import { Button } from 'antd';
import MapComponent from './MapComponent';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            directions: null,
        }
    }

    test = (e) => {
        e.preventDefault();
    }

    render() { 
        return ( 
            <div>
                <div onClick={this.props.toggleDrawer} className={"bottom-drawer"}> 
                    <Button onClick={this.test} className={"go-button"} type="primary">GO</Button>  
                </div>
                <MapComponent
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVb99HgTAxKCABiclsF0X7uzoLCN3JnLQ&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `88.5vh` }} />}
                />
                <Drawer
                    open={this.props.drawerIsToggled}
                    onRequestClose={this.props.toggleDrawer}
                    modalElementClass={'modal'}
                >
                    <div>Hey Im inside the drawer!</div>
                </Drawer>
            </div>
        )
    }
}
 
export default MainPage;