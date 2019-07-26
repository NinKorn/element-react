import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="header">
                <div className="login-out">
                    <Link to='/login'>登录</Link>
                </div>
            </div>
        );
    }
}

export default Header;