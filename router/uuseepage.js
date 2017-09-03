let express = require('express');
let Util =require('../util/util.js')
let path=require('path')
let router= express.Router()//注意，这里的方法是大写的，并且是目前学过唯一一个大写的方法名
//这个router是mini-app,类似 let app= express();只不过是小的app

router.get('/uuseepage', function (req, res) {
  res.json(Util.readJson(path.resolve(__dirname, '../mock/api/homePage.json')))
})

module.exports=router;