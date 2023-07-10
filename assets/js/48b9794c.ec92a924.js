"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[5809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Introduction"},a="Embed Integration",l={unversionedId:"embed/intro",id:"embed/intro",title:"Embed Integration",description:"BAV offers the option to integrate its analytical tools into your application via an embedded integration. It",source:"@site/docs/embed/intro.md",sourceDirName:"embed",slug:"/embed/intro",permalink:"/docs/2.x/embed/intro",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/embed/intro.md",tags:[],version:"current",frontMatter:{sidebar_label:"Introduction"},sidebar:"embedSidebar",next:{title:"Implementation",permalink:"/docs/2.x/embed/implementation"}},c={},p=[{value:"How does it work?",id:"how-does-it-work",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embed-integration"},"Embed Integration"),(0,o.kt)("p",null,"BAV offers the option to integrate its analytical tools into your application via an embedded integration. It\nallows you to embed any of the BAV products into your application via an iframe, with our application scaffolding\nremoved. It also allows you to pass and log in as the existing user from your application, making the experience\nseamless for the user."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"On a high level, the integration flow consists of:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Authenticating a user against the BAV API and receiving an authentication token."),(0,o.kt)("li",{parentName:"ol"},"Calling the embeddable product in an iframe with the authentication token and the required parameters for the\nproduct.")))}d.isMDXComponent=!0}}]);