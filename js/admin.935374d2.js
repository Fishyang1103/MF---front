(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"129b":function(e,t,r){},"2e68":function(e,t,r){"use strict";r("806d")},"4cf5":function(e,t,r){},"67fb":function(e,t,r){"use strict";r("4cf5")},"806d":function(e,t,r){},"8e30":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content",attrs:{id:"adminorders"}},[r("b-row",{staticClass:"mx-0"},e._l(e.orders,(function(t){return"null"!==t.userInfo.image?r("b-col",{key:t._id,attrs:{cols:"12",md:"6",lg:"3"}},[r("SendCard",{attrs:{order:t}})],1):e._e()})),1)],1)},n=[],o=r("1da1"),i=(r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"sendCard"}},[r("p",{staticClass:"mt-0"},[e._v(e._s(e.order.userInfo.name)),r("b-card",{staticClass:"mt-2 send",attrs:{"img-top":"","img-src":e.order.userInfo.image}},[r("b-card-text",{staticStyle:{"white-space":"pre"}},[e._v(e._s(e.order.userInfo.remark))])],1)],1)])}),s=[],l={props:{order:{type:Object,required:!0}}},c=l,u=(r("d197"),r("2877")),d=Object(u["a"])(c,i,s,!1,null,null,null),m=d.exports,f={components:{SendCard:m},data:function(){return{orders:[]}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/orders/all",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,a=r.data,e.orders=a.result,console.log(e.orders),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得卡片失敗"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},p=f,b=(r("67fb"),Object(u["a"])(p,a,n,!1,null,null,null));t["default"]=b.exports},9595:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content mt-2",attrs:{id:"adminorders"}},[r("b-table",{ref:"table",attrs:{items:e.orders,fields:e.fields,stacked:"md"},scopedSlots:e._u([{key:"cell(user)",fn:function(t){return[e._v(e._s(t.item.user.account))]}},{key:"cell(name)",fn:function(t){return[e._v(e._s(t.item.userInfo.name))]}},{key:"cell(phone)",fn:function(t){return[e._v(e._s(t.item.userInfo.phone))]}},{key:"cell(address)",fn:function(t){return[e._v(e._s(t.item.userInfo.address))]}},{key:"cell(courier)",fn:function(t){return[e._v(e._s(t.item.userInfo.courier))]}},{key:"cell(deliveryDate)",fn:function(t){return[e._v(e._s(t.item.userInfo.deliveryDate))]}},{key:"cell(deliveryTime)",fn:function(t){return[e._v(e._s(t.item.userInfo.deliveryTime))]}},{key:"cell(date)",fn:function(t){return[e._v(e._s(new Date(t.item.date).toLocaleString("zh-tw")))]}},{key:"cell(products)",fn:function(t){return[r("ul",e._l(t.item.products,(function(t){return r("li",{key:t._id},[e._v(e._s(t.product.name)+" x "+e._s(t.quantity))])})),0)]}},{key:"cell(remark)",fn:function(t){return[e._v(e._s(t.item.userInfo.remark))]}},{key:"cell(price)",fn:function(t){return[e._v(e._s(e.sumPrice(t.item.products)))]}},{key:"cell(orderState)",fn:function(t){return[r("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-state",modifiers:{"modal-state":!0}}],staticClass:"my-2",attrs:{variant:"warning"},on:{click:function(r){return e.check(t.item._id,t.index)}}},[e._v("編輯訂單狀況")]),!0===t.item.orderState?r("div",[e._v("已聯絡及安排出貨")]):e._e()]}}])}),r("b-modal",{ref:"my-modal",attrs:{id:"modal-state",title:"編輯訂單狀況",centered:"","ok-variant":"success","ok-title":"確認","cancel-variant":"danger","cancel-title":"取消"},on:{ok:e.submitModal}},[r("b-form-group",[r("b-form-radio",{attrs:{value:!1},model:{value:e.form.orderState,callback:function(t){e.$set(e.form,"orderState",t)},expression:"form.orderState"}},[e._v("未聯絡")]),r("b-form-radio",{attrs:{value:!0},model:{value:e.form.orderState,callback:function(t){e.$set(e.form,"orderState",t)},expression:"form.orderState"}},[e._v("已聯絡及安排出貨")])],1)],1)],1)},n=[],o=r("1da1"),i=(r("96cf"),r("d3b7"),{data:function(){return{orders:[],fields:[{key:"_id",label:"單號"},{key:"name",label:"姓名"},{key:"phone",label:"電話"},{key:"address",label:"地址"},{key:"courier",label:"運送"},{key:"deliveryDate",label:"日期"},{key:"deliveryTime",label:"時間"},{key:"date",label:"訂購日"},{key:"products",label:"商品"},{key:"remark",label:"備註"},{key:"price",label:"總金額"},{key:"orderState",label:"訂單狀況"}],form:{orderState:!1},aa:"",bb:""}},methods:{sumPrice:function(e){var t=e.reduce((function(e,t){return e+t.quantity*t.product.price}),0);return console.log(t),new Intl.NumberFormat("en-IN").format(t)},submitModal:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(t.aa),console.log(t.form),e.preventDefault(),r.prev=3,r.next=6,t.api.patch("/orders/"+t.aa,t.form,{headers:{authorization:"Bearer "+t.user.token}});case 6:t.orders[t.bb].orderState=t.form.orderState,t.$refs.table.refresh(),t.$bvModal.hide("modal-state"),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](3),console.log(r.t0),t.$swal({icon:"error",title:"錯誤",text:r.t0.response.data.message});case 15:case"end":return r.stop()}}),r,null,[[3,11]])})))()},check:function(e,t){console.log(this.aa),this.aa=e,this.bb=t}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/orders/all",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,a=r.data,e.orders=a.result,console.log(e.orders),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得訂單失敗"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}),s=i,l=(r("2e68"),r("2877")),c=Object(l["a"])(s,a,n,!1,null,null,null);t["default"]=c.exports},b0c0:function(e,t,r){var a=r("83ab"),n=r("5e77").EXISTS,o=r("e330"),i=r("9bf2").f,s=Function.prototype,l=o(s.toString),c=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=o(c.exec),d="name";a&&!n&&i(s,d,{configurable:!0,get:function(){try{return u(c,l(this))[1]}catch(e){return""}}})},c267:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content",attrs:{id:"adminproduct"}},[r("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-product",modifiers:{"modal-product":!0}}],staticClass:"my-3",attrs:{variant:"success"}},[e._v("新增商品")]),r("b-table",{ref:"table",attrs:{items:e.products,fields:e.fields,stacked:"md"},scopedSlots:e._u([{key:"cell(image)",fn:function(t){return[t.item.image?r("img",{staticStyle:{height:"100px"},attrs:{src:t.item.image}}):e._e()]}},{key:"cell(sell)",fn:function(t){return[e._v(e._s(t.item.sell?"✔":""))]}},{key:"cell(action)",fn:function(t){return[r("b-btn",{attrs:{variant:"dark"},on:{click:function(r){return e.editProduct(t.index)}}},[r("b-icon-pencil-fill")],1)]}}])}),r("b-modal",{attrs:{id:"modal-product",title:e.form._id.length>0?"編輯商品":"新增商品",centered:"","ok-variant":"success","ok-title":"送出","cancel-variant":"danger","cancel-title":"取消","ok-disabled":e.modalSubmitting,"cancel-disabled":e.modalSubmitting},on:{ok:e.submitModal,hidden:e.resetForm}},[r("b-form-group",{attrs:{label:"商品名稱","label-for":"input-name",description:"商品名稱","invalid-feedback":"商品名稱必填",state:e.state.name}},[r("b-form-input",{attrs:{id:"input-name",type:"text",required:"",placeholder:"請輸入商品名稱",state:e.state.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{label:"商品價格","label-for":"input-price",description:"必填欄位","invalid-feedback":"價格必須是 0 元以上",state:e.state.price}},[r("b-form-input",{attrs:{id:"input-price",type:"number",min:"0",required:"",placeholder:"請輸入商品價格",state:e.state.price},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",e._n(t))},expression:"form.price"}})],1),r("b-form-group",{attrs:{label:"商品分類","label-for":"input-category",description:"商品分類","invalid-feedback":"分類必填",state:e.state.category}},[r("b-form-select",{attrs:{id:"input-category",required:"",options:e.categories,placeholder:"請選擇商品分類",state:e.state.category},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}})],1),r("b-form-group",{attrs:{label:"商品說明","label-for":"input-description",description:"必填欄位","invalid-feedback":"說明必填",state:e.state.description}},[r("b-form-textarea",{attrs:{id:"input-description",required:"",rows:"3","max-rows":"6",placeholder:"請輸入商品說明"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("img-inputer",{attrs:{accept:"image/*",theme:"light",size:"large","bottom-text":"點選或拖拽圖片以修改","hover-text":"點選或拖拽圖片以修改",placeholder:"點選或拖拽選擇圖片","max-size":1024,"exceed-size-text":"檔案大小不能超過"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}}),r("b-form-group",{staticClass:"mt-4",attrs:{label:"上架"}},[r("b-form-radio",{attrs:{value:!0},model:{value:e.form.sell,callback:function(t){e.$set(e.form,"sell",t)},expression:"form.sell"}},[e._v("上架")]),r("b-form-radio",{attrs:{value:!1},model:{value:e.form.sell,callback:function(t){e.$set(e.form,"sell",t)},expression:"form.sell"}},[e._v("下架")])],1)],1)],1)},n=[],o=r("5530"),i=r("1da1"),s=(r("96cf"),r("b0c0"),{data:function(){return{fields:[{key:"image",label:"圖片"},{key:"name",label:"名稱"},{key:"price",label:"價格"},{key:"category",label:"分類"},{key:"description",label:"敘述"},{key:"sell",label:"上架"},{key:"action",label:"編輯"}],products:[],modalSubmitting:!1,categories:[{text:"選擇分類",value:""},"經典鮮花","蘭花盆景","鮮花盆花","綠意盎然"],form:{name:"",price:null,description:"",image:null,sell:!1,category:"",_id:"",index:-1}}},computed:{state:function(){return{name:0!==this.form.name.length||null,price:null===this.form.price?null:this.form.price>0,category:0!==this.form.category.length||null}}},methods:{submitModal:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,s,l,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.preventDefault(),t.state.name&&t.state.price&&t.state.category){r.next=4;break}return t.$swal({icon:"error",title:"錯誤",text:"缺少必填欄位"}),r.abrupt("return");case 4:for(n in t.modalSubmitting=!0,a=new FormData,t.form)"_id"!==n&&a.append(n,t.form[n]);if(r.prev=7,0!==t.form._id.length){r.next=16;break}return r.next=11,t.api.post("/products",a,{headers:{authorization:"Bearer "+t.user.token}});case 11:i=r.sent,s=i.data,t.products.push(s.result),r.next=22;break;case 16:return r.next=18,t.api.patch("/products/"+t.form._id,a,{headers:{authorization:"Bearer "+t.user.token}});case 18:l=r.sent,c=l.data,t.products[t.form.index]=Object(o["a"])(Object(o["a"])({},t.form),{},{image:c.result.image}),t.$refs.table.refresh();case 22:t.$bvModal.hide("modal-product"),r.next=28;break;case 25:r.prev=25,r.t0=r["catch"](7),t.$swal({icon:"error",title:"錯誤",text:r.t0.response.data.message});case 28:t.modalSubmitting=!1;case 29:case"end":return r.stop()}}),r,null,[[7,25]])})))()},resetForm:function(e){this.modalSubmitting?e.preventDefault():this.form={name:"",price:0,description:"",image:null,sell:!1,category:"",_id:"",index:-1}},editProduct:function(e){this.form=Object(o["a"])(Object(o["a"])({},this.products[e]),{},{image:null,index:e}),this.$bvModal.show("modal-product")}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/products/all",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,a=r.data,e.products=a.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),l=s,c=(r("f879"),r("2877")),u=Object(c["a"])(l,a,n,!1,null,null,null);t["default"]=u.exports},d197:function(e,t,r){"use strict";r("129b")},ddbb:function(e,t,r){},f879:function(e,t,r){"use strict";r("ddbb")}}]);
//# sourceMappingURL=admin.935374d2.js.map