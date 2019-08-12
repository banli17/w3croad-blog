(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{245:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return O});var l=n(0),b=n.n(l),a=b.a.createContext({}),c=function(e){var t=b.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=c(e.components);return b.a.createElement(a.Provider,{value:t},e.children)},r="mdxType",p={inlineCode:"code",wrapper:function(e){return b.a.createElement(b.a.Fragment,{},e.children)}},u=function(e){var t=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,i=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&-1===t.indexOf(l)&&(n[l]=e[l]);return n}(e,["components","mdxType","originalType","parentName"]),r=c(t);return b.a.createElement(r[a+"."+n]||r[n]||p[n]||l,t?Object.assign({},i,{components:t}):i)};function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[r]="string"==typeof e?e:l,c[1]=i;for(var O=2;O<a;O++)c[O]=n[O];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return c}),n.d(t,"rightToc",function(){return i}),n.d(t,"default",function(){return u});n(0);var l=n(245);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,l,b=function(e,t){if(null==e)return{};var n,l,b={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var c={title:"linux服务管理",sidebar_label:"服务管理"},i=[{value:"服务管理",id:"服务管理",children:[{value:"linux运行级别",id:"linux运行级别",children:[]},{value:"服务的分类",id:"服务的分类",children:[]},{value:"RPM包服务管理",id:"rpm包服务管理",children:[]},{value:"源码包服务管理",id:"源码包服务管理",children:[]},{value:"让源码包被服务管理命令识别",id:"让源码包被服务管理命令识别",children:[]}]},{value:"系统管理",id:"系统管理",children:[{value:"进程管理",id:"进程管理",children:[]},{value:"杀死进程",id:"杀死进程",children:[]},{value:"进程的优先级",id:"进程的优先级",children:[]},{value:"工作管理",id:"工作管理",children:[]},{value:"查看系统资源",id:"查看系统资源",children:[]},{value:"定时任务",id:"定时任务",children:[]}]}],r={rightToc:i},p="wrapper";function u(e){var t=e.components,n=a(e,["components"]);return Object(l.b)(p,b({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"服务管理"},"服务管理"),Object(l.b)("h3",{id:"linux运行级别"},"linux运行级别"),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 查看运行级别\nrunlevel\n# N 3  从NULL级别进入3级别\n\n# 切换到图形化界面级别，即使切换失败(如没安装图形化)，级别也会切换\ninit 5\n\n# 设置系统默认运行级别\nvim /etc/inittab\n# id:3:initdefault\n")),Object(l.b)("p",null,"linux的运行级别有7个："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"0"),Object(l.b)("li",{parentName:"ul"},"1"),Object(l.b)("li",{parentName:"ul"},"2"),Object(l.b)("li",{parentName:"ul"},"3"),Object(l.b)("li",{parentName:"ul"},"4"),Object(l.b)("li",{parentName:"ul"},"5"),Object(l.b)("li",{parentName:"ul"},"6")),Object(l.b)("h3",{id:"服务的分类"},"服务的分类"),Object(l.b)("p",null,"学习服务可以让我们停掉不需要的服务，从而优化服务器。"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"RPM包默认安装的服务",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"独立的服务"),Object(l.b)("li",{parentName:"ul"},"基于xinetd服务:基本淘汰，安装",Object(l.b)("inlineCode",{parentName:"li"},"xinetd"),"包后再通过",Object(l.b)("inlineCode",{parentName:"li"},"chkconfig --list"),"查看。"))),Object(l.b)("li",{parentName:"ul"},"源码包安装的服务: 一般在",Object(l.b)("inlineCode",{parentName:"li"},"/usr/local/"),"下")),Object(l.b)("p",null,"启动和自启动："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"自启动是服务开机是否启动。"),Object(l.b)("li",{parentName:"ul"},"启动是服务当前的状态。")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 查看RPM服务和自启动状态\nchkconfig --list\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"netstat查看系统开启的服务")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t"),": 列出tcp数据"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"u"),": 列出udp数据"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"l"),": 列出正在监听的网络服务(不包含已经连接的网络服务)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"n"),": 用端口号来显示服务，而不是用服务名"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"p"),": 列出服务的进程id(pid)")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 查看启动了哪些服务\nnetstat -tulnp\n\n# 所有的，包括连接的\nnetstat -an\n")),Object(l.b)("p",null,"还可以通过",Object(l.b)("inlineCode",{parentName:"p"},"ps aux"),"命令来查看。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"常规服务端口作用列表文件")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{}),"vi /etc/services\n")),Object(l.b)("h3",{id:"rpm包服务管理"},"RPM包服务管理"),Object(l.b)("p",null,"RPM包安装的位置："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/init.d/"),": 启动脚本位置"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/sysconfig/"),": 初始化环境配置文件位置"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/"),": 配置文件位置"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/xinetd.conf/"),": 配置"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/xinetd.d/"),": 基于xinetd服务的启动脚本"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/"),": 服务产生的数据"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/var/log/"),": 日志")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"独立服务的启动方法")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"服务路径 start/stop/status/restart"),"或者redhat专有的",Object(l.b)("inlineCode",{parentName:"p"},"systemctl start/stop/status/restart 服务名"),"（RPM包可以，源码包不行，因为源码包不再/etc/init.d/目录下，服务命令默认搜索的这个目录）。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"独立服务的自启动")),Object(l.b)("p",null,"有两种方法："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"方法1. 使用chkconfig")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# centos 7用systemctl替换chkconfig\nsystemctl enable http\n\n\nchkconfig --level 2345 httpd on\nchkconfig --level 2345 httpd off\nchkconfig httpd off\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"方法2. 修改",Object(l.b)("inlineCode",{parentName:"p"},"/etc/rc.d/rc.local"),"文件，新增",Object(l.b)("inlineCode",{parentName:"p"},"/etc/httpd start"),"。改了之后chkconfig查询结果不会变，是两种方法。")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"方法3. 使用redhat专有",Object(l.b)("inlineCode",{parentName:"p"},"ntsysv"),"图形化命令，这个和chkconfig是一种方法。改了chkconfig命令查询的结果会变。"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"修改xinetd服务")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 编辑xinetd.d文件里的配置disable = no\nvi /etc/xinetd.d/rsync\n\n# 重启xinetd服务\nsystemctl restart xinetd\n")),Object(l.b)("p",null,"xinetd服务自启动和启动是同步的，关闭后自启动也关闭了。"),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{}),"chkconfig rsync on\n")),Object(l.b)("h3",{id:"源码包服务管理"},"源码包服务管理"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"启动：",Object(l.b)("inlineCode",{parentName:"li"},"源码包路径 start")),Object(l.b)("li",{parentName:"ul"},"自启动：修改",Object(l.b)("inlineCode",{parentName:"li"},"etc/rc.d/rc.local"))),Object(l.b)("h3",{id:"让源码包被服务管理命令识别"},"让源码包被服务管理命令识别"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"启动",Object(l.b)("inlineCode",{parentName:"li"},"ln -s 源码包路径  /etc/rc.d/init.d/"),"，链接后面不写文件名表示不改名"),Object(l.b)("li",{parentName:"ul"},"自启动",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"vi /etc/init.d/apache"),Object(l.b)("li",{parentName:"ul"},"添加",Object(l.b)("inlineCode",{parentName:"li"},"# chkconfig:35 86 76"),"，运行级别、启动顺序(开机时开启)、关闭顺序(关机时停止)，在",Object(l.b)("inlineCode",{parentName:"li"},"/etc/rc3.d"),"里3表示运行级别，K开头表示Kill，S表示Start。"),Object(l.b)("li",{parentName:"ul"},"添加说明文件",Object(l.b)("inlineCode",{parentName:"li"},"# description: source package apache")),Object(l.b)("li",{parentName:"ul"},"指定httpd脚本可以被chkconfig命令管理")))),Object(l.b)("p",null,Object(l.b)("img",b({parentName:"p"},{src:"./index/1.png",alt:null}))),Object(l.b)("h2",{id:"系统管理"},"系统管理"),Object(l.b)("h3",{id:"进程管理"},"进程管理"),Object(l.b)("p",null,"什么是进程"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"判断服务器健康状态"),Object(l.b)("li",{parentName:"ul"},"查看系统中所有进程"),Object(l.b)("li",{parentName:"ul"},"杀死进程")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"ps查看进程")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ps aux"),": 查看系统中所有进程，使用BSD操作系统格式"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ps -le"),": 查看系统中所有进程，使用Linux标准命令格式"),Object(l.b)("li",{parentName:"ul"},"选项",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"a"),": "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},""),": ")))),Object(l.b)("p",null,"输出："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"USER"),Object(l.b)("li",{parentName:"ul"},"PID: 1表示第一个进程，它是所有进程的父进程。"),Object(l.b)("li",{parentName:"ul"},"%CPU"),Object(l.b)("li",{parentName:"ul"},"%MEM"),Object(l.b)("li",{parentName:"ul"},"VSZ: 占用的虚拟内存"),Object(l.b)("li",{parentName:"ul"},"RSS: 占用的真实内存"),Object(l.b)("li",{parentName:"ul"},"TTY: 本地终端号，tty1-tty6。tty7是图形化终端。远程终端可以有65536个pst/0。?是系统进程，不是用户启动的。"),Object(l.b)("li",{parentName:"ul"},"STAT: 进程状态",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"S: 睡眠"),Object(l.b)("li",{parentName:"ul"},"R: 运行"),Object(l.b)("li",{parentName:"ul"},"T: 停止"))),Object(l.b)("li",{parentName:"ul"},"START: 进程启动时间"),Object(l.b)("li",{parentName:"ul"},"TIME: 进程耗费CPU运算时间"),Object(l.b)("li",{parentName:"ul"},"COMMAND: 进程名")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"pstree显示进程树")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"p"),": 显示进程pid"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"u"),": 显示进程的用户")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"top查看健康状态")),Object(l.b)("p",null,"每3s刷新一次，可以查看系统健康状态。"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"d"),": 格几秒刷新一次，默认3s"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"b")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"n"),": 指定top命令执行的次数")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{}),"top -b -n 1 > top.log\n")),Object(l.b)("p",null,"交互"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"?或h: 显示交互模式的帮助"),Object(l.b)("li",{parentName:"ul"},"P: 按cpu排序"),Object(l.b)("li",{parentName:"ul"},"M: 按内存使用率排序"),Object(l.b)("li",{parentName:"ul"},"N: PID排序"),Object(l.b)("li",{parentName:"ul"},"q：退出")),Object(l.b)("h3",{id:"杀死进程"},"杀死进程"),Object(l.b)("p",null,"kill "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"l"),": 查看信号")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 重启apache，不会影响链接的用户，会重新读取配置文件启动\nkill -1 1532\nkill -HUP 1532\n\n# 强制杀死进程\nkill -9 2236\n")),Object(l.b)("p",null,"杀死一组进程"),Object(l.b)("p",null,"killall ","[选项][信号]"," 进程名"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"i"),": 交互式，询问杀死进程"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"I"),": 忽略进程名大小写")),Object(l.b)("p",null,"pkill ","[选项][信号]"," 进程名"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t"),": 终端号")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 踢掉登陆的用户\nw\npkill -9 -t pts/1\n")),Object(l.b)("h3",{id:"进程的优先级"},"进程的优先级"),Object(l.b)("p",null,"一个CPU在同一个时钟周期内只能运算一个指令。"),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{}),"# 查看优先级\nps -le | grep httpd\n")),Object(l.b)("p",null,"PRI：priority，数字越小表示优先级越高，系统的\nNI: nice，用户能修改NI值，范围是-20 - 19,普通用户能改到0-19，root才能改称负值。"),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 修改优先级，nice只能改没有运行到进程\nnice -n -5 systemctl start httpd\n\n# renice修改已经存在的优先级\nrenice -10 1845\n")),Object(l.b)("h3",{id:"工作管理"},"工作管理"),Object(l.b)("p",null,"就是后台管理，通过jobs查看。因为执行一个大任务时，可能会持续一段时间什么都操作不了，所以需要放到后台。"),Object(l.b)("p",null,"放入后台方法"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"方法1: 在命令最后加 &，放入后台并执行"),Object(l.b)("li",{parentName:"ul"},"方法2: 按ctrl + z ，放入后台暂停")),Object(l.b)("p",null,"和用户交互的命令放入后台会变成Stopped，因为没有意义，如top(查看监控)，vi等。"),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 查看任务，l表示显示pid，+表示最后一个放入后台，-表示倒数第2个放入\njobs -l\n\n# 恢复到前台执行，%是为了和pid区别\nfg %工作号\n\n# 恢复到后台执行\nbg %工作号\n")),Object(l.b)("p",null,"终端放入后台的任务会随着终端关闭而停止，相当于发了个kill -1。"),Object(l.b)("p",null,"msyqld是守护进程， msyqld &和和系统一直启动，不会随着终端关闭。"),Object(l.b)("p",null,"后台命令一直运行的方法："),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"加入",Object(l.b)("inlineCode",{parentName:"li"},"/etc/rc.local/"),"文件中"),Object(l.b)("li",{parentName:"ol"},"定时任务"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"nohup xx.sh &"),"命令手工执行，重启要重新执行。")),Object(l.b)("h3",{id:"查看系统资源"},"查看系统资源"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"vmstat [刷新延迟 刷新次数]"),"，返回结果字段：",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"procs"),Object(l.b)("li",{parentName:"ul"},"swap"),Object(l.b)("li",{parentName:"ul"},"system",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"in: 中断进程次数"))),Object(l.b)("li",{parentName:"ul"},"io: 磁盘读写信息字段",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"bi:读入数据总量"),Object(l.b)("li",{parentName:"ul"},"bo: 写入数据总量"))),Object(l.b)("li",{parentName:"ul"})))),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"vmstat 1 3\n")),Object(l.b)("p",null,"缓存cache时用来加速数据从硬盘中读取的，因为从硬盘读数据慢(固态555mb/s)，缓冲buffer是用来加速数据写入硬盘的，可能并没有直接写入硬盘，而是积累到一定量一起写入。"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"dmsg"),": 内核信息")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{}),"dmsg | grep CPU\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"free: 查看内存使用状态，默认是k",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"g: 以GK显示"),Object(l.b)("li",{parentName:"ul"},"m: 以mb显示")))),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 查看cpu信息\ncat /proc/cpuinfo\n\n# top命令第一句话\nuptime\n\n# 查看内核信息 -a内核信息 -s名称 -r版本\nuname -a\n\n# 查看操作系统位数\nfile /bin/ls\n\n# 查看发行版本\nlsb_release -a\n\n# 查看系统中所有进程调用的文件\nlsof | more\n# 查询某个文件被哪个进程调用\nlsof /sbin/init\n# 查看httpd进程调用了哪些文件\nlsof -c httpd\n# 按照用户名，查询某个用户的进程调用的文件名\nlsof -u root\n")),Object(l.b)("h3",{id:"定时任务"},"定时任务"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"at一次执行")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/at.allow"),": "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/at.deny"),": 不能运行at命令的用户，对root无效"),Object(l.b)("li",{parentName:"ul"},"如果这2个文件都不存在，则只有root可以执行",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"m: at完成后，通过email通知用户"),Object(l.b)("li",{parentName:"ul"},"c 工作号：显示at工作的实际内容")))),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"at now + 2[minutes|hours|days|weeks]\nat 02:30\nat 02:30 2019-09-08\nat /bin/sync\nat /sbin/shutdown -r now\n\n# 查看at任务\natq\n\n# 查看任务的具体内容\nat -c 工作号\n\n# 删除指定的at任务\natrm 工作号\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"crontab循环定时执行")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 确认服务安装且自启动\nsystemctl restart crontab\nsystemctl list-unit-files\nsystemctl list-dependencies httpd  # 查看依赖的树\n")),Object(l.b)("p",null,"/etc/cron.allow 和 /etc/cron.deny"),Object(l.b)("p",null,"*/n 每隔n分钟执行"),Object(l.b)("p",null,"最小单位是分钟，命令写成绝对路径。因为定时任务的路径与$PATH不完全一样，在/etc/crontab里。"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"crontab -e"),": 创建和编辑计划任务。保存在/tmp/crontab.xxx里，缓存可能被误删除。"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ctontab -l"),": 查看当前计划"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"crontab -r"),": 清除全部任务"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-u"),": 编辑他人的计划任务")),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"# 计划格式：分时日月星期命令，分必须是数字不能是*，日和星期只能用一个\n# 每周1，3，5执行打包命令，-可以表示连续时间周期，*/2表示执行任务的间隔时间\n25 3 * * 1,3,5 /usr/bin/tar -czvf backup.tar.gz /home/wwwroot\n")),Object(l.b)("p",null,"所有命令都要用绝对路径，使用whereis命令查询，如",Object(l.b)("inlineCode",{parentName:"p"},"whereis rm"),"。"),Object(l.b)("p",null,"方法2: 编辑",Object(l.b)("inlineCode",{parentName:"p"},"/etc/crontab"),"，centos5里这个文件有更多功能，它定义了cron.daily、cron.monthly等文件，只需在这些文件里写任务即可。\n最新这些文件的功能给了anacron来执行。旧的是crontab和anacron都执行。"),Object(l.b)("p",null,"方法3: 将需要执行的脚本复制到",Object(l.b)("inlineCode",{parentName:"p"},"/etc/cron.{hourly,daily,weekly,monthly}"),"目录中"),Object(l.b)("p",null,"比如自动更新 github 的脚本",Object(l.b)("inlineCode",{parentName:"p"},"w3croad_blog.cron"),":"),Object(l.b)("pre",null,Object(l.b)("code",b({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\n\ncd /xx/oo/ && git pull\nexit 0\n")),Object(l.b)("p",null,"anacron 的配置，它只会检测上面几个目录中的任务。不会检测其它文件。"),Object(l.b)("p",null,"优点：比如刚好4点的时候电脑有问题关机了。它会开机后执行。在系统",Object(l.b)("inlineCode",{parentName:"p"},"/var/spool/anacron"),"目录下存在",Object(l.b)("inlineCode",{parentName:"p"},"cron.{daily,weekly, monthly}"),"（只能是天，因为记录的是日期）文件，里面记录了上次执行cron的时间，和当前时间比较，如果两个时间差值超过了anacron的执行时间差值，证明有cron任务被漏执行。检测周期是1天，7天，一个月。所以比较粗略，可能会延迟。不过服务器一般不会出问题。"),Object(l.b)("p",null,"在",Object(l.b)("inlineCode",{parentName:"p"},"/etc/anacrontab"),"里 "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"RANDOM_DELAY: 随机延迟时间，错峰延迟。比如宕机重启后一堆任务分开时间。"),Object(l.b)("li",{parentName:"ul"},"START_HOURS_RANGE: 执行时间范围"),Object(l.b)("li",{parentName:"ul"},"天数 强制延迟(分) 工作名称 实际执行的命令"),Object(l.b)("li",{parentName:"ul"},"/usr/bin/run-parts"),Object(l.b)("li",{parentName:"ul"},"问题是：执行时间不确定")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"cron.daily"),"工作流程"),"\n1. 读取",Object(l.b)("inlineCode",{parentName:"p"},"/var/spool/anacron/cron.daily"),"中上次执行时间\n2. 和当前时间比较，超过1天则执行 cron.daily\n3. 执行工作只能在 03:00-22:00 之间\n4. 强制延迟5分钟，再随机延迟45分钟\n5. 使用nice设置默认优先级，在使用run-parts脚本执行/etc/cron.daily目录中所有的可执行文件"))}u.isMDXComponent=!0}}]);