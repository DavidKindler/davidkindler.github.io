(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{252:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return g}));var n=r(0),o=r.n(n),a=r(62),c=r.n(a),i=r(248),p=r(247),l=r(295),u=r(251),s=r(249),d=r(9),f=r.n(d);t.default=function(e){return console.log("page props",e),o.a.createElement(i.a,null,o.a.createElement(c.a,null,o.a.createElement("title",null,e.data.post.frontmatter.title+" | "+f.a.siteTitle)),o.a.createElement(s.a,{postPath:e.data.post.fields.slug,postNode:e.data.post,postSEO:!0}),o.a.createElement(u.a,{heroImg:e.data.post.frontmatter.cover&&e.data.post.frontmatter.cover.publicURL,title:e.data.post.frontmatter.title}),o.a.createElement(p.a,null,o.a.createElement(l.a,{post:e.data.post})))};var g="2172125653"},269:function(e,t,r){var n=r(12),o=r(77),a=r(50),c=r(14),i=r(15),p=r(18),l=r(279),u=(r(11).Reflect||{}).construct,s=p((function(){function e(){}return!(u((function(){}),[],e)instanceof e)})),d=!p((function(){u((function(){}))}));n(n.S+n.F*(s||d),"Reflect",{construct:function(e,t){a(e),c(t);var r=arguments.length<3?e:a(arguments[2]);if(d&&!s)return u(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(l.apply(e,n))}var p=r.prototype,f=o(i(p)?p:Object.prototype),g=Function.apply.call(e,f,t);return i(g)?g:f}})},278:function(e,t,r){function n(e,t,r){return(n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(29),r(4),r(10),r(76),r(158),r(37),r(13),r(5),r(75),r(27),r(3),r(269),r(269),r(75),r(76),r(158),r(27),r(37),r(29),r(13),r(5),r(4),r(3),r(10);var l=r(0),u=r(95),s=u.useMDXComponents,d=u.mdx,f=r(114).useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,o=e.children,c=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["scope","components","children"]),p=s(r),u=f(t),g=l.useMemo((function(){if(!o)return null;var e=i({React:l,mdx:d},u),t=Object.keys(e),r=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(r)))}),[o,t]);return l.createElement(g,i({components:p},c))}},279:function(e,t,r){"use strict";var n=r(50),o=r(15),a=r(160),c=[].slice,i={},p=function(e,t,r){if(!(t in i)){for(var n=[],o=0;o<t;o++)n[o]="a["+o+"]";i[t]=Function("F,a","return new F("+n.join(",")+")")}return i[t](e,r)};e.exports=Function.bind||function(e){var t=n(this),r=c.call(arguments,1),i=function(){var n=r.concat(c.call(arguments));return this instanceof i?p(t,n.length,n):a(t,n,e)};return o(t.prototype)&&(i.prototype=t.prototype),i}},295:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(2),c=r(250),i=r(1);var p=a.b.header.withConfig({displayName:"ContentHeader__Header",componentId:"lwkty-0"})(["margin-bottom:2rem;color:",";"],i.a.textLight),l=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.date,r=e.tags;return o.a.createElement(p,null,t&&o.a.createElement("time",null,t),Array.isArray(r)&&r.length>0&&o.a.createElement(n.Fragment,null,o.a.createElement("span",null," in"),o.a.createElement(c.a,{tags:r,icon:!0})))},a}(o.a.Component),u=r(278),s=r.n(u);var d=a.b.div.withConfig({displayName:"Content__ContentBody",componentId:"sc-3e6ouj-0"})(["line-height:1.6;& > h2{padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{box-shadow:0 2px 0 0 ",";&:hover{filter:brightness(150%);box-shadow:none;}&.anchor,&.gatsby-resp-image-link{box-shadow:none;}}& > blockquote{box-sizing:border-box;background-color:#f7f7f7;border-left:5px solid rgb(244,213,36);margin:30px 0px;padding:5px 20px;border-radius:0 8px 8px 0;}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em 0em 1.5em 0;}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight-code-line{background-color:",";display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid ",";}& h1 > code.language-text,& h2 > code.language-text,& h3 > code.language-text,& h4 > code.language-text,& h5 > code.language-text,& h6 > code.language-text,& a > code.language-text,& p > code.language-text,& li > code.language-text,& em > code.language-text,& strong > code.language-text{background:",";color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;word-wrap:break-word;}& code{white-space:pre-wrap;word-wrap:break-word;}& table{margin-top:1em;border-collapse:collapse;border-radius:0.5em;overflow:hidden;& th,& td{padding:0.5em;background:#f7f7f7;border-bottom:2px solid ",";}}"],i.a.links,i.a.highlight_code_linebg,i.a.highlight_code_bg,i.a.highlight_code_oneline,i.a.white),f=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.content,r=e.date,n=e.tags;return o.a.createElement("section",null,(n||r)&&o.a.createElement(l,{date:r,tags:n}),o.a.createElement(d,null,o.a.createElement(s.a,null,t)))},n}(o.a.Component);var g=a.b.article.withConfig({displayName:"Article__ArticleWrapper",componentId:"sc-1y4w3nm-0"})(["padding:0 30px 30px;@media ","{padding:0;}"],i.b.medium),m=(a.b.footer.withConfig({displayName:"Article__ArticleFooter",componentId:"sc-1y4w3nm-1"})(["position:relative;margin:6rem 0 0;padding:3rem 0 0;border-top:1px solid #ececec;"]),function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.post;return o.a.createElement(g,null,o.a.createElement(f,{content:e.body,date:e.frontmatter.date,tags:e.frontmatter.tags}))},n}(o.a.Component));t.a=m}}]);
//# sourceMappingURL=component---src-templates-page-jsx-78b5e0fcbeedab7229f8.js.map