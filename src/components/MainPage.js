import React, { Component } from 'react';
import Drawer from 'react-drag-drawer';
import Avatar from 'react-avatar';
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
                 collapsedWidth={250}
                 collapsed={this.props.sidebarIsToggled}
                 width={0}
                 style={{ backgroundColor: 'white', position: 'relative' }}
                >
                    <Layout className="layoutStyle" style={{ backgroundColor: 'white' }}>
                        <Avatar className="centerElement" size={100} round={true} name={this.props.user.user.firstName + " " + this.props.user.user.lastName} />
                        <p style={{ textAlign: 'center', marginTop: 15 }}>Welcome {this.props.user.user.firstName}!</p>
                    </Layout>
                    <Layout>
                       <p className="logoutWrapper" onClick={this.props.logoutUser} style={{ textAlign: 'center', backgroundColor: 'white', marginBottom: 0, marginTop: -15 }}>
                       <Icon style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: 'white', color: 'black', marginRight: 5 }} type="poweroff" />
                         Logout
                       </p>
                    </Layout>
                </Sider>
                <Layout>
                    <Header onClick={this.moveHamburger} className={!this.props.sidebarIsToggled ? 'hamburger' : 'hamburger openSidebar'}>
                        <Icon
                            className="trigger hamburgerIcon"
                            type={this.props.sidebarIsToggled ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggleSidebar}
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