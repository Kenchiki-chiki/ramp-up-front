(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{365:function(t,e,n){"use strict";n.r(e);var r={name:"AppNavigation",data:function(){return{sidebar:!1,sample_domain:"@example.com",user:{password:"",email:"",password_confirmation:""}}},methods:{randomSet:function(){for(var base="abcdefghijklmnopqrstuvwxyz0123456789",t=base.length,e="",i=0;i<16;i++)e+=base[Math.floor(Math.random()*t)];this.user.password=e,this.user.password_confirmation=this.user.password;for(var n="",r=0;r<10;r++)n+=base[Math.floor(Math.random()*t)];this.user.email=n+this.sample_domain,this.registerUser()},registerUser:function(){var t=this;this.$axios.post("/api/v1/auth",this.user,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return t.$auth.loginWith("local",{data:t.user}),t.$store.dispatch("message/setContent",{content:"ゲスト登録しました",timeout:2e3}),localStorage.setItem("access-token",e.headers["access-token"]),localStorage.setItem("client",e.headers.client),localStorage.setItem("uid",e.headers.uid),localStorage.setItem("token-type",e.headers["token-type"]),t.$router.push({path:"/skill"}),e}),(function(t){return t}))}}},o=n(58),c=n(68),l=n.n(c),v=n(148),d=n(645),m=n(537),f=n(343),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("v-toolbar",[n("v-toolbar-title",{staticClass:"white--text toolbar",staticStyle:{"font-weigth":"bold",cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[t._v("\n      Ramp Up\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-xs-only"},[n("v-btn",{on:{click:function(e){return t.$router.push("/about")}}},[t._v("\n          about\n        ")]),t._v(" "),n("v-btn",{on:{click:function(e){return t.$router.push("/sign_up")}}},[t._v("\n          sing up\n        ")]),t._v(" "),n("v-btn",{on:{click:function(e){return t.$router.push("/sign_in")}}},[t._v("\n          sign in\n        ")]),t._v(" "),n("v-btn",{on:{click:t.randomSet}},[t._v("\n          guest\n        ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VSpacer:d.a,VToolbar:m.a,VToolbarItems:f.a,VToolbarTitle:f.b})},367:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(14),n(17),n(86),n(20),n(82),n(84);var r=n(0);function o(t){return r.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var r=n.props,data=n.data,o=n.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,data,o)}})}},523:function(t,e,n){"use strict";n(366);var r=n(367);e.a=Object(r.a)("flex")},540:function(t,e,n){var content=n(579);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("e810a50c",content,!0,{sourceMap:!1})},578:function(t,e,n){"use strict";n(540)},579:function(t,e,n){(e=n(32)(!1)).push([t.i,".nuxt-rails-img{opacity:.8}#picture-wrap{margin:0 auto;padding:64px 148px 36px}#presentation-wrap{margin:0 auto;padding:0 148px}",""]),t.exports=e},650:function(t,e,n){"use strict";n.r(e);var r={name:"About",middleware:function(t){var e=t.store,n=t.redirect;e.$auth.loggedIn&&n("/build")},components:{AppNavigation:n(365).default}},o=(n(578),n(58)),c=n(68),l=n.n(c),v=n(523),d=n(538),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AppNavigation"),t._v(" "),n("div",{staticClass:"layout row wrap align-center",attrs:{id:"picture-wrap"}},[n("v-flex",{attrs:{xs12:"",sm4:"","px-3":""}},[n("div",{staticClass:"about-thumb text-xs-center mb-4"},[n("v-img",{attrs:{src:"https://images.unsplash.com/photo-1533619771522-a3a9e28a75df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cnVnZ2VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","aspect-ratio":"1"}})],1)]),t._v(" "),n("v-flex",{attrs:{xs12:"",sm4:"","px-3":""}},[n("div",{staticClass:"about-thumb text-xs-center mb-4 nuxt-rails-img"},[n("v-img",{attrs:{src:"https://images.unsplash.com/photo-1511075496994-5298164dae11?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY5fHxyZWQlMjBncmVlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60","aspect-ratio":"1"}})],1)]),t._v(" "),n("v-flex",{attrs:{xs12:"",sm4:"","px-3":""}},[n("div",{staticClass:"about-thumb text-xs-center mb-4"},[n("v-img",{attrs:{src:"https://images.unsplash.com/photo-1525982567065-4d879ca11468?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzUzfHxyZWQlMjBncmVlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60","aspect-ratio":"1"}})],1)])],1),t._v(" "),n("div",{staticClass:"layout row wrap align-center",attrs:{id:"presentation-wrap"}},[n("v-flex",{attrs:{"xs-12":"",sm4:"","px-3":""}},[n("div",{staticClass:"section-head"},[n("h2",{staticClass:"section-title"},[t._v("Origin")]),t._v(" "),n("div",{staticClass:"section-meta"},[t._v("\n          “Ramp Up”には英語で“坂道やスロープを駆け上がる”、“独り立ちする”、“強化する”という意味があります。"),n("br"),t._v("\n          夢に向かって学習を継続することは時に困難となることもあるかと思います。"),n("br"),t._v("\n          坂道のように険しい道のりかもしれません。"),n("br"),t._v("\n          しかし、継続した先にはまだ見ぬ素晴らしい景色が待っているのではないでしょうか。"),n("br"),t._v("\n          そのような道を駆け上がっていくお手伝いができれば、そんな思いを込めて、“Ramp Up”と名付けました。")])]),t._v(" "),n("div",{staticClass:"section-body"})]),t._v(" "),n("v-flex",{attrs:{"xs-12":"",sm4:"","px-3":""}},[n("div",{staticClass:"section-head"},[n("h2",{staticClass:"section-title"},[t._v("Concept")]),t._v(" "),n("div",{staticClass:"section-meta"},[t._v("\n          “ユーザーがより快適に使える”がRamp Upのコンセプトです。"),n("br"),t._v("\n          フロントエンドとバックエンドを切り離し、完全SPA化を実現しました。"),n("br"),t._v("\n          Nuxt.jsとRails APIの2つのアプリを使用して、実装しています。"),n("br"),t._v("\n          コンセプトに沿った実装をするために実現したいことは、まだまだたくさんあります。"),n("br"),t._v("\n          今後はAWSへのデプロイやデザイン、機能の修正を行い、よりユーザーにとって使いやすいアプリの実現に取り組みます。"),n("br"),n("br")])]),t._v(" "),n("div",{staticClass:"section-body"})]),t._v(" "),n("v-flex",{attrs:{"xs-12":"",sm4:"","px-3":""}},[n("div",{staticClass:"section-head"},[n("h2",{staticClass:"section-title"},[t._v("Author")]),t._v(" "),n("div",{staticClass:"section-meta"},[t._v("\n          ケンチキと申します。"),n("br"),t._v("\n          公務員として働いていましたが、プログラミングに出会い、その魅力に引き込まれて、気づけばプログラマーへの転職を目指していました。"),n("br"),t._v("\n          作りたいサービスの実現に向けて、タスクを実現するための実装方針を考え、ロジックをコードに反映し、上手くいかない箇所は何度もデバッグして改善する。"),n("br"),t._v("\n          この過程が楽しくて、毎日アプリの開発に取り組んでいます。"),n("br"),t._v("\n          2020年の12月末をもって前職を退職し、現在転職活動中です。")])]),t._v(" "),n("div",{staticClass:"section-body"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{AppNavigation:n(365).default}),l()(component,{VFlex:v.a,VImg:d.a})}}]);