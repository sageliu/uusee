
module.exports=function (RouterAll) {
  RouterAll.use(require('./homepage'));
  RouterAll.use(require('./join'));
  // RouterAll.use(require('./uuseepage'));
  RouterAll.use(require('./rank'));
  RouterAll.use(require('./homeBanner'));
  RouterAll.use(require('./homeAirList'));
}
