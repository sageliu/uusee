let express = require('express');
let router=express.Router();
let path =require('path')
let Util =require('../util/util')
router.get('/homeBanner',function (req,res) {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.json(Util.readJson(path.resolve(__dirname, '../mock/api/homeBanner.json')))
})
module.exports=router;