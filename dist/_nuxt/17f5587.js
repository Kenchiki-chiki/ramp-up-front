(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{343:function(t,e,r){"use strict";r(12),r(16),r(151),r(17),r(44),r(28),r(29),r(19),r(121),r(68),r(18),r(58);var n=r(2),o=r(43),c=r(103),l=r(153);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},412:function(t,e,r){"use strict";r.r(e);var n={name:"App",data:function(){return{user:{password:"",email:""}}},methods:{editEmail:function(){this.$axios.put("http://localhost:3000/api/v1/auth",this.user,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){localStorage.setItem("access-token",t.headers["access-token"]),localStorage.setItem("client",t.headers.client),localStorage.setItem("uid",t.headers.uid),localStorage.setItem("token-type",t.headers["token-type"]),window.location.href="/"}))}}},o=r(57),c=r(69),l=r.n(c),d=r(311),h=r(148),f=r(347),m=r(316),v=r(421),w=r(343),O=r(408),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-container",[r("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"400px"}},[r("v-card-title",[r("h1",{staticClass:"display-1"},[t._v("\n          メールアドレス変更\n        ")])]),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:"新しいメールアドレス"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"mdi-lock","append-icon":"mdi-eye-off",label:"パスワード"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"white--text",attrs:{color:"#666666"},on:{click:t.editEmail}},[t._v("\n              保存する\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VApp:d.a,VBtn:h.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VContainer:v.a,VForm:w.a,VTextField:O.a})}}]);