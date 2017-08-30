import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
export default class MHeader extends Component{
  handleBack=(e)=>{
    e.preventDefault();
    this.props.history.goBack()
  }
  render(){
    return (
      <div className="weui-tab">
        <div className="weui-navbar">
          <div className="weui-navbar__item">
            <div onClick={()=>{}} className="backBtn"/>
            MHeader
          </div>
        </div>
      </div>
    )
  }
}
