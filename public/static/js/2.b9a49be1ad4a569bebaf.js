webpackJsonp([2],{"0K6c":function(e,t){},"30vf":function(e,t,n){var s=n("Wdy1"),o=n("iANj"),r=n("zyKz");e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),s(s.S+s.F*r(function(){n(1)}),"Object",a)}},"4ajQ":function(e,t,n){var s=n("Wdy1");s(s.S+s.F*!n("qs+f"),"Object",{defineProperty:n("GCs6").f})},C4MV:function(e,t,n){e.exports={default:n("rKx+"),__esModule:!0}},DJxI:function(e,t){},ZhOs:function(e,t,n){n("rZAI"),e.exports=n("iANj").Object.keys},bOdI:function(e,t,n){"use strict";t.__esModule=!0;var s,o=n("C4MV"),r=(s=o)&&s.__esModule?s:{default:s};t.default=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},fZjL:function(e,t,n){e.exports={default:n("ZhOs"),__esModule:!0}},lmfZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("bOdI"),o=n.n(s),r=n("fZjL"),a=n.n(r),i=n("E4LH"),c={name:"SocialSignin",methods:{wechatHandleClick:function(e){alert("ok")},tencentHandleClick:function(e){alert("ok")}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(t){return e.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),e._v("\n    WeChat\n  ")]),e._v(" "),n("div",{staticClass:"sign-btn",on:{click:function(t){return e.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),e._v("\n    QQ\n  ")])])},staticRenderFns:[]};var u=n("VU/8")(c,l,!1,function(e){n("x8l6")},"data-v-2ac21454",null).exports,d=o()({name:"Login",components:{SocialSign:u},data:function(){return{loginForm:{username:null,password:null},loginRules:{username:[{required:!0,trigger:"blur",validator:function(e,t,n){Object(i.b)(t)?n():n(new Error("Please enter the correct user name"))}}],password:[{required:!0,trigger:"blur",validator:function(e,t,n){!t||t.length<6?n(new Error("The password can not be less than 6 digits")):n()}}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(e){var t=e.key;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return!1;e.loading=!0;var n=e;e.$api.user.login({username:e.loginForm.username.trim(),password:e.$md5(e.loginForm.password)}).then(function(t){200===t.data.code?n.$store.dispatch("user/setUser",{uid:t.data.data.uid,username:t.data.data.username,status:t.data.data.status,permission:t.data.data.permission}).then(function(){n.$router.history.current.query.redirect?n.$router.push({path:decodeURIComponent(n.$router.history.current.query.redirect)}):(n.$router.push("/home"),n.loading=!1)}).catch(function(){n.loading=!1}):(e.$message({showClose:!0,message:"账号或者密码错误",type:"error"}),n.loading=!1)})})},getOtherQuery:function(e){return a()(e).reduce(function(t,n){return"redirect"!==n&&(t[n]=e[n]),t},{})}}},"mounted",function(){this.$router.history.current.query.redirect&&this.$message({showClose:!0,message:"当前账号登录已经过期，请重新登陆！",type:"error"})}),p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("Login Form")])]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),n("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on","show-password":""},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),e._v(" "),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")])],1),e._v(" "),n("el-dialog",{attrs:{title:"Or connect with",visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}}},[e._v("\n    Can not be simulated on local, so please combine you own business\n    simulation! ! !\n    "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("social-sign")],1)],1)},staticRenderFns:[]};var f=n("VU/8")(d,p,!1,function(e){n("DJxI"),n("0K6c")},"data-v-f9f17760",null);t.default=f.exports},"rKx+":function(e,t,n){n("4ajQ");var s=n("iANj").Object;e.exports=function(e,t,n){return s.defineProperty(e,t,n)}},rZAI:function(e,t,n){var s=n("wXdB"),o=n("pEGt");n("30vf")("keys",function(){return function(e){return o(s(e))}})},x8l6:function(e,t){}});