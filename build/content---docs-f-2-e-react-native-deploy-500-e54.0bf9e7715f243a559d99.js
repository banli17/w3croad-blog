(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return p}),n.d(t,"rightToc",function(){return i}),n.d(t,"default",function(){return u});n(0);var r=n(245);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={title:"react-native ios发布",date:new Date("2018-07-04T05:17:29.000Z"),toc:!0},i=[{value:"参考文章",id:"参考文章",children:[]},{value:"加速审核",id:"加速审核",children:[]},{value:"在 itunes Connect 中新建 app",id:"在-itunes-connect-中新建-app",children:[]},{value:"生成icon图标，屏幕截图，启动页等图片",id:"生成icon图标，屏幕截图，启动页等图片",children:[]},{value:"打包提交Appstore",id:"打包提交appstore",children:[{value:"Transporter Error Output: ERROR ITMS-90087: \"Unsupported Architectures. The executable for AppName.app/Frameworks/Usabilla.framework contains unsupported architectures 'x86_64, i386'.\"",id:"transporter-error-output-error-itms-90087-unsupported-architectures-the-executable-for-appnameappframeworksusabillaframework-contains-unsupported-architectures-x86_64-i386",children:[]}]}],c={rightToc:i},l="wrapper";function u(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(l,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"参考文章"},"参考文章"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"http://www.jianshu.com/p/1d03f8f31f58?nomobile=yes"}),"http://www.jianshu.com/p/1d03f8f31f58?nomobile=yes"))),Object(r.b)("h2",{id:"加速审核"},"加速审核"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://developer.apple.com/contact/app-store/?topic=expedite"}),"https://developer.apple.com/contact/app-store/?topic=expedite"))),Object(r.b)("p",null,"ios版本的发布太麻烦了，主要分为以下几个步骤:"),Object(r.b)("h2",{id:"在-itunes-connect-中新建-app"},"在 itunes Connect 中新建 app"),Object(r.b)("p",null,"进入",Object(r.b)("a",{href:"https://itunesconnect.apple.com/login",target:"_blank"},"Itunes Connect官网"),"，登录，注意如果有多个账号不要登录错了。选择",Object(r.b)("inlineCode",{parentName:"p"},"我的App"),"。"),Object(r.b)("p",null,"然后点击左上角的加号，添加一个app。注意这里有个问题，ios 包名必须是 ",Object(r.b)("inlineCode",{parentName:"p"},"com.xxx.yyy"),"形式，不能是 ",Object(r.b)("inlineCode",{parentName:"p"},"com.xxx"),"，否则套装ID会有问题。"),Object(r.b)("h2",{id:"生成icon图标，屏幕截图，启动页等图片"},"生成icon图标，屏幕截图，启动页等图片"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"生成icon图标")),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"http://ydimage.yidianhulian.com/"}),"http://ydimage.yidianhulian.com/")," "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"生成启动页")," "),Object(r.b)("p",null,"使用App icon gear 工具"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"生成启动页")," "),Object(r.b)("p",null,"直接用",Object(r.b)("inlineCode",{parentName:"p"},"xcode sumulator"),"模拟器打开后，",Object(r.b)("inlineCode",{parentName:"p"},"command + 1"),"，然后 ",Object(r.b)("inlineCode",{parentName:"p"},"command + s")," 保存屏幕截图，即使模拟器超出了屏幕也不要紧，会自动截完整。最后的截图会在电脑的桌面上。"),Object(r.b)("p",null,"要注意的是，如果外接了显示器，一定要把模拟器拖到mac原显示器上，否则尺寸会不对。"),Object(r.b)("h2",{id:"打包提交appstore"},"打包提交Appstore"),Object(r.b)("h3",{id:"transporter-error-output-error-itms-90087-unsupported-architectures-the-executable-for-appnameappframeworksusabillaframework-contains-unsupported-architectures-x86_64-i386"},"[Transporter Error Output]",": ERROR ITMS-90087: \"Unsupported Architectures. The executable for AppName.app/Frameworks/Usabilla.framework contains unsupported architectures '","[x86_64, i386]","'.\""),Object(r.b)("p",null,"In Targets -> build Phases -> add a Run Script step just after the copy file step of Usabilla"),Object(r.b)("p",null,"shell: /bin/sh"),Object(r.b)("p",null,"file"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),'if [ "${CONFIGURATION}" = "Release" ]; then\n\n\nAPP_PATH="${TARGET_BUILD_DIR}/${WRAPPER_NAME}"\n\n# This script loops through the frameworks embedded in the application and\n# removes unused architectures.\nfind "$APP_PATH" -name \'*.framework\' -type d | while read -r FRAMEWORK\ndo\nFRAMEWORK_EXECUTABLE_NAME=$(defaults read "$FRAMEWORK/Info.plist" CFBundleExecutable)\nFRAMEWORK_EXECUTABLE_PATH="$FRAMEWORK/$FRAMEWORK_EXECUTABLE_NAME"\necho "Executable is $FRAMEWORK_EXECUTABLE_PATH"\n\nEXTRACTED_ARCHS=()\n\nfor ARCH in $ARCHS\ndo\necho "Extracting $ARCH from $FRAMEWORK_EXECUTABLE_NAME"\nlipo -extract "$ARCH" "$FRAMEWORK_EXECUTABLE_PATH" -o "$FRAMEWORK_EXECUTABLE_PATH-$ARCH"\nEXTRACTED_ARCHS+=("$FRAMEWORK_EXECUTABLE_PATH-$ARCH")\ndone\n\necho "Merging extracted architectures: ${ARCHS}"\nlipo -o "$FRAMEWORK_EXECUTABLE_PATH-merged" -create "${EXTRACTED_ARCHS[@]}"\nrm "${EXTRACTED_ARCHS[@]}"\n\necho "Replacing original executable with thinned version"\nrm "$FRAMEWORK_EXECUTABLE_PATH"\nmv "$FRAMEWORK_EXECUTABLE_PATH-merged" "$FRAMEWORK_EXECUTABLE_PATH"\n\ndone\n\nfi\n')),Object(r.b)("p",null,"This script is deleting the simulator build out of all libraries (just for Usabilla) only when the build is a Release one."))}u.isMDXComponent=!0},245:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s});var r=n(0),a=n.n(r),o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},u=function(e){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),c=p(t);return a.a.createElement(c[o+"."+n]||c[n]||l[n]||r,t?Object.assign({},i,{components:t}):i)};function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);