import React, { Component } from 'react';
import { connect } from "react-redux";
import { logoutUser } from '../actions';
import { Icon } from 'antd';

class LogoutContainer extends Component {

    render() { 
        return ( 
            <Icon type="loading" />
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: (user_info) => dispatch(logoutUser(user_info))
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);