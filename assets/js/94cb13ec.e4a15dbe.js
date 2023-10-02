"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[1626],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=o(a),p=n,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return a?r.createElement(m,i(i({ref:t},g),{},{components:a})):r.createElement(m,i({ref:t},g))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={id:"custom-aggregate-sql",title:"custom_aggregate_sql"},i=void 0,s={unversionedId:"features/metric/single-table-metric/custom-aggregate-sql",id:"features/metric/single-table-metric/custom-aggregate-sql",title:"custom_aggregate_sql",description:"\u4f7f\u7528\u65b9\u6cd5",source:"@site/docs/04-features/02-metric/01-single-table-metric/01-custom-aggregate-sql.md",sourceDirName:"04-features/02-metric/01-single-table-metric",slug:"/features/metric/single-table-metric/custom-aggregate-sql",permalink:"/datavines-website/docs/features/metric/single-table-metric/custom-aggregate-sql",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/docs/04-features/02-metric/01-single-table-metric/01-custom-aggregate-sql.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"custom-aggregate-sql",title:"custom_aggregate_sql"},sidebar:"tutorialSidebar",previous:{title:"Databend",permalink:"/datavines-website/docs/features/catalog/connector/connector-databend"},next:{title:"column_not_null",permalink:"/datavines-website/docs/features/metric/single-table-metric/column-not-null"}},c={},o=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u53c2\u6570\u4ecb\u7ecd",id:"\u53c2\u6570\u4ecb\u7ecd",level:2},{value:"Options",id:"options",level:3},{value:"database string",id:"database-string",level:4},{value:"table string",id:"table-string",level:4},{value:"actual_aggregate_sql string",id:"actual_aggregate_sql-string",level:4},{value:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50",id:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50",level:3},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u601d\u8def",id:"\u601d\u8def",level:3},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}],g={toc:o};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u521b\u5efa\u89c4\u5219\u4f5c\u4e1a\uff0c\u9009\u62e9\u6570\u636e\u8d28\u91cf\u4f5c\u4e1a"),(0,n.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u4f5c\u4e1a\u9875\u9762\u9009\u62e9 \u81ea\u5b9a\u4e49\u805a\u5408SQL \u89c4\u5219"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u8981\u68c0\u67e5\u7684\u6570\u636e\u6e90\u4fe1\u606f\uff0c\u7f16\u5199\u81ea\u5b9a\u4e49\u805a\u5408 SQL \u8bed\u53e5")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u81ea\u5b9a\u4e49\u805a\u5408SQL\u89c4\u5219",src:a(9554).Z,width:"1920",height:"937"})),(0,n.kt)("h2",{id:"\u53c2\u6570\u4ecb\u7ecd"},"\u53c2\u6570\u4ecb\u7ecd"),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#database-string"},"database")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#table-string"},"table")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#actual_execute_sql-string"},"actual_aggregate_sql")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,n.kt)("h4",{id:"database-string"},"database ","[string]"),(0,n.kt)("p",null,"\u6e90\u8868\u6570\u636e\u5e93\u540d"),(0,n.kt)("h4",{id:"table-string"},"table ","[string]"),(0,n.kt)("p",null,"\u6e90\u8868\u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d"),(0,n.kt)("h4",{id:"actual_aggregate_sql-string"},"actual_aggregate_sql ","[string]"),(0,n.kt)("p",null,"\u81ea\u5b9a\u4e49\u805a\u5408SQL\uff0c\u6ce8\u610f as \u540e\u9762\u7684\u522b\u540d\u4e00\u5b9a\u8981\u662f ",(0,n.kt)("strong",{parentName:"p"},"actual_value"),"\uff0c\u5426\u5219\u7edf\u8ba1\u4f1a\u51fa\u9519\u3002"),(0,n.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"},"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n    "metricType": "custom_aggregate_sql",\n    "metricParameter": {\n        "database": "datavines",\n        "table": "dv_actual_values",\n        "actual_aggregate_sql": "select count(1) as actual_value from ${table}"\n    }\n}\n')),(0,n.kt)("h2",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,n.kt)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),(0,n.kt)("p",null,"..."),(0,n.kt)("h3",{id:"\u601d\u8def"},"\u601d\u8def"),(0,n.kt)("p",null,"..."),(0,n.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,n.kt)("p",null,"..."))}u.isMDXComponent=!0},9554:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/metric_custom_aggregate_sql-959c292a33072afb77fcf9b1dfa1be40.png"}}]);