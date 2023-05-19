"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[1847],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),m=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=m(r),d=n,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return r?a.createElement(k,o(o({ref:e},s),{},{components:r})):a.createElement(k,o({ref:e},s))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:n,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4770:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const l={},o="Market Toplist",i={unversionedId:"tools/toplist-market",id:"tools/toplist-market",title:"Market Toplist",description:"Creating a query",source:"@site/docs/tools/toplist-market.md",sourceDirName:"tools",slug:"/tools/toplist-market",permalink:"/docs/2.x/tools/toplist-market",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/tools/toplist-market.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SWOT",permalink:"/docs/2.x/tools/swot"}},p={},m=[{value:"Creating a query",id:"creating-a-query",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:m},c="wrapper";function u(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"market-toplist"},"Market Toplist"),(0,n.kt)("h2",{id:"creating-a-query"},"Creating a query"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v2/toplist-market\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"brands")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"numeric array"),(0,n.kt)("td",{parentName:"tr",align:null},"A comma-separated list of Brand IDs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"studies")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"numeric array"),(0,n.kt)("td",{parentName:"tr",align:null},"A comma-separated list of Study IDs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"audiences")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c (defaults to All Adults)"),(0,n.kt)("td",{parentName:"tr",align:null},"numeric array"),(0,n.kt)("td",{parentName:"tr",align:null},"A comma-separated list of Audience IDs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"metrics")),(0,n.kt)("td",{parentName:"tr",align:"center"},"If no metric keys."),(0,n.kt)("td",{parentName:"tr",align:null},"numeric array"),(0,n.kt)("td",{parentName:"tr",align:null},"A comma-separated list of Metric IDs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"metric_keys")),(0,n.kt)("td",{parentName:"tr",align:"center"},"If no metrics."),(0,n.kt)("td",{parentName:"tr",align:null},"string array"),(0,n.kt)("td",{parentName:"tr",align:null},"A comma-separated list of metric keys.")))))}u.isMDXComponent=!0}}]);