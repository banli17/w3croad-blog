(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{245:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return f});var r=t(0),o=t.n(r),a=o.a.createContext({}),c=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return o.a.createElement(a.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){return o.a.createElement(o.a.Fragment,{},e.children)}},l=function(e){var n=e.components,t=e.mdxType,r=e.originalType,a=e.parentName,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=c(n);return o.a.createElement(p[a+"."+t]||p[t]||u[t]||r,n?Object.assign({},i,{components:n}):i)};function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=l;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var f=2;f<a;f++)c[f]=t[f];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return c}),t.d(n,"rightToc",function(){return i}),t.d(n,"default",function(){return l});t(0);var r=t(245);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c={title:"javascript 组合模式",sidebar_label:"组合模式"},i=[],p={rightToc:i},u="wrapper";function l(e){var n=e.components,t=a(e,["components"]);return Object(r.b)(u,o({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"组合模式（Composite Pattern），又叫部分整体模式，是用于把一组相似的对象当作一个单一的对象。组合模式依据树形结构来组合对象，用来表示部分以及整体层次。"),Object(r.b)("p",null,"比如vnode节点的遍历，因为对象和其子对象数据结构是一样的，可以用一样的操作。它将对整体和单个节点的操作抽取出来。"))}l.isMDXComponent=!0}}]);