let express = require('express');
let Util =require('../util/util.js')
let path=require('path')
let router= express.Router()//注意，这里的方法是大写的，并且是目前学过唯一一个大写的方法名
//这个router是mini-app,类似 let app= express();只不过是小的app
router.get('/join',function(req,res){
  req.send('这里是子路由，注意上面的path是省掉的父级路由的前缀之后的path')
})

router.get('/homepage', function (req, res) {
res.json(Util.readJson(path.resolve(__dirname, '../mock/api/homePage.json')))
})

module.exports=router;