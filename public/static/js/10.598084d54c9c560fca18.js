webpackJsonp([10],{Gxlh:function(e,t){},"wq/P":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={computed:{},data:function(){return{labelPosition:"right",requestParam:{app_id:"",channel_code:"",boss_id:""},responseData:[],page:{list:[],current_page:1,total:0,page_size:8},showTab:!1,action:{type:"",title:""},node:{boss_id:"",app_id:"",node_id:"",sort:"",channel_code:"",name:"",icon:"",type:"",status:1,game_version:"",game_id:"",room_id:"",room_list:[],desk_id:"",queue_type:""},arraystr:{room_list:""},dialogFormVisible:!1,formLabelWidth:"20%"}},methods:{Search:function(){var e=this,t=this;t.responseData=[],this.$api.game.nodeList(this.requestParam).then(function(a){if(!0===a.data.success){t.responseData=a.data.data.node,t.page.total=t.responseData.length;var s=(t.page.current_page-1)*t.page.page_size,o=t.page.total>t.page.current_page*t.page.page_size?t.page.current_page*t.page.page_size:t.responseData.length;t.page.list=t.responseData.slice(s,o)}else e.$message({showClose:!0,message:"获取节点列表失败",type:"error"})})},AddOrEdit:function(){var e=this,t=this;t.node.room_list=t.arraystr.room_list.replace(/\s/g,"").replace(/，/g,",").split(",").map(Number),"add"===this.action.type?this.$api.game.addNode(this.node).then(function(a){!0===a.data.success?(e.$message({showClose:!0,message:"新增节点成功",type:"success"}),t.resetForm(),t.dialogFormVisible=!1):e.$message({showClose:!0,message:"新增节点失败",type:"error"})}):this.$api.game.updateNode(this.node).then(function(a){!0===a.data.success?(e.$message({showClose:!0,message:"修改节点成功",type:"success"}),t.resetForm(),t.dialogFormVisible=!1,t.Search()):e.$message({showClose:!0,message:"修改节点失败",type:"error"})})},resetForm:function(){this.node={boss_id:"",app_id:"",node_id:"",sort:"",channel_code:"",name:"",icon:"",type:"",status:1,game_version:"",game_id:"",room_id:"",room_list:[],roomIds:"",desk_id:"",queue_type:""},this.arraystr.room_list=""},tableRowClassName:function(e){e.row;var t=e.rowIndex;return t%4==1?"warning-row":t%4==3?"success-row":""},add:function(){this.action.type="add",this.action.title="新增节点",this.resetForm(),this.dialogFormVisible=!0},edit:function(e,t){this.action.type="edit",this.action.title="更新节点",this.resetForm(),this.node.node_id=t,this.node.app_id=this.requestParam.app_id,this.node.boss_id=this.requestParam.boss_id,this.node.channel_code=this.requestParam.channel_code,this.dialogFormVisible=!0},handleDelete:function(e,t){var a=this;this.$confirm("确定要删除吗？","删除").then(function(e){a.$api.game.deleteNode({app_id:a.requestParam.app_id,node_id:t}).then(function(e){if(!0===e.data.success){a.$message({showClose:!0,message:"删除节点成功",type:"success"});var s=a.responseData.findIndex(function(e){if(e.node_id===t)return!0});a.responseData.splice(s,1),a.page.total=a.responseData.length;var o=(a.page.current_page-1)*a.page.page_size,i=a.page.total>a.page.current_page*a.page.page_size?a.page.current_page*a.page.page_size:a.responseData.length;a.page.list=a.responseData.slice(o,i)}else a.$message({showClose:!0,message:"删除节点失败",type:"error"})})})},getNodeById:function(){var e=this;this.$api.game.getNodeById({node_id:this.node.node_id}).then(function(t){!0===t.data.success&&t.data.data.info&&(e.resetForm(),e.node=t.data.data.info,e.arraystr.room_list=t.data.data.info.room_list.toString())})},prePage:function(){this.page.current_page>0&&(this.page.current_page--,this.page.list=this.responseData.slice((this.page.current_page-1)*this.page.page_size,this.responseData.length>this.page.current_page*this.page.page_size?this.page.current_page*this.page.page_size:this.responseData.length))},thisPage:function(e){this.page.current_page=e,this.page.list=this.responseData.slice((this.page.current_page-1)*this.page.page_size,this.responseData.length>this.page.current_page*this.page.page_size?this.page.current_page*this.page.page_size:this.responseData.length)},nextPage:function(){this.page.current_page<Math.ceil(this.page.total/this.page.page_size)&&(this.page.current_page++,this.page.list=this.responseData.slice((this.page.current_page-1)*this.page.page_size,this.responseData.length>this.page.current_page*this.page.page_size?this.page.current_page*this.page.page_size:this.responseData.length))}},watch:{}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"allPage"},[a("div",{staticClass:"core_container"},[a("div",{staticClass:"form_container"},[a("el-form",{staticClass:"demo-form-inline form_container_header",attrs:{inline:!0,model:e.requestParam,size:"mini"}},[a("el-form-item",{attrs:{label:"BossId",prop:"boss_id",required:!0}},[a("el-input",{model:{value:e.requestParam.boss_id,callback:function(t){e.$set(e.requestParam,"boss_id",e._n(t))},expression:"requestParam.boss_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"AppId",prop:"app_id",required:!0}},[a("el-input",{model:{value:e.requestParam.app_id,callback:function(t){e.$set(e.requestParam,"app_id",e._n(t))},expression:"requestParam.app_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"渠道码"}},[a("el-input",{model:{value:e.requestParam.channel_code,callback:function(t){e.$set(e.requestParam,"channel_code",e._n(t))},expression:"requestParam.channel_code"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.Search}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}],attrs:{type:"success"},on:{click:e.add}},[e._v("新增")])],1)],1)],1),e._v(" "),a("div",{staticClass:"showDataTab"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page.list,"row-class-name":e.tableRowClassName,"header-row-class-name":"center"}},[a("el-table-column",{attrs:{prop:"node_id",label:"节点id",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"节点类型",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"节点名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"icon",label:"图标ID 或路径","show-overflow-tooltip":!0,align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.edit(t.$index,t.row.node_id),e.getNodeById()}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row.app_id,t.row.node_id)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"pageBar"},[a("el-pagination",{attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":e.page.current_page,"page-size":e.page.page_size,total:e.page.total},on:{"next-click":e.nextPage,"current-change":e.thisPage,"prev-click":e.prePage}})],1),e._v(" "),[a("el-dialog",{attrs:{title:e.action.title,visible:e.dialogFormVisible,"show-close:true":""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"node",staticClass:"formStyle text_common",attrs:{"label-position":e.labelPosition,"label-width":"100px",model:e.node,size:"mini"}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"add"===e.action.type,expression:"action.type === 'add'"}],attrs:{label:"BossId",prop:"boss_id",required:"add"===e.action.type}},[a("el-input",{model:{value:e.node.boss_id,callback:function(t){e.$set(e.node,"boss_id",e._n(t))},expression:"node.boss_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"设备Id",prop:"app_id",required:!0}},[a("el-input",{model:{value:e.node.app_id,callback:function(t){e.$set(e.node,"app_id",e._n(t))},expression:"node.app_id"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"edit"===e.action.type,expression:"action.type === 'edit'"}],attrs:{label:"节点id",prop:"node_id",required:"edit"===e.action.type}},[a("el-input",{model:{value:e.node.node_id,callback:function(t){e.$set(e.node,"node_id",e._n(t))},expression:"node.node_id"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"edit"===e.action.type,expression:"action.type === 'edit'"}],attrs:{label:"排序",prop:"sort"}},[a("el-input",{model:{value:e.node.sort,callback:function(t){e.$set(e.node,"sort",e._n(t))},expression:"node.sort"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"add"===e.action.type,expression:"action.type === 'add'"}],attrs:{label:"渠道码",prop:"channel_code",required:"add"===e.action.type}},[a("el-input",{model:{value:e.node.channel_code,callback:function(t){e.$set(e.node,"channel_code",e._n(t))},expression:"node.channel_code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称",prop:"name",required:!0}},[a("el-input",{model:{value:e.node.name,callback:function(t){e.$set(e.node,"name",t)},expression:"node.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"图标",prop:"icon"}},[a("el-input",{model:{value:e.node.icon,callback:function(t){e.$set(e.node,"icon",e._n(t))},expression:"node.icon"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-radio-group",{attrs:{size:"medium"},model:{value:e.node.type,callback:function(t){e.$set(e.node,"type",t)},expression:"node.type"}},[a("el-radio",{attrs:{border:"",label:1}},[e._v("游戏")]),e._v(" "),a("el-radio",{attrs:{border:"",label:2}},[e._v("其他")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{attrs:{size:"medium"},model:{value:e.node.status,callback:function(t){e.$set(e.node,"status",t)},expression:"node.status"}},[a("el-radio",{attrs:{border:"",label:0}},[e._v("下架")]),e._v(" "),a("el-radio",{attrs:{border:"",label:1}},[e._v("正常")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"游戏版本",prop:"game_version"}},[a("el-input",{model:{value:e.node.game_version,callback:function(t){e.$set(e.node,"game_version",t)},expression:"node.game_version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"游戏ID",prop:"game_id"}},[a("el-input",{model:{value:e.node.game_id,callback:function(t){e.$set(e.node,"game_id",e._n(t))},expression:"node.game_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"房间ID",prop:"room_id"}},[a("el-input",{model:{value:e.node.room_id,callback:function(t){e.$set(e.node,"room_id",e._n(t))},expression:"node.room_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"房间列表",prop:"roomIds"}},[a("el-input",{staticClass:"dialog_input",attrs:{type:"textarea",rows:2,placeholder:"用逗号隔开，比如：123,457,457","auto-complete":"false"},model:{value:e.arraystr.room_list,callback:function(t){e.$set(e.arraystr,"room_list",t)},expression:"arraystr.room_list"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"桌子ID",prop:"desk_id"}},[a("el-input",{model:{value:e.node.desk_id,callback:function(t){e.$set(e.node,"desk_id",e._n(t))},expression:"node.desk_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"匹配类型",prop:"queue_type"}},[a("el-input",{model:{value:e.node.queue_type,callback:function(t){e.$set(e.node,"queue_type",e._n(t))},expression:"node.queue_type"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.AddOrEdit}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"medium"},on:{click:function(t){return e.resetForm("node")}}},[e._v("重置")])],1)],1)],1)]],2)])},staticRenderFns:[]};var i=a("VU/8")(s,o,!1,function(e){a("Gxlh")},"data-v-10d57725",null);t.default=i.exports}});
//# sourceMappingURL=10.598084d54c9c560fca18.js.map