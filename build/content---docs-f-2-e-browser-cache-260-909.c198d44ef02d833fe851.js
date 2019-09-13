(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return l}),n.d(t,"rightToc",function(){return i}),n.d(t,"default",function(){return o});n(0);var a=n(301);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={title:"浏览器缓存机制"},i=[{value:"缓存位置",id:"缓存位置",children:[]},{value:"Memory Cache",id:"memory-cache",children:[]},{value:"Disk Cache",id:"disk-cache",children:[]},{value:"Push Cache",id:"push-cache",children:[]},{value:"网络请求",id:"网络请求",children:[]},{value:"缓存策略",id:"缓存策略",children:[]},{value:"实际场景应用缓存策略",id:"实际场景应用缓存策略",children:[{value:"频繁变动的资源",id:"频繁变动的资源",children:[]}]}],b={rightToc:i},p="wrapper";function o(e){var t=e.components,n=c(e,["components"]);return Object(a.b)(p,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"缓存可以说是性能优化中简单高效的一种优化方式了，它可以显著减少网络传输所带来的损耗。"),Object(a.b)("h2",{id:"缓存位置"},"缓存位置"),Object(a.b)("p",null,"从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络。"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Service Worker"),Object(a.b)("li",{parentName:"ol"},"Memory Cache (内存缓存)"),Object(a.b)("li",{parentName:"ol"},"Disk Cache (硬盘缓存)"),Object(a.b)("li",{parentName:"ol"},"Push Cache"),Object(a.b)("li",{parentName:"ol"},"网络请求")),Object(a.b)("h2",{id:"memory-cache"},"Memory Cache"),Object(a.b)("p",null,"Memory Cache 就是内存缓存，读取内存中数据要比磁盘中快。使用内存缓存虽然高效，但是会随着进程销毁而释放。一旦关闭 Tab 页面，内存中的缓存也会被释放掉。"),Object(a.b)("p",null,"当访问过页面，再次刷新时，发现有些数据会来自于内存缓存。"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"/img/browser/cache/1.png",alt:null}))),Object(a.b)("p",null,"内存比硬盘贵，而且小很多。操作系统会很精细的使用内存，所以我们能使用的内存并不多。"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"对于大文件来说，大概率不会使用内存缓存，而小文件，会优先使用内存缓存。"),Object(a.b)("li",{parentName:"ul"},"当前系统内存使用率高的话，文件优先存储在硬盘中。")),Object(a.b)("h2",{id:"disk-cache"},"Disk Cache"),Object(a.b)("p",null,"Disk Cache 也就是存储在硬盘中的缓存，读取速度比内存要慢，但是容量大，存储时间长(除非人为删除)。"),Object(a.b)("p",null,"在所有浏览器缓存中，Disk Cache 使用面是最大的，304 缓存的内容基本就是存储在这里。并且在跨站情况下，相同地址的资源一旦被硬盘缓存下来，就不会再去发请求数据。"),Object(a.b)("h2",{id:"push-cache"},"Push Cache"),Object(a.b)("p",null,"Push Cache 是 HTTP 2.0 中的内容，当上面 3 种缓存都没有命中时，它才会被使用。并且缓存时间短，只在会话时存在，一旦会话结束就会被释放。"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://jakearchibald.com/2017/h2-push-tougher-than-i-thought/"}),"HTTP/2 push is tougher than I thought"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"所有的资源都能被推送，但是 Edge 和 Safari 兼容性不好。")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"可以推送 no-cache 和 no-store 的资源。")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"一旦连接被关闭，Push Cache 就会被释放。")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"多个页面可以使用相同的 HTTP 2.0 连接，也就是说能使用同样的缓存。")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Push Cache 中的缓存只能被使用一次。")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"浏览器可以拒绝接收已经存在的资源推送。")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"你可以给其它域名推送资源。"))),Object(a.b)("h2",{id:"网络请求"},"网络请求"),Object(a.b)("p",null,"如果所有缓存都没有命中的话，那么只能发起请求来获取资源了。"),Object(a.b)("p",null,"那么为了性能上的考虑，大部分的接口都应该选择好缓存策略，接下来我们就来学习缓存策略这部分的内容。"),Object(a.b)("h2",{id:"缓存策略"},"缓存策略"),Object(a.b)("h2",{id:"实际场景应用缓存策略"},"实际场景应用缓存策略"),Object(a.b)("h3",{id:"频繁变动的资源"},"频繁变动的资源"),Object(a.b)("p",null,"对于频繁变动的资源，首先需要使用",Object(a.b)("inlineCode",{parentName:"p"},"Cache-Control: no-cache"),"，使浏览器每次都请求服务器，然后配置",Object(a.b)("inlineCode",{parentName:"p"},"ETag"),"或者",Object(a.b)("inlineCode",{parentName:"p"},"Last-Modified"),"来验证资源是否有效。这种方式可以减少响应数据大小。"))}o.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=function(e){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=l(t),o=n,u=b[c+"."+o]||b[o]||p[o]||a;return t?r.a.createElement(u,Object.assign({},i,{components:t})):r.a.createElement(u,i)};function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=o;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[b]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<c;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);