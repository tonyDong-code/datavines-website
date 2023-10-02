"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[9536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"local-mode",title:"Local Mode"},i=void 0,c={unversionedId:"user-guide/local-mode",id:"user-guide/local-mode",title:"Local Mode",description:"Create config file",source:"@site/docs/03-user-guide/02-local-mode.md",sourceDirName:"03-user-guide",slug:"/user-guide/local-mode",permalink:"/datavines-website/docs/user-guide/local-mode",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/docs/03-user-guide/02-local-mode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"local-mode",title:"Local Mode"},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/datavines-website/docs/user-guide/quick-start"},next:{title:"Catalog Introduction",permalink:"/datavines-website/docs/features/catalog/catalog-intro"}},l={},s=[{value:"Create config file",id:"create-config-file",level:2},{value:"Add metric config",id:"add-metric-config",level:2},{value:"Run metric job",id:"run-metric-job",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-config-file"},"Create config file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd datavines-1.0.0-SNAPSHOT-bin/bin\nvi metric_job_config.json\n")),(0,a.kt)("h2",{id:"add-metric-config"},"Add metric config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "languageEn":true,\n  "name":"test",\n  "executePlatformType":"client",\n  "parameter":{\n    "connectorParameter":{\n      "type":"mysql",\n      "parameters":{\n        "database":"test",\n        "password":"123456",\n        "port":"3306",\n        "host":"localhost",\n        "user":"root",\n        "properties":"useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=Asia/Shanghai"\n      }\n    },\n    "metricParameterList":[\n      {\n        "metricType":"column_duplicate",\n        "metricParameter":{\n          "table":"test_table",\n          "column":"test_column",\n          "metric_database":"test"\n        },\n\n        "expectedType":"fix_value",\n        "expectedParameter":{\n          "expected_value":"10"\n        },\n        "resultFormula":"count",\n        "operator":"lt",\n        "threshold":5.0\n      }\n    ]\n  },\n  "errorDataStorageType": "file",\n  "errorDataStorageParameter": {\n    "data_dir":"/tmp/datavines/error-data",\n    "column_separator":","\n  },\n  "validateResultDataStorageType": "file",\n  "validateResultDataStorageParameter":{\n    "data_dir":"/tmp/datavines/validate-result-data",\n    "column_separator":","\n  },\n  "notificationParameters": [\n    {\n      "type":"email",\n      "config": {\n        "serverHost":"smtp.qq.com",\n        "serverPort":"25",\n        "sender":"1234567@qq.com", // input your mail\n        "enableSmtpAuth":"true",\n        "user":"123456@qq.com", // input your username\n        "passwd":"123456", // input your passwd\n        "starttlsEnable":"false",\n        "sslEnable":"false",\n        "smtpSslTrust":"true"\n      },\n      "receiver": {\n        "to":"12345566@qq.com" // input receiver email\n      }\n    }\n  ]\n}\n\n')),(0,a.kt)("h2",{id:"run-metric-job"},"Run metric job"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./datavines-submit.sh metric_job_config.json\n")))}d.isMDXComponent=!0}}]);