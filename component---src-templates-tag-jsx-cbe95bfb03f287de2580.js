(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{291:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return u})),o.d(e,"pageQuery",(function(){return g}));var r=o(0),a=o.n(r),n=o(77),i=o.n(n),l=o(286),c=o(332),p=o(285),s=o(287),m=o(12),d=o.n(m);var u=function(t){var e,o;function r(){return t.apply(this,arguments)||this}return o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,r.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges;return a.a.createElement(l.a,null,a.a.createElement(i.a,{title:d.a.siteTitle}),a.a.createElement(s.a,null),a.a.createElement(p.a,null,a.a.createElement("h1",null,'Posts tagged as "',this.props.pageContext.tag,'"'),a.a.createElement(c.a,{postEdges:t})))},r}(a.a.Component),g="4123080667"},332:function(t,e,o){"use strict";o(21);var r=o(0),a=o.n(r),n=o(30),i=o(288),l=o(3),c=o(1),p=l.b.article.withConfig({displayName:"PostListItem__Post",componentId:"p83z12-0"})(["border-bottom:1px solid rgba(214,209,230,0.5);padding-bottom:1.25rem;"]),s=Object(l.b)(n.Link).withConfig({displayName:"PostListItem__ReadPost",componentId:"p83z12-1"})(["display:block;font-size:0.75rem;margin-top:1rem;text-align:center;text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;line-height:2;color:",";&:hover{background-color:",";border-radius:0.25rem;color:",";}"],c.a.primary,c.a.primaryAlpha,c.a.textLightest),m=l.b.time.withConfig({displayName:"PostListItem__PostDate",componentId:"p83z12-2"})(["color:",";&:before{content:'🗓';margin-right:0.2rem;}"],c.a.textLight),d=l.b.header.withConfig({displayName:"PostListItem__PostHeader",componentId:"p83z12-3"})(["padding:1em 0;"]),u=Object(l.b)(n.Link).withConfig({displayName:"PostListItem__Excerpt",componentId:"p83z12-4"})(["display:block;line-height:1.45;margin-bottom:0.5em;&:hover{background-color:",";color:",";opacity:0.7;}"],c.a.primary,c.a.textLightest),g=Object(l.b)(n.Link).withConfig({displayName:"PostListItem__PostTitleLink",componentId:"p83z12-5"})(["color:",";&:hover{border-bottom:1px dotted ",";}"],c.a.primary,c.a.primary),h=function(t){var e=t.title,o=t.excerpt,r=t.slug,n=t.date,l=t.tags;return a.a.createElement(p,null,a.a.createElement(d,null,a.a.createElement("h2",null,a.a.createElement(g,{to:r},e))),a.a.createElement("section",null,a.a.createElement(u,{to:r,dangerouslySetInnerHTML:{__html:o}})),a.a.createElement("footer",null,a.a.createElement(i.a,{tags:l,icon:!0}),a.a.createElement(m,null,n),a.a.createElement(s,{to:r,"aria-label":"View "+e+" article"},"Read post ›")))};var f=function(t){var e,o;function r(){return t.apply(this,arguments)||this}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var n=r.prototype;return n.getPostList=function(){var t=[];return this.props.postEdges.forEach((function(e){t.push({slug:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})})),t},n.render=function(){var t=this.getPostList();return a.a.createElement(a.a.Fragment,null,t.map((function(t){return a.a.createElement(h,Object.assign({key:t.title},t))})))},r}(a.a.Component);e.a=f}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-cbe95bfb03f287de2580.js.map