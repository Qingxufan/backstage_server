webpackJsonp([3],{"6H20":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Gu7T"),n=a.n(r),l=a("PJh5"),s=a.n(l),i={computed:{},data:function(){return{labelPosition:"right",requestParam:{uid:null,diff_range:[],search_item:null},page:{list:[],current_page:1,total:0,page_size:8},options:[{value:"total_gold",label:"总金币"},{value:"winLose",label:"输赢"},{value:"flow",label:"流水"},{value:"reward",label:"奖励"},{value:"give",label:"赠与"},{value:"receive",label:"收到"}],codes:{0:"app游客",1:"手机号",2:"微信",3:"QQ",4:"Google",5:"Facebook"}}},methods:{getList:function(){var e=this;if(void 0!=this.requestParam.diff_range[0]&&void 0!=this.requestParam.diff_range[1]&&this.requestParam.diff_range[0]>=this.requestParam.diff_range[1])this.$message({showClose:!0,message:"金额上限必须小于下限!",type:"error"});else{var t=this;t.page.list=[],t.page.total=0;var a=[],r=0,n={uid:this.requestParam.uid,diff_range:this.requestParam.diff_range,search_item:this.requestParam.search_item,page:{current_page:this.page.current_page,page_size:this.page.page_size}};this.$api.statistic.list_playerAccount(n).then(function(n){if(200===n.data.code){r=n.data.data.total;var l=[];if((a=n.data.data.list).forEach(function(e){l.push(e.uid)}),0==l.length)return;e.$api.statistic.getUidList({uuids:l}).then(function(e){if(!0===e.data.success){var n=e.data.data.bwb_infos;a.map(function(e,t){return e.nick_name=n[e.uid].nick_name,e.code=n[e.uid].code,e.user_name=n[e.uid].user_name,e}),t.page.list=a,t.page.total=r}else t.$message({showClose:!0,message:"获取列表失败",type:"error"})})}else e.$message({showClose:!0,message:"获取用户账号信息失败",type:"warning"}),t.page.list=a,t.page.total=r})}},tableRowClassName:function(e){e.row;var t=e.rowIndex;return t%4==1?"warning-row":t%4==3?"success-row":""},prePage:function(){this.page.current_page>0&&(this.page.current_page--,this.getList())},thisPage:function(e){this.page.current_page=e,this.getList()},nextPage:function(){this.page.current_page<Math.ceil(this.page.total/this.page.page_size)&&(this.page.current_page++,this.getList())},addColor:function(e){return function(e){return 0}?"greenCor":"redCor"}},filters:{formatDate:function(e){return s()(e).format("YY/MM/DD H:mm:ss")},hideAccount:function(e){if(!e||[].concat(n()(e)).length<5)return"-";var t=[].concat(n()(e)),a="",r=Math.floor(t.length/2)-1,l=Math.floor(t.length/3)-1+r;return l-r>4&&(l=r+4),t.forEach(function(e,t){t>=r&&t<=l&&(e="*"),a+=e}),a}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"allPage"},[a("div",{staticClass:"core_container"},[a("div",{staticClass:"form_container"},[a("el-form",{staticClass:"demo-form-inline form_container_header",attrs:{inline:!0,size:"mini"}},[a("el-form-item",{attrs:{label:"用户ID"}},[a("el-input",{model:{value:e.requestParam.uid,callback:function(t){e.$set(e.requestParam,"uid",e._n(t))},expression:"requestParam.uid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"刷选类别"}},[[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.requestParam.search_item,callback:function(t){e.$set(e.requestParam,"search_item",t)},expression:"requestParam.search_item"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]],2),e._v(" "),a("el-form-item",{attrs:{label:"金额范围"}},[a("el-input",{staticClass:"minInput",attrs:{placeholder:"最低金额",size:"small"},model:{value:e.requestParam.diff_range[0],callback:function(t){e.$set(e.requestParam.diff_range,0,e._n(t))},expression:"requestParam.diff_range[0]"}}),e._v("\n          -\n          "),a("el-input",{staticClass:"minInput",attrs:{placeholder:"最高金额",size:"small"},model:{value:e.requestParam.diff_range[1],callback:function(t){e.$set(e.requestParam.diff_range,1,e._n(t))},expression:"requestParam.diff_range[1]"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getList}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticClass:"showDataTab"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page.list,"row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"uid",label:"用户ID",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nick_name",label:"昵称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"注册账户类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.codes[t.row.code]))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"user_name",label:"注册账号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("hideAccount")(t.row.user_name)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"total_gold",label:"总金币",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"box_gold",label:"保险箱金币",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"recharge",label:"总充值",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"give",label:"总赠出",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"receive",label:"总收到",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"winLose",label:"总输赢",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tax",label:"游戏税收",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"reward",label:"奖励",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"trade_tax",label:"交易税",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"flow",label:"总流水",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"uc",label:"后台调整",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.uc.now)+" / "+e._s(t.row.uc.tar)+"\n            ")]}}])})],1)],1),e._v(" "),a("div",{staticClass:"pageBar"},[a("el-pagination",{attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":e.page.current_page,"page-size":e.page.page_size,total:e.page.total},on:{"next-click":e.nextPage,"current-change":e.thisPage,"prev-click":e.prePage}})],1)])])},staticRenderFns:[]};var u=a("VU/8")(i,o,!1,function(e){a("9xiJ")},"data-v-71cf32f2",null);t.default=u.exports},"9uBv":function(e,t,a){"use strict";var r=a("3fMt"),n=a("Wdy1"),l=a("wXdB"),s=a("tn1D"),i=a("yuYM"),o=a("GhAV"),u=a("Uy0O"),c=a("1yV6");n(n.S+n.F*!a("wWcv")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,n,p,f=l(e),g="function"==typeof this?this:Array,d=arguments.length,_=d>1?arguments[1]:void 0,m=void 0!==_,v=0,h=c(f);if(m&&(_=r(_,d>2?arguments[2]:void 0,2)),void 0==h||g==Array&&i(h))for(a=new g(t=o(f.length));t>v;v++)u(a,v,m?_(f[v],v):f[v]);else for(p=h.call(f),a=new g;!(n=p.next()).done;v++)u(a,v,m?s(p,_,[n.value,v],!0):n.value);return a.length=v,a}})},"9xiJ":function(e,t){},Gu7T:function(e,t,a){"use strict";t.__esModule=!0;var r,n=a("c/Tr"),l=(r=n)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,l.default)(e)}},Uy0O:function(e,t,a){"use strict";var r=a("GCs6"),n=a("YTz9");e.exports=function(e,t,a){t in e?r.f(e,t,n(0,a)):e[t]=a}},"c/Tr":function(e,t,a){e.exports={default:a("fRJi"),__esModule:!0}},fRJi:function(e,t,a){a("tz60"),a("9uBv"),e.exports=a("iANj").Array.from}});