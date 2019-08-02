(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{217:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return u});var r=t(0),a=t.n(r),l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},o=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p="mdxType",i={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},s=function(e){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,o=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=c(n);return a.a.createElement(p[l+"."+t]||p[t]||i[t]||r,n?Object.assign({},o,{components:n}):o)};function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=s;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:r,c[1]=o;for(var u=2;u<l;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return c}),t.d(n,"rightToc",function(){return o}),t.d(n,"default",function(){return s});t(0);var r=t(217);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={title:"javascript 外观模式",sidebar_label:"外观模式"},o=[],p={rightToc:o},i="wrapper";function s(e){var n=e.components,t=l(e,["components"]);return Object(r.b)(i,a({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"外观模式(Facade)也叫做门面模式，它是为子系统（一组类的集合，这些类可以相互协助组成系统中一个相对独立的部分）中的一组接口提供一个统一的高层接口，使得子系统更容易使用。"),Object(r.b)("p",null,"比如启动电脑的时候。我们不关心CPU，内存，硬盘的启动和加载，只需要按一个启动键就可以了。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"class CPU{\n    freeze(){}\n    jump(){}\n    execute(){}\n}\nclass Memory{\n    load(){}\n}\nclass HardDrive{\n    read(){}\n}\n\n// Facade 门面\nclass Computer{\n    start(){\n        cpu.freeze()\n        memory.load()\n        cpu.jump()\n        cpu.execute()\n    }\n}\n\nlet c = new Computer()\nc.start()\n")),Object(r.b)("p",null,"可以看到外观模式屏蔽了客户操作子系统的复杂性，提供了一个简单的高层接口。请求外观不是强制的，也可以绕过外观直接操作子系统。"),Object(r.b)("p",null,"场景"),Object(r.b)("p",null,"1、比如将阻止事件冒泡和默认事件封装在一起。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"var stopEvent = function( e ){   //同时阻止事件默认行为和冒泡\n    e.stopPropagation();\n    e.preventDefault();\n}\n")),Object(r.b)("p",null,"2、比如传几种参数。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"function bindEvent(elem, type, selector, fn){\n    if(fn == null){\n        fn = selector\n        selector = null\n    }\n}\n\n// 调用\nbindEvent(elem, 'click', '#div1', fn)\nbindEvent(elem, 'click', fn)\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"设置css")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"function setStyles( id, styles ){\n    var element = document.getElementById( id );\n    for( var key in styles ){\n        if( styles.hasOwnProperty( key ) ){\n            element.style[ key ] = styles[ key ];\n        }\n    }\n}\n\nsetStyles( 'content', {\n    color : 'red'，\n    height : '200px'\n} ); \n")),Object(r.b)("p",null,"如果要批量操作元素，还可以再次包装。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"function setCSS( ids, styles ){\n    for( var i = 0,len = ids.length; i<len; i++ ){\n         setStyles( ids[i], styles );\n    }\n} \n")),Object(r.b)("p",null,"总结"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"不符合单一职责原则和开发封闭原则，胖接口。因此谨慎使用，不可滥用。"),Object(r.b)("li",{parentName:"ul"},"符合最少知识原则。"),Object(r.b)("li",{parentName:"ul"},"子系统的内部变化了，只要外观不变就不会对客户造成影响。"),Object(r.b)("li",{parentName:"ul"},"外观模式是封装的子系统，而普通的封装是都可以封装。")))}s.isMDXComponent=!0}}]);