webpackJsonp([6],{WMFg:function(e,t){},tRzW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("+qDl"),l=a.n(r),n={computed:{},data:function(){return{labelPosition:"right",requestParam:{search:{game:null,room:null,round_id:null}},page:{list:[],current_page:1,total:0,page_size:8},pageshow:!0}},methods:{getList:function(){var e=this;e.page.list=[],e.page.total=0;var t={search:this.requestParam.search,page:{current_page:this.page.current_page,page_size:this.page.page_size}};this.$api.statistic.list_gameRecord(t).then(function(t){200===t.data.code&&(e.pageshow=!1,e.$nextTick(function(){e.pageshow=!0}),e.page.total=t.data.data.total,e.page.list=t.data.data.list)})},tableRowClassName:function(e){e.row;var t=e.rowIndex;return t%4==1?"warning-row":t%4==3?"success-row":""},prePage:function(){this.page.current_page>0&&(this.page.current_page--,this.getList())},thisPage:function(e){this.page.current_page=e,this.getList()},nextPage:function(){this.page.current_page<Math.ceil(this.page.total/this.page.page_size)&&(this.page.current_page++,this.getList())}},filters:{formatDate:function(e){return l()(e).format("YYYY/MM/DD hh:mm:ss a")},returnDefault:function(e){if(!e)return 0}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"allPage"},[a("div",{staticClass:"core_container"},[a("div",{staticClass:"form_container"},[a("el-form",{staticClass:"demo-form-inline form_container_header",attrs:{inline:!0,size:"mini"}},[a("el-form-item",{attrs:{label:"游戏"}},[a("el-input",{model:{value:e.requestParam.search.game,callback:function(t){e.$set(e.requestParam.search,"game",e._n(t))},expression:"requestParam.search.game"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"房间"}},[a("el-input",{model:{value:e.requestParam.search.room,callback:function(t){e.$set(e.requestParam.search,"room",e._n(t))},expression:"requestParam.search.room"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"局号"}},[a("el-input",{model:{value:e.requestParam.search.round_id,callback:function(t){e.$set(e.requestParam.search,"round_id",e._n(t))},expression:"requestParam.search.round_id"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getList}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticClass:"showDataTab"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page.list,"row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"game_id",label:"游戏ID",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"game_name",label:"游戏名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"room_id",label:"房间Id",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"room_name",label:"房间名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"round",label:"局号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"start_time",label:"游戏开始时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"end_time",label:"游戏结束时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"round_flow",label:"当局总流水",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"round_pump",label:"当局总税收",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"uc",label:"后台调整",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[a("ul",[a("li",[e._v("\n                  受控:"+e._s(null==t.row.uc.c||0==t.row.uc.c?"否":"是")+"\n                ")]),e._v(" "),a("li",[e._v("控制目标:"+e._s(t.row.uc.tar))]),e._v(" "),a("li",[e._v("控制等级:"+e._s(t.row.uc.level))]),e._v(" "),a("li",[e._v("控制进度:"+e._s(t.row.uc.now))]),e._v(" "),a("li",[e._v("\n                  完成目标:"+e._s(null==t.row.uc.achieveTarget||0==t.row.uc.achieveTarget?"否":"是")+"\n                ")])]),e._v(" "),a("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v("展示")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"详情",align:"center",prop:"opt"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[a("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v("详情")]),e._v("\n              "+e._s(t.row.opt)+"\n            ")],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"pageBar"},[e.pageshow?a("el-pagination",{attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":e.page.current_page,"page-size":e.page.page_size,total:e.page.total},on:{"next-click":e.nextPage,"current-change":e.thisPage,"prev-click":e.prePage}}):e._e()],1)])])},staticRenderFns:[]};var i=a("VU/8")(n,s,!1,function(e){a("WMFg")},"data-v-7e65c253",null);t.default=i.exports}});
//# sourceMappingURL=6.a90815df66dfce5c3e69.js.map