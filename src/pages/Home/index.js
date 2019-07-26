import React, { Component } from 'react';
import Header from '../../components/Header'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="home">
                <Header />
                首页
            </div>
        );
    }
}

export default Home;