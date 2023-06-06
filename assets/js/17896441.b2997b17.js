"use strict";(self.webpackChunkgizmodo_woods_github_io=self.webpackChunkgizmodo_woods_github_io||[]).push([[918],{1310:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),l=a(7294),o=a(6010),r=a(5281),s=a(2802),c=a(8596),i=a(9960),d=a(5999),m=a(4996);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function p(){const e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:b.breadcrumbHomeIcon})))}const E={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function h(e){let{children:t,href:a,isLast:n}=e;const o="breadcrumbs__link";return n?l.createElement("span",{className:o,itemProp:"name"},t):a?l.createElement(i.Z,{className:o,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:o},t)}function v(e){let{children:t,active:a,index:r,addMicrodata:s}=e;return l.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(r+1)}))}function g(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?l.createElement("nav",{className:(0,o.Z)(r.k.docs.docBreadcrumbs,E.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(p,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(v,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(h,{href:t.href,isLast:n},t.label))})))):null}},230:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var n=a(7294),l=a(1944),o=a(902);const r=n.createContext(null);function s(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(r.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(r);if(null===e)throw new o.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(6010),m=a(7524),u=a(4966);function b(){const{metadata:e}=c();return n.createElement(u.Z,{previous:e.previous,next:e.next})}var p=a(3120),E=a(4364),h=a(5281),v=a(5999);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:h.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var Z=a(7462);const N={iconEdit:"iconEdit_Z9Sw"};function k(e){let{className:t,...a}=e;return n.createElement("svg",(0,Z.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(N.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function L(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:h.k.common.editThisPage},n.createElement(k,null),n.createElement(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C=a(9960);const T={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function U(e){let{permalink:t,label:a,count:l}=e;return n.createElement(C.Z,{href:t,className:(0,d.Z)(T.tag,l?T.tagWithCount:T.tagRegular)},a,l&&n.createElement("span",null,l))}const w={tags:"tags_jXut",tag:"tag_QGVx"};function x(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(w.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:w.tag},n.createElement(U,{label:t,permalink:a}))}))))}const y={lastUpdated:"lastUpdated_vwxv"};function A(e){return n.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(x,e)))}function M(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return n.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",y.lastUpdated)},(a||l)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function B(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:o,tags:r}=e,s=r.length>0,i=!!(t||a||o);return s||i?n.createElement("footer",{className:(0,d.Z)(h.k.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(A,{tags:r}),i&&n.createElement(M,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var I=a(6043),V=a(3743);const H={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function P(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,Z.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",H.tocCollapsibleButton,!t&&H.tocCollapsibleButtonExpanded,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const D={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function S(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:s}=(0,I.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(D.tocCollapsible,!r&&D.tocCollapsibleExpanded,a)},n.createElement(P,{collapsed:r,onClick:s}),n.createElement(I.z,{lazy:!0,className:D.tocCollapsibleContent,collapsed:r},n.createElement(V.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const z={tocMobile:"tocMobile_ITEo"};function F(){const{toc:e,frontMatter:t}=c();return n.createElement(S,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(h.k.docs.docTocMobile,z.tocMobile)})}var R=a(9407);function O(){const{toc:e,frontMatter:t}=c();return n.createElement(R.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:h.k.docs.docTocDesktop})}var j=a(2503),G=a(1506);function W(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(h.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(j.Z,{as:"h1"},a)),n.createElement(G.Z,null,t))}var q=a(1310);const J={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Q(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),l=e.hide_table_of_contents,o=!l&&t.length>0;return{hidden:l,mobile:o?n.createElement(F,null):void 0,desktop:!o||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(O,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&J.docItemCol)},n.createElement(p.Z,null),n.createElement("div",{className:J.docItemContainer},n.createElement("article",null,n.createElement(q.Z,null),n.createElement(E.Z,null),a.mobile,n.createElement(W,null,t),n.createElement(B,null)),n.createElement(b,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function X(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(Q,null,n.createElement(a,null))))}},4966:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7462),l=a(7294),o=a(5999),r=a(6010),s=a(9960);function c(e){const{permalink:t,title:a,subLabel:n,isNext:o}=e;return l.createElement(s.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,n.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(c,(0,n.Z)({},a,{subLabel:l.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),o=a(5999),r=a(5281),s=a(4477);function c(e){let{className:t}=e;const a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3120:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7294),l=a(6010),o=a(2263),r=a(9960),s=a(5999),c=a(143),i=a(5281),d=a(373),m=a(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,o.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:E}=(0,c.Jo)(s),h=u??(v=E).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:E.label,to:h.path,onClick:()=>m(E.name)})))}function h(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}}}]);