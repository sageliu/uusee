import {ajax} from '../../client/until/ajax';
// export const getHomePage = () =>{
//     return get('/home');
// };
export const getHomeBanner=()=>{
  return ajax('get','/homeBanner')
}