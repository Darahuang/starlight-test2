(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1880fd9e"],{"3adf":function(t,s,e){"use strict";var a=e("ab85"),r=e.n(a);r.a},aa92:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("form",{staticClass:"form-signin mt-5",on:{submit:function(s){return s.preventDefault(),t.login(s)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-bolder text-secondary text-center"},[t._v("登入後台管理")]),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}}),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),e("button",{staticClass:"btn btn-lg btn-primary btn-block mt-3",attrs:{type:"submit"}},[t._v("Log in")]),e("p",{staticClass:"mt-3 text-muted"},[t._v("© 2020 Starlight* All Rights Reserved")]),e("router-link",{staticClass:"text-secondary",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-arrow-left"}),t._v(" 回到 Starlight ")])],1)])},r=[],n={data:function(){return{user:{username:"",password:""}}},methods:{login:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/admin/signin");t.axios.post(s,t.user).then((function(s){s.data.success&&t.$router.push("/admin/products")}))}}},o=n,i=(e("3adf"),e("2877")),u=Object(i["a"])(o,a,r,!1,null,"9b895514",null);s["default"]=u.exports},ab85:function(t,s,e){}}]);
//# sourceMappingURL=chunk-1880fd9e.b170b9e7.js.map