"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[4284],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={},o="Rate Limiting",l={unversionedId:"rate-limiting",id:"rate-limiting",title:"Rate Limiting",description:"The API has a rate limit of 500 requests per minute based on the user. This means that the rate limit applies to all of",source:"@site/docs/rate-limiting.md",sourceDirName:".",slug:"/rate-limiting",permalink:"/docs/2.x/rate-limiting",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/rate-limiting.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Authentication",permalink:"/docs/2.x/authentication"},next:{title:"Errors",permalink:"/docs/2.x/errors"}},s={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rate-limiting"},"Rate Limiting"),(0,i.kt)("p",null,"The API has a rate limit of 500 requests per minute based on the user. This means that the rate limit applies to all of\nyour personal access tokens collectively."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When you run several requests per second you may find that the security suite in front of the API blocks you sooner than the rate limit, especially when run on public clouds. If you face this issue, please reduce the amount of requests you are making. If the resulting amount of requsts per second is too low to be viable for your use-case, please get in touch with us.")),(0,i.kt)("p",null,"Each API response will return headers informing you of the rate limit and how many requests you have left.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Limit")," header will specify the current rate limit and ",(0,i.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Remaining")," will give you how many\nrequests are left in the current minute."),(0,i.kt)("p",null,"If you reach the limit, a ",(0,i.kt)("inlineCode",{parentName:"p"},"429 - Too Many Requests")," error will be returned along with two additional headers.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Reset")," header will give you a timestamp of when the rate limit will be reset and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Retry-After"),"\nheader will give you how many seconds are left until you may retry again."))}m.isMDXComponent=!0}}]);