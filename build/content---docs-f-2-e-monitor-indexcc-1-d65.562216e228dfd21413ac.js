(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{153:function(n,e,r){"use strict";r.r(e),r.d(e,"frontMatter",function(){return c}),r.d(e,"rightToc",function(){return i}),r.d(e,"default",function(){return l});r(0);var t=r(217);function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(this,arguments)}function a(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var c={title:"前端监控"},i=[],p={rightToc:i},u="wrapper";function l(n){var e=n.components,r=a(n,["components"]);return Object(t.b)(u,o({},p,r,{components:e,mdxType:"MDXLayout"}))}l.isMDXComponent=!0},217:function(n,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return f});var t=r(0),o=r.n(t),a=o.a.createContext({}),c=function(n){var e=o.a.useContext(a),r=e;return n&&(r="function"==typeof n?n(e):Object.assign({},e,n)),r},i=function(n){var e=c(n.components);return o.a.createElement(a.Provider,{value:e},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){return o.a.createElement(o.a.Fragment,{},n.children)}},l=function(n){var e=n.components,r=n.mdxType,t=n.originalType,a=n.parentName,i=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&-1===e.indexOf(t)&&(r[t]=n[t]);return r}(n,["components","mdxType","originalType","parentName"]),p=c(e);return o.a.createElement(p[a+"."+r]||p[r]||u[r]||t,e?Object.assign({},i,{components:e}):i)};function f(n,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var a=r.length,c=new Array(a);c[0]=l;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i[p]="string"==typeof n?n:t,c[1]=i;for(var f=2;f<a;f++)c[f]=r[f];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);