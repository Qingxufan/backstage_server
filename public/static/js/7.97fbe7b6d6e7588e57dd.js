webpackJsonp([7],{"2X54":function(e,t){},s2eR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"allPage"},[a("div",{staticClass:"core_container"},[a("div",{staticClass:"form_container"},[a("el-form",{staticClass:"demo-form-inline form_container_header",attrs:{inline:!0,model:e.requestParam,size:"mini"}},[a("el-form-item",{attrs:{label:"用户ID",required:!0}},[a("el-input",{model:{value:e.requestParam.uuid,callback:function(t){e.$set(e.requestParam,"uuid",e._n(t))},expression:"requestParam.uuid"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getUC}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.add}},[e._v("新增")])],1)],1)],1),e._v(" "),a("div",{staticClass:"showDataTab"},[a("el-form",{ref:"UC",staticClass:"formStyle text_common",staticStyle:{},attrs:{model:e.responseData,"label-width":"100px",size:"mini","v-show":e.showFrom}},[a("el-form-item",{attrs:{label:"用户ID",prop:"uuid",required:!0}},[a("el-input",{model:{value:e.responseData.uuid,callback:function(t){e.$set(e.responseData,"uuid",e._n(t))},expression:"responseData.uuid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"控制总目标",prop:"tar",required:!0}},[a("el-input",{model:{value:e.responseData.tar,callback:function(t){e.$set(e.responseData,"tar",e._n(t))},expression:"responseData.tar"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"控制等级",prop:"level",required:!0}},[a("el-input",{model:{value:e.responseData.level,callback:function(t){e.$set(e.responseData,"level",e._n(t))},expression:"responseData.level"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"当前进度",prop:"now"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.responseData.now,callback:function(t){e.$set(e.responseData,"now",e._n(t))},expression:"responseData.now"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.doCommit}},[e._v(e._s(e.action.title))]),e._v(" "),a("el-button",{on:{click:e.resetFrom}},[e._v("重置")])],1)],1)],1)])])},staticRenderFns:[]};var r=a("VU/8")({computed:{},data:function(){return{labelPosition:"right",requestParam:{uuid:null},responseData:{uuid:null,tar:null,level:null,now:null},action:{type:"update",title:"修改"},showFrom:!1,formLabelWidth:"20%"}},methods:{getUC:function(){var e=this,t=this;t.responseData=[],this.$api.game.getUC(this.requestParam).then(function(a){!0===a.data.success?(t.responseData=a.data.data,t.responseData.uuid=t.requestParam.uuid,t.requestParam.uuid=null):e.$message({showClose:!0,message:"获取用户调控信息失败",type:"error"})})},doCommit:function(){var e=this,t=this;this.$api.game.setUC({uuid:this.responseData.uuid,tar:this.responseData.tar,level:this.responseData.level}).then(function(a){var s="add"==t.action.type?"新增成功!":"修改成功!",r="add"==t.action.type?"新增失败!":"修改失败!";!0===a.data.success?e.$message({showClose:!0,message:s,type:"success"}):e.$message({showClose:!0,message:r,type:"error"})})},add:function(){this.resetFrom(),this.action.type="add",this.action.title="新增"},resetFrom:function(){this.responseData={uuid:null,tar:null,level:null,now:null}}}},s,!1,function(e){a("2X54")},"data-v-746d0bb3",null);t.default=r.exports}});
//# sourceMappingURL=7.97fbe7b6d6e7588e57dd.js.map