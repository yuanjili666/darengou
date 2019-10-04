import React, { Component } from "react"
import {Zhucestyle} from "./styled"


export default class Classify extends Component {
    render() {
        return (
            <Zhucestyle>

                <div class="delu_go">
                    <i class="iconfont fanhui"> &#xe667;</i>
                    <span>注册</span>
                </div>
                <div class="gekai"></div>



                <div class="ipone_input">
                    <i class="iconfont"> &#xe63a;</i>
                    <div>
                        <input type="text" value="" name="inpone" placeholder="手机号码" />
                    </div>
                    <em class="iconfont fudong"> &#xe68a;</em>
                </div>

{/*}
                <div class="yzm_input">
                    <i class="iconfont"> &#xe60c;</i>
                    <div>
                        <input type="text" value="" name="inpone" placeholder="请输入验证码" />
                    </div>
                    <em class="iconfont fudong"> &#xe602;</em>
                </div>

        */}
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

                <p class="weidenglu">还没有账号？立即<a>《达人购用户协议》</a></p>

                <p class="denglu_bu">
                    已有账号？点击<a>登录</a>
                </p>

            </Zhucestyle>
        )
    }
}