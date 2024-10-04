"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[9092],{1569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(4848),s=n(8453),l=n(1470),a=n(9365);const i={},o="Studies",c={id:"developer-tools/python/endpoints/studies",title:"Studies",description:"Read more in the API documentation for the studies endpoint.",source:"@site/docs/developer-tools/python/endpoints/studies.md",sourceDirName:"developer-tools/python/endpoints",slug:"/developer-tools/python/endpoints/studies",permalink:"/docs/2.x/developer-tools/python/endpoints/studies",draft:!1,unlisted:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/developer-tools/python/endpoints/studies.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Sectors",permalink:"/docs/2.x/developer-tools/python/endpoints/sectors"},next:{title:"Years",permalink:"/docs/2.x/developer-tools/python/endpoints/years"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Available filters in function calls",id:"available-filters-in-function-calls",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"studies",children:"Studies"})}),"\n","\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Read more in the API documentation for the ",(0,r.jsxs)(t.a,{href:"/docs/2.x/core-resources/studies",children:[(0,r.jsx)(t.code,{children:"studies"})," endpoint"]}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"studies"})," endpoint has full support, including query validation."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Endpoint"}),(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsxs)(t.th,{children:[(0,r.jsx)(t.code,{children:"Client"})," method"]}),(0,r.jsx)(t.th,{children:"Filters class"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"studies"'})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"studies"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Client.studies"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"StudiesFilters"})})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(a.A,{value:"sync",label:"Sync",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",metastring:'title="Using top-level functions"',children:'import bavapi\n\nresult = bavapi.studies("TOKEN", country_codes="US")\n'})})}),(0,r.jsx)(a.A,{value:"async",label:"Async",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",metastring:'title="Using Client asynchronously"',children:'import bavapi\n\nasync with bavapi.Client("TOKEN") as bav:\n    result = await bav.studies(country_codes="US")\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"available-filters-in-function-calls",children:"Available filters in function calls"}),"\n",(0,r.jsx)(t.p,{children:"These filters are available directly within the function/method:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Positional filters: ",(0,r.jsx)(t.code,{children:"country_codes"}),", ",(0,r.jsx)(t.code,{children:"year_numbers"}),", ",(0,r.jsx)(t.code,{children:"full_year"}),", ",(0,r.jsx)(t.code,{children:"released"}),", ",(0,r.jsx)(t.code,{children:"bav_study"})]}),"\n",(0,r.jsxs)(t.li,{children:["Keyword filters: ",(0,r.jsx)(t.code,{children:"study_id"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For other filters, passing a ",(0,r.jsx)(t.code,{children:"StudiesFilters"})," instance to the ",(0,r.jsx)(t.code,{children:"filters"})," parameter is required."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(8215);const s={tabItem:"tabItem_Ymn6"};var l=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),s=n(8215),l=n(3104),a=n(6347),i=n(205),o=n(7485),c=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,d]=f({queryString:n,groupId:s}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),v=(()=>{const e=c??b;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),s=i[n].value;s!==r&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function g(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);