"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[9909],{388:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(4848),t=n(8453);const i={split:!0},d="Categories",c={id:"core-resources/categories",title:"Categories",description:"When doing a BAV study, some questions are asked that relate brands to one or more categories. These are categories that brands can belong to (one or multiple).",source:"@site/versioned_docs/version-1.0/core-resources/categories.md",sourceDirName:"core-resources",slug:"/core-resources/categories",permalink:"/docs/1.x/core-resources/categories",draft:!1,unlisted:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/versioned_docs/version-1.0/core-resources/categories.md",tags:[],version:"1.0",frontMatter:{split:!0},sidebar:"docsSidebar",previous:{title:"Brands",permalink:"/docs/1.x/core-resources/brands"},next:{title:"Collections",permalink:"/docs/1.x/core-resources/collections"}},l={},o=[{value:"List Categories",id:"list-categories",level:2},{value:"Schema",id:"schema",level:3},{value:"Get a Category",id:"get-a-category",level:2},{value:"Schema",id:"schema-1",level:3},{value:"Configurable Fields",id:"configurable-fields",level:2},{value:"Expansions",id:"expansions",level:2},{value:"Filters",id:"filters",level:2},{value:"Sorting",id:"sorting",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"categories",children:"Categories"})}),"\n",(0,r.jsx)(s.p,{children:"When doing a BAV study, some questions are asked that relate brands to one or more categories. These are categories that brands can belong to (one or multiple)."}),"\n",(0,r.jsx)(s.h2,{id:"list-categories",children:"List Categories"}),"\n",(0,r.jsx)(s.p,{children:"To list all of the categories, use the list endpoint:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-http",metastring:"request",children:"GET /api/v1/categories\n"})}),"\n",(0,r.jsx)(s.p,{children:"The categories list response contains details about the brand."}),"\n",(0,r.jsx)(s.h3,{id:"schema",children:"Schema"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Key"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"id"})}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"The system ID for the category."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"name"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"The name of the category."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"bav_key"})}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"The category key in the BAV database."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sector"})}),(0,r.jsx)(s.td,{children:"object"}),(0,r.jsxs)(s.td,{children:["An object with the category's ",(0,r.jsx)(s.a,{href:"/docs/1.x/relationship-schema",children:"sector details"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"created_at"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"A datetime string when this category was first created."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"updated_at"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"A datetime string when this category was last updated."})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "data": [\n        {\n            "id": 604,\n            "name": "Adhesives",\n            "bav_key": 26205,\n            "sector": {\n                "id": 18,\n                "name": "Household Products"\n            },\n            "created_at": "2021-03-18T02:25:05.000000Z",\n            "updated_at": "2021-03-18T02:25:05.000000Z"\n        },\n        //...\n    ]\n    // ...\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"get-a-category",children:"Get a Category"}),"\n",(0,r.jsx)(s.p,{children:"You may also directly retrieve a category's details if you already have its system ID."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-http",metastring:"request",children:"GET /api/v1/categories/123\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Where ",(0,r.jsx)(s.code,{children:"123"})," is the system ID of the category."]}),"\n",(0,r.jsx)(s.h3,{id:"schema-1",children:"Schema"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Key"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"id"})}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"The system ID for the category."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"name"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"The name of the category."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"bav_key"})}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"The category key in the BAV database."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sector"})}),(0,r.jsx)(s.td,{children:"object"}),(0,r.jsxs)(s.td,{children:["An object with the category's ",(0,r.jsx)(s.a,{href:"/docs/1.x/relationship-schema",children:"sector details"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"created_at"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"A datetime string when this category was first created."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"updated_at"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"A datetime string when this category was last updated."})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "data": {\n        "id": 604,\n        "name": "Adhesives",\n        "bav_key": 26205,\n        "sector": {\n            "id": 18,\n            "name": "Household Products"\n        },\n        "created_at": "2021-03-18T02:25:05.000000Z",\n        "updated_at": "2021-03-18T02:25:05.000000Z"\n    }\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"configurable-fields",children:"Configurable Fields"}),"\n",(0,r.jsxs)(s.p,{children:["If you only need some of the fields you can optimize the request for a leaner response (\nsee ",(0,r.jsx)(s.a,{href:"/docs/1.x/configurable-fields",children:"Configurable Fields"})," for more information). The following fields can be toggled:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"name"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"bav_key"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"sector"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"created_at"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"updated_at"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"expansions",children:"Expansions"}),"\n",(0,r.jsxs)(s.p,{children:["To create a leaner response data related to brands are not included in the response by default. See\nthe ",(0,r.jsx)(s.a,{href:"/docs/1.x/expansions",children:"Expansions section"})," for more information on how this works. The following relationships can be\nexpanded for the categories resource:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"local_names"})," - A list of names for this category in specific countries."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"filters",children:"Filters"}),"\n",(0,r.jsx)(s.p,{children:"The categories endpoint supports the following filters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/1.x/pagination",children:"Pagination"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/1.x/filters",children:"Searching"})," by category name."]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/1.x/filters",children:"Updated Since"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"bav_key"})," - Include this query parameter to search by the BAV key."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"sectors"})," - Include this query parameter to limit the results to categories within the specified sector (comma-separated list of sector IDs)."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"sorting",children:"Sorting"}),"\n",(0,r.jsx)(s.p,{children:"The following fields are sortable:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"id"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"name"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"bav_key"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"sector_id"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"created_at"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"updated_at"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var r=n(6540);const t={},i=r.createContext(t);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);