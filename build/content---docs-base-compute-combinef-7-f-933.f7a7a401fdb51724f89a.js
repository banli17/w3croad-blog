(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{245:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return O});var l=t(0),b=t.n(l),r=b.a.createContext({}),c=function(e){var n=b.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},a=function(e){var n=c(e.components);return b.a.createElement(r.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){return b.a.createElement(b.a.Fragment,{},e.children)}},i=function(e){var n=e.components,t=e.mdxType,l=e.originalType,r=e.parentName,a=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&-1===n.indexOf(l)&&(t[l]=e[l]);return t}(e,["components","mdxType","originalType","parentName"]),u=c(n);return b.a.createElement(u[r+"."+t]||u[t]||p[t]||l,n?Object.assign({},a,{components:n}):a)};function O(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,c=new Array(r);c[0]=i;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[u]="string"==typeof e?e:l,c[1]=a;for(var O=2;O<r;O++)c[O]=t[O];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,t)}i.displayName="MDXCreateElement"},50:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return c}),t.d(n,"rightToc",function(){return a}),t.d(n,"default",function(){return i});t(0);var l=t(245);function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function r(e,n){if(null==e)return{};var t,l,b=function(e,n){if(null==e)return{};var t,l,b={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(b[t]=e[t]);return b}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(b[t]=e[t])}return b}var c={title:"计算机组成原理",date:new Date("2016-09-04T14:53:15.000Z"),tags:null,toc:!0},a=[{value:"计算机系统概论",id:"计算机系统概论",children:[{value:"运算器",id:"运算器",children:[]},{value:"控制器",id:"控制器",children:[]}]},{value:"计算机运算方法",id:"计算机运算方法",children:[{value:"无符号数和有符号数",id:"无符号数和有符号数",children:[]}]}],u={rightToc:a},p="wrapper";function i(e){var n=e.components,t=r(e,["components"]);return Object(l.b)(p,b({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"计算机系统概论"},"计算机系统概论"),Object(l.b)("p",null,"计算机功能主要是运算，一定要有运算器。做哪种运算需要控制器来控制，指令和数据都需要存储，数据需要输入和输出出来让人看懂。"),Object(l.b)("p",null,"冯诺伊曼计算机特点："),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"计算机由5大部分组成"),Object(l.b)("li",{parentName:"ol"},"指令和数据以同等地位存于存储器，按地址访问"),Object(l.b)("li",{parentName:"ol"},"指定和数据用二进制表示"),Object(l.b)("li",{parentName:"ol"},"指令由操作码（具体要做什么操作）和地址码（参加运算的数据地址）组成"),Object(l.b)("li",{parentName:"ol"},"存储程序"),Object(l.b)("li",{parentName:"ol"},"以运算器为中心")),Object(l.b)("p",null,"组成："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"输入设备"),Object(l.b)("li",{parentName:"ul"},"输出设备"),Object(l.b)("li",{parentName:"ul"},"控制器：取出程序分析指令 ALU"),Object(l.b)("li",{parentName:"ul"},"运算器：运算 CU"),Object(l.b)("li",{parentName:"ul"},"存储器: 存储指令和数据")),Object(l.b)("p",null,"CPU"),Object(l.b)("p",null,"寄存器ACC"),Object(l.b)("p",null,"改进"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"以存储器为中心。")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"现代计算机\n",Object(l.b)("img",b({parentName:"p"},{src:"./1/2.png",alt:null}))))),Object(l.b)("p",null,"系统复杂性管理的方法:3Y"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"层次化(Hierachy): 将被设计的系统划分为多个模块或子模块。"),Object(l.b)("li",{parentName:"ul"},"模块化(Modularity): 有明确定义的功能和接口。"),Object(l.b)("li",{parentName:"ul"},"规则性(regularity): 模块更容易被重用。即生产时需要符合行业标准，如数据线的USB口都是一样的。")),Object(l.b)("p",null,Object(l.b)("img",b({parentName:"p"},{src:"./1/3.png",alt:null}))),Object(l.b)("p",null,"存储器的基本组成"),Object(l.b)("p",null,"指令、数据保存到存储器中，并可以取出指令、数据。"),Object(l.b)("p",null,Object(l.b)("img",b({parentName:"p"},{src:"./1/5.png",alt:null}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"存储体 - 存储单元 - 存储元件(0/1)\n大楼    房间        床位 (无人/有人)")),Object(l.b)("p",null,"存储单元：存放一串二进制代码，即存放一个存储字的所有存储元集合。\n存储字：存储单元中二进制代码的组合\n存储字长：存储单元中二进制代码的位数\n每个存储单元赋予一个地址，按地址寻址"),Object(l.b)("p",null,"MAR：存储器地址寄存器，保存存储单元的地址或编号。\nMDR：存储器数据寄存器，反映存储字长"),Object(l.b)("p",null,"如MAR = 4位，则存储单元是16个\nMDR= 8位，则存储字长为8"),Object(l.b)("h3",{id:"运算器"},"运算器"),Object(l.b)("h3",{id:"控制器"},"控制器"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"解释指令"),Object(l.b)("li",{parentName:"ul"},"保证指令按顺序执行")),Object(l.b)("p",null,"完成一条执行\n取指令: PC(program counter程序计数器)，存放当前将要执行指令的地址，具有计数功能(PC)+1->PC\n分析指令: IR(instructinon register指令寄存器),存放当前欲执行的指令\n执行指令: CU（控制单元）"),Object(l.b)("p",null,"控制器的组成\n",Object(l.b)("img",b({parentName:"p"},{src:"./1/7.png",alt:null}))),Object(l.b)("p",null,"运算器、控制器、存储器构成了主机。"),Object(l.b)("p",null,"主机完成一条指令的过程：\n以取数指令为例"),Object(l.b)("h2",{id:"计算机运算方法"},"计算机运算方法"),Object(l.b)("h3",{id:"无符号数和有符号数"},"无符号数和有符号数"),Object(l.b)("p",null,"无符号数只有数字，没有符号。首先将它变成二进制，然后用寄存器保存。寄存器的位数反应无符号数的表示范围。8位就是 0 -255，16位就是0-65535。"),Object(l.b)("p",null,"有符号数: 计算机"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"机器数: 符号数字化的数，保存在机器中的数"),Object(l.b)("li",{parentName:"ul"},"真值: 带符号的数，实际的数")),Object(l.b)("p",null,"+0.1011 需要保存符号、小数点位置、小数。小数直接存在寄存器中。\n-0.1011"),Object(l.b)("p",null,"计算机没有专门保存小数点。它的位置是约定的。定点计算机，就是约定小数点位置固定在计算机的某个位置。将点约定在最高位，是整数定点，约定在最低位数小树定点。"),Object(l.b)("p",null,"原码表示法：用逗号将符号位和数值分开，带符号的绝对值，符号被机器化了"),Object(l.b)("p",null,"整数 区间是 (-2^n , 2^n)\nx=+1110 -> x原=0,1110",Object(l.b)("br",{parentName:"p"}),"\n","x=-1110 -> x原= 2^4+1110 = 1,1110"),Object(l.b)("p",null,"小数 区间是(-1,1)\nx=+0.1101 -> x原=0.1101  // 后面的0表示符号，和前面数的0意义不同\nx=-0.1101 -> x原= 1-(-0.1101) = 1.1101  符号位 + 小数部分"),Object(l.b)("p",null,"x原=1.0011 -> x = -0.0011\nx原=1,1100 -> x = -1100\nx原=0.1101 -> x = +0.1101"),Object(l.b)("p",null,"x=0的原码 -> 有正负，整数小数表示\n","[+0.0000]","x原 = 0.0000\n","[-0.0000]","x原 = 1.0000\n","[+0]","x原 = 0,0000\n","[-0]","x原 = 1,0000"),Object(l.b)("p",null,"原码运算的时候有问题。比如 正"),Object(l.b)("p",null,"补码表示法：解决加减运算归一化的问题。"),Object(l.b)("p",null,"比如时钟：要从6点调整到3点，有2种方法："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"6 - 3 = 3"),Object(l.b)("li",{parentName:"ul"},"6 + 9 = 15 % 12(模) = 3  ")),Object(l.b)("p",null,"所以说-3 和 +9 能够得到相同的结果，-3 = +9。"),Object(l.b)("p",null,"有模的设备就可以将减法变成加法操作。"),Object(l.b)("p",null,"负数 + 模 = 该负数的补数\n正数和负数互为补数，它们的绝对值之和就是模数"),Object(l.b)("p",null,"比如4位计数器(模16)\n1011 要变成 0000\n1011 - 1011 = 0000 或者 1011 + 0101 = 10000 前面的1会自动去掉，所以 -1011 可以用 0101 代理"),Object(l.b)("p",null,"求-1010 的补数 0110\n10000\n-1010\n=0110"),Object(l.b)("p",null,"正数的补数是其本身。比如 3 + 12 = 15 % 12 = 3。"),Object(l.b)("p",null,"x=+1010 -> x补 = 0,1010"),Object(l.b)("p",null,"反码表示法："),Object(l.b)("p",null,"移码表示法："))}i.isMDXComponent=!0}}]);