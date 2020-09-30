const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const proxy = require('koa2-proxy-middleware');
const session = require('koa-session');
const securityUtil = require('./utils/ApiSecuritUtil')
const router = require('./routes/index')
const cors = require('koa2-cors');
const ResUtil = require('./utils/ResUtil');
const staticResource = require('koa-static');
const logger = require('./config/logger');
const util = require('util');
const config = require('./config/config')
const options = {
  targets: {
    '/backstage/(.*)': {
      target: config[config.mode].proxy_url,
      changeOrigin: true,
      pathRewrite: {
        '/backstage': '',
      }
    },
  }
}

//session
app.keys = ['backstage_server_key'];
const CONFIG = {
  key: 'koa.sess',
  maxAge: 3600000, //过期事件
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false, ////在每次请求时强行设置cookie，这将重置cookie 过期时间（默认：false）
  renew: true,
  // secure: true, 
  // sameSite: null,
};
//app.use(cors());
app.use(cors({
  credentials: true,//默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器许可Cookie可以包含在请求中
  origin: ctx => ctx.header.origin, // web前端服务器地址，注意这里不能用*
}));

app.use(staticResource(__dirname + '/public'));
app.use(session(CONFIG, app));
app.use(proxy(options));
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))

app.use(async (ctx, next) => {
  let pass = securityUtil.Check(ctx);
  logger.warn(util.format('%s %s %s', ctx.method, ctx.path, ctx.request.body))
  if (pass) {
    await next();
  } else {
    ctx.response.body = ResUtil.resErr.session_useless;
  }
});



app.use(router.routes(), router.allowedMethods())



module.exports = app
