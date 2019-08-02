---
title: "必须知道的http协议知识"
date: 2019-03-04 13:44:04
toc: true
tags:
---

## URI、URL、URN

`Uniform Resource Identifier`：统一资源标志符，它是资源的唯一标志。它包含`URL`和`URN`。

`Uniform Resource Locator`：统一资源定位器。它相当于通过地址找资源，是uri的一种形式。

```
# 协议有多种、http、ftp等
http://user:pass@host.com:80/path?query=string#hash
```

Universal Resource Name：统一资源名称，通过名称找资源，是uri的另一种形式。

## http报文格式

![](./index/1.png)

## http方法

用来定义对资源的操作。常用的get、post等。

## http 状态码

http 状态码是用以表示网页服务器超文本传输协议响应状态的3位数字代码。

### 1xx 消息

表示请求已经接收需要继续处理。由于 HTTP/1.0 协议中没有定义任何 1xx 状态码，所以除非在某些试验条件下，服务器禁止向此类客户端发送 1xx 响应。

- `100 (Continue)`:客户端应继续发送

### 2xx 成功

这类状态码表示请求被接收。

- `200 ok`: 成功

### 3xx 重定向

- `301` 永久重定向
- `302` 临时重定向
- `304` 文件没修改，取缓存
- `305` 必须通过指定代理才能访问

**客户端错误**

- 400 语义有误或参数错误
- 401 需要用户验证
- 403 服务器已经理解请求，但是拒绝执行
- 404 文件没找到
- 408 请求超时

**服务端错误**

- 500 服务端错误，一般是代码错误
- 502 网关错误，上游服务器无响应
- 503 服务器目前无法使用，停机维护或超载
- 504 网关超时，未能及时收到上游服务器响应
- 509 服务器带宽限制，非官方状态码，广泛使用
- 600 源站没有返回响应头，只有实体内容

通过meta标签跳转

```html
<meta http-equiv="refresh" content="0;url=http://www.baidu.com">
```
cors跨域请求的限制于解决
`Content-Type`的作用

浏览器同域限制，浏览器实际已经发送并接受到了数据，但是把隐藏掉了。

```
res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
})
```

jsonp原理。

## http 缓存机制

http 缓存分为强缓存和协商缓存。

**强缓存**

当浏览器打开 html 页面时，页面中包含一些资源链接如 css、js等，浏览器会将这些资源和资源的头信息缓存到本地，头信息里有 `expires` 和 `cache-control` 字段，表示资源的有效期。`expires`是一个 GMT 格式的时间字符串，表示大于这个时间资源就会过期失效(http 1.0)，由于这是服务器返回的时间，可能会和客户端时间有很大差距造成缓存错乱，所以 http1.1 版本使用了`cache-control:max-age=10`这样的字段，max-age 是一个相对时间，单位是秒，表示超过这么多秒资源就过期了。所以如果资源没有过期则使用浏览器本地的资源，这就是强缓存。

> 现在还写 expires 是为了兼容 http1.0，另外 max-age 的权重大于 expires。

> 强缓存只针对页面里的资源，如果新打开 css、js 资源的 url，浏览器会发请求到服务器。

**协商缓存**

协商缓存也叫做 304 缓存，就是浏览器本地的缓存资源到期失效后，于是重新请求服务器，服务器根据信息判断资源没有修改还可以继续使用。于是浏览器继续使用资源。

在浏览器本地缓存失效后，浏览器会重新请求资源，并带上资源的信息：If-None-Match(上次响应头 etag 的值，即资源的哈希值)、If-Modified-Since(上次响应头的 Last-Modified 值，即最后修改时间)。服务端可以根据这两个值判断是返回 304 还是 200。

> 有了最后修改时间，就可以判断资源有没有修改，为什么还需要 etag 呢？

因为资源可能修改后又撤销回去了，这时资源的最后修改时间改变了，但是资源内容没变，所以应该返回 304。

```js
// nodejs 
const stat = fs.statSync(filepath)
const etag = crypto.createHash('md5').update(fs.readFileSync(filepath)).digest('base64')
if(req.headers['if-none-match'] === etag || req.headers['if-modified-since'] < stat.ctime){
    res.statusCode = 304
    res.end()
}
```

## 206 范围请求

状态码206 表示范围请求，即客户端只请求资源的一部分数据。比如观看在线视频时，以块的形式下载数据很重要，可以避免获取没有使用的资源。

客户端的请求头中发送`Range`字段，

```
// request header
Range:bytes=0-5
```

上面请求头表示客户端在请求资源的 [0, 5] 一共 6 个字节。服务器根据这个字段返回数据，并且响应头中包含：

```
// response header
Content-Length: 6
Content-Range: bytes 0-5/2000
```

点击[查看demo](https://github.com/banli17/node-study/tree/master/src/network/http/206%E8%8C%83%E5%9B%B4%E8%AF%B7%E6%B1%82)。

## 国际化多语言

http://taobaofed.org/blog/2016/03/21/internationalization/

## referer

`referer` 通常用来做防盗链，比如图片的防盗链，服务端根据不同的 `referer` 看是否返回正确的图片。

```js
const whiteList = [
    'localhost:63342'
]

http.createServer((req, res) => {
    const referer = req.headers['referer']
    const refererHost= url.parse(referer).host
    let file = whiteList.includes(refererHost) ? path.join(__dirname, url.parse(req.url).pathname)
        : path.join(__dirname, 'err.png')
    fs.createReadStream(file).pipe(res)
}).listen(5000)
```

## gzip

服务器上的网页文件一般都是会压缩后再传输给客户端，压缩格式为 gzip、deflate 等。浏览器请求时会带上支持的格式`accept-encoding`：

```
// request
accept-encoding: gzip, deflate, br
```

服务器端根据支持的格式，将文件压缩后返回，并返回响应头字段 `content-encoding`。

```js
// node.js
res.setHeader('Content-Encoding', 'gzip')
fs.createReadStream('index.html').pipe(zlib.createGzip()).pipe(res)
```

## https


### HTTP 的问题

我们知道 http 是明文传输的，所以没有隐私可言，它容易被中间层窃听和篡改。可能会导致一些问题，如：

- 运营商劫持，即有时网页右下角出现电信的广告。
- 中间层重定向到流氓网站，比如中间层可以返回 headers (或插入location.href) 重定向到流氓网站。
- 因为网页都被改了，所以无法抵御 xss 或 csrf 攻击。

可以使用[`anyproxy`](http://anyproxy.io/cn/)来模拟中间层篡改网页。

traceroute www.baidu.com 追踪数据包在网络传输的全部路径，包默认40字节

HTTP 这么多问题，那么如何保证传输时的安全呢？那就是 TLS 协议。

### TLS/SSL

最初网景公司设计了 SSL (Secure Socket Layer) 安全套接层协议，主要用于解决传输安全问题，特点是：

- 机密性：用密钥对数据进行加密后再传输。
- 可靠性：对客户端、服务器的身份进行认证，防止数据发给黑客或是黑客发的。
- 完整性：对数据完整性进行检查，防止数据被篡改。

1999年，SSL 因为应用广泛，所以 IEFE 将其标准化，改名为传输层安全协议(Transport Layer Security, TLS)。所以有些文章把它叫做`TLS/SSL`，因为它是同一个东西的不同阶段。

### TLS/SSL 工作原理

TLS/SSL的功能实现主要依赖于三类基本算法：散列函数 Hash、对称加密和非对称加密。

客户端使用非对称加密与服务器进行通信，实现身份验证并协商对称加密使用的密钥，然后对称加密算法采用协商密钥对信息以及信息摘要进行加密通信，不同的节点之间采用的对称密钥不同，从而可以保证信息只能通信双方获取。

### PKI 体系

TLS 协议可以通过加密、身份验证、完整性检查来保证传输的安全。加密容易办到，但是身份验证和完整性如何保证呢？

验证肯定不能让服务器来完成，因为客户端或服务端可能正在和中间层黑客在通信。所以大厂合理推动了一个名叫 PKI 的基础设施，通过第三方来认证网站。

PKI 是一种遵循标准的, 利用公钥加密技术为电子商务的开展提供一套安全基础平台的技术和规范. 其基础建置包含认证中心 (Certification Authority, CA) 、注册中心 (Register Authority, RA) 、目录服务 (Directory Service, DS) 服务器.

- RA: 统计、审核用户的证书申请，然后发给 CA
- CA: 验证公钥的拥有者信息，并颁发证书
- DS: 将成功的证书公布到 DS

流程如下，为了方便统称为 CA：

![](./index/2.png)

a. 服务方 S 向 CA 提交 公钥、组织信息、个人信息(域名) 等信息并申请认证。
b. CA 通过线上、线下等多种手段验证申请者提供信息的真实性，如组织/企业是否合法、是否拥有域名所有权等。
c. 信息审核通过后，CA 会向申请者签发认证证书。

证书包括以下信息：申请者公钥、申请者组织/个人信息、签发机构 CA 的信息、有效时间、证书序列号等明文信息，同时包含一个签名。

签名算法是首先用哈希算法计算公开明文信息的信息摘要，然后用 CA 私钥对信息摘要进行加密，即得到签名。

d. 客户端 C 向 服务器 S 发出请求时，S 返回证书文件。
e. 客户端 C 读取证书中的明文信息，采用相同的哈希函数计算信息摘要，然后利用 CA 的公钥解密签名数据，对比证书的信息摘要，如果一致，则可以确认证书的合法性，即公钥合法。
f. 客户端验证证书的域名信息、有效时间等信息。
g. 客户端会内置信任 CA 的证书信息(包括公钥)，如果 CA 不被信息，就找不到对应的 CA 证书，证书会被判定非法。

在这个过程注意几点：

a.申请证书不需要提供私钥，确保私钥永远只能服务器掌握;
b.证书的合法性仍然依赖于非对称加密算法，证书主要是增加了服务器信息以及签名;
c.内置 CA 对应的证书称为根证书，颁发者和使用者相同，自己为自己签名，即自签名证书（为什么说"部署自签SSL证书非常不安全"）
d.证书=公钥+申请者与颁发者信息+签名;

证书链

如 CA 根证书和服务器证书中间增加一级证书机构，即中间证书，证书的产生和验证原理不变，只是增加一层验证，只要最后能够被任何信任的CA根证书验证合法即可。

a. 服务器证书 server.pem 的签发者为中间证书机构 inter，inter 根据证书 inter.pem 验证 server.pem 确实为自己签发的有效证书。
b. 中间证书 inter.pem 的签发 CA 为 root，root 根据证书 root.pem 验证 inter.pem 为自己签发的合法证书;
c. 客户端有个内置信任 CA 列表，含 root.pem 证书，因此服务器证书 server.pem 被信任。

二级证书结构存在的优势：

a.减少根证书结构的管理工作量，可以更高效的进行证书的审核与签发;

b.根证书一般内置在客户端中，私钥一般离线存储，一旦私钥泄露，则吊销过程非常困难，无法及时补救;

c.中间证书结构的私钥泄露，则可以快速在线吊销，并重新为用户签发新的证书;

d.证书链四级以内一般不会对 HTTPS 的性能造成明显影响。


证书吊销
CA 机构能够签发证书，同样也存在机制宣布以往签发的证书无效。证书使用者不合法，CA 需要废弃该证书;或者私钥丢失，使用者申请让证书无效。主要存在两类机制：CRL 与 OCSP。

Certificate Revocation List, 证书吊销列表(什么是证书吊销列表(CRL)？吊销列表起什么作用)，一个单独的文件。该吊销方式的优点是不需要频繁更新，但是不能及时吊销证书，因为 CRL 更新时间一般是几天，这期间可能已经造成了极大损失。

Online Certificate Status Protocol, 证书状态在线查询协议，一个实时查询证书是否吊销的方式。部分 CA 或大部分的自签 CA (根证书)都是未提供 CRL 或 OCSP 地址的，对于吊销证书会是一件非常麻烦的事情。

### HTTPS 的工作模式

1. 客户端发送 Client Hello 消息到服务器，包括 TLS 版本信息，支持的加密套件列表，支持的压缩算法列表，一个随机数A。
2. 服务端返回 Server Hello 消息到客户端，包括服务端选择的协议版本，加密套件，压缩算法等，还有一个随机数B。
3. 服务端返回一个证书 Server Certificate，然后发一个Server Hello Done 消息。
4. 客户端进行证书校验，产生随机数字 Pre-master，用证书中的公钥加密后发送给服务器，服务器通过私钥解密出来。
5. 客户端、服务器各自根据 A 、B、Pre-master 三个随机数生成相同的对称密钥。
6. 客户端发送 Change Cipher Spec，表示以后用对称密钥传输。并发送 Encrypted Handshake Message，它是根据之前所有握手信息(接受、发送)用对称密钥计算的。
7. 服务端收到后也返回 Change Cipher Spec(以后用对称密钥传输) 和 Encrypted Handshake Message。

### HTTPS 性能与优化

**1、HTTPS性能损耗**

(1).增加延时

分析前面的握手过程，一次完整的握手至少需要两端依次来回两次通信，至少增加延时2* RTT，利用会话缓存从而复用连接，延时也至少1* RTT*。

(2).消耗较多的CPU资源

除数据传输之外，HTTPS通信主要包括对对称加解密、非对称加解密(服务器主要采用私钥解密数据);压测 TS8 机型的单核 CPU：对称加密算法AES-CBC-256 吞吐量 600Mbps，非对称 RSA 私钥解密200次/s。不考虑其它软件层面的开销，10G 网卡为对称加密需要消耗 CPU 约17核，24核CPU最多接入 HTTPS 连接 4800;

静态节点当前10G 网卡的 TS8 机型的 HTTP 单机接入能力约为10w/s，如果将所有的HTTP连接变为HTTPS连接，则明显RSA的解密最先成为瓶颈。因此，RSA的解密能力是当前困扰HTTPS接入的主要难题。

**2、HTTPS接入优化**

(1).CDN接入

HTTPS 增加的延时主要是传输延时 RTT，RTT 的特点是节点越近延时越小，CDN 天然离用户最近，因此选择使用 CDN 作为 HTTPS 接入的入口，将能够极大减少接入延时。CDN 节点通过和业务服务器维持长连接、会话复用和链路质量优化等可控方法，极大减少 HTTPS 带来的延时。

(2).会话缓存

虽然前文提到 HTTPS 即使采用会话缓存也要至少1*RTT的延时，但是至少延时已经减少为原来的一半，明显的延时优化;同时，基于会话缓存建立的 HTTPS 连接不需要服务器使用RSA私钥解密获取 Pre-master 信息，可以省去CPU 的消耗。如果业务访问连接集中，缓存命中率高，则HTTPS的接入能力讲明显提升。当前TRP平台的缓存命中率高峰时期大于30%，10k/s的接入资源实际可以承载13k/的接入，收效非常可观。

(3).硬件加速

为接入服务器安装专用的SSL硬件加速卡，作用类似 GPU，释放 CPU，能够具有更高的 HTTPS 接入能力且不影响业务程序的。测试某硬件加速卡单卡可以提供35k的解密能力，相当于175核 CPU，至少相当于7台24核的服务器，考虑到接入服务器其它程序的开销，一张硬件卡可以实现接近10台服务器的接入能力。

(4).远程解密

本地接入消耗过多的 CPU 资源，浪费了网卡和硬盘等资源，考虑将最消耗 CPU 资源的RSA解密计算任务转移到其它服务器，如此则可以充分发挥服务器的接入能力，充分利用带宽与网卡资源。远程解密服务器可以选择 CPU 负载较低的机器充当，实现机器资源复用，也可以是专门优化的高计算性能的服务器。当前也是 CDN 用于大规模HTTPS接入的解决方案之一。

(5).SPDY/HTTP2

前面的方法分别从减少传输延时和单机负载的方法提高 HTTPS 接入性能，但是方法都基于不改变 HTTP 协议的基础上提出的优化方法，SPDY/HTTP2 利用 TLS/SSL 带来的优势，通过修改协议的方法来提升 HTTPS 的性能，提高下载速度等。

### HTTP 和 HTTPS 区别

1、HTTPS是加密传输协议，HTTP是名文传输协议;
2、HTTPS需要用到SSL证书，而HTTP不用;
3、HTTPS比HTTP更加安全，对搜索引擎更友好，利于SEO,参考：
（1）为保护用户隐私安全,谷歌优先索引HTTPS网页
（2）百度开放收录https站点，https全网化势不可挡
4、 HTTPS标准端口443，HTTP标准端口80;
5、 HTTPS基于传输层，HTTP基于应用层;
6、 HTTPS在浏览器显示绿色安全锁，HTTP没有显示;

总的来说HTTPS比HTTP更加安全，能够有效的保护网站用户的隐私信息安全，这也是为什么现在的HTTPS网站越来越多。如果不想你的网站因为数据泄露上头条的话，就赶快去沃通CA申请一张SSL证书为自己的网站实现HTTPS加密吧!

### 重放与篡改


### openssl

```
# 生成私钥
openssl genrsa -out private-key.pem 1024

# 创建证书申请文件，可以发给CA
openssl req -new -key private-key.pem -out csr.pem

# 自己签名，不被信任
openssl x509 -req -in csr.pem -signkey private-key.pem -out public-cert.pem

# 测试连接服务器过程
openssl s_client -connect 127.0.0.1:8000
```

### nodejs 创建 https 服务

nodejs 配置 https 很简单，只需要准备好证书和密钥后，用 https 模块配置一下 options。

```js
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),  // 密钥文件
  cert: fs.readFileSync('cert.pem') // 证书文件
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
```

## HTTP 2.0

## 参考资料

- [HTTP Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)
- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
https://developer.mozilla.org/zh-CN/docs/Web/HTTP
- [标识互联网上的内容](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
- [HTTP 协议中 URI 和 URL 有什么区别？](https://www.zhihu.com/question/21950864)
- [Web性能权威指南 https://hpbn.co/](https://hpbn.co/)
- [HTTPS和HTTP的区别是什么？](https://www.wosign.com/faq/faq2016-0301-02.htm)
- [HTTPS加密协议详解系列文章](https://www.wosign.com/faq/faq2016-0309-01.htm)
- [极客时间：趣谈网络协议]