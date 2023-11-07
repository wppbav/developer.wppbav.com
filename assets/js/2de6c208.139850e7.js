"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[9135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,k=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[p]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6012:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},l="Audiences",d={unversionedId:"core-resources/audiences",id:"core-resources/audiences",title:"Audiences",description:"You may use the Audiences endpoint to retrieve details about one or more audiences.",source:"@site/docs/core-resources/audiences.md",sourceDirName:"core-resources",slug:"/core-resources/audiences",permalink:"/docs/2.x/core-resources/audiences",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/core-resources/audiences.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Includes",permalink:"/docs/2.x/customizing/includes"},next:{title:"Audience Groups",permalink:"/docs/2.x/core-resources/audience-groups"}},o={},s=[{value:"What are audiences?",id:"what-are-audiences",level:2},{value:"List all audiences",id:"list-all-audiences",level:2},{value:"Get a single audience",id:"get-a-single-audience",level:2},{value:"Schema",id:"schema",level:2},{value:"Full response schema",id:"full-response-schema",level:3},{value:"Relationship Response Schema",id:"relationship-response-schema",level:3},{value:"Additional Filters",id:"additional-filters",level:2},{value:"Relationships &amp; includes",id:"relationships--includes",level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"audiences"},"Audiences"),(0,r.kt)("p",null,"You may use the Audiences endpoint to retrieve details about one or more audiences."),(0,r.kt)("h2",{id:"what-are-audiences"},"What are audiences?"),(0,r.kt)("p",null,"Audiences are the core of all our datasets. Audiences are pre-filtered groups of respondents for a dataset. They are\nshared between the BAV and Best Countries datasets."),(0,r.kt)("p",null,"Examples of audiences include: All Adults (everyone), Female, Age 18-25, etc."),(0,r.kt)("p",null,"For the BAV dataset they correspond to the available cuts of data that you can access on audiences. For the Best\nCountries\ndataset they correspond to a set of filters that you can then query the dataset with."),(0,r.kt)("p",null,"Audiences can be active and inactive. Your application should not display inactive audiences to users even if they are\navailable through the API."),(0,r.kt)("p",null,"Audiences can also be public/private. Public audiences are available to all users across the group. Private audiences\nare audiences only accessible by the current user."),(0,r.kt)("p",null,"Audiences in turn belong to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/core-resources/audience-groups"},"audience groups"),". These groups can be used to create a better\nselection experience in an interface as the number of audiences can be plentiful."),(0,r.kt)("h2",{id:"list-all-audiences"},"List all audiences"),(0,r.kt)("p",null,"To list all of the audiences and browse them via the API, use the list endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v2/audiences\n")),(0,r.kt)("h2",{id:"get-a-single-audience"},"Get a single audience"),(0,r.kt)("p",null,"You may also directly retrieve an audience's details if you already have its system ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v2/audiences/1\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," is the system ID of the audience."),(0,r.kt)("admonition",{title:"All adults is the base audiences",type:"note"},(0,r.kt)("p",{parentName:"admonition"},'The All Adults audience is our definition of "unfiltered" or "everyone". It always has the system ID of 1.')),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("h3",{id:"full-response-schema"},"Full response schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Filterable"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Sortable"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Configurable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 (exact)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"The system ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"The display name of the audience.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"A more detailed description (optional) of the audience.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_active")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this audience is active (should be used) or not. Please don't show inactive audiences in a user interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_public")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this audience is publicly available to everyone (true) or just the current user (false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"available_for_bav")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this audience can be used with the BAV dataset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"available_for_bc")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this audience can be used with the Best Countries dataset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bc_filters")),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"The filters to apply to the raw Best Countries dataset to get this audience.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"available_for_diversity")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this audience is available in the Consumer Equality Equation study.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_ethnic_minority")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this audience is considered an ethnic minority.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"A datetime string when this audience was first created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"updated_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"(",(0,r.kt)("a",{parentName:"td",href:"../customizing/filters"},"updated since"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"A datetime string when this audience was last updated.")))),(0,r.kt)("h3",{id:"relationship-response-schema"},"Relationship Response Schema"),(0,r.kt)("p",null,"The slim relationship schema is used when the audience is used as part of an include in another resource."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The system ID for the audience.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The primary name of the audience.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_active")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this audience is active (should be used) or not. Please don't show inactive audiences in a user interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_public")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this audience is publicly available to everyone (true) or just the current user (false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"available_for_bav")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this audience can be used with the BAV dataset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"available_for_bc")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this audience can be used with the Best Countries dataset.")))),(0,r.kt)("h2",{id:"additional-filters"},"Additional Filters"),(0,r.kt)("p",null,"For convenience, we have a set of additional filters for brands that are not available in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/customizing/filters"},"default filters")," or are part of the columns. These are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"active")," - Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to only return active audiences."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inactive")," - Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to only return inactive audiences."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"public")," - Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to only return public audiences."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"private")," - Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to only return private audiences."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"groups")," - A comma-separated list of audience group IDs. This will only return audiences that belong to the\nspecified groups.")),(0,r.kt)("h2",{id:"relationships--includes"},"Relationships & includes"),(0,r.kt)("p",null,"By default, relationships apart from the sector are not included. See\nthe ",(0,r.kt)("a",{parentName:"p",href:"../customizing/includes"},"includes section")," for more information on how this works. The following relationships\nare available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"group")," - The ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/core-resources/audience-groups"},"audience group")," that this audience belongs to.")))}c.isMDXComponent=!0}}]);