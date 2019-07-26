import React, { Component } from 'react';
import axios from '../../axios'
import Header from '../../components/Header'

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loctionCity: ''
        };
    }
    componentDidMount() {
        this.getCitiesData();
    }
    getCitiesData = () => {
        console.log('aa');
        axios.get('v1/cities?type=guess')
        .then(
            res => {
                console.log(res.data);
                this.setState(
                    {
                        loctionCity: res.data.name
                    }
                )
                return axios.get(`v1/cities/${res.data.id}`)
            }
        ).then(res => {
            console.log(res.data);
        })
    }
    render() {
        return (
            <div className="cities">
                <Header />
                <div className="loction">
                    <div className="loction-title">
                        <span>当前定位城市:</span>
                        <span>定位不准时，请在城市列表中选择</span>
                    </div>
                    <div className="loction-body">
                        <span>{this.state.loctionCity}</span>
                        <span>

                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cities;