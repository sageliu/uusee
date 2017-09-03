export default function(pathname) {
  let title=''
  switch (pathname){
    case '/':
      title='首页';
      break;
    case '/join':
      title='join';
      break;
    case '/profile':
      title='profile';
      break;
    case '/rank':
      title='rank';
      break;
    case '/login':
      title=null;
      break;
    default:
      title='一起直播'
  }
  return title;
}