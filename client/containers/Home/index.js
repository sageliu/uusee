import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/home';
import Swiper from "../../components/Swiper/index";
import {getHomeBanner} from "../../../mock/api/home"
import {getHomeAirList} from "../../../mock/api/home"
import AirList from "../../components/AirList/index";

let data1=[
  {image:require('../../containers/Rank/images/1.jpg'),title:'不一样的帅',user:'仓鼠_SAMA',type:'生活娱乐',people:'2321'},
  {image:require('../../containers/Rank/images/2.jpg'),title:'shakalaka',user:'红发杰克、',type:'唱见舞见',people:'3512'},
  {image:require('../../containers/Rank/images/3.jpg'),title:'阿西吧',user:'宫本狗雨',type:'电子竞技',people:'3512'},
  {image:require('../../containers/Rank/images/4.jpg'),title:'水彩',user:'木实君',type:'绘画专区',people:'2641'},
  {image:require('../../containers/Rank/images/5.jpg'),title:'王者月白带着粉丝上高速',user:'一只小月白',type:'手游直播',people:'673'},
  {image:require('../../containers/Rank/images/6.jpg'),title:'TOP韩服高质量局√',user:'宇宙领主夜神',type:'电子竞技',people:'234'},
  {image:require('../../containers/Rank/images/7.jpg'),title:'早啊~弟弟们',user:'隔壁班的喵会长',type:'御宅文化',people:'4562'},
  {image:require('../../containers/Rank/images/8.jpg'),title:'绝地求生大逃杀',user:'布兰多虾饺',type:'单机联机',people:'6783'},
  {image:require('../../containers/Rank/images/9.jpg'),title:'修仙真是美妙啊',user:'便器喵',type:'网络游戏',people:'5734'},
  {image:require('../../containers/Rank/images/10.jpg'),title:'学习要耐得住寂寞',user:'特爱森',type:'学习',people:'8793'},
];
class Home extends Component{
  constructor(){
    super();
    this.state={
      bannerImage:[]
    }
  }
  componentDidMount(){
    getHomeBanner().then(bannerImage=>{
      this.setState({bannerImage})
    }).catch(err=>{
      console.log(err);
    })
    getHomeAirList().then(item=>{
      this.data=item
    })

  }
  render(){
    let optBanner={
      continuous:true,
      auto:3000,
      isReady:this.state.bannerImage.length,
      slider:this.state.bannerImage.map((item,index)=><img src={item}/>),
      dots:this.state.bannerImage.map(item=>'')
    };
    let opt={
      continuous:true,
      auto:3000,
      isReady:this.state.bannerImage.length,
      slider:this.state.bannerImage.map((item,index)=><img src={item}/>),
      dots:this.state.bannerImage.map(item=>'')
    };
    return (
      <div>
        <Swiper opt={optBanner} flag={true}/>
        {/*<AirList data={this.data}/>*/}
        <AirList data={data1}/>
      </div>
    )
  }
}
export default connect(
  state=>({...state}),
  actions
)(Home)
import './index.less'