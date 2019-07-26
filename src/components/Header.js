import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style/header.scss'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="header">
                <div className="search">
                    搜索
                </div>
                <div className="address">
                    地址
                </div>
                <div className="login-out">
                    <Link to='/login'>登录</Link>
                    <Link to='/register'>注册</Link>
                </div>
            </div>
        );
    }
}

export default Header;