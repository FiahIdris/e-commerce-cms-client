(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2100fd36"],{2735:function(t,e,a){},2741:function(t,e,a){"use strict";var r=a("e22d"),n=a.n(r);n.a},"4a33":function(t,e,a){"use strict";var r=a("2735"),n=a.n(r);n.a},6617:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("div",{staticClass:"container"},[a("div",{staticClass:"col-sm-12 col-lg-6"},[t.image_url?a("img",{attrs:{src:t.image_url}}):a("h4",[t._v("Your product image will appear here")])]),a("div",{staticClass:"col-sm-12 col-lg-6 form-add"},[a("form",{on:{submit:t.newProduct}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("product name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("br"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"price"}},[t._v("price:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),a("br"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"stock"}},[t._v("stock:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.stock,expression:"stock"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.stock},on:{input:function(e){e.target.composing||(t.stock=e.target.value)}}})]),a("br"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image_url"}},[t._v("image_url:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.image_url,expression:"image_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.image_url},on:{input:function(e){e.target.composing||(t.image_url=e.target.value)}}})]),a("br"),a("div",{staticClass:"d-flex div-btn"},[a("button",{staticClass:"btn"},[t._v("Add")]),a("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[t._v("Cancel")])])])])])],1)},n=[],s=(a("b0c0"),a("f4dd")),o={name:"AddForm",components:{Navbar:s["a"]},data:function(){return{name:"",price:0,stock:0,image_url:""}},methods:{cancel:function(){this.$router.push("/products")},newProduct:function(){var t={name:this.name,price:this.price,stock:this.stock,image_url:this.image_url};this.$store.dispatch("newProduct",t),this.$router.push("/products")}}},i=o,c=(a("4a33"),a("2877")),u=Object(c["a"])(i,r,n,!1,null,"16d50834",null);e["default"]=u.exports},b0c0:function(t,e,a){var r=a("83ab"),n=a("9bf2").f,s=Function.prototype,o=s.toString,i=/^\s*function ([^ (]*)/,c="name";r&&!(c in s)&&n(s,c,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},e22d:function(t,e,a){},f4dd:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid d-flex justify-content-between"},[a("div",{staticClass:"d-flex"},[a("router-link",{attrs:{to:{name:"products"}}},[a("h3",[t._v("My Products")])]),a("router-link",{attrs:{to:{name:"products-add"}}},[a("a",{attrs:{href:""}},[a("i",{staticClass:"fas fa-cart-plus fa-2x"})])])],1),a("div",{staticClass:"nav-right"},[a("router-link",{attrs:{to:{name:"login"}}},[a("h3",{on:{click:function(e){return e.preventDefault(),t.signOut(e)}}},[t._v("Sign out")])])],1)])},n=[],s={name:"Navigation",methods:{signOut:function(){localStorage.clear(),this.$router.push("/login")}}},o=s,i=(a("2741"),a("2877")),c=Object(i["a"])(o,r,n,!1,null,"258b5aa6",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-2100fd36.5a1e377d.js.map