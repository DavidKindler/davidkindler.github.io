(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{256:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(61),i=a.n(o),p=a(249),d=a(252),c=a(250),s=a(251),m=a(17),l=a(2),g=a(1);var u=l.b.nav.withConfig({displayName:"Pagination__PaginationWrapper",componentId:"voagdd-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-top:4em;justify-content:space-between;width:80%;max-width:770px;padding:25px 0;margin:0px auto;@media (max-width:780px){width:90%;padding:25px 0;}"]),x=Object(l.b)(m.Link).withConfig({displayName:"Pagination__PageBtn",componentId:"voagdd-1"})(["border-radius:3px;background-color:",";border:1px solid ",";color:",";padding:8px 20px;min-width:130px;&:hover{background-color:",";color:",";border:1px solid ",";}@media (max-width:564px){margin-top:10px;width:100%;}"],g.a.primary,g.a.primary,g.a.textLightest,g.a.textLightest,g.a.primary,g.a.primary),h=Object(l.b)(x).withConfig({displayName:"Pagination__PreviousBtn",componentId:"voagdd-2"})(["order:1;@media (max-width:564px){order:2;}"]),w=Object(l.b)(x).withConfig({displayName:"Pagination__NextBtn",componentId:"voagdd-3"})(["order:3;"]),y=l.b.span.withConfig({displayName:"Pagination__Spacer",componentId:"voagdd-4"})(["display:block;min-width:130px;&.previous{order:1;}&.next{order:3;}@media (max-width:564px){display:none;&.previous{order:2;}&.next{order:3;}}"]),b=l.b.span.withConfig({displayName:"Pagination__PageInfo",componentId:"voagdd-5"})(["order:2;padding:1em 0;@media (max-width:564px){order:1;}"]),f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.currentPage,a=e.nbPages,n=2===t?"/":t-1;return r.a.createElement(u,null,1!==t?r.a.createElement(h,{to:"/"+n},"‹ Newer posts"):r.a.createElement(y,{className:"previous"}),r.a.createElement(b,null,"Page ",t," of ",a),t<a?r.a.createElement(w,{to:"/"+(t+1)},"Older posts ›"):r.a.createElement(y,{className:"next"}))},n}(r.a.Component),_=a(9),v=a.n(_);a.d(t,"listingQuery",(function(){return E}));var P=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext,a=t.currentPageNum,n=t.pageCount;return r.a.createElement(p.a,null,r.a.createElement(i.a,{title:v.a.siteTitle}),r.a.createElement(s.a,null),r.a.createElement(c.a,null,r.a.createElement(d.a,{postEdges:e})),r.a.createElement(f,{nbPages:n,currentPage:a}))},n}(r.a.Component),E=(t.default=P,"2956175842")}}]);
//# sourceMappingURL=component---src-templates-listing-jsx-e42d5b2a862bdb46df01.js.map