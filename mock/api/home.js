import {ajax} from '../../client/until/ajax';
// export const getHomePage = () =>{
//     return get('/home');
// };
export const getHomeBanner=()=>{
  return ajax({method:'get',url:'http://localhost:13333/api/homeBanner'})
}
export const getHomeAirList=()=>{
  return ajax({method:'get',url:'http://localhost:13333/api/homeAirList'})
}
