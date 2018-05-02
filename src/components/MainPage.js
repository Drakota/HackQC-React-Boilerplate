import React, { Component } from 'react';
import _ from 'lodash';

class MainPage extends Component {
    render() { 
        return ( 
            <div> Hello, {_.capitalize(this.props.user.name.first)} {_.capitalize(this.props.user.name.last)} </div>
        )
    }
}
 
export default MainPage;