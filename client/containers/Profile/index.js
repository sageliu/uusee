import React,{Component} from 'react';
import './index.less';
import {
  HashRouter as Router,
  Route,NavLink,Link} from 'react-router-dom';
import tou from './img/tou.jpg';
import ProfileMain from "../ProfileMain";
import ProfilePerson from "../ProfilePerson";
import ProfileLetter from "../ProfileLetter";

export default class Profile extends Component{

  constructor(){
    super();
    this.state={img:tou,flag:true,createTime:''}
  }
    getTime=()=>{
        console.log(+new Date());
        this.setState({createTime:+new Date()})

    }

    handleClick=(e)=>{
        this.state.flag=!this.state.flag;
        e.preventDefault();
        let moreL=document.querySelector("#more-l");
        !this.state.flag?moreL.style.opacity='0': moreL.style.opacity='1';
    }

  render(){

      return (
          <Router>
            <div className="container">
              <div className="container-h">
                <img src={this.state.img} className="bg"/>
                <div className="Profile-header">
                  <a onClick={this.handleClick} className="more">+</a>
                  <div className="more-l" id="more-l" style={{opacity: 0}}>
                    <a href="javascript:void(0);" onClick={this.getTime} className="video">视频</a>
                    <a href="javascript:void(0);" onClick={this.getTime}>图片</a>
                  </div>
                  <div className="Profile-information">
                    <div className="tx">
                      <img src={this.state.img}/>
                    </div>

                    <div className="Profile-information-v">
                      <p>呱呱小兔</p>
                      <p>1363456</p>
                      <Link to="/profile/myhome">查看我的主页</Link>
                    </div>
                    <div className="profile-foot">
                      <span>10 动态</span>
                      <span>10 关注</span>
                      <dpsn>10 粉丝</dpsn>
                    </div>

                  </div>
                </div>
              </div>

              <div className="page">
                <div className="page__bd" style={{height: '100%'}}>
                  <div className="weui-tab">
                    <div className="weui-navbar" >
                      <NavLink className='weui-navbar__item' activeClassName=" weui-bar__item_on"
                                 to="/profile/profilemain"
                      >
                        <span>我的动态</span>
                      </NavLink>

                      <NavLink  to="/profile/profilemain1" className='weui-navbar__item' activeClassName=" weui-bar__item_on">
                        <span>私信</span></NavLink>

                      <NavLink    to="/profile/profilemain2" className='weui-navbar__item' activeClassName=" weui-bar__item_on">
                        <span>个人中心</span>
                      </NavLink>

                    </div>
                    <div className="weui-tab__panel">
                    </div>
                  </div>
                </div>
                <Router>
                  <div>
                    <Route path="/profile/profilemain" render={() => <ProfileMain img={this.state.img} createTime={this.state.createTime}/>}/>
                    <Route path="/profile/profilemain1" render={() => <ProfileLetter img={this.state.img} createTime={this.state.createTime}/>}/>
                    <Route path="/profile/profilemain2" render={() => <ProfilePerson img={this.state.img} createTime={this.state.createTime}/>}/>
                  </div>


                </Router>
              </div>
            </div>

            </Router>)
    }
}



