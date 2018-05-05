import React, { Component } from 'react';
import Drawer from 'react-drag-drawer';
import { Layout, Menu, Icon } from 'antd';


const { Header, Sider } = Layout;

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
          };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() { 
        return (
            <Layout className="fullHeightAndWidth">
                <Sider
                 trigger={null}
                 collapsible
                 collapsed={this.state.collapsed}
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
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            style={{ marginLeft: 15 }}
                        />
                    </Header>
                    <button onClick={this.props.toggleDrawer}>Test</button>
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