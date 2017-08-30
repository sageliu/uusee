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
                <ul>
                    <li>
                        <input type="text" placeholder="请输入姓名" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/>
                    </li>
                    <li>
                        <input type="text" placeholder="请输入密码" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                    </li>
                    <li>
                        <p>?忘记密码</p>
                    </li>
                    {/*<li>{this.props.user.err}</li>*/}
                    <li>
                        <a className="login-btn" onClick={this.login}>登录</a>
                    </li>
                </ul>
                <p className="login-reg">还没有账号?<Link to="/reg">注册一起直播账号</Link></p>
            </div>
        )
    }
}