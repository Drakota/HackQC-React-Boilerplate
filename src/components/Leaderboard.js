import React from 'react';
import Axios from 'axios';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = { data: '' }
    }

    componentWillMount() {
        Axios.get('/users/leaderboard');

    }

    render() { 
        const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
        return (  )
    }
}
 
export default Leaderboard;