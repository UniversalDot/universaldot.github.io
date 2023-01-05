"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8544],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>p});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),c=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(t),p=n,m=h["".concat(i,".").concat(p)]||h[p]||d[p]||a;return t?o.createElement(m,s(s({ref:r},u),{},{components:t})):o.createElement(m,s({ref:r},u))}));function p(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=h;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3958:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:4},s="Tensorflow",l={unversionedId:"architecture/tensorflow",id:"architecture/tensorflow",title:"Tensorflow",description:"Overview",source:"@site/docs/architecture/tensorflow.md",sourceDirName:"architecture",slug:"/architecture/tensorflow",permalink:"/es/docs/architecture/tensorflow",editUrl:"https://github.com/UniversalDot/udot-wiki/tree/master/wiki/docs/architecture/tensorflow.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/es/docs/architecture/react"},next:{title:"IPFS",permalink:"/es/docs/architecture/ipfs"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"System Architecture",id:"system-architecture",level:2},{value:"TensorFlow Servables",id:"tensorflow-servables",level:3},{value:"Servable Versions",id:"servable-versions",level:3},{value:"Servable Streams",id:"servable-streams",level:3},{value:"TensorFlow API",id:"tensorflow-api",level:2},{value:"TensorFlow Models",id:"tensorflow-models",level:3},{value:"TensorFlow Loaders",id:"tensorflow-loaders",level:3},{value:"Sources in TensorFlow Architecture",id:"sources-in-tensorflow-architecture",level:3},{value:"TensorFlow Core",id:"tensorflow-core",level:3},{value:"TensorFlow Architecture: TensorFlow Core",id:"tensorflow-architecture-tensorflow-core",level:3},{value:"Tensorflow Technical Architecture",id:"tensorflow-technical-architecture",level:3},{value:"TensorFlow Loaders",id:"tensorflow-loaders-1",level:3},{value:"Batcher in TensorFlow Architecture",id:"batcher-in-tensorflow-architecture",level:3}],u={toc:c};function d(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tensorflow"},"Tensorflow"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"TensorFlow Serving is a ",(0,n.kt)("strong",{parentName:"p"},"flexible, high-performance serving system for machine learning models"),", designed for production environments. TensorFlow Serving makes it easy to deploy new algorithms and experiments, while keeping the same server architecture and APIs. TensorFlow Serving provides out of the box integration with TensorFlow models, but can be easily extended to serve other types of models."),(0,n.kt)("h2",{id:"system-architecture"},"System Architecture"),(0,n.kt)("h3",{id:"tensorflow-servables"},"TensorFlow Servables"),(0,n.kt)("p",null,"These are the central rudimentary units in TensorFlow Serving. TensorFlow Servables are the objects that clients use to perform the computation.\nThe size of a servable is flexible. A single servable might include anything from a lookup table to a single model to a tuple of inference models. Servables can be of any type and interface, enabling flexibility and future improvements such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Streaming results"),(0,n.kt)("li",{parentName:"ul"},"Experimental APIs"),(0,n.kt)("li",{parentName:"ul"},"Asynchronous modes of operation.")),(0,n.kt)("h3",{id:"servable-versions"},"Servable Versions"),(0,n.kt)("p",null,"TensorFlow Serving can handle one or more versions of a servable, over the lifetime of a single server instance. This opens the door for fresh algorithm configurations, weights, and other data to be loaded over time. They also enable more than one version of a servable to be loaded concurrently, supporting gradual roll-out and experimentation. At serving time, clients may request either the latest version or a specific version id, for a particular model."),(0,n.kt)("h3",{id:"servable-streams"},"Servable Streams"),(0,n.kt)("p",null,"A sequence of versions of a servable sorted by increasing version numbers."),(0,n.kt)("h2",{id:"tensorflow-api"},"TensorFlow API"),(0,n.kt)("h3",{id:"tensorflow-models"},"TensorFlow Models"),(0,n.kt)("p",null,"A Serving represents a model as one or more servables. A machine-learned model may include one or more algorithms (including learned weights) and lookup or embedding tables. A servable can also serve as a fraction of a model, for example, a large lookup table can be served as many instances."),(0,n.kt)("h3",{id:"tensorflow-loaders"},"TensorFlow Loaders"),(0,n.kt)("p",null,"Loaders manage a servable\u2019s life cycle. The Loader API enables common infrastructure independent from specific learning algorithms, data or product use-cases involved. Specifically, Loaders standardize the APIs for loading and unloading a servable."),(0,n.kt)("h3",{id:"sources-in-tensorflow-architecture"},"Sources in TensorFlow Architecture"),(0,n.kt)("p",null,"Sources are in simple terms, modules that find and provide servables. Each Source provides zero or more servable streams. For each servable stream, a Source supplies one Loader instance for each version it makes available to be loaded.\nTensorFlow Managers\nTensorflow Managers handle the full lifecycle of Servables, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Loading Servables"),(0,n.kt)("li",{parentName:"ul"},"Serving Servables"),(0,n.kt)("li",{parentName:"ul"},"Unloading Servables")),(0,n.kt)("p",null,"Managers listen to sources and track all versions. The Manager tries to fulfil Sources\u2019 requests but, may refuse to load an aspired version. Managers may also postpone an \u201cunload\u201d. For example, a Manager may wait to unload until a newer version finishes loading, based on a policy to guarantee that at least one version is loaded at all times. For example, GetServableHandle(), for clients to access loaded servable instances."),(0,n.kt)("h3",{id:"tensorflow-core"},"TensorFlow Core"),(0,n.kt)("p",null,"This manages (via standard TensorFlow Serving APIs) the following aspects of servables:"),(0,n.kt)("h3",{id:"tensorflow-architecture-tensorflow-core"},"TensorFlow Architecture: TensorFlow Core"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Serving Architecture",src:t(4681).Z,width:"1571",height:"816"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Lifecycle"),(0,n.kt)("li",{parentName:"ul"},"Metrics"),(0,n.kt)("li",{parentName:"ul"},"TensorFlow Serving Core treats servables and loaders as opaque objects.")),(0,n.kt)("h3",{id:"tensorflow-technical-architecture"},"Tensorflow Technical Architecture"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sources create Loaders for Servable Versions, then Loaders are sent as Aspired Versions to the Manager, which loads and serves them to client requests."),(0,n.kt)("li",{parentName:"ul"},"The Loader contains whatever metadata it needs to load the Servable."),(0,n.kt)("li",{parentName:"ul"},"The Source uses a callback to notify the manager of the Aspired Version."),(0,n.kt)("li",{parentName:"ul"},"The manager applies the configured Version Policy to determine the next action to take."),(0,n.kt)("li",{parentName:"ul"},"If the manager determines that it\u2019s safe, it gives the Loader the required resources and tells the Loader to load the new version."),(0,n.kt)("li",{parentName:"ul"},"Clients ask the manager for the Servable, either specifying a version explicitly or just requesting the latest version. The manager returns a handle for the Servable. The Dynamic Manager applies the Version Policy and decides to load the new version."),(0,n.kt)("li",{parentName:"ul"},"The Dynamic Manager tells the Loader that there is enough memory. The Loader instantiates the TensorFlow graph with the new weights."),(0,n.kt)("li",{parentName:"ul"},"A client requests a handle to the latest version of the model, and the Dynamic Manager returns a handle to the new version of the Servable.")),(0,n.kt)("h3",{id:"tensorflow-loaders-1"},"TensorFlow Loaders"),(0,n.kt)("p",null,"These Loaders are the extension point for adding algorithm and data backends. TensorFlow is one such algorithm backend. For example, you would implement a new Loader in order to load, provide access to, and unload an instance of a new type of servable machine learning model."),(0,n.kt)("h3",{id:"batcher-in-tensorflow-architecture"},"Batcher in TensorFlow Architecture"),(0,n.kt)("p",null,"Batching of multiple requests into a single request can significantly reduce the cost of performing inference, especially in the presence of hardware accelerators such as GPUs. TensorFlow Serving includes a request batching widget that let clients easily batch their type-specific inferences across requests into batch requests that algorithm systems can more efficiently process."))}d.isMDXComponent=!0},4681:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/serving_architecture-0887cb049ef13b83e296cea2be3ca2ec.png"}}]);