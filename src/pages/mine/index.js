import React, { Component } from "react"
import { Dlh } from "./styled"
export default class Mine extends Component {
    constructor(){
        super()
        this.state={
            userPic:'',
            username:''
        }

      
        
            this.state.username=sessionStorage.getItem("username");
            this.state.userPic=sessionStorage.getItem("userPic");
        
    }
    render() {
        let {userPic,username}=this.state
   
        return (
            <Dlh>
                    <div className="yuan_bg"></div>
                    <div className="min_logo">
                        <div className="imglogo">
                        <img src={userPic}></img>
                        
                        </div>
                      
                        <span>{username}</span>
                        <i className="iconfont shezhi">&#xe647;</i>
                    </div>


                    <div className="sc_zj">
                        <ul className="cs_ul">
                            <li>
                                <i className="iconfont shouc"> &#xe60f; </i>
                                <span>我的收藏</span>
                            </li>
                            <li>
                                <i className="iconfont shouc"> &#xe644; </i>
                                <span>我的足迹</span>
                            </li>
                        </ul>
                    </div>


                    <div className="shoucang_yj">

                    <p>常用工具</p>
                    <ul>
                        <li>
                            <i className="iconfont">&#xe678;
                            </i>
                            <span>领券帮助
        
                            </span>
                        </li>
                        <li>
                            <i className="iconfont"> &#xe63c;</i>
                            <span> 专属客服
        
                            </span>
                        </li>
                        <li>
        
                            <i className="iconfont"> &#xe616;</i>
                            <span> 意见反馈
        
                            </span>
                        </li>
        
        
                    </ul>
                </div>
             
            </Dlh>
        )
    }
}