import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card } from 'antd';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = { data: '' }
    }

    componentWillMount() {
        const instance = axios.create({
            baseURL: '/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + this.props.user.token}
        });

        var data = instance.get('/users/leaderboard')
            .then((data) => {
                this.setState({ data: data.data.users });
            });
    }

    renderObjects = () => {
        if (this.state.data != '') {
            return this.state.data.map( user => <p key={user.position}>{user.position}. {user.firstName} {user.lastName} : {user.points} points</p> );
        }
    }

    render = () => {
        console.log(this.state); 
        const users = this.renderObjects();
        return ( 
            <div>
                <video id="background-video" className={"login-video"} loop autoPlay>
                    <source src="/Forest-Lullaby.mp4" type="video/mp4" />
                    Your browser does not support the video tag. 
                </video>
                <Card className="centerElement" extra={<a href="/">Back</a>} title="Top 10" style={{ width: 300, marginTop: 35 }}>
                    <p style={{textAlign: 'center'}}>{users}</p>
                </Card>
            </div>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
