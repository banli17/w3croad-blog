- [MDN 按位操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

js 位操作是将操作数当作 32 位，操作完成后，返回标准的 js 数值。

- 按位与（ AND）:`a & b`，对于每一个比特位，只有两个操作数相应的比特位都是 1 时，结果才为 1，否则为 0。
- 按位或（OR）:`a | b`，对于每一个比特位，当两个操作数相应的比特位至少有一个 1 时，结果为 1，否则为 0。
- 按位异或（XOR）:`a ^ b`，对于每一个比特位，当两个操作数相应的比特位有且只有一个 1 时，结果为 1，否则为 0。
- 按位非（NOT）:`~ a`，反转操作数的比特位，即 0 变成 1，1 变成 0。
- 左移（Left shift）:`a << b`，将 a 的二进制形式向左移 b (< 32) 比特位，右边用 0 填充。
- 有符号右移：`a >> b`，将 a 的二进制表示向右移 b (< 32) 位，丢弃被移出的位。
- 无符号右移：`a >>> b`，将 a 的二进制表示向右移 b (< 32) 位，丢弃被移出的位，并使用 0 在左侧填充。

[](./imgs/1.png)

- [计算机常见问题总结](/compute/issue)

## 计算机体系结构

- 运算器：+ - 逻辑运算，通常是一个加法器
- 控制器：运算器到哪取数据
- 存储器(内存): 存储数据，有很多存储单元，是平面编址的，就是从 0 -100。(三维编址就是划分区域了再编址。)
- 输出设备
- 输入设备

运算器和控制器合起来叫做 CPU。

加法器：线路需要考虑加数、被加数以及进位等。输出也有位的和以及进位。一个加法器只能计算一位。

为什么使用二进制？因为用电的状态来表示 0,1 最简单。

物质由原子组成，原子包含原子核(+)和电子(-)。稳定物体+-电荷是相等的。产生电的过程数将电子拿走，从一端(-)移动到另一端(+)。
所有原子的电子是同步运动的。

加法器的输入是从内存中读取的，内存中存放的磁，可以转成电。

程序是指令和数据组成的。

指令能告诉 CPU 在哪个存储器的哪个存储单元存放加数和被加数。CPU 首先读取指令(指令总线)，指令也在存储器中。计算结果会存储到存储器中，控制器知道存储器哪里是空的，将它放在那。

控制器告诉运算器去哪里读数据。

内存是一次性设备，断电就没了。我们需要将程序保存到一个外围设备。

线路复用：计算数比较大时，我们会想着使用多根线表示，但是只用了一根，再传一个状态。那下面一个过来时，上面的数就不见了。所以有了寄存器，暂存一下数据。

RAM:
ROM:
加电自检

poll 轮询
interrupt: 中断。

按键盘时，发出一个电信号通知 CPU，CPU 通过中断控制器(连了 CPU 和外围设备，每个外围设备用一根线)中断来看看键盘。

前端总线：
南桥设备：离 CPU 远点，低速总线控制器，连接键盘鼠标等(有频率限制的设备)，通过一个总线连到北桥。
北桥设备：离 CPU 近，高速总线控制器，

在北桥上接固态硬盘：比如一个 web 网页 1M，100 万人访问，要快速处理。

2.2 GHz: 频率,一次频率就能完成一个事件，速度快。1GHZ = 10^9

相当于电的开关要这么快，通过设备能这么快速的转换。但是内存的存储可能会慢(输入快，输出慢)，所以要折中，用个缓存。缓存大的性能高。缓存造价很高。寄存器和 CPU 速度一样，还有 1 级缓存，2 级缓存。

程序的局部性原理：

- 时间上：之前的数据可能还要访问，所以保存在缓存上。
- 空间上：距离近的数据一次性载入进来。

CPU 的区别导致了机器语言的不一致，所以在上面提供一层微码(汇编语言)，但是编写汇编语言的方式也不一样，所以为了方便开发，在上面做了一层中间层 API，程序员通过这一层直接编写代码，不用考虑底层(这叫高级语言)。

高级语言会编译成汇编语言，再转成机器语言执行。

硬件架构：

- ARM
- x86
- x64
- 安腾: 惠普卖个 intel 了
- alpha: 惠普
- UltraSparc
- Power: IBM
- M68000, M68k
- PowerPC

OS:

- Windows
- Linux
- Unix

CPU 很快，为了利用起来，所以有了多任务。
多任务：CPU，内存只有一个，切换执行一个任务时，将任务保存现场，再执行第二个。

CPU 和 Memory 分段，第一个程序（进程）用第一段，第二个程序用第二段。程序运行怎么管理呢？需要操作系统来管理。负责管理硬件资源。进程是程序运行时的，和程序不同。

进程：

32 位：2^32 次方，4G
64 位:

有了操作系统后，进程不能直接和硬件打交道，需要操作系统做为中间层完成。

操作系统都很底层，system call:系统调用。

库：call

Shell： 人机交互接口，让人能操作界面之类。

进程直接和硬件打交道可能产生冲突，而且恶意程序会直接影响所有的程序。所以需要操作系统统一管理。

## 计算机组成原理

这是学习《哈尔滨工业大学计算机组成原理》课程的笔记。

- [计算机组成原理(1)：计算机系统概论](/compute/combine/1)
- [计算机组成原理(2)：系统总线]
- [计算机组成原理(3)：存储器]
- [计算机组成原理(4)：输入输出系统]
- [计算机组成原理(5)：计算机运算方法](/compute/combine/6)
- [计算机组成原理(6)：指令系统]
- [计算机组成原理(7)：]
- [计算机组成原理(8)：]
- [计算机组成原理(9)：]

## 操作系统

- [计算机操作系统(1)：概述]
- [计算机操作系统(2)：处理器管理]
- [计算机操作系统(3)：处理器管理]
- [计算机操作系统(4)：存储管理]
- [计算机操作系统(5)：设备管理]
- [计算机操作系统(6)：文件管理]
- [计算机操作系统(7)：设备管理]
- [计算机操作系统(8)：并发程序设计]

## 计算机网络

- [计算机网络](/compute/network)

## 编译原理

- [编译原理(1)：绪论]
- [编译原理(2)：程序设计语言及其文法]
- [编译原理(3)：词法分析]
- [编译原理(4)：语法分析]
- [编译原理(5)：语法制导翻译]
- [编译原理(6)：中间代码生成]
- [编译原理(7)：运行存储分配]
- [编译原理(8)：代码优化]
- [编译原理(9)：代码生成]

## \r\n 是什么

- `\r`:`carriage return`，表示光标移动到行首。 以前 mac 上用这个来。
- `\n`: `new line`，换一行。

换行在每个系统上不一样。老 mac 上用\r，window 上用\r\n。linux 和新 mac 上用 \n。所以删除换行一般是将`\r\n`或`\n`替换为空。

具体的可以查看[阮一峰博客：回车和换行](http://www.ruanyifeng.com/blog/2006/04/post_213.html)