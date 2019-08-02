(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return o}),t.d(n,"rightToc",function(){return i}),t.d(n,"default",function(){return b});t(0);var r=t(217);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o={title:"react-native弹出提示框",date:new Date("2019-03-27T09:10:42.000Z"),toc:!0},i=[{value:"弹出提示框",id:"弹出提示框",children:[]}],c={rightToc:i},p="wrapper";function b(e){var n=e.components,t=l(e,["components"]);return Object(r.b)(p,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",null,Object(r.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"弹出提示框"})),Object(r.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#弹出提示框"}),"#"),"弹出提示框"),Object(r.b)("p",null,"之前我用rn不爽的一个很重要的原因就是不能使用API调用自定义的 alert、confirm、loading。比如下图:"),Object(r.b)("p",null,Object(r.b)("img",a({parentName:"p"},{src:"./imgs/alert.png",alt:null}))),Object(r.b)("p",null,"网页上可能只需要",Object(r.b)("inlineCode",{parentName:"p"},"util.alert"),"即可。但是rn上一般是将组件写在页面里，然后通过ref的方式去调用他。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'//web\nuitl.alert()\n\n// rn\n<Alert ref="alert">\n\n// this.refs.alert.show()\n')),Object(r.b)("p",null,"我之前用蚂蚁的",Object(r.b)("inlineCode",{parentName:"p"},"antd-mobile-rn"),"库的时候，发现它可以直接使用API ",Object(r.b)("inlineCode",{parentName:"p"},"Toast.loading()"),"来弹出一个加载框，可是一直没有研究过，因为要做的事情太多了，每天就光写业务代码了。"),Object(r.b)("p",null,"最近，momo发现可以通过",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/magicismight/react-native-root-siblings"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-root-siblings")),"来实现上面的需求，蚂蚁也是用这个库实现的。"),Object(r.b)("p",null,"用这个库可以往页面根节点插入元素然后操作它，这个功能很强大。但是在用这个库的时候，我发现用",Object(r.b)("inlineCode",{parentName:"p"},"new RootSibling(<Modal/>)"),"插入模态框会有问题，页面会出现很多个模态，为了解决这个问题，我花了半天时间去研究它的源码和实现原理。"),Object(r.b)("p",null,"它的原理实际很简单，在每个注册页面插入一个",Object(r.b)("inlineCode",{parentName:"p"},"<RootSibling>"),"，然后每次",Object(r.b)("inlineCode",{parentName:"p"},"new RootSibling(<xx>)"),"创建元素的时候，都会往每个页面的",Object(r.b)("inlineCode",{parentName:"p"},"<RootSibling>"),"里插入你自定义的组件",Object(r.b)("inlineCode",{parentName:"p"},"<xx>"),"。"),Object(r.b)("p",null,Object(r.b)("img",a({parentName:"p"},{src:"./imgs/root-sibling.png",alt:null}))),Object(r.b)("p",null,"所以其实它是每个页面都有了这个组件，切换页面时都可以看到一样的它。而",Object(r.b)("inlineCode",{parentName:"p"},"<Modal>"),"不一样，它本来就遮盖了页面，每个页面都会创建一个",Object(r.b)("inlineCode",{parentName:"p"},"<Modal>"),"，所以会出现多个。这就是我上面bug的来源了。"),Object(r.b)("p",null,"于是我简单的修改了一下这个库来实现我的需求。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"class RootSiblings extends Component {\n    render(){\n        ...\n        this._updatedSiblings = {};\n        return [elements[elements.length - 1]];  // 这里\n    }\n}\n\nexport default class RootSiblingManager {\n    constructor(element, callback, store) {\n        const id = uuid++;\n\n        function update(element, callback, store) {\n            triggers[Object.keys(triggers)[0]](id, element, callback, store)  // 这里\n            // Object.keys(triggers).forEach(key => {\n            //     console.log(key)\n            //     triggers[key](id, element, callback, store)\n            // })\n        }\n    }\n}\n")),Object(r.b)("p",null,"值得注意的是",Object(r.b)("inlineCode",{parentName:"p"},"update"),"里不能用最后一个方法，而是需要用第一个，否则有些情况下创建元素会不生效。比如在A页面点按钮时创建组件，但是有个选择框需要跳到B页面选择完再返回A提交。这时有问题。"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2018-12-24更新")),Object(r.b)("p",null,"之前以为上面的方法能用，但是今天调试ios时发现上面的方式不行。因为 android 的 Modal 是覆盖顶层，类似于全局的。但是 ios 的 Modal 不一样，它时属于页面的。所以点击其它页面时，Modal 不会覆盖当前页面，而是出现在第一个页面。"),Object(r.b)("p",null,"我其实没有详细的学习 react，只是看了一下官方的一点教程，没有看完。momo 说可以通过",Object(r.b)("inlineCode",{parentName:"p"},"React.createContext()"),"实现，但是之前试了下不行，报错。于是我决定来研究研究，终于搞定了。判断当前页面让它只在当前页面触发。"),Object(r.b)("p",null,"一些问题：ios回退后，需要在Modal隐藏的时候销毁。"))}b.isMDXComponent=!0},217:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return s});var r=t(0),a=t.n(r),l=a.a.createContext({}),o=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=o(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},b=function(e){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),c=o(n);return a.a.createElement(c[l+"."+t]||c[t]||p[t]||r,n?Object.assign({},i,{components:n}):i)};function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);