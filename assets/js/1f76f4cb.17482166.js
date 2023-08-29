"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[2925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={id:"roadmap",title:"Roadmap"},o=void 0,l={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"V1.1.0",source:"@site/docs/07-roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/datavines-website/docs/roadmap",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/docs/07-roadmap.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"roadmap",title:"Roadmap"},sidebar:"tutorialSidebar",previous:{title:"Registry Develop Guide",permalink:"/datavines-website/docs/development/plugin/registry-develop"},next:{title:"FAQ",permalink:"/datavines-website/docs/faq"}},p={},d=[{value:"V1.1.0",id:"v110",level:2},{value:"V1.2.0",id:"v120",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"v110"},"V1.1.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optimize the local mode and support online generation of configuration"),(0,a.kt)("li",{parentName:"ul"},"Added not-",(0,a.kt)("inlineCode",{parentName:"li"},"Jdbc")," type datasource",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"HDFS"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Minio"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"S3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"OSS")," and other file system datasource"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"ElasticSearch")," datasource"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"MonogoDB")," datasource"))),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"HDFS"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"S3")," error data storage engine")),(0,a.kt)("h2",{id:"v120"},"V1.2.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support ",(0,a.kt)("inlineCode",{parentName:"li"},"Docker")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"K8s")," deployment"),(0,a.kt)("li",{parentName:"ul"},"Support ",(0,a.kt)("inlineCode",{parentName:"li"},"Flink")," execution engine"),(0,a.kt)("li",{parentName:"ul"},"Support real-time data quality check")))}u.isMDXComponent=!0}}]);