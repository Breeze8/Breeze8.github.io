(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{243:function(e,t,n){var content=n(263);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("d9a2a034",content,!0,{sourceMap:!1})},244:function(e,t,n){var content=n(265);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("6dd8023a",content,!0,{sourceMap:!1})},262:function(e,t,n){"use strict";var r=n(243);n.n(r).a},263:function(e,t,n){(t=n(11)(!1)).push([e.i,'.news-page__item{margin:30px 15px}.news-page__item-button{padding:15px 45px 15px 30px;font-weight:400;font-size:18px;margin:10px 0}.news-page__item-date{font-weight:400;font-size:22px;color:#ce323a}.news-page__item-body{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}@media (max-width:768px){.news-page__item-body{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}.news-page__item-text{width:50%;padding-left:60px;position:relative;z-index:5}@media (max-width:768px){.news-page__item-text{width:100%;-webkit-box-ordinal-group:2;order:1;margin:15px 0;padding-left:0}}.news-page__item-text:after{content:"";background-image:url(/img/svg/hierogliph.svg);height:115px;width:100px;position:absolute;top:-35px;z-index:5;left:0;background-size:cover}.news-page__item-title{font-weight:400;font-size:20px;cursor:pointer}.news-page__item-image{width:50%;cursor:pointer}@media (max-width:768px){.news-page__item-image{width:100%;-webkit-box-ordinal-group:3;order:2}}.news-page__item-image img{max-width:100%;display:block;height:auto}',""]),e.exports=t},264:function(e,t,n){"use strict";var r=n(244);n.n(r).a},265:function(e,t,n){(t=n(11)(!1)).push([e.i,".news-page__title{font-weight:400;font-size:34px;margin-top:40px;margin-left:15px}@media (max-width:768px){.news-page__title{margin-top:10px;font-size:20px}}",""]),e.exports=t},279:function(e,t,n){"use strict";n.r(t);n(20),n(13),n(10),n(8),n(17);var r=n(3),o=n(6),c={name:"NewsItem",props:{news:{type:Object,default:function(){}}},methods:{routeFull:function(e){this.$router.push("news/".concat(e))}}},l=(n(262),n(2));function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var _={name:"NewsPage",components:{NewsItem:Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"news-page__item"},[n("header",{staticClass:"news-page__item-header"},[n("time",{staticClass:"news-page__item-date"},[e._v(e._s(e.news.publishedon))]),n("br")]),e._v(" "),n("main",{staticClass:"news-page__item-body"},[e.news.preview?n("div",{staticClass:"news-page__item-image",on:{click:function(t){return t.preventDefault(),e.routeFull(e.news.alias)}}},[n("img",{attrs:{src:e.news.preview,alt:e.news.title,title:e.news.title}})]):e._e(),e._v(" "),n("div",{staticClass:"news-page__item-text"},[n("h2",{staticClass:"news-page__item-title",on:{click:function(t){return t.preventDefault(),e.routeFull(e.news.alias)}}},[e._v("\n          "+e._s(e.news.title)+"\n        ")]),e._v(" "),e.news.description?n("p",{staticClass:"news-page__item-description"},[n("span",{domProps:{innerHTML:e._s(e.news.description)}})]):e._e()])])])}),[],!1,null,null,null).exports},head:{title:"Новости"},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({news:"news/news"})),mounted:function(){var e=this;setTimeout((function(){e.$refs.block.scrollIntoView()}),100)}},d=(n(264),Object(l.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"block",staticClass:"news-page"},[t("h1",{staticClass:"news-page__title"},[this._v("\n    Новости\n  ")]),this._v(" "),t("div",{staticClass:"news-page__container"},[this._l(this.news,(function(e,n){return[t("news-item",{key:n,attrs:{news:e}})]}))],2)])}),[],!1,null,null,null));t.default=d.exports}}]);