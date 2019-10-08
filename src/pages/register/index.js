import React, { Component } from 'react'
import { Zhucestyle } from "./styled"
import {registerApi} from "@api/user"
import {Link} from 'react-router-dom'


export default class Register extends Component {
    constructor(){
        super()
        this.state={
            userId:'',
            password:''
        }
    }
    render() {
        let {userId,password}=this.state
        return (
            <Zhucestyle>

                <div className="delu_go">
                    <a className="iconfont fanhui" href="#/home"> &#xe667;</a>
                    <span>注册</span>
                </div>
                <div className="gekai"></div>


                <form id="login" onSubmit={this.handleRegister.bind(this)}>
                    <div className="ipone_input">
                        <i className="iconfont"> &#xe63a;</i>
                        <div>
                            <input type="text" 
                            onChange={this.handleUser.bind(this,1)}
                            value={userId} name="inpone" placeholder="手机号码" />
                        </div>
                        <em className="iconfont fudong"> &#xe68a;</em>
                    </div>

                    <div className="mima_input">
                        <i className="iconfont"> &#xe60c;</i>
                        <div>
                            <input type="text" 
                            onChange={this.handleUser.bind(this,2)}
                            value={password} name="inpone" placeholder="密码" />
                        </div>
                        <em className="iconfont fudong"> &#xe602;</em>

                    </div>

                    <div className="butten">
                        <input type="submit" value="注册" />
                    </div>
                </form>
                <p className="weidenglu">还没有账号？立即<a>《达人购用户协议》</a></p>

                <p className="denglu_bu">
                    已有账号？点击<a href="#/login">登录</a>
                   
                </p>
            </Zhucestyle>
        )
    }

    
    handleUser(type,e){
        let val=e.target.value;
        if(type === 1){
            this.setState({
                userId:val
            })
        }else{
            this.setState({
                password:val
            })
        }
      
    }
    async handleRegister(e){
        e.preventDefault();
        let userId=this.state.userId;
        let password=this.state.password;
        console.log(userId,password)
        let data=await registerApi(userId,password)
        console.log(data,55)
        if(data.data.code ===1){
            alert('注册成功，切换到登录');
            console.log(this.props,666);
           
        }
        if(data.data.code ===2 ){
            alert("用户名重复");
        }
    }
}
