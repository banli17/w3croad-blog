(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return i}),t.d(n,"rightToc",function(){return c}),t.d(n,"default",function(){return l});t(0);var r=t(217);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={title:"javascript 访问者模式",sidebar_label:"访问者模式"},c=[],p={rightToc:c},u="wrapper";function l(e){var n=e.components,t=a(e,["components"]);return Object(r.b)(u,o({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"访问者模式(visitor pattern)是一种将算法与对象结构分离的软件设计模式。"))}l.isMDXComponent=!0},217:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return f});var r=t(0),o=t.n(r),a=o.a.createContext({}),i=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return o.a.createElement(a.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){return o.a.createElement(o.a.Fragment,{},e.children)}},l=function(e){var n=e.components,t=e.mdxType,r=e.originalType,a=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(n);return o.a.createElement(p[a+"."+t]||p[t]||u[t]||r,n?Object.assign({},c,{components:n}):c)};function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=l;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var f=2;f<a;f++)i[f]=t[f];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);