import React, { Component } from 'react'
import {HeaderFenlei} from "./styled"

export default class Headerfl extends Component {
    render() {
        return (
            <HeaderFenlei>
            <a href="#/home" className=" iconfont nana">&#xe667;</a>
            <div className="input_2">
    
                <div className="input_3">
    
                    <button className=" iconfont">&#xe618; </button>
                    输入商品名或粘贴宝贝标题搜索
    
                </div>
            </div>
            </HeaderFenlei>
        )
    }
}
