"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7706],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6810:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="Staking UDOT",c={unversionedId:"token/staking-udot",id:"token/staking-udot",title:"Staking UDOT",description:"The network uses Nominated Proof of Stake (NPoS) mechanism to reach consensus of current global state. As such, it allows for network participants to nominate validators that can process transactions in their name. During the process of nomination, they will stake their own UDOT token to a certain validator set. Therefore it is important to nominate trustworthy validators since nominating bad validators may lead to slashing and losing UDOT's.",source:"@site/docs/token/staking-udot.md",sourceDirName:"token",slug:"/token/staking-udot",permalink:"/docs/token/staking-udot",editUrl:"https://github.com/UniversalDot/udot-wiki/tree/master/wiki/docs/token/staking-udot.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Buying UDOT",permalink:"/docs/token/buying-udot"},next:{title:"Wallets",permalink:"/docs/token/wallets"}},u={},m=[{value:"How to stake",id:"how-to-stake",level:2},{value:"Staking rewords",id:"staking-rewords",level:2}],p={toc:m};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"staking-udot"},"Staking UDOT"),(0,a.kt)("p",null,"The network uses ",(0,a.kt)("strong",{parentName:"p"},"Nominated Proof of Stake (NPoS)")," mechanism to reach consensus of current global state. As such, it allows for network participants to nominate validators that can process transactions in their name. During the process of nomination, they will stake their own UDOT token to a certain validator set. Therefore it is important to nominate trustworthy validators since nominating bad validators may lead to slashing and losing UDOT's. "),(0,a.kt)("h2",{id:"how-to-stake"},"How to stake"),(0,a.kt)("p",null,"There are some minimum requirements for nominators in order to stake their UDOT."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"have an account with separate controller and staking account."),(0,a.kt)("li",{parentName:"ul"},"shall have more than min-staking-threshold (100 UDOT)."),(0,a.kt)("li",{parentName:"ul"},"shall stake only with nominators with proven history.")),(0,a.kt)("h2",{id:"staking-rewords"},"Staking rewords"),(0,a.kt)("p",null,"As an incentive for staking, nominators are reworded with additional UDOT tokens. "),(0,a.kt)("p",null,"These token rewards are calculated using sequential Phragm\xe9n method which can be summarized as follows:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"The problem that Phragm\xe9n\u2019s methods try to solve is that of electing a set of a given numbers of persons from a larger set of candidates. Phragm\xe9n discussed this in the context of a parliamentary election in a multi-member constituency; the same problem can, of course, also occur in local elections, but also in many other situations such as electing a board or a committee in an organization.")))}d.isMDXComponent=!0}}]);