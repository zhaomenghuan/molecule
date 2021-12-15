"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4006],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=i,u=c["".concat(s,".").concat(k)]||c[k]||m[k]||r;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"molecule.IExtensionService",title:"Interface: IExtensionService",sidebar_label:"IExtensionService",custom_edit_url:null},s=void 0,p={unversionedId:"api/interfaces/molecule.IExtensionService",id:"api/interfaces/molecule.IExtensionService",isDocsHomePage:!1,title:"Interface: IExtensionService",description:"molecule.IExtensionService",source:"@site/docs/api/interfaces/molecule.IExtensionService.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.IExtensionService",permalink:"/docs/api/interfaces/molecule.IExtensionService",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.IExtensionService",title:"Interface: IExtensionService",sidebar_label:"IExtensionService",custom_edit_url:null},sidebar:"api",previous:{title:"IExplorerService",permalink:"/docs/api/interfaces/molecule.IExplorerService"},next:{title:"IFolderTreeService",permalink:"/docs/api/interfaces/molecule.IFolderTreeService"}},d=[{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"activate",id:"activate",children:[]},{value:"add",id:"add",children:[]},{value:"dispose",id:"dispose",children:[]},{value:"disposeAll",id:"disposeall",children:[]},{value:"executeCommand",id:"executecommand",children:[]},{value:"getAllExtensions",id:"getallextensions",children:[]},{value:"getExtension",id:"getextension",children:[]},{value:"inactive",id:"inactive",children:[]},{value:"load",id:"load",children:[]},{value:"registerAction",id:"registeraction",children:[]},{value:"reset",id:"reset",children:[]},{value:"splitLanguagesExts",id:"splitlanguagesexts",children:[]}]}],m={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".IExtensionService"),(0,r.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../classes/molecule.ExtensionService"},(0,r.kt)("inlineCode",{parentName:"a"},"ExtensionService")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"activate"},"activate"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"activate"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"extensions"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Activate the extensions (includes ",(0,r.kt)("inlineCode",{parentName:"p"},"contributes")," type).\nNotice: this method only do  the ",(0,r.kt)("inlineCode",{parentName:"p"},"activate")," work, not store the data into ExtensionService,\nwhich means you can't get the Extension by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtensionService. getExtension")," method."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"extensions")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L38"},"src/services/extensionService.ts:38")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"add"},"add"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"add"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"extensions"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]"),(0,r.kt)("p",null,"Add the extensions to ExtensionService, but no activated."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"extensions")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Extensions wait to added")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]"),(0,r.kt)("p",null,"Unload Extensions"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L31"},"src/services/extensionService.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"dispose"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"extensionId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Dispose the specific extension, and remove it from the ExtensionService"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"extensionId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UniqueId"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L53"},"src/services/extensionService.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disposeall"},"disposeAll"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"disposeAll"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Dispose all extensions, and reset the ExtensionService"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L57"},"src/services/extensionService.ts:57")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"executecommand"},"executeCommand"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"executeCommand"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Execute the registered command"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The command ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L88"},"src/services/extensionService.ts:88")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getallextensions"},"getAllExtensions"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getAllExtensions"),"(): ",(0,r.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]"),(0,r.kt)("p",null,"Get All loaded extensions"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]"),(0,r.kt)("p",null,"Extension Array"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L48"},"src/services/extensionService.ts:48")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getextension"},"getExtension"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getExtension"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension"))),(0,r.kt)("p",null,"Get an extension by the ID"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UniqueId"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension"))),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L43"},"src/services/extensionService.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inactive"},"inactive"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"inactive"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"predicate"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Disable to activate some extensions, make use of it to filter some\nextensions no need to activate. You need register the inactive event before the MoleculeProvider declaration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"}," molecule.extension.inactive((extension: IExtension) => {\n     if (/^(idA|idB)$/.test(extension.id)) {\n         return true;\n     }\n });\n <MoleculeProvider extensions={[]}></MoleculeProvider>\n")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"predicate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"extension"),": ",(0,r.kt)("a",{parentName:"td",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The predicate function")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L72"},"src/services/extensionService.ts:72")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"load"},"load"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"load"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"extensions"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Load the extension instances and then activate them.\nNotice: The ExtensionService doesn't load an existed Extension, if you want inactivate\nsomeone extension, there can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtensionService.inactive")," method, also if you want\nremove a extension, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtensionService.dispose")," method."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"extensions")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The extension array")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L25"},"src/services/extensionService.ts:25")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"registeraction"},"registerAction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"registerAction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"actionClass"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Register a new action which is extends the Action2,"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const action = class Action extends Action2 {};\nregisterAction(action);\n")),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionClass")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"Action2"))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L82"},"src/services/extensionService.ts:82")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"reset"},"reset"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Reset the extensions to ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L92"},"src/services/extensionService.ts:92")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"splitlanguagesexts"},"splitLanguagesExts"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"splitLanguagesExts"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"extensions"),"): [",(0,r.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[], ",(0,r.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]]"),(0,r.kt)("p",null,"Distinguish the language extensions from extensions"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"extensions")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]")))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[], ",(0,r.kt)("a",{parentName:"p",href:"molecule.model.IExtension"},(0,r.kt)("inlineCode",{parentName:"a"},"IExtension")),"[]]"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/services/extensionService.ts#L98"},"src/services/extensionService.ts:98")))}c.isMDXComponent=!0}}]);