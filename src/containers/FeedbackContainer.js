import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { message } from 'antd';
import Feedback from '../components/Feedback';



class LoginPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: this.props.visible, address: this.props.address, wasteChoice: '', furnitureChoice: '', maintenanceChoice: ''};
    }

    onChangeWaste = (e) => {    
        this.setState({ wasteChoice: e.target.value});
    }

    onChangeFurniture = (e) => {
        this.setState({ furnitureChoice: e.target.value});
    }

    onChangeMaintenance = (e) => {
        this.setState({ maintenanceChoice: e.target.value});
    }

    handleSubmit = async (e) => {
        if (this.state.wasteChoice != '' && this.state.furnitureChoice != '' && this.state.maintenanceChoice != '') {
            try {
                const instance = axios.create({
                    baseURL: '/',
                    timeout: 1000,
                    headers: {'Authorization': 'Bearer ' + this.props.user.token}
                });

                var params1 = new URLSearchParams();
                params1.append('address', this.state.address);
                params1.append('question', 'What was the quantity of waste on the ground?');
                params1.append('answer', this.state.wasteChoice);
                var data1 = await instance.post('/feedbacks/store', params1);

                var params2 = new URLSearchParams();
                params2.append('address', this.state.address);
                params2.append('question', 'How satisfied were you with the furniture in this location?');
                params2.append('answer', this.state.furnitureChoice);
                var data2 = await instance.post('/feedbacks/store', params2);

                var params3 = new URLSearchParams();
                params3.append('address', this.state.addresss);
                params3.append('question', 'How satisfied were you with the maintenance of this location?');
                params3.append('answer', this.state.maintenanceChoice);
                var data3 = await instance.post('/feedbacks/store', params3);
                this.setState({
                    wasteChoice: '',
                    furnitureChoice: '',
                    maintenanceChoice: ''
                });
                message.success('Thank you for your feedback!');
                this.setState({
                    visible: false
                });
            }
            catch(e) {
                message.error('An error occured. Please try again later.')
            }
        }
        else {
            message.error('Please answer to every question!');
        }
    }

    handleCancel = (e) => {
        this.setState({ visible: false });
    }

    render() { 
        return ( 
            <Feedback 
                onChangeWaste={this.onChangeWaste} 
                onChangeFurniture={this.onChangeFurniture} 
                onChangeMaintenance={this.onChangeMaintenance} 
                handleOk={this.handleSubmit} 
                handleCancel={this.handleCancel} 
                visible={this.state.visible}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);