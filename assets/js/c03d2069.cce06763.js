"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[3662],{8126:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=s(4848),n=s(8453);const i={},c="Sectors",l={id:"core-resources/sectors",title:"Sectors",description:"What are sectors?",source:"@site/docs/core-resources/sectors.md",sourceDirName:"core-resources",slug:"/core-resources/sectors",permalink:"/docs/2.x/core-resources/sectors",draft:!1,unlisted:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/core-resources/sectors.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Regions",permalink:"/docs/2.x/core-resources/regions"},next:{title:"Stock Exchanges",permalink:"/docs/2.x/core-resources/stock-exchanges"}},d={},o=[{value:"What are sectors?",id:"what-are-sectors",level:2},{value:"List all sectors",id:"list-all-sectors",level:2},{value:"Get a sector",id:"get-a-sector",level:2},{value:"Schema",id:"schema",level:2},{value:"Full response schema",id:"full-response-schema",level:3},{value:"Relationship Response Schema",id:"relationship-response-schema",level:3},{value:"Additional Filters",id:"additional-filters",level:2},{value:"Relationships &amp; includes",id:"relationships--includes",level:2},{value:"Searching",id:"searching",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"sectors",children:"Sectors"})}),"\n",(0,r.jsx)(t.h2,{id:"what-are-sectors",children:"What are sectors?"}),"\n",(0,r.jsxs)(t.p,{children:["When doing a BAV study, some questions are asked that relate sectors to one or more ",(0,r.jsx)(t.a,{href:"/docs/2.x/core-resources/categories",children:"categories"}),". You\ncan read more about the categories and what they represent on the ",(0,r.jsx)(t.a,{href:"/docs/2.x/core-resources/categories",children:"categories endpoint"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Each category belongs to a sector, which is a broader classification of categories. The benefit of a sector is that it\nis easier to compare across countries and years."}),"\n",(0,r.jsx)(t.h2,{id:"list-all-sectors",children:"List all sectors"}),"\n",(0,r.jsx)(t.p,{children:"To list all of the sectors and browse them via the API, use the list endpoint:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",metastring:"request",children:"GET /api/v2/sectors\n"})}),"\n",(0,r.jsx)(t.h2,{id:"get-a-sector",children:"Get a sector"}),"\n",(0,r.jsx)(t.p,{children:"You may also directly retrieve a sector's details if you already have its system ID."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",metastring:"request",children:"GET /api/v2/sectors/123\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Where ",(0,r.jsx)(t.code,{children:"123"})," is the system ID of the sector."]}),"\n",(0,r.jsx)(t.h2,{id:"schema",children:"Schema"}),"\n",(0,r.jsx)(t.h3,{id:"full-response-schema",children:"Full response schema"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Filterable"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Sortable"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Configurable"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"id"})}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u2705"," (exact)"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{children:"The system ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"is_active"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{children:"Whether the sector should be seen and used."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"name"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{children:"The name of the sector."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"excluded_for_most_influential"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{children:"Whether the sector should be part of the Most Influential brands lists or not."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"created_at"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{children:"A datetime string when this sector was first created."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"updated_at"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["(",(0,r.jsx)(t.a,{href:"../customizing/filters",children:"updated since"}),")"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{children:"A datetime string when this sector was last updated."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"relationship-response-schema",children:"Relationship Response Schema"}),"\n",(0,r.jsx)(t.p,{children:"The slim relationship schema is used when the sector is used as part of an include in another resource."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"id"})}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"The system ID for the sector."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"name"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"The primary name of the sector."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"additional-filters",children:"Additional Filters"}),"\n",(0,r.jsxs)(t.p,{children:["For convenience, we have a set of additional filters that are not available in\nthe ",(0,r.jsx)(t.a,{href:"/docs/2.x/customizing/filters",children:"default filters"})," or are part of the columns. These are:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"in_most_influential"})," - Set to ",(0,r.jsx)(t.code,{children:"1"})," to only return sectors that are part of the Most Influential lists."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"not_in_most_influential"})," - Set to ",(0,r.jsx)(t.code,{children:"1"})," to only return sectors that are not part of the Most Influential lists."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"relationships--includes",children:"Relationships & includes"}),"\n",(0,r.jsxs)(t.p,{children:["By default, relationships apart from the sector are not included. See\nthe ",(0,r.jsx)(t.a,{href:"../customizing/includes",children:"includes section"})," for more information on how this works. The following relationships\nare available:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"categories"})," - The ",(0,r.jsx)(t.a,{href:"/docs/2.x/core-resources/categories",children:"categories"})," that belong to this sector."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"searching",children:"Searching"}),"\n",(0,r.jsxs)(t.p,{children:["This endpoint supports searching. See the ",(0,r.jsx)(t.a,{href:"../customizing/searching",children:"searching section"})," for more details."]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>l});var r=s(6540);const n={},i=r.createContext(n);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);