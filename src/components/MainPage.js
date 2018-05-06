import React, { Component } from 'react';
import Drawer from 'react-drag-drawer';
import MapContainer from '../containers/MapContainer';
import Avatar from 'react-avatar';
import FeedbackContainer from '../containers/FeedbackContainer';
import { Button, Layout, Icon, Slider, Radio } from 'antd';
const { Header, Sider } = Layout;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class MainPage extends Component {

    onRadioChange = (e) => {
        this.setState({ category: e.target.value });
    }

    onChange = (value) => {
        this.setState({ range: value });
    }

    showCreateRally = () => {

        if (this.props.activities) {
            return (
                <div onClick={this.props.toggleDrawer} className={"bottom-drawer"}> 
                    <h3 style={{ textAlign: 'center', fontSize: 18 }} >Click here for details on your rally</h3>
                </div>
            );
        }

        return (
            // <div onClick={this.props.toggleDrawer} className={"bottom-drawer"}> 
            <div className={"bottom-drawer"}> 
                <h3 style={{ textAlign: 'center', fontSize: 18 }} >Create a Rally!</h3>
                <p style={{ textAlign: 'center' }}>Choose a range, where you want to visit and have fun! </p>
                <div style={{ textAlign: 'center' }} >
                    <RadioGroup onChange={this.onRadioChange} className="centerElement" defaultValue="1" size="small">
                        <RadioButton value="0">Parks</RadioButton>
                        <RadioButton value="1">Ecoterritories</RadioButton>
                        <RadioButton value="2">Green Spaces</RadioButton>
                    </RadioGroup>
                </div>
                <div style={{ display: 'flex' }}>
                    <Slider style={{ flex: 2, alignSelf: 'center', marginBottom: 20, }} min={2} max={10} onChange={this.onChange}/>
                    <Button style={{ flex: 1 }} onClick={this.test} className={"go-button"} type="primary">GO</Button>  
                </div>
            </div>
        );
    }

    render() { 
        console.log(this.state);
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
                    <MapContainer />
                    {this.showCreateRally()}
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