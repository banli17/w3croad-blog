(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return i}),n.d(t,"rightToc",function(){return l}),n.d(t,"default",function(){return b});n(0);var a=n(217);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={title:"react-native 常见问题汇总",date:new Date("2018-12-20T20:26:43.000Z"),toc:!0},l=[{value:"找不到 extra -> support library？",id:"找不到-extra---support-library？",children:[]},{value:"android安装了genymotion插件后，看不到genymotion红按钮。",id:"android安装了genymotion插件后，看不到genymotion红按钮。",children:[]},{value:"修改genymotion的hosts文件",id:"修改genymotion的hosts文件",children:[]},{value:"参考文章",id:"参考文章",children:[]},{value:"Network request failed",id:"network-request-failed",children:[]}],c={rightToc:l},p="wrapper";function b(e){var t=e.components,n=r(e,["components"]);return Object(a.b)(p,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",null,Object(a.b)("a",o({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"找不到-extra---support-library？"})),Object(a.b)("a",o({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#找不到-extra---support-library？"}),"#"),"找不到 ",Object(a.b)("inlineCode",{parentName:"h3"},"extra -> support library"),"？"),Object(a.b)("p",null,"因为这个包 google 准备将它移除掉。不推荐使用了。如果需要使用，可以到",Object(a.b)("a",o({parentName:"p"},{href:"http://www.mvnrepository.com/artifact/com.android.support/support-v4?repo=google"}),"mvnrepository"),"下载对应的aar版本。然后将它的后缀名改成 .zip。解压后目录里有个 ",Object(a.b)("inlineCode",{parentName:"p"},"classes.jar"),"。"),Object(a.b)("h2",null,Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"android安装了genymotion插件后，看不到genymotion红按钮。"})),Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#android安装了genymotion插件后，看不到genymotion红按钮。"}),"#"),"android安装了genymotion插件后，看不到genymotion红按钮。"),Object(a.b)("p",null,"可能是toolbar没有打开，在",Object(a.b)("inlineCode",{parentName:"p"},"菜单栏 -> View -> ToolBar"),"打开。然后点击genymotion按钮，选择它的安装地址：",Object(a.b)("inlineCode",{parentName:"p"},"/Applications/Genymotion.app"),"。"),Object(a.b)("h2",null,Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"修改genymotion的hosts文件"})),Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#修改genymotion的hosts文件"}),"#"),"修改genymotion的hosts文件"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),'adb shell\nmount -o remount,rw /system\necho "10.71.34.1   devmobservices" >> /etc/hosts\n')),Object(a.b)("h2",null,Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"参考文章"})),Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#参考文章"}),"#"),"参考文章"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"fetch() and the missing Cookie on React Native Android"),Object(a.b)("li",{parentName:"ul"},"解决react native使用fetch函数在ios9报network request failed的问题")),Object(a.b)("p",null,"使用pod install\n被卡住:Updating local specs repositories\n一种原因：pod install 被墙了，换成pod install --verbose --no-repo-update"),Object(a.b)("p",null,"另外一种原因：cocoapods是git使用管理，可能由于某种原因git存在了修改，再使用pod install的时候，会提示“在更新或合并之前解决修改（大概这个意思）”。解决办法：①解决修改，然后再pod install。②或者直接删除$HOME.cocoapods/repos/下面的master，再pod install 重新clone pod库。"),Object(a.b)("p",null,"还有一种原因，就是git更新超慢，导致的错觉"),Object(a.b)("h2",null,Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"network-request-failed"})),Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#network-request-failed"}),"#"),"Network request failed"),Object(a.b)("p",null,"最新的rn用chrome调试时，ajax请求发送报错，说是跨域请求失败。解决方法是另外打开一个能跨域的chrome模式进行调试。"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"open -n /Applications/Google\\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/banli/MyChromeDevUserData/\n")),Object(a.b)("p",null,"将上面 banli 换成自己的 mac 名称。"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'brew update && brew cask install react-native-debugger\nopen "rndebugger://set-debugger-loc?host=localhost&port=8081"\n')),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"xocde 下载地址: ",Object(a.b)("a",o({parentName:"p"},{href:"https://developer.apple.com/download/more"}),"https://developer.apple.com/download/more"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"模拟器Home键: ",Object(a.b)("inlineCode",{parentName:"p"},"command + shift + h"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"is busy: Processing symbol files")))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"xcode"),"真机调试的时候，提示",Object(a.b)("inlineCode",{parentName:"p"},"* is busy: Processing symbol files"),"。解决方法如下：\n1. 尝试重新拔插测试设备。\n2. 如果“1”不起作用，重启Xcode尝试。\n3. 如果“2”不起作用，重启手机，然后尝试。"),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"library not found from ")),Object(a.b)("p",null,'在编译的时候，有时候报这个错误 "library not found for - "。由于是我们在项目中使用了一些第三方的库，就比如我再使用百度的静态库文件的时候，报出的这个错误。\n当xcode在编译的时候却找不到这个库，从而导致如此。'),Object(a.b)("p",null,"所以我们要让xcode知道这个库文件在哪里，从而在编译的时候轻松的找到它。"),Object(a.b)("p",null,"解决办法："),Object(a.b)("p",null,"获取 库文件所在的那个文件夹 路径，添加到 Target的Build Settings界面。或者不需要的话，将 ",Object(a.b)("inlineCode",{parentName:"p"},"Build Phases")," 里的 ",Object(a.b)("inlineCode",{parentName:"p"},"Link Binary With Libraries"),"相关库删除。"),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"No bundle URL present")),Object(a.b)("p",null,"1、可能开了多个终端\n2、可能翻墙了"),Object(a.b)("ol",{start:6},Object(a.b)("li",{parentName:"ol"},"The app ID cannot be registered to your development team")),Object(a.b)("p",null,"xcode 真机安装报错，",Object(a.b)("inlineCode",{parentName:"p"},'The app ID "*******" cannot be registered to your development team. Change your bundle identifier to a unique string to try again'),"。"),Object(a.b)("p",null,"大概的意思就是appid被其他的项目占据了。导致原因是因为我之前真机运行过一个项目，然后被卸载了，重建之后appid依然被之前的项目占据，解决办法就是修改 ",Object(a.b)("inlineCode",{parentName:"p"},"General"),"里的 ",Object(a.b)("inlineCode",{parentName:"p"},"Bundle Ientifier"),"。"),Object(a.b)("ol",{start:7},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Signing for requires a development team. Select a development team in the project editor.\n解决方法：单击工程名 -》Signing -》 Team -》 选择对应的Account（如果没有Account，需要主动创建一个）")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Code signing is required for product type Unit Test Bundle in SDK iOS 8.0\n首先选择测试项目，"))),Object(a.b)("p",null,"参考资料：",Object(a.b)("a",o({parentName:"p"},{href:"https://stackoverflow.com/questions/26109851/code-signing-is-required-for-product-type-unit-test-bundle-in-sdk-ios-8-0"}),"https://stackoverflow.com/questions/26109851/code-signing-is-required-for-product-type-unit-test-bundle-in-sdk-ios-8-0")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"ld: file not found: /Users/banli/Library/Developer/Xcode/DerivedData/sucaiapp")),Object(a.b)("p",null,"1、点击菜单的",Object(a.b)("inlineCode",{parentName:"p"},"Product -> Clean"),"，然后重新build。\n2、或者选择 ","[your project's Tests]","，然后选择 ",Object(a.b)("inlineCode",{parentName:"p"},"General -> Host Application"),"，选择后重新 ",Object(a.b)("inlineCode",{parentName:"p"},"Build"),"。\n",Object(a.b)("a",o({parentName:"p"},{href:"https://stackoverflow.com/questions/26665196/ld-file-not-found-linker-command-failed-with-exit-code-1-use-v-to-see-invoca"}),"https://stackoverflow.com/questions/26665196/ld-file-not-found-linker-command-failed-with-exit-code-1-use-v-to-see-invoca")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"appid 登录时 incorrect verification code apple id")),Object(a.b)("p",null,"登录",Object(a.b)("a",o({parentName:"p"},{href:"https://developer.apple.com/account/#/welcome"}),"https://developer.apple.com/account/#/welcome")," 时，明明是正确的码，但还是老报这个错误。解决方法是：先点开苹果的一个软件，比如ibooks，icloud等。登录appid一下，验证通过后，再登录网页即可。"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"提高ios审核率")),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://zhuanlan.zhihu.com/p/22572268"}),"https://zhuanlan.zhihu.com/p/22572268"),"\n",Object(a.b)("a",o({parentName:"p"},{href:"http://wetest.qq.com/ios/?from=content_zhihuzhuanlan"}),"http://wetest.qq.com/ios/?from=content_zhihuzhuanlan")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"一键生成appicon多个尺寸的图标\n",Object(a.b)("a",o({parentName:"p"},{href:"http://ydimage.yidianhulian.com/"}),"http://ydimage.yidianhulian.com/")," ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The filename 未命名.ipa in the package contains an invalid character(s). The valid characters are:A-Z\n上传app的时候，archive打包的名字不能有中文")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"提交版本的时候，一直显示在验证"))),Object(a.b)("p",null,"网要翻墙，找一个美国的vpn。"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"提交成功后，在itunesconnect 里面没有显示")),Object(a.b)("p",null,"查看邮件，里面会有提示，一般是没有在info.plist里设置权限: ",Object(a.b)("a",o({parentName:"p"},{href:"http://www.jianshu.com/p/067cb1ff8689"}),"http://www.jianshu.com/p/067cb1ff8689")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"iOS Build Fail 但是却没有红色警告提示！")),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"http://blog.csdn.net/xjh093/article/details/52636563"}),"http://blog.csdn.net/xjh093/article/details/52636563")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"nw_connection_get_connected_socket 109 Connection has no connected handler")),Object(a.b)("p",null,'解决方法： Xcode menu -> Product -> Edit Scheme  > arguments >  Environment Variables -> Add -> Name: "OS_ACTIVITY_MODE", Value:"disable" -> Run your app again '),Object(a.b)("p",null,"参考网址：",Object(a.b)("a",o({parentName:"p"},{href:"https://stackoverflow.com/questions/44081674/react-native-connection-has-no-connection-handler-error-meaning"}),"https://stackoverflow.com/questions/44081674/react-native-connection-has-no-connection-handler-error-meaning")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"xocde 模拟器调试的时候，代码改了，但是视图一直不变化")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"rm -rf /usr/local/var/run/watchman && brew uninstall watchman && brew install watchman\n")),Object(a.b)("p",null,"注意将网络代理关掉，并重启模拟器和命令行。"),Object(a.b)("p",null,"参考文章： ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/10889"}),"https://github.com/facebook/react-native/issues/10889")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"CocoaPods升级")),Object(a.b)("p",null,"有时候，使用pod install 提示错误 ",Object(a.b)("inlineCode",{parentName:"p"},"The"),"项目",Object(a.b)("inlineCode",{parentName:"p"},"None of your spec sources contain a spec satisfying the dependency:"),"NIMSDK (= 4.9.0)",Object(a.b)("inlineCode",{parentName:"p"},"."),"。"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"pod install --repo-update  // 运行这个之后，再 pod install\n\nsudo gem install cocoapods\n")),Object(a.b)("p",null,"需要将之前",Object(a.b)("inlineCode",{parentName:"p"},"Build Phases -> libPods..a")," 删掉，再 ",Object(a.b)("inlineCode",{parentName:"p"},"pod install")," ，会自动加上这个 ",Object(a.b)("inlineCode",{parentName:"p"},"libPods...a")," 文件。(可能需要在左侧菜单library里添加.xcodeproj文件)"),Object(a.b)("p",null,"com.android.ddmlib.InstallException: Failed to establish session\n打开miui的开发者选项，关闭miui优化"))}b.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});var a=n(0),o=n.n(a),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){return o.a.createElement(o.a.Fragment,{},e.children)}},b=function(e){var t=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=i(t);return o.a.createElement(c[r+"."+n]||c[n]||p[n]||a,t?Object.assign({},l,{components:t}):l)};function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);