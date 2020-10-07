(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e840659"],{1799:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-content-center mt-3"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!e.childPagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.updatePage(e.childPagination.current_page-1)}}},[e._v("Previous")])]),e._l(e.childPagination.total_pages,(function(t){return a("li",{key:t,staticClass:"page-item",class:{active:e.childPagination.current_page===t}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.updatePage(t)}}},[e._v(e._s(t))])])})),a("li",{staticClass:"page-item",class:{disabled:!e.childPagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.updatePage(e.childPagination.current_page+1)}}},[e._v("Next")])])],2)])])},r=[],i={props:["childPagination"],methods:{updatePage:function(e){this.$emit("emitPage",e)}}},n=i,l=a("2877"),d=Object(l["a"])(n,s,r,!1,null,null,null);t["a"]=d.exports},efd9:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("AlertMessage"),a("loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}}),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table mt-4"},[e._m(0),e.orders.length?a("tbody",e._l(e.sortOrder,(function(t,s){return a("tr",{key:s,class:{"text-secondary":!t.is_paid}},[a("td",{staticClass:"d-none d-md-table-cell"},[e._v(e._s(e._f("dateFilter")(t.create_at)))]),a("td",{staticClass:"d-none d-md-table-cell"},[e._v(e._s(t.user.email))]),a("td",[a("ul",{staticClass:"list-unstyled"},e._l(t.products,(function(t,s){return a("li",{key:s},[e._v(e._s(t.product.title)+" 數量 "+e._s(t.qty)+" "+e._s(t.product.unit))])})),0)]),a("td",{staticClass:"text-right"},[e._v(e._s(e._f("currencyFilter")(t.total)))]),a("td",[t.is_paid?a("strong",{staticClass:"text-success"},[e._v("已付款")]):a("span",{staticClass:"text-muted"},[e._v("未付款")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(a){return e.openOrderModal(t)}}},[e._v("編輯")])])])})),0):e._e()])]),a("Pagination",{attrs:{childPagination:e.pagination},on:{emitPage:e.getOrder}}),a("div",{staticClass:"modal fade",attrs:{id:"orderModal","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[e._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tempOrder.user.name,expression:"tempOrder.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("name")},attrs:{type:"text",name:"name",id:"name",placeholder:"請輸入姓名"},domProps:{value:e.tempOrder.user.name},on:{input:function(t){t.target.composing||e.$set(e.tempOrder.user,"name",t.target.value)}}}),e.errors.has("name")?a("span",{staticClass:"text-danger"},[e._v("請輸入姓名")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tempOrder.user.email,expression:"tempOrder.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("email")},attrs:{type:"email",name:"email",id:"email",placeholder:"請輸入Email"},domProps:{value:e.tempOrder.user.email},on:{input:function(t){t.target.composing||e.$set(e.tempOrder.user,"email",t.target.value)}}}),e.errors.has("email")?a("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tel"}},[e._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tempOrder.user.tel,expression:"tempOrder.user.tel"},{name:"validate",rawName:"v-validate",value:"required|myPhone",expression:"'required|myPhone'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("tel")},attrs:{type:"tel",name:"tel",id:"tel",placeholder:"請輸入電話"},domProps:{value:e.tempOrder.user.tel},on:{input:function(t){t.target.composing||e.$set(e.tempOrder.user,"tel",t.target.value)}}}),e.errors.has("tel")?a("span",{staticClass:"text-danger"},[e._v("請輸入電話")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[e._v("地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tempOrder.user.address,expression:"tempOrder.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("name")},attrs:{type:"text",name:"address",id:"address",placeholder:"請輸入地址"},domProps:{value:e.tempOrder.user.address},on:{input:function(t){t.target.composing||e.$set(e.tempOrder.user,"address",t.target.value)}}}),e.errors.has("address")?a("span",{staticClass:"text-danger"},[e._v("請輸入地址")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[e._v("應付金額")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tempOrder.total,expression:"tempOrder.total"}],staticClass:"form-control",attrs:{type:"number",id:"address",placeholder:"請輸入標題"},domProps:{value:e.tempOrder.total},on:{input:function(t){t.target.composing||e.$set(e.tempOrder,"total",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"is_paid"}},[e._v("付款狀態:")]),e.tempOrder.is_paid?a("span",[e._v("已付款")]):e._e(),e.tempOrder.is_paid?e._e():a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tempOrder.is_paid,expression:"tempOrder.is_paid"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_paid","true-value":1,"false-value":0},domProps:{checked:Array.isArray(e.tempOrder.is_paid)?e._i(e.tempOrder.is_paid,null)>-1:e._q(e.tempOrder.is_paid,1)},on:{change:function(t){var a=e.tempOrder.is_paid,s=t.target,r=s.checked?1:0;if(Array.isArray(a)){var i=null,n=e._i(a,i);s.checked?n<0&&e.$set(e.tempOrder,"is_paid",a.concat([i])):n>-1&&e.$set(e.tempOrder,"is_paid",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.tempOrder,"is_paid",r)}}}),a("span",[e._v("未付款")])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.updateOrder}},[e._v("確認")])])])])])],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{staticClass:"d-none d-md-table-cell"},[e._v("購買時間")]),a("th",{staticClass:"d-none d-md-table-cell"},[e._v("Email")]),a("th",[e._v("購買款項")]),a("th",[e._v("應付金額")]),a("th",[e._v("是否付款")]),a("th",[e._v("編輯")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v("訂單資訊")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])}],i=(a("99af"),a("5530")),n=a("1157"),l=a.n(n),d=a("1799"),o=a("56a6"),c={components:{Pagination:d["a"],AlertMessage:o["a"]},data:function(){return{orders:[],isLoading:!1,pagination:{},tempOrder:{user:{}}}},methods:{getOrder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/admin/orders?page=").concat(e);t.isLoading=!0,t.axios.get(a).then((function(e){t.orders=e.data.orders,t.pagination=e.data.pagination,t.isLoading=!1}))},openOrderModal:function(e){var t=this;t.tempOrder=Object(i["a"])({},e),l()("#orderModal").modal("show")},updateOrder:function(){var e=this,t="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/admin/order/").concat(e.tempOrder.id);e.$validator.validate().then((function(a){a?e.axios.put(t,{data:e.tempOrder}).then((function(t){t.data.success&&(l()("#orderModal").modal("hide"),e.getOrder(),e.$bus.$emit("message:push",t.data.message,"warning"))})):(l()("#orderModal").modal("hide"),e.getOrder())}))}},computed:{sortOrder:function(){var e=this,t=[];return e.orders.length&&(t=e.orders.sort((function(e,t){var a=e.is_paid?1:0,s=t.is_paid?1:0;return s-a}))),t}},created:function(){this.getOrder()}},m=c,p=a("2877"),u=Object(p["a"])(m,s,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7e840659.12c0009c.js.map