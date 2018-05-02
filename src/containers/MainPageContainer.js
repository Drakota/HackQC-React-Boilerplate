import React, { Component } from 'react';
import { connect } from "react-redux";
import MainPage from '../components/MainPage';

class MainPageContainer extends Component {    
    render() {
        return ( 
            <MainPage user={this.props.user} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
}
 
export default  connect(mapStateToProps)(MainPageContainer);