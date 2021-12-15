"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8123],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3653:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"\u5de5\u4f5c\u53f0\uff08Workbench\uff09",sidebar_label:"\u5de5\u4f5c\u53f0"},p=void 0,s={unversionedId:"guides/extend-workbench",id:"guides/extend-workbench",isDocsHomePage:!1,title:"\u5de5\u4f5c\u53f0\uff08Workbench\uff09",description:"\u5de5\u4f5c\u53f0\uff08Workbench\uff09 \u662f Molecule \u4e2d\u6700\u6838\u5fc3\u7684\u90e8\u4ef6, \u6211\u4eec\u4f7f\u7528 React \u7ec4\u4ef6\u590d\u523b\u4e86 VSCode Workbench \u4f18\u79c0\u7684\u8bbe\u8ba1\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684Workbench UI, \u5e76\u652f\u6301\u6269\u5c55\u673a\u5236\uff0c\u53ef\u4ee5\u9ad8\u5ea6\u81ea\u5b9a\u4e49\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/extend-workbench.md",sourceDirName:"guides",slug:"/guides/extend-workbench",permalink:"/docs/guides/extend-workbench",editUrl:"https://github.com/DTStack/molecule/website/i18n/zh-CN",tags:[],version:"current",frontMatter:{title:"\u5de5\u4f5c\u53f0\uff08Workbench\uff09",sidebar_label:"\u5de5\u4f5c\u53f0"},sidebar:"docs",previous:{title:"\u6269\u5c55",permalink:"/docs/guides/extension"},next:{title:"\u5185\u7f6e\u90e8\u4ef6",permalink:"/docs/guides/extend-builtin-ui"}},c=[{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",children:[]},{value:"\u6269\u5c55\u5de5\u4f5c\u53f0\uff08Workbench)",id:"\u6269\u5c55\u5de5\u4f5c\u53f0workbench",children:[{value:"\u6d3b\u52a8\u680f\uff08ActivityBar\uff09",id:"\u6d3b\u52a8\u680factivitybar",children:[]},{value:"\u8fb9\u680f\uff08SideBar\uff09",id:"\u8fb9\u680fsidebar",children:[]},{value:"\u7f16\u8f91\u5668\uff08Editor\uff09",id:"\u7f16\u8f91\u5668editor",children:[]},{value:"\u9762\u677f\uff08Panel\uff09",id:"\u9762\u677fpanel",children:[]},{value:"\u72b6\u6001\u680f\uff08StatusBar\uff09",id:"\u72b6\u6001\u680fstatusbar",children:[]},{value:"\u83dc\u5355\u680f\uff08MenuBar)",id:"\u83dc\u5355\u680fmenubar",children:[]}]}],m={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/namespaces/molecule#workbench"},"\u5de5\u4f5c\u53f0\uff08Workbench\uff09")," \u662f Molecule \u4e2d\u6700\u6838\u5fc3\u7684\u90e8\u4ef6, \u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"React \u7ec4\u4ef6"),"\u590d\u523b\u4e86 ",(0,i.kt)("strong",{parentName:"p"},"VSCode Workbench")," \u4f18\u79c0\u7684\u8bbe\u8ba1\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684",(0,i.kt)("strong",{parentName:"p"},"Workbench UI"),", \u5e76\u652f\u6301",(0,i.kt)("strong",{parentName:"p"},"\u6269\u5c55\u673a\u5236"),"\uff0c\u53ef\u4ee5\u9ad8\u5ea6",(0,i.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49"),"\u3002"),(0,i.kt)("h2",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"molecule",src:a(7072).Z})),(0,i.kt)("p",null,"\u6211\u4eec\u628a Molecule \u7684\u5de5\u4f5c\u53f0 UI \u5212\u5206\u6210\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"#%E8%8F%9C%E5%8D%95%E6%A0%8Fmenubar"},"MenuBar"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E6%B4%BB%E5%8A%A8%E6%A0%8Factivitybar"},"ActivityBar"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E8%BE%B9%E6%A0%8Fsidebar"},"Sidebar"),",\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E7%BC%96%E8%BE%91%E5%99%A8editor"},"Editor"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E9%9D%A2%E6%9D%BFpanel"},"Panel"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E7%8A%B6%E6%80%81%E6%A0%8Fstatusbar"},"StatusBar")," \u4e3b\u8981",(0,i.kt)("strong",{parentName:"p"},"6"),"\u5927\u6a21\u5757\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u83dc\u5355\u680f\uff08MenuBar\uff09"),"\uff1a\u4e3b\u8981\u8d1f\u8d23 Workbench ",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u83dc\u5355"),"\u7684\u663e\u793a\u548c\u7ba1\u7406\uff0c\u4f8b\u5982\u5e38\u89c1\u7684 ",(0,i.kt)("strong",{parentName:"li"},"\u6587\u4ef6\uff08File\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"li"},"\u7f16\u8f91\uff08Edit\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"li"},"\u9009\u62e9\uff08Selection\uff09")," \u3001",(0,i.kt)("strong",{parentName:"li"},"\u89c6\u56fe\uff08View\uff09"),"\u7b49\u83dc\u5355\u9879\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6d3b\u52a8\u680f\uff08ActivityBar\uff09"),"\uff1a\u4e3b\u8981\u8d1f\u8d23\u5c55\u793a\u5de5\u4f5c\u53f0\u5f53\u524d\u7684",(0,i.kt)("strong",{parentName:"li"},"\u6d3b\u52a8\u9879"),"\uff0c\u4f8b\u5982",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/extend-builtin-ui#%E6%B5%8F%E8%A7%88%E9%9D%A2%E6%9D%BFexplorer"},"\u6d4f\u89c8\uff08Explorer\uff09"),"\uff0c",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/extend-builtin-ui#%E6%90%9C%E7%B4%A2%E9%9D%A2%E6%9D%BFsearch"},"\u641c\u7d22\uff08Search\uff09"),"\u7b49\u6a21\u5757\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cActivityBar \u901a\u5e38\u9700\u8981\u914d\u5408\u5176\u4ed6\u6a21\u5757\u4e00\u8d77",(0,i.kt)("strong",{parentName:"li"},"\u8054\u52a8"),"\uff0c\u4f8b\u5982\u5207\u6362 ActivityBar \u540e\uff0cSidebar \u5219\u9700\u8981\u5c55\u793a\u76f8\u5bf9\u5e94\u7684\u9762\u677f\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u8fb9\u680f\uff08Sidebar\uff09"),"\uff1a\u5de5\u4f5c\u53f0\u7684",(0,i.kt)("strong",{parentName:"li"},"\u5de6\u8fb9\u680f"),"\uff0c\u5176\u5185\u7f6e\u7684",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/extend-builtin-ui#%E6%B5%8F%E8%A7%88%E9%9D%A2%E6%9D%BFexplorer"},"\u6d4f\u89c8\uff08Explorer\uff09"),"\u6a21\u5757\u4e3a Workbench \u91cd\u8981\u7684",(0,i.kt)("strong",{parentName:"li"},"\u5bfc\u822a"),"\u6a21\u5757\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7f16\u8f91\u533a\uff08Editor\uff09"),"\uff1a\u901a\u8fc7\u7f16\u8f91\u5668\u6807\u7b7e\u9875\u6765\u5c55\u793a\u5177\u4f53\u7684\u5de5\u4f5c\u5185\u5bb9\uff0c\u4f8b\u5982",(0,i.kt)("strong",{parentName:"li"},"\u7f16\u8f91\u4ee3\u7801"),"\uff0c\u6216\u8005\u6e32\u67d3\u81ea\u5b9a\u4e49\u7684\u64cd\u4f5c\u754c\u9762\u3002\u5f53\u6ca1\u6709\u6253\u5f00\u7f16\u8f91\u5668\u6807\u7b7e\u9875\u7684\u65f6\u5019\uff0cMolecule \u4f1a\u6e32\u67d3\u4e00\u4e2a",(0,i.kt)("strong",{parentName:"li"},"\u5165\u53e3\uff08Entry\uff09"),"\u9875\u9762\u5728\u8fd9\u5757\u533a\u57df\u3002\u5f53\u7136\uff0c\u8fd9\u4e2a\u5165\u53e3\u9875\u9762\u662f\u652f\u6301",(0,i.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u7684\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u9762\u677f\uff08Panel\uff09"),"\uff1a\u5728 Editor \u7684\u4e0b\u65b9\uff0c\u901a\u5e38\u4f1a\u5c55\u793a\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/extend-builtin-ui#%E9%97%AE%E9%A2%98%E9%9D%A2%E6%9D%BFproblems-"},"\u95ee\u9898\uff08Problems\uff09"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/extend-builtin-ui#%E8%BE%93%E5%87%BA%E9%9D%A2%E6%9D%BFoutput"},"\u8f93\u51fa\uff08Output\uff09"),", ",(0,i.kt)("strong",{parentName:"li"},"\u7ec8\u7aef\uff08Terminal\uff09"),"\u7b49\u6a21\u5757\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u72b6\u6001\u680f\uff08StatusBar\uff09"),"\uff1a\u4f4d\u4e8e\u6574\u4e2a Workbench \u7684\u6700\u5e95\u90e8, \u7528\u6765\u5c55\u793a",(0,i.kt)("strong",{parentName:"li"},"\u72b6\u6001\u4fe1\u606f"),"\u3002\u4f8b\u5982\u5f53\u524d\u7f16\u8f91\u5668\u4e2d\u6587\u4ef6\u7684",(0,i.kt)("strong",{parentName:"li"},"\u8bed\u8a00(Language)"),"\uff0c\u5f53\u524d\u5149\u6807\u6240\u5728",(0,i.kt)("strong",{parentName:"li"},"\u884c\uff08Ln\uff09\u548c\u5217\uff08Col\uff09"),"\uff0c",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/extend-builtin-ui#%E9%80%9A%E7%9F%A5%E6%A0%8Fnotification"},"\u901a\u77e5\uff08Notification\uff09"),"\u7b49\u4fe1\u606f\u3002")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8fd9",(0,i.kt)("strong",{parentName:"p"},"6"),"\u5927\u6a21\u5757\u4ec5\u4ec5\u662f\u505a\u7b80\u5355\u7684\u6e32\u67d3\uff0c\u5e76\u6ca1\u6709\u4ec0\u4e48\u5b9e\u9645\u7684\u529f\u80fd\uff0c\u60f3\u8981\u5b8c\u6210\u5177\u4f53\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u9700\u8981\u6211\u4eec\u8054\u5408\u5176\u4ed6\u6a21\u5757\u6765\u5b9e\u73b0\uff0c\u4f8b\u5982 ",(0,i.kt)("strong",{parentName:"p"},"ActivityBar")," \u4e0e ",(0,i.kt)("strong",{parentName:"p"},"Sidebar")," ",(0,i.kt)("strong",{parentName:"p"},"\u8054\u52a8\uff0cFolderTree")," \u4e0e ",(0,i.kt)("strong",{parentName:"p"},"Editor")," \u8054\u52a8\u7b49\u7b49\u3002"),(0,i.kt)("p",{parentName:"div"},"\u53e6\u5916\uff0c\u4e3a\u4e86\u51cf\u8f7b UI \u5f00\u53d1\u7684\u5de5\u4f5c\u91cf\uff0c\u6211\u4eec\u5728 6 \u5927\u7ec4\u4ef6\u7684\u57fa\u7840\u4e0a\uff0c\u6269\u5c55\u6765\u4e0d\u5c11",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/extend-builtin-ui"},(0,i.kt)("strong",{parentName:"a"},"\u5185\u7f6e\u90e8\u4ef6")),"\uff0c\u8be6\u7ec6\u4f7f\u7528\u60c5",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/extend-builtin-ui"},"\u53c2\u8003")))),(0,i.kt)("h2",{id:"\u6269\u5c55\u5de5\u4f5c\u53f0workbench"},"\u6269\u5c55\u5de5\u4f5c\u53f0\uff08Workbench)"),(0,i.kt)("p",null,"\u8fd9\u90e8\u5206\u5185\u5bb9\u5c06\u8be6\u7ec6\u7684\u5c55\u793a\uff0c\u6211\u4eec\u662f\u5982\u4f55\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"p"},"Extension")," \u548c\u5185\u7f6e\u7684 ",(0,i.kt)("strong",{parentName:"p"},"API")," \u6269\u5c55 ",(0,i.kt)("strong",{parentName:"p"},"Workbench"),"\u7684\u3002"),(0,i.kt)("p",null,"\u540c\u6837\u7684\uff0c\u6211\u4eec\u4ece\u4e00\u4e2a\u573a\u666f\u5f00\u59cb\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Extend Workbench",src:a(1336).Z})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6211\u4eec\u6a21\u62df\u4e86\u4e00\u4e2a\u7b80\u5355\u7684",(0,i.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u7ba1\u7406"),"\u7684\u754c\u9762\u3002\u5728\u8fd9\u4e2a\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u4f1a\u5206\u522b\u5bf9 ",(0,i.kt)("a",{parentName:"p",href:"#%E8%8F%9C%E5%8D%95%E6%A0%8Fmenubar"},"MenuBar"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E6%B4%BB%E5%8A%A8%E6%A0%8Factivitybar"},"ActivityBar"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E8%BE%B9%E6%A0%8Fsidebar"},"Sidebar"),",\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E7%BC%96%E8%BE%91%E5%99%A8editor"},"Editor"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E9%9D%A2%E6%9D%BFpanel"},"Panel"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E7%8A%B6%E6%80%81%E6%A0%8Fstatusbar"},"StatusBar")," 6 \u5927\u6a21\u5757\u9010\u4e00\u8fdb\u884c\u6269\u5c55\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u6587\u5185\u5bb9\u4e2d\u7684\u6240\u6709\u4ee3\u7801\uff0c\u90fd\u4ee5 ",(0,i.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start")," \u4e2d\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," \u9879\u76ee\u4e3a\u57fa\u7840\u6f14\u793a\u3002"))),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," \u4e0b\u65b0\u5efa\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSource")," \u7684\u76ee\u5f55, \u7528\u6765\u5b58\u653e\u4e0e\u5176\u76f8\u5173\u6269\u5c55\u7684\u4ee3\u7801\u3002\u7136\u540e\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"base.tsx")," \u6587\u4ef6\uff0c\u5206\u522b\u7528\u6765\u58f0\u660e",(0,i.kt)("strong",{parentName:"p"},"\u6269\u5c55\u5165\u53e3"),"\u548c\u5b9a\u4e49",(0,i.kt)("strong",{parentName:"p"},"\u516c\u5171\u4ee3\u7801"),"\uff0c\u76ee\u5f55\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"src/extensions/dataSource\n\u251c\u2500\u2500 base.tsx\n\u2514\u2500\u2500 index.ts\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," \u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/extensions/dataSource/index.ts"',title:'"src/extensions/dataSource/index.ts"'},"export class DataSourceExtension implements IExtension {\n    id: string = DATA_SOURCE_ID;\n    name: string = 'Data Source';\n\n    activate(extensionCtx: IExtensionService): void {\n        this.initUI();\n    }\n\n    initUI() {\n        molecule.sidebar.add(dataSourceSidebar);\n        molecule.activityBar.add(dataSourceActivityBar);\n    }\n\n    dispose(extensionCtx: IExtensionService): void {\n        molecule.sidebar.remove(dataSourceSidebar.id);\n        molecule.activityBar.remove(dataSourceActivityBar.id);\n    }\n}\n")),(0,i.kt)("p",null,"\u5982\u4e0a\u6240\u793a\uff0c\u6211\u4eec\u58f0\u660e\u4e86\u4e00\u4e2a\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"IExtension")," \u63a5\u53e3\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSourceExtension")," \u5bf9\u8c61\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"initUI")," \u65b9\u6cd5\u4e2d\uff0c\u6211\u4eec\u5206\u522b\u4f7f\u7528\n",(0,i.kt)("inlineCode",{parentName:"p"},"molecule.sidebar.add"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"molecule.activityBar.add")," \u65b9\u6cd5\u6dfb\u52a0\u4e86\u65b0\u7684 UI \u7ec4\u4ef6\u6269\u5c55\u9879\u3002\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"dispose")," \u65b9\u6cd5\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u79fb\u9664"),"\u4e86\u6fc0\u6d3b\u65f6\u6240\u6dfb\u52a0\u7684 UI \u9879\u3002"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5148\u770b\u770b\u6d3b\u52a8\u680f\u662f\u5982\u4f55\u6269\u5c55\u7684\u3002"),(0,i.kt)("h3",{id:"\u6d3b\u52a8\u680factivitybar"},(0,i.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/molecule.IActivityBarService"},"\u6d3b\u52a8\u680f\uff08ActivityBar\uff09")),(0,i.kt)("p",null,"\u6dfb\u52a0\u6d3b\u52a8\u680f\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.IActivityBarService#add"},(0,i.kt)("inlineCode",{parentName:"a"},"molecule.activityBar.add"))," \u65b9\u6cd5\u3002\u9996\u5148\uff0c\u6211\u4eec\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"base.tsx")," \u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/namespaces/molecule#iactivitybaritem"},(0,i.kt)("inlineCode",{parentName:"a"},"IActivityBarItem"))," \u7c7b\u578b\u7684\u5bf9\u8c61\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/dataSource/base.tsx"',title:'"src/extensions/dataSource/base.tsx"'},"export const DATA_SOURCE_ID = 'DataSource';\n\nexport const dataSourceActivityBar: IActivityBarItem = {\n    id: DATA_SOURCE_ID,\n    sortIndex: 1, // sorting the dataSource to the first position\n    name: 'Data Source',\n    title: 'Data Source Management',\n    icon: 'database',\n};\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dataSourceActivityBar")," \u5b57\u9762\u91cf\u5bf9\u8c61\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"\u5c5e\u6027\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"DataSource"),"\uff0c\u5176 ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," \u540d\u79f0\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"database"),", \u53e6\u5916\u6dfb\u52a0\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"sortIndex")," \u5c5e\u6027\uff0c\u8bbe\u7f6e\u8be5 UI \u663e\u793a\u5728 ",(0,i.kt)("strong",{parentName:"p"},"activityBar")," \u7684\u6700\u9876\u90e8\u3002"),(0,i.kt)("h3",{id:"\u8fb9\u680fsidebar"},(0,i.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/molecule.ISidebarService"},"\u8fb9\u680f\uff08SideBar\uff09")),(0,i.kt)("p",null,"\u540c ActivityBar \u4e00\u6837\uff0c\u6211\u4eec\u5148\u5728 base.tsx \u4e2d\u58f0\u660e\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.model.ISidebarPane"},(0,i.kt)("inlineCode",{parentName:"a"},"ISidebarPane"))," \u7c7b\u578b\u7684\u5bf9\u8c61 ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSourceSidebar"),"\uff0c\u7136\u540e\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.ISidebarService#add"},(0,i.kt)("inlineCode",{parentName:"a"},"molecule.sidebar.add"))," \u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/dataSource/base.tsx"',title:'"src/extensions/dataSource/base.tsx"'},"import DataSourceView from '../../views/dataSource/dataSourceSidebar';\n\nexport const DATA_SOURCE_ID = 'DataSource';\n\nexport const dataSourceSidebar: ISidebarPane = {\n    id: DATA_SOURCE_ID,\n    title: 'DataSourcePane',\n    render: () => {\n        return <DataSourceView />;\n    },\n};\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"IActivityBarItem")," \u7c7b\u578b\u7684\u5bf9\u8c61\u7684\u533a\u522b\u5219\u662f\uff0c\u6211\u4eec\u7684 Sidebar \u9762\u677f\u4e0a\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," \u51fd\u6570\uff0c\u6700\u540e\u8fd4\u56de\u7684\u662f\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactNode")," \u7c7b\u578b\u7684\u7ec4\u4ef6\u3002\u8fd9\u91cc ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSourceView")," \u7ec4\u4ef6\u5219\u662f\u6211\u4eec\u6839\u636e\u6211\u4eec\u7684\u4e1a\u52a1\u9700\u6c42\u5b9a\u4e49\u7684\u4e00\u4e2a",(0,i.kt)("strong",{parentName:"p"},"\u4e1a\u52a1\u7ec4\u4ef6"),"\u3002"),(0,i.kt)("p",null,"\u5b8c\u6574\u793a\u4f8b\u8bf7\u53c2\u8003\u8fd9\u91cc ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/dataSource"},"molecule-examples"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u793a\u4f8b\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSourceSidebar")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSourceActivityBar")," \u4e24\u4e2a\u5bf9\u8c61\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," \u90fd\u662f\u4f7f\u7528\u7684\u7edf\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"DATA_SOURCE_ID"),", \u4e3b\u8981\u662f\u4fdd\u8bc1\u5207\u6362",(0,i.kt)("strong",{parentName:"p"},"ActivityBar")," \u9879\u65f6\u80fd\u6b63\u786e\u7684\u5728 ",(0,i.kt)("strong",{parentName:"p"},"Sidebar")," \u4e2d\u663e\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSourceSidebar")," \u7684\u9762\u677f\u5185\u5bb9\u3002"))),(0,i.kt)("h3",{id:"\u7f16\u8f91\u5668editor"},(0,i.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/molecule.IEditorService"},"\u7f16\u8f91\u5668\uff08Editor\uff09")),(0,i.kt)("p",null,"\u5728\u4e0a\u56fe\u4e2d\uff0c\u6211\u4eec\u5728 Editor \u4e2d\u6253\u5f00\u4e86\u4e00\u4e2a\u540d\u53eb ",(0,i.kt)("strong",{parentName:"p"},"Create Data Source")," \u7684\u6807\u7b7e\uff0c\u800c\u6807\u7b7e\u5185\u5bb9\u5219\u662f\u4e00\u4e2a",(0,i.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u6570\u636e\u5e93"),"\u7684",(0,i.kt)("strong",{parentName:"p"},"\u8868\u5355\uff08Form)"),"\u3002\u540c\u6837\u7684\uff0c\u6211\u4eec\u9996\u5148\u58f0\u660e\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.model.IEditorTab"},"IEditorTab")," \u7684\u5bf9\u8c61\uff0c\u7136\u540e\u5229\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.IEditorService#open"},"molecule.editor.open")," \u65b9\u6cd5\u6253\u5f00\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/dataSource/base.tsx"',title:'"src/extensions/dataSource/base.tsx"'},"import CreateDataSourceView from '../../views/dataSource/createDataSource';\n\nexport const createDataSourceTab: IEditorTab = {\n    id: DATA_SOURCE_ID,\n    name: 'Create Data Source',\n    renderPane: () => {\n        return <CreateDataSourceView />;\n    },\n};\n\nexport function openCreateDataSourceView() {\n    molecule.editor.open(createDataSourceTab);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createDataSourceTab")," \u5bf9\u8c61\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"renderPane")," \u4e3a",(0,i.kt)("strong",{parentName:"p"},"\u6807\u7b7e\u5185\u5bb9"),"\u7684\u81ea\u5b9a\u4e49",(0,i.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u51fd\u6570"),"\uff0c\u8fd9\u91cc\u8fd4\u56de\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateDataSourceView")," \u7ec4\u4ef6\u3002\u9700\u8981\u6ce8\u610f\u5230\u662f\uff0cEditor \u6807\u7b7e\u9ed8\u8ba4\u6e32\u67d3\u7684\u662f ",(0,i.kt)("strong",{parentName:"p"},"monaco-editor")," \u89c6\u56fe\uff0c\u4f8b\u5982\u6211\u4eec\u60f3\u8981\u7f16\u8f91\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"SQL")," \u7c7b\u578b\u7684\u6587\u672c\uff0c\u5219\u53ef\u8fd9\u6837\u6765\u8c03\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.editor.open({\n    id: 'test',\n    name: 'test.sql',\n    data: {\n        value: 'select * from test',\n        language: 'sql',\n    },\n});\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u5e76\u6ca1\u6709\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"renderPane")," \u51fd\u6570\u3002\u5173\u4e8e\u6253\u5f00\u7f16\u7a0b\u8bed\u8a00\u7684\u4f8b\u5b50\uff0c\u53ef\u4ee5\u53c2\u8003\u4e00\u4e0b",(0,i.kt)("a",{parentName:"p",href:"/docs/the-first-extension"},"\u7b2c\u4e00\u4e2a\u6269\u5c55"),"\u8fd9\u4e2a\u793a\u4f8b\u3002"),(0,i.kt)("h3",{id:"\u9762\u677fpanel"},(0,i.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/molecule.IPanelService"},"\u9762\u677f\uff08Panel\uff09")),(0,i.kt)("p",null,"\u5173\u4e8e",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.IPanelService"},"\u9762\u677f\uff08Panel\uff09"),"\uff0c\u6211\u4eec\u4ee5\u5e38\u89c1\u7684 ",(0,i.kt)("strong",{parentName:"p"},"Terminal")," \u9762\u677f\u4e3a\u793a\u4f8b\u3002\u4e3a\u4e86\u533a\u5206\u4e0a\u9762\u7684",(0,i.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93"),"\u793a\u4f8b\uff0c\u8fd9\u91cc\u6211\u4eec\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," \u4e0b\u65b0\u5efa\u4e86\u4e00\u4e2a\u53eb ",(0,i.kt)("inlineCode",{parentName:"p"},"terminal")," \u7684\u6587\u4ef6\u5939\u3002"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5148\u58f0\u660e\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.model.IPanelItem"},"IPanelItem")," \u7c7b\u578b\u7684\u5bf9\u8c61 ",(0,i.kt)("inlineCode",{parentName:"p"},"terminalPanel"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/terminal/base.tsx"',title:'"src/extensions/terminal/base.tsx"'},"import { localize } from '@dtinsight/molecule/esm/i18n/localize';\nimport { IPanelItem } from '@dtinsight/molecule/esm/model';\nimport { Terminal } from '../../views/terminal/terminalPanelView';\n\nexport const TERMINAL_ID = 'terminalID';\n\nexport const terminalPanel: IPanelItem = {\n    id: TERMINAL_ID,\n    name: localize('demo.terminal', 'Terminal'),\n    title: 'Terminal',\n    sortIndex: 1,\n    renderPane: () => {\n        return <Terminal />;\n    },\n};\n")),(0,i.kt)("p",null,"\u7136\u540e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," \u4e2d\u58f0\u660e\u4e86\u4e00\u4e2a\u53eb ",(0,i.kt)("inlineCode",{parentName:"p"},"TerminalExtension")," \u7684\u6269\u5c55\u5bf9\u8c61\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/terminal/base.tsx"',title:'"src/extensions/terminal/base.tsx"'},"import molecule from '@dtinsight/molecule';\nimport { IExtension } from '@dtinsight/molecule/esm/model/extension';\nimport { IExtensionService } from '@dtinsight/molecule/esm/services';\nimport { terminalPanel } from './base';\n\nexport class TerminalExtension implements IExtension {\n    id: string = 'Terminal';\n    name: string = 'Terminal';\n\n    activate(extensionCtx: IExtensionService): void {\n        molecule.panel.add(terminalPanel);\n    }\n\n    dispose(extensionCtx: IExtensionService): void {\n        molecule.panel.remove(terminalPanel.id);\n    }\n}\n")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"activate")," \u65b9\u6cd5\u4e2d\uff0c\u5229\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.IPanelService#add"},(0,i.kt)("inlineCode",{parentName:"a"},"molecule.panel.add"))," \u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"terminalPanel")," \u6dfb\u52a0\u5230 Panel \u89c6\u56fe\u4e2d\u3002"),(0,i.kt)("p",null,"\u5b8c\u6574\u4ee3\u7801\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/terminal"},"Terminal"),"\u3002"),(0,i.kt)("h3",{id:"\u72b6\u6001\u680fstatusbar"},(0,i.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/molecule.IStatusBarService"},"\u72b6\u6001\u680f\uff08StatusBar\uff09")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.IStatusBarService"},"\u72b6\u6001\u680f\uff08StatusBar\uff09")," \u6574\u4e2a\u662f\u56f4\u7ed5 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.model.IStatusBarItem"},"IStatusBarItem")," \u7c7b\u578b\u7684\u5bf9\u8c61\u6765\u8fdb\u884c",(0,i.kt)("strong",{parentName:"p"},"\u589e\u52a0\u3001\u66f4\u65b0\u3001\u5220\u9664"),"\u7b49\u57fa\u672c\u64cd\u4f5c\u7684\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { IStatusBarItem, Float } from '@dtinsight/molecule/esm/model';\n\nconst languageBar: IStatusBarItem = {\n    id: 'languageBar',\n    name: 'Javascript',\n};\n// Add language bar to the StatusBar right\nmolecule.statusBar.add(languageBar, Float.right); // Float.left/Float.right\n\n// Get the language bar\nconst existLanguageBar = molecule.statusBar.getStatusBarItem(\n    languageBar.id,\n    Float.right\n);\n\n// Update the language bar\nmolecule.statusBar.update({ ...existLanguageBar, name: 'HTML' }, Float.right);\n\n// Remove the language bar which the id is `languageBar`\nmolecule.statusBar.remove(languageBar.id, Float.right);\n")),(0,i.kt)("p",null,"\u4ee3\u7801\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Float.left/Float.right")," \u7528\u6765\u8868\u793a\u663e\u793a\u5728\u72b6\u6001\u680f\u7684",(0,i.kt)("strong",{parentName:"p"},"\u5de6\u4fa7"),"\u6216\u8005",(0,i.kt)("strong",{parentName:"p"},"\u53f3\u4fa7"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u8981 ",(0,i.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49 StatusBar")," \u7684\u6e32\u67d3\u5185\u5bb9\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," \u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u4f8b\u5982\u81ea\u5b9a\u4e49",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/icons"},(0,i.kt)("strong",{parentName:"a"},"\u56fe\u6807")),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { IStatusBarItem, Float } from '@dtinsight/molecule/esm/model';\n\nconst languageBar: IStatusBarItem = {\n    id: 'languageBar',\n    name: 'Javascript',\n    render: () => <Icon onClick={onClick} type=\"bell\" />,\n};\n")),(0,i.kt)("h3",{id:"\u83dc\u5355\u680fmenubar"},(0,i.kt)("a",{parentName:"h3",href:"/docs/api/interfaces/molecule.IMenuBarService"},"\u83dc\u5355\u680f\uff08MenuBar)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.IMenuBarService"},"\u83dc\u5355\u680f\uff08MenuBar)")," \u9ed8\u8ba4\u5185\u7f6e\u4e86\u57fa\u672c\u7684",(0,i.kt)("strong",{parentName:"p"},"\u6587\u4ef6\uff08File\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u7f16\u8f91\uff08Edit\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u9009\u62e9\uff08Selection\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u89c6\u56fe\uff08View\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u8fd0\u884c\uff08Run\uff09"),"\u548c",(0,i.kt)("strong",{parentName:"p"},"\u5e2e\u52a9\uff08Help\uff09"),"\u7684\u83dc\u5355\u9879\uff0c\u901a\u5e38\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u4e9b\u57fa\u7840\u4e0a\u8fdb\u884c\u6269\u5c55\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"activate(extensionCtx: IExtensionService): void {\n    molecule.menuBar.append({\n        id: 'menu.createDataSource',\n        name: localize('menu.createDataSource', 'Create Data Source'),\n        icon: ''\n    }, 'File');\n}\ndispose(extensionCtx: IExtensionService): void {\n    // Remove the menuItem which name is `menu.createDataSource`\n    molecule.menuBar.remove('menu.createDataSource');\n}\n")),(0,i.kt)("p",null,"\u4e0a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5728",(0,i.kt)("strong",{parentName:"p"},"\u6587\u4ef6\uff08File\uff09"),"\u4e0b\u65b0\u589e\u4e86\u4e00\u4e2a\u83dc\u5355\u9879 ",(0,i.kt)("strong",{parentName:"p"},"Create Data Source"),"\uff0c\u79fb\u9664\u5219\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"molecule.menuBar.remove")," \u65b9\u6cd5\u3002\u5982\u679c\u60f3\u91cd\u7f6e\u6240\u6709 MenuBar \u7684\u6570\u636e\uff0c\n\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.IMenuBarService#setmenus"},(0,i.kt)("inlineCode",{parentName:"a"},"molecule.menuBar.setMenus")," "),"\u3002"),(0,i.kt)("p",null,"\u66f4\u591a\u5173\u4e8e MenuBar \u7684\u64cd\u4f5c\uff0c\u8bf7\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/molecule.IMenuBarService"},"MenuBar API")," \u6587\u6863\u3002"))}d.isMDXComponent=!0},1336:function(e,t,a){t.Z=a.p+"assets/images/extend-workbench-8bb66bc475d969d9a3f488dc48f0f90f.png"},7072:function(e,t,a){t.Z=a.p+"assets/images/workbench-ui-d8f3b64c19241b2c33fe205685ea9bcd.png"}}]);