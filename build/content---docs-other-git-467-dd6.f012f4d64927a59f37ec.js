(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return l}),n.d(t,"rightToc",function(){return b}),n.d(t,"default",function(){return p});n(0);var i=n(301);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={title:"git使用总结",date:new Date("2018-10-19T10:32:00.000Z"),tags:null,toc:!0},b=[{value:"git分支",id:"git分支",children:[]},{value:"其它",id:"其它",children:[]},{value:"远程git地址修改了",id:"远程git地址修改了",children:[]},{value:"服务器上的git",id:"服务器上的git",children:[{value:"生成SSH公钥",id:"生成ssh公钥",children:[]}]},{value:"初始化",id:"初始化",children:[]},{value:"切换版本",id:"切换版本",children:[]},{value:"创建和合并分支",id:"创建和合并分支",children:[]},{value:"回退本地和远程分支",id:"回退本地和远程分支",children:[]},{value:".gitignore文件",id:"gitignore文件",children:[]},{value:"将本地代码同步到github",id:"将本地代码同步到github",children:[]},{value:"问题",id:"问题",children:[]},{value:"参考资料",id:"参考资料",children:[]},{value:"一些报错的解决方法",id:"一些报错的解决方法",children:[]},{value:"常用的图形化软件",id:"常用的图形化软件",children:[]},{value:"学习资料",id:"学习资料",children:[]}],c={rightToc:b},o="wrapper";function p(e){var t=e.components,n=a(e,["components"]);return Object(i.b)(o,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"git分支"},"git分支"),Object(i.b)("p",null,"1、git保存的是每个文件的快照。git commit 第一次提交前，会计算每个子目录的校验和，然后将这些目录保存成树对象。之后创建的提交对象，包含提交信息和这个树对象的指针。"),Object(i.b)("p",null,"2、提交的对象看起来像下图。"),Object(i.b)("p",null,Object(i.b)("img",r({parentName:"p"},{src:"./git/3-1.png",alt:null}))),Object(i.b)("p",null,"3、多次提交之后像下面这样。"),Object(i.b)("p",null,Object(i.b)("img",r({parentName:"p"},{src:"./git/3-2.png",alt:null}))),Object(i.b)("p",null,"4、分支实际是指向 commit 对象的可变指针。git 会使用 master 作为分支的默认名。多次提交后，HEAD指针会指向最后一次提交对象的 master 分支。每次提交，指针会向前移动。"),Object(i.b)("p",null,Object(i.b)("img",r({parentName:"p"},{src:"./git/3-3.png",alt:null}))),Object(i.b)("p",null,"5、创建分支"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git branch testing\n")),Object(i.b)("p",null,"创建后，HEAD还是指向 master 分支，切换分支需要使用下面命令。"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git checkout testing\n")),Object(i.b)("p",null,"6、每个分支都是相互独立的，可以在各个分支进行修改提交，只需要在最后合适的时候，将分支合并即可。"),Object(i.b)("h2",{id:"其它"},"其它"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"# 将远程分支拉取到本地\ngit fetch origin dev\ngit checkout -b dev origin/dev\ngit pull origin dev\n\n# 删除远程分支\ngit push origin --delete dev\n\ngit branch -a\n")),Object(i.b)("h2",{id:"远程git地址修改了"},"远程git地址修改了"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"git remote remove origin\ngit remote add origin [new_git_url]\ngit pull origin [branch_name]\ngit push \n")),Object(i.b)("h2",{id:"服务器上的git"},"服务器上的git"),Object(i.b)("h3",{id:"生成ssh公钥"},"生成SSH公钥"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"ssh-keygen\n")),Object(i.b)("p",null,"通过下面命令生成秘钥，会存储在用户主目录下的",Object(i.b)("inlineCode",{parentName:"p"},"~/.ssh"),"目录。",Object(i.b)("inlineCode",{parentName:"p"},"id_dsa"),"是秘钥，",Object(i.b)("inlineCode",{parentName:"p"},"id_dsa.pub"),"是公钥。"),Object(i.b)("p",null,"在window下，",Object(i.b)("inlineCode",{parentName:"p"},"ssh-keygen"),"如果不是内部命令，需要将",Object(i.b)("inlineCode",{parentName:"p"},"ssh-keygen.exe"),"的路径",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files\\Git\\usr\\bin"),"加入到环境变量中。"),Object(i.b)("h2",{id:"初始化"},"初始化"),Object(i.b)("p",null,"生成秘钥"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),'ssh-keygen\n\ngit config --global user.name "John Doe"\ngit config --global user.email johndoe@example.com\n')),Object(i.b)("h2",{id:"切换版本"},"切换版本"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"git log 查看当前版本之前的提交记录，如果回退了，就看不到后退之后提交的记录了。\ngit reflog  可以查看所有分支的所有操作记录，包括 commit 和 reset的操作。\ngit checkout fdss22\n")),Object(i.b)("h2",{id:"创建和合并分支"},"创建和合并分支"),Object(i.b)("p",null,"1、新建w0分支开发新需求。"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"// 新建分支\ngit checkout -b w0  // -b表示创建分支，checkout表示切换到分支\n\n// 相当于下面2条命令\ngit branch w0  // 创建分支\ngit checkout w0  // 切换到分支\n")),Object(i.b)("p",null,"2、开发完新需求后，在w0下提交(commit)分支内容，再切换到主分支，将w0分支合并到主分支。"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),'// branch w0下\ngit add .\ngit commit -m "update"\n\n// 切换到master,合并w0\ngit checkout master\ngit merge w0\n')),Object(i.b)("p",null,"3、删除分支w0。"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"git branch -d w0  // 删除w0分支\n")),Object(i.b)("p",null,"4、如果产生冲突时，则处理之后再add提交。这样我们就可以在master分支发布更新后的项目了。"),Object(i.b)("p",null,"其它一些命令:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"# 删除远程分支，feature是分支名\ngit push origin :feature\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"其它命令")),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"# 查看分支\ngit branch 查看本地分支\ngit branch -a 查看本地分支和远程分支\n\n# 修改分支名称\ngit branch -m old_name new_name\n")),Object(i.b)("h2",{id:"回退本地和远程分支"},"回退本地和远程分支"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"# 本地版本回退\ngit reset --hard commit_id\n\n# 远程分支回退\ngit push origin HEAD --force \n# 或\n")),Object(i.b)("h2",{id:"gitignore文件"},".gitignore文件"),Object(i.b)("p",null,"1、在git项目根目录新建文件",Object(i.b)("inlineCode",{parentName:"p"},".gitignore"),"，内容为要忽略的文件或目录："),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"**/node_modules\n**/android/app/build\n**/android/build\n**/android/.gradle\n**/android/.idea\n.idea/\n\n**/local.properties\n\n.gitignore\n")),Object(i.b)("p",null,"这样在提交的时候，就会忽略上面的这些文件。"),Object(i.b)("p",null,"2、如果后来修改了",Object(i.b)("inlineCode",{parentName:"p"},".gitignore"),"文件，默认git不会根据新的规则执行，需要执行下面命令："),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),'# 有时候需要突然修改 .gitignore 文件，随后要立即生效\n\ngit rm -r --cached .  #清除缓存  \ngit add . #重新trace file  \ngit commit -m "update .gitignore" #提交和注释  \ngit push origin master #可选，如果需要同步到remote上的话  \n')),Object(i.b)("h2",{id:"将本地代码同步到github"},"将本地代码同步到github"),Object(i.b)("p",null,"我本地写了一些学习时的demo，想要同步到github上面去。"),Object(i.b)("p",null,"1、首先在github上新建一个项目，比如",Object(i.b)("inlineCode",{parentName:"p"},"w3croad-demo"),"。"),Object(i.b)("p",null,"2、在我本地的项目根目录执行下面命令。"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),'// 1.提交本地代码\ngit init\ngit add .\ngit commit -m ""\n\n// 2.将本地项目和github的w3croad-demo项目连起来\ngit remote add origin git@github.com:banli17/w3croad-demo.git\n\n// 3.pull一下\n// 如果报错fatal: refusing to merge unrelated histories，要加--allow-unrelated-histories\ngit pull origin master --allow-unrelated-histories\n\n// 4.修复冲突并push\ngit push --set-upstream origin master  // 以后就可以直接git push\n')),Object(i.b)("p",null,"如果我一开始就时从github上拉取下来的新项目，就没有这么多问题了。"),Object(i.b)("h2",{id:"问题"},"问题"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"本地新建了很多文件夹和文件，",Object(i.b)("inlineCode",{parentName:"li"},"commit")," 提交时报错 ",Object(i.b)("inlineCode",{parentName:"li"},"error: pathspec 'html' did not match any file(s) known to git."),"。")),Object(i.b)("p",null,"直接执行下面语句："),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),'git commit -m "提交"\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"不能直接 ",Object(i.b)("inlineCode",{parentName:"li"},"push"),"，需要先 ",Object(i.b)("inlineCode",{parentName:"li"},"commit"),"。")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"git status")," 时，中文转义了，解决方法是让 ",Object(i.b)("inlineCode",{parentName:"li"},"git")," 不处理 ",Object(i.b)("inlineCode",{parentName:"li"},"utf-8")," 文件名。")),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"git config --global core.quotepath false\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"删除github上所有文件")),Object(i.b)("h2",{id:"参考资料"},"参考资料"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"清空提交记录",Object(i.b)("a",r({parentName:"li"},{href:"https://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github"}),"https://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github")),Object(i.b)("li",{parentName:"ul"},"教学全程使用git实现协同开发"),Object(i.b)("li",{parentName:"ul"},"深入学习和使用git"),Object(i.b)("li",{parentName:"ul"},"代码管理思想")),Object(i.b)("h2",{id:"一些报错的解决方法"},"一些报错的解决方法"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1. Updates were rejected because the tip of your current branch is behind")),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"git push -u origin master -f\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"2. git warning: LF will be replaced by CRLF in")),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"git config core.autocrlf false\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"3. windows上git提交的内容，在mac上报错了。env: bash\\r: No such file or directory")),Object(i.b)("p",null,"如果上Mac"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"brew install dos2unix # Installs dos2unix Mac\nfind . -type f -exec dos2unix {} \\; # recursively removes windows related stuff\n")),Object(i.b)("p",null,"如果上Linux"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install -y dos2unix # Installs dos2unix Linux\nsudo find . -type f -exec dos2unix {} \\; # recursively removes windows related stuff\n")),Object(i.b)("p",null,"之后确保windows上首先配置一下提交始终使用linux行结束符\\n。"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git config --global core.autocrlf input\n")),Object(i.b)("h2",{id:"常用的图形化软件"},"常用的图形化软件"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://www.sourcetreeapp.com/"}),"sourcetree支持mac和windows")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://git-scm.com/downloads/guis/"}),"GUI Clients"))),Object(i.b)("h2",{id:"学习资料"},"学习资料"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://git-scm.com/book/zh/v2"}),"git book pro"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"下面只是我学习时的笔记，包括一些不好懂内容的自己的理解，推荐大家以上面的学习资料自学。遇到不懂的再看我的笔记看我有没有遇到过。")))}p.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",function(){return b}),n.d(t,"b",function(){return u});var i=n(0),r=n.n(i),a=r.a.createContext({}),l=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},b=function(e){var t=l(e.components);return r.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=function(e){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,b=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["components","mdxType","originalType","parentName"]),c=l(t),p=n,u=c[a+"."+p]||c[p]||o[p]||i;return t?r.a.createElement(u,Object.assign({},b,{components:t})):r.a.createElement(u,b)};function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b[c]="string"==typeof e?e:i,l[1]=b;for(var u=2;u<a;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);