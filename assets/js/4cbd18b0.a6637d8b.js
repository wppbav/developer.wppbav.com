"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[5847],{2849:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=r(4848),s=r(8453),a=r(1470),i=r(9365);const o={sidebar_label:"Advanced Usage"},l="Advanced Usage",c={id:"developer-tools/python/advanced-usage",title:"Advanced Usage",description:"This section is intended for developers who are interested in embedding bavapi functionality into their APIs and",source:"@site/docs/developer-tools/python/advanced-usage.md",sourceDirName:"developer-tools/python",slug:"/developer-tools/python/advanced-usage",permalink:"/docs/2.x/developer-tools/python/advanced-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/developer-tools/python/advanced-usage.md",tags:[],version:"current",frontMatter:{sidebar_label:"Advanced Usage"},sidebar:"toolsSidebar",previous:{title:"Basic Usage",permalink:"/docs/2.x/developer-tools/python/basic-usage"},next:{title:"Tools/TurboPitch",permalink:"/docs/2.x/developer-tools/python/tools"}},d={},h=[{value:"The <code>Client</code> interface",id:"the-client-interface",level:2},{value:"Using the <code>Client</code> interface",id:"using-the-client-interface",level:2},{value:"Other endpoints",id:"other-endpoints",level:2},{value:"The <code>Query</code> class",id:"the-query-class",level:2},{value:"<code>Query</code> parameters",id:"query-parameters",level:3},{value:"Raw parameter dictionary",id:"raw-parameter-dictionary",level:3},{value:"Control <code>bavapi</code> batching behavior",id:"control-bavapi-batching-behavior",level:2},{value:"User Agent",id:"user-agent",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"advanced-usage",children:"Advanced Usage"})}),"\n","\n",(0,t.jsxs)(n.p,{children:["This section is intended for developers who are interested in embedding ",(0,t.jsx)(n.code,{children:"bavapi"})," functionality into their APIs and\napplications."]}),"\n",(0,t.jsx)(n.admonition,{title:"Async Support",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bavapi"})," natively supports asynchronous execution, so it is ready to work with popular ",(0,t.jsx)(n.code,{children:"async"})," libraries such as\n",(0,t.jsx)(n.a,{href:"https://fastapi.tiangolo.com/",children:(0,t.jsx)(n.code,{children:"fastapi"})}),"."]})}),"\n",(0,t.jsxs)(n.h2,{id:"the-client-interface",children:["The ",(0,t.jsx)(n.code,{children:"Client"})," interface"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Client"})," class is the backbone of ",(0,t.jsx)(n.code,{children:"bavapi"}),", and it is the recommended way to interact with the API for more\nadvanced users."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you're familiar with the ",(0,t.jsx)(n.code,{children:"requests"})," or ",(0,t.jsx)(n.code,{children:"httpx"})," python packages, this is similar to using ",(0,t.jsx)(n.code,{children:"requests.Session()"})," or\n",(0,t.jsx)(n.code,{children:"httpx.Client()"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"Client"})," class instead of the top-level endpoint functions (",(0,t.jsx)(n.code,{children:"bavapi.brands"}),", for example), can bring\nsignificant performance improvements, especially when performing multiple requests at the same time."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Client"})," interface is based on ",(0,t.jsx)(n.code,{children:"httpx.Client"}),", so it benefits from all the performance features from ",(0,t.jsx)(n.code,{children:"httpx"}),":"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["Quote from the ",(0,t.jsx)(n.code,{children:"httpx"})," ",(0,t.jsx)(n.a,{href:"https://www.python-httpx.org/advanced/",children:"docs"})]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reduced latency across requests (no handshaking)."}),"\n",(0,t.jsx)(n.li,{children:"Reduced CPU usage and round-trips."}),"\n",(0,t.jsx)(n.li,{children:"Reduced network congestion."}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["By using ",(0,t.jsx)(n.code,{children:"Client"}),", you will also get all these benefits, including in Jupyter Notebooks."]}),"\n",(0,t.jsxs)(n.h2,{id:"using-the-client-interface",children:["Using the ",(0,t.jsx)(n.code,{children:"Client"})," interface"]}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to use ",(0,t.jsx)(n.code,{children:"Client"})," in an ",(0,t.jsx)(n.code,{children:"async with"})," block:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'async with bavapi.Client("TOKEN") as bav:\n    result = await bav.brands("Swatch")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Otherwise, it is possible to use ",(0,t.jsx)(n.code,{children:"Client"})," methods outside of an ",(0,t.jsx)(n.code,{children:"async with"})," block, but it might be slightly less\nperformant."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'bav = bavapi.Client("TOKEN")\nresult = await bav.brands("Swatch")\nawait bav.aclose()  # Close the connection after you\'re done making requests\n'})}),"\n",(0,t.jsx)(n.h2,{id:"other-endpoints",children:"Other endpoints"}),"\n",(0,t.jsx)(n.p,{children:"Because of the large number of available endpoints in the Fount and the highly customizable queries, some endpoints\nwon't have extended support from the start."}),"\n",(0,t.jsx)(n.admonition,{title:"Open for feedback",type:"note",children:(0,t.jsxs)(n.p,{children:["If you would like to see new endpoints with full type annotations and validation support, please open an\n",(0,t.jsx)(n.a,{href:"https://github.com/wppbav/bavapi-sdk-python/issues",children:"issue"}),' on GitHub with the "Feature Request" template.']})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bavapi"})," provides ",(0,t.jsx)(n.code,{children:"raw_query"})," functions/methods to access all the available endpoints without existing endpoint\nfunctions/methods:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bavapi.raw_query"})," for synchronous requests."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bavapi.Client.raw_query"})," for asynchronous requests."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These ",(0,t.jsx)(n.code,{children:"raw_query"})," methods require the use of ",(0,t.jsx)(n.code,{children:"bavapi.Query"})," instances to make the request:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'async with bavapi.Client("TOKEN") as bav:\n    res = await bav.raw_query(\n        "companies",\n        bavapi.Query(filters=bavapi.filters.FountFilters(name="Apple"))\n    )\n'})}),"\n",(0,t.jsx)(n.p,{children:"These functions will return a list of JSON dictionaries, one for each entry retrieved from the Fount:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n    {"name": "Apple", "id": 1},\n    {"name": "Applebee\'s", "id": 2},\n    // ...\n]\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["These methods are meant to be used for custom processing of data (not resulting in a ",(0,t.jsx)(n.code,{children:"pandas"})," DataFrame), but it is\nalso possible to use some of the parsing functions available in ",(0,t.jsx)(n.code,{children:"bavapising.responses"}),"."]})}),"\n",(0,t.jsxs)(n.h2,{id:"the-query-class",children:["The ",(0,t.jsx)(n.code,{children:"Query"})," class"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bavapi.Query"})," is a ",(0,t.jsx)(n.code,{children:"pydantic"}),"-powered class that holds and validates all the common (aside from\nendpoint-specific filters) query parameters to pass to the Fount API."]}),"\n",(0,t.jsxs)(n.p,{children:["The default values for the class are the same as the default values in the Fount API itself, so an empty ",(0,t.jsx)(n.code,{children:"Query"}),"\nobject can be used to get all entries for a specific endpoint:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'query = bavapi.Query()\n\nasync with bavapi.Client("TOKEN") as bav:\n    # Returns all entries for `brand-metrics`. Similar to making a `GET` request with no parameters.\n    res = await bav.raw_query("brand-metrics", query)\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Query"})," can be used to set limits on the number of pages retrieved, or to request a specific page from a query:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"bavapi.Query(\n    per_page = 200,\n    max_pages = 50,\n    ...  # Other params\n)\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"query-parameters",children:[(0,t.jsx)(n.code,{children:"Query"})," parameters"]}),"\n",(0,t.jsxs)(n.p,{children:["All Fount queries performed with ",(0,t.jsx)(n.code,{children:"bavapi.Query"})," support the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"}),": Return only results for a specific id."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"page"}),": The page number of results to return."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"per_page"}),": The number of results to return per page. Default is 25 and maximum is 100."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"max_pages"}),": The maximum number of pages to request. Defaults to requesting all pages in a query."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fields"}),": The keys for the fields to include in the response. Usually they are the field name in lower case."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sort"}),": The key(s) for the field(s) to order the response results by."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"include"}),": Additional linked resources to include in the response."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"updated_since"}),": Only return items that have been updated since this timestamp."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the behavior of each of these parameters, see the ",(0,t.jsx)(n.a,{href:"/docs/2.x/customizing/fields",children:"customizing fields"}),"\nsection."]}),"\n",(0,t.jsx)(n.h3,{id:"raw-parameter-dictionary",children:"Raw parameter dictionary"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"to_params"})," method can be used to parse the parameters into a dictionary of what will be sent to the Fount API:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'>>> bavapi.Query(\n...     filters=BrandscapeFilters(\n...         brand_name="Facebook",\n...         year_numbers=[2012, 2013, 2014, 2015]\n...     ),\n...     include=["company"]\n... ).to_params(endpoint="brandscape-data")  # (1)\n{\n    "include[brandscape-data]": "company",  # (2)\n    "filter[brand_name]": "Facebook",\n    "year_numbers": "2012,2013,2014,2015",\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Needs the endpoint name to format parameters correctly."}),"\n",(0,t.jsxs)(n.li,{children:["Parses ",(0,t.jsx)(n.code,{children:"filters"})," and ",(0,t.jsx)(n.code,{children:"include"})," into the correct format for the Fount API, and parses all elements in lists of\nparameters to their string representation."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"control-bavapi-batching-behavior",children:["Control ",(0,t.jsx)(n.code,{children:"bavapi"})," batching behavior"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bavapi"})," will automatically batch paginated requests to the API to improve latency and throughput. Default values are\nset to maintain around twenty concurrent requests at a time."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, ",(0,t.jsx)(n.code,{children:"bavapi"})," will also automatically retry failed requests a number of times (default ",(0,t.jsx)(n.code,{children:"2"}),"), which can be\ndefined by the user."]}),"\n",(0,t.jsxs)(n.p,{children:["Both top-level functions and the ",(0,t.jsx)(n.code,{children:"Client"})," class have the following parameters to control the behavior of the requests:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"batch_size"}),": Number of pages to include in each batch of requests, default ",(0,t.jsx)(n.code,{children:"10"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"n_workers"}),": Number of worker coroutines that will make batched requests at once, default ",(0,t.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"retries"}),": Number of times to retry a page request before raising an exception, default ",(0,t.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"on_errors"}),": Whether to ",(0,t.jsx)(n.code,{children:'"warn"'})," about failed requests at the end of the query, or ",(0,t.jsx)(n.code,{children:'"raise"'})," immediately upon failure\n(after retries), default ",(0,t.jsx)(n.code,{children:'"warn"'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These parameters can be set in both top-level functions and the async ",(0,t.jsx)(n.code,{children:"Client"})," class:"]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"sync",label:"Sync",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'bavapi.brands(\n    TOKEN,\n    batch_size=5,  # number of requests per batch\n    n_workers=5,  # number of concurrent workers\n    retries=2,  # number of retry attempts\n    on_errors="raise",  # raise on failure after retries\n)\n'})})}),(0,t.jsx)(i.A,{value:"async",label:"Async",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'async with bavapi.Client(\n    TOKEN,\n    batch_size=5,  # number of requests per batch\n    n_workers=5,  # number of concurrent workers\n    retries=2,  # number of retry attempts\n    on_errors="raise",  # raise on failure after retries\n) as client:\n    await client.brands()\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The query from the examples above will result in ",(0,t.jsx)(n.em,{children:"25"})," concurrent API requests (5 ",(0,t.jsx)(n.code,{children:"batch_size"})," * 5 ",(0,t.jsx)(n.code,{children:"n_workers"}),"), and\n",(0,t.jsx)(n.code,{children:"bavapi"})," will retry each failed request ",(0,t.jsx)(n.em,{children:"twice"})," (after the initial request). ",(0,t.jsx)(n.code,{children:'on_errors="raise"'})," will ensure that an\nexception is raised if all retries for any page result in exceptions."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["In order to avoid SSL and timeout issues, it is recommended to set ",(0,t.jsx)(n.code,{children:"batch_size"})," and ",(0,t.jsx)(n.code,{children:"n_workers"})," so ",(0,t.jsx)(n.code,{children:"bavapi"})," will\nperform at most 20-30 concurrent requests. The default is 20 concurrent requests (10 ",(0,t.jsx)(n.code,{children:"batch_size"})," * 2 ",(0,t.jsx)(n.code,{children:"n_workers"}),")."]})}),"\n",(0,t.jsx)(n.h2,{id:"user-agent",children:"User Agent"}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to set the ",(0,t.jsx)(n.code,{children:"User Agent"})," parameter for HTTP requests."]}),"\n",(0,t.jsxs)(n.p,{children:["The default user agent is ",(0,t.jsx)(n.code,{children:'"BAVAPI SDK Python"'}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to change the user agent for your application, you can set it when instantiating a ",(0,t.jsx)(n.code,{children:"Client"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'bav = bavapi.Client(user_agent="Your User Agent")\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(8215);const s={tabItem:"tabItem_Ymn6"};var a=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(6540),s=r(8215),a=r(3104),i=r(6347),o=r(205),l=r(7485),c=r(1682),d=r(679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=u(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,h]=m({queryString:r,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),b=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,a]),tabValues:a}}var f=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),s=o[r].value;s!==t&&(c(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(y,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(g,{...e,children:h(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);