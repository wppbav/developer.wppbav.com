"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[3818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8949:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),s=a(1980),u=a(7392),d=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function g(e){const t=(0,h.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},8895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(8949);const o={},s="Brandscape Data",u={unversionedId:"developer-tools/python/endpoints/brandscape-data",id:"developer-tools/python/endpoints/brandscape-data",title:"Brandscape Data",description:"The brandscape-data endpoint has full support, including query validation.",source:"@site/docs/developer-tools/python/endpoints/brandscape-data.md",sourceDirName:"developer-tools/python/endpoints",slug:"/developer-tools/python/endpoints/brandscape-data",permalink:"/docs/2.x/developer-tools/python/endpoints/brandscape-data",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/developer-tools/python/endpoints/brandscape-data.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Brands",permalink:"/docs/2.x/developer-tools/python/endpoints/brands"},next:{title:"Studies",permalink:"/docs/2.x/developer-tools/python/endpoints/studies"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Required filters",id:"required-filters",level:2},{value:"Default includes",id:"default-includes",level:2},{value:"Clashing column names",id:"clashing-column-names",level:2},{value:"Metric keys",id:"metric-keys",level:2}],c={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"brandscape-data"},"Brandscape Data"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"brandscape-data")," endpoint has full support, including query validation."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Client")," method"),(0,r.kt)("th",{parentName:"tr",align:null},"Filters class"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"brandscape-data"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"brandscape_data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Client.brandscape_data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BrandscapeFilters"))))),(0,r.kt)("p",null,"For more information on available filters and functionality, see the main API documentation for\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/core-resources/brandscape-data"},"brandscape data endpoint"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"async",label:"Async",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Using Client asynchronously"',title:'"Using',Client:!0,'asynchronously"':!0},'import bavapi\n\nasync with bavapi.Client("TOKEN") as bav:\n    result = await bav.brandscape_data(name="Facebook")\n'))),(0,r.kt)(i.Z,{value:"sync",label:"Sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Using top-level functions"',title:'"Using',"top-level":!0,'functions"':!0},'import bavapi\n\nresult = bavapi.brandscape_data("TOKEN", name="Facebook")\n')))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"brandscape-data")," has filters which have a slightly ",(0,r.kt)("strong",{parentName:"p"},"different")," name than for other endpoints:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"year_number")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"year_numbers"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"country_code")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"country_codes"),"."))),(0,r.kt)("h2",{id:"required-filters"},"Required filters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"brandscape-data")," can retrieve brand datasets from an arbitrary combination of studies, audiences and years, so it is\npossible that the request becomes too large for the server to deliver effectively for all users. Please see the see the\nmain API documentation for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/core-resources/brandscape-data"},"brandscape data endpoint")," for more details on\nrequired filters to apply."),(0,r.kt)("p",null,"If a query does not have any of these combinations of filters, it will raise a ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationError"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'bavapi.brandscape_data("TOKEN")  # Error, no filters specified\n\nbavapi.brandscape_data("TOKEN", year_number=2022) # Error, not enough filters\n\nbavapi.brandscape_data("TOKEN", brand_name="Facebook") # OK\n\nbavapi.brandscape_data("TOKEN", country_code="UK", brands=123)  # OK\n')),(0,r.kt)("h2",{id:"default-includes"},"Default includes"),(0,r.kt)("p",null,"In order to provide critical information about the data retrieved from ",(0,r.kt)("inlineCode",{parentName:"p"},"brandscape-data")," some ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," values are\nrequested by\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"study"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"brand"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"audience"),"."),(0,r.kt)("p",null,"If you add any of these values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," field by themselves, the default won't be used, and ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi")," will make a\nrequest with the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," instead."),(0,r.kt)("p",null,"If, on the other hand, you request an ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," that is ",(0,r.kt)("em",{parentName:"p"},"not")," part of the default values, ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi")," will append that new\nvalue to the default ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# All default includes will be requested\nbavapi.brandscape_data("TOKEN", brand_name="Facebook")\n\n# Only the "brand" include will be requested\nbavapi.brandscape_data("TOKEN", brand_name="Facebook", include="brand")\n\n# The "company" include will be appended to the default "include" values\nbavapi.brandscape_data("TOKEN", brand_name="Facebook", include="company")\n\n')),(0,r.kt)("h2",{id:"clashing-column-names"},"Clashing column names"),(0,r.kt)("p",null,"Some includes can have clashing column names with the original data. This happens, for example, with the ",(0,r.kt)("inlineCode",{parentName:"p"},'"brand"'),"\ninclude, which when expanded will have column names such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"brand_name"'),", which is already present in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"brandscape-data")," table."),(0,r.kt)("p",null,"To circumvent this issue, the response parsing function will append the ",(0,r.kt)("inlineCode",{parentName:"p"},'"global_"')," prefix to includes with potentially\nclashing names."),(0,r.kt)("p",null,"As a result, you will see a set of columns, extracted from the ",(0,r.kt)("inlineCode",{parentName:"p"},'"brand"')," include, which will have a ",(0,r.kt)("inlineCode",{parentName:"p"},'"global_"')," prefix\nin their names."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This may change in future versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi")," as the parsing logic is upgraded.")),(0,r.kt)("h2",{id:"metric-keys"},"Metric keys"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"brandscape-data")," provides a special filter to specify the data ",(0,r.kt)("em",{parentName:"p"},"columns")," that the response should\ncontain: ",(0,r.kt)("inlineCode",{parentName:"p"},"metric_keys"),"."),(0,r.kt)("p",null,"You can specify the metrics that your response should contain, and the API will include all score types for that metric."),(0,r.kt)("admonition",{title:"Example",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"metric_keys")," to ",(0,r.kt)("inlineCode",{parentName:"p"},'["differentiation", "relevance"]')," will instruct the request to only return the following\ncolumns:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"differentiation_c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"differentiation_rank")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"relevance_c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"relevance_rank")),(0,r.kt)("li",{parentName:"ul"},"Brand information such as ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"brand_name"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"category_name")),(0,r.kt)("li",{parentName:"ul"},"Any additional columns from the ",(0,r.kt)("inlineCode",{parentName:"li"},"include")," parameter"))))}b.isMDXComponent=!0}}]);