webpackJsonp([2],{"+ptz":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"container"},[i("h2",{staticClass:"title"},[e._v("Search in Space!")]),i("form",{on:{submit:function(t){t.preventDefault(),e.submit(e.query)}}},[i("label",{staticClass:"subtitle"},[e._v("Type in what you are looking for:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"sun",autofocus:""},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),i("i",{staticClass:"material-icons search",on:{click:function(t){e.submit(e.query)}}},[e._v("search")])])])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};t.a=s},"/TYz":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("T/Vd"),s=i("+ptz"),o=!1;var a=function(e){o||i("WmNp")},r=i("VU/8")(n.a,s.a,!1,a,null,null);r.options.__file="pages/index.vue",t.default=r.exports},"T/Vd":function(e,t,i){"use strict";t.a={components:{},data:function(){return{query:""}},methods:{submit:function(e){this.$router.push("results/"+this.query)}}}},WmNp:function(e,t,i){var n=i("fGEi");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("1ad0dd72",n,!1)},fGEi:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])}});