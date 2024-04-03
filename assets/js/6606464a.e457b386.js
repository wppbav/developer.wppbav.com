"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[8326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return r?a.createElement(y,o(o({ref:t},s),{},{components:r})):a.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={},o="Archetypes",i={unversionedId:"tools/archetypes",id:"tools/archetypes",title:"Archetypes",description:"Archetypes data are split across two types:",source:"@site/docs/tools/archetypes.md",sourceDirName:"tools",slug:"/tools/archetypes",permalink:"/docs/2.x/tools/archetypes",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/tools/archetypes.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Overview",permalink:"/docs/2.x/tools/"},next:{title:"Brand Personality Match",permalink:"/docs/2.x/tools/brand-personality-match"}},p={},c=[{value:"Creating a query",id:"creating-a-query",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"archetypes"},"Archetypes"),(0,n.kt)("p",null,"Archetypes data are split across two types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cultural archetypes"),(0,n.kt)("li",{parentName:"ul"},"Competitive archetypes")),(0,n.kt)("p",null,'A cultural archetype is the score of each archetype "in culture", meaning against all the other brands in a study (\nmarket + year). A competitive archetype is the score of each archetype against a specific set of brands (the competitive\nset). A competitive set can be defined either by a collection or a category.'),(0,n.kt)("h2",{id:"creating-a-query"},"Creating a query"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET /api/v2/tools/archetypes\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"When you query the Archetypes endpoint the parameters are split between filtering parameters and comparison parameters.\nThe filter parameters filter down the data, while the comparison parameters are used to create competitive archetypes."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"brands")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null},"numeric array"),(0,n.kt)("td",{parentName:"tr",align:null},"Filter parameter. A comma-separated list of Brand IDs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"studies")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"numeric array"),(0,n.kt)("td",{parentName:"tr",align:null},"Filter parameter. A comma-separated list of Study IDs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"audiences")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c (defaults to All Adults)"),(0,n.kt)("td",{parentName:"tr",align:null},"numeric array"),(0,n.kt)("td",{parentName:"tr",align:null},"Filter parameter. A comma-separated list of Audience IDs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"collections")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null},"numeric array"),(0,n.kt)("td",{parentName:"tr",align:null},"Comparison parameter. A comma-separated list of Collection IDs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"categories")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null},"numeric array"),(0,n.kt)("td",{parentName:"tr",align:null},"Comparison parameter. A comma-separated list of Category IDs.")))))}u.isMDXComponent=!0}}]);