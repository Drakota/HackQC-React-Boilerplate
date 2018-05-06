import React, { Component, Fragment } from 'react';
import { Button, Layout, Menu, Icon, Slider, Radio, Progress, Alert } from 'antd';
import Drawer from 'react-drag-drawer';
import GoodActions from './good-actions.json';
import _ from 'lodash';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const marks = {
    2: '2 KM',
    10: '10 KM'
};

class DrawerComponent extends Component {
  DisplayDrawer = () => {
    if (this.props.current_activity && !this.props.locationReviewed) {
        return (
            <div className={"bottom-drawer"} onClick={this.props.toggleDrawer}>
                <div className={"handle"}></div>
                <img className={"current-image"} src={this.props.current_activity.info.image} />
                <span className={"current-address"}>{this.props.current_activity.info.address}</span>
                <Button type="primary" onClick={this.props.reviewLocation} className="current-next-button greenButton">Review</Button>  
            </div>
        );
    }
    else if (this.props.current_activity) {
        return (
            <div className={"bottom-drawer"} onClick={this.props.toggleDrawer}>
                <div className={"handle"}></div>
                <img className={"current-image"} src={this.props.current_activity.info.image} />
                <span className={"current-address"}>{this.props.current_activity.info.address}</span>
                {this.props.finishButton() ? (
                    <Button type="primary" onClick={this.props.readyRally} className={"current-next-button greenButton"}>Finish</Button>  
                ) : (
                    <Button type="primary" onClick={this.props.readyRally} className={"current-next-button greenButton"}>Next</Button>  
                )}
            </div>
        );
    }
    else if (this.props.activities) {
        return (
            <div className="bottom-drawer" style={{ textAlign: 'center' }}> 
                <h3 style={{ textAlign: 'center', fontSize: 18 }} >You're ready to go!</h3>
                <Button onClick={this.props.readyRally} type="success">Ready</Button>  
                <Button onClick={this.props.restartRally} style={{ marginLeft: 10, marginRight: 10 }} type="primary">Retry</Button>  
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
                    <Slider style={{ flex: 2, alignSelf: 'center', margin: 20, }} marks={marks} defaultValue={2} min={2} max={10} onChange={this.props.createRangeChange}/>
                    <Button style={{ flex: 1 }} onClick={this.props.createOnClick} className="go-button greenButton" type="primary">Go</Button>  
                </div>
            </div>
        );
    }
  }

  render() {      
    return (
        <Fragment>
            <this.DisplayDrawer/>
            {this.props.current_activity && (
                <Drawer
                    open={this.props.drawerIsToggled}
                    onRequestClose={this.props.toggleDrawer}
                    modalElementClass={'modal'}
                >
                    <div className={"handle-drawer"}></div>
                    <img className={"current-image-drawer"} src={this.props.current_activity.info.image} />
                    <span className={"current-address-drawer"}>{this.props.current_activity.info.address}</span>
                    <Alert className={"alert-drawer"} message="Tip:" description={_.sample(GoodActions.data)} type="info" />
                    <Progress className={"progress-drawer"} type="circle" percent={this.props.progress} />
                    <Button type="danger" onClick={this.props.cancelRally} className={"current-next-button-drawer"}>Cancel</Button> 
                    {this.props.finishButton() ? (
                        <Button type="primary" onClick={this.props.readyRally} className={"current-next-button-drawer greenButton"}>Finish</Button>   
                    ) : (
                        <Button type="primary" onClick={this.props.readyRally} className={"current-next-button-drawer greenButton"}>Next</Button>    
                    )}
                </Drawer>
            )}
        </Fragment>
    );
  }
}

export default DrawerComponent;