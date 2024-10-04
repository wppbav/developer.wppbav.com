"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[4150],{4954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var r=t(4848),s=t(8453);const d={split:!0},c="Best Countries",i={id:"query/best-countries",title:"Best Countries",description:"The Best Countries API holds all scores and rankings from the BAV Best Countries studies in an easily accessible format.",source:"@site/versioned_docs/version-1.0/query/best-countries.md",sourceDirName:"query",slug:"/query/best-countries",permalink:"/docs/1.x/query/best-countries",draft:!1,unlisted:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/versioned_docs/version-1.0/query/best-countries.md",tags:[],version:"1.0",frontMatter:{split:!0},sidebar:"docsSidebar",previous:{title:"Brandscape Data",permalink:"/docs/1.x/query/brandscape-data"}},a={},o=[{value:"Get data for a specific year",id:"get-data-for-a-specific-year",level:2},{value:"Get data for a specific country",id:"get-data-for-a-specific-country",level:2},{value:"Get data for a country and a year",id:"get-data-for-a-country-and-a-year",level:2},{value:"Schema",id:"schema",level:2},{value:"Country Object",id:"country-object",level:3},{value:"Attributes Object",id:"attributes-object",level:3},{value:"Category Object",id:"category-object",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"best-countries",children:"Best Countries"})}),"\n",(0,r.jsx)(n.p,{children:"The Best Countries API holds all scores and rankings from the BAV Best Countries studies in an easily accessible format."}),"\n",(0,r.jsx)(n.h2,{id:"get-data-for-a-specific-year",children:"Get data for a specific year"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",metastring:"request",children:"GET /api/v1/best_countries/2020\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"2020"})," is the year you want to retrieve data for."]}),"\n",(0,r.jsx)(n.p,{children:"For performance reasons the attributes and categories are not loaded by default when you request the yearly data.\nInstead you get the overall score and rank for the country."}),"\n",(0,r.jsxs)(n.p,{children:["To also get the full category and attribute data, add the ",(0,r.jsx)(n.code,{children:"?include_data"})," query parameter to the request URL."]}),"\n",(0,r.jsxs)(n.p,{children:["Please note that the categories list does not include the overall category. This is instead presented as ",(0,r.jsx)(n.code,{children:"score"}),"\nand ",(0,r.jsx)(n.code,{children:"rank"})," at the topmost object."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data": [\n        {\n            "name": "Sweden",\n            "code": "SE",\n            "region": "Europe",\n            "score": 18.38,\n            "rank": 40,\n            "attributes": [\n                {\n                    "id": 1,\n                    "name": "Pleasant climate",\n                    "score": 10.0,\n                    "rank": 8\n                }\n                // ...\n            ],\n            "categories": [\n                {\n                    "id": 2,\n                    "name": "Adventure",\n                    "key": "adventure",\n                    "score": 40.0,\n                    "rank": 20\n                }\n                // ...\n            ]\n        }\n        // ...\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"get-data-for-a-specific-country",children:"Get data for a specific country"}),"\n",(0,r.jsx)(n.p,{children:"Using this endpoint you will be able to retrieve all Best Countries data for a specific country including its history to\nmake useful comparisons over time."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",metastring:"request",children:"GET /api/v1/best_countries/countries/SE\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"SE"})," is the two-letter ISO country code for the country."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "name": "Sweden",\n        "code": "SE",\n        "region": "Europe",\n        "categories": [\n            {\n                "name": "Adventure",\n                "years": [\n                    {\n                        "year": 2020,\n                        "score": 41.0,\n                        "rank": 20\n                    },\n                    {\n                        "year": 2019,\n                        "score": 50.0,\n                        "rank": 21\n                    }\n                    // ...\n                ]\n            }\n            // ...\n        ],\n        "attributes": [\n            {\n                "name": "Pleasant climate",\n                "years": [\n                    {\n                        "year": 2021,\n                        "score": 10.2,\n                        "rank": 10\n                    }\n                    // ...\n                ]\n            }\n        ]\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"get-data-for-a-country-and-a-year",children:"Get data for a country and a year"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",metastring:"request",children:"GET /api/v1/best_countries/2020/SE\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"2020"})," is the year you want to retrieve data for and ",(0,r.jsx)(n.code,{children:"SE"})," is the two-letter ISO country code for the country."]}),"\n",(0,r.jsxs)(n.p,{children:["Please note that the categories list does not include the overall category. This is instead presented as ",(0,r.jsx)(n.code,{children:"score"})," and ",(0,r.jsx)(n.code,{children:"rank"})," at the topmost object."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "name": "Sweden",\n        "code": "SE",\n        "region": "Europe",\n        "score": 96.91,\n        "rank": 5,\n        "attributes": [\n            {\n                "id": 1,\n                "name": "Pleasant climate",\n                "score": 10.0,\n                "rank": 8\n            }\n            // ...\n        ],\n        "categories": [\n            {\n                "id": 2,\n                "name": "Adventure",\n                "key": "adventure",\n                "score": 40.0,\n                "rank": 20\n            }\n            // ...\n        ]\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,r.jsx)(n.p,{children:"The different responses are structured to be as similar as possible. What differs is generally whether the categories\nand attributes return an object or an array."}),"\n",(0,r.jsx)(n.h3,{id:"country-object",children:"Country Object"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"The name of the country in English."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"code"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"The two-letter ISO country code (ISO 3166-1 alpha-2) for the country."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"region"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"The name of the region the country belongs to in English."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"score"})}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"For year-based endpoints. The overall score for the country in the year."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rank"})}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"For year-based endpoints. The overall rank for the country in the year."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"attributes-object",children:"Attributes Object"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"id"})}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"The system ID for the attribute."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"The name of the attribute in English."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"key"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"A slug/key created from the attribute name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"score"})}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"The score given to the country for the attribute. From 0 to 100."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rank"})}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"The rank given to the country for the attribute. Based on the score and how many countries were ranked in the given year."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"category-object",children:"Category Object"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"id"})}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"The system ID for the category."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"The name of the category in English."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"key"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"A slug/key created from the category name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"score"})}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"The score given to the country for the category. From 0 to 100."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rank"})}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"The rank given to the country for the category. Based on the score and how many countries were ranked in the given year."})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(6540);const s={},d=r.createContext(s);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);