(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{343:function(t,e,n){"use strict";var r=n(349),o=n(350);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},349:function(t,e,n){"use strict";var r=n(4),o=n(8),c=n(100),l=n(41),f=n(222),d=n(221),v=n(220),h=n(21),y=n(6),m=n(153),O=n(101),j=n(156);t.exports=function(t,e,n){var w=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),S=w?"set":"add",k=o[t],C=k&&k.prototype,_=k,P={},E=function(t){var e=C[t];l(C,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return x&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof k||!(x||C.forEach&&!y((function(){(new k).entries().next()})))))_=n.getConstructor(e,t,w,S),f.REQUIRED=!0;else if(c(t,!0)){var z=new _,I=z[S](x?{}:-0,1)!=z,D=y((function(){z.has(1)})),M=m((function(t){new k(t)})),N=!x&&y((function(){for(var t=new k,e=5;e--;)t[S](e,e);return!t.has(-0)}));M||((_=e((function(e,n){v(e,_,t);var r=j(new k,e,_);return null!=n&&d(n,r[S],{that:r,AS_ENTRIES:w}),r}))).prototype=C,C.constructor=_),(D||N)&&(E("delete"),E("has"),w&&E("get")),(N||I)&&E(S),x&&C.clear&&delete C.clear}return P[t]=_,r({global:!0,forced:_!=k},P),O(_,t),x||n.setStrong(_,t,w),_}},350:function(t,e,n){"use strict";var r=n(34).f,o=n(84),c=n(223),l=n(99),f=n(220),d=n(221),v=n(154),h=n(155),y=n(25),m=n(222).fastKey,O=n(77),j=O.set,w=O.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e),j(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),O=w(e),x=function(t,e,n){var r,o,c=O(t),l=S(t,e);return l?l.value=n:(c.last=l={index:o=m(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),y?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},S=function(t,e){var n,r=O(t),o=m(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(h.prototype,{clear:function(){for(var t=O(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=O(this),n=S(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),y?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=O(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!S(this,t)}}),c(h.prototype,n?{get:function(t){var e=S(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),y&&r(h.prototype,"size",{get:function(){return O(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=w(e),c=w(r);v(t,e,(function(t,e){j(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},360:function(t,e,n){"use strict";n(12),n(17),n(18),n(44),n(76),n(82),n(343),n(75),n(29),n(30),n(20),n(7),n(24),n(51),n(46),n(83),n(19),n(52);var r=n(2),o=(n(348),n(0)),c=n(344),l=n(5);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(m)};function j(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var r=n[t],o=j(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},361:function(t,e,n){"use strict";n(12),n(14),n(17),n(18),n(44),n(76),n(343),n(29),n(30),n(20),n(7),n(24),n(69),n(51),n(46),n(19),n(52);var r=n(2),o=(n(348),n(0)),c=n(344),l=n(5);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.u)(r)]=e(),n}),{})}var m=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},O=y("align",(function(){return{type:String,default:null,validator:m}})),j=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:j}})),x=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:x}})),k={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(S)},C={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},O),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:x}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=P.get(l);return d||function(){var t,e;for(e in d=[],k)k[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},546:function(t,e,n){var content=n(618);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("1b7833da",content,!0,{sourceMap:!1})},617:function(t,e,n){"use strict";n(546)},618:function(t,e,n){(e=n(32)(!1)).push([t.i,".app-title{font-size:70px;font-weight:300;position:absolute;top:280px;right:0;left:0;margin:auto;width:100%;height:105px;letter-spacing:.05em}.top-btn{width:180px}.top-buttons{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:100%;height:200px}",""]),t.exports=e},633:function(t,e,n){"use strict";n.r(e);var r={layout:"default",name:"App",auth:!1,data:function(){return{sample_domain:"@example.com",user:{password:"",email:"",password_confirmation:""}}},methods:{randomSet:function(){for(var base="abcdefghijklmnopqrstuvwxyz0123456789",t=base.length,e="",i=0;i<16;i++)e+=base[Math.floor(Math.random()*t)];this.user.password=e,this.user.password_confirmation=this.user.password;for(var n="",r=0;r<10;r++)n+=base[Math.floor(Math.random()*t)];this.user.email=n+this.sample_domain,this.registerUser()},registerUser:function(){var t=this;this.$axios.post("/api/v1/auth",this.user,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return t.$auth.loginWith("local",{data:t.user}),t.$store.dispatch("message/setContent",{content:"ゲスト登録しました",timeout:2e3}),localStorage.setItem("access-token",e.headers["access-token"]),localStorage.setItem("client",e.headers.client),localStorage.setItem("uid",e.headers.uid),localStorage.setItem("token-type",e.headers["token-type"]),t.$router.push({path:"/skill"}),e}),(function(t){return t}))}}},o=(n(617),n(58)),c=n(68),l=n.n(c),f=n(148),d=n(360),v=n(636),h=n(361),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"app-title"},[t._v("Ramp Up")])])])],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"top-buttons",attrs:{cols:"12"}},[n("div",{staticClass:"text-center"},[n("div",{staticClass:"my-2"},[n("v-btn",{staticClass:"ma-2 top-btn",attrs:{outlined:"",color:"white"},on:{click:function(e){return t.$router.push("sign_up")}}},[t._v("\n          sing up\n        ")])],1),t._v(" "),n("div",{staticClass:"my-2"},[n("v-btn",{staticClass:"ma-2 top-btn",attrs:{outlined:"",color:"white"},on:{click:function(e){return t.$router.push("sign_in")}}},[t._v("\n          sign in\n        ")])],1),t._v(" "),n("div",{staticClass:"my-2"},[n("v-btn",{staticClass:"ma-2 top-btn",attrs:{outlined:"",color:"white"},on:{click:t.randomSet}},[t._v("\n          guest\n        ")])],1)])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:f.a,VCol:d.a,VContainer:v.a,VRow:h.a})}}]);