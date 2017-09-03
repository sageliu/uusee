import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import setTitle from './setTitle'
import {Link} from 'react-router-dom'
class MHeader extends Component{
  handleBack=()=>{
    this.props.history.goBack()
  }
  render(){
    // console.log(this.props);
    this.title=setTitle(this.props.location.pathname)
    return (
      <div className="weui-tab">
        <div className="weui-navbar">
          <div className="weui-navbar__item">
            <div onClick={this.handleBack} className="backBtn iconfont icon-left"/>
            {this.title?this.title:'一起直播'}
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(MHeader)
import './index.less'
