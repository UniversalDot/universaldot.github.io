"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(v,l(l({ref:t},d),{},{components:n})):r.createElement(v,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},l="Development",i={unversionedId:"sdk/development",id:"sdk/development",title:"Development",description:"Front-end development",source:"@site/docs/sdk/development.md",sourceDirName:"sdk",slug:"/sdk/development",permalink:"/mk/docs/sdk/development",editUrl:"https://github.com/UniversalDot/udot-wiki/tree/master/wiki/docs/sdk/development.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/mk/docs/sdk/api"},next:{title:"Docker",permalink:"/mk/docs/sdk/docker"}},p={},s=[{value:"Front-end development",id:"front-end-development",level:2},{value:"Rust development",id:"rust-development",level:2},{value:"ML/AI development",id:"mlai-development",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development"},"Development"),(0,o.kt)("h2",{id:"front-end-development"},"Front-end development"),(0,o.kt)("p",null,"It is possible to develop your own front-end application that integrates and connects with the application. "),(0,o.kt)("p",null,"For more details on what data is available in the substrate node, we will refer you to the ",(0,o.kt)("a",{parentName:"p",href:"/mk/docs/sdk/api"},"API section"),"."),(0,o.kt)("h2",{id:"rust-development"},"Rust development"),(0,o.kt)("p",null,"In addition, it is also possible to build on top of the pallets we have already provided under open Apache 2.0 License."),(0,o.kt)("p",null,"The custom pallets that have been developed can be found our our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/UniversalDot/universal-dot-node/tree/universal-develop/pallets"},"Github")," repository."),(0,o.kt)("h2",{id:"mlai-development"},"ML/AI development"),(0,o.kt)("p",null,"We have developed ",(0,o.kt)("a",{parentName:"p",href:"https://tfhub.dev/universaldot"},"machine learning models")," that are used to recommend tasks to individuals based on their personal profile."),(0,o.kt)("p",null,"You can contribute to further development to these machine learning models by making commits to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/UniversalDot/tensorflow"},"tensorflow")," repository."))}c.isMDXComponent=!0}}]);