"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[2664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8949:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),p=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function g(e){const t=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},9572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(8949);const i={sidebar_label:"Overview"},s="Endpoints",p={unversionedId:"developer-tools/python/endpoints/index",id:"developer-tools/python/endpoints/index",title:"Endpoints",description:"As of v0.10, there are four endpoints that have been fully implemented in bavapi:",source:"@site/docs/developer-tools/python/endpoints/index.md",sourceDirName:"developer-tools/python/endpoints",slug:"/developer-tools/python/endpoints/",permalink:"/docs/2.x/developer-tools/python/endpoints/",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/developer-tools/python/endpoints/index.md",tags:[],version:"current",frontMatter:{sidebar_label:"Overview"},sidebar:"toolsSidebar",previous:{title:"Advanced Usage",permalink:"/docs/2.x/developer-tools/python/advanced-usage"},next:{title:"Audiences",permalink:"/docs/2.x/developer-tools/python/endpoints/audiences"}},u={},d=[{value:"Other endpoints",id:"other-endpoints",level:2},{value:"Usage",id:"usage",level:3}],c={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"As of ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10"),", there are four endpoints that have been fully implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/developer-tools/python/endpoints/audiences"},(0,r.kt)("inlineCode",{parentName:"a"},"audiences"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/developer-tools/python/endpoints/brand-metrics"},(0,r.kt)("inlineCode",{parentName:"a"},"brand-metrics"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/developer-tools/python/endpoints/brand-metric-groups"},(0,r.kt)("inlineCode",{parentName:"a"},"brand-metric-groups"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/developer-tools/python/endpoints/brands"},(0,r.kt)("inlineCode",{parentName:"a"},"brands"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/developer-tools/python/endpoints/brandscape-data"},(0,r.kt)("inlineCode",{parentName:"a"},"brandscape-data"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/developer-tools/python/endpoints/categories"},(0,r.kt)("inlineCode",{parentName:"a"},"categories"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/developer-tools/python/endpoints/collections"},(0,r.kt)("inlineCode",{parentName:"a"},"collections"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/developer-tools/python/endpoints/sectors"},(0,r.kt)("inlineCode",{parentName:"a"},"sectors"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/developer-tools/python/endpoints/studies"},(0,r.kt)("inlineCode",{parentName:"a"},"studies")))),(0,r.kt)("p",null,'"Implemented" meaning that the endpoint has a corresponding function, ',(0,r.kt)("inlineCode",{parentName:"p"},"Client")," method, and filters class associated with them. More info in each endpoint's respective section linked above."),(0,r.kt)("p",null,"If an existing endpoint does not appear in the list above, you can still perform queries to them using the ",(0,r.kt)("inlineCode",{parentName:"p"},"raw_query")," methods (see ",(0,r.kt)("a",{parentName:"p",href:"#other-endpoints"},"below"),"), but ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi")," won't validate filter parameters."),(0,r.kt)("p",null,"Examples for each endpoint are available in each of their individual sections, both for the top-level, synchronous functions, and the asynchronous methods in ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi.Client"),"."),(0,r.kt)("p",null,"For a summary of all existing Fount endpoints, as well as their parameters and supported filters, please see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/intro"},"Resources")," section of the Fount API documentation."),(0,r.kt)("h2",{id:"other-endpoints"},"Other endpoints"),(0,r.kt)("p",null,"While there are some commonly used endpoints with more extensive validation support, there are a ",(0,r.kt)("em",{parentName:"p"},"lot")," of additional endpoints available for querying."),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"raw_query")," functions and methods, you can perform requests to any endpoint in the Fount, even if it's not supported with dedicated code."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Client")," method"),(0,r.kt)("th",{parentName:"tr",align:null},"Filters class"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{any}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"raw_query")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Client.raw_query")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FountFilters"))))),(0,r.kt)("p",null,"Queries from ",(0,r.kt)("inlineCode",{parentName:"p"},"raw_query")," functions and methods return a list of JSON dictionaries, instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas")," DataFrame."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You need to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," instance to perform queries with ",(0,r.kt)("inlineCode",{parentName:"p"},"raw_query")," methods. ",(0,r.kt)("a",{parentName:"p",href:"./advanced-usage#other-endpoints"},"More info"))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"sync",label:"Sync",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import bavapi\n\nresult = bavapi.raw_query("TOKEN", "companies", bavapi.Query())\n'))),(0,r.kt)(l.Z,{value:"async",label:"Async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import bavapi\n\nasync with bavapi.Client("TOKEN") as bav:\n    result = await bav.raw_query("companies", bavapi.Query())\n')))),(0,r.kt)("p",null,"Since the result of these queries will be a list of JSON dictionaries, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"parse_response")," function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi.parsing.responses")," module to parse the JSON response into a DataFrame:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import bavapi\nfrom bavapi.parsing.responses import parse_response\n\nresult = bavapi.raw_query("companies", bavapi.Query())\n\nparsed = parse_response(result)  # will return a DataFrame\n')))}h.isMDXComponent=!0}}]);