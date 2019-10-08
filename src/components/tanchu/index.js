import React, { Component } from 'react'
import  "./styled.css"
export default class Tanchu extends Component {
    render() {
        return (
            <div className="tanchubox">
        <em></em>
        <ul>
            <li>
                <a href="#/home">
                    <i className="iconfont">&#xe625;</i>首页
                </a>
            </li>
            <li>
                <a href="#/home">
                        <i className="iconfont">&#xe618;
                            </i>搜索
                </a>
            </li>
            <li>
                <a href="#/classify">
                        <i className="iconfont">&#xe659;</i>分类
                </a>
            </li>
            <li>
                <a href="#/login">
                        <i className="iconfont">&#xe616;</i>登录
                </a>
            </li>
            <li>
                <a href="#/mine">
                        <i className="iconfont">&#xe61a;</i>我的
                </a>
            </li>
           
        </ul>

    </div>
        )
    }
}
