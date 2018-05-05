import React, { Component } from 'react';
import Drawer from 'react-drag-drawer';
import MapComponent from './MapComponent';
import { Button, Layout, Menu, Icon } from 'antd';
const { Header, Sider } = Layout;

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <Layout className="fullHeightAndWidth">
                <Sider
                 trigger={null}
                 collapsible
                 collapsed={this.props.sidebarIsToggled}
                 width={0}
                >
                    <Layout>
                       <Icon style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: 'black', color: 'white' }} onClick={this.props.logoutUser} type="poweroff" />
                    </Layout>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.props.sidebarIsToggled ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggleSidebar}
                            style={{ marginLeft: 15 }}
                        />
                    </Header>
                    <MapComponent
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVb99HgTAxKCABiclsF0X7uzoLCN3JnLQ&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `88.5vh` }} />}
                    />
                    <div onClick={this.props.toggleDrawer} className={"bottom-drawer"}> 
                        <Button onClick={this.test} className={"go-button"} type="primary">GO</Button>  
                    </div>
                    <Drawer
                        open={this.props.drawerIsToggled}
                        onRequestClose={this.props.toggleDrawer}
                        modalElementClass={'modal'}
                    >
                        <div>Hey Im inside the drawer!</div>
                    </Drawer>
                </Layout>
            </Layout>
        )
    }
}
 
export default MainPage;