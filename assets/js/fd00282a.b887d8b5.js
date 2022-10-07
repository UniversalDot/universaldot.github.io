"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8818],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(a),g=r,c=m["".concat(p,".").concat(g)]||m[g]||d[g]||i;return a?n.createElement(c,o(o({ref:e},u),{},{components:a})):n.createElement(c,o({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2766:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Organizations",l={unversionedId:"guides/organization",id:"guides/organization",title:"Organizations",description:"Overview",source:"@site/docs/guides/organization.md",sourceDirName:"guides",slug:"/guides/organization",permalink:"/docs/guides/organization",editUrl:"https://github.com/UniversalDot/udot-wiki/tree/master/wiki/docs/guides/organization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tasks",permalink:"/docs/guides/tasks"},next:{title:"Nodes",permalink:"/docs/network/nodes"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Organization Actions",id:"organization-actions",level:3},{value:"How To Create An Organization (DAO)",id:"how-to-create-an-organization-dao",level:2},{value:"Managing your organization",id:"managing-your-organization",level:2},{value:"Data Model of a Organization",id:"data-model-of-a-organization",level:2}],u={toc:s};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"organizations"},"Organizations"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Organizations organize people with a common Vision to work on projects. The Organizations works as an extension to the Task module since it enables the creation of large projects which collect many tasks."),(0,r.kt)("p",null,"A visionary user is able to propose a Vision for the future. Within the vision, a specified Roadmap is created that is broken down into tasks. Thus a Organization is a collection of tasks who are undertaken by people that believe in the vision of the Founder."),(0,r.kt)("p",null,"Users support a Vision by signing a vision document. Signing a vision document enables users to be added to a Organization where they will be able to create/fulfill tasks in support of the overall vision."),(0,r.kt)("p",null,"For completion of tasks, users are rewarded tokens and increased reputation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ipfs.io/ipfs/Qmd2XrxREJK5WoQYUUBoJsuDU2hDbrUuxLwkNPn42EgacH?filename=dao.png",alt:"Task"})),(0,r.kt)("h3",{id:"organization-actions"},"Organization Actions"),(0,r.kt)("p",null,"Within an organization, the following actions can be performed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create Vision"),(0,r.kt)("li",{parentName:"ul"},"Remove Vision"),(0,r.kt)("li",{parentName:"ul"},"Create Organization"),(0,r.kt)("li",{parentName:"ul"},"Remove Organization"),(0,r.kt)("li",{parentName:"ul"},"Add member"),(0,r.kt)("li",{parentName:"ul"},"Remove members"),(0,r.kt)("li",{parentName:"ul"},"Add task"),(0,r.kt)("li",{parentName:"ul"},"Remove task")),(0,r.kt)("h2",{id:"how-to-create-an-organization-dao"},"How To Create An Organization (DAO)"),(0,r.kt)("p",null,"To create your own DAO navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Organization")," tab in the menu and then click on ",(0,r.kt)("inlineCode",{parentName:"p"},"My organization")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"Organizations"),". On the right top corner on the new page you will find a button ",(0,r.kt)("em",{parentName:"p"},"Create Organizations"),". "),(0,r.kt)("p",null,"Clicking on ",(0,r.kt)("inlineCode",{parentName:"p"},"Create organization")," open a modal dialog where you can fill out organizational details."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ipfs.io/ipfs/QmURX9SHnY2PHXE4cfKDdwGbQB7DmY6CC76xpXnftKDBbL?filename=CreateOrganization.png#center",alt:"Task"})),(0,r.kt)("h2",{id:"managing-your-organization"},"Managing your organization"),(0,r.kt)("p",null,"Once your organization is created, you can perform the following actions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update"),": Change the basic information related ro your organization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transfer Ownership"),": Transfer the organization to another user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dissolve"),": Dissolve the organization once the vision has been fulfilled.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ipfs.io/ipfs/QmSLLx6XUpsiLKEcYyykooyaCBcjsj7J9fXbUpCNAZyzeh?filename=DaoActions.png#center",alt:"Task"})),(0,r.kt)("h2",{id:"data-model-of-a-organization"},"Data Model of a Organization"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Characteristic"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Entry"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for an organization"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID or similar"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the organization"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Manual, Mandatory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic description regarding the organization, industry, and goals"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Manual, Optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Owner"),(0,r.kt)("td",{parentName:"tr",align:null},"The account that owns the organization. The initial owner is the founder. Ownership should be able to be transferred to other accounts."),(0,r.kt)("td",{parentName:"tr",align:null},"Account ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic, Mandatory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vision"),(0,r.kt)("td",{parentName:"tr",align:null},"Document that describes company Vision"),(0,r.kt)("td",{parentName:"tr",align:null},"String (Hash to IPFS Document)"),(0,r.kt)("td",{parentName:"tr",align:null},"Manual, Mandatory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Members"),(0,r.kt)("td",{parentName:"tr",align:null},"Members that belong to an organization"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of AccountID"),(0,r.kt)("td",{parentName:"tr",align:null},"Manual, Mandatory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tasks"),(0,r.kt)("td",{parentName:"tr",align:null},"Tasks that belong to a certain Organization"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of TaskID"),(0,r.kt)("td",{parentName:"tr",align:null},"Manual, Mandatory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Applicants"),(0,r.kt)("td",{parentName:"tr",align:null},"Users that have applied to join to a certain organization"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of AccountID"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null},"The date when the organization was created"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime, Block"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LastUpdated"),(0,r.kt)("td",{parentName:"tr",align:null},"The date when the organization had an update"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime, Block"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Properties"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom collection of properties that can be added."),(0,r.kt)("td",{parentName:"tr",align:null},"An array of Objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Manual, Optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);