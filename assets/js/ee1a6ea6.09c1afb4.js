"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[1773],{9043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),a=t(8453),s=t(1470),l=t(9365);const i={},o="Audiences",c={id:"developer-tools/python/endpoints/audiences",title:"Audiences",description:"Read more in the API documentation for the audiences endpoint.",source:"@site/docs/developer-tools/python/endpoints/audiences.md",sourceDirName:"developer-tools/python/endpoints",slug:"/developer-tools/python/endpoints/audiences",permalink:"/docs/2.x/developer-tools/python/endpoints/audiences",draft:!1,unlisted:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/developer-tools/python/endpoints/audiences.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Overview",permalink:"/docs/2.x/developer-tools/python/endpoints/"},next:{title:"Audience Groups",permalink:"/docs/2.x/developer-tools/python/endpoints/audience-groups"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Available filters in function calls",id:"available-filters-in-function-calls",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"audiences",children:"Audiences"})}),"\n","\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Read more in the API documentation for the ",(0,r.jsxs)(n.a,{href:"/docs/2.x/core-resources/audiences",children:[(0,r.jsx)(n.code,{children:"audiences"})," endpoint"]}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"audiences"})," endpoint has full support, including query validation."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Endpoint"}),(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsxs)(n.th,{children:[(0,r.jsx)(n.code,{children:"Client"})," method"]}),(0,r.jsx)(n.th,{children:"Filters class"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"audiences"'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"audiences"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Client.audiences"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"AudiencesFilters"})})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"sync",label:"Sync",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",metastring:'title="Using top-level functions"',children:'import bavapi\n\nresult = bavapi.audiences("TOKEN", name="All Adults")\n'})})}),(0,r.jsx)(l.A,{value:"async",label:"Async",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",metastring:'title="Using Client asynchronously"',children:'import bavapi\n\nasync with bavapi.Client("TOKEN") as bav:\n    result = await bav.audiences(name="All Adults")\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"available-filters-in-function-calls",children:"Available filters in function calls"}),"\n",(0,r.jsx)(n.p,{children:"These filters are available directly within the function/method:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Positional filters: ",(0,r.jsx)(n.code,{children:"name"}),", ",(0,r.jsx)(n.code,{children:"active"}),", ",(0,r.jsx)(n.code,{children:"public"})]}),"\n",(0,r.jsxs)(n.li,{children:["Keyword filters: ",(0,r.jsx)(n.code,{children:"audience_id"}),", ",(0,r.jsx)(n.code,{children:"private"}),", ",(0,r.jsx)(n.code,{children:"groups"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For other filters, passing an ",(0,r.jsx)(n.code,{children:"AudiencesFilters"})," instance to the ",(0,r.jsx)(n.code,{children:"filters"})," parameter is required."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(8215);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(6540),a=t(8215),s=t(3104),l=t(6347),i=t(205),o=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:t,groupId:a}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function A(e){const n=(0,m.A)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(6540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);