(self.webpackChunkgizmodo_woods_github_io=self.webpackChunkgizmodo_woods_github_io||[]).push([["12"],{7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,s,i]=t;if(r&&i){let e=(r=parseInt(r))<(i=parseInt(i))?1:-1;("-"===s||".."===s||"\u2025"===s)&&(i+=e);for(let t=r;t!==i;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},4926:function(e,t,n){"use strict";n.d(t,{Z:()=>B});var r=n("5893"),s=n("7294"),i=n("4904"),o=n("7670"),a=n("6171");let l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function c(e){let{type:t,className:n,children:s}=e;return(0,r.jsx)("div",{className:(0,i.Z)(a.k.common.admonition,a.k.common.admonitionType(t),l.admonition,n),children:s})}function d(e){let{icon:t,title:n}=e;return(0,r.jsxs)("div",{className:l.admonitionHeading,children:[(0,r.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function u(e){let{children:t}=e;return t?(0,r.jsx)("div",{className:l.admonitionContent,children:t}):null}function m(e){let{type:t,icon:n,title:s,children:i,className:o}=e;return(0,r.jsxs)(c,{type:t,className:o,children:[s||n?(0,r.jsx)(d,{title:s,icon:n}):null,(0,r.jsx)(u,{children:i})]})}let h={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,r.jsx)(m,{...h,...e,className:(0,i.Z)("alert alert--secondary",e.className),children:e.children})}let p={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function x(e){return(0,r.jsx)(m,{...p,...e,className:(0,i.Z)("alert alert--success",e.className),children:e.children})}let j={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,r.jsx)(m,{...j,...e,className:(0,i.Z)("alert alert--info",e.className),children:e.children})}function g(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let v={icon:(0,r.jsx)(g,{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},y={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},N={icon:(0,r.jsx)(g,{}),title:(0,r.jsx)(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},k={note:f,tip:x,info:b,warning:function(e){return(0,r.jsx)(m,{...v,...e,className:(0,i.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(m,{...y,...e,className:(0,i.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,r.jsx)(f,{title:"secondary",...e}),important:e=>(0,r.jsx)(b,{title:"important",...e}),success:e=>(0,r.jsx)(x,{title:"success",...e}),caution:function(e){return(0,r.jsx)(m,{...N,...e,className:(0,i.Z)("alert alert--warning",e.className),children:e.children})}};function B(e){let t=function(e){let{mdxAdmonitionTitle:t,rest:n}=function(e){let t=s.Children.toArray(e),n=t.find(e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),i=t.filter(e=>e!==n);return{mdxAdmonitionTitle:n?.props.children,rest:i.length>0?(0,r.jsx)(r.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}(e),n=function(e){let t=k[e];return t||(console.warn(`No admonition component found for admonition type "${e}". Using Info as fallback.`),k.info)}(t.type);return(0,r.jsx)(n,{...t})}},7624:function(e,t,n){"use strict";n.d(t,{Z:()=>j});var r=n("5893");n("7294");var s=n("4904"),i=n("7670"),o=n("1199");function a(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n("6171"),h=n("4926");function f(e){let{className:t}=e;return(0,r.jsx)(h.Z,{type:"caution",title:(0,r.jsx)(d,{}),className:(0,s.Z)(t,m.k.common.draftBanner),children:(0,r.jsx)(u,{})})}function p(e){let{className:t}=e;return(0,r.jsx)(h.Z,{type:"caution",title:(0,r.jsx)(a,{}),className:(0,s.Z)(t,m.k.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function x(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{...e})]})}function j(e){let{metadata:t}=e,{unlisted:n,frontMatter:s}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||s.unlisted)&&(0,r.jsx)(x,{}),s.draft&&(0,r.jsx)(f,{})]})}},8042:function(e,t,n){"use strict";n.d(t,{Z:()=>f});var r=n("5893");n("7294");var s=n("4904"),i=n("7670"),o=n("6171"),a=n("3367");function l(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)("iconEdit_Z9Sw",t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,r.jsxs)(a.Z,{to:t,className:o.k.common.editThisPage,children:[(0,r.jsx)(l,{}),(0,r.jsx)(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var d=n("7262");function u(e){let{lastUpdatedAt:t}=e,n=new Date(t),s=(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,d.Z)(),n=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,d.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})})({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,r.jsx)(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function m(e){let{lastUpdatedBy:t}=e;return(0,r.jsx)(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function h(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,r.jsxs)("span",{className:o.k.common.lastUpdated,children:[(0,r.jsx)(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,r.jsx)(u,{lastUpdatedAt:t}):"",byUser:n?(0,r.jsx)(m,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}function f(e){let{className:t,editUrl:n,lastUpdatedAt:i,lastUpdatedBy:o}=e;return(0,r.jsxs)("div",{className:(0,s.Z)("row",t),children:[(0,r.jsx)("div",{className:"col",children:n&&(0,r.jsx)(c,{editUrl:n})}),(0,r.jsx)("div",{className:(0,s.Z)("col","lastUpdated_JAkA"),children:(i||o)&&(0,r.jsx)(h,{lastUpdatedAt:i,lastUpdatedBy:o})})]})}},666:function(e,t,n){"use strict";n.d(t,{Z:()=>et});var r=n("5893"),s=n("7294"),i=n("65"),o=n("1199"),a=n("6735"),l=n("4904"),c=n("9207"),d=n("6009");function u(){let{prism:e}=(0,d.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var m=n("6171"),h=n("7594"),f=n.n(h);let p=/title=(?<quote>["'])(?<title>.*?)\1/,x=/\{(?<range>[\d,-]+)\}/,j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},b={...j,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},g=Object.keys(j);function v(e,t){let n=e.map(e=>{let{start:n,end:r}=b[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}function y(e){let{as:t,...n}=e,s=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[r,s]=e,i=t[r];i&&"string"==typeof s&&(n[i]=s)}),n}(u());return(0,r.jsx)(t,{...n,style:s,className:(0,l.Z)(n.className,"codeBlockContainer_Ckt0",m.k.common.codeBlock)})}let N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return(0,r.jsx)(y,{as:"pre",tabIndex:0,className:(0,l.Z)(N.codeBlockStandalone,"thin-scrollbar",n),children:(0,r.jsx)("code",{className:N.codeBlockLines,children:t})})}var B=n("1934");let w={attributes:!0,characterData:!0,childList:!0,subtree:!0};var C=n("3359");let Z={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function L(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:i,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let a=i({line:t,className:(0,l.Z)(n,s&&Z.codeLine)}),c=t.map((e,t)=>(0,r.jsx)("span",{...o({token:e})},t));return(0,r.jsxs)("span",{...a,children:[s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:Z.codeLineNumber}),(0,r.jsx)("span",{className:Z.codeLineContent,children:c})]}):c,(0,r.jsx)("br",{})]})}var E=n("7670");function _(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function T(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let A={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function I(e){let{code:t,className:n}=e,[i,o]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),c=(0,s.useCallback)(()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);let n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let s=document.getSelection(),i=s.rangeCount>0&&s.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{document.execCommand("copy")}catch{}n.remove(),i&&(s.removeAllRanges(),s.addRange(i)),r&&r.focus()}(t),o(!0),a.current=window.setTimeout(()=>{o(!1)},1e3)},[t]);return(0,s.useEffect)(()=>()=>window.clearTimeout(a.current),[]),(0,r.jsx)("button",{type:"button","aria-label":i?(0,E.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,A.copyButton,i&&A.copyButtonCopied),onClick:c,children:(0,r.jsxs)("span",{className:A.copyButtonIcons,"aria-hidden":"true",children:[(0,r.jsx)(_,{className:A.copyButtonIcon}),(0,r.jsx)(T,{className:A.copyButtonSuccessIcon})]})})}function S(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let z={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function M(e){let{className:t,onClick:n,isEnabled:s}=e,i=(0,E.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,r.jsx)("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,s&&z.wordWrapButtonEnabled),"aria-label":i,title:i,children:(0,r.jsx)(S,{className:z.wordWrapButtonIcon,"aria-hidden":"true"})})}function H(e){var t;let{children:n,className:i="",metastring:o,title:a,showLineNumbers:c,language:m}=e,{prism:{defaultLanguage:h,magicComments:j}}=(0,d.L)(),b=(t=m??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(i)??h,t?.toLowerCase()),k=u(),Z=function(){let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1),i=(0,s.useRef)(null),o=(0,s.useCallback)(()=>{let n=i.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[i,e]),a=(0,s.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=i.current;r(e>t||i.current.querySelector("code").hasAttribute("style"))},[i]);return!function(e,t){let[n,r]=(0,s.useState)(),i=(0,s.useCallback)(()=>{r(e.current?.closest("[role=tabpanel][hidden]"))},[e,r]);(0,s.useEffect)(()=>{i()},[i]),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w,r=(0,B.zX)(t),i=(0,B.Ql)(n);(0,s.useEffect)(()=>{let t=new MutationObserver(r);return e&&t.observe(e,i),()=>t.disconnect()},[e,r,i])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(i,a),(0,s.useEffect)(()=>{a()},[e,a]),(0,s.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:i,isEnabled:e,isCodeScrollable:n,toggle:o}}(),E=(o?.match(p)?.groups.title??"")||a,{lineClassNames:_,code:T}=function(e,t){let n=e.replace(/\n$/,""),{language:r,magicComments:s,metastring:i}=t;if(i&&x.test(i)){let e=i.match(x).groups.range;if(0===s.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=s[0].className;return{lineClassNames:Object.fromEntries(f()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===r)return{lineClassNames:{},code:n};let o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"],t);case"jsx":case"tsx":return v(["js","jsBlock","jsx"],t);case"html":return v(["js","jsBlock","html"],t);case"python":case"py":case"bash":return v(["bash"],t);case"markdown":case"md":return v(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return v(["tex"],t);case"lua":case"haskell":return v(["lua"],t);case"sql":return v(["lua","jsBlock"],t);case"wasm":return v(["wasm"],t);case"vb":case"vba":case"visual-basic":return v(["vb","rem"],t);case"vbnet":return v(["vbnet","rem"],t);case"batch":return v(["rem"],t);case"basic":return v(["rem","f90"],t);case"fsharp":return v(["js","ml"],t);case"ocaml":case"sml":return v(["ml"],t);case"fortran":return v(["f90"],t);case"cobol":return v(["cobol"],t);default:return v(g,t)}}(r,s),a=n.split("\n"),l=Object.fromEntries(s.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(s.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),u=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<a.length;){let t=a[e].match(o);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?l[c[n]].range+=`${e},`:d[n]?l[d[n]].start=e:u[n]&&(l[u[n]].range+=`${l[u[n]].start}-${e-1},`),a.splice(e,1)}n=a.join("\n");let m={};return Object.entries(l).forEach(e=>{let[t,{range:n}]=e;f()(n).forEach(e=>{m[e]??=[],m[e].push(t)})}),{lineClassNames:m,code:n}}(n,{metastring:o,language:b,magicComments:j}),A=c??!!o?.includes("showLineNumbers");return(0,r.jsxs)(y,{as:"div",className:(0,l.Z)(i,b&&!i.includes(`language-${b}`)&&`language-${b}`),children:[E&&(0,r.jsx)("div",{className:N.codeBlockTitle,children:E}),(0,r.jsxs)("div",{className:N.codeBlockContent,children:[(0,r.jsx)(C.y$,{theme:k,code:T,language:b??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:i,getTokenProps:o}=e;return(0,r.jsx)("pre",{tabIndex:0,ref:Z.codeBlockRef,className:(0,l.Z)(t,N.codeBlock,"thin-scrollbar"),style:n,children:(0,r.jsx)("code",{className:(0,l.Z)(N.codeBlockLines,A&&N.codeBlockLinesWithNumbering),children:s.map((e,t)=>(0,r.jsx)(L,{line:e,getLineProps:i,getTokenProps:o,classNames:_[t],showLineNumbers:A},t))})})}}),(0,r.jsxs)("div",{className:N.buttonGroup,children:[(Z.isEnabled||Z.isCodeScrollable)&&(0,r.jsx)(M,{className:N.codeButton,onClick:()=>Z.toggle(),isEnabled:Z.isEnabled}),(0,r.jsx)(I,{className:N.codeButton,code:T})]})]})]})}function R(e){let{children:t,...n}=e,i=(0,a.Z)(),o=s.Children.toArray(t).some(e=>(0,s.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t;return(0,r.jsx)("string"==typeof o?H:k,{...n,children:o},String(i))}function V(e){return(0,r.jsx)("code",{...e})}var U=n("3367"),$=n("8942"),O=n("4961"),D=n("6850");let W={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function q(e){return!!e&&("SUMMARY"===e.tagName||q(e.parentElement))}function P(e){let{summary:t,children:n,...i}=e;(0,O.Z)().collectAnchor(i.id);let o=(0,a.Z)(),l=(0,s.useRef)(null),{collapsed:c,setCollapsed:d}=(0,D.u)({initialState:!i.open}),[u,m]=(0,s.useState)(i.open),h=s.isValidElement(t)?t:(0,r.jsx)("summary",{children:t??"Details"});return(0,r.jsxs)("details",{...i,ref:l,open:u,"data-collapsed":c,className:(0,$.Z)(W.details,o&&W.isBrowser,i.className),onMouseDown:e=>{q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();let t=e.target;q(t)&&function e(t,n){return!!t&&(t===n||e(t.parentElement,n))}(t,l.current)&&(e.preventDefault(),c?(d(!1),m(!0)):d(!0))},children:[h,(0,r.jsx)(D.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,r.jsx)("div",{className:W.collapsibleContent,children:n})})]})}function F(e){let{...t}=e;return(0,r.jsx)(P,{...t,className:(0,l.Z)("alert alert--info","details_b_Ee",t.className)})}function G(e){let t=s.Children.toArray(e.children),n=t.find(e=>s.isValidElement(e)&&"summary"===e.type),i=(0,r.jsx)(r.Fragment,{children:t.filter(e=>e!==n)});return(0,r.jsx)(F,{...e,summary:n,children:i})}var J=n("6055");function Y(e){return(0,r.jsx)(J.Z,{...e})}let K={containsTaskList:"containsTaskList_mC6p"};var Q=n("4926"),X=n("308");let ee={Head:o.Z,details:G,Details:G,code:function(e){return void 0!==e.children&&s.Children.toArray(e.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,r.jsx)(V,{...e}):(0,r.jsx)(R,{...e})},a:function(e){return(0,r.jsx)(U.Z,{...e})},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,l.Z)(e,e?.includes("contains-task-list")&&K.containsTaskList)}(e.className)})},li:function(e){return(0,O.Z)().collectAnchor(e.id),(0,r.jsx)("li",{...e})},img:function(e){var t;return(0,r.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,l.Z)(t,"img_ev3q"))})},h1:e=>(0,r.jsx)(Y,{as:"h1",...e}),h2:e=>(0,r.jsx)(Y,{as:"h2",...e}),h3:e=>(0,r.jsx)(Y,{as:"h3",...e}),h4:e=>(0,r.jsx)(Y,{as:"h4",...e}),h5:e=>(0,r.jsx)(Y,{as:"h5",...e}),h6:e=>(0,r.jsx)(Y,{as:"h6",...e}),admonition:Q.Z,mermaid:X.Z};function et(e){let{children:t}=e;return(0,r.jsx)(i.Z,{components:ee,children:t})}},9521:function(e,t,n){"use strict";n.d(t,{Z:()=>o});var r=n("5893");n("7294");var s=n("4904"),i=n("6643");function o(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.Z)("tableOfContents_bqdL","thin-scrollbar",t),children:(0,r.jsx)(i.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},6643:function(e,t,n){"use strict";n.d(t,{Z:()=>c});var r=n("5893"),s=n("7294"),i=n("6009");function o(e){let t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}var a=n("3367");let l=s.memo(function e(t){let{toc:n,className:s,linkClassName:i,isChild:o}=t;return n.length?(0,r.jsx)("ul",{className:o?void 0:s,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(a.Z,{to:`#${t.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:s,linkClassName:i})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,i.L)(),f=d??h.tableOfContents.minHeadingLevel,p=u??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,s.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:s}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:s});return t.level>=r&&t.level<=s?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):r.push(s)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:f,maxHeadingLevel:p});return!function(e){let t=(0,s.useRef)(void 0),n=function(){let e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,s.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,s.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:a}=e;function l(){let e=Array.from(document.getElementsByClassName(r)),l=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>o(e).top>=n);if(r){var s;return(s=o(r)).top>0&&s.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),{anchorTopOffset:n.current}),c=e.find(e=>l&&l.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===c?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)})}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}},[e,n])}((0,s.useMemo)(()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:p}},[a,c,f,p])),(0,r.jsx)(l,{toc:x,className:n,linkClassName:a,...m})}},65:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(7294);let s={},i=r.createContext(s);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);