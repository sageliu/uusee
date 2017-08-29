import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Dialog from "../../components/Dialog/index";

export default class Join extends Component{
  constructor(){
    super();
    this.state={
      imgUrl:'',
      isShow:false
    }
  }
  setUrl=()=>{
    // debugger
    this.setState({
      imgUrl:this.refs.updateBtn.value
    })
    let p=this.refs.updateImg
    update(p)
  }
  handleSubmit=()=>{
    if(!this.state.imgUrl){
      this.setState({
        isShow:true
      })
    }
  }
  handleUpdateImg=()=>{
    this.refs.updateBtn.click()
  }
  changeImg=()=>{
    console.log(this.refs.updateBtn.value);
    updataImg(this.refs.updateBtn,this.refs.updateImg,{DivShow})
    // this.refs.updateImg
  }
  render(){
    return (
      <div className="wrap" >
        <form onSubmit={()=>this.handleSubmit} >
          <div className="joinInfo">
            <div className="imgBtn" onClick={this.handleUpdateImg} id="DivShow">
              <i className="iconfont icon-add"></i>
              <span>封面</span>
            </div>
            <img ref='updateImg' className="image"/>
            <input type="file" ref="updateBtn" onChange={()=>this.changeImg()} value={this.state.imgUrl} name="imgUrl"/>
            <textarea name="title" id="" cols="30" rows="5" defaultValue='暂未设置标题，输入标题更吸引粉丝哦！！！' ref="title"></textarea>
          </div>
          <button type="submit" className="weui-btn weui-btn_plain-default" onClick={this.setUrl}>
            开启直播
          </button>
          <Link to="/" className="weui-btn weui-btn-2 weui-btn_plain-default">不开启</Link>
          <label htmlFor="weuiAgree" className="weui-agree">
            <input type="checkbox" className="weui-agree__checkbox" id="weuiAgree" checked disabled/>
            <span className="weui-agree__text">
            开通默认遵守<Link to="/join/rules">《一起直播相关条款》</Link>
          </span>
          </label>
        </form>
          {/*<Dialog isShow={this.state.isShow}/>*/}
      </div>
    )
  }
}
import './index.less'
import updataImg from "../../until/updataImg";