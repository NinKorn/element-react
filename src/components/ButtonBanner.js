import React, { Component } from 'react';
import './style/button.scss'

class ButtonBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon:'Home'
        };
    }
    changerIconColor = (name) => {
        this.setState({
            icon:name
        })
    }
    render() {
        return (
            <div className="button-banner">
                <div className={ this.state.icon==='Home'?'icon-box action':'icon-box'} onClick={this.changerIconColor.bind(this,'Home')}>
                    <span className="iconfont icon-changyonglogo40"></span>
                    <p>首页</p>
                </div>
                <div className={ this.state.icon==='Fond'?'icon-box action':'icon-box'} onClick={this.changerIconColor.bind(this,'Fond')}>
                    <span className="iconfont icon-luxiandaohang"></span>
                    <p>发现</p>
                </div>
                <div className={ this.state.icon==='Order'?'icon-box action':'icon-box'} onClick={this.changerIconColor.bind(this,'Order')}>
                    <span className="iconfont icon-dingdan"></span>
                    <p>订单</p>
                </div>
                <div className={ this.state.icon==='My'?'icon-box action':'icon-box'} onClick={this.changerIconColor.bind(this,'My')}>
                    <span className="iconfont icon-wode"></span>
                    <p>我的</p>
                </div>
            </div>
        );
    }
}

export default ButtonBanner;