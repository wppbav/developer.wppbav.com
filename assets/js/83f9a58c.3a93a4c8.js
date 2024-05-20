"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[6644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8949:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},6237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(4866),n(8949);const o={},l="Installation",i={unversionedId:"developer-tools/python/installation",id:"developer-tools/python/installation",title:"Installation",description:"Prerequisites",source:"@site/docs/developer-tools/python/installation.md",sourceDirName:"developer-tools/python",slug:"/developer-tools/python/installation",permalink:"/docs/2.x/developer-tools/python/installation",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/developer-tools/python/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Overview",permalink:"/docs/2.x/developer-tools/python/"},next:{title:"Authentication",permalink:"/docs/2.x/developer-tools/python/authentication"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the SDK in your project",id:"installing-the-sdk-in-your-project",level:2},{value:"Installing from source",id:"installing-from-source",level:3},{value:"Installing <code>bavapi</code> <em>Reference</em> classes",id:"installing-bavapi-reference-classes",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The SDK requires python 3.8 or higher to run."),(0,r.kt)("p",null,"If you don't have python installed, you can download it from the official Python ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"website")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.anaconda.com/"},"Anaconda"),"."),(0,r.kt)("p",null,"You will also need a BAV API token to peform requests to the Fount. For instructions on how to get your own API token, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/authentication"},"Authentication")," section."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"The SDK depends on the following excellent libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpx")," for communication with the Fount API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pandas")," for processing retrieved data into tables."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pydantic")," to validate query and filter parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nest-asyncio")," to support Jupyter notebooks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tqdm")," to show helpful progress bars."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"typing-extensions")," for type checking compatibility in older Python versions.")),(0,r.kt)("p",null,"These libraries will be installed automatically when you install ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi"),"."),(0,r.kt)("h2",{id:"installing-the-sdk-in-your-project"},"Installing the SDK in your project"),(0,r.kt)("p",null,"Once you have your virtual environment activated, you can install ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi")," with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prompt"},"pip install wpp-bavapi\n")),(0,r.kt)("admonition",{title:"Installing with conda",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"bavapi")," is not currently available from ",(0,r.kt)("inlineCode",{parentName:"p"},"conda")," directly, though it should be possible to install and use it within a ",(0,r.kt)("inlineCode",{parentName:"p"},"conda")," environment."),(0,r.kt)("p",{parentName:"admonition"},"Use the following commands to maximize compatibility between ",(0,r.kt)("inlineCode",{parentName:"p"},"conda")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-prompt"},"conda install httpx, pandas, pydantic, nest-asyncio, tqdm, typing_extensions\n\npip install wpp-bavapi --no-deps\n"))),(0,r.kt)("h3",{id:"installing-from-source"},"Installing from source"),(0,r.kt)("p",null,"To install from source, clone the GitHub repository into your local machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prompt"},"git clone https://github.com/wppbav/bavapi-sdk-python.git\n")),(0,r.kt)("p",null,"Go into the cloned directory and install ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prompt"},"cd bavapi-sdk-python\npip install .\n")),(0,r.kt)("h2",{id:"installing-bavapi-reference-classes"},"Installing ",(0,r.kt)("inlineCode",{parentName:"h2"},"bavapi")," ",(0,r.kt)("em",{parentName:"h2"},"Reference")," classes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bavapi")," can generate some convenience reference classes which map Fount resource IDs with a more readable name, both for ease of use and for autocompletion in IDEs. These classes are automatically generated by a console command that becomes available once ",(0,r.kt)("inlineCode",{parentName:"p"},"bavapi")," is installed."),(0,r.kt)("p",null,"Please see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/developer-tools/python/reference-classes"},"Reference Classes")," section for more information."))}d.isMDXComponent=!0}}]);