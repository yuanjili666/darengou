import React, { Component } from "react"
import {Loginstyle} from "./syled"
import {loginApi} from "@api/user"
import {Link} from "react-router-dom"



 class Login extends Component {
     constructor(){
         super()
         this.state={
            userId:'',
            password:'',
            userPic:'',
            username:""
         }
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

    async handleLogin(e){
        e.preventDefault();
        let userId=this.state.userId;
        let password=this.state.password;
        console.log(userId,password)
        let data=await loginApi(userId,password)
        console.log(data,55)
        if(data.data.code ===1){
            alert('登录');
            console.log(this.props,666);
                this.setState({
                    userPic:data.data.info.userPic,
                    username:data.data.info.username
                })
                sessionStorage.setItem("userPic",data.data.info.userPic);   //第一参数是key,第二个参数是val
                sessionStorage.setItem("username",data.data.info.username);
            this.props.history.push("/home")

           console.log(data.data.info,8898)
        }
        if(data.data.code ===0 ){
            alert(data.data.info.msg);
        }
        if(data.data.code ===2 ){
            alert(data.data.info.msg);
        }
    }



    render() {
        console.log(this.state)
        let {  userId, password}=this.state
        return (
            <Loginstyle>
                <div className="delu_go">
                    <a className="iconfont fanhui" href="#/home"> &#xe667;</a>
                    <span>登录</span>
                </div>
                <div className="gekai"></div>        
                <form  onSubmit={this.handleLogin.bind(this)} >
                    <div className="ipone_input">
                        <i className="iconfont"> &#xe63a; </i>
                        <div>
                            <input type="text" 
                            value={userId} 
                            onChange={this.handleUser.bind(this,1)}
                            name="inpone" placeholder="手机号码" />
                        </div>
                        <em className="iconfont fudong"> &#xe68a;</em>

                    </div>

                    <div className="mima_input">
                        <i className="iconfont"> &#xe60c;</i>
                        <div>
                            <input type="text" 
                            value={password} 
                            onChange={this.handleUser.bind(this,2)}
                            name="inpone" placeholder="密码" />
                        </div>
                        <em className="iconfont fudong"> &#xe602;</em>

                    </div>

                    <div className="butten">
                     
                         <input type="submit" value="登录" />
                       
                    </div>
                    </form>

            <p className="weidenglu">还没有账号？立即<a href="#/register">注册</a></p>

            <p className="denglu_bu">  <a>验证码登录</a> &nbsp;&nbsp;|&nbsp;&nbsp;<a>找回密码</a> </p>

        </Loginstyle >
      
        )
    }
   


}


export default Login;