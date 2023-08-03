"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[3692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i="Authentication",l={unversionedId:"developer-tools/python/authentication",id:"developer-tools/python/authentication",title:"Authentication",description:"Access to the API via the Python SDK works the same way as it does in the API as a whole. Please follow the instructions",source:"@site/docs/developer-tools/python/authentication.md",sourceDirName:"developer-tools/python",slug:"/developer-tools/python/authentication",permalink:"/docs/2.x/developer-tools/python/authentication",draft:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/developer-tools/python/authentication.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Installation",permalink:"/docs/2.x/developer-tools/python/installation"},next:{title:"Reference Classes",permalink:"/docs/2.x/developer-tools/python/reference-classes"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Access to the API via the Python SDK works the same way as it does in the API as a whole. Please follow the instructions\nin the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/authentication"},"Authentication")," section of the main API documentation to get started."),(0,r.kt)("p",null,"In order to keep your API token secure, you should avoid using your token directly in your code and applications."),(0,r.kt)("p",null,"Instead, place the code in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file at the top of your project directory, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"python-dotenv")," to load the token\ninto your environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prompt"},"my-project-folder\n\u251c\u2500\u2500\u2500 .env\n\u2514\u2500\u2500\u2500 ... (other stuff)\n")),(0,r.kt)("p",null,"Create this ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file (note the leading dot) in the top level of your working directory, and write down your token\nlike so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env"},'BAV_API_TOKEN = "your_token_here"\n')),(0,r.kt)("p",null,"To now use this file, you will need to install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/theskumar/python-dotenv"},(0,r.kt)("inlineCode",{parentName:"a"},"python-dotenv")),"\npackage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prompt"},"pip install python-dotenv\n")),(0,r.kt)("p",null,"Now, paste this code at the top of your Python files or Jupyter Notebooks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import os\nfrom dotenv import load_dotenv\n\nload_dotenv()  # Load environment variables from `.env` into the system\'s environment\nTOKEN = os.environ["BAV_API_TOKEN"]  # Assign our "BAV_API_TOKEN" environment variable to `TOKEN`\n')),(0,r.kt)("p",null,"Now you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"TOKEN")," in your API requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'bavapi.brands(TOKEN, name="Swatch")\n')))}d.isMDXComponent=!0}}]);