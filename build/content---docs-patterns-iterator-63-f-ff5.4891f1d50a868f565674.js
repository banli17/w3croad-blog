(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return i}),t.d(n,"rightToc",function(){return l}),t.d(n,"default",function(){return u});t(0);var r=t(217);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={title:"javascript 迭代器模式",sidebar_label:"迭代器模式"},l=[{value:"es6 Iterator",id:"es6-iterator",children:[]}],c={rightToc:l},s="wrapper";function u(e){var n=e.components,t=o(e,["components"]);return Object(r.b)(s,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"迭代器模式是将数组、类数组等数据格式的遍历封装在一个方法中。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"class Iterator {\n    constructor(container) {\n        this.list = container.list\n        this.index = 0\n    }\n    next() {\n        if (this.hasNext()) {\n            return this.list[this.index++]\n        }\n        return null\n    }\n    hasNext() {\n        return this.index < this.list.length\n    }\n}\n\nclass Container {\n    constructor(list) {\n        this.list = list\n    }\n    getInterator() {\n        return new Iterator(this)\n    }\n}\nlet container = new Container([1, 4, 2, 19, 22])\nlet it = container.getInterator()\n\nwhile (it.hasNext()) {\n    let n = it.next()\n    console.log(n)\n}\n")),Object(r.b)("h2",null,Object(r.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"es6-iterator"})),Object(r.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#es6-iterator"}),"#"),"es6 Iterator"),Object(r.b)("p",null,"es6中，有序集合的数据类型已经有很多了，如Array,Map,Set,String,TypedArray,arguments,NodeList等。"),Object(r.b)("p",null,"它们都内置了","[Symbol.iterator]","方法，这个方法会返回迭代器，执行",Object(r.b)("inlineCode",{parentName:"p"},"for...of"),"方法时会自动执行这个迭代器。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"function each(data, callback) {\n    let it = data[Symbol.iterator]()\n\n    let isDone = false\n    while (!isDone) {\n        let { value, done } = it.next()\n        !done && callback.call(data, value)\n        isDone = done\n    }\n}\n\neach([1, 3, 4, 9], function (item) {\n    console.log(item)\n})\n")),Object(r.b)("p",null,"因为语法糖",Object(r.b)("inlineCode",{parentName:"p"},"for...of"),"就会执行对象的迭代器方法，所以可以将上面的方法简化为："),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"function each(data, callback) {\n    for(let item of data){\n        callback.call(data, item)\n    }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"迭代器对象和目标对象分离。"),Object(r.b)("li",{parentName:"ul"},"迭代器将使用者与目标对象分离，不关心对象类型。"),Object(r.b)("li",{parentName:"ul"},"符合开放封闭原则。")))}u.isMDXComponent=!0},217:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"b",function(){return p});var r=t(0),a=t.n(r),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},u=function(e){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),c=i(n);return a.a.createElement(c[o+"."+t]||c[t]||s[t]||r,n?Object.assign({},l,{components:n}):l)};function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);