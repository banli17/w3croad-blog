(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{179:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",function(){return i}),t.d(e,"rightToc",function(){return p}),t.d(e,"default",function(){return s});t(0);var a=t(217);function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i={title:"react-native loading动画",date:new Date("2019-02-09T05:10:29.000Z"),toc:!0},p=[{value:"Loading加载动画的统一处理",id:"loading加载动画的统一处理",children:[{value:"Middleware代码",id:"middleware代码",children:[]}]}],d={rightToc:p},l="wrapper";function s(n){var e=n.components,t=o(n,["components"]);return Object(a.b)(l,r({},d,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",null,Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"loading加载动画的统一处理"})),Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#loading加载动画的统一处理"}),"#"),"Loading加载动画的统一处理"),Object(a.b)("p",null,"当页面发生跳转的时候，动画的同时往往新页面会动态ajax请求数据并且渲染，这个时候可能发生卡顿现象。为了更好的用户体验，可以在新页面请求数据的时候加载一个loading效果，因为这个loading很小，而且没有远程数据，所以跳转不会卡顿。请求完数据后新页面渲染数据，这时页面切换动画往往已经完成了，所以用户体验比较好。"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"最初我做第一个app的时候是封装了一个加载组件，然后在每个页面判断是否渲染这个加载组件。这样处理起来十分复杂，每个页面都要写这个判断代码。"),Object(a.b)("li",{parentName:"ol"},"后来我在每个页面外层加了一层容器Container。在Container里面处理网络请求和数据处理，处理完成后传递给页面组件。大致代码如下：")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'// page1\nclass Page1 extends Component{\n    constructor(){\n        this.state = {\n            pageData:[]\n        }\n    }\n\n    onData = (pageData)=>{\n        this.setState({\n            pageData\n        })\n    }\n\n    render(){\n        <Container fetchApi="api.get()" onData={this.onData}>\n            <View data={pageData}></View>\n        </Container>\n    }\n}\n\n// Container\nclass Container extends Component{\n    constructor(props){\n        super(props)\n        this.state = {\n            loading: true\n        }\n    }\n\n    componentDidMount = async()=>{\n        let res = await this.props.fetchApi()\n        if(res){\n            this.props.onData(res.data)\n            this.setState({\n                loading: true\n            })\n        }\n    }\n\n    render(){\n        if(this.state.loading) return <Loading /> \n\n        return <View>\n            {this.props.children}\n        </View>\n    }\n}\n')),Object(a.b)("p",null,"这样就可以在请求数据的时候加载",Object(a.b)("inlineCode",{parentName:"p"},"<Loading/>"),"或者加载网络错误等，得到数据后再渲染页面了。"),Object(a.b)("p",null,"但是上面的方案在我们项目中使用的比较烦，因为后端返回的数据格式有时候不太固定，而且还有一些可能cookie失效退出登陆等问题。所以我又在container组件上加了几个处理数据的函数。"),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"最近momo研究了一下",Object(a.b)("inlineCode",{parentName:"li"},"recompose"),"，发现了一个与方案二类似的方法，不是通过",Object(a.b)("inlineCode",{parentName:"li"},"<Container />"),"来套组件，而是通过中间层的传递。测试了一下，用户体验貌似还不错。准备全部切换到这种方法，当然我的很多页面业务逻辑都比较复杂，不知道使用起来方便不，最近这段时间边改边完善这篇文章。")),Object(a.b)("p",null,"刚开始看momo用",Object(a.b)("inlineCode",{parentName:"p"},"recompose"),"感觉很不适应，代码如下："),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"class A extends Component{\n    render(){\n        return <Text>hello</Text>\n    }\n}\n\nlet middlewareDidMount = (dispatch, props) => {\n    mineApi.balanceWithDrawInfo().then(data => {\n        if (data) {\n            // 设置state\n            props.setState({\n                withdrawInfo: data.data,\n            })\n        }\n    }).catch(e => {\n\n    })\n}\n\nlet middlewareDidUpdate = (nextProps, nextState, dispatch, props) => {\n    if (nextProps.a != props.a) {\n        props.hideLoading()\n    }\n}\n\nexport default rootHoc = compose(\n    setStatic(\n        \"options\",\n        (passProps) => {\n            return {\n                topBar: {\n                    title: {\n                        text: '标题'\n                    }\n                }\n            }\n        }\n    ),\n    withStateHandlers(\n        () => ({\n            withdrawInfo: null\n        }),\n        {\n            setState: () => (args) => ({...args})\n        }\n    ),\n    connect(state => ({\n        userInfo: state.userInfo\n    })),\n    Middleware({middlewareDidMount, middlewareDidUpdate})\n)(A)\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"setStatic"),"设置页面的标题，",Object(a.b)("inlineCode",{parentName:"p"},"withStateHandlers"),"是设置state的一些处理，",Object(a.b)("inlineCode",{parentName:"p"},"connect"),"是redux。",Object(a.b)("inlineCode",{parentName:"p"},"Middleware"),"是一个中间件，它会在",Object(a.b)("inlineCode",{parentName:"p"},"props.hideLoading()"),"调用的时候消失，显示真正的页面。"),Object(a.b)("p",null,"它整体的思想就是一层层的嵌套组合组件，形成高阶组件如",Object(a.b)("inlineCode",{parentName:"p"},"fn(fn(fn(Component)))"),"，通过fn给组件加参数或方法，这个库还是很不错的，可以去学学。"),Object(a.b)("p",null,"后来学习了一下",Object(a.b)("inlineCode",{parentName:"p"},"recompose"),"感觉上面的写法还好，也就将就的接受了，不过最后还是推荐将上面的",Object(a.b)("inlineCode",{parentName:"p"},"compose"),"封装成对象传参数的方式。这样它的流程逻辑就不需要在每个页面都写了。"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"composexx({\n    static: {},\n    state:{},\n    connect:{},\n    middlewareDidMount:()=>{},\n    middlewareDidUpdate:()=>{},\n})\n")),Object(a.b)("p",null,"个人感觉封装一下还是可以的，但是momo不肯。我现在也不想仔细去研究，因为任务多心情又烦，所以就没有弄了。"),Object(a.b)("h3",null,Object(a.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"middleware代码"})),Object(a.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#middleware代码"}),"#"),"Middleware代码"),Object(a.b)("p",null,"下面是",Object(a.b)("inlineCode",{parentName:"p"},"Middleware"),"的代码。"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React, {Component} from \'react\';\nimport {\n    RefreshControl,\n    Image,\n    View\n} from \'react-native\'\nimport {connect} from "react-redux"\nimport {Container,Content} from "native-base";\nimport {withHandlers,compose, branch,withState,renderComponent,setStatic,withStateHandlers } from "recompose";\n\nclass MiddlewareComponent extends Component {\n    constructor(props) {\n        super(props);\n    }\n\n    componentDidMount() {\n        this.props.middlewareDidMount(this.props.dispatch);\n    }\n\n    shouldComponentUpdate(nextProps, nextState) {\n        return true;\n    }\n\n    componentDidUpdate(nextProps, nextState) {\n        this.props.middlewareDidUpdate(nextProps,nextState,this.props.dispatch);\n    }\n\n    render() {\n        return (\n            <Container>\n                <Content style={{backgroundColor: "#efeff4"}}\n                         refreshControl={\n                             <RefreshControl\n                                 refreshing={true}\n                                 colors={[THEME.m_color_primary]}\n                                 onRefresh={() => {\n                                 }}\n                             />}\n                >\n                </Content>\n            </Container>\n        )\n    }\n}\n\nfunction defaultMiddlewareDidMount(dispatch, props) {\n    setTimeout(() => {\n        props.hideLoading();\n    }, 500);\n}\n\nfunction defaultMiddlewareDidUpdate(nextProps, nextState, dispatch, props) {\n\n}\n\nexport default Middleware = ({middlewareDidMount = defaultMiddlewareDidMount,middlewareDidUpdate = defaultMiddlewareDidUpdate} = {})=> compose(\n        withStateHandlers(\n            () => ({\n                isLoading: true,\n            }),\n            {\n                showLoading: () => () => ({isLoading: true}),\n                hideLoading: () => () => ({isLoading: false})\n            }\n        ),\n        withHandlers({\n            middlewareDidMount: props => (...args) =>{\n                middlewareDidMount(...args,props);\n            },\n            middlewareDidUpdate: props => (...args) =>{\n                middlewareDidUpdate(...args,props);\n            }\n        }),\n        branch(\n            ({isLoading}) => (isLoading),\n            renderComponent(MiddlewareComponent)\n        )\n    );\n')))}s.isMDXComponent=!0},217:function(n,e,t){"use strict";t.d(e,"a",function(){return p}),t.d(e,"b",function(){return c});var a=t(0),r=t.n(a),o=r.a.createContext({}),i=function(n){var e=r.a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):Object.assign({},e,n)),t},p=function(n){var e=i(n.components);return r.a.createElement(o.Provider,{value:e},n.children)},d="mdxType",l={inlineCode:"code",wrapper:function(n){return r.a.createElement(r.a.Fragment,{},n.children)}},s=function(n){var e=n.components,t=n.mdxType,a=n.originalType,o=n.parentName,p=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&-1===e.indexOf(a)&&(t[a]=n[a]);return t}(n,["components","mdxType","originalType","parentName"]),d=i(e);return r.a.createElement(d[o+"."+t]||d[t]||l[t]||a,e?Object.assign({},p,{components:e}):p)};function c(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p[d]="string"==typeof n?n:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);