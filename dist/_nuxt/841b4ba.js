(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{344:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));n(12),n(54),n(61),n(14),n(17),n(18),n(53),n(40),n(26),n(29),n(30),n(20),n(7),n(24),n(15),n(51),n(55),n(85),n(19),n(52);var r=n(2),o=n(16),c=n(5);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function f(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var h=/;(?![^(]*\))/g,j=/:(.*)/;function m(style){var t,e={},n=f(style.split(h));try{for(n.s();!(t=n.n()).done;){var r=t.value.split(j),l=Object(o.a)(r,2),d=l[0],v=l[1];(d=d.trim())&&("string"==typeof v&&(v=v.trim()),e[Object(c.c)(d)]=v)}}catch(t){n.e(t)}finally{n.f()}return e}function y(){for(var t,e={},i=arguments.length;i--;)for(var n=0,r=Object.keys(arguments[i]);n<r.length;n++)switch(t=r[n]){case"class":case"directives":arguments[i][t]&&(e[t]=x(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=k(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=w(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=d(d({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function k(t,source){return t?source?(t=Object(c.v)("string"==typeof t?m(t):t)).concat("string"==typeof source?m(source):source):t:source}function x(t,source){return source?t&&t?Object(c.v)(t).concat(source):source:t}function w(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},i=2;i--;){var e=i<0||arguments.length<=i?void 0:arguments[i];for(var n in e)e[n]&&(t[n]?t[n]=[].concat(e[n],t[n]):t[n]=e[n])}return t}},345:function(t,e,n){var content=n(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("24f2d440",content,!0,{sourceMap:!1})},346:function(t,e,n){var content=n(354);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5bfb68c0",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{drawer:!0}}},o=(n(351),n(58)),c=n(68),l=n.n(c),d=n(525),f=n(511),v=n(551),h=n(340),j=n(634),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{"hide-overlay":"",id:"navbar",fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",[n("h1",[t._v("Ramp Up")]),t._v(" "),n("v-list-item",[n("v-list-item-title",{staticClass:"navbar-title",on:{click:function(e){return t.$router.push("build")}}},[t._v("\n        BUILD\n        ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-title",{staticClass:"navbar-title",on:{click:function(e){return t.$router.push("task")}}},[t._v("\n        TASK\n        ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-title",{staticClass:"navbar-title",on:{click:function(e){return t.$router.push("calendar")}}},[t._v("\n        CALENDAR\n        ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-title",{staticClass:"navbar-title",on:{click:function(e){return t.$router.push("chart")}}},[t._v("\n        CHART\n        ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VList:d.a,VListItem:f.a,VListItemGroup:v.a,VListItemTitle:h.a,VNavigationDrawer:j.a})},351:function(t,e,n){"use strict";n(345)},352:function(t,e,n){(e=n(32)(!1)).push([t.i,".navbar{width:256px;background-color:#181812}.navbar li{padding:25px 0 25px 35px;list-style:none}.navbar li:hover{background-color:#181812}.navbar li a{color:#fff;font-weight:700;text-decoration:none}.v-application a{color:#fff}h1{font-size:44px;padding:10px 0 45px}#navbar{position:-webkit-sticky;position:sticky;visibility:visible!important;transform:translateX(0)!important;text-align:center}.navbar-title{padding:25px 0;font-size:18px!important}",""]),t.exports=e},353:function(t,e,n){"use strict";n(346)},354:function(t,e,n){(e=n(32)(!1)).push([t.i,".account_icon{z-index:300;position:fixed;top:20px;right:20px}.v-application--wrap{height:24px!important}.v-menu__content{min-width:0;top:18px!important;right:50px!important;left:auto!important;transform-origin:right top!important;z-index:302}",""]),t.exports=e},355:function(t,e,n){"use strict";var r={middleware:function(t){var e=t.store,n=t.redirect;e.$auth.loggedIn||n("/login")},name:"App",data:function(){return{drawer:!1}},created:function(){},methods:{logout:function(){this.$auth.logout(),this.$store.dispatch("message/setContent",{content:"ログアウトしました",timeout:2e3})},deleteUser:function(){var t=this;this.$axios.delete("http://localhost:3000/api/v1/auth",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){t.$auth.logout(),window.location.href="/"}))}}},o=(n(353),n(58)),c=n(68),l=n.n(c),d=n(146),f=n(525),v=n(511),h=n(551),j=n(340),m=n(637),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account_icon"},[n("v-icon",{attrs:{color:"#666666"},on:{click:function(e){t.drawer=!0}}},[t._v("\n  mdi-account-circle\n  ")]),t._v(" "),n("v-menu",{model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"list_position",attrs:{nav:"",dense:""}},[n("v-list-item-group",[n("v-list-item",[n("v-list-item-title",{staticClass:"text--darken-3 mb-1",on:{click:function(e){return t.$router.push("account_setting")}}},[t._v("\n          アカウント編集\n          ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-title",{on:{click:function(e){return t.$router.push("skill_edit")}}},[t._v("\n          スキル編集\n          ")])],1),t._v(" "),n("v-list-item",[n("v-list-item-title",{staticClass:"text--darken-3 mb-1",on:{click:t.logout}},[t._v("\n          ログアウト\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VIcon:d.a,VList:f.a,VListItem:v.a,VListItemGroup:h.a,VListItemTitle:j.a,VMenu:m.a})},534:function(t,e,n){var map={"./af":374,"./af.js":374,"./ar":375,"./ar-dz":376,"./ar-dz.js":376,"./ar-kw":377,"./ar-kw.js":377,"./ar-ly":378,"./ar-ly.js":378,"./ar-ma":379,"./ar-ma.js":379,"./ar-sa":380,"./ar-sa.js":380,"./ar-tn":381,"./ar-tn.js":381,"./ar.js":375,"./az":382,"./az.js":382,"./be":383,"./be.js":383,"./bg":384,"./bg.js":384,"./bm":385,"./bm.js":385,"./bn":386,"./bn-bd":387,"./bn-bd.js":387,"./bn.js":386,"./bo":388,"./bo.js":388,"./br":389,"./br.js":389,"./bs":390,"./bs.js":390,"./ca":391,"./ca.js":391,"./cs":392,"./cs.js":392,"./cv":393,"./cv.js":393,"./cy":394,"./cy.js":394,"./da":395,"./da.js":395,"./de":396,"./de-at":397,"./de-at.js":397,"./de-ch":398,"./de-ch.js":398,"./de.js":396,"./dv":399,"./dv.js":399,"./el":400,"./el.js":400,"./en-au":401,"./en-au.js":401,"./en-ca":402,"./en-ca.js":402,"./en-gb":403,"./en-gb.js":403,"./en-ie":404,"./en-ie.js":404,"./en-il":405,"./en-il.js":405,"./en-in":406,"./en-in.js":406,"./en-nz":407,"./en-nz.js":407,"./en-sg":408,"./en-sg.js":408,"./eo":409,"./eo.js":409,"./es":410,"./es-do":411,"./es-do.js":411,"./es-mx":412,"./es-mx.js":412,"./es-us":413,"./es-us.js":413,"./es.js":410,"./et":414,"./et.js":414,"./eu":415,"./eu.js":415,"./fa":416,"./fa.js":416,"./fi":417,"./fi.js":417,"./fil":418,"./fil.js":418,"./fo":419,"./fo.js":419,"./fr":420,"./fr-ca":421,"./fr-ca.js":421,"./fr-ch":422,"./fr-ch.js":422,"./fr.js":420,"./fy":423,"./fy.js":423,"./ga":424,"./ga.js":424,"./gd":425,"./gd.js":425,"./gl":426,"./gl.js":426,"./gom-deva":427,"./gom-deva.js":427,"./gom-latn":428,"./gom-latn.js":428,"./gu":429,"./gu.js":429,"./he":430,"./he.js":430,"./hi":431,"./hi.js":431,"./hr":432,"./hr.js":432,"./hu":433,"./hu.js":433,"./hy-am":434,"./hy-am.js":434,"./id":435,"./id.js":435,"./is":436,"./is.js":436,"./it":437,"./it-ch":438,"./it-ch.js":438,"./it.js":437,"./ja":439,"./ja.js":439,"./jv":440,"./jv.js":440,"./ka":441,"./ka.js":441,"./kk":442,"./kk.js":442,"./km":443,"./km.js":443,"./kn":444,"./kn.js":444,"./ko":445,"./ko.js":445,"./ku":446,"./ku.js":446,"./ky":447,"./ky.js":447,"./lb":448,"./lb.js":448,"./lo":449,"./lo.js":449,"./lt":450,"./lt.js":450,"./lv":451,"./lv.js":451,"./me":452,"./me.js":452,"./mi":453,"./mi.js":453,"./mk":454,"./mk.js":454,"./ml":455,"./ml.js":455,"./mn":456,"./mn.js":456,"./mr":457,"./mr.js":457,"./ms":458,"./ms-my":459,"./ms-my.js":459,"./ms.js":458,"./mt":460,"./mt.js":460,"./my":461,"./my.js":461,"./nb":462,"./nb.js":462,"./ne":463,"./ne.js":463,"./nl":464,"./nl-be":465,"./nl-be.js":465,"./nl.js":464,"./nn":466,"./nn.js":466,"./oc-lnc":467,"./oc-lnc.js":467,"./pa-in":468,"./pa-in.js":468,"./pl":469,"./pl.js":469,"./pt":470,"./pt-br":471,"./pt-br.js":471,"./pt.js":470,"./ro":472,"./ro.js":472,"./ru":473,"./ru.js":473,"./sd":474,"./sd.js":474,"./se":475,"./se.js":475,"./si":476,"./si.js":476,"./sk":477,"./sk.js":477,"./sl":478,"./sl.js":478,"./sq":479,"./sq.js":479,"./sr":480,"./sr-cyrl":481,"./sr-cyrl.js":481,"./sr.js":480,"./ss":482,"./ss.js":482,"./sv":483,"./sv.js":483,"./sw":484,"./sw.js":484,"./ta":485,"./ta.js":485,"./te":486,"./te.js":486,"./tet":487,"./tet.js":487,"./tg":488,"./tg.js":488,"./th":489,"./th.js":489,"./tk":490,"./tk.js":490,"./tl-ph":491,"./tl-ph.js":491,"./tlh":492,"./tlh.js":492,"./tr":493,"./tr.js":493,"./tzl":494,"./tzl.js":494,"./tzm":495,"./tzm-latn":496,"./tzm-latn.js":496,"./tzm.js":495,"./ug-cn":497,"./ug-cn.js":497,"./uk":498,"./uk.js":498,"./ur":499,"./ur.js":499,"./uz":500,"./uz-latn":501,"./uz-latn.js":501,"./uz.js":500,"./vi":502,"./vi.js":502,"./x-pseudo":503,"./x-pseudo.js":503,"./yo":504,"./yo.js":504,"./zh-cn":505,"./zh-cn.js":505,"./zh-hk":506,"./zh-hk.js":506,"./zh-mo":507,"./zh-mo.js":507,"./zh-tw":508,"./zh-tw.js":508};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=534},535:function(t,e,n){var content=n(596);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("62677990",content,!0,{sourceMap:!1})},595:function(t,e,n){"use strict";n(535)},596:function(t,e,n){(e=n(32)(!1)).push([t.i,".whole-wrapper{height:100vh}.whole-content-wrapper{display:flex;height:100vh}.calendar-title{margin:28px 0 0}#content{margin:2em auto;width:900px}.button-area{margin:.5em 0}.button{padding:4px 8px;margin-right:8px}.calendar{max-width:900px;border-top:1px solid #e0e0e0;font-size:.8em}.calendar-weekly{display:flex;border-left:1px solid #e0e0e0}.calendar-daily{flex:1;min-height:125px;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;margin-right:-1px}.calendar-day{text-align:center;cursor:pointer}.calendar-youbi{flex:1;border-right:1px solid #e0e0e0;margin-right:-1px;text-align:center}.outside{background-color:#181823}.calendar-event{color:#fff;margin-bottom:1px;height:25px;line-height:25px}",""]),t.exports=e},624:function(t,e,n){"use strict";n.r(e);n(14),n(17),n(40),n(24),n(46),n(36);var r=n(3),o=n(339),c=n.n(o),l=n(347),d=n(355),f={data:function(){return{currentDate:c()(),current:0,events:[]}},components:{Navbar:l.default,Account:d.a},computed:{calendars:function(){return this.getCalendar()},displayMonth:function(){return this.currentDate.format("YYYY[年]M[月]")},currentMonth:function(){return this.currentDate.format("YYYY-MM")}},created:function(){this.fetchAllStudytimes()},methods:{getStartDate:function(){var t=c()(this.currentDate);t.startOf("month");var e=t.day();return t.subtract(e,"days")},getEndDate:function(){var t=c()(this.currentDate);t.endOf("month");var e=t.day();return t.add(6-e,"days")},getCalendar:function(){for(var t=this.getStartDate(),e=this.getEndDate(),n=Math.ceil(e.diff(t,"days")/7),r=[],o=this.getStartDate(),c=0;c<n;c++){for(var l=[],d=0;d<7;d++){var f=this.getDayEvents(o);l.push({day:o.get("date"),month:o.format("YYYY-MM"),dayEvents:f}),o.add(1,"days")}r.push(l)}return r},nextMonth:function(){this.currentDate=c()(this.currentDate).add(1,"month")},prevMonth:function(){this.currentDate=c()(this.currentDate).subtract(1,"month")},youbi:function(t){return["Sun","Mon","Tue","Wed","Tue","Fri","Sat"][t]},date:function(t){t.day=("0"+t.day).slice(-2);var e="".concat(t.month).concat(t.day);return e.replace(/-/g,"")},fetchThatDayStudyTimes:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!1!==isNaN(t)){n.next=6;break}return n.next=3,e.$store.dispatch("calendar/fetchThatDayStudyTimes",t);case 3:e.$router.push("/that_day_study_time/".concat(t)),n.next=6;break;case 6:case"end":return n.stop()}}),n)})))()},getDayEvents:function(t){return this.events.filter((function(e){var n=c()(e.studied_on).format("YYYY-MM-DD"),r=c()(e.studied_on).format("YYYY-MM-DD"),o=t.format("YYYY-MM-DD");if(n<=o&&r>=o)return!0}))},fetchAllStudytimes:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("calendar/fetchAllStudytimes");case 2:n=e.sent,t.events=n;case 4:case"end":return e.stop()}}),e)})))()}}},v=(n(595),n(58)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whole-wrapper"},[n("div",{staticClass:"whole-content-wrapper"},[n("Navbar"),t._v(" "),n("div",{staticClass:"main-content-wrapper",attrs:{id:"content"}},[n("div",{staticClass:"calendar-title"},[n("h2",[t._v("カレンダー "+t._s(t.displayMonth))]),t._v(" "),n("div",{staticClass:"button-area"},[n("button",{staticClass:"button",on:{click:t.prevMonth}},[t._v("前の月")]),t._v(" "),n("button",{staticClass:"button",on:{click:t.nextMonth}},[t._v("次の月")])])]),t._v(" "),n("div",{staticClass:"calendar"},[n("div",{staticClass:"calendar-weekly"},t._l(7,(function(e){return n("div",{key:e,staticClass:"calendar-youbi"},[t._v("\n            "+t._s(t.youbi(e-1))+"\n              \n          ")])})),0),t._v(" "),t._l(t.calendars,(function(e,r){return n("div",{key:r,staticClass:"calendar-weekly"},t._l(e,(function(e,r){return n("div",{key:r,staticClass:"calendar-daily",class:{outside:t.currentMonth!==e.month}},[n("div",{staticClass:"calendar-day",on:{click:function(n){t.fetchThatDayStudyTimes(t.date(e))}}},[t._v("\n                "+t._s(e.day)+"                \n            ")]),t._v(" "),t._l(e.dayEvents,(function(e){return n("div",{key:e.studied_on},[n("div",{staticClass:"calendar-event",style:"background-color:"+e.color},[t._v("\n                "+t._s(e.name)+"\n              \n              ")])])}))],2)})),0)}))],2)])],1),t._v(" "),n("account")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(347).default})}}]);