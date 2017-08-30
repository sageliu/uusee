/**
 * Created by lirui on 17/8/30.
 */
import React,{Component} from "react";
import MHeader from "../../components/MHeader/index";
import {Link} from "react-router-dom";
import "./index.less"
export default class Login extends Component{
    constructor(){
        super();
        this.state={username:"",password:""};
    }
    render(){
        return (
            <div className="login">
                <MHeader title="登录"/>
                <ul>
                    <li><input type="text" placeholder="请输入用户名" value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value})}}/></li>
                    <li><input type="text" placeholder="请输入密码" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/></li>
                    <li><Link to={'/reg'}>前往注册</Link></li>
                    <li><a className="login_btn">登录</a></li>
                </ul>
            </div>
        )
    }
}