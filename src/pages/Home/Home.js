import React, { Component } from 'react';
import Header from '../../components/Header'
import ButtonBanner from '../../components/ButtonBanner'
import axios from '../../axios'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.getFooderList();
    }
    getFooderList = () => {
        axios.get('v2/index_entry').then(res => {
            console.log(res);
        })
    }
    onChange = () => {
        console.log('aa');
    }
    render() {
        return (
            <div className="home">
                <Header />

                <div className="food-list">
                    
                </div>

                <ButtonBanner />
            </div>

        );
    }
}

export default Home;