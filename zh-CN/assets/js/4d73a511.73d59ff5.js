"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[2918],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),m=u(a),o=n,k=m["".concat(p,".").concat(o)]||m[o]||s[o]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=o;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[m]="string"==typeof t?t:n,i[1]=c;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},6934:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={id:"multi-table-accuracy",title:"\u8de8\u8868\u51c6\u786e\u6027"},i=void 0,c={unversionedId:"features/metric/multi-table-metric/multi-table-accuracy",id:"features/metric/multi-table-metric/multi-table-accuracy",title:"\u8de8\u8868\u51c6\u786e\u6027",description:"\u6982\u5ff5\u89e3\u91ca",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-features/02-metric/02-multi-table-metric/02-multi-table-accuracy.md",sourceDirName:"04-features/02-metric/02-multi-table-metric",slug:"/features/metric/multi-table-metric/multi-table-accuracy",permalink:"/datavines-website/zh-CN/docs/features/metric/multi-table-metric/multi-table-accuracy",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-features/02-metric/02-multi-table-metric/02-multi-table-accuracy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"multi-table-accuracy",title:"\u8de8\u8868\u51c6\u786e\u6027"},sidebar:"tutorialSidebar",previous:{title:"\u4e24\u8868\u503c\u6bd4\u5bf9",permalink:"/datavines-website/zh-CN/docs/features/metric/multi-table-metric/multi-table-value-comparison"},next:{title:"\u671f\u671b\u503c-\u65e0",permalink:"/datavines-website/zh-CN/docs/features/metric/expected-value/expected-value-none"}},p={},u=[{value:"\u6982\u5ff5\u89e3\u91ca",id:"\u6982\u5ff5\u89e3\u91ca",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u53c2\u6570\u4ecb\u7ecd",id:"\u53c2\u6570\u4ecb\u7ecd",level:2},{value:"Options",id:"options",level:3},{value:"database string",id:"database-string",level:4},{value:"table string",id:"table-string",level:4},{value:"database2 string",id:"database2-string",level:4},{value:"table2 string",id:"table2-string",level:4},{value:"mappingColumns string",id:"mappingcolumns-string",level:4},{value:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50",id:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u601d\u8def",id:"\u601d\u8def",level:3},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}],d={toc:u};function m(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6982\u5ff5\u89e3\u91ca"},"\u6982\u5ff5\u89e3\u91ca"),(0,n.kt)("p",null,"\u8de8\u8868\u51c6\u786e\u6027\u662f\u7528\u4e8e\u68c0\u67e5\u6e90\u8868\u4e0e\u76ee\u6807\u8868\u6307\u5b9a\u5b57\u6bb5\u7684\u6570\u636e\u5dee\u5f02\uff0c\u4e3e\u4e2a\u4f8b\u5b50"),(0,n.kt)("p",null,"\u8868\uff1atest1"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"C1"),(0,n.kt)("th",{parentName:"tr",align:"center"},"C2"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"a"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2")))),(0,n.kt)("p",null,"\u8868\uff1atest2"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"C21"),(0,n.kt)("th",{parentName:"tr",align:"center"},"C22"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"a"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"3")))),(0,n.kt)("p",null,"\u5982\u679c\u5bf9\u6bd4c1\u548cc21\u4e2d\u7684\u6570\u636e\uff0c\u5219\u8868test1\u548ctest2\u5b8c\u5168\u4e00\u81f4\u3002 \u5982\u679c\u5bf9\u6bd4c2\u548cc22\u5219\u8868test1\u548c\u8868test2\u4e2d\u7684\u6570\u636e\u5219\u5b58\u5728\u4e0d\u4e00\u81f4\u4e86\u3002"),(0,n.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,n.kt)("p",null,"\u901a\u8fc7 \u3010\u6e90\u8868 LEFT JOIN \u76ee\u6807\u8868 on \u6e90\u8868.\u52171 = \u76ee\u6807\u8868.\u521721 where \u6e90\u8868.\u52171 \u4e0d\u7b49\u4e8e NULL \u4e14 \u76ee\u6807\u8868.\u521721 \u7b49\u4e8e NULL\u3011 SQL \u8bed\u53e5\u6765\u7b5b\u9009\u51fa\u6e90\u8868\u4e2d\u5b58\u5728\u7684\u6570\u636e\u800c\u76ee\u6807\u8868\u4e2d\u4e0d\u5b58\u5728\u7684\u6570\u636e."),(0,n.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u521b\u5efa\u89c4\u5219\u4f5c\u4e1a\uff0c\u9009\u62e9\u6570\u636e\u6bd4\u5bf9\u4f5c\u4e1a"),(0,n.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u4f5c\u4e1a\u9875\u9762\u9009\u62e9 \u8de8\u8868\u51c6\u786e\u6027 \u89c4\u5219"),(0,n.kt)("li",{parentName:"ul"},"\u8fdb\u884c\u6e90\u8868\u548c\u76ee\u6807\u8868\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u9009\u62e9\u8981\u68c0\u67e5\u7684\u5b57\u6bb5")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u4e24\u8868\u503c\u6bd4\u5bf9\u89c4\u5219",src:a(8775).Z,width:"1920",height:"937"})),(0,n.kt)("h2",{id:"\u53c2\u6570\u4ecb\u7ecd"},"\u53c2\u6570\u4ecb\u7ecd"),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#database-string"},"database")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#table-string"},"table")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#database2-string"},"database2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#table2-string"},"table2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#expected_execute_sql-string"},"mappingColumns")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,n.kt)("h4",{id:"database-string"},"database ","[string]"),(0,n.kt)("p",null,"\u6e90\u8868\u6570\u636e\u5e93\u540d"),(0,n.kt)("h4",{id:"table-string"},"table ","[string]"),(0,n.kt)("p",null,"\u6e90\u8868\u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d"),(0,n.kt)("h4",{id:"database2-string"},"database2 ","[string]"),(0,n.kt)("p",null,"\u76ee\u6807\u8868\u6570\u636e\u5e93\u540d"),(0,n.kt)("h4",{id:"table2-string"},"table2 ","[string]"),(0,n.kt)("p",null,"\u76ee\u6807\u8868\u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d"),(0,n.kt)("h4",{id:"mappingcolumns-string"},"mappingColumns ","[string]"),(0,n.kt)("p",null,"\u8981\u8fdb\u884c\u68c0\u67e5\u7684\u5b57\u6bb5\uff0ccolumn \u4e3a \u6e90\u8868\u7684\u5b57\u6bb5\uff0ccolumn2 \u4e3a\u76ee\u6807\u8868\u7684\u5b57\u6bb5\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[{\\"column\\":\\"job_execution_id\\",\\"operator\\":\\"=\\",\\"column2\\":\\"job_execution_id\\"}]\n')),(0,n.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"},"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "metricType": "multi_table_value_comparison",\n  "metricParameter": {\n    "database": "datavines",\n    "table": "dv_actual_values",\n    "database2": "datavines",\n    "table2": "dv_actual_values1",\n    "mappingColumns": "[{\\"column\\":\\"job_execution_id\\",\\"operator\\":\\"=\\",\\"column2\\":\\"job_execution_id\\"}"\n  }\n}\n')),(0,n.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u8fdb\u884c\u68c0\u67e5\u7684\u6e90\u8868\u548c\u76ee\u6807\u8868\u90fd\u5728\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u5b9e\u4f8b\u4e2d\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"Local")," \u5f15\u64ce\u6765\u6267\u884c\uff0c\u5982\u679c\u6e90\u8868\u548c\u76ee\u6807\u8868\u5728\u4e0d\u540c\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u4e2d\uff0c\u90a3\u4e48\u53ea\u80fd\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"Spark")," \u5f15\u64ce\u3002")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,n.kt)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),(0,n.kt)("p",null,"..."),(0,n.kt)("h3",{id:"\u601d\u8def"},"\u601d\u8def"),(0,n.kt)("p",null,"..."),(0,n.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,n.kt)("p",null,"..."))}m.isMDXComponent=!0},8775:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/metric_multi_table_accuracy-26d140f60999e169f9afb5113a712cb3.png"}}]);