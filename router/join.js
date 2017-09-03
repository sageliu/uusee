let express = require('express');

let url=require('url')
let path =require('path')
// let upload= require('../util/upload')

let router= express.Router()//注意，这里的方法是大写的，并且是目前学过唯一一个大写的方法名

let upload = require('../util/multerUtil')
//multer有single()中的名称必须是表单上传字段的name名称。

router.post('/join',upload.single('imgUrl'), function (req, res) {
  if(req.file){
    //如果上传成功，跳到首页
    res.redirect('/')
  }
})


module.exports=router;