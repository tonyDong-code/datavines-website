"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[1341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"pull-request",title:"Pull Request",sidebar_position:4},o="Pull Request Notice",l={unversionedId:"contribution_guide/pull-request",id:"contribution_guide/pull-request",title:"Pull Request",description:"Preface",source:"@site/community/contribution_guide/4-pull-request.md",sourceDirName:"contribution_guide",slug:"/contribution_guide/pull-request",permalink:"/datavines-website/community/contribution_guide/pull-request",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"pull-request",title:"Pull Request",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Document Contributor",permalink:"/datavines-website/community/contribution_guide/document-contributor"}},u={},p=[{value:"Preface",id:"preface",level:2},{value:"Specification",id:"specification",level:2},{value:"Pull Request Title",id:"pull-request-title",level:3},{value:"Pull Request Branch",id:"pull-request-branch",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pull-request-notice"},"Pull Request Notice"),(0,a.kt)("h2",{id:"preface"},"Preface"),(0,a.kt)("p",null,"Pull Request is a way of software cooperation, which is a process of bringing code involving different functions into the trunk. During this process, the code can be discussed, reviewed, and modified."),(0,a.kt)("p",null,"In Pull Request, we try not to discuss the implementation of the code. The general implementation of the code and its logic should be determined in Issue. In the Pull Request, we only focus on the code format and code specification, so as to avoid wasting time caused by different opinions on implementation."),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("h3",{id:"pull-request-title"},"Pull Request Title"),(0,a.kt)("p",null,"Title Format: ","[",(0,a.kt)("inlineCode",{parentName:"p"},"Pull Request Type"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"Issue No"),"][`Module Name`]"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Pull Request Description")),(0,a.kt)("p",null,"The corresponding relationship between ",(0,a.kt)("inlineCode",{parentName:"p"},"Pull Request Type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Issue Type")," is as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Issue Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Pull Request Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Example(Suppose Issue No is 1111)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Feature"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Feature"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[Feature-1111][server]"," Implement xxx")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Bug"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Fix"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[Fix-1111][server]"," Fix xxx")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Improvement"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Improvement"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[Improvement-1111][alert]"," Improve the performance of xxx")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Test"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Test"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[Test-1111][api]"," Add the e2e test of xxx")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Sub-Task"),(0,a.kt)("td",{parentName:"tr",align:"center"},"(Parent type corresponding to Sub-Task)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[Feature-1111][server]"," Implement xxx")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Issue No")," refers to the Issue number corresponding to the current Pull Request to be resolved, ",(0,a.kt)("inlineCode",{parentName:"p"},"Module Name")," is the same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Module Name")," of Issue."),(0,a.kt)("h3",{id:"pull-request-branch"},"Pull Request Branch"),(0,a.kt)("p",null,"Branch name format: ",(0,a.kt)("inlineCode",{parentName:"p"},"Pull Request type"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"Issue number"),". e.g. Feature-3333"))}c.isMDXComponent=!0}}]);