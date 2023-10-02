"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[5043],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,o(o({ref:e},s),{},{components:r})):n.createElement(g,o({ref:e},s))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2029:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"connector-mysql",title:"MySQL"},o=void 0,l={unversionedId:"features/catalog/connector/connector-mysql",id:"features/catalog/connector/connector-mysql",title:"MySQL",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-features/01-catalog/02-connector/01-connector-mysql.md",sourceDirName:"04-features/01-catalog/02-connector",slug:"/features/catalog/connector/connector-mysql",permalink:"/datavines-website/zh-CN/docs/features/catalog/connector/connector-mysql",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-features/01-catalog/02-connector/01-connector-mysql.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"connector-mysql",title:"MySQL"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u76ee\u5f55\u4ecb\u7ecd",permalink:"/datavines-website/zh-CN/docs/features/catalog/catalog-intro"},next:{title:"Doris",permalink:"/datavines-website/zh-CN/docs/features/catalog/connector/connector-doris"}},c={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Options",id:"options",level:3},{value:"host string",id:"host-string",level:4},{value:"port int",id:"port-int",level:4},{value:"database string",id:"database-string",level:4},{value:"user string",id:"user-string",level:4},{value:"password string",id:"password-string",level:4},{value:"properties string",id:"properties-string",level:4},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}],s={toc:p};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MySQL")," \u8fde\u63a5\u5668\u7528\u4e8e\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"MySQL")," \u7c7b\u578b\u7684\u6570\u636e\u6e90\u5efa\u7acb\u8fde\u63a5\uff0c\u83b7\u53d6\u5143\u6570\u636e\u548c\u6267\u884c\u6570\u636e\u8d28\u91cf\u68c0\u67e5\u3002"),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#host-string"},"host")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#port-int"},"port")),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#database-string"},"database")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#user-string"},"user")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#password-string"},"password")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#properties-string"},"properties")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,a.kt)("h4",{id:"host-string"},"host ","[string]"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u5b9e\u4f8bIP"),(0,a.kt)("h4",{id:"port-int"},"port ","[int]"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u5b9e\u4f8b\u7aef\u53e3"),(0,a.kt)("h4",{id:"database-string"},"database ","[string]"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u540d"),(0,a.kt)("h4",{id:"user-string"},"user ","[string]"),(0,a.kt)("p",null,"\u7528\u6237\u540d"),(0,a.kt)("h4",{id:"password-string"},"password ","[string]"),(0,a.kt)("p",null,"\u5bc6\u7801"),(0,a.kt)("h4",{id:"properties-string"},"properties ","[string]"),(0,a.kt)("p",null,"\u914d\u7f6e\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=Asia/Shanghai")),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"zh-name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"supported"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"invalidateItemCanOutput"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u9519\u8bef\u6570\u636e\u662f\u5426\u652f\u6301\u5bfc\u51fa"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"invalidateItemCanOutputToSelf"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u9519\u8bef\u6570\u636e\u662f\u5426\u652f\u6301\u5bfc\u51fa\u81f3\u6570\u636e\u6e90"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"supportToBeErrorDataStorage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f\u5426\u652f\u6301\u4f5c\u4e3a\u9519\u8bef\u6570\u636e\u5b58\u50a8\u5f15\u64ce"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")))))}d.isMDXComponent=!0}}]);