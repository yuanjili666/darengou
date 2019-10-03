import React, { Component } from "react"
import { Loginstyle } from "./syled"



export default class Login extends Component {
    render() {
        return (
            <Loginstyle>
                <div class="delu_go">
                    <i class="iconfont fanhui"> &#xe667;</i>
                    <span>登录</span>
                </div>
                <div class="gekai"></div>

             
                    <div class="ipone_input">
                        <i class="iconfont"> &#xe63a; </i>
                        <div>
                            <input type="text" value="" name="inpone" placeholder="手机号码" />
                        </div>
                        <em class="iconfont fudong"> &#xe68a;</em>

                    </div>

                    <div class="mima_input">
                        <i class="iconfont"> &#xe60c;</i>
                        <div>
                            <input type="text" value="" name="inpone" placeholder="密码" />
                        </div>
                        <em class="iconfont fudong"> &#xe602;</em>

                    </div>


                    <div class="butten">
                        <input type="submit" value="登录" />
                    </div>


            <p class="weidenglu">还没有账号？立即<a>注册</a></p>

            <p class="denglu_bu">  <a>验证码登录</a> &nbsp;&nbsp;|&nbsp;&nbsp;<a>找回密码</a> </p>

        </Loginstyle >
      
        )
    }
}