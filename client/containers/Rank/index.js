import React, {Component} from 'react';
import LoadMore from "../../components/LoadMore/index";
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'
import AirList from "../../components/AirList/index";
import {ajax} from '../../until/ajax.js'

let data1=[
  {image:require('./images/1.jpg'),title:'不一样的帅',user:'仓鼠_SAMA',type:'生活娱乐',people:'2321'},
  {image:require('./images/2.jpg'),title:'shakalaka',user:'红发杰克、',type:'唱见舞见',people:'3512'},
  {image:require('./images/3.jpg'),title:'阿西吧',user:'宫本狗雨',type:'电子竞技',people:'3512'},
  {image:require('./images/4.jpg'),title:'水彩',user:'木实君',type:'绘画专区',people:'2641'},
  {image:require('./images/5.jpg'),title:'王者月白带着粉丝上高速',user:'一只小月白',type:'手游直播',people:'673'},
  {image:require('./images/6.jpg'),title:'TOP韩服高质量局√',user:'宇宙领主夜神',type:'电子竞技',people:'234'},
  {image:require('./images/7.jpg'),title:'早啊~弟弟们',user:'隔壁班的喵会长',type:'御宅文化',people:'4562'},
  {image:require('./images/8.jpg'),title:'绝地求生大逃杀',user:'布兰多虾饺',type:'单机联机',people:'6783'},
  {image:require('./images/9.jpg'),title:'修仙真是美妙啊',user:'便器喵',type:'网络游戏',people:'5734'},
  {image:require('./images/10.jpg'),title:'学习要耐得住寂寞',user:'特爱森',type:'学习',people:'8793'},
];
export default class Rank extends Component {
  componentWillMount(){
    ajax({method:'get',url:'/api/rank'}).then(data=>{
      // console.log(data,'xsxsxsxsx');
      this.dataAry=data;
      this.dataAry2=data.reverse();
    }).catch(err=>{
      // console.log(err,"xxxxxxxxxxx");
    })
  }
  render() {
    return (
        <div className="scroll-content">
          <div className="weui-tab">
            <ul className="weui-navbar">
              <NavLink to="/rank/onList" className="weui-navbar__item" activeClassName=" weui-bar__item_on">直播中</NavLink>
              <NavLink to="/rank/unList" className="weui-navbar__item" activeClassName=" weui-bar__item_on">未开播</NavLink>
            </ul>
          </div>
          <Router>
          <div className="data-wrap">
            {/*<Route path="/rank/onList" render={()=>{return <AirList data={this.dataAry}/>}}></Route>*/}
            {/*<Route path="/rank/unList" render={()=>{return <AirList data={this.dataAry2}/>}}></Route>  */}
            <Route path="/rank/onList" render={()=>{return <AirList data={data1}/>}}></Route>
            <Route path="/rank/unList" render={()=>{return <AirList data={data1.slice(0).reverse()}/>}}></Route>
          </div>
          </Router>
        </div>
    )
  }
}
import './index.less';
