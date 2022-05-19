"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4462],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3186:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_position:2},l="Substrate",c={unversionedId:"architecture/substrate",id:"architecture/substrate",title:"Substrate",description:"Substrate was created by pioneers and veterans of the blockchain industry who set out to overcome the limitations of previous-generation blockchain networks. It was born from the vision that developers shouldn't have to recreate",source:"@site/docs/architecture/substrate.md",sourceDirName:"architecture",slug:"/architecture/substrate",permalink:"/docs/architecture/substrate",editUrl:"https://github.com/UniversalDot/udot-wiki/tree/master/wiki/docs/architecture/substrate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/architecture/overview"},next:{title:"React",permalink:"/docs/architecture/react"}},u={},p=[{value:"Main Features",id:"main-features",level:3},{value:"UDOT Addition to Substrate",id:"udot-addition-to-substrate",level:2}],h={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"substrate"},"Substrate"),(0,i.kt)("p",null,"Substrate was created by pioneers and veterans of the blockchain industry who set out to overcome the limitations of previous-generation blockchain networks. It was born from the vision that developers shouldn't have to recreate\nfundamentals when building and optimizing a blockchain. As such it provides the needed tooling to quickly create decentralized applications."),(0,i.kt)("h3",{id:"main-features"},"Main Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flexible")," - a fully modular blockchain framework that unleashes developers instead of forcing them to work within the confines of others' design decisions.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Forkless"),": Substrate-based nodes take a different approach that enables automatic upgrades, no user intervention is required. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fast"),": Transaction latency can be alleviated through configurable block times, flexible transaction queues, and/or horizontal scaling. Transaction fees are configurable even to the point of feeless transactions."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Open")," - uses familiar open protocols such as libp2p and JSON-RPC while letting the developer decide how much they want to customize their architecture.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tooling"),": Great tooling enables faster development, deployment, and debugging. Not only does Substrate have comprehensive, high-quality tooling, it also enables developers to use tooling developed by others, since everything is based on the same underlying framework."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Community"),": Substrate has a large, active, and extremely helpful builder community. Many of the pallets have been created by the community itself."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Interoperable")," - Developers are often forced to make tradeoffs between compatibility, security, and efficiency to interact with data that exists off-chain and cross-chain. This has led to the creation of bridges, oracles, and other interoperability protocols, all with their own limitations.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compatible"),": Substrate-based blockchain networks have the choice of either operating as a solo chain, a solo chain with a bridge, or integrating as a parachain. Integrating as a parachain enables independent Substrate-based blockchains to gain interoperability with the other independent blockchains. The secret sauce of parachain interoperability lies in XCMP (Cross-Chain Message Passing)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secure"),": Substrate chains can inherit security from Substrate-based relay chains like Polkadot or Kusama. As a result, even a small blockchain network can gain billions of dollars in security guarantees."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Efficient"),": Because of Substrate\u2019s modularity, gas is completely optional, and the introduction of off-chain features greatly reduces computation and storage costs."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Future-proof")," - Blockchain technology is evolving at a rapid pace and has spurred innovation in other areas such as zero-knowledge, consensus mechanisms, cryptographic libraries, and much more. It's challenging enough to keep up with technology let alone integrate it. Substrate enables your blockchain to assimilate new technology as it comes along.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Upgradable"),": With any structure, the foundation is often the most difficult part to modify, and thus upgrade. For this reason, Substrate's base has intentionally been built on an extremely simple and unchanging foundation using the widely-accepted open protocol WebAssembly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Composable"),": As a core design principle, composability enables developers to build a blockchain comprised of components specific to their needs on a battle-tested framework."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Adaptable"),": An ever-growing number of pallets are available, created by both Parity Technologies and the community. These can be combined in many combinations to fit the needs of the desired use case. ")))),(0,i.kt)("h2",{id:"udot-addition-to-substrate"},"UDOT Addition to Substrate"),(0,i.kt)("p",null,"Substrate is built using ",(0,i.kt)("strong",{parentName:"p"},"FRAME")," which is an extensible framework that composes pallets to create the initial blockchain infrastructure. The Framework for Runtime Aggregation of Modularized Entities (FRAME) is a set of modules and support libraries that simplify runtime development. In Substrate, these modules are called Pallets, each hosting domain-specific logic to include in a chain's runtime. "),(0,i.kt)("p",null,"UDOT application incorporates many of these Pallets within its runtime. Reusing these pallets enables faster development time, shared security, and communication with other parachains."),(0,i.kt)("p",null,"At the highest level of abstraction, Substrate has been used within the UDOT application to enable the decentralization and trust features. Many of the composable pallets have been used as-is and we benefit from the added security of the Polkadot and Kusama Ecosystem. "),(0,i.kt)("p",null,"Few layers of custom business logic are developed by the UniversalDot Foundation which enables the creation of profiles, tasks,  and DAOs. This functionality is developed through pallets which is a composite unit of work within the Substrate Framework."))}d.isMDXComponent=!0}}]);