import React,{Component} from 'react';
import {Link} from "react-router-dom";
export default class Profile extends Component{
  render(){
    return (
      <div>
          <div className="profile_bg">
              <Link to={"/login"} className="login_btn" href="">登录</Link>
          </div>
        Profile
      </div>
    )
  }
}