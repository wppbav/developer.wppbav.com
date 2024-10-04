"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[4585],{9197:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var t=a(4848),s=a(8453);const r={},p="Pagination",l={id:"pagination",title:"Pagination",description:"All top-level API resources have support for fetching data in bulk via a list method. You can, for example, list brands",source:"@site/docs/pagination.md",sourceDirName:".",slug:"/pagination",permalink:"/docs/2.x/pagination",draft:!1,unlisted:!1,editUrl:"https://github.com/wppbav/developer.wppbav.com/edit/main/docs/pagination.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Errors",permalink:"/docs/2.x/errors"},next:{title:"Versioning",permalink:"/docs/2.x/versioning"}},o={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Response",id:"response",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"pagination",children:"Pagination"})}),"\n",(0,t.jsx)(e.p,{children:"All top-level API resources have support for fetching data in bulk via a list method. You can, for example, list brands\nand collections."}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(e.p,{children:"You may use the following query parameters on list resources:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"page"})," will let you set the currently active page."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"per_page"})," will let you set how many records you want to retrieve per page. Maximum of 1000. Default is 25."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"URL Example:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-http",metastring:"request",children:"GET https://fount.wppbav.com/api/v2/brands?page=2&per_page=50\n"})}),"\n",(0,t.jsx)(e.h2,{id:"response",children:"Response"}),"\n",(0,t.jsx)(e.p,{children:"The structure of the API list response is as follows:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "data": [\n    {\n      ...\n    }\n    // Here\'s the specific request data for the resource.\n  ],\n  "links": {\n    "first": "https://fount.wppbav.com/api/v2/brands?page=1",\n    "last": "https://fount.wppbav.com/api/v2/brands?page=163",\n    "prev": null,\n    "next": "https://fount.wppbav.com/api/v2/brands?page=2"\n  },\n  "meta": {\n    "current_page": 1,\n    "from": 1,\n    "last_page": 163,\n    "links": [\n      {\n        "url": null,\n        "label": "&laquo; Previous",\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=1",\n        "label": 1,\n        "active": true\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=2",\n        "label": 2,\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=3",\n        "label": 3,\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=4",\n        "label": 4,\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=5",\n        "label": 5,\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=6",\n        "label": 6,\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=7",\n        "label": 7,\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=8",\n        "label": 8,\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=9",\n        "label": 9,\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=10",\n        "label": 10,\n        "active": false\n      },\n      {\n        "url": null,\n        "label": "...",\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=162",\n        "label": 162,\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=163",\n        "label": 163,\n        "active": false\n      },\n      {\n        "url": "https://fount.wppbav.com/api/v2/brands?page=2",\n        "label": "Next &raquo;",\n        "active": false\n      }\n    ],\n    "path": "https://fount.wppbav.com/api/v2/brands",\n    "per_page": 15,\n    "to": 15,\n    "total": 2434\n  }\n'})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>p,x:()=>l});var t=a(6540);const s={},r=t.createContext(s);function p(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:p(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);