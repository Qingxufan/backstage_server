const api_security = require('../config/ApiSecurity')
function Check (ctx) {
  let session = ctx.session.userinfo;
  let url = ctx.request.originalUrl;
  if(api_security[url] == undefined){
    return true;
  }else if(!session||api_security[url] < session.permission){ //数字越大权限越小
    return false
  }else{
    return true;
  }

}
module.exports = {Check}