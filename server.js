const port = 19999;
const Util =require('./util/util')
let formidable = require('formidable');
let express = require('express');
let path=require('path');
let fs= require('fs');
let url = require('url')
let app = express();
let isDev = process.env.NODE_ENV === 'develop'; // 是否是开发环境
app.use(express.static(path.resolve('node_modules')))

// app.use('/soups',soups);
// app.use('/noodles',noodles);

app.get('/api/homePage', function (req, res) {
  res.json(Util.readJson(path.resolve(__dirname, './mock/api/homePage.json')))
})

app.post('/api/join',function (req,res) {
  let pathname = url.parse(req.url).pathname;
  console.log('http request for '+pathname+' recieved');
  let form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname,'./mock/');
  form.keepExtensions = true;
  form.parse(req, function(err, fields, files) {
    // console.log(JSON.stringify(files.toJSON()))
    // console.log('xxxxxxxxxxxxxxxx',fields,'xxxxxxxxxxxxxxxx');
  });
  form.on('end', function() {
    console.log('图片上传成功');
  });
  res.redirect('/profile')
})


app.listen(port,function () {
  console.log(`服务端已经启动，监听${port}端口`);
});