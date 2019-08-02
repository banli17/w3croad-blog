(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{191:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return i}),t.d(n,"rightToc",function(){return b}),t.d(n,"default",function(){return p});t(0);var a=t(217);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={title:"react-native项目技术选型",date:new Date("2018-08-11T05:57:04.000Z"),toc:!0},b=[{value:"技术选型",id:"技术选型",children:[]}],c={rightToc:b},o="wrapper";function p(e){var n=e.components,t=l(e,["components"]);return Object(a.b)(o,r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",null,Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"技术选型"})),Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#技术选型"}),"#"),"技术选型"),Object(a.b)("p",null,"这个项目刚开始只有我一个人，从6月中旬开始开发，七月的时候 mac 被偷走了，于是用 windows 装了个黑苹果，后来因为固态盘容量不够，为了省的麻烦，所以还是买了个 mac。momo是8月20日加入开发，我们的app是8月30上线第一版。"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"初期选型")),Object(a.b)("p",null,"第一版app的需求比较简单，都是些业务相关的页面，一些比较复杂的是："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"表单比较多，我封装了个Form组件，通过动态传入form表单数据，根据每个字段的type来动态渲染Input等组件。"),Object(a.b)("li",{parentName:"ul"},"相机、拍照身份证识别、银行卡识别。")),Object(a.b)("p",null,"因为我一个人惯了，方案是怎么简单怎么来。所以项目初的架构是："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"react-navigation")," 导航库(因为之前开发过一个app,比较熟悉它)。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"react-redux")," 用于数据管理，初期我项目里虽然搭建好了它，但是只有很少几个部分用了。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"antd-mobile-rn")," 蚂蚁的UI库，不过说实话问题太多了，而且这个库也是刚从web版本单独抽离出来，所以问题多难免的。不过个人感觉阿里貌似没有一个好用的库，不知道是不是我主观意见。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"封装fetch api")," 处理网络请求。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"bl-util")," 自己写的个工具类库。")),Object(a.b)("p",null,"开发过程基本没有遇到什么阻碍。需要实现身份证、银行卡识别等功能。于是我用百度ocr sdk加",Object(a.b)("inlineCode",{parentName:"p"},"react-native-camera"),"封装了一个百度ocr识别的库，可是很难用。不过快上线时总算将就把功能实现了，但是体验很差。期间我找到了一个原生识别身份证等的库，但是苦于不会封装。"),Object(a.b)("p",null,"后来momo加入了我们，因为他会原生的ios/android。所以让他去试试封装原生的百度识别库，过了几天，成功了，而且效果很不错。具体请看","[一个库解决普通拍照、身份证/银行卡等拍照识别、二维码生成与识别]","。"),Object(a.b)("p",null,"有了它，直接放弃类似",Object(a.b)("inlineCode",{parentName:"p"},"react-native-camera"),"、",Object(a.b)("inlineCode",{parentName:"p"},"react-native-qrcode"),"等库。"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"后来选型")),Object(a.b)("p",null,"momo加入后推荐了原生的导航库",Object(a.b)("inlineCode",{parentName:"p"},"react-native-navigation"),"、UI库",Object(a.b)("inlineCode",{parentName:"p"},"native-base"),"，他之前开发app都是用这两个库，比较熟悉，告诉我说原生导航库性能很高，而且自带Modal弹出框等效果。",Object(a.b)("inlineCode",{parentName:"p"},"native-base"),"也很容易定制。"),Object(a.b)("p",null,"于是我考虑对比了这两种方案和一些项目中的问题:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"方案")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"react-navigation"),":js导航库，使用还可以"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"react-native-navigation"),":原生导航库，性能高，自带Modal"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"antd-mobile-rn"),": 用的很不爽"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"native-base"),": 风格我不太喜欢")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"现在项目的问题")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"android statubar无法覆盖到顶部"),Object(a.b)("li",{parentName:"ul"},"modal自定义比较困难，而且官网的Modal我不太喜欢"),Object(a.b)("li",{parentName:"ul"},"app速度慢（有个客户当面说，我们app速度太慢，点了半天才动，不过换导航库后一段时间，我们才发现不是导航库的问题，而是console太多导致的。)")),Object(a.b)("p",null,"于是我听从momo的建议，让他重构一下，他将整体架构换成了下面的方案。"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"react-native-navigation")," 导航库"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"native-base")," UI库"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"react-redux")," "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"react-saga"),"  用于处理异步")),Object(a.b)("p",null,"目前发现",Object(a.b)("inlineCode",{parentName:"p"},"native-base"),"比较难用，所以我们正在慢慢封装一套类似于小程序接口的库。"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"UI层由我来做"),Object(a.b)("li",{parentName:"ul"},"API功能momo来做")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"react-native-navigation"),"也比较坑爹，ios还比较好，android上效果真是很奇葩，不知道为什么会是那般体验。"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"我走之后，momo又把导航库换回了react-navigation。")))}p.isMDXComponent=!0},217:function(e,n,t){"use strict";t.d(n,"a",function(){return b}),t.d(n,"b",function(){return u});var a=t(0),r=t.n(a),l=r.a.createContext({}),i=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},b=function(e){var n=i(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},c="mdxType",o={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},p=function(e){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,b=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),c=i(n);return r.a.createElement(c[l+"."+t]||c[t]||o[t]||a,n?Object.assign({},b,{components:n}):b)};function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b[c]="string"==typeof e?e:a,i[1]=b;for(var u=2;u<l;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);