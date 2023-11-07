"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[1519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={split:!0},o="Best Countries",i={unversionedId:"query/best-countries",id:"version-1.0/query/best-countries",title:"Best Countries",description:"The Best Countries API holds all scores and rankings from the BAV Best Countries studies in an easily accessible format.",source:"@site/versioned_docs/version-1.0/query/best-countries.md",sourceDirName:"query",slug:"/query/best-countries",permalink:"/docs/1.x/query/best-countries",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/versioned_docs/version-1.0/query/best-countries.md",tags:[],version:"1.0",frontMatter:{split:!0},sidebar:"docsSidebar",previous:{title:"Brandscape Data",permalink:"/docs/1.x/query/brandscape-data"}},s={},d=[{value:"Get data for a specific year",id:"get-data-for-a-specific-year",level:2},{value:"Get data for a specific country",id:"get-data-for-a-specific-country",level:2},{value:"Get data for a country and a year",id:"get-data-for-a-country-and-a-year",level:2},{value:"Schema",id:"schema",level:2},{value:"Country Object",id:"country-object",level:3},{value:"Attributes Object",id:"attributes-object",level:3},{value:"Category Object",id:"category-object",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"best-countries"},"Best Countries"),(0,r.kt)("p",null,"The Best Countries API holds all scores and rankings from the BAV Best Countries studies in an easily accessible format."),(0,r.kt)("h2",{id:"get-data-for-a-specific-year"},"Get data for a specific year"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v1/best_countries/2020\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"2020")," is the year you want to retrieve data for."),(0,r.kt)("p",null,"For performance reasons the attributes and categories are not loaded by default when you request the yearly data.\nInstead you get the overall score and rank for the country."),(0,r.kt)("p",null,"To also get the full category and attribute data, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"?include_data")," query parameter to the request URL."),(0,r.kt)("p",null,"Please note that the categories list does not include the overall category. This is instead presented as ",(0,r.kt)("inlineCode",{parentName:"p"},"score"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"rank")," at the topmost object."),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "name": "Sweden",\n            "code": "SE",\n            "region": "Europe",\n            "score": 18.38,\n            "rank": 40,\n            "attributes": [\n                {\n                    "id": 1,\n                    "name": "Pleasant climate",\n                    "score": 10.0,\n                    "rank": 8\n                }\n                // ...\n            ],\n            "categories": [\n                {\n                    "id": 2,\n                    "name": "Adventure",\n                    "key": "adventure",\n                    "score": 40.0,\n                    "rank": 20\n                }\n                // ...\n            ]\n        }\n        // ...\n    ]\n}\n')),(0,r.kt)("h2",{id:"get-data-for-a-specific-country"},"Get data for a specific country"),(0,r.kt)("p",null,"Using this endpoint you will be able to retrieve all Best Countries data for a specific country including its history to\nmake useful comparisons over time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v1/best_countries/countries/SE\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"SE")," is the two-letter ISO country code for the country."),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "name": "Sweden",\n        "code": "SE",\n        "region": "Europe",\n        "categories": [\n            {\n                "name": "Adventure",\n                "years": [\n                    {\n                        "year": 2020,\n                        "score": 41.0,\n                        "rank": 20\n                    },\n                    {\n                        "year": 2019,\n                        "score": 50.0,\n                        "rank": 21\n                    }\n                    // ...\n                ]\n            }\n            // ...\n        ],\n        "attributes": [\n            {\n                "name": "Pleasant climate",\n                "years": [\n                    {\n                        "year": 2021,\n                        "score": 10.2,\n                        "rank": 10\n                    }\n                    // ...\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"get-data-for-a-country-and-a-year"},"Get data for a country and a year"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v1/best_countries/2020/SE\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"2020")," is the year you want to retrieve data for and ",(0,r.kt)("inlineCode",{parentName:"p"},"SE")," is the two-letter ISO country code for the country."),(0,r.kt)("p",null,"Please note that the categories list does not include the overall category. This is instead presented as ",(0,r.kt)("inlineCode",{parentName:"p"},"score")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rank")," at the topmost object."),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "name": "Sweden",\n        "code": "SE",\n        "region": "Europe",\n        "score": 96.91,\n        "rank": 5,\n        "attributes": [\n            {\n                "id": 1,\n                "name": "Pleasant climate",\n                "score": 10.0,\n                "rank": 8\n            }\n            // ...\n        ],\n        "categories": [\n            {\n                "id": 2,\n                "name": "Adventure",\n                "key": "adventure",\n                "score": 40.0,\n                "rank": 20\n            }\n            // ...\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"The different responses are structured to be as similar as possible. What differs is generally whether the categories\nand attributes return an object or an array."),(0,r.kt)("h3",{id:"country-object"},"Country Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the country in English.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The two-letter ISO country code (ISO 3166-1 alpha-2) for the country.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"region")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the region the country belongs to in English.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"score")),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"For year-based endpoints. The overall score for the country in the year.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rank")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"For year-based endpoints. The overall rank for the country in the year.")))),(0,r.kt)("h3",{id:"attributes-object"},"Attributes Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The system ID for the attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the attribute in English.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A slug/key created from the attribute name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"score")),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The score given to the country for the attribute. From 0 to 100.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rank")),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The rank given to the country for the attribute. Based on the score and how many countries were ranked in the given year.")))),(0,r.kt)("h3",{id:"category-object"},"Category Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The system ID for the category.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the category in English.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A slug/key created from the category name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"score")),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The score given to the country for the category. From 0 to 100.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rank")),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The rank given to the country for the category. Based on the score and how many countries were ranked in the given year.")))))}c.isMDXComponent=!0}}]);