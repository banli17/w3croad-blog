# DDOS 攻击

DDOS (Distributed Denial of Service）叫分布式拒绝服务攻击，是用多个计算机联合起来对一个或多个目标服务器进行攻击，将目标服务器的宽带或资源消耗完，导致其无法为正常客户提供服务。

**如何防御 DDOS 攻击**

1. 尽可能对系统加载最新补丁，并采取有效的合规性配置，降低漏洞利用风险
2. 采取合适的安全域划分，配置防火墙、入侵检测和防范系统，减缓攻击。
3. 采用分布式组网、负载均衡、提升系统容量等可靠性措施，增强总体服务能力。

可参考措施：

1. 选择路由器、交换机、硬件防火墙等设备的时候要尽量选用知名度高、 口碑好的产品。
2. 尽量避免 NAT 的使用
3. 充足的网络带宽保证
4. 升级主机服务器硬件
5. 把网站做成静态页面

- TCP 半连接：让连接一直连接，其它用户连接不进来
- http 连接
- DNS

**攻击案例**

- 游戏私服互相 DDOS
