import React, { Component, Fragment } from 'react';
import { Button, Layout, Menu, Icon, Slider, Radio } from 'antd';
import Drawer from 'react-drag-drawer';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class DrawerComponent extends Component {

  DisplayDrawer = () => {
    if (this.props.current_activity) {
        return (
            <div className={"bottom-drawer"}>
                <div className={"handle"}></div>
                <img className={"current-image"} src={this.props.current_activity.info.image} />
                <span className={"current-address"}>{this.props.current_activity.info.address}</span>
                <Button type="primary" className={"current-next-button"}>Next</Button>  
            </div>
        );
    }
    else if (this.props.activities) {
        return (
            <div className={"bottom-drawer"}> 
                <h3 style={{ textAlign: 'center', fontSize: 18 }} >You're ready to go!</h3>
                <Button onClick={this.props.readyRally} type="success">Ready</Button>  
                <Button onClick={this.props.restartRally} type="primary">Retry</Button>  
                <Button onClick={this.props.cancelRally} type="danger">Cancel</Button>  
            </div>
        );
     }
     else {
        return (
            <div className={"bottom-drawer-expanded"}> 
                <h3 style={{ textAlign: 'center', fontSize: 18 }} >Create a Rally!</h3>
                <p style={{ textAlign: 'center' }}>Choose a range, where you want to visit and have fun! </p>
                <div style={{ textAlign: 'center' }} >
                    <RadioGroup onChange={this.props.createRadioChange} className="centerElement" defaultValue="0" size="small">
                        <RadioButton value="0">Parks</RadioButton>
                        <RadioButton value="1">Ecoterritories</RadioButton>
                        <RadioButton value="2">Green Spaces</RadioButton>
                    </RadioGroup>
                </div>
                <div style={{ display: 'flex' }}>
                    <Slider style={{ flex: 2, alignSelf: 'center', marginBottom: 20, }} defaultValue={2} min={2} max={10} onChange={this.props.createRangeChange}/>
                    <Button style={{ flex: 1 }} onClick={this.props.createOnClick} className={"go-button"} type="primary">GO</Button>  
                </div>
            </div>
        );
    }
  }

  render() {
    return (
        <Fragment>
            <this.DisplayDrawer/>
            <Drawer
                open={this.props.drawerIsToggled}
                onRequestClose={this.props.toggleDrawer}
                modalElementClass={'modal'}
            >
                <div>Hey Im inside the drawer!</div>
            </Drawer>
        </Fragment>
    );
  }
}

export default DrawerComponent;