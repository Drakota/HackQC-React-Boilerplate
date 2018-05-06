import React, { Component } from 'react';
import MapContainer from '../containers/MapContainer';
import Avatar from 'react-avatar';
import { Button, Layout, Menu, Icon, Slider, Radio } from 'antd';
import FeedbackContainer from '../containers/FeedbackContainer';
import DrawerContainer from '../containers/DrawerContainer';
import Feedback from './Feedback';
const { Header, Sider } = Layout;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class MainPage extends Component {
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
                       <a href="/leaderboard" className="leaderboardLink" style={{ textAlign: 'center', backgroundColor: 'white', marginBottom: 0, marginTop: -15 }}>
                       <Icon style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: 'white', color: 'black', marginRight: 5 }} type="star-o" />
                         Leaderboard
                       </a>
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
                    <FeedbackContainer />
                    <MapContainer />
                    <DrawerContainer />
                </Layout>
            </Layout>
        )
    }
}
 
export default MainPage;