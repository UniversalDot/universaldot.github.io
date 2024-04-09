"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1755],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5863:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),i=["components"],a={sidebar_position:5},l="Testing",u={unversionedId:"sdk/Testing",id:"sdk/Testing",title:"Testing",description:"To ensure all developed functionality works as intended, tests have been implemented.",source:"@site/docs/sdk/Testing.md",sourceDirName:"sdk",slug:"/sdk/Testing",permalink:"/docs/sdk/Testing",editUrl:"https://github.com/UniversalDot/udot-wiki/tree/master/wiki/docs/sdk/Testing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/sdk/docker"},next:{title:"Contribute to Wiki",permalink:"/docs/tutorial-extras/contribute"}},c={},p=[{value:"Substrate Test",id:"substrate-test",level:2},{value:"Mock Runtime",id:"mock-runtime",level:5},{value:"Writing tests",id:"writing-tests",level:5},{value:"Run tests",id:"run-tests",level:5},{value:"Cypress Testing",id:"cypress-testing",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing"},"Testing"),(0,o.kt)("p",null,"To ensure all developed functionality works as intended, tests have been implemented."),(0,o.kt)("h2",{id:"substrate-test"},"Substrate Test"),(0,o.kt)("h5",{id:"mock-runtime"},"Mock Runtime"),(0,o.kt)("p",null,"Pallet test depend on substrate Runtime. To be able to run these pallet test, first we must construct a mock Runtime environment. Mocks for runtime are constructed for each pallet separately and are located in their respective /src/ folder."),(0,o.kt)("h5",{id:"writing-tests"},"Writing tests"),(0,o.kt)("p",null,"Tests are functions, annotated with the #","[test]"," macro. To test specific functionality, we use ",(0,o.kt)("b",null,"assert")," macros to match our expectations with the expected result. There are already several predefine assert macros such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"assert_eq!"),(0,o.kt)("li",{parentName:"ul"},"assert_ok!"),(0,o.kt)("li",{parentName:"ul"},"assert_noop!")),(0,o.kt)("p",null,"For more information on how to create tests, refer to the following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/how-to-guides/v3/testing/basics/"},"link"),". "),(0,o.kt)("h5",{id:"run-tests"},"Run tests"),(0,o.kt)("p",null,"To run test each pallet, simply navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pallets")," folder in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/UniversalDot/universal-dot-node"},"universal-dot-node")," repository and run the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo test\n")),(0,o.kt)("p",null,"To run benchmark tests for each pallet, simply run at pallet root: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo test --features runtime-benchmarks\n")),(0,o.kt)("h2",{id:"cypress-testing"},"Cypress Testing"),(0,o.kt)("p",null,"TO DO"))}m.isMDXComponent=!0}}]);