"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2958],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},957:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={id:"IMoleculeProps",title:"Interface: IMoleculeProps",sidebar_label:"IMoleculeProps",sidebar_position:0,custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/IMoleculeProps",id:"api/interfaces/IMoleculeProps",isDocsHomePage:!1,title:"Interface: IMoleculeProps",description:"Properties",source:"@site/docs/api/interfaces/IMoleculeProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IMoleculeProps",permalink:"/docs/api/interfaces/IMoleculeProps",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IMoleculeProps",title:"Interface: IMoleculeProps",sidebar_label:"IMoleculeProps",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"event",permalink:"/docs/api/namespaces/molecule.event"},next:{title:"IActivityBarController",permalink:"/docs/api/interfaces/molecule.IActivityBarController"}},u=[{value:"Properties",id:"properties",children:[{value:"defaultLocale",id:"defaultlocale",children:[]},{value:"extensions",id:"extensions",children:[]}]}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"defaultlocale"},"defaultLocale"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"defaultLocale"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Specify a default locale Id, the Molecule built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"zh-CN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"en")," two languages, and\ndefault locale Id is ",(0,i.kt)("inlineCode",{parentName:"p"},"en"),"."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/provider/molecule.tsx#L29"},"src/provider/molecule.tsx:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"extensions"},"extensions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"extensions"),": ",(0,i.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,i.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]"),(0,i.kt)("p",null,"Molecule Extension instances, after the MoleculeProvider\ndid mount, then handle it."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/provider/molecule.tsx#L24"},"src/provider/molecule.tsx:24")))}d.isMDXComponent=!0}}]);