(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["products"],{ed84:function(t,r,e){"use strict";e.r(r);var c=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"products"}},[e("b-container",{staticClass:"contentMt"},[e("h1",{staticClass:"text-center wordColor mb-5",attrs:{id:"title"}},[t._v("商品列表")]),e("b-row",{staticClass:"d-flex justify-content-center my-3"},[e("b-tabs",{staticClass:"text-center",attrs:{pills:""}},[e("b-tab",{attrs:{title:"全部商品",active:""},on:{click:function(r){t.filter=""}}}),e("b-tab",{attrs:{title:"經典鮮花"},on:{click:function(r){t.filter="經典鮮花"}}}),e("b-tab",{attrs:{title:"蘭花盆景"},on:{click:function(r){t.filter="蘭花盆景"}}}),e("b-tab",{attrs:{title:"鮮花盆花"},on:{click:function(r){t.filter="鮮花盆花"}}}),e("b-tab",{attrs:{title:"綠意盎然"},on:{click:function(r){t.filter="綠意盎然"}}})],1)],1),e("b-row",t._l(t.fillterItems,(function(t){return e("b-col",{key:t._id,attrs:{cols:"12",md:"6",lg:"3"}},[e("ProductCard",{attrs:{product:t}})],1)})),1)],1)],1)},n=[],i=e("1da1"),a=(e("96cf"),e("4de4"),e("d3b7"),function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"productCard"}},[e("b-card",{staticClass:"mt-5",attrs:{"img-top":"","img-src":t.product.image}},[e("b-card-body",[e("b-card-title",[e("router-link",{attrs:{to:"/eachproduct/"+t.product._id}},[t._v(t._s(t.product.name))])],1),e("b-card-sub-title",[t._v(t._s("$"+t.product.price))])],1)],1)],1)}),s=[],o={props:{product:{type:Object,required:!0}}},l=o,u=e("2877"),d=Object(u["a"])(l,a,s,!1,null,null,null),p=d.exports,f={components:{ProductCard:p},data:function(){return{products:[],filter:""}},computed:{fillterItems:function(){var t=this;return this.products.filter((function(r){return""===t.filter||r.category===t.filter}))}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var e,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.api.get("/products");case 3:e=r.sent,c=e.data,t.products=c.result,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"商品取得失敗"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},b=f,m=Object(u["a"])(b,c,n,!1,null,null,null);r["default"]=m.exports}}]);
//# sourceMappingURL=products.54b0bd26.js.map