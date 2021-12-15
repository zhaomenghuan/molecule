"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4227],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=o,f=m["".concat(a,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],l={id:"molecule.model.IEditorAction",title:"Interface: IEditorAction",sidebar_label:"IEditorAction",custom_edit_url:null},a=void 0,p={unversionedId:"api/interfaces/molecule.model.IEditorAction",id:"api/interfaces/molecule.model.IEditorAction",isDocsHomePage:!1,title:"Interface: IEditorAction",description:"molecule.model.IEditorAction",source:"@site/docs/api/interfaces/molecule.model.IEditorAction.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.model.IEditorAction",permalink:"/docs/api/interfaces/molecule.model.IEditorAction",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.model.IEditorAction",title:"Interface: IEditorAction",sidebar_label:"IEditorAction",custom_edit_url:null},sidebar:"api",previous:{title:"IEditor",permalink:"/docs/api/interfaces/molecule.model.IEditor"},next:{title:"IEditorActionsProps",permalink:"/docs/api/interfaces/molecule.model.IEditorActionsProps"}},u=[{value:"Properties",id:"properties",children:[{value:"actions",id:"actions",children:[]},{value:"menu",id:"menu",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,i.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".IEditorAction"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"actions"},"actions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"actions"),": ",(0,i.kt)("a",{parentName:"p",href:"molecule.model.IEditorActionsProps"},(0,i.kt)("inlineCode",{parentName:"a"},"IEditorActionsProps")),"[]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/model/workbench/editor.ts#L44"},"src/model/workbench/editor.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"menu"},"menu"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"menu"),": ",(0,i.kt)("a",{parentName:"p",href:"molecule.component.IMenuItemProps"},(0,i.kt)("inlineCode",{parentName:"a"},"IMenuItemProps")),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/model/workbench/editor.ts#L45"},"src/model/workbench/editor.ts:45")))}m.isMDXComponent=!0}}]);