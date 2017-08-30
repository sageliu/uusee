import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import './index.less'
import {Link} from 'react-router-dom'
class MHeader extends Component{
  handleBack=()=>{
    this.props.history.goBack()
  }
  render(){
    // console.log(this.props);
    switch (this.props.location.pathname){
      case '/':
        this.title='首页';
        break;
      case '/join':
        this.title='join';
        break;
      case '/profile':
        this.title='profile';
        break;
      case '/rank':
        this.title='rank';
        break;
      default:
        this.title='一起直播'
    }
    return (
      <div className="weui-tab">
        <div className="weui-navbar">
          <div className="weui-navbar__item">
            <div onClick={this.handleBack} className="backBtn"/>
            {this.title?this.title:'一起直播'}
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(MHeader)