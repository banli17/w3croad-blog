(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{273:function(a,e,v){"use strict";v.r(e);var _=v(0),t=Object(_.a)({},(function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"linux-系统组成和获取命令帮助"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#linux-系统组成和获取命令帮助","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux 系统组成和获取命令帮助")]),a._v(" "),v("h2",{attrs:{id:"获取命令使用帮助详解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获取命令使用帮助详解","aria-hidden":"true"}},[a._v("#")]),a._v(" 获取命令使用帮助详解")]),a._v(" "),v("p",[a._v("命令的语法通用格式")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("# COMMAND OPTIONS ARGUMENTS\n")])])]),v("p",[a._v("发起一个命令：请求内核将某个二进制程序运行为一个进程。\n程序 --\x3e 进程\n静态 --\x3e 动态 (有生命周期)")]),a._v(" "),v("p",[a._v("命令本身是一个可执行的程序文件：二进制格式的文件，有可能会调用共享库文件\n多数程序文件都存放在: /bin /sbin /usr/bin /usr/sbin 安装的有可能在 /usr/local/bin /usr/local/sbin\n普通命令： /bin /usr/bin /usr/local/bin\n管理命令：/sbin /usr/sbin /usr/local/sbin")]),a._v(" "),v("p",[a._v("共享库 /lib /lib64 /usr/lib /usr/lib64 /usr/local/lib /usr/local/lib64\n32bits 的库: /lib /usr/lib /usr/local/lib\n64bits 的库 /lib64 /usr/lib64 /usr/local/lib64")]),a._v(" "),v("p",[a._v("绿色是可执行文件，青色是链接文件")]),a._v(" "),v("p",[a._v("命令必须遵循特定的格式规范：exe msi ELF(linux)")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("# 查看命令文件的格式详情\nfile /bin/ls\n")])])]),v("p",[a._v("命令分为两类：")]),a._v(" "),v("ul",[v("li",[a._v("shell 程序自带的命令：内置命令(builtin)")]),a._v(" "),v("li",[a._v("独立的可执行程序文件，文件名即命令名：外部命令")])]),a._v(" "),v("p",[a._v("shell 程序是一个独特的程序，负责解析用户提供的命令，会去环境变量查找命令文件\n环境变量 PATH: 从哪些路径中查找用户键入的命令字符串所对应的命令文件，查找次序是自左到右\n"),v("code",[a._v("echo $PATH")])]),a._v(" "),v("p",[a._v("查看命令类型，内置还是外部命令\ntype COMMAND")]),a._v(" "),v("p",[a._v("OPTIONS\n指定命令的运行特性")]),a._v(" "),v("p",[a._v("选项有两种表现形式")]),a._v(" "),v("ul",[v("li",[a._v("短选项 -C，如 -l -d，注意有的命令选项没有-。同一个命令同时使用多个短选项，多数可合并")]),a._v(" "),v("li",[a._v("长选项，--word，如 --help，--human-readable。长选项不能合并")])]),a._v(" "),v("p",[a._v("有些选项可以带参数，叫做选项参数")]),a._v(" "),v("p",[a._v("ARGUMENTS: 命令的作用对象，命令对什么生效\n不同的命令的参数格式不同，有些命令可同时带多个参数，多个之间以空白字符分隔。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("ls /etc\nls /etc /var\nle -l -d /var\n")])])]),v("p",[a._v("获取命令的使用帮助\n内部命令：help COMMAND")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("type type\nhelp type\n")])])]),v("p",[a._v("外部命令：")]),a._v(" "),v("ol",[v("li",[a._v("命令自带简要格式的使用帮助 "),v("code",[a._v("COMMAND --help")])]),a._v(" "),v("li",[a._v("使用手册 manual: ``")])]),a._v(" "),v("h3",{attrs:{id:"man"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#man","aria-hidden":"true"}},[a._v("#")]),a._v(" man")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("# ls 手册位置\nls /usr/share/man\n\nman COMMAND\n\nSECTION\nNAME 功能性说明\nSYNOPSIS 语法格式\nDESCRIPTION: 描述\nOPTIONS 选项\nEXAMPLES\nAUTHOR\nBUGS\nSEE ALSO 参考\n")])])]),v("p",[a._v("SYNOPSIS\n[] 可选内容\n<> 必须提供的内容\na|b 多选一\n... 同类内容可出现多个")]),a._v(" "),v("p",[a._v("使用手册：压缩格式的文件，有章节之分\n/usr/share/man\nman1 man2")]),a._v(" "),v("ol",[v("li",[a._v("用户命令")]),a._v(" "),v("li",[a._v("系统调用")]),a._v(" "),v("li",[a._v("C 库调用")]),a._v(" "),v("li",[a._v("设备文件及特殊文件")]),a._v(" "),v("li",[a._v("文件格式 (配置文件格式)")]),a._v(" "),v("li",[a._v("游戏使用帮助")]),a._v(" "),v("li",[a._v("杂项")]),a._v(" "),v("li",[a._v("系统工具及守护进程")])]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("~]# man CHAPTER COMMAND\n")])])]),v("p",[a._v("注意：并非每个 COMMAND 在所有章节下都有手册")]),a._v(" "),v("p",[a._v("查看命令在手册哪些地方有。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("~]# whatis COMMAND\n其执行过程是查询数据库进行的\n手动更新数据库：\n~]# makewhatis\n")])])]),v("p",[a._v("man 命令打开手册以后的操作方法\n翻屏：\n空格键，向文件尾部翻一屏幕\nb: 向文件首部翻一屏幕\nctrl+d：翻半屏幕 down\nctrl+u 上翻半屏 up\n回车键 向文件尾部翻一行\nk 向文件首部翻一行\nG 跳至最后一行\n#G 跳到指定行\n1G 跳到第一行")]),a._v(" "),v("p",[a._v("文本搜索\n/keyword 从文件首部向文件尾部依次查找，不区分字符大小写\n?keyword 从文件尾部向文件首部依次查找")]),a._v(" "),v("p",[a._v("n 与查找命令方向相同 N 与查找命令方向相反")]),a._v(" "),v("p",[a._v("退出 q: quit")]),a._v(" "),v("p",[a._v("选项\n-M /PATH/TO/SOMEDIR 到指定位置目录查找命令手册并打开")]),a._v(" "),v("p",[a._v("练习：useradd 命令的用法")]),a._v(" "),v("ul",[v("li",[a._v("1)添加用户 gentoo")]),a._v(" "),v("li",[a._v("2)添加用户 slackware 要求指定其所用的 shell 为 /bin/tcsh")])]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("useradd -s /bin/tcsh slackware\nid slaceware\ntail -1 /etc/passwd # 查看最后一行，可以显示 shell 类型\n")])])]),v("ol",{attrs:{start:"3"}},[v("li",[v("p",[a._v("info COMMAND 获取命令的在线文档")])]),a._v(" "),v("li",[v("p",[a._v("很多应用程序都自带帮助文档 /usr/share/doc/APP-VERSION\nREADME 程序的相关的信息\nINSTALL 安装帮助\nCHANGES 版本迭代时的改动信息")])]),a._v(" "),v("li",[v("p",[a._v("主流发行版官方文档 http://www.redhat.com/doc")])]),a._v(" "),v("li",[v("p",[a._v("程序官方的文档：官方站点上的 Document")])]),a._v(" "),v("li",[v("p",[a._v("搜索引擎\nkeyword filetype:pdf\nkeyword site:domain.tld")])])]),a._v(" "),v("p",[a._v("centeos 修改语言 https://www.jianshu.com/p/8dc24d5e893d")]),a._v(" "),v("p",[a._v("linux 文件系统")]),a._v(" "),v("ol",[v("li",[a._v("文件名名称严格区分字符大小写")]),a._v(" "),v("li",[a._v("文件可以使用除/以外的任意字符")]),a._v(" "),v("li",[a._v("文件名长度不能超过255字符")]),a._v(" "),v("li",[a._v("以.开头的文件为隐藏文件\n"),v("ul",[v("li",[a._v(". 当前目录")]),a._v(" "),v("li",[a._v(".. 当前目录的上一层目录")])])])]),a._v(" "),v("p",[a._v("工作目录 working directory\n家目录 home")]),a._v(" "),v("h2",{attrs:{id:"常用基本命令实战应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用基本命令实战应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用基本命令实战应用")]),a._v(" "),v("h3",{attrs:{id:"pwd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pwd","aria-hidden":"true"}},[a._v("#")]),a._v(" pwd")]),a._v(" "),v("p",[a._v("printing working directory 显示工作目录")]),a._v(" "),v("h3",{attrs:{id:"cd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cd","aria-hidden":"true"}},[a._v("#")]),a._v(" cd")]),a._v(" "),v("p",[a._v("切换目录("),v("code",[a._v("change directory")]),a._v(")，用法："),v("code",[a._v("cd [/PATH/TO/SOMEDIR]")])]),a._v(" "),v("ul",[v("li",[a._v("cd 不带参数，表示切回家目录 ~也表示家目录")]),a._v(" "),v("li",[a._v("cd ~")]),a._v(" "),v("li",[a._v("cd ~USERNAME: 切换至指定用户的家目录")]),a._v(" "),v("li",[a._v("cd - 上一次所在目录和当前目录来回切换，shell保存了相关的变量\n"),v("ul",[v("li",[a._v("PWD: 当前目录")]),a._v(" "),v("li",[a._v("OLDPWD: 上一次的工作目录")])])])]),a._v(" "),v("h3",{attrs:{id:"ls"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ls","aria-hidden":"true"}},[a._v("#")]),a._v(" ls")]),a._v(" "),v("p",[a._v("ls: list 列出指定目录下的内容，用法是"),v("code",[a._v("ls [OPTION]... [FILE]...")]),a._v("。")]),a._v(" "),v("ul",[v("li",[v("code",[a._v("-a")]),a._v(": 显示所有文件，包括隐藏文件，目录可以.开头，文件也可以.开头")]),a._v(" "),v("li",[v("code",[a._v("-A")]),a._v(": 显示除.和..之外的所有文件")]),a._v(" "),v("li",[v("code",[a._v("-l")]),a._v(": "),v("code",[a._v("--long")]),a._v(", 长格式列表，即显示文件的详细属性信息\n"),v("ul",[v("li",[v("code",[a._v("-rw-r--r--")]),a._v(", 1 root  root   8957 10月 14 19:34 boot.log\n"),v("ul",[v("li",[v("code",[a._v("-")]),a._v("表示文件类型 - d b c l s p")]),a._v(" "),v("li",[v("code",[a._v("rw-r--r--")]),a._v(":\n"),v("ul",[v("li",[v("code",[a._v("rw-")]),a._v(": 文件属主的权限")]),a._v(" "),v("li",[v("code",[a._v("r--")]),a._v(": 文件属性的权限")]),a._v(" "),v("li",[v("code",[a._v("r--")]),a._v(": 其它用户(非属主、属组)的权限")])])]),a._v(" "),v("li",[a._v("1: 数字表示文件被硬链接的次数")]),a._v(" "),v("li",[a._v("root: 文件的属主")]),a._v(" "),v("li",[a._v("root：文件的属组")]),a._v(" "),v("li",[a._v("8957: 数字表示文件的大小，单位是字节")]),a._v(" "),v("li",[a._v("10月 14 19:34: 文件最近一次被修改的时间")]),a._v(" "),v("li",[a._v("boot.log: 文件名")])])])])]),a._v(" "),v("li",[v("code",[a._v("-h, --human-readable")]),a._v(": 对文件大小单位换算，换算后结果可能为非精确值")]),a._v(" "),v("li",[v("code",[a._v("-d")]),a._v(": 查看目录自身而非其内部的文件列表，配合 -l 使用才有意义")]),a._v(" "),v("li",[v("code",[a._v("-r")]),a._v(": reverse 按逆序排序，文件名字母")]),a._v(" "),v("li",[v("code",[a._v("-R")]),a._v(": recursive 递归显示")])]),a._v(" "),v("h3",{attrs:{id:"cat"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cat","aria-hidden":"true"}},[a._v("#")]),a._v(" cat")]),a._v(" "),v("p",[a._v("cat: concatenate 表示连接并显示文件内容， 文件文件查看工具")]),a._v(" "),v("ul",[v("li",[v("code",[a._v("-n")]),a._v(": 显示行号")]),a._v(" "),v("li",[v("code",[a._v("-E")]),a._v(": 显示行结束符$")])]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("cat /etc/fstab\ncat /etc/passwd\ncat /etc/issue\n\ncat /etc/fstab /etc/passwd\n")])])]),v("p",[a._v("tac 和 cat 一样，只是内容是逆序的")]),a._v(" "),v("p",[a._v("通过 file 命令可以看文件是不是文本文件，如:"),v("code",[a._v("file /etc/fstab")]),a._v("。")]),a._v(" "),v("h3",{attrs:{id:"file"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#file","aria-hidden":"true"}},[a._v("#")]),a._v(" file")]),a._v(" "),v("p",[a._v("file 查看文件内容类型，用法："),v("code",[a._v("file [FILE]...")])]),a._v(" "),v("h3",{attrs:{id:"echo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#echo","aria-hidden":"true"}},[a._v("#")]),a._v(" echo")]),a._v(" "),v("p",[a._v("echo: 回显命令，语法是"),v("code",[a._v("echo [SHORT-OPTION]... [STRING]...")]),a._v("。")]),a._v(" "),v("ul",[v("li",[v("code",[a._v("-n")]),a._v(": 不自动进行换行")]),a._v(" "),v("li",[v("code",[a._v("-e")]),a._v(": 让转义符生效  \\b  \\v  \\t")])]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v('# 显示颜色\necho -e "\\033[31mhello\\033[0m everyone"\n')])])]),v("p",[a._v("其中，STRING 可以使用引号。")]),a._v(" "),v("ul",[v("li",[a._v("单引号：\"\" 强引用，变量引用不执行替换 echo '$SHELL'。")]),a._v(" "),v("li",[a._v("双引号：'' 弱引用，变量引用会被替换  echo \"$SHELL\"。")])]),a._v(" "),v("p",[a._v("注意变量引用的正规符号 ${name}")]),a._v(" "),v("h3",{attrs:{id:"shutdown"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#shutdown","aria-hidden":"true"}},[a._v("#")]),a._v(" shutdown")]),a._v(" "),v("p",[a._v("关机或重启命令，语法是"),v("code",[a._v("shutdown [OPTIONS...] [TIME] [WALL...]")]),a._v("。")]),a._v(" "),v("p",[v("strong",[a._v("OPTIONS")])]),a._v(" "),v("ul",[v("li",[v("code",[a._v("-h")]),a._v(": halt  和 -P, --poweroff 一样")]),a._v(" "),v("li",[v("code",[a._v("-r")]),a._v(": reboot")]),a._v(" "),v("li",[v("code",[a._v("-c")]),a._v(": cancel")])]),a._v(" "),v("p",[v("strong",[a._v("TIME")])]),a._v(" "),v("ul",[v("li",[v("code",[a._v("now")])]),a._v(" "),v("li",[v("code",[a._v("+minutes")]),a._v(": 多少分钟后")]),a._v(" "),v("li",[v("code",[a._v("hh:mm")]),a._v(": 几点几分")])]),a._v(" "),v("p",[v("strong",[a._v("WALL")])]),a._v(" "),v("p",[a._v('和wall命令一样，用于向每个终端发一个消息 wall "hello"，默认会发送')]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("~]# shutdown -h now\n~]# shutdown -r +20 \"hello goodbye\"\nShutdown scheduled for Mon 2019-10-28 00:14:29 CST, use 'shutdown -c' to cancel.\n~]# shutdown -c\n\nBroadcast message from root@banli.linux (Sun 2019-10-27 23:54:42 CST):\n\nThe system shutdown has been cancelled at Sun 2019-10-27 23:55:42 CST!\n")])])]),v("p",[v("strong",[a._v("shutdown/halt/poweroff/reboot 的区别")])]),a._v(" "),v("ul",[v("li",[a._v("shutdown 以一种安全的方式关闭系统。所有登陆用户都可以看到关机信息提示，并且 login  将被阻塞。")]),a._v(" "),v("li",[a._v("halt命令，若系统的 runlevel 为 0 或 6 ，则关闭系统，否则以 shutdown 指令（加上 -h 参数）来取代。")]),a._v(" "),v("li",[a._v("poweroff命令用来关闭计算机操作系统并且切断系统电源。")]),a._v(" "),v("li",[a._v("reboot执行reboot指令可让系统停止运作，并重新开机。")])]),a._v(" "),v("p",[a._v("init 0 关机，init 6 重启。")]),a._v(" "),v("h3",{attrs:{id:"日期相关的命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#日期相关的命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 日期相关的命令")]),a._v(" "),v("p",[a._v("linux 系统启动时，从硬件读取日期和时间信息，读取完成后，就不再与硬件时间相关联。")]),a._v(" "),v("ul",[v("li",[a._v("系统时钟")]),a._v(" "),v("li",[a._v("硬件时钟")])]),a._v(" "),v("h3",{attrs:{id:"date-系统时钟"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#date-系统时钟","aria-hidden":"true"}},[a._v("#")]),a._v(" date 系统时钟")]),a._v(" "),v("p",[a._v("显示和设置系统日期格式，语法是"),v("code",[a._v("date [OPTION]... [+FORMAT]")]),a._v("。")]),a._v(" "),v("ul",[v("li",[a._v("%F")]),a._v(" "),v("li",[a._v("%T")]),a._v(" "),v("li",[a._v("%Y")]),a._v(" "),v("li",[a._v("%m")]),a._v(" "),v("li",[a._v("%d")]),a._v(" "),v("li",[a._v("%H")]),a._v(" "),v("li",[a._v("%M")]),a._v(" "),v("li",[a._v("%S")]),a._v(" "),v("li",[a._v("%s 时间戳，从1970.1.1(unix元年)到命令执行时经历的秒数")])]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("~]# date\nMon Oct 21 00:51:45 CST 2019\n~]# date +%F\n2019-10-21\n~]# date +%T\n00:52:34\n~]# date +%F +%T\ndate: extra operand ‘+%T’\nTry 'date --help' for more information.\n\n~]# date +'%F %T'\n2019-10-21 00:22:56\n")])])]),v("p",[a._v("设置日期时间："),v("code",[a._v("date [MMDDhhmm[[CC]YY][.ss]]")])]),a._v(" "),v("p",[a._v("如果不写年，则表示计算机当前的时间年份。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("~]# date 10271108\nSun Oct 27 11:08:00 CST 2019\n")])])]),v("p",[a._v("[[CC]YY] 表示年，可以是2位或4位")]),a._v(" "),v("h3",{attrs:{id:"clock-hwclock-硬件时钟"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#clock-hwclock-硬件时钟","aria-hidden":"true"}},[a._v("#")]),a._v(" clock/hwclock 硬件时钟")]),a._v(" "),v("p",[a._v("查询和设置硬件时钟。主板上有个纽扣电池给硬件供电，即使关机了。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v('~]# hwclock --set --date="2011-08-14 16:45:05"\n')])])]),v("p",[a._v("hwclock 和 clock 是同一个命令。一个是硬连接、一个是软连接。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("~]# which clock\n/usr/sbin/clock\n~]# file /usr/sbin/clock\n/usr/sbin/clock: symbolic link to `hwclock'\n~]# which hwclock\n/usr/sbin/hwclock\n~]# file /usr/sbin/hwclock\n/usr/sbin/hwclock: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=f3cee5ecdad7f100e9e0a46ff922ec2c60abb6e6, stripped\n")])])]),v("ul",[v("li",[v("code",[a._v("-s, --hctosys")]),a._v(": 根据硬件时间设置系统时间。")]),a._v(" "),v("li",[v("code",[a._v("-w, --systohc")]),a._v(": 根据系统时间设置硬件时间。")])]),a._v(" "),v("p",[v("strong",[a._v("同步远程时间")])]),a._v(" "),v("p",[a._v("ntp常用服务器：")]),a._v(" "),v("ul",[v("li",[a._v("中国国家授时中心：210.72.145.44")]),a._v(" "),v("li",[a._v("NTP服务器(上海) ：ntp.api.bz")])]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("~]# yum -y install ntpdate\n~]# ntpdate -u ntp.api.bz\n")])])]),v("h3",{attrs:{id:"cal-日历"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cal-日历","aria-hidden":"true"}},[a._v("#")]),a._v(" cal 日历")]),a._v(" "),v("p",[a._v("用法："),v("code",[a._v("cal [[month] year]")])]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("~]# cal 11 19\n     November 19\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30\n")])])]),v("p",[a._v("课外作用，学习 which, whereis who w 命令")])])}),[],!1,null,null,null);e.default=t.exports}}]);