webpackJsonp([9],{170:function(e,n,t){t(216);var o=t(5)(t(190),t(232),null,null);e.exports=o.exports},190:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{phone_input:!1,countDown:"",formItem:{phone:"",yzm:"",password:"",rePw:""}}},methods:{handlePhone:function(){this.phone_input=/^1[0-9]{10}$/.test(this.formItem.phone)},handleYzm:function(){function e(){setTimeout(function(){n.countDown=t--,t>0?e():(n.phone_input=!0,n.countDown="")},1e3)}var n=this,t=60;n.countDown=t--,this.phone_input=!1,e()},handleSubmit:function(e){}}}},203:function(e,n,t){n=e.exports=t(164)(),n.push([e.i,".reg{width:80%;margin:100px auto 0;font-size:16px}.reg .ivu-icon{font-size:1.3em}.reg .form-group{display:-webkit-box;display:-ms-flexbox;display:flex}.reg .form-group .ivu-form-item{-webkit-box-flex:1;-ms-flex:1;flex:1}.reg .form-group .ivu-btn{height:32px}.reg .form-group .ivu-btn:active{opacity:.8}.reg .check,.reg .check .wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.reg .check .wrap{background-color:#edb718;border-radius:50%;width:16px;height:16px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.reg .check span{font-size:12px;margin-left:5px}.reg .getYzm:active{opacity:.8}","",{version:3,sources:["C:/Users/zhouyt/Documents/coding/second-car/src/components/reg/index.vue"],names:[],mappings:"AACA,KACE,UAAW,AACX,oBAAqB,AACrB,cAAgB,CACjB,AACD,eACI,eAAiB,CACpB,AACD,iBACI,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACjB,AACD,gCACM,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACrB,AACD,0BACM,WAAa,CAClB,AACD,iCACQ,UAAY,CACnB,AASD,8BAPI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAgB/B,AAdD,kBACM,yBAA0B,AAC1B,kBAAmB,AACnB,WAAY,AACZ,YAAa,AAIb,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CAIrC,AACD,iBACM,eAAgB,AAChB,eAAiB,CACtB,AACD,oBACI,UAAY,CACf",file:"index.vue",sourcesContent:["\n.reg {\n  width: 80%;\n  margin: 100px auto 0;\n  font-size: 16px;\n}\n.reg .ivu-icon {\n    font-size: 1.3em;\n}\n.reg .form-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.reg .form-group .ivu-form-item {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n.reg .form-group .ivu-btn {\n      height: 32px;\n}\n.reg .form-group .ivu-btn:active {\n        opacity: .8;\n}\n.reg .check {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.reg .check .wrap {\n      background-color: #edb718;\n      border-radius: 50%;\n      width: 16px;\n      height: 16px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.reg .check span {\n      font-size: 12px;\n      margin-left: 5px;\n}\n.reg .getYzm:active {\n    opacity: .8;\n}\n"],sourceRoot:""}])},216:function(e,n,t){var o=t(203);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(165)("7d1851bb",o,!0)},232:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"reg"},[t("Form",{ref:"formInline",attrs:{model:e.formItem}},[t("div",{staticClass:"form-group"},[t("Form-item",{attrs:{prop:"phone"}},[t("Input",{attrs:{type:"text",placeholder:"请输入手机号"},on:{input:e.handlePhone},model:{value:e.formItem.phone,callback:function(n){e.formItem.phone=n},expression:"formItem.phone"}},[t("Icon",{attrs:{type:"iphone"},slot:"prepend"}),e._v(" "),t("span",{slot:"prepend"},[e._v(" 手机号")])],1)],1),e._v(" "),t("Button",{attrs:{type:"info",disabled:!e.phone_input},on:{click:e.handleYzm},slot:"append"},[e._v(e._s(e.countDown?e.countDown+"秒后重发":"获取验证码"))])],1),e._v(" "),t("Form-item",{attrs:{prop:"yzm"}},[t("Input",{attrs:{type:"text",placeholder:"请输入验证码"},model:{value:e.formItem.yzm,callback:function(n){e.formItem.yzm=n},expression:"formItem.yzm"}},[t("Icon",{attrs:{type:"email"},slot:"prepend"}),e._v(" "),t("span",{slot:"prepend"},[e._v(" 验证码")])],1)],1),e._v(" "),t("Form-item",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.formItem.password,callback:function(n){e.formItem.password=n},expression:"formItem.password"}},[t("Icon",{attrs:{type:"ios-locked-outline"},slot:"prepend"}),e._v(" "),t("span",{slot:"prepend"},[e._v(" 密码")])],1)],1),e._v(" "),t("Form-item",{attrs:{prop:"rePassword"}},[t("Input",{attrs:{type:"password",placeholder:"再次输入密码"},model:{value:e.formItem.rePw,callback:function(n){e.formItem.rePw=n},expression:"formItem.rePw"}},[t("Icon",{attrs:{type:"ios-locked-outline"},slot:"prepend"}),e._v(" "),t("span",{slot:"prepend"},[e._v(" 确认")])],1)],1),e._v(" "),t("Form-item",[t("Button",{attrs:{type:"primary",long:""},on:{click:e.handleSubmit}},[e._v("注册")])],1),e._v(" "),t("div",{staticClass:"check"},[t("div",{staticClass:"wrap"},[t("Icon",{attrs:{type:"checkmark-round",size:"12",color:"#fff"}})],1),e._v(" "),t("span",[e._v("我已经阅读并同意 "),t("a",{attrs:{href:"#server-terms"}},[e._v("《宇涛租车会员服务条款》")])])])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.aeaae33c1ef6b1886de8.js.map