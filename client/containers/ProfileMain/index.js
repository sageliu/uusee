/**
 * Created by chenshufang on 2017/8/30.
 */
import React,{Component} from 'react';
import './index.less'
import active from '../Profile/img/bg.jpg'
export default class ProfileMain extends Component{
    constructor(){
        super();
        this.state={active:''}
    }
    delClick=()=>{
        let mark=document.querySelector("#mark");
        mark.style.display='none';
    }
    handleClick=()=>{
        let mark=document.querySelector("#mark");
        mark.style.display='block';
    }
    componentDidMount(){
        this.setState({active:active})
    }
    render(){
        return (
            <div className="shell">
                <div className="main">
                    <ul>
                        <li className="info">
                            <div className="tx">
                                <img src={this.props.img} className="tou" />
                            </div>
                            <span>呱呱小兔</span>
                            <span className="time">14小时前</span>
                            <div className="active">
                                <img src={this.state.active} />
                                <p>10 浏览</p>
                                <div className="share">
                                    <span>❤</span>
                                    <span>♬</span>
                                    <span>✈</span>
                                    <span onClick={this.handleClick} className="handle">…</span>
                                </div>
                            </div>
                            <div className="mark" id="mark">
                                <div className="del">
                                    <input type="button" value={'删除'}  />
                                    <input type="button" onClick={this.delClick} value={'取消'}className="abolish"/>
                                </div>

                            </div>


                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}