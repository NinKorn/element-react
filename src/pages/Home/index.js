import React, { Component } from 'react';
import Header from '../../components/Header'
import ButtonBanner from '../../components/ButtonBanner'

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
                <ButtonBanner />
            </div>
            
        );
    }
}

export default Home;