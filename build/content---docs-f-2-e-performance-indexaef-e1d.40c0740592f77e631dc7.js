(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return l}),t.d(n,"rightToc",function(){return i}),t.d(n,"default",function(){return u});t(0);var r=t(245);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={title:"网站性能优化"},i=[{value:"性能衡量指标",id:"性能衡量指标",children:[]},{value:"优化手段",id:"优化手段",children:[]}],o={rightToc:i},p="wrapper";function u(e){var n=e.components,t=c(e,["components"]);return Object(r.b)(p,a({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"网站的性能会直接影响到用户体验，而用户体验会影响网站的收益。因此网站的性能优化十分重要。"),Object(r.b)("h2",{id:"性能衡量指标"},"性能衡量指标"),Object(r.b)("p",null,"打开一个页面时"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"开始请求  performance.timing.navigationStart"),Object(r.b)("li",{parentName:"ul"},"获取首字节  performance.timing.responseStart"),Object(r.b)("li",{parentName:"ul"},"页面开始展示 用户屏幕开始展示内容的时刻，白屏时间"),Object(r.b)("li",{parentName:"ul"},"首屏内容加载完成  首屏时间"),Object(r.b)("li",{parentName:"ul"},"加载完成")),Object(r.b)("p",null,"中间三个主要的性能衡量指标"),Object(r.b)("p",null,"白屏时间: 开始渲染 body 的时间，可以在 head 的头部和尾部插入 startTime endTime，"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),"// 支持performance\nvar time = endTime - performance.timing.navigationStart\n// 不支持performance\nvar time = endTime - startTime\n")),Object(r.b)("p",null,"首屏时间：above the fold 首屏线上的区域"),Object(r.b)("p",null,"在首屏线 代码处插入时间 Date.now() 兼容 performance 和 不兼容(用 head尾部作为startTime)"),Object(r.b)("p",null,"分析页面 network"),Object(r.b)("h2",{id:"优化手段"},"优化手段"),Object(r.b)("p",null,"浏览器请求服务器资源，就是送货一样。可以减少运输次数(一次多运输点)，减少货物体积，增加货车速度。"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"减少请求文件数"),Object(r.b)("li",{parentName:"ul"},"减少资源体积： 精简体积、压缩文件、gzip (accept-encoding:gzip  content-encoding:gzip)"),Object(r.b)("li",{parentName:"ul"},"提高网络传输:浏览器缓存(减少数据传输，减少服务器压力) ")),Object(r.b)("p",null,"cdn(内容分发网络) :多域名并发 、网络线路"),Object(r.b)("p",null,"DNS解析和寻址\n服务器建立连接\n发送数据\n等待服务器响应\n接收数据"),Object(r.b)("p",null,"请求变多 -> 页面加载变慢，服务器压力变大"),Object(r.b)("p",null,"CDN(内容分发网络) 是将源站内容分发至最接近用户的节点，使用户可就近取得所需内容，提高用户访问的响应速度和成功率。解决因分布、带宽、服务器性能带来的访问延迟问题，适用于站点加速、点播、直播等场景。\n合并请求 的主要目的是减少浏览器对服务器发起的请求数，从而减少在发起请求过程中花费的时间。\nGzip 是一种压缩技术，可以将资源在服务端进行压缩，然后发送给浏览器后再进行解压，这种方式会降低传输大小，提高网页加载性能。\n通过工具移除代码中不必要的字符 如所有的注释和空白字符，可以减少代码资源文件体积，提高资源加载速度。"))}u.isMDXComponent=!0},245:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return b});var r=t(0),a=t.n(r),c=a.a.createContext({}),l=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=l(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},o="mdxType",p={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},u=function(e){var n=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),o=l(n);return a.a.createElement(o[c+"."+t]||o[t]||p[t]||r,n?Object.assign({},i,{components:n}):i)};function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[o]="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);