"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[6188],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8076:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={split:!0},i="Brandscape Data",o={unversionedId:"query/brandscape-data",id:"version-1.0/query/brandscape-data",title:"Brandscape Data",description:"The Brandscape Data API is where you can query for the research data. The scores for each brand in a country is what we",source:"@site/versioned_docs/version-1.0/query/brandscape-data.md",sourceDirName:"query",slug:"/query/brandscape-data",permalink:"/docs/1.x/query/brandscape-data",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/versioned_docs/version-1.0/query/brandscape-data.md",tags:[],version:"1.0",frontMatter:{split:!0},sidebar:"docsSidebar",previous:{title:"What are query endpoints?",permalink:"/docs/1.x/query/"},next:{title:"Best Countries",permalink:"/docs/1.x/query/best-countries"}},d={},p=[{value:"Querying for data",id:"querying-for-data",level:2},{value:"Schema",id:"schema",level:3},{value:"Metrics Object Schema",id:"metrics-object-schema",level:4},{value:"Configurable Fields",id:"configurable-fields",level:2},{value:"Expansions",id:"expansions",level:2},{value:"Filters",id:"filters",level:2},{value:"Sorting",id:"sorting",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"brandscape-data"},"Brandscape Data"),(0,r.kt)("p",null,"The Brandscape Data API is where you can query for the research data. The scores for each brand in a country is what we\ncall a Brandscape."),(0,r.kt)("h2",{id:"querying-for-data"},"Querying for data"),(0,r.kt)("p",null,"To browse the data via the API, use the list endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v1/brandscape-data\n")),(0,r.kt)("p",null,"Querying the brandscape data requires at least one filter (see below). Otherwise you will be returned a 401 bad request\nerror."),(0,r.kt)("p",null,"Each item in the list endpoint response is unique on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Brand"),(0,r.kt)("li",{parentName:"ul"},"Study"),(0,r.kt)("li",{parentName:"ul"},"Category"),(0,r.kt)("li",{parentName:"ul"},"Base")),(0,r.kt)("h3",{id:"schema"},"Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The system ID for the brandscape data point.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"brand")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"A brand relationship object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"study")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"A study relationship object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"A base relationship object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"A category relationship object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metrics")),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of metric objects for the data point.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A datetime string when this brand was first created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"updated_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A datetime string when this brand was last updated.")))),(0,r.kt)("h4",{id:"metrics-object-schema"},"Metrics Object Schema"),(0,r.kt)("p",null,"Each metric object in the ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics")," array consists of the following schema."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The Metric object ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The human readable name of the metric.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A machine readable key for the metric.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"group")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"A brand metric group relationship object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scores")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"An object with three keys: ",(0,r.kt)("inlineCode",{parentName:"td"},"rank"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"percentage")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," returning either ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"float"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note on Scores:")," Each metric will have different available scores. Some metrics have just a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," score, while\nothers have ",(0,r.kt)("inlineCode",{parentName:"p"},"rank"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"percentage")," or both of the latter. When one of them returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," you can interpret it as not\nbeing available for the metric. Inspect the Metrics resource further for boolean values of which score types each metric\nsupports."),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "id": 865156,\n            "brand": {\n                "id": 368,\n                "name": "Facebook",\n                "bav_key": -18585\n            },\n            "study": {\n                "id": 381,\n                "name": "UK - Adults 2020",\n                "year": 2020,\n                "country": "United Kingdom"\n            },\n            "base": {\n                "id": 1,\n                "name": "All Adults"\n            },\n            "category": {\n                "id": 88,\n                "name": "Social Media",\n                "sector": "Telecommunications"\n            },\n            "metrics": [\n                {\n                    "id": 1,\n                    "name": "Brand Base",\n                    "key": "brand_base",\n                    "group": {\n                        "id": 1,\n                        "name": "Base Sizes"\n                    },\n                    "scores": {\n                        "rank": null,\n                        "percentage": null,\n                        "value": 100.255100000000000\n                    }\n                }\n                // ...\n            ],\n            "created_at": "2021-03-02T11:28:21.000000Z",\n            "updated_at": "2021-03-26T10:49:49.000000Z"\n        }\n        //...\n    ]\n    // ...\n}\n')),(0,r.kt)("h2",{id:"configurable-fields"},"Configurable Fields"),(0,r.kt)("p",null,"If you only need some of the fields you can optimize the request for a leaner response (\nsee ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.x/configurable-fields"},"Configurable Fields")," for more information). The following fields can be toggled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"brand")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"study")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"category")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"created_at")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updated_at"))),(0,r.kt)("h2",{id:"expansions"},"Expansions"),(0,r.kt)("p",null,"To create a leaner response, some data related to brandscape data are not included in the response by default. See\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.x/expansions"},"Expansions section")," for more information on how this works. The following relationships can be\nexpanded for the Brandscape Data API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"years")," - A years relationship object containing the year and its system ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"countries")," - A countries relationship object containing the country, its region and system ID.")),(0,r.kt)("h2",{id:"filters"},"Filters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"At least one of the data filters (studies, brands or search) needs to be applied.")),(0,r.kt)("p",null,"The endpoint supports the following filters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/pagination"},"Pagination")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/filters"},"Searching")," by brand name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/filters"},"Updated Since")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"brands")," - A comma separated list of brand IDs to find."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"studies")," - A comma separated list of study IDs to find."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"years")," - A comma separated list of year IDs to find."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"countries")," - A comma separated list of country IDs to find."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bases")," - A comma separated list of study base IDs to find."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"year_number")," - A comma separated list of years (for example: 2020,2021) to find."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"country_code")," - A comma-separated list of ISO-Alpha2 country codes (for example: US,DE) to find data from.")),(0,r.kt)("h2",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"By default, the data will be sorted by ID. This sorting does not require any specific parameter. You can also order it\nby any of the metric columns. This is useful for getting a toplist of data."),(0,r.kt)("p",null,"The sorting parameter in that case takes the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"metricKey_scoreType"),". For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"metrickey_rank")," (rank scores), ",(0,r.kt)("inlineCode",{parentName:"p"},"metrickey_pct")," (percentage scores) or ",(0,r.kt)("inlineCode",{parentName:"p"},"metrickey")," (value scores)"),(0,r.kt)("p",null,"If you supply ",(0,r.kt)("inlineCode",{parentName:"p"},"order_by")," with an incorrect parameter, a ",(0,r.kt)("inlineCode",{parentName:"p"},"400 - Bad Request")," response will be returned to you."))}u.isMDXComponent=!0}}]);