import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Dialog from "../../components/Dialog/index";
import update from '../../until/updataImg'
export default class Join extends Component{
  constructor(){
    super();
    this.state={
      imgUrl:'',
      isShow:false
    }
  }
  handleSubmit=()=>{
    if(!this.state.imgUrl){
      this.setState({
        isShow:true
      })
    }
  }
  hac=()=>{
    this.setState({
      imgUrl:this.refs.updateBtn.value
    })
  }
  handleUpdateImg=()=>{
    this.refs.updateBtn.click()
  }
  changeImg=()=>{
    console.log(this.refs.updateBtn.value);
    this.refs.updateImg.style.background='url('+this.state.imgUrl+') no-repeat';
  }
  render(){
    return (
      <form className="wrap" onSubmit={()=>this.handleSubmit} >
        <div className="joinInfo">
          <div className="imgBtn" onClick={this.handleUpdateImg}>
            <i className="iconfont icon-add"></i>
            <span>封面</span>
          </div>
          <p ref='updateImg'/>
          <input type="file" ref="updateBtn" onChange={()=>this.changeImg()} value={this.state.imgUrl} name="imgUrl"/>
          <textarea name="title" id="" cols="30" rows="5" defaultValue='暂未设置标题，输入标题更吸引粉丝哦！！！' ref="title"></textarea>
        </div>
        <div className="weui-btn weui-btn_plain-default">
          开启直播
          <input type="submit" placeholder="" onClick={this.hac}/>
        </div>
        <Link to="/" className="weui-btn weui-btn-2 weui-btn_plain-default">不开启</Link>
        <label htmlFor="weuiAgree" className="weui-agree">
          <input type="checkbox" className="weui-agree__checkbox" id="weuiAgree" checked disabled/>
          <span className="weui-agree__text">
            开通默认遵守<Link to="/join/rules">《一起直播相关条款》</Link>
          </span>
        </label>
        <Dialog isShow={this.state.isShow}/>
      </form>

    )
  }
}
import './index.less'