(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return l}),a.d(t,"rightToc",function(){return c}),a.d(t,"default",function(){return p});a(0);var n=a(217);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l={id:"index",title:"HTML 基础知识总结",sidebar_label:"HTML"},c=[{value:"元素",id:"元素",children:[{value:"文档元信息",id:"文档元信息",children:[]},{value:"语义相关内容",id:"语义相关内容",children:[]},{value:"链接",id:"链接",children:[]},{value:"替换型元素",id:"替换型元素",children:[]},{value:"表单",id:"表单",children:[]},{value:"表格",id:"表格",children:[]},{value:"总集",id:"总集",children:[]}]},{value:"语言",id:"语言",children:[{value:"实体",id:"实体",children:[]},{value:"命名空间",id:"命名空间",children:[]}]},{value:"补充标准",id:"补充标准",children:[]},{value:"面试题",id:"面试题",children:[{value:"DOCTYPE有什么用？",id:"doctype有什么用？",children:[]}]}],i={rightToc:c},d="wrapper";function p(e){var t=e.components,a=b(e,["components"]);return Object(n.b)(d,r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"元素"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#元素"}),"#"),"元素"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"文档元信息"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#文档元信息"}),"#"),"文档元信息"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"语义相关内容"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#语义相关内容"}),"#"),"语义相关内容"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"语义类标签是什么，使用它有什么好处？")),Object(n.b)("p",null,"语义类标签是纯文本的补充，比如标题、自然段、章节、列表等，这些内容无法用纯文字表达，需要语义标签代为表达。"),Object(n.b)("p",null,"如果说 HTML 用于软件界面，实际是几乎没有语义的，可以直接使用 div 和 span。"),Object(n.b)("p",null,"正确使用语义类标签的好处：\n1. 语义类标签对开发者更友好，可以增强可读性，即使没有 CSS，开发者也可以清晰的看出网页的结构，便于团队开发和维护。\n1. 适合机器阅读，更适合 SEO，可以让搜索引擎更好的获取更多有效信息，提升网页搜索量。并且语义类可以支持读屏软件，根据文章自动生成目录等。"),Object(n.b)("p",null,"其实 HTML 和人类语言一样，如果说话的适合没有语气、没有停顿、没有重点会让人很难理解。而 HTML 面对的是人和机器(读屏软件、搜索引擎等)，没有语义也会很难阅读和理解。"),Object(n.b)("p",null,"使用场景:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"作为自然语言和纯文本的补充，用来表达一定的结构或者消除歧义。")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-html"}),'\x3c!-- <ruby> 元素由一个或多个需要解释/发音的字符和一个提供该信息的 <rt> 元素组成\n       还包括可选的 <rp> 元素，定义当浏览器不支持 "ruby" 元素时显示的内容。 --\x3e\n<ruby>\n汉 <rp>(</rp><rt>Han</rt><rp>)</rp>\n字 <rp>(</rp><rt>zi</rt><rp>)</rp>\n</ruby>\n')),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-html"}),"\x3c!-- 消除歧义 --\x3e\n<em>今天</em>我吃了一个苹果。\n今天<em>我</em>吃了一个苹果。\n今天我吃了<em>一个</em>苹果。\n今天我吃了一个<em>苹果</em>。\n")),Object(n.b)("p",null,"em 表示重音，和 strong 的区别。"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"文章标题摘要：文章的结构")),Object(n.b)("p",null,"语义化的HTML能够支持自动生成目录结构，HTML标准中还专门规定了生成目录结构的算法，即使我们并不打算深入实践语义，也应该尽量在大的层面上保证这些元素的语义化使用。"),Object(n.b)("p",null,"首先我们需要形成一个概念，一篇文档会有一个树形的目录结构，它由各个级别的标题组成。这个树形结构 可能不会跟HTML元素的嵌套关系一致。"),Object(n.b)("p",null,"比如: "),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-html"}),"\x3c!-- - JavaScript对象 --\x3e\n\x3c!-- - 我们需要模拟类吗? --\x3e\n<h1></h1>  \n<h2></h2>  \n\n\x3c!-- JavaScript对象 —— 我们需要模拟类吗? --\x3e\n<hgroup>\n    <h1></h1>  \n    <h2></h2>  \n</hgroup>\n")),Object(n.b)("p",null,"上面两端代码生成的标题含义是不同的，前者 h2 属于 h1 的子标题，而后者 h2 是 h1 的副标题。"),Object(n.b)("p",null,"section 不仅是一个有语义的 div，而且会改变 h1-h6 的语义，可以让 h1-h6 标题降一级。所以前面的例子可以写成："),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-html"}),"<section>\n    <h1></h1>\n    <section>\n        <h1></h1>\n    </section>\n</section>\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"适合机器阅读的整体结构：如浏览器的阅读模式，搜索引擎收录，读屏软件。")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-html"}),"<body>\n    <header>\n        <nav> ...... </nav>\n    </header>\n    <aside>\n        <nav> ...... </nav>\n    </aside>\n    <section>......</section>\n    <section>......</section>\n    <section>......</section>\n    <footer>\n        <address>......</address>\n    </footer>\n</body>\n")),Object(n.b)("p",null,"article是一种特别的结构，它表示具有一定独立性质的文章。所以，article和body 具有相似的结构，同时，一个HTML页面中，可能有多个article存在。一个典型的场景是多篇新闻展示在同一个新闻专题页面中，这种类似报纸的多文章结构适合用article来组织。"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-html"}),"<body>\n      <header>......</header>\n      <article>\n          <header>......</header>\n          <section>......</section>\n          <section>......</section>\n          <section>......</section>\n          <footer>......</footer>\n      </article>\n      <article>\n          ......\n      </article>\n      <article> \n         ...... \n      </article>\n      <footer>\n          <address></address>\n      </footer>\n</body>\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"header 通常出现在前部，表示导航或者介绍性的内容。"),Object(n.b)("li",{parentName:"ul"},"footer，通常出现在尾部，包含一些作者信息、相关链接、版权信息等。")),Object(n.b)("p",null,"header、footer 一般作为 body 或 article 的直接子元素，但是标准中并没有明确规定，footer也可以和 aside，nav，section相关联(header不存在关联问题)。"),Object(n.b)("p",null,"aside表示跟文章主体不那么相关的部分，它可能包含导航、广告等工具性质的内容。侧边栏是aside，aside不一定是侧边栏。"),Object(n.b)("p",null,"aside和header中都可能出现导航(nav标签)，二者的区别是，header中的导航多数是到文章自己的目 录，而aside中的导航多数是到关联页面或者是整站地图。"),Object(n.b)("p",null,"address 表示文章(作者) 的联系方式。address 只关联 article 和 body。"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"标签名"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"描述"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"abbr")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"表示缩写  ",Object(n.b)("inlineCode",{parentName:"td"},'<abbr title="world wide web">WWW</abbr>'))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"hr")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"表示故事走向的转变或话题的转变")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"\x3c!-- ",Object(n.b)("inlineCode",{parentName:"td"},"p")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"段落、额外注释  html 中没有 note相关语义标签，所以用",Object(n.b)("inlineCode",{parentName:"td"},'<p class="note">')," --\x3e")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"strong")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"重要的词")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"blockquote，q，cite")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"都表示引述，blockquote 段落级引述 q 行内引述内容，cite 是引述的作品名")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"time")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"让机器阅读日期，属性 datetime 有格式要求")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"figure"),"、",Object(n.b)("inlineCode",{parentName:"td"},"figcaption")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"表示与主文章相关的图片、照片等流内容，不仅限图片，代码、表格等，只要是具有一定自包含性(类似独立句子)的内容，都可以用figure。  ",Object(n.b)("inlineCode",{parentName:"td"},'<figure><img src="xx.JPG"/> <figcaption>The NeXT Computer used by Tim Berners-Lee at CERN.</figcaption> </figure>'))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"dfn")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"包裹定义的名词  ",Object(n.b)("inlineCode",{parentName:"td"},"the <dfn>World Wide Web</dfn> is a global collection of documents and other resources。"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"nav"),"、",Object(n.b)("inlineCode",{parentName:"td"},"ol"),"、",Object(n.b)("inlineCode",{parentName:"td"},"ul")),Object(n.b)("td",r({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"pre")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"预先排版过的，不需要浏览器进行排版")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"samp")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"用于标识计算机程序输出，如代码示例 ",Object(n.b)("inlineCode",{parentName:"td"},"<pre><samp> GET /home.html HTTP/1.1 Host: www.example.org </samp></pre>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"code")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"包裹代码   ",Object(n.b)("inlineCode",{parentName:"td"},"<pre><code></code></pre>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"small")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"代表注释，如免责声明、版权声明等，对理解文档不重要。")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"s")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"之前表示划线的废弃标签，html表示不准确或不相关的内容，常用语打折的价格")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"i")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"之前表示斜体的废弃标签，html5 表示读音变调")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"b")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"之前表示黑体的废弃标签，html5 表示关键字")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"u")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"之前表示下划线的废弃标签，html5 表示避免歧义的注记")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",r({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"var")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"变量，用于计算机和数学领域")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"kbd")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"用户输入，表示键盘按键居多 ",Object(n.b)("inlineCode",{parentName:"td"},"<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"sub")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"下标，多用于化学、物理、数学领域")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"sup")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"上标，多用于化学、物理、数学领域")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"}),Object(n.b)("inlineCode",{parentName:"a"},"bdi"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"双向隔离元素，告诉浏览器的双向算法将其包含的文本与其周围文本隔离开来，dir默认是auto，不继承，相当于自动识别方向。双向文本是包含LTR和RTL的文本，例如嵌入在英语字符串中的阿拉伯语引号。浏览器实现Unicode双向算法来处理这个问题。在该算法中，字符被赋予隐式方向性：例如，拉丁字符被视为LTR，而阿拉伯字符被视为RTL。其他一些字符（例如空格和一些标点符号）被视为中性字符，并根据其周围字符的方向指定方向性。通常，双向算法将做正确的事情，但偶尔，算法需要帮助。",Object(n.b)("inlineCode",{parentName:"td"},'<li><bdi class="name">François fatale</bdi>: 2nd place</li>'))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo"}),Object(n.b)("inlineCode",{parentName:"a"},"bdo"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"覆盖文本的当前方向性，属性 dir:",Object(n.b)("inlineCode",{parentName:"td"},"ltr"),"、",Object(n.b)("inlineCode",{parentName:"td"},"rtl"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"mark")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"高亮或标记，如标记用户感兴趣的文本")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"wbr")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"表示可以换行的位置，因为英文等文字不允许单词中间换行，一般在多个单词粘成很长的单词时使用。")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"menu")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"ul的变体，用于功能菜单时使用")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"dl"),"、",Object(n.b)("inlineCode",{parentName:"td"},"dd"),"、",Object(n.b)("inlineCode",{parentName:"td"},"dt")),Object(n.b)("td",r({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"main")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"整个页面只出现一次，表示页面的主要内容")))),Object(n.b)("p",null,"完整的HTML元素列表:",Object(n.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list"}),"https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list"),"。"),Object(n.b)("p",null,"HTML这种语言，并不像严谨的编程语言一样，有一条非此即彼的线。一些语义的使用其实会带来 争议，所以尽量只用自己熟悉的语义标签，并且只在有把握的场景引入语义标签。这样，才能保证语义标签不被滥用，造成更多的问题。"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"链接"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#链接"}),"#"),"链接"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"替换型元素"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#替换型元素"}),"#"),"替换型元素"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"表单"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#表单"}),"#"),"表单"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"表格"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#表格"}),"#"),"表格"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"总集"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#总集"}),"#"),"总集"),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"语言"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#语言"}),"#"),"语言"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"实体"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#实体"}),"#"),"实体"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"命名空间"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#命名空间"}),"#"),"命名空间"),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"补充标准"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#补充标准"}),"#"),"补充标准"),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"面试题"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#面试题"}),"#"),"面试题"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"doctype有什么用？"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#doctype有什么用？"}),"#"),"DOCTYPE有什么用？"),Object(n.b)("p",null,"DOCTYPE(",Object(n.b)("inlineCode",{parentName:"p"},"document type"),")告诉浏览器用那种模式来渲染页面。它可以声明三种 DTD 类型。分别是标准模式、过度版本和基于框架的 HTML 文档。"),Object(n.b)("p",null,"这是历史原因导致的，最初浏览器渲染页面没有统一的方式，叫做混杂模式(quirks mod)。W3C 标准化后，有了统一的渲染方式，即标准模式(严格模式)。但是为了保证之前的页面正常显示，所以浏览器保留了这两种渲染方式(标准兼容模式)。具体采用哪种方式渲染，就要看 DOCTYPE 中的 DTD。"),Object(n.b)("p",null,"DTD(Document Type Definition) 是一套为了数据交换而建立的标记符的语法规范，可以通过文档类型定义文件来检查文档是否符合规范，元素和标签使用是否正确。"),Object(n.b)("p",null,"标准模式下，浏览器以支持最高的标准渲染页面。混杂模式下，页面以宽松的向后兼容模式显示，防止老站点无法工作。"),Object(n.b)("p",null,"如果XHTML、HTML 4.01 文档包含形式完整的 DOCTYPE，那么它以标准模式呈现。包含过渡 DTD 和 URI 的 DOCTYPE 也会以标准模式呈现，有过渡 DTD ，没有 URI 的页面会以混杂模式呈现，DOCTYPE 不存在或形式不正确会导致文档以混杂模式显示。"),Object(n.b)("p",null,"html5 没有 DTD，没有标准模式和混杂模式区分。语法相对宽松，已经尽可能实现向后兼容。"))}p.isMDXComponent=!0},217:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},p=function(e){var t=e.components,a=e.mdxType,n=e.originalType,b=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),i=l(t);return r.a.createElement(i[b+"."+a]||i[a]||d[a]||n,t?Object.assign({},c,{components:t}):c)};function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[i]="string"==typeof e?e:n,l[1]=c;for(var m=2;m<b;m++)l[m]=a[m];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);