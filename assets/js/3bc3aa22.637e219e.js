"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[6445],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8552:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={split:!0},i="Brands",o={unversionedId:"core-resources/brands",id:"version-1.0/core-resources/brands",title:"Brands",description:"Through the Brands API you may retrieve details about one or more brands. The endpoint supports both a paginated list",source:"@site/versioned_docs/version-1.0/core-resources/brands.md",sourceDirName:"core-resources",slug:"/core-resources/brands",permalink:"/docs/1.x/core-resources/brands",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/versioned_docs/version-1.0/core-resources/brands.md",tags:[],version:"1.0",frontMatter:{split:!0},sidebar:"docsSidebar",previous:{title:"Relationship Objects Schema",permalink:"/docs/1.x/relationship-schema"},next:{title:"Categories",permalink:"/docs/1.x/core-resources/categories"}},s={},d=[{value:"List brands",id:"list-brands",level:2},{value:"Schema",id:"schema",level:3},{value:"Get a brand",id:"get-a-brand",level:2},{value:"Schema",id:"schema-1",level:3},{value:"Configurable Fields",id:"configurable-fields",level:2},{value:"Expansions",id:"expansions",level:2},{value:"Filters",id:"filters",level:2},{value:"Sorting",id:"sorting",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"brands"},"Brands"),(0,r.kt)("p",null,"Through the Brands API you may retrieve details about one or more brands. The endpoint supports both a paginated list\nview as well as a single brand lookup. You may also retrieve filterable brand metrics for a brand."),(0,r.kt)("h2",{id:"list-brands"},"List brands"),(0,r.kt)("p",null,"To list all of the brands and browse them via the API, use the list endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v1/brands\n")),(0,r.kt)("p",null,"The brand list response contains details about the brand."),(0,r.kt)("h3",{id:"schema"},"Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The system ID for the brand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bav_id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The brand key in the BAV database. Note that this may be *")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"both* a positive and negative integer."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The primary name of the brand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sector")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"An object with the brand's ",(0,r.kt)("a",{parentName:"td",href:"/docs/1.x/relationship-schema"},"sector details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stock_ticker")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The stock ticker for this brand. If this is a child brand, this will be automatically inherited from the parent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stock_exchange")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The stock exchange code where this brand is listed. If this is a child brand, this will be automatically inherited from the parent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logo_url")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A URL to the latest approved version of the primary brand logo in SVG format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parent")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"An ",(0,r.kt)("a",{parentName:"td",href:"/docs/1.x/relationship-schema"},"object with id and name")," of the parent brand, if this is a child brand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"primary_logo")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"An object with the primary logo for this brand ",(0,r.kt)("a",{parentName:"td",href:"/docs/1.x/relationship-schema"},"(schema)"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A datetime string when this brand was first created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"updated_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A datetime string when this brand was last updated.")))),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "id": 3894,\n            "bav_id": 41305,\n            "name": "Microsoft Cloud",\n            "sector": {\n                "id": 13,\n                "name": "Computer\\/Electronics"\n            },\n            "stock_ticker": "MSFT.US",\n            "stock_exchange": "NASDAQ",\n            "logo_url": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/svg\\/microsoft-logo-9-april-2020.svg",\n            "parent": {\n                "id": 369,\n                "name": "Microsoft"\n            },\n            "primary_logo": {\n                "id": 412,\n                "name": "Microsoft Logo",\n                "formats": {\n                    "eps": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/eps\\/microsoft-logo-9-april-2020.eps",\n                    "hires-png": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/hires-png\\/microsoft-logo-9-april-2020.png",\n                    "lores-png": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/lores-png\\/microsoft-logo-9-april-2020.png",\n                    "jpg": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/jpg\\/microsoft-logo-9-april-2020.jpg",\n                    "svg": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/svg\\/microsoft-logo-9-april-2020.svg"\n                },\n                "created_at": "2020-04-09T11:22:50.000000Z",\n                "updated_at": "2020-04-09T11:22:50.000000Z"\n            },\n            "created_at": "2021-03-02T11:28:21.000000Z",\n            "updated_at": "2021-03-26T10:49:49.000000Z"\n        }\n        //...\n    ]\n    // ...\n}\n')),(0,r.kt)("h2",{id:"get-a-brand"},"Get a brand"),(0,r.kt)("p",null,"You may also directly retrieve a brand's details if you already have its system ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v1/brands/123\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," is the system ID of the brand."),(0,r.kt)("h3",{id:"schema-1"},"Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The system ID for the brand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bav_id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The brand key in the BAV database. Note that this may be *")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"both* a positive and negative integer."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The primary name of the brand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sector")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"An object with the brand's ",(0,r.kt)("a",{parentName:"td",href:"/docs/1.x/relationship-schema"},"sector details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stock_ticker")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The stock ticker for this brand. If this is a child brand, this will be automatically inherited from the parent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stock_exchange")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The stock exchange code where this brand is listed. If this is a child brand, this will be automatically inherited from the parent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logo_url")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A URL to the latest approved version of the primary brand logo in SVG format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parent")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"An ",(0,r.kt)("a",{parentName:"td",href:"/docs/1.x/relationship-schema"},"object with id and name")," of the parent brand, if this is a child brand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"primary_logo")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"An object with the primary logo for this brand ",(0,r.kt)("a",{parentName:"td",href:"/docs/1.x/relationship-schema"},"(schema)"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A datetime string when this brand was first created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"updated_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A datetime string when this brand was last updated.")))),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "id": 3894,\n        "bav_id": 41305,\n        "name": "Microsoft Cloud",\n        "sector": {\n            "id": 13,\n            "name": "Computer\\/Electronics"\n        },\n        "stock_ticker": "MSFT.US",\n        "stock_exchange": "NASDAQ",\n        "logo_url": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/svg\\/microsoft-logo-9-april-2020.svg",\n        "parent": {\n            "id": 369,\n            "name": "Microsoft"\n        },\n        "primary_logo": {\n            "id": 412,\n            "name": "Microsoft Logo",\n            "formats": {\n                "eps": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/eps\\/microsoft-logo-9-april-2020.eps",\n                "hires-png": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/hires-png\\/microsoft-logo-9-april-2020.png",\n                "lores-png": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/lores-png\\/microsoft-logo-9-april-2020.png",\n                "jpg": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/jpg\\/microsoft-logo-9-april-2020.jpg",\n                "svg": "https:\\/\\/wpp-fount-dev.s3.eu-west-2.amazonaws.com\\/logos\\/svg\\/microsoft-logo-9-april-2020.svg"\n            },\n            "created_at": "2020-04-09T11:22:50.000000Z",\n            "updated_at": "2020-04-09T11:22:50.000000Z"\n        },\n        "created_at": "2021-03-02T11:28:21.000000Z",\n        "updated_at": "2021-03-26T10:49:49.000000Z"\n    }\n}\n')),(0,r.kt)("h2",{id:"configurable-fields"},"Configurable Fields"),(0,r.kt)("p",null,"If you only need some of the fields you can optimize the request for a leaner response (\nsee ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.x/configurable-fields"},"Configurable Fields")," for more information). The following fields can be toggled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bav_id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stock_ticker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logo_url")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stock_exchange")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"primary_logo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"created_at")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updated_at"))),(0,r.kt)("h2",{id:"expansions"},"Expansions"),(0,r.kt)("p",null,"To create a leaner response data related to brands are not included in the response by default. See\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.x/expansions"},"Expansions section")," for more information on how this works. The following relationships can be\nexpanded for the Brands API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aliases")," - A list of related names, usually with common misspellings, of the global brand name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"local_versions")," - If the brand has a version of its logo that is only used in a specific market, it may be found in\nthe local versions object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"studies")," - A list of BAV studies where this brand was included."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics")," - A list of metrics and related values for the brand.")),(0,r.kt)("h2",{id:"filters"},"Filters"),(0,r.kt)("p",null,"The brands endpoint supports the following filters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/pagination"},"Pagination")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/filters"},"Searching")," by brand name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/filters"},"Updated Since")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"has_logos")," - Include this query parameter to limit the results to brands which we have logos for."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"has_studies")," - Include this query parameter to limit the results to brands which have been included in a BAV study."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"has_metrics")," - Include this query parameter to limit the results to brands which we have BAV metrics for."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"studies")," - A comma-separated list of study IDs to only show brands that were in the given studies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"years")," - A comma-separated list of year IDs to only show brands that have been studied in the given years."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"countries")," - A comma-separated list of country IDs to only show brands that have been studied in the given countries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sectors")," - A comma-separated list of sector IDs to only show brands that are in the given sectors.")),(0,r.kt)("h2",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"The following fields are sortable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sector_id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bav_brand_id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stock_ticker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stock_exchange")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"created_at")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updated_at"))))}u.isMDXComponent=!0}}]);