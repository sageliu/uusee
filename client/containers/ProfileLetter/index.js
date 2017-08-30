/**
 * Created by chenshufang on 2017/8/30.
 */
import React,{Component} from 'react';
import './index.less'
import tou1 from '../Profile/img/tou1.jpg'
export default class ProfileLetter extends Component{
    constructor(){
        super();
        this.state={tou1:tou1}
    }
    render(){
        return (
            <div>
               <div className="container-letter">
                   <span className="news-l">最近消息</span>
                   <ul className="newsLsit">
                       <li className="list">
                           <div className="tou1">
                               <img src={this.state.tou1}/>
                           </div>
<div className="list-tetail">
    <span>笨笨熊</span>
    <p>亲爱的主播，可以请你吃饭…</p>
</div>

                       </li>
                   </ul>
               </div>
            </div>
        )
    }
}