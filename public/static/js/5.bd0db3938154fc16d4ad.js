webpackJsonp([5],{RsD2:function(e,t){},RwYI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("+qDl"),l=a.n(r),n={computed:{},data:function(){return{labelPosition:"right",requestParam:{uid:null,time_range:null,changeType:null},goldchange:{},responseData:[],page:{list:[],current_page:1,total:0,page_size:8},user:this.$store.getters["user/getUser"],options:[{value:null,label:"全部"},{value:0,label:"游戏"},{value:1,label:"充值"},{value:-2,label:"赠送"},{value:2,label:"收到"},{value:3,label:"奖励"}]}},methods:{getList:function(){var e=this,t=this,a={uid:this.requestParam.uid,time_range:this.requestParam.time_range||[0,0],changeType:this.requestParam.changeType,page:{current_page:this.page.current_page,page_size:this.page.page_size}};this.$api.statistic.changeGoldlist(a).then(function(a){200===a.data.code?(t.page.total=a.data.data.total,t.page.list=a.data.data.list):e.$message({showClose:!0,message:"获取列表失败",type:"error"})})},resetForm:function(e){this.$refs[e].resetFields()},tableRowClassName:function(e){e.row;var t=e.rowIndex;return t%4==1?"warning-row":t%4==3?"success-row":""},prePage:function(){this.page.current_page>0&&(this.page.current_page--,this.getList())},thisPage:function(e){this.page.current_page=e,this.getList()},nextPage:function(){this.page.current_page<Math.ceil(this.page.total/this.page.page_size)&&(this.page.current_page++,this.getList())},getType:function(e,t){var a="";return this.options.forEach(function(t){t.value===e.type&&(a=t.label)}),a},addColor:function(e){return function(e){return 0}?"greenCor":"redCor"}},filters:{formatDate:function(e){return l()(e).format("YYYY/MM/DD hh:mm:ss a")}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"allPage"},[a("div",{staticClass:"core_container"},[a("div",{staticClass:"form_container"},[a("el-form",{staticClass:"demo-form-inline form_container_header",attrs:{inline:!0,size:"mini"}},[a("el-form-item",{attrs:{label:"用户ID",required:!0}},[a("el-input",{model:{value:e.requestParam.uid,callback:function(t){e.$set(e.requestParam,"uid",e._n(t))},expression:"requestParam.uid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"时间范围"}},[[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetimerange",align:"right","value-format":"timestamp","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["12:00:00","08:00:00"]},model:{value:e.requestParam.time_range,callback:function(t){e.$set(e.requestParam,"time_range",t)},expression:"requestParam.time_range"}})],1)]],2),e._v(" "),a("el-form-item",{attrs:{label:"变更类型"}},[[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.requestParam.changeType,callback:function(t){e.$set(e.requestParam,"changeType",t)},expression:"requestParam.changeType"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]],2),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getList}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticClass:"showDataTab"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page.list,"row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"timestamp",label:"记录时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(e._f("formatDate")(t.row.timestamp))+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"uid",label:"用户ID",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"post_totalGold",label:"总金币",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",formatter:e.getType,label:"变更类型",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"diff",label:"金额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:e.addColor(t.row.diff)},[e._v(e._s(t.row.diff))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"pump",label:"税收",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"详情",align:"center"}},[a("el-button",{attrs:{type:"primary",plain:"",disabled:""}},[e._v("详情")])],1)],1)],1),e._v(" "),a("div",{staticClass:"pageBar"},[a("el-pagination",{attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":e.page.current_page,"page-size":e.page.page_size,total:e.page.total},on:{"next-click":e.nextPage,"current-change":e.thisPage,"prev-click":e.prePage}})],1)])])},staticRenderFns:[]};var i=a("VU/8")(n,s,!1,function(e){a("RsD2")},"data-v-f5c7af7c",null);t.default=i.exports}});
//# sourceMappingURL=5.bd0db3938154fc16d4ad.js.map