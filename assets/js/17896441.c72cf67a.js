"use strict";(self.webpackChunkgizmodo_woods_github_io=self.webpackChunkgizmodo_woods_github_io||[]).push([["48"],{5872:function(e,t,n){n.d(t,{Z:()=>x});var s=n("5893");n("7294");var a=n("4904"),i=n("6171"),l=n("5771"),o=n("3868"),r=n("3367"),c=n("7670"),d=n("3187");function u(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function m(){let e=(0,d.ZP)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(r.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(u,{className:"breadcrumbHomeIcon_YNFT"})})})}function h(e){let{children:t,href:n,isLast:a}=e,i="breadcrumbs__link";return a?(0,s.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,s.jsx)(r.Z,{className:i,href:n,itemProp:"item",children:(0,s.jsx)("span",{itemProp:"name",children:t})}):(0,s.jsx)("span",{className:i,children:t})}function b(e){let{children:t,active:n,index:i,addMicrodata:l}=e;return(0,s.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,s.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function x(){let e=(0,l.s1)(),t=(0,o.Ns)();return e?(0,s.jsx)("nav",{className:(0,a.Z)(i.k.docs.docBreadcrumbs,"breadcrumbsContainer_Z_bl"),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,s.jsx)(m,{}),e.map((t,n)=>{let a=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,s.jsx)(b,{active:a,index:n,addMicrodata:!!i,children:(0,s.jsx)(h,{href:i,isLast:a,children:t.label})},n)})]})}):null}},6613:function(e,t,n){n.r(t),n.d(t,{default:()=>D});var s=n("5893"),a=n("7294"),i=n("9258"),l=n("1934");let o=a.createContext(null);function r(e){let{children:t,content:n}=e,i=(0,a.useMemo)(()=>({metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,contentTitle:n.contentTitle,toc:n.toc}),[n]);return(0,s.jsx)(o.Provider,{value:i,children:t})}function c(){let e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function d(){let{metadata:e,frontMatter:t,assets:n}=c();return(0,s.jsx)(i.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n("4904"),m=n("7550"),h=n("2368");function b(){let{metadata:e}=c();return(0,s.jsx)(h.Z,{previous:e.previous,next:e.next})}var x=n("9548"),v=n("1987"),p=n("6171"),j=n("7670"),g=n("3367");let f={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function _(e){let{permalink:t,label:n,count:a,description:i}=e;return(0,s.jsxs)(g.Z,{href:t,title:i,className:(0,u.Z)(f.tag,a?f.tagWithCount:f.tagRegular),children:[n,a&&(0,s.jsx)("span",{children:a})]})}function Z(e){let{tags:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("b",{children:(0,s.jsx)(j.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,s.jsx)("ul",{className:(0,u.Z)("tags_jXut","padding--none","margin-left--sm"),children:t.map(e=>(0,s.jsx)("li",{className:"tag_QGVx",children:(0,s.jsx)(_,{...e})},e.permalink))})]})}var C=n("8042");function N(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,tags:i}=e,l=i.length>0,o=!!(t||n||a);return l||o?(0,s.jsxs)("footer",{className:(0,u.Z)(p.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,s.jsx)("div",{className:(0,u.Z)("row margin-top--sm",p.k.docs.docFooterTagsRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(Z,{tags:i})})}),o&&(0,s.jsx)(C.Z,{className:(0,u.Z)("margin-top--sm",p.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a})]}):null}var k=n("6850"),L=n("6643");let T={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function w(e){let{collapsed:t,...n}=e;return(0,s.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",T.tocCollapsibleButton,!t&&T.tocCollapsibleButtonExpanded,n.className),children:(0,s.jsx)(j.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let I={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function B(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:i}=e,{collapsed:l,toggleCollapsed:o}=(0,k.u)({initialState:!0});return(0,s.jsxs)("div",{className:(0,u.Z)(I.tocCollapsible,!l&&I.tocCollapsibleExpanded,n),children:[(0,s.jsx)(w,{collapsed:l,onClick:o}),(0,s.jsx)(k.z,{lazy:!0,className:I.tocCollapsibleContent,collapsed:l,children:(0,s.jsx)(L.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:i})})]})}function E(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(B,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(p.k.docs.docTocMobile,"tocMobile_ITEo")})}var M=n("9521");function V(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(M.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var y=n("6055"),A=n("666");function H(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,s.jsxs)("div",{className:(0,u.Z)(p.k.docs.docMarkdown,"markdown"),children:[n&&(0,s.jsx)("header",{children:(0,s.jsx)(y.Z,{as:"h1",children:n})}),(0,s.jsx)(A.Z,{children:t})]})}var P=n("5872"),F=n("7624");let R={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function z(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.i)(),a=e.hide_table_of_contents,i=!a&&t.length>0;return{hidden:a,mobile:i?(0,s.jsx)(E,{}):void 0,desktop:i&&("desktop"===n||"ssr"===n)?(0,s.jsx)(V,{}):void 0}}(),{metadata:a}=c();return(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&R.docItemCol),children:[(0,s.jsx)(F.Z,{metadata:a}),(0,s.jsx)(x.Z,{}),(0,s.jsxs)("div",{className:R.docItemContainer,children:[(0,s.jsxs)("article",{children:[(0,s.jsx)(P.Z,{}),(0,s.jsx)(v.Z,{}),n.mobile,(0,s.jsx)(H,{children:t}),(0,s.jsx)(N,{})]}),(0,s.jsx)(b,{})]})]}),n.desktop&&(0,s.jsx)("div",{className:"col col--3",children:n.desktop})]})}function D(e){let t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,s.jsx)(r,{content:e.content,children:(0,s.jsxs)(i.FG,{className:t,children:[(0,s.jsx)(d,{}),(0,s.jsx)(z,{children:(0,s.jsx)(n,{})})]})})}},2368:function(e,t,n){n.d(t,{Z:()=>r});var s=n("5893");n("7294");var a=n("7670"),i=n("4904"),l=n("3367");function o(e){let{permalink:t,title:n,subLabel:a,isNext:o}=e;return(0,s.jsxs)(l.Z,{className:(0,i.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,s.jsx)("div",{className:"pagination-nav__label",children:n})]})}function r(e){let{previous:t,next:n}=e;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,s.jsx)(o,{...t,subLabel:(0,s.jsx)(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,s.jsx)(o,{...n,subLabel:(0,s.jsx)(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},1987:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(5893);n(7294);var a=n(4904),i=n(7670),l=n(6171),o=n(9873);function r(e){let{className:t}=e,n=(0,o.E)();return n.badge?(0,s.jsx)("span",{className:(0,a.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,s.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},9548:function(e,t,n){n.d(t,{Z:function(){return v}});var s=n(5893);n(7294);var a=n(4904),i=n(7262),l=n(3367),o=n(7670),r=n(8854),c=n(6171),d=n(7137),u=n(9873);let m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){let t=m[e.versionMetadata.banner];return(0,s.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,s.jsx)(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(l.Z,{to:n,onClick:a,children:(0,s.jsx)(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:l}}=(0,i.Z)(),{pluginId:o}=(0,r.gA)({failfast:!0}),{savePreferredVersionName:u}=(0,d.J)(o),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,r.Jo)(o),v=m??x.docs.find(e=>e.id===x.mainDocId);return(0,s.jsxs)("div",{className:(0,a.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(h,{siteTitle:l,versionMetadata:n})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(b,{versionLabel:x.label,to:v.path,onClick:()=>u(x.name)})})]})}function v(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,s.jsx)(x,{className:t,versionMetadata:n}):null}}}]);