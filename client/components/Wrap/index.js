import React,{Component} from 'react';
import MHeader from "../MHeader/index";
import MFooter from "../MFooter/index";
export default class Wrap extends Component{
  render(){
    return (
      <div>
        <MHeader/>
        {this.props.children}
        <MFooter/>
      </div>
    )
  }
}