"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[4486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_label:"Advanced Usage"},o="Advanced Usage",l={unversionedId:"developer-tools/python/advanced-usage",id:"developer-tools/python/advanced-usage",title:"Advanced Usage",description:"This section is intended for developers who are interested in embedding bavapi functionality into their APIs and applications.",source:"@site/docs/developer-tools/python/advanced-usage.md",sourceDirName:"developer-tools/python",slug:"/developer-tools/python/advanced-usage",permalink:"/docs/2.x/developer-tools/python/advanced-usage",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/developer-tools/python/advanced-usage.md",tags:[],version:"current",frontMatter:{sidebar_label:"Advanced Usage"},sidebar:"toolsSidebar",previous:{title:"Basic Usage",permalink:"/docs/2.x/developer-tools/python/basic-usage"},next:{title:"Overview",permalink:"/docs/2.x/developer-tools/python/endpoints/"}},p={},s=[{value:"The <code>Client</code> interface",id:"the-client-interface",level:2},{value:"Using the <code>Client</code> interface",id:"using-the-client-interface",level:2},{value:"Other endpoints",id:"other-endpoints",level:2},{value:"<code>Query</code> parameters",id:"query-parameters",level:3},{value:"User Agent",id:"user-agent",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advanced-usage"},"Advanced Usage"),(0,i.kt)("p",null,"This section is intended for developers who are interested in embedding ",(0,i.kt)("inlineCode",{parentName:"p"},"bavapi")," functionality into their APIs and applications."),(0,i.kt)("admonition",{title:"Async Support",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"bavapi")," natively supports asynchronous execution, so it is ready to work with popular ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," libraries such as ",(0,i.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/"},(0,i.kt)("inlineCode",{parentName:"a"},"fastapi")),".")),(0,i.kt)("h2",{id:"the-client-interface"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"Client")," interface"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," class is the backbone of ",(0,i.kt)("inlineCode",{parentName:"p"},"bavapi"),", and it is the recommended way to interact with the API for more advanced users."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you're familiar with the ",(0,i.kt)("inlineCode",{parentName:"p"},"requests")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"httpx")," python packages, this is similar to using ",(0,i.kt)("inlineCode",{parentName:"p"},"requests.Session()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"httpx.Client()"),".")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," class instead of the top-level endpoint functions (",(0,i.kt)("inlineCode",{parentName:"p"},"bavapi.brands"),", for example), can bring significant performance improvements, especially when performing multiple requests at the same time."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," interface is based on ",(0,i.kt)("inlineCode",{parentName:"p"},"httpx.Client"),", so it benefits from all the performance features from ",(0,i.kt)("inlineCode",{parentName:"p"},"httpx"),":"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Quote from the ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"httpx")," ",(0,i.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://www.python-httpx.org/advanced/"},"docs")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Reduced latency across requests (no handshaking)."),(0,i.kt)("li",{parentName:"ul"},"Reduced CPU usage and round-trips."),(0,i.kt)("li",{parentName:"ul"},"Reduced network congestion."))),(0,i.kt)("p",null,"By using ",(0,i.kt)("inlineCode",{parentName:"p"},"Client"),", you will also get all these benefits, including in Jupyter Notebooks."),(0,i.kt)("h2",{id:"using-the-client-interface"},"Using the ",(0,i.kt)("inlineCode",{parentName:"h2"},"Client")," interface"),(0,i.kt)("p",null,"It is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," in an ",(0,i.kt)("inlineCode",{parentName:"p"},"async with")," block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'async with bavapi.Client("TOKEN") as bav:\n    result = await bav.brands("Swatch")\n')),(0,i.kt)("p",null,"Otherwise, it is possible to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," methods outside of an ",(0,i.kt)("inlineCode",{parentName:"p"},"async with")," block, but it might be slightly less performant."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'bav = bavapi.Client("TOKEN")\nresult = await bav.brands("Swatch")\nawait bav.aclose()  # Close the connection after you\'re done making requests\n')),(0,i.kt)("h2",{id:"other-endpoints"},"Other endpoints"),(0,i.kt)("p",null,"Because of the large number of available endpoints in the Fount and the highly customizable queries, some endpoints won't have extended support from the start."),(0,i.kt)("admonition",{title:"Open for feedback",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you would like to see new endpoints with full type annotations and validation support, please open an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wppbav/bavapi-sdk-python/issues"},"issue"),' on GitHub with the "Feature Request" template.')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bavapi")," provides ",(0,i.kt)("inlineCode",{parentName:"p"},"raw_query")," functions/methods to access all the available endpoints without existing endpoint functions/methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bavapi.raw_query")," for synchronous requests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bavapi.Client.raw_query")," for asynchronous requests.")),(0,i.kt)("p",null,"These ",(0,i.kt)("inlineCode",{parentName:"p"},"raw_query")," methods require the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"bavapi.Query")," instances to make the request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'async with bavapi.Client("TOKEN") as bav:\n    res = bav.raw_query(\n        "companies",\n        bavapi.Query(filters=bavapi.filters.FountFilters(name="Apple"))\n    )\n')),(0,i.kt)("p",null,"These functions will return a list of JSON dictionaries, one for each entry retrieved from the Fount:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {"name": "Apple", "id": 1},\n    {"name": "Applebee\'s", "id": 2},\n    // ...\n]\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"These methods are meant to be used for custom processing of data (not resulting in a ",(0,i.kt)("inlineCode",{parentName:"p"},"pandas")," DataFrame), but it is also possible to use some of the parsing functions available in ",(0,i.kt)("inlineCode",{parentName:"p"},"bavapising.responses"),".")),(0,i.kt)("h3",{id:"query-parameters"},(0,i.kt)("inlineCode",{parentName:"h3"},"Query")," parameters"),(0,i.kt)("p",null,"All Fount queries performed with ",(0,i.kt)("inlineCode",{parentName:"p"},"bavapi.Query")," support the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": Return only results for a specific id."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"page"),": The page number of results to return."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"per_page"),": The number of results to return per page. Default is 25 and maximum is 100."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_pages"),": The maximum number of pages to request. Defaults to requesting all pages in a query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fields"),": The keys for the fields to include in the response. Usually they are the field name in lower case."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sort"),": The key(s) for the field(s) to order the response results by."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"include"),": Additional linked resources to include in the response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updated_since"),": Only return items that have been updated since this timestamp.")),(0,i.kt)("p",null,"For more information on the behavior of each of these parameters, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/intro"},"main API docs"),"."),(0,i.kt)("h2",{id:"user-agent"},"User Agent"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"New in ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"v0.8.0"))),(0,i.kt)("p",null,"It is possible to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"User Agent")," parameter for HTTP requests."),(0,i.kt)("p",null,"The default user agent is ",(0,i.kt)("inlineCode",{parentName:"p"},'"BAVAPI SDK Python"'),"."),(0,i.kt)("p",null,"If you want to change the user agent for your application, you can set it when instantiating a ",(0,i.kt)("inlineCode",{parentName:"p"},"Client"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'bav = bavapi.Client(user_agent="Your User Agent")\n')))}m.isMDXComponent=!0}}]);