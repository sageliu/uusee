const port = 19999;
let express = require('express');
let path=require('path');
let app = express();
let isDev = process.env.NODE_ENV === 'develop'; // 是否是开发环境
app.use(express.static(path.resolve('node_modules')));//静态文件
let RouterAll = express.Router();
app.use('/api',RouterAll);//接口中间件
require('./router/index')(RouterAll)//接口合并并引用

app.listen(port,function () {
  console.log(`服务端已经启动，监听${port}端口`);
});