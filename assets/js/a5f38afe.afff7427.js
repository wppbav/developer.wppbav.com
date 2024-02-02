"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[4448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},s="Errors",i={unversionedId:"errors",id:"version-1.0/errors",title:"Errors",description:"The Fount's API uses standard HTTP response codes to indicate success or failure of an API request.",source:"@site/versioned_docs/version-1.0/errors.md",sourceDirName:".",slug:"/errors",permalink:"/docs/1.x/errors",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/versioned_docs/version-1.0/errors.md",tags:[],version:"1.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Rate Limiting",permalink:"/docs/1.x/rate-limiting"},next:{title:"Pagination",permalink:"/docs/1.x/pagination"}},l={},p=[{value:"Response Codes",id:"response-codes",level:2},{value:"Response",id:"response",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"errors"},"Errors"),(0,a.kt)("p",null,"The Fount's API uses standard HTTP response codes to indicate success or failure of an API request."),(0,a.kt)("p",null,"In general codes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," range indicate success. Codes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"400")," range indicate some sort of error in the\ninformation provided. Codes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"500")," range indicate errors with The Fount's servers and systems."),(0,a.kt)("p",null,"Along with the response code a human readable ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," attribute is generally sent explaining what went wrong."),(0,a.kt)("h2",{id:"response-codes"},"Response Codes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200 - OK"),(0,a.kt)("td",{parentName:"tr",align:null},"Everything works as expected.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"400 - Bad Request"),(0,a.kt)("td",{parentName:"tr",align:null},"The request could not be handled, often due to a missing required parameter or badly formatted data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"401 - Unauthorized"),(0,a.kt)("td",{parentName:"tr",align:null},"No valid API token provided.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"403 - Forbidden"),(0,a.kt)("td",{parentName:"tr",align:null},"The API token used doesn't have permissions to perform the request.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"404 - Not Found"),(0,a.kt)("td",{parentName:"tr",align:null},"The requested resource doesn't exist.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500, 502, 503, 504 - Server Errors"),(0,a.kt)("td",{parentName:"tr",align:null},"These are rare errors when something's wrong on The Fount's end.")))),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "error": "Human readable error message."\n    }\n}\n')))}c.isMDXComponent=!0}}]);