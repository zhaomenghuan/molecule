"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7650],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),m=i,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7303:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={id:"molecule.model.ISidebarPane",title:"Interface: ISidebarPane",sidebar_label:"ISidebarPane",custom_edit_url:null},c=void 0,d={unversionedId:"api/interfaces/molecule.model.ISidebarPane",id:"api/interfaces/molecule.model.ISidebarPane",isDocsHomePage:!1,title:"Interface: ISidebarPane",description:"molecule.model.ISidebarPane",source:"@site/docs/api/interfaces/molecule.model.ISidebarPane.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.model.ISidebarPane",permalink:"/en/docs/api/interfaces/molecule.model.ISidebarPane",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.model.ISidebarPane",title:"Interface: ISidebarPane",sidebar_label:"ISidebarPane",custom_edit_url:null},sidebar:"api",previous:{title:"ISidebar",permalink:"/en/docs/api/interfaces/molecule.model.ISidebar"},next:{title:"IStatusBar",permalink:"/en/docs/api/interfaces/molecule.model.IStatusBar"}},p=[{value:"Properties",id:"properties",children:[{value:"id",id:"id",children:[]},{value:"title",id:"title",children:[]}]},{value:"Methods",id:"methods",children:[{value:"render",id:"render",children:[]}]}],u={toc:p};function s(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".ISidebarPane"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"UniqueId")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/model/workbench/sidebar.ts#L4"},"src/model/workbench/sidebar.ts:4")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"title"},"title"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"title"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/model/workbench/sidebar.ts#L5"},"src/model/workbench/sidebar.ts:5")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"render"},"render"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"render"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactNode")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReactNode")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/model/workbench/sidebar.ts#L6"},"src/model/workbench/sidebar.ts:6")))}s.isMDXComponent=!0}}]);