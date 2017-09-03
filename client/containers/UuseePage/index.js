import React,{Component} from 'react';
import ajax from '../../until/ajax'
export default class UuseePage extends Component{
  componentDidMount(){
    ajax('get','/api/uuseepage').then(data=>{

    })
  }
  render(){
    return (
      <div>
        <div>
          <img src="" alt=""/>
        </div>
        {/*<vedio></vedio>*/}
      </div>
    )
  }
}