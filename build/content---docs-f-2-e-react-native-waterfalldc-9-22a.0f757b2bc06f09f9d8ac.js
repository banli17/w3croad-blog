(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{195:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return p}),t.d(n,"rightToc",function(){return c}),t.d(n,"default",function(){return u});t(0);var r=t(217);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p={title:"react-native 瀑布流方案",date:new Date("2018-07-09T22:29:36.000Z"),toc:!0},c=[],i={rightToc:c},l="wrapper";function u(e){var n=e.components,t=o(e,["components"]);return Object(r.b)(l,a({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"假定有2个互不想关的过程："),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"加载",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"有一个单独的方法 Append([]) 导入数据"),Object(r.b)("li",{parentName:"ol"},"将滚动替换过程锁定(因为部分卡片高度未知)"),Object(r.b)("li",{parentName:"ol"},"将新卡片 append 到底部"),Object(r.b)("li",{parentName:"ol"},"新卡片渲染完成后解锁滚动替换方法，并执行一次"))),Object(r.b)("li",{parentName:"ol"},"滚动替换")),Object(r.b)("p",null,"已知所有卡片的高度（假设卡片高度不一致），求解哪些卡片应该隐藏，哪些卡片应该显示，根据所有卡片的高度数组 itemHeights[]，屏幕高 H，默认加载卡片数 S，滚动距离 y 计算 （p,q,H1,h3）\n- p: 开始的卡片，第一个 top 大于 （y - H）的卡片\n- q: 结束的卡片 （q = p + s）\n- H1: 顶部替换盒子的高度 top(p)\n- h3: 底部替换盒子的高度 sum(q+1, N)"))}u.isMDXComponent=!0},217:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return f});var r=t(0),a=t.n(r),o=a.a.createContext({}),p=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=p(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},i="mdxType",l={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},u=function(e){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),i=p(n);return a.a.createElement(i[o+"."+t]||i[t]||l[t]||r,n?Object.assign({},c,{components:n}):c)};function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[i]="string"==typeof e?e:r,p[1]=c;for(var f=2;f<o;f++)p[f]=t[f];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);