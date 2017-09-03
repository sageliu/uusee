
module.exports=function (RouterAll) {

  RouterAll.use(require('./homepage'));
  RouterAll.use(require('./join'));
  RouterAll.use(require('./uuseepage'));

}
