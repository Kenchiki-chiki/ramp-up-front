(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{359:function(t,e,o){"use strict";var n=o(364);e.a=n.a},364:function(t,e,o){"use strict";o(75),o(378);var n=o(160),r=o(45);e.a=Object(r.a)(n.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},367:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return l}));var n=o(374),r=o(5),l=Object(r.g)("v-toolbar__title"),c=Object(r.g)("v-toolbar__items");n.a},374:function(t,e,o){"use strict";o(12),o(17),o(371),o(18),o(372),o(75),o(29),o(30),o(20),o(19);var n=o(16),r=o(2),l=(o(524),o(124)),c=o(375),h=o(5),v=o(10);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=l.a.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return m(m({},l.a.options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return m(m({},this.measurableStyles),{},{height:Object(h.f)(this.computedHeight)})}},created:function(){var t=this;[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]].forEach((function(e){var o=Object(n.a)(e,2),r=o[0],l=o[1];t.$attrs.hasOwnProperty(r)&&Object(v.a)(r,l,t)}))},methods:{genBackground:function(){var t={height:Object(h.f)(this.computedHeight),src:this.src},image=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(c.a,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[image])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(h.f)(this.computedContentHeight)}},Object(h.l)(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(h.f)(this.extensionHeight)}},Object(h.l)(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],data=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,data,e)}})},375:function(t,e,o){"use strict";o(86),o(75),o(59);var n=o(27),r=(o(376),o(380)),l=o(359),c=o(60),h=o(45),v=o(343),d=o(10),m="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(h.a)(l.a,c.a).extend({name:"v-img",directives:{intersect:r.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,o){if(!m||o||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(d.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=function o(){var n=img.naturalHeight,r=img.naturalWidth;n||r?(t.naturalWidth=r,t.calculatedAspectRatio=r/n):null!=e&&!t.hasError&&setTimeout(o,e)};o()},genContent:function(){var content=l.a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=l.a.options.render.call(this,t),data=Object(v.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:m?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},376:function(t,e,o){var content=o(377);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("1cdf85c7",content,!0,{sourceMap:!1})},377:function(t,e,o){(e=o(32)(!1)).push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=e},378:function(t,e,o){var content=o(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("2fba213c",content,!0,{sourceMap:!1})},379:function(t,e,o){(e=o(32)(!1)).push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=e},381:function(t,e,o){"use strict";o.r(e);var n={name:"AppNavigation",data:function(){return{sidebar:!1,sample_domain:"@example.com",user:{password:"",email:"",password_confirmation:""}}},methods:{randomSet:function(){for(var base="abcdefghijklmnopqrstuvwxyz0123456789",t=base.length,e="",i=0;i<16;i++)e+=base[Math.floor(Math.random()*t)];this.user.password=e,this.user.password_confirmation=this.user.password;for(var o="",n=0;n<10;n++)o+=base[Math.floor(Math.random()*t)];this.user.email=o+this.sample_domain,this.registerUser()},registerUser:function(){var t=this;this.$axios.post("/api/v1/auth",this.user,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return t.$auth.loginWith("local",{data:t.user}),t.$store.dispatch("message/setContent",{content:"ゲスト登録しました",timeout:2e3}),localStorage.setItem("access-token",e.headers["access-token"]),localStorage.setItem("client",e.headers.client),localStorage.setItem("uid",e.headers.uid),localStorage.setItem("token-type",e.headers["token-type"]),t.$router.push({path:"/skill"}),e}),(function(t){return t}))}}},r=o(58),l=o(68),c=o.n(l),h=o(148),v=o(382),d=o(374),m=o(367),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[o("v-toolbar",[o("v-toolbar-title",{staticClass:"white--text toolbar",staticStyle:{"font-weigth":"bold",cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[t._v("\n      Ramp Up\n    ")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-toolbar-items",{staticClass:"hidden-xs-only"},[o("v-btn",{on:{click:function(e){return t.$router.push("about")}}},[t._v("\n          about\n        ")]),t._v(" "),o("v-btn",{on:{click:function(e){return t.$router.push("sign_up")}}},[t._v("\n          sing up\n        ")]),t._v(" "),o("v-btn",{on:{click:function(e){return t.$router.push("sign_in")}}},[t._v("\n          sign in\n        ")]),t._v(" "),o("v-btn",{on:{click:t.randomSet}},[t._v("\n          guest\n        ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VSpacer:v.a,VToolbar:d.a,VToolbarItems:m.a,VToolbarTitle:m.b})},382:function(t,e,o){"use strict";o(358);var n=o(5);e.a=Object(n.g)("spacer","div","v-spacer")},524:function(t,e,o){var content=o(525);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("402355ff",content,!0,{sourceMap:!1})},525:function(t,e,o){(e=o(32)(!1)).push([t.i,".theme--light.v-toolbar.v-sheet{background-color:#fff}.theme--dark.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-toolbar{border-radius:0}.v-sheet.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-toolbar.v-sheet--shaped{border-radius:24px 0}.v-toolbar{contain:layout;display:block;flex:1 1 auto;max-width:100%;transition:transform .2s cubic-bezier(.4,0,.2,1),background-color .2s cubic-bezier(.4,0,.2,1),left .2s cubic-bezier(.4,0,.2,1),right .2s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1),max-width .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1);position:relative;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-toolbar .v-input{padding-top:0;margin-top:0}.v-toolbar__content,.v-toolbar__extension{padding:4px 16px}.v-toolbar__content .v-btn.v-btn--icon.v-size--default,.v-toolbar__extension .v-btn.v-btn--icon.v-size--default{height:48px;width:48px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child{margin-left:-12px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child{margin-right:-12px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{padding-left:20px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{padding-right:20px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:last-child{margin-right:-12px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:last-child{margin-left:-12px}.v-toolbar__content>.v-tabs,.v-toolbar__extension>.v-tabs{height:inherit;margin-top:-4px;margin-bottom:-4px}.v-toolbar__content>.v-tabs>.v-slide-group.v-tabs-bar,.v-toolbar__extension>.v-tabs>.v-slide-group.v-tabs-bar{background-color:inherit;height:inherit}.v-toolbar__content>.v-tabs:first-child,.v-toolbar__extension>.v-tabs:first-child{margin-left:-16px}.v-toolbar__content>.v-tabs:last-child,.v-toolbar__extension>.v-tabs:last-child{margin-right:-16px}.v-toolbar__content,.v-toolbar__extension{align-items:center;display:flex;position:relative;z-index:0}.v-toolbar__image{position:absolute;top:0;bottom:0;width:100%;z-index:0;contain:strict}.v-toolbar__image,.v-toolbar__image .v-image{border-radius:inherit}.v-toolbar__items{display:flex;height:inherit}.v-toolbar__items>.v-btn{border-radius:0;height:100%!important;max-height:none}.v-toolbar__title{font-size:1.25rem;line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-toolbar.v-toolbar--absolute{position:absolute;top:0;z-index:1}.v-toolbar.v-toolbar--bottom{top:auto;bottom:0}.v-toolbar.v-toolbar--collapse .v-toolbar__title{white-space:nowrap}.v-toolbar.v-toolbar--collapsed{max-width:112px;overflow:hidden}.v-application--is-ltr .v-toolbar.v-toolbar--collapsed{border-bottom-right-radius:24px}.v-application--is-rtl .v-toolbar.v-toolbar--collapsed{border-bottom-left-radius:24px}.v-toolbar.v-toolbar--collapsed .v-toolbar__extension,.v-toolbar.v-toolbar--collapsed .v-toolbar__title{display:none}.v-toolbar--dense .v-toolbar__content,.v-toolbar--dense .v-toolbar__extension{padding-top:0;padding-bottom:0}.v-toolbar--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-toolbar--floating{display:inline-flex}.v-toolbar--prominent .v-toolbar__content{align-items:flex-start}.v-toolbar--prominent .v-toolbar__title{font-size:1.5rem;padding-top:6px}.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title{align-self:flex-end;padding-bottom:6px;padding-top:0}",""]),t.exports=e},538:function(t,e,o){var content=o(574);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("e810a50c",content,!0,{sourceMap:!1})},573:function(t,e,o){"use strict";o(538)},574:function(t,e,o){(e=o(32)(!1)).push([t.i,".nuxt-rails-img{opacity:.8}",""]),t.exports=e},575:function(t,e,o){"use strict";o(358);var n=o(373);e.a=Object(n.a)("flex")},648:function(t,e,o){"use strict";o.r(e);var n={name:"About",components:{AppNavigation:o(381).default}},r=(o(573),o(58)),l=o(68),c=o.n(l),h=o(575),v=o(375),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("AppNavigation"),t._v(" "),o("div",{staticClass:"layout row wrap align-center"},[o("v-flex",{attrs:{xs12:"",sm4:"","px-3":""}},[o("div",{staticClass:"about-thumb text-xs-center mb-4"},[o("v-img",{attrs:{src:"https://images.unsplash.com/photo-1533619771522-a3a9e28a75df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cnVnZ2VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","aspect-ratio":"1"}})],1)]),t._v(" "),o("v-flex",{attrs:{xs12:"",sm4:"","px-3":""}},[o("div",{staticClass:"about-thumb text-xs-center mb-4 nuxt-rails-img"},[o("v-img",{attrs:{src:"https://images.unsplash.com/photo-1511075496994-5298164dae11?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY5fHxyZWQlMjBncmVlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60","aspect-ratio":"1"}})],1)]),t._v(" "),o("v-flex",{attrs:{xs12:"",sm4:"","px-3":""}},[o("div",{staticClass:"about-thumb text-xs-center mb-4"},[o("v-img",{attrs:{src:"https://images.unsplash.com/photo-1525982567065-4d879ca11468?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzUzfHxyZWQlMjBncmVlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60","aspect-ratio":"1"}})],1)])],1),t._v(" "),o("div",{staticClass:"layout row wrap align-center"},[o("v-flex",{attrs:{"xs-12":"",sm4:"","px-3":""}},[o("div",{staticClass:"section-head"},[o("h2",{staticClass:"section-title"},[t._v("Origin")]),t._v(" "),o("div",{staticClass:"section-meta"},[t._v("\n          “Ramp Up”には“英語で坂道やスロープを駆け上がる”、“独り立ちする”、“強化する”という意味があります。"),o("br"),t._v("\n          夢に向かって学習を継続することは時に困難となることもあるかと思います。"),o("br"),t._v("\n          坂道のように険しい道のりかもしれません。"),o("br"),t._v("\n          しかし、継続した先にはまだ見ぬ素晴らしい景色が待っているのではないでしょうか。"),o("br"),t._v("\n          そのような道を駆け上がっていくお手伝いができれば、そんな思いを込めて、“Ramp Up”と名付けました。")])]),t._v(" "),o("div",{staticClass:"section-body"})]),t._v(" "),o("v-flex",{attrs:{"xs-12":"",sm4:"","px-3":""}},[o("div",{staticClass:"section-head"},[o("h2",{staticClass:"section-title"},[t._v("Concept")]),t._v(" "),o("div",{staticClass:"section-meta"},[t._v("\n          “ユーザーがより快適に使える”がRamp Upのコンセプトです。"),o("br"),t._v("\n          フロントエンドとバックエンドを切り離し、完全SPA化を実現しました。"),o("br"),t._v("\n          Nuxt.jsとRails APIの2つのアプリを使用して、実装しています。"),o("br"),t._v("\n          コンセプトに沿った実装をするために実現したいことは、まだまだたくさんあります。"),o("br"),t._v("\n          今後はAWSへのデプロイやデザイン、機能の修正を行い、よりユーザーにとって使いやすいアプリの実現に取り組みます。"),o("br"),o("br")])]),t._v(" "),o("div",{staticClass:"section-body"})]),t._v(" "),o("v-flex",{attrs:{"xs-12":"",sm4:"","px-3":""}},[o("div",{staticClass:"section-head"},[o("h2",{staticClass:"section-title"},[t._v("Author")]),t._v(" "),o("div",{staticClass:"section-meta"},[t._v("\n          ケンチキと申します。"),o("br"),t._v("\n          公務員として働いていましたが、プログラミングに出会い、その魅力に引き込まれて、気づけばプログラマーへの転職を目指していました。"),o("br"),t._v("\n          作りたいサービスの実現に向けて、タスクを実現するための実装方針を考え、ロジックをコードに反映し、上手くいかない箇所は何度もデバッグして改善する。"),o("br"),t._v("\n          この過程が楽しくて、毎日アプリの開発に取り組んでいます。"),o("br"),t._v("\n          2020年の12月末をもって前職を退職し、現在転職活動中です。")])]),t._v(" "),o("div",{staticClass:"section-body"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{AppNavigation:o(381).default}),c()(component,{VFlex:h.a,VImg:v.a})}}]);