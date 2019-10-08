import React, { Component } from 'react'
import {HeaderWrapper} from "./styled.js"
import logo from "../../static/logo.png"
class Header extends Component {
    render() {
        let {info} = this.props;
        return (
            <HeaderWrapper>
                <div className="header_l">{info}</div>
                <div>
                    <img src={logo}/>
                </div>
                <div className="header_r">
                    <span>登陆</span>
                    <i className="iconfont">&#xe62a;</i>
                </div>
            </HeaderWrapper>
        )
    }
}

Header.defaultProps = {
    info:"分类"
}


export default Header;