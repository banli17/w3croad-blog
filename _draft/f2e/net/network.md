---
        title: 无名
        ---
        # 网络知识基础

## 目的

- 了解OSI七层协议、TCP/IP协议、SSL/TLS协议
- 掌握Wireshark抓包工具的使用

## 目录

- [物理层](#物理层)
- [数据链路层](#数据链路层)
- [网络层](#网络层)
- [传输层](#传输层)
- [应用层](#应用层)

OSI 是 `open system interconnection`的缩写，意思是开放式系统互联。国际标准化组织ISO制定了OSI模型，该模型定义了不同计算机相互连接的标准，是设计和描述计算机网络通信的基本框架。OSI模型把网络通信的工作分为7层，分别是物理层、数据链路层、网络层、传输层、会话层、表示层和应用层。

先来想想两台电脑通过qq发消息，大致需要什么条件：
1. 网线
2. 电脑
3. 交换机
4. 交钱给电信开网
5. 电脑安装了qq

接下来介绍七层协议。

## 物理层

两台计算机要通信，首先需要用网线或无线等方式将它们连接起来，这种连接电脑的物理手段就是物理层，它负责传输0和1电信号。

## 数据链路层

单纯的0和1没有任何意义，必须规定解读方式：多少个电信号算一组？每一信号位有什么意义？

数据链路层主要就是确定了0和1的分组方式。现在常用的电信号分组方式是按照以太网协议来的。它规定一组电信号构成一个数据包，叫做"帧"(Frame)，每一帧分为两个部分：标头(Head)和数据(Data)。

标头包含数据包的一些说明项，比如发送者、接受者、数据类型等等；数据则是数据包的具体内容。标头的长度固定为18字节。数据的长度在46字节到1500字节之间。如果数据很长，就需要分割成多个帧进行发送。

发送者和接受者是通过网卡mac地址来标识的。每块网卡都有独一无二的MAC地址，长度是48个二进制位，通常用12个十六进制表示。

前6个十六进制数是厂商编号，后6个是该厂商的网卡流水号。

有个问题是，一块网卡怎么会知道另一块网卡的MAC地址？

以太网是以广播的方式，把数据发送给本网络的所有计算机，让计算机自己判断接受还是丢弃这个包。

## 网络层

以太网协议，依靠MAC地址发送数据，理论上可行，但是上海的网卡发送到洛杉矶的网卡，有个问题，不可能给所有计算机都发送数据。

所以还需要一种新的地址，来区分子网络。子网络通过广播在传输数据，非子网络通过网络地址来传输。

规定网络地址的协议，叫做IP协议。所定义的地址，称为IP地址。目前，广泛采用的是IP协议第四版，简称IPv4。这个版本规定，网络地址由32个二进制位组成。
                                
![ip](img/ip.png)

习惯上，我们用分成四段的十进制数表示IP地址，从0.0.0.0一直到255.255.255.255。IP地址分为网络和主机两个部分。如果网络部分相同，则是在同一个子网络。比如172.16.254.2应该与172.16.254.1处在同一个子网络。

但是无法判断网络部分是多少位，也就是说不知道网络部分是172.16还是172.16.254，所以引入了子网掩码的概念。它是表示子网络特征的一个参数，和ip一样，也是一个32位二进制数字。它的网络部分是1，主机部分是0。比如，IP地址172.16.254.1，如果已知网络部分是前24位，主机部分是后8位，那么子网络掩码就是11111111.11111111.11111111.00000000，写成十进制就是255.255.255.0。

通过子网掩码，就能判断两个IP是否是同一子网络。方法是将两个IP地址与子网掩码分别进行AND运算（两个数位都为1，运算结果为1，否则为0），然后比较结果是否相同，如果是的话，就表明它们在同一个子网络中，否则就不是。

IP协议的作用主要有两个，一个是为每一台计算机分配IP地址，另一个是确定哪些地址在同一个子网络。

IP数据包的"标头"部分的长度为20到60字节，整个数据包的总长度最大为65,535字节。因此，理论上，一个IP数据包的"数据"部分，最长为65,515字节。前面说过，以太网数据包的"数据"部分，最长只有1500字节。因此，如果IP数据包超过了1500字节，它就需要分割成几个以太网数据包，分开发送了。

因为IP数据包是放在以太网数据包里发送的，所以我们必须同时知道两个地址，一个是对方的MAC地址，另一个是对方的IP地址。通常情况下，对方的IP地址是已知的（后文会解释），但是我们不知道它的MAC地址。
  
所以，我们需要一种机制，能够从IP地址得到MAC地址。
  
如果两台主机不在一个子网络，只能将数据包传到两个子网络连接处的网关进行处理。

如果两台主机在同一个子网络，可以通过ARP(Address Resolution Protocol)得到对方的MAC地址。他是发出一个数据包，其中包含索要查询主机的IP地址，在对方MAC地址一栏，是FF:FF:FF:FF:FF:FF，表示这是一个"广播"地址。它所在子网络的每一台主机，都会收到这个数据包，从中取出IP地址，与自身的IP地址进行比较。如果两者相同，都做出回复，向对方报告自己的MAC地址，否则就丢弃这个包。

## 传输层

两台电脑能够通信后，我们并不知道数据是供qq来使用的还是chrome来使用的。

端口是每一个使用网卡的程序的编号，每个数据包都发到主机的特定端口，所以不同的程序就能取到自己所需要的数据。"端口"是0到65535之间的一个整数，正好16个二进制位。0到1023的端口被系统占用，用户只能选用大于1023的端口。不管是浏览网页还是在线聊天，应用程序会随机选用一个端口，然后与服务器的相应端口联系。
                                                     
现在，我们必须在数据包中加入端口信息，这就需要新的协议。最简单的实现叫做UDP协议，它的格式几乎就是在数据前面，加上端口号。

UDP数据包，也是由"标头"和"数据"两部分组成。"标头"部分主要定义了发出端口和接收端口，"数据"部分就是具体的内容。然后，把整个UDP数据包放入IP数据包的"数据"部分，而前面说过，IP数据包又是放在以太网数据包之中的。

UDP数据包非常简单，"标头"部分一共只有8个字节，总长度不超过65,535字节，正好放进一个IP数据包。

UDP协议的优点是比较简单，容易实现，但是缺点是可靠性较差，一旦数据包发出，无法知道对方是否收到。

为了解决这个问题，提高网络可靠性，TCP协议就诞生了。每发出一个数据包都要求确认。如果有一个数据包遗失，就收不到确认，发出方就知道有必要重发这个数据包了。TCP协议能够确保数据不会遗失。它的缺点是过程复杂、实现困难、消耗较多的资源。TCP数据包没有长度限制，理论上可以无限长，但是为了保证网络的效率，通常TCP数据包的长度不会超过IP数据包的长度，以确保单个TCP数据包不必再分割。
                                          

## 应用层

"应用层"的作用，就是规定应用程序的数据格式。举例来说，TCP协议可以为各种各样的程序传递数据，比如Email、WWW、FTP等等。那么，必须有不同协议规定电子邮件、网页、FTP数据的格式，这些应用程序协议就构成了"应用层"。
                       
![封包](img/应用.png)


客户端输入网址 -DNS-> IP地址 -> 打包(HTTP) -> 逻辑网络(TCP/IP) -> 物理网络 -> 逻辑网络(TCP/IP) -> 拆包(HTTP) -> 服务端

![数据包](img/yingyong.png)

![数据传输](img/trans.png)


## tcp 和 udp

- tcp简介
- tcp数据包大小
- tcp数据包编号SEQ
- TCP数据包组装
- 慢启动和 ACK
- 数据包的遗失处理

tcp和udp属于传输层协议，tcp全称是`transport control protrol`，它的作用是保证数据通信的完整性和可靠性，防止丢包。

### 创建连接

简单说，让双方都证实对方能发收。 知道对方能收是因为收到对方的因为收到而发的回应。
1：A发，B收， B知道A能发
2：B发，A收， A知道B能发收
3：A发，B收， B知道A能收

### 传输数据

### 关闭连接

以太网数据包的大小是固定的，是1522字节，其中1500字节是负载，22字节是头信息。

![tcp](img/xieyi.png)

## 参考资料

- [HTTP1.1与前端性能](http://imweb.io/topic/554c5879718ba1240cc1dd8a)
- [TCP/IP模型的一个简单解释](http://www.ruanyifeng.com/blog/2009/03/tcp-ip_model.html)
- [当···时发生了什么？](https://github.com/skyline75489/what-happens-when-zh_CN)
- [从输入 URL 到页面加载完成的过程中都发生了什么事情？](http://fex.baidu.com/blog/2014/05/what-happen/)
- [What really happens when you navigate to a URL](http://igoro.com/archive/what-really-happens-when-you-navigate-to-a-url/)
- [TCP协议详解](https://www.jianshu.com/p/ef892323e68f)
- [TCP 协议简介](http://www.ruanyifeng.com/blog/2017/06/tcp-protocol.html)
- [HTTP 协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)
- [HTTPS 升级指南](http://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html)
- [互联网协议入门（一）](http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html)
- [互联网协议入门（二）](http://www.ruanyifeng.com/blog/2012/06/internet_protocol_suite_part_ii.html)
- [DNS 原理入门](http://www.ruanyifeng.com/blog/2016/06/dns.html)
- [SSL/TLS协议运行机制的概述](http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)
- [图解SSL/TLS协议](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)
- [SSL延迟有多大？](http://www.ruanyifeng.com/blog/2014/09/ssl-latency.html)
- [HTTPS的七个误解（译文）](http://www.ruanyifeng.com/blog/2011/02/seven_myths_about_https.html)
- [Wireshark基本介绍和学习TCP三次握手](https://www.cnblogs.com/TankXiao/archive/2012/10/10/2711777.html)
- [Wireshark协议分析从入门到精通](https://ke.qq.com/course/232174)
- [Wireshark抓包实战分析](https://ke.qq.com/course/192926)
- [Mac OS X上使用Wireshark抓包](http://blog.csdn.net/phunxm/article/details/38590561)
- [WEB系统测试(一)-WEB系统基础](https://ke.qq.com/course/119938)
- [WEB系统测试(二)-理解网络协议](https://ke.qq.com/course/120606)
- [WEB系统测试(三)-HTTP协议详解](https://ke.qq.com/course/120608)
- [WEB系统测试(四)-Web前端测试](https://ke.qq.com/course/121077)
- [WEB系统测试(五)-Web安全性测试](https://ke.qq.com/course/121184)
- [CCNA网络精品课之ARP协议篇](https://ke.qq.com/course/181010)
- [CCNA网络精品课之OSI七层模型](https://ke.qq.com/course/172512)
- [CCNA网络精品课](https://ciscoedu.ke.qq.com/#category=-1&tab=1)
- [网关和路由器的区别是什么？](https://www.zhihu.com/question/21787311)
 TCP连接和Nagle算法