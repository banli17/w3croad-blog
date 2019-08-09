(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{229:function(e,a,n){"use strict";n.d(a,"a",function(){return i}),n.d(a,"b",function(){return o});var t=n(0),r=n.n(t),c=r.a.createContext({}),l=function(e){var a=r.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},i=function(e){var a=l(e.components);return r.a.createElement(c.Provider,{value:a},e.children)};var b="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=function(e){var a=e.components,n=e.mdxType,t=e.originalType,c=e.parentName,i=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),b=l(a),s=n,o=b[c+"."+s]||b[s]||p[s]||t;return a?r.a.createElement(o,Object.assign({},i,{components:a})):r.a.createElement(o,i)};function o(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=n.length,l=new Array(c);l[0]=s;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[b]="string"==typeof e?e:t,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",function(){return l}),n.d(a,"rightToc",function(){return i}),n.d(a,"default",function(){return s});n(0);var t=n(229);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={title:"mac使用技巧",date:new Date("2018-07-28T14:15:19.000Z"),tags:null},i=[{value:"截图",id:"截图",children:[]},{value:"显示隐藏文件",id:"显示隐藏文件",children:[]},{value:"打开mac自身支持ntfs的读写",id:"打开mac自身支持ntfs的读写",children:[]},{value:"安装未知来源软件",id:"安装未知来源软件",children:[]},{value:"一些链接",id:"一些链接",children:[]},{value:"突然没声音了",id:"突然没声音了",children:[]},{value:"常用软件",id:"常用软件",children:[]}],b={rightToc:i},p="wrapper";function s(e){var a=e.components,n=c(e,["components"]);return Object(t.b)(p,r({},b,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"截图"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#截图"}),"#"),"截图"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"截屏幕：",Object(t.b)("inlineCode",{parentName:"li"},"command - shift - 3")),Object(t.b)("li",{parentName:"ul"},"部分截图：",Object(t.b)("inlineCode",{parentName:"li"},"command - shift - 4"))),Object(t.b)("p",null,"图片保存在桌面上。"),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"显示隐藏文件"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#显示隐藏文件"}),"#"),"显示隐藏文件"),Object(t.b)("p",null,"显示隐藏文件，在当前目录按 ",Object(t.b)("inlineCode",{parentName:"p"},"command + shift + ."),"。"),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"打开mac自身支持ntfs的读写"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#打开mac自身支持ntfs的读写"}),"#"),"打开mac自身支持ntfs的读写"),Object(t.b)("p",null,"1、",Object(t.b)("inlineCode",{parentName:"p"},"diskutil list"),"可以查看挂载的盘的名字"),Object(t.b)("p",null,"2、",Object(t.b)("inlineCode",{parentName:"p"},"sudo vim /etc/fstab"),"添加下面一行。注意",Object(t.b)("inlineCode",{parentName:"p"},"\\040"),"是空格"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"// 比如盘名banli disk\nLABEL=banli\\040disk none ntfs rw,auto,nobrowse\n")),Object(t.b)("p",null,"3、设置完成后，建立连接，挂载Volumes下。"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"sudo ln -s /Volumes ~/Desktop/Volumes\n")),Object(t.b)("p",null,"接着finder左侧设备的盘就可以读写了。"),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"安装未知来源软件"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#安装未知来源软件"}),"#"),"安装未知来源软件"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"sudo spctl --master-disable  \n")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"一些链接"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#一些链接"}),"#"),"一些链接"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"sudo ln -s /Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin/code /usr/local/bin/vscode\n")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"突然没声音了"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#突然没声音了"}),"#"),"突然没声音了"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{}),"sudo killall coreaudiod\n")),Object(t.b)("p",null,"来源：",Object(t.b)("a",r({parentName:"p"},{href:"https://www.zhihu.com/question/23498580"}),"https://www.zhihu.com/question/23498580")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"常用软件"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#常用软件"}),"#"),"常用软件"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"截图snip：",Object(t.b)("a",r({parentName:"li"},{href:"https://snip.qq.com/"}),"https://snip.qq.com/")),Object(t.b)("li",{parentName:"ul"},"xnipapp: ",Object(t.b)("a",r({parentName:"li"},{href:"https://zh.xnipapp.com/"}),"https://zh.xnipapp.com/"))))}s.isMDXComponent=!0}}]);