let express = require('express');
let Util =require('../util/util.js');
let path=require('path');
let url = require('url')

let router= express.Router()//注意，这里的方法是大写的，并且是目前学过唯一一个大写的方法名
let multiparty = require('multiparty');

router.post('/join',function (req,res) {
  let pathname = url.parse(req.url).pathname;
  console.log('http request for '+pathname+' recieved');
  // let form = new formidable.IncomingForm();
  // form.uploadDir = path.join(__dirname,'./mock/');
  // form.keepExtensions = true;
  // form.parse(req, function(err, fields, files) {
  //   // console.log(JSON.stringify(files.toJSON()))
  //   // console.log('xxxxxxxxxxxxxxxx',fields,'xxxxxxxxxxxxxxxx');
  // });
  // form.on('end', function() {
  //   console.log('图片上传成功');
  // });
  let count = 0;
  let form = new multiparty.Form({uploadDir: './mock/images/'});
  //上传完成后处理
  form.parse(req, function(err, fields, files) {
    console.log(JSON.stringify(files));
    let filesTmp = JSON.stringify(files, null, 2);

  if (err) {
    console.log('parse error: ' + err);
  } else {
    console.log('parse files: ' + filesTmp);
    let inputFile = files.inputFile[0];
    let uploadedPath = inputFile.path;
    let dstPath = path.join(__dirname,'./mock/images/') + inputFile.originalFilename;
    //重命名为真实文件名
    fs.rename(uploadedPath, dstPath, function (err) {
      if (err) {
        console.log('rename error: ' + err);
      } else {
        console.log('rename ok');
      }
    });
  }
  console.log(req.body, req.files);
  res.redirect('/profile')
})

form.on('error', function(err) {
  console.log('Error parsing form: ' + err.stack);
});

form.on('part', function(part) {

  if (!part.filename) {
    console.log('got field named ' + part.name);
    part.resume();
  }

  if (part.filename) {
    count++;
    console.log('got file named ' + part.name);
    part.resume();
  }

  part.on('error', function(err) {
  });
});

form.on('close', function() {
  console.log('Upload completed!');
  res.redirect('../#/')
});
})


module.exports=router;