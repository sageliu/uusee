import React,{Component} from 'react';
import {Link} from 'react-router-dom'
export default class Join extends Component{
  constructor(){
    super();
    this.state={
      imgUrl:''
    }
  }
  handleSubmit=()=>{

  }
  hac=()=>{
    alert(1)
  }
  handleUpdateImg=()=>{
    this.refs.updateBtn.click()
  }
  changeImg=()=>{
    console.log(this.refs.updateBtn.value);
    this.setState({
      imgUrl:this.refs.updateBtn.value
    })
    this.refs.updateImg.setAttribute('src',this.state.imgUrl)
  }
  render(){
    return (
      <form className="wrap" onSubmit={()=>this.handleSubmit}>
        <div className="joinInfo">
          <div className="imgBtn" onClick={this.handleUpdateImg}>
            <i className="iconfont icon-add"></i>
            <span>封面</span>
          </div>
          <p alt="" ref='updateImg'/>
          <input required type="file" ref="updateBtn" onChange={()=>this.changeImg()} value={this.state.imgUrl} name="imgUrl"/>
          <textarea name="title" id="" cols="30" rows="5" value='输入标题更吸引粉丝哦'></textarea>
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
      </form>
    )
  }
}
import './index.less'