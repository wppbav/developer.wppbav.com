"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[1388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={},o="Rate Limiting",l={unversionedId:"rate-limiting",id:"version-1.0/rate-limiting",title:"Rate Limiting",description:"The API has a rate limit of 500 requests per minute based on the user. This means that the rate limit applies to all of",source:"@site/versioned_docs/version-1.0/rate-limiting.md",sourceDirName:".",slug:"/rate-limiting",permalink:"/docs/1.x/rate-limiting",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/versioned_docs/version-1.0/rate-limiting.md",tags:[],version:"1.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Authentication",permalink:"/docs/1.x/authentication"},next:{title:"Errors",permalink:"/docs/1.x/errors"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rate-limiting"},"Rate Limiting"),(0,i.kt)("p",null,"The API has a rate limit of 500 requests per minute based on the user. This means that the rate limit applies to all of\nyour API keys collectively."),(0,i.kt)("p",null,"Each API response will return headers informing you of the rate limit and how many requests you have left.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Limit")," header will specify the current rate limit and ",(0,i.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Remaining")," will give you how many\nrequests are left in the current minute."),(0,i.kt)("p",null,"If you reach the limit, a ",(0,i.kt)("inlineCode",{parentName:"p"},"429 - Too Many Requests")," error will be returned along with two additional headers.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Reset")," header will give you a timestamp of when the rate limit will be reset and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Retry-After"),"\nheader will give you how many seconds are left until you may retry again."))}m.isMDXComponent=!0}}]);