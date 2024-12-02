"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[4846],{9565:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=r(4848),n=r(8453);const i={},c="Brandscape Data",d={id:"core-resources/brandscape-data",title:"Brandscape Data",description:"What is brandscape data?",source:"@site/docs/core-resources/brandscape-data.md",sourceDirName:"core-resources",slug:"/core-resources/brandscape-data",permalink:"/docs/2.x/core-resources/brandscape-data",draft:!1,unlisted:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/core-resources/brandscape-data.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Brand Metric Groups",permalink:"/docs/2.x/core-resources/metric-groups"},next:{title:"Categories",permalink:"/docs/2.x/core-resources/categories"}},t={},o=[{value:"What is brandscape data?",id:"what-is-brandscape-data",level:2},{value:"List all brandscape data",id:"list-all-brandscape-data",level:2},{value:"Get a brandscape data",id:"get-a-brandscape-data",level:2},{value:"Schema",id:"schema",level:2},{value:"Full response schema",id:"full-response-schema",level:3},{value:"Additional Filters",id:"additional-filters",level:2},{value:"Additional Column Customizations",id:"additional-column-customizations",level:2},{value:"Relationships &amp; includes",id:"relationships--includes",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"brandscape-data",children:"Brandscape Data"})}),"\n",(0,a.jsx)(s.h2,{id:"what-is-brandscape-data",children:"What is brandscape data?"}),"\n",(0,a.jsx)(s.p,{children:'A fundamental core concept of BAV is the "Brandscape" which is the set of brands in a given country for a given year.\nThe brandscape data is the collection of metrics and their respective values for the brandscape. You can, in practical\nterms, see the brandscape data is the "BAV data".'}),"\n",(0,a.jsx)(s.p,{children:"The brandscape data endpoint gives you data by:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/studies",children:"Study"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/years",children:"Year"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/countries",children:"Country"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/audiences",children:"Audience"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/categories",children:"Category"})}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"You can customize the response to include only the data you need, such as only specific metrics."}),"\n",(0,a.jsxs)(s.admonition,{title:"Filtering is required",type:"note",children:[(0,a.jsx)(s.p,{children:"Please note that filtering is required on the brandscapa data endpoint to achieve quick response times. For best\nperformance, please use these combinations of filters:"}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Study + Audience + Brand + Category"}),"\n",(0,a.jsx)(s.li,{children:"Country + Year + Audience"}),"\n",(0,a.jsx)(s.li,{children:"Brand + Audience + Country + Year"}),"\n"]}),(0,a.jsx)(s.p,{children:'You should read these from left to right. A combination of "Study + Audience" works just as well as "Study + Audience +\nBrand". However, "Category + Audience" will not.'}),(0,a.jsx)(s.p,{children:"You may filter on one or multiple of each type."})]}),"\n",(0,a.jsx)(s.h2,{id:"list-all-brandscape-data",children:"List all brandscape data"}),"\n",(0,a.jsx)(s.p,{children:"To list all of the brandscape data and browse them via the API, use the list endpoint:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-http",metastring:"request",children:"GET /api/v2/brandscape-data\n"})}),"\n",(0,a.jsx)(s.h2,{id:"get-a-brandscape-data",children:"Get a brandscape data"}),"\n",(0,a.jsx)(s.p,{children:"You may also directly retrieve a brandscape data's details if you already have its system ID."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-http",metastring:"request",children:"GET /api/v2/brandscape-data/123\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Where ",(0,a.jsx)(s.code,{children:"123"})," is the system ID of the brandscape data."]}),"\n",(0,a.jsx)(s.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsx)(s.h3,{id:"full-response-schema",children:"Full response schema"}),"\n",(0,a.jsx)(s.p,{children:"The brandscape data schema is large (\u2248 350 fields). For that reason we omit the full schema here. It is divided into:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Metadata (for example: study, category, brand, audience information)"}),"\n",(0,a.jsx)(s.li,{children:"Metric Data"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["The metric data field names are built up by the ",(0,a.jsx)(s.code,{children:"import_name"})," of the ",(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/metrics",children:"Brand Metrics"})," resource and a suffix\ndepending on the score type. Not all metrics have all score types. The metric resource will show the available score\ntypes. Suffixes are:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"_rank"})," for percentile rank scores."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"_pct"})," for percentage scores."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"_c"})," for construct scores."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"_brandscape_index"})," for index scores against the entire brandscape."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"_category_index"})," for index scores against the brand's category."]}),"\n",(0,a.jsx)(s.li,{children:"No suffix for value scores, like base sizes."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"In addition to this, there are two special fields:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"is_duplicate"})," will be true if the brand is studied in multiple categories. All scores but the usage, preference and\nrecommendation scores are category-agnostic which means that if you perform aggregate analysis (average, standard\ndeviation etc) on these scores you want to remove duplicates first."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"brand_name"})," is the local brand name that was asked in the survey. This can be different from the global brand name\nfrom the brands relationship. You should use this field in combination with the data when available as the brand name."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"All fields are sortable, filterable and configurable."}),"\n",(0,a.jsx)(s.h2,{id:"additional-filters",children:"Additional Filters"}),"\n",(0,a.jsx)(s.p,{children:"In addition to the standard filters and all the fields, we have a set of helper filters to make querying the data easier\nby reducing the need for lookups in our database. These are:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"countries"})," - A comma-separated list of country IDs (for example: 1,2,3)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"country_code"}),". A comma-separated list of ISO two letter country codes (for example: GB) which can take the place of\na ",(0,a.jsx)(s.code,{children:"country_id"})," filter."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"years"})," - A comma-separated list of year IDs (for example: 1,2,3)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"year_number"}),". A comma-separated of years by their numbers (for example: 2022) which can be used over a ",(0,a.jsx)(s.code,{children:"year_id"}),"\nfilter."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"brands"})," - A comma-separated list of brand IDs (for example: 1,2,3)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"categories"})," - A comma-separated list of category IDs (for example: 1,2,3)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"audiences"})," - A comma-separated list of audience IDs (for example: 1,2,3)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"studies"})," - A comma-separated list of study IDs (for example: 1,2,3)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"sectors"})," - A comma-separated list of sector IDs (for example: 1,2,3)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"companies"})," - A comma-separated list of company IDs (for example: 1,2,3)"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"brand_name"}),". A text search on the brand name."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"additional-column-customizations",children:"Additional Column Customizations"}),"\n",(0,a.jsx)(s.p,{children:"In addition to the standard column customizations we have a helper parameter. This is used as a top-level query\nparameter."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"metric_keys"})," - A comma-separated list of metric keys (for example: ",(0,a.jsx)(s.code,{children:"differentation,relevance"}),") which can be used to\nautomatically get all the available score types for these metrics only without having to get each field specifically."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"metric_group_keys"})," - A comma-separated list of metric group keys (for example: ",(0,a.jsx)(s.code,{children:"imagery,pillars"}),") which can be used\nto automatically get all the available score types for the metrics in these groups, without having to set each metric\nspecifically."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"relationships--includes",children:"Relationships & includes"}),"\n",(0,a.jsxs)(s.p,{children:["By default, relationships apart from the sector are not included. See\nthe ",(0,a.jsx)(s.a,{href:"../customizing/includes",children:"includes section"})," for more information on how this works. The following relationships\nare available:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"study"})," - The ",(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/studies",children:"study"})," for the brandscape data record."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"year"})," - The ",(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/years",children:"year"})," for the brandscape data record."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"country"})," - The ",(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/countries",children:"country"})," for the brandscape data record."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"audiences"})," - The ",(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/audiences",children:"audience"})," for the brandscape data record."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"brand"})," - The ",(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/brands",children:"brand"})," for the brandscape data record."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"category"})," - The ",(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/categories",children:"category"})," for the brandscape data record."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"sector"})," - The ",(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/sectors",children:"sector"})," for the brandscape data record."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"company"})," - The ",(0,a.jsx)(s.a,{href:"/docs/2.x/core-resources/companies",children:"company"})," for the brandscape data record."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>d});var a=r(6540);const n={},i=a.createContext(n);function c(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);