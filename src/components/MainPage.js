import React, { Component } from 'react';
import Drawer from 'react-drag-drawer';
import _ from 'lodash';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.props.toggleDrawer}>Test</button>
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