"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[9057],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(r),u=a,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(g,o(o({ref:e},p),{},{components:r})):n.createElement(g,o({ref:e},p))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4722:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"connector-doris",title:"Doris"},o=void 0,l={unversionedId:"features/catalog/connector/connector-doris",id:"features/catalog/connector/connector-doris",title:"Doris",description:"\u4ecb\u7ecd",source:"@site/docs/04-features/01-catalog/02-connector/02-connector-doris.md",sourceDirName:"04-features/01-catalog/02-connector",slug:"/features/catalog/connector/connector-doris",permalink:"/datavines-website/docs/features/catalog/connector/connector-doris",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/docs/04-features/01-catalog/02-connector/02-connector-doris.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"connector-doris",title:"Doris"},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/datavines-website/docs/features/catalog/connector/connector-mysql"},next:{title:"StarRocks",permalink:"/datavines-website/docs/features/catalog/connector/connector-starrocks"}},s={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Options",id:"options",level:3},{value:"host string",id:"host-string",level:4},{value:"port int",id:"port-int",level:4},{value:"database string",id:"database-string",level:4},{value:"user string",id:"user-string",level:4},{value:"password string",id:"password-string",level:4},{value:"properties string",id:"properties-string",level:4},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}],p={toc:c};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Doris")," \u8fde\u63a5\u5668\u7528\u4e8e\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"Doris")," \u7c7b\u578b\u7684\u6570\u636e\u6e90\u5efa\u7acb\u8fde\u63a5\uff0c\u83b7\u53d6\u5143\u6570\u636e\u548c\u6267\u884c\u6570\u636e\u8d28\u91cf\u68c0\u67e5\u3002"),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#host-string"},"host")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#port-int"},"port")),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#database-string"},"database")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#user-string"},"user")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#password-string"},"password")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#properties-string"},"properties")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,a.kt)("h4",{id:"host-string"},"host ","[string]"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u5b9e\u4f8bIP"),(0,a.kt)("h4",{id:"port-int"},"port ","[int]"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u5b9e\u4f8b\u7aef\u53e3"),(0,a.kt)("h4",{id:"database-string"},"database ","[string]"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u540d"),(0,a.kt)("h4",{id:"user-string"},"user ","[string]"),(0,a.kt)("p",null,"\u7528\u6237\u540d"),(0,a.kt)("h4",{id:"password-string"},"password ","[string]"),(0,a.kt)("p",null,"\u5bc6\u7801"),(0,a.kt)("h4",{id:"properties-string"},"properties ","[string]"),(0,a.kt)("p",null,"\u914d\u7f6e\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=Asia/Shanghai")),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"zh-name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"supported"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"invalidateItemCanOutput"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u9519\u8bef\u6570\u636e\u662f\u5426\u652f\u6301\u5bfc\u51fa"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"invalidateItemCanOutputToSelf"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u9519\u8bef\u6570\u636e\u662f\u5426\u652f\u6301\u5bfc\u51fa\u81f3\u6570\u636e\u6e90"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"supportToBeErrorDataStorage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f\u5426\u652f\u6301\u4f5c\u4e3a\u9519\u8bef\u6570\u636e\u5b58\u50a8\u5f15\u64ce"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))))}d.isMDXComponent=!0}}]);