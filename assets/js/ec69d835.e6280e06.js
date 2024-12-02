"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[8348],{2403:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(4848),r=i(8453);const o={},a="Rate Limiting",s={id:"rate-limiting",title:"Rate Limiting",description:"The API has a rate limit of 500 requests per minute based on the user. This means that the rate limit applies to all of",source:"@site/versioned_docs/version-1.0/rate-limiting.md",sourceDirName:".",slug:"/rate-limiting",permalink:"/docs/1.x/rate-limiting",draft:!1,unlisted:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/versioned_docs/version-1.0/rate-limiting.md",tags:[],version:"1.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Authentication",permalink:"/docs/1.x/authentication"},next:{title:"Errors",permalink:"/docs/1.x/errors"}},l={},c=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"rate-limiting",children:"Rate Limiting"})}),"\n",(0,n.jsx)(t.p,{children:"The API has a rate limit of 500 requests per minute based on the user. This means that the rate limit applies to all of\nyour API keys collectively."}),"\n",(0,n.jsxs)(t.p,{children:["Each API response will return headers informing you of the rate limit and how many requests you have left.\nThe ",(0,n.jsx)(t.code,{children:"X-RateLimit-Limit"})," header will specify the current rate limit and ",(0,n.jsx)(t.code,{children:"X-RateLimit-Remaining"})," will give you how many\nrequests are left in the current minute."]}),"\n",(0,n.jsxs)(t.p,{children:["If you reach the limit, a ",(0,n.jsx)(t.code,{children:"429 - Too Many Requests"})," error will be returned along with two additional headers.\nThe ",(0,n.jsx)(t.code,{children:"X-RateLimit-Reset"})," header will give you a timestamp of when the rate limit will be reset and the ",(0,n.jsx)(t.code,{children:"Retry-After"}),"\nheader will give you how many seconds are left until you may retry again."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(6540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);