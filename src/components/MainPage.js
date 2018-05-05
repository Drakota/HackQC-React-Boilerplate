import React, { Component } from 'react';
import Drawer from 'react-drag-drawer';
import MapContainer from '../containers/MapContainer';
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
                    <MapContainer />
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