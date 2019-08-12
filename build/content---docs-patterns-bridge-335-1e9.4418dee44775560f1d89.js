(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{245:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return s});var r=t(0),a=t.n(r),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},u=function(e){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),l=c(n);return a.a.createElement(l[o+"."+t]||l[t]||p[t]||r,n?Object.assign({},i,{components:n}):i)};function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[l]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return c}),t.d(n,"rightToc",function(){return i}),t.d(n,"default",function(){return u});t(0);var r=t(245);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={title:"javascript 桥接模式",sidebar_label:"桥接模式"},i=[],l={rightToc:i},p="wrapper";function u(e){var n=e.components,t=o(e,["components"]);return Object(r.b)(p,a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"桥接模式(Bridge) 是将抽象部分与它的实现部分解耦，使它们独立变化。"),Object(r.b)("p",null,"它的一个典型应用场景是事件监听。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"li.addEventListener('click', getUserInfoBridge, false)\n\nfunction getUserInfoBridge(event){\n    getUserInfo(event.target.dataset.id, (data)=>{\n        console.log('得到用户信息', data)\n    })\n}\n\nfunction getUserInfo(id, callback){\n    ajax.get(`/user/${id}`, (data)=>{\n        callback && callback(data)\n    })\n}\n")),Object(r.b)("p",null,"上面",Object(r.b)("inlineCode",{parentName:"p"},"getUserInfoBridge()"),"方法作为桥将监听和处理函数解耦，让",Object(r.b)("inlineCode",{parentName:"p"},"getUserInfo()"),"方法更加通用。"),Object(r.b)("p",null,"桥接模式和适配器模式的区别"),Object(r.b)("p",null,"适配器模式是 A 不能使用 B，所以用适配器模式将 B 包装后给 A 使用。桥接模式是 A、B 能正常使用，但是为了让 A、B 解耦，所以用 C 将 A、B 分开。让 A、B 更加通用。"))}u.isMDXComponent=!0}}]);