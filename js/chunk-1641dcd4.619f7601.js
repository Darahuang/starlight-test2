(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1641dcd4"],{"0824":function(t,a,e){},"159b":function(t,a,e){var s=e("da84"),r=e("fdbc"),i=e("17c2"),n=e("9112");for(var o in r){var c=s[o],l=c&&c.prototype;if(l&&l.forEach!==i)try{n(l,"forEach",i)}catch(d){l.forEach=i}}},"17c2":function(t,a,e){"use strict";var s=e("b727").forEach,r=e("a640"),i=e("ae40"),n=r("forEach"),o=i("forEach");t.exports=n&&o?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"27da":function(t,a,e){"use strict";var s=e("6b93"),r=e.n(s);r.a},"328c":function(t,a,e){"use strict";var s=e("57ac"),r=e.n(s);r.a},"38aa":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container my-4"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md"},[e("span",{staticClass:"badge badge-pill step py-3",class:{"bg-yellow":t.total}},[t._v("1.填寫訂購資料")])]),e("div",{staticClass:"col-md"},[e("span",{staticClass:"badge badge-pill step py-3",class:{"bg-yellow":!1===t.paid}},[t._v("2.金流付款")])]),e("div",{staticClass:"col-md"},[e("span",{staticClass:"badge badge-pill step py-3",class:{"bg-yellow":!0===t.paid}},[t._v("3.完成！")])])])])])},r=[],i={props:["total","paid"]},n=i,o=(e("be37"),e("2877")),c=Object(o["a"])(n,s,r,!1,null,"4c5b5fa3",null);a["a"]=c.exports},4160:function(t,a,e){"use strict";var s=e("23e7"),r=e("17c2");s({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},4275:function(t,a,e){},"57ac":function(t,a,e){},"6b93":function(t,a,e){},8418:function(t,a,e){"use strict";var s=e("c04e"),r=e("9bf2"),i=e("5c6c");t.exports=function(t,a,e){var n=s(a);n in t?r.f(t,n,i(0,e)):t[n]=e}},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),i=e("e8b5"),n=e("861d"),o=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),v=e("b622"),f=e("2d00"),m=v("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",g=f>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=u("concat"),C=function(t){if(!n(t))return!1;var a=t[m];return void 0!==a?!!a:i(t)},_=!g||!b;s({target:"Array",proto:!0,forced:_},{concat:function(t){var a,e,s,r,i,n=o(this),u=d(n,0),v=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?n:arguments[a],C(i)){if(r=c(i.length),v+r>p)throw TypeError(h);for(e=0;e<r;e++,v++)e in i&&l(u,v,i[e])}else{if(v>=p)throw TypeError(h);l(u,v++,i)}return u.length=v,u}})},a434:function(t,a,e){"use strict";var s=e("23e7"),r=e("23cb"),i=e("a691"),n=e("50c4"),o=e("7b0b"),c=e("65f0"),l=e("8418"),d=e("1dde"),u=e("ae40"),v=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,p=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!v||!f},{splice:function(t,a){var e,s,d,u,v,f,b=o(this),C=n(b.length),_=r(t,C),x=arguments.length;if(0===x?e=s=0:1===x?(e=0,s=C-_):(e=x-2,s=p(m(i(a),0),C-_)),C+e-s>h)throw TypeError(g);for(d=c(b,s),u=0;u<s;u++)v=_+u,v in b&&l(d,u,b[v]);if(d.length=s,e<s){for(u=_;u<C-s;u++)v=u+s,f=u+e,v in b?b[f]=b[v]:delete b[f];for(u=C;u>C-s+e;u--)delete b[u-1]}else if(e>s)for(u=C-s;u>_;u--)v=u+s-1,f=u+e-1,v in b?b[f]=b[v]:delete b[f];for(u=0;u<e;u++)b[u+_]=arguments[u+2];return b.length=C-s+e,d}})},a640:function(t,a,e){"use strict";var s=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&s((function(){e.call(null,a||function(){throw 1},1)}))}},b7c8:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Menu",{attrs:{numberCart:t.cartNumber}}),e("AlertMessage"),e("CheckoutStep",{attrs:{total:t.cart.total}}),e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container"},[0!==t.cart.total?e("div",{staticClass:"my-4 row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card"},[t._m(0),e("div",{staticClass:"collapse show",attrs:{id:"cartInfo"}},[e("div",{staticClass:"card-body"},[e("table",{staticClass:"table table-hover"},[t._m(1),t._l(t.cart.carts,(function(a){return e("tbody",{key:a.id},[e("tr",[e("td",{staticClass:"align-middle"},[e("img",{attrs:{src:a.product.imageUrl,width:"60px",height:"60px",alt:"",srcset:""}})]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?e("div",{staticClass:"text-success"},[t._v(" 已套用折扣碼 ")]):t._e()]),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-prepend",attrs:{id:"button-addon3"}},[e("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.changeQty(a.id,a.product.id,a.qty,!1)}}},[t._v(" - ")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:a.qty,expression:"item.qty",modifiers:{number:!0}}],staticClass:"form-control qty-input text-center",attrs:{type:"text",placeholder:"","aria-label":"Example text with two button addons","aria-describedby":"button-addon3"},domProps:{value:a.qty},on:{input:function(e){e.target.composing||t.$set(a,"qty",t._n(e.target.value))},blur:function(a){return t.$forceUpdate()}}}),e("div",{staticClass:"input-group-append",attrs:{id:"button-addon4"}},[e("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.changeQty(a.id,a.product.id,a.qty,!0)}}},[t._v(" + ")])])])])]),e("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("currencyFilter")(a.final_total))+" ")]),e("td",{staticClass:"align-middle text-right"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteCartItem(a.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])])])])})),e("tfoot",{staticClass:"bg-light"},[e("tr",[e("td",{staticClass:"text-right border-top-0",attrs:{colspan:"4"}},[t._v("總計")]),e("td",{staticClass:"h5 text-danger border-top-0"},[t._v(" "+t._s(t.cart.final_total)+" ")])])])],2)])])]),e("h2",{staticClass:"text-center my-4 text-primary font-weight-bolder"},[t._v(" 訂單資訊 ")]),e("form",{on:{submit:function(a){return a.preventDefault(),t.createOrder(a)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"email",placeholder:"請輸入Email"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),t.errors.has("email")?e("span",{staticClass:"text-danger"},[t._v("請輸入Email")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"name",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),t.errors.has("name")?e("span",{staticClass:"text-danger"},[t._v("請輸入姓名")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"tel"}},[t._v("電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required|myPhone",expression:"'required|myPhone'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("tel")},attrs:{type:"text",name:"tel",id:"tel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),t.errors.has("tel")?e("span",{staticClass:"text-danger"},[t._v("請輸入電話")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[t._v("地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"address",id:"address",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),t.errors.has("address")?e("span",{staticClass:"text-danger"},[t._v("請輸入地址")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"comment"}},[t._v("備註")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"5",rows:"5"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("div",{staticClass:"d-flex justify-content-between mt-4"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.backtoCart}},[t._v(" 返回購物車 ")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.createOrder}},[t._v(" 送出訂單 ")])])])])]):e("div",{staticClass:"row justify-content-center my-5"},[e("div",{staticClass:"col-md-8 text-center"},[e("p",{staticClass:"text-success font-weight-bolder h6"},[t._v(" 您的購物車內還沒有任何商品！ "),e("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.toCustomerOrders}},[t._v(" 繼續逛逛 ")])])])])]),e("footer",[e("Footer")],1)],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[e("button",{staticClass:"btn btn-link text-info text-decoration-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#cartInfo","aria-expanded":"false","aria-controls":"collapseExample"}},[t._v(" 購物車資訊 "),e("i",{staticClass:"fas fa-caret-down"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th"),e("th",[t._v("商品名稱")]),e("th",[t._v("數量")]),e("th",{attrs:{width:"15%"}},[t._v("單價")]),e("th",[t._v("刪除")])])])}],i=(e("99af"),e("fb62")),n=e("38aa"),o=e("fd2d"),c={components:{Menu:i["a"],CheckoutStep:n["a"],Footer:o["a"]},data:function(){return{cart:{},isLoading:!1,num:6,coupon_code:"",cartNumber:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart");t.isLoading=!0,t.axios.get(a).then((function(a){t.cart=a.data.data,t.num=a.data.data.qty,console.log(t.cart),t.cartNumber=a.data.data.carts.qty,t.isLoading=!1,t.$bus.$emit("cart",t.cartNumber)}))},backtoCart:function(){var t=this;t.$router.push("/cart")},createOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/order");t.$validator.validate().then((function(e){e&&t.axios.post(a,{data:t.form}).then((function(a){a.data.success&&t.$router.push("/checkout/".concat(a.data.orderId))}))}))},deleteCartItem:function(t){var a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart/").concat(t);a.axios.delete(e).then((function(){a.getCart()}))},toCustomerOrders:function(){var t=this;t.$router.push("/customer_orders")},changeQty:function(t,a,e,s){var r,i=this;i.isLoading=!0,r=!0===s?e+1:1===e?1:e-1;var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart/").concat(t),o="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart"),c={product_id:a,qty:r};i.axios.all([i.axios.delete(n),i.axios.post(o,{data:c})]).then(i.axios.spread((function(){i.getCart(),i.isLoading=!1})))}},created:function(){var t=this;t.getCart()}},l=c,d=(e("27da"),e("2877")),u=Object(d["a"])(l,s,r,!1,null,"2d23633a",null);a["default"]=u.exports},be37:function(t,a,e){"use strict";var s=e("4275"),r=e.n(s);r.a},db6f:function(t,a,e){"use strict";var s=e("0824"),r=e.n(s);r.a},fb62:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sticky-top"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand box-shadow bg-transparent",attrs:{to:"/"}},[t._v("Starlight")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[e("ul",{staticClass:"navbar-nav align-items-center w-100"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v(" 關於我們 "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/news"}},[t._v("最新消息")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/customer_orders"}},[t._v("餐點介紹")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/customize"}},[t._v("訂製蛋糕")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/check_orders"}},[t._v("查看訂單")])],1),e("li",{staticClass:"nav-item ml-lg-auto"},[e("router-link",{staticClass:"nav-link text-secondary h5",attrs:{to:"/login"}},[e("i",{staticClass:"fas fa-cog"})])],1),e("li",{staticClass:"nav-item"},[e("div",{staticClass:"dropdown"},[e("a",{staticClass:"nav-link text-secondary h5",attrs:{href:"#",role:"button",id:"fav","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-heart"}),t.localList?e("span",{staticClass:"badge badge-danger"},[t._v(t._s(t.localList.length))]):e("span",{staticClass:"badge badge-danger"},[t._v("0")])]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"fav"}},[t.localList?e("div",{staticClass:"table-responsive p-3 font-size"},[e("h6",[t._v("收藏清單")]),e("table",{staticClass:"table table-hover width "},[e("tbody",t._l(t.localList,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"align-middle",attrs:{width:"20%"}},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteFavItem(a,s)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.title)+" ")]),e("td"),e("td",[e("a",{staticClass:"d-block",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addFavtoCart(a.id,t.qty=1)}}},[e("i",{staticClass:"fas fa-shopping-cart fa-2x"})])])])})),0)])]):e("div",{staticClass:"width p-3"},[e("div",{staticClass:"text-center"},[e("h6",{staticClass:"text-primary"},[t._v("您的收藏清單目前是空的")]),e("router-link",{staticClass:"btn btn-heavy btn-sm",attrs:{to:"customer_orders"}},[t._v("繼續逛逛")])],1)])])])]),e("li",{staticClass:"nav-item"},[e("div",{staticClass:"dropdown"},[e("a",{staticClass:"nav-link text-secondary h5",attrs:{href:"#",role:"button",id:"cart","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-shopping-cart"}),t.number?e("span",{staticClass:"badge badge-danger"},[t._v(t._s(t.number))]):e("span",{staticClass:"badge badge-danger"},[t._v("0")])]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"cart"}},[0!==t.cart.total?e("div",{staticClass:"table-responsive p-3 font-size"},[e("h6",[t._v("選購商品")]),e("table",{staticClass:"table table-hover width "},[e("tbody",t._l(t.cart.carts,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?e("div",{staticClass:"text-success"},[t._v("已套用折扣碼")]):t._e()]),e("td",{staticClass:"align-middle",attrs:{width:"20%"}},[t._v(t._s(a.qty)+t._s(a.product.unit))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currencyFilter")(a.final_total)))]),e("td"),e("td",{staticClass:"align-middle"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteCartItem(a.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])])])})),0),0!==t.cart.total?e("tfoot",{staticClass:"bg-light"},[e("tr",[e("td",{staticClass:"text-right border-top-0",attrs:{colspan:"4"}},[t._v("總計")]),e("td",{staticClass:"h6 text-danger border-top-0"},[t._v(t._s(t._f("currencyFilter")(t.cart.final_total)))])])]):t._e()]),e("router-link",{staticClass:"btn btn-block btn-primary",attrs:{to:"checkout"}},[t._v("結帳去")])],1):e("div",{staticClass:"width p-3"},[e("div",{staticClass:"text-center"},[e("h6",{staticClass:"text-primary"},[t._v("您的購物車目前是空的")]),e("router-link",{staticClass:"btn btn-heavy btn-sm",attrs:{to:"customer_orders"}},[t._v("繼續逛逛")])],1)])])])])])])],1)])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],i=(e("99af"),e("4160"),e("a434"),e("159b"),{props:["localdata"],data:function(){return{number:"",cart:{},favList:[],favnumber:"",localList:[],localStorageData:JSON.parse(localStorage.getItem("favItems"))||[],products:[],saveItems:[]}},methods:{updateCart:function(t){this.number=t},updateFav:function(t){this.favnumber=t},updateFavList:function(t){this.localList=t},getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart");t.axios.get(a).then((function(a){t.cart=a.data.data,t.number=a.data.data.carts.length}))},deleteCartItem:function(t){var a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart/").concat(t);a.axios.delete(e).then((function(t){a.getCart(),a.$bus.$emit("message:push",t.data.message,"warning")}))},deleteFavItem:function(t,a){var e=this;t.favItem=!1,e.localList.splice(a,1),e.$bus.$emit("deleteFav",this.localList)},addFavtoCart:function(t,a){var e=this;console.log(t,a),e.$bus.$emit("addtoCart",t,a)},getProducts:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/products/all");t.isLoading=!0,t.axios.get(a).then((function(a){t.products=a.data.products,t.products.forEach((function(a){t.$set(a,"favItem",!1)})),t.pagination=a.data.pagination,t.isLoading=!1,t.localStorageData=JSON.parse(localStorage.getItem("favItems")),t.localStorageData.forEach((function(a){t.products.forEach((function(e){a.id===e.id&&(e.favItem=!0,t.localList.push(e),t.updateFav(t.localList.length))}))}))}))}},created:function(){var t=this;t.$bus.$on("cart",(function(a){t.updateCart(a),t.getCart()})),t.$bus.$on("fav",(function(a){t.updateFav(a)})),t.$bus.$on("favList",(function(a){t.updateFavList(a),console.log(a)})),t.getCart(),t.getProducts()}}),n=i,o=(e("328c"),e("2877")),c=Object(o["a"])(n,s,r,!1,null,"e8507c48",null);a["a"]=c.exports},fd2d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"bg-white mt-5 footer-height"},[s("div",{staticClass:"text-center text-secondary "},[s("img",{staticClass:"img-fluid",staticStyle:{width:"150px",height:"150px"},attrs:{src:e("fef8"),alt:"",srcset:""}}),s("p",[t._v("© 2020 Starlight* All Rights Reserved")]),s("div",[s("ul",{staticClass:"list-unstyled d-flex justify-content-center"},[s("li",{staticClass:"mr-2"},[s("a",{staticClass:"text-accent",attrs:{href:"# "}},[s("i",{staticClass:"fab fa-facebook-square fa-2x"})])]),s("li",{staticClass:"mr-2"},[s("a",{staticClass:"text-accent",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-instagram instagram fa-2x"})])]),s("li",{staticClass:"mr-2"},[s("a",{staticClass:"text-success",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-line fa-2x"})])])])])]),s("div",{staticClass:"bg-slight mt-3 py-4"},[s("div",{staticClass:"text-center"},[s("span",[t._v("資料、圖片來源皆來自網路，僅用來做為學習用途。")])])])])])}],i=(e("db6f"),e("2877")),n={},o=Object(i["a"])(n,s,r,!1,null,"3925e17b",null);a["a"]=o.exports},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fef8:function(t,a,e){t.exports=e.p+"img/logo.f20dc4a5.svg"}}]);
//# sourceMappingURL=chunk-1641dcd4.619f7601.js.map