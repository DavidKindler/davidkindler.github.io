(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+DWa":function(e,t,a){"use strict";a.r(t),a.d(t,"listingQuery",(function(){return I}));var o=a("q1tI"),n=a.n(o),r=a("TJpk"),i=a.n(r),p=a("hpys"),d=a("zOpi"),c=a("v5lq"),l=a("DGZL"),s=a("BA+R"),m=a("Wbzz"),g=a("vOnD"),u=a("5hye");var h=g.b.nav.withConfig({displayName:"Pagination__PaginationWrapper",componentId:"voagdd-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-top:4em;justify-content:space-between;width:80%;max-width:770px;padding:25px 0;margin:0px auto;@media (max-width:780px){width:90%;padding:25px 0;}"]),b=Object(g.b)(m.Link).withConfig({displayName:"Pagination__PageBtn",componentId:"voagdd-1"})(["border-radius:3px;background-color:",";border:1px solid ",";color:",";padding:8px 20px;min-width:130px;&:hover{background-color:",";color:",";border:1px solid ",";}@media (max-width:564px){margin-top:10px;width:100%;}"],u.a.primary,u.a.primary,u.a.textLightest,u.a.textLightest,u.a.primary,u.a.primary),y=Object(g.b)(b).withConfig({displayName:"Pagination__PreviousBtn",componentId:"voagdd-2"})(["order:1;@media (max-width:564px){order:2;}"]),f=Object(g.b)(b).withConfig({displayName:"Pagination__NextBtn",componentId:"voagdd-3"})(["order:3;"]),x=g.b.span.withConfig({displayName:"Pagination__Spacer",componentId:"voagdd-4"})(["display:block;min-width:130px;&.previous{order:1;}&.next{order:3;}@media (max-width:564px){display:none;&.previous{order:2;}&.next{order:3;}}"]),_=g.b.span.withConfig({displayName:"Pagination__PageInfo",componentId:"voagdd-5"})(["order:2;padding:1em 0;@media (max-width:564px){order:1;}"]),w=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.currentPage,a=e.nbPages,o=2===t?"/":t-1;return n.a.createElement(h,null,1!==t?n.a.createElement(y,{to:"/"+o},"‹ Newer posts"):n.a.createElement(x,{className:"previous"}),n.a.createElement(_,null,"Page ",t," of ",a),t<a?n.a.createElement(f,{to:"/"+(t+1)},"Older posts ›"):n.a.createElement(x,{className:"next"}))},o}(n.a.Component),v=a("U0YC"),E=a.n(v);var P=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext,a=t.currentPageNum,o=t.pageCount;return n.a.createElement(p.a,null,n.a.createElement(i.a,{title:E.a.siteTitle}),n.a.createElement(l.a,null),n.a.createElement(s.a,{title:E.a.siteTitle,subTitle:E.a.description}),n.a.createElement(c.a,null,n.a.createElement(d.a,{postEdges:e})),n.a.createElement(w,{nbPages:o,currentPage:a}))},o}(n.a.Component),I=(t.default=P,"2020978277")},zOpi:function(e,t,a){"use strict";a("E5k/");var o=a("q1tI"),n=a.n(o),r=a("Wbzz"),i=a("8+RX"),p=a("vOnD"),d=a("5hye"),c=p.b.article.withConfig({displayName:"PostListItem__Post",componentId:"p83z12-0"})(["border-bottom:1px solid rgba(214,209,230,0.5);padding-bottom:1.25rem;"]),l=Object(p.b)(r.Link).withConfig({displayName:"PostListItem__ReadPost",componentId:"p83z12-1"})(["display:block;font-size:0.75rem;margin-top:1rem;text-align:center;text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;line-height:2;color:",";&:hover{background-color:",";border-radius:0.25rem;color:",";}"],d.a.primary,d.a.primaryAlpha,d.a.textLightest),s=p.b.time.withConfig({displayName:"PostListItem__PostDate",componentId:"p83z12-2"})(["color:",";&:before{content:'🗓';margin-right:0.2rem;}"],d.a.textLight),m=p.b.header.withConfig({displayName:"PostListItem__PostHeader",componentId:"p83z12-3"})(["padding:1em 0;"]),g=Object(p.b)(r.Link).withConfig({displayName:"PostListItem__Excerpt",componentId:"p83z12-4"})(["display:block;line-height:1.45;margin-bottom:0.5em;&:hover{background-color:",";color:",";opacity:0.7;}"],d.a.primary,d.a.textLightest),u=Object(p.b)(r.Link).withConfig({displayName:"PostListItem__PostTitleLink",componentId:"p83z12-5"})(["color:",";&:hover{border-bottom:1px dotted ",";}"],d.a.primary,d.a.primary),h=function(e){var t=e.title,a=e.excerpt,o=e.slug,r=e.date,p=e.tags;return n.a.createElement(c,null,n.a.createElement(m,null,n.a.createElement("h2",null,n.a.createElement(u,{to:o},t))),n.a.createElement("section",null,n.a.createElement(g,{to:o,dangerouslySetInnerHTML:{__html:a}})),n.a.createElement("footer",null,n.a.createElement(i.a,{tags:p,icon:!0}),n.a.createElement(s,null,r),n.a.createElement(l,{to:o,"aria-label":"View "+t+" article"},"Read post ›")))};var b=function(e){var t,a;function o(){return e.apply(this,arguments)||this}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=o.prototype;return r.getPostList=function(){var e=[];return this.props.postEdges.forEach((function(t){e.push({slug:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e},r.render=function(){var e=this.getPostList();return n.a.createElement(n.a.Fragment,null,e.map((function(e){return n.a.createElement(h,Object.assign({key:e.title},e))})))},o}(n.a.Component);t.a=b}}]);
//# sourceMappingURL=component---src-templates-listing-jsx-cb30b4f992673f3479d7.js.map