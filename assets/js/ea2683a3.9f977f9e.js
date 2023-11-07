"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[1640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"metric-groups-in-brandscape-data",title:"New filter on Brandscape Data - Metric Groups",authors:"erikbernskiold"},i=void 0,s={permalink:"/blog/metric-groups-in-brandscape-data",source:"@site/blog/2023-11-07-metric-groups-in-brandscape-data.md",title:"New filter on Brandscape Data - Metric Groups",description:"We strive to make working with the core, raw dataset in",date:"2023-11-07T00:00:00.000Z",formattedDate:"November 7, 2023",tags:[],readingTime:.66,hasTruncateMarker:!1,authors:[{name:"Erik Bernskiold",url:"https://github.com/erikbernskiold",imageURL:"https://github.com/erikbernskiold.png",key:"erikbernskiold"}],frontMatter:{slug:"metric-groups-in-brandscape-data",title:"New filter on Brandscape Data - Metric Groups",authors:"erikbernskiold"},nextItem:{title:"New Cities Endpoint",permalink:"/blog/new-cities-endpoint"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We strive to make working with the core, raw dataset in\nthe Brandscape Data endpoint as easy as possible. To reduce the\ncomplexity in querying the dataset, we have added a new Metric Groups filter."),(0,a.kt)("p",null,"The filter works the same as the existing metrics filter, but customizes the response to include all the metrics in a\ngiven group instead of you having to specify each metric individually."),(0,a.kt)("p",null,'For example, if you want to retrieve all the metrics in the "Imagery" group, you can use the following request:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v2/brandscape-data?metric_group_keys=imagery\n")),(0,a.kt)("p",null,"You can also specify multiple groups by separating them with a comma:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v2/brandscape-data?metric_group_keys=imagery,pillars\n")),(0,a.kt)("p",null,"For a full list of the available groups you can refer to the UI in The Fount or query\nthe Metric Groups endpoint."))}m.isMDXComponent=!0}}]);