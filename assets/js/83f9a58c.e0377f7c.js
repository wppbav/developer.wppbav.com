"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[8618],{201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(4848),a=t(8453);t(1470),t(9365);const o={},s="Installation",l={id:"developer-tools/python/installation",title:"Installation",description:"Prerequisites",source:"@site/docs/developer-tools/python/installation.md",sourceDirName:"developer-tools/python",slug:"/developer-tools/python/installation",permalink:"/docs/2.x/developer-tools/python/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/developer-tools/python/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Overview",permalink:"/docs/2.x/developer-tools/python/"},next:{title:"Authentication",permalink:"/docs/2.x/developer-tools/python/authentication"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the SDK in your project",id:"installing-the-sdk-in-your-project",level:2},{value:"Installing from source",id:"installing-from-source",level:3},{value:"Installing <code>bavapi</code> <em>Reference</em> classes",id:"installing-bavapi-reference-classes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n","\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"The SDK requires python 3.8 or higher to run."}),"\n",(0,r.jsxs)(n.p,{children:["If you don't have python installed, you can download it from the official Python ",(0,r.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"website"})," or ",(0,r.jsx)(n.a,{href:"https://www.anaconda.com/",children:"Anaconda"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You will also need a BAV API token to peform requests to the Fount. For instructions on how to get your own API token, see the ",(0,r.jsx)(n.a,{href:"/docs/2.x/authentication",children:"Authentication"})," section."]}),"\n",(0,r.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsx)(n.p,{children:"The SDK depends on the following excellent libraries:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"httpx"})," for communication with the Fount API."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pandas"})," for processing retrieved data into tables."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pydantic"})," to validate query and filter parameters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nest-asyncio"})," to support Jupyter notebooks."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tqdm"})," to show helpful progress bars."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"typing-extensions"})," for type checking compatibility in older Python versions."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["These libraries will be installed automatically when you install ",(0,r.jsx)(n.code,{children:"bavapi"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"installing-the-sdk-in-your-project",children:"Installing the SDK in your project"}),"\n",(0,r.jsxs)(n.p,{children:["Once you have your virtual environment activated, you can install ",(0,r.jsx)(n.code,{children:"bavapi"})," with the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prompt",children:"pip install wpp-bavapi\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"Installing with conda",type:"tip",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"bavapi"})," is not currently available from ",(0,r.jsx)(n.code,{children:"conda"})," directly, though it should be possible to install and use it within a ",(0,r.jsx)(n.code,{children:"conda"})," environment."]}),(0,r.jsxs)(n.p,{children:["Use the following commands to maximize compatibility between ",(0,r.jsx)(n.code,{children:"conda"})," and ",(0,r.jsx)(n.code,{children:"pip"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prompt",children:"conda install httpx, pandas, pydantic, nest-asyncio, tqdm, typing_extensions\n\npip install wpp-bavapi --no-deps\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"installing-from-source",children:"Installing from source"}),"\n",(0,r.jsx)(n.p,{children:"To install from source, clone the GitHub repository into your local machine:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prompt",children:"git clone https://github.com/wppbav/bavapi-sdk-python.git\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Go into the cloned directory and install ",(0,r.jsx)(n.code,{children:"bavapi"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prompt",children:"cd bavapi-sdk-python\npip install .\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"installing-bavapi-reference-classes",children:["Installing ",(0,r.jsx)(n.code,{children:"bavapi"})," ",(0,r.jsx)(n.em,{children:"Reference"})," classes"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"bavapi"})," can generate some convenience reference classes which map Fount resource IDs with a more readable name, both for ease of use and for autocompletion in IDEs. These classes are automatically generated by a console command that becomes available once ",(0,r.jsx)(n.code,{children:"bavapi"})," is installed."]}),"\n",(0,r.jsxs)(n.p,{children:["Please see the ",(0,r.jsx)(n.a,{href:"/docs/2.x/developer-tools/python/reference-classes",children:"Reference Classes"})," section for more information."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(8215);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(8215),o=t(3104),s=t(6347),l=t(205),i=t(7485),c=t(1682),d=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==r&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function g(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(g,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);