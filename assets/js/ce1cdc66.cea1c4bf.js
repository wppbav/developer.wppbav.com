"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[3309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Overview"},i="Python SDK",p={unversionedId:"developer-tools/python/index",id:"developer-tools/python/index",title:"Python SDK",description:"The Python SDK for the BAV API makes it easy to consume BAV data within your Python scripts. It is published",source:"@site/docs/developer-tools/python/index.md",sourceDirName:"developer-tools/python",slug:"/developer-tools/python/",permalink:"/docs/2.x/developer-tools/python/",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/developer-tools/python/index.md",tags:[],version:"current",frontMatter:{sidebar_label:"Overview"},sidebar:"toolsSidebar",previous:{title:"Overview",permalink:"/docs/2.x/developer-tools/"},next:{title:"Installation",permalink:"/docs/2.x/developer-tools/python/installation"}},s={},l=[{value:"Features",id:"features",level:2},{value:"Issues",id:"issues",level:2},{value:"Contributing",id:"contributing",level:2}],u={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-sdk"},"Python SDK"),(0,o.kt)("p",null,"The Python SDK for the BAV API makes it easy to consume BAV data within your Python scripts. It is published\nas ",(0,o.kt)("inlineCode",{parentName:"p"},"wpp-bavapi")," in ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/wpp-bavapi/"},"PyPI")," and hosted\non ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wppbav/bavapi-sdk-python/"},"GitHub"),"."),(0,o.kt)("p",null,"Queries are validated automatically thanks to ",(0,o.kt)("inlineCode",{parentName:"p"},"pydantic")," and retrieved asynchronously via the ",(0,o.kt)("inlineCode",{parentName:"p"},"httpx")," package."),(0,o.kt)("p",null,"To start using ",(0,o.kt)("inlineCode",{parentName:"p"},"bavapi"),", go to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/developer-tools/python/installation"},"Installation")," section."),(0,o.kt)("p",null,"After going through the Installation, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/developer-tools/python/basic-usage"},"Basic Usage"),". For more advanced topics,\nsee the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/developer-tools/python/advanced-usage"},"Advanced Usage")," section."),(0,o.kt)("p",null,"Each Fount API endpoint may behave slightly differently. You can find detailed explanations in\nthe ",(0,o.kt)("a",{parentName:"p",href:"python/endpoints/"},"Endpoints")," section."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for all endpoints in the Fount API. Extended support for the ",(0,o.kt)("inlineCode",{parentName:"li"},"audiences"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"brands"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"brandscape-data"),"\nand ",(0,o.kt)("inlineCode",{parentName:"li"},"studies")," endpoints. Other endpoints are available via the ",(0,o.kt)("inlineCode",{parentName:"li"},"raw_query")," functions and methods."),(0,o.kt)("li",{parentName:"ul"},"Validates query parameters are of the correct types and provides type hints for better IDE support."),(0,o.kt)("li",{parentName:"ul"},"Retrieve multiple pages of data simultaneously, as well as monitors and prevents exceeding API rate limit."),(0,o.kt)("li",{parentName:"ul"},"Both synchronous and asynchronous APIs for accessing BAV data.")),(0,o.kt)("h2",{id:"issues"},"Issues"),(0,o.kt)("p",null,"For bug reports and feature requests, please open an issue\non ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wppbav/bavapi-sdk-python/issues/"},"GitHub"),"."),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"We welcome contributions to the Python SDK which is hosted as a public repository on GitHub. Please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wppbav/bavapi-sdk-python/blob/main/CONTRIBUTING.md"},"Contributing")," document for more information."))}c.isMDXComponent=!0}}]);